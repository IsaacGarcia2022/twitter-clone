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
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-multimedia" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-gif" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-grok" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-encuesta" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-emoji" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-programacion" />
            </svg>
          </button>
          <button className="flex items-center p-3 transition-colors duration-200 text-blue-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
            <svg className="size-6">
             <use href="#icon-ubicacion" />
            </svg>
          </button>
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full">
        Twittear
      </button>
      </div>
    </div>
  )
}
