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

export async function getMarkdownContent(filename: string): Promise<BlogPost> {
  const filePath = path.join(process.cwd(), 'posts', filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter using [\s\S] for cross-version compatibility
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)/;
  const match = fileContent.match(frontmatterRegex);
  
  const frontmatter: Record<string, string> = {};
  let content = fileContent;
  
  if (match) {
    const frontmatterString = match[1];
    content = match[2];
    
    // Parse YAML-like frontmatter
    frontmatterString.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        if (key && value) {
          frontmatter[key] = value;
        }
      }
    });
  }
  
  const htmlContent = await marked(content);
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

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = getAllMarkdownFiles();
  const posts = await Promise.all(files.map(file => getMarkdownContent(file)));
  return posts;
}