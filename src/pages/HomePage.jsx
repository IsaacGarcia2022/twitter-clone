import TweetComposer from '../components/TweetComposer'

export default function HomePage() {
  return (
    <div>
      <header className="sticky top-0 bg-black py-3 border-b">
        <h2 className="text-xl font-bold">Inicio</h2>
      </header>

      <section className="mt-4">
        <TweetComposer />
      </section>
    </div>
  )
}
