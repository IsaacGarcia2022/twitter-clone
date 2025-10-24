export default function TweetCard({ tweet }) {
  return (
    <article className="p-4 bg-white border-b">
      <div className="flex gap-3">
        <img src={tweet.avatar} className="w-11 h-11 rounded-full" alt="avatar"/>
        <div>
          <div className="font-semibold">{tweet.name} <span className="text-sm text-gray-500">@{tweet.handle}</span></div>
          <p className="mt-1">{tweet.text}</p>
        </div>
      </div>
    </article>
  )
}
