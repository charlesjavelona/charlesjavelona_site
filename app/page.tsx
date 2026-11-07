
export default function Page() {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-normal mb-16 tracking-tight leading-tight">
        Building at the intersection of research and applied science
      </h1>

      <dl className="grid grid-cols-[auto_1fr] gap-x-12 gap-y-8">
        <dt className="text-xs uppercase tracking-widest text-muted-foreground pt-0.5">Currently:</dt>
        <dd>Accelerating the adoption of AI at Sozo AI</dd>

        <dt className="text-xs uppercase tracking-widest text-muted-foreground pt-0.5">Past:</dt>
        <dd>Accelerated robot adoption at TinyMile Robotics</dd>

        <dt className="text-xs uppercase tracking-widest text-muted-foreground pt-0.5">Reading:</dt>
        <dd>Street-Fighting Mathematics, and everything about KANS and how the brain works</dd>

        <dt className="text-xs uppercase tracking-widest text-muted-foreground pt-0.5">Independent Research:</dt>
        <dd>WIP</dd>

      </dl>
    </>
  )
}
