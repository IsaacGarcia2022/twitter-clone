import TweetComposer from '../components/TweetComposer'
import Tweet from '../components/Tweet'

export default function HomePage() {
  return (
    <div className='flex flex-col h-full'>
      <header className="sticky top-0 bg-black py-3 border-b-[0.01px] border-b-gray-400/75">
        <h2 className="text-xl font-bold">Inicio</h2>
      </header>
      <section>
        <TweetComposer />
      </section>
      <section className='h-full bg-black'>
      <Tweet/>
      </section>
    </div>
  )
}
