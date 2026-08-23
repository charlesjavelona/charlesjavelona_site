export default function BooksPage() {
  return (
    <>
      <h1 className="text-3xl font-normal mb-2">Books</h1>
      <p className="text-muted-foreground mb-10">Books I&apos;ve read</p>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Currently Reading</h2>
        <p>Street Fighting Mathematics</p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Read</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>How to Win Friends and Influence People</li>
          <li>7 Habits of Highly Effective People</li>
          <li>Thank You for Arguing</li>
          <li>The Bezos Blueprint</li>
          <li>How to Decide</li>
          <li>Gap Selling</li>
          <li>The Art of Science and Engineering</li>
          <li>The 4 Agreements</li>
          <li>Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days</li>
          <li>Hooked: How to Build Habit-Forming Products</li>
          <li>The Mom Test</li>
          <li>Actionable Gamification</li>
          <li>The Goal</li>
          <li>Crossing the Chasm</li>
          <li>The Hard Thing About Hard Things</li>
          <li>Thinking in Bets</li>
          <li>Thinking in Systems</li>
          <li>High Output Management</li>
          <li>Mathematics and Plausible Reasoning</li>
          <li>How to Solve It: A New Aspect of Mathematical Method</li>
          <li>Coding the Matrix</li>
          <li>Clean Code 2nd Edition</li>
          <li>Mythical Man Month</li>
        </ol>
        <p className="text-muted-foreground text-sm mt-4">... more to come</p>
      </section>
    </>
  )
}
