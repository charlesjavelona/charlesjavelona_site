// lib/markdown.ts
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export function getMarkdownContent(filename: string): BlogPost {
  const filePath = path.join(process.cwd(), 'posts', filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)/s;
  const match = fileContent.match(frontmatterRegex);
  
  let frontmatter: any = {};
  let content = fileContent;
  
  if (match) {
    const frontmatterString = match[1];
    content = match[2];
    
    // Simple YAML parser for basic frontmatter
    frontmatterString.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        frontmatter[key.trim()] = valueParts.join(':').trim();
      }
    });
  }
  
  const htmlContent = marked(content);
  const slug = filename.replace('.md', '');
  
  return {
    title: frontmatter.title || slug,
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    content: htmlContent,
    slug
  };
}

export function getAllMarkdownFiles(): string[] {
  const contentDir = path.join(process.cwd(), 'posts');
  return fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
}

export function getAllBlogPosts(): BlogPost[] {
  const files = getAllMarkdownFiles();
  return files.map(file => getMarkdownContent(file));
}