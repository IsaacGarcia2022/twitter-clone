import BtnTweetComposer from "./BtnTweetComposer"
export default function TweetComposer() {
  return (
    <div className="flex flex-col p-4 bg-black rounded-md shadow-sm">
      <div className='flex w-full'>
        <img class="w-10 h-10 rounded-full" src="/src/assets/react.svg" alt="Rounded avatar">
        </img>
        <textarea
          id="tweet"
          rows="1"
          class="bg-transparent placeholder-gray-500 text-white text-xl
                focus:outline-none focus:ring-0 focus:border-0
                block w-full resize-none overflow-hidden p-2.5"
          placeholder="¿Qué está pasando?"
        >
        </textarea>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full ml-10">
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-multimedia"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-gif"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-grok"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-encuesta"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-emoji"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-programacion"}/>
          <BtnTweetComposer sizeIcon={"size-6" } nameIcon={"#icon-ubicacion"}/>
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full">
          Postear
        </button>
      </div>
    </div>
  )
}
