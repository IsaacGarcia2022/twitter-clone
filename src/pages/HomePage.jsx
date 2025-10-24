import TweetComposer from '../components/TweetComposer'

export default function HomePage() {
  return (
    <div className='flex flex-col h-screen'>
      <header className="sticky top-0 bg-black py-3 border-b-[0.01px] border-b-gray-400/75">
        <h2 className="text-xl font-bold">Inicio</h2>
      </header>

      <section className="">
        <TweetComposer />
      </section>
    </div>
  )
}
