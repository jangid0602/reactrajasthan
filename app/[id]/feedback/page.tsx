export default function Page({ params }: { params: { id: string } }){
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold">Feedback for {params.id}</h1>
      <p className="mt-2 text-white/70">Form TBD — migrate from the React version.</p>
    </div>
  )
}
