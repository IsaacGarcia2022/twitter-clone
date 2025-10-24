import sprite from '../assets/sprite.svg?raw'

export default function Leftbar() {
  return (
    <div className="flex justify-center p-0 bg-black border-r-[0.01px] border-r-gray-400/75 shadow h-full sticky top-4">
      <div dangerouslySetInnerHTML={{ __html: sprite }} />
      <ul className="space-y-3">
        <li className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min">
          <svg class="size-8">
            <use href="#icon-logo"></use>
          </svg> 
        </li>
        <li>
          <a className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min" href="">
            <svg class="size-6">
              <use href="#icon-home"></use>
            </svg> 
            <span class="hidden lg:inline text-xl ">Inicio</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min" href="">
            <svg class="size-7">
              <use href="#icon-search"></use>
            </svg> 
            <span class="hidden lg:inline text-xl ">Explorar</span>
          </a> 
        </li>
        <li>
          <a className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min" href="">
            <svg class="size-7">
              <use href="#icon-bell"></use>
            </svg> 
            <span class="hidden lg:inline text-xl ">Notificaciones</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min" href="">
            <svg class="size-7">
              <use href="#icon-mail"></use>
            </svg> 
            <span class="hidden lg:inline text-xl ">Mensajes</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-full cursor-pointer w-min" href="">
            <svg class="size-7">
              <use href="#icon-bookmark"></use>
            </svg> 
            <span class="hidden lg:inline text-xl ">Guardados</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
