import { useState } from 'react'

export default function TweetComposer() {
  const [text, setText] = useState('')

  const handleTweet = () => {
    if(!text) return
    console.log('Nuevo tweet:', text)
    setText('')
  }

  return (
    <div className="p-4 bg-black rounded-md shadow-sm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué está pasando?"
        className="w-full border-none focus:ring-0 resize-none"
        rows={3}
      />
      <button onClick={handleTweet} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full">
        Twittear
      </button>
    </div>
  )
}
