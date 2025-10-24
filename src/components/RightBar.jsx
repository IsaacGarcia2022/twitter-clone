export default function Rightbar() {
  return (
    <div className="flex flex-col items-center bg-black border-l-[0.01px] border-l-gray-400/75 shadow h-full">
      <div class="sticky top-0 flex items-center justify-center bg-black z-20 w-11/12 h-13">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="size-6 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <use href="#icon-search"></use>
          </svg>
        </div>
        <input input type="text" id="search" class="bg-black text-white border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-full block w-full ps-10 p-1.5"
        placeholder="Buscar">
        </input>
      </div>
      <div className="flex flex-col items-start border w-11/12 mt-2 p-2 rounded-2xl border-gray-500">
        <h2 className="text-2xl font-bold mb-1">Suscribete a Premium</h2>
        <p className="mt-0 font-light text-sm" >Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos. </p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600">
          Suscribirse
        </button>
      </div>

      <div className="flex flex-col items-start border w-11/12 mt-2 p-2 rounded-2xl border-gray-500">
        <h2 className="text-2xl font-bold mb-2 w-full">Qué está pasando</h2>
        <ul className="space-y-2 text-white-700 text-sm w-full">
          <li className="flex flex-col">
            <div className="flex items-end justify-between">
              <span className="font-light text-[11px]">Tendencia en El Salvador</span>
              <button className="flex items-center p-1 size-6 transition-colors duration-200 text-gray-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
                <svg className="size-6">
                 <use href="#icon-more-horizontal" />
                </svg>
            </button>
            </div>
            <span className="font-bold text-xl">Nayib Bukele</span>
            <span className="font-light text-[11px]">1360 publicaciones</span>
          </li>
          <li className="flex flex-col">
            <div className="flex items-end justify-between">
              <span className="font-light text-[11px]">Tendencia en El Salvador</span>
              <button className="flex items-center p-1 size-6 transition-colors duration-200 text-gray-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
                <svg className="size-6">
                <use href="#icon-more-horizontal" />
              </svg>
            </button>
            </div>
            <span className="font-bold text-xl">Schafick Handal</span>
            <span className="font-light text-[11px]">800 publicaciones</span>
          </li>
          <li className="flex flex-col">
            <div className="flex items-end justify-between">
              <span className="font-light text-[11px]">Tendencia en El Salvador</span>
              <button className="flex items-center p-1 size-6 transition-colors duration-200 text-gray-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
                <svg className="size-6">
                <use href="#icon-more-horizontal" />
              </svg>
            </button>
            </div>
            <span className="font-bold text-xl">Manuel Ortega</span>
            <span className="font-light text-[11px]">1500 publicaciones</span>
          </li>
          <li className="flex flex-col">
            <div className="flex items-end justify-between">
              <span className="font-light text-[11px]">Tendencia en El Salvador</span>
              <button className="flex items-center p-1 size-6 transition-colors duration-200 text-gray-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
                <svg className="size-6">
                  <use href="#icon-more-horizontal" />
                </svg>
              </button>
            </div>
            <span className="font-bold text-xl">Claudia Lars</span>
            <span className="font-light text-[11px]">250 publicaciones</span>
          </li>
          <li className="flex flex-col">
            <div className="flex items-end justify-between">
              <span className="font-light text-[11px]">Tendencia en El Salvador</span>
              <button className="flex items-center p-1 size-6 transition-colors duration-200 text-gray-500 hover:text-blue-500 text-center rounded-full bg-black hover:bg-gray-950 cursor-pointer">
                <svg className="size-6">
                <use href="#icon-more-horizontal" />
              </svg>
            </button>
            </div>
            <span className="font-bold text-xl">San Salvador</span>
            <span className="font-light text-[11px]">100 publicaciones</span>
          </li>
          <li className="mt-4">
            <a href="" className="text-blue-500">Mostrar Mas</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start border w-11/12 mt-2 p-2 rounded-2xl border-gray-500">
        <h3 className="text-lg font-semibold mb-2 w-full">A quien seguir</h3>
        <ul className="space-y-2 text-sm text-white-800 w-full">
          <li className="flex">
              <img class="w-10 h-10 rounded-full" src="/src/assets/react.svg" alt="Rounded avatar">
              </img>
              <div className="flex flex-col ml-1">
                <span className="font-bold">VerdeOlivoSV</span>
                <span className="font-light text-[12px]">@VerdeOlivoSV</span>
              </div>
              <button className="ml-auto flex items-center justify-center h-7 px-4 py-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300">
                Seguir
              </button>
          </li>
          <li className="flex">
              <img class="w-10 h-10 rounded-full" src="/src/assets/react.svg" alt="Rounded avatar">
              </img>
              <div className="flex flex-col ml-1">
                <span className="font-bold">AnaFronted</span>
                <span className="font-light text-[12px]">@AnaFronted</span>
              </div>
              <button className="ml-auto flex items-center justify-center h-7 px-4 py-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300">
                Seguir
              </button>
          </li>
          <li className="flex">
              <img class="w-10 h-10 rounded-full" src="/src/assets/react.svg" alt="Rounded avatar">
              </img>
              <div className="flex flex-col ml-1">
                <span className="font-bold">JuanitoAlcachofa</span>
                <span className="font-light text-[12px]">@JuanitoAlcachofa</span>
              </div>
              <button className="ml-auto flex items-center justify-center h-7 px-4 py-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300">
                Seguir
              </button>
          </li>
          <li className="mt-4">
            <a href="" className="text-blue-500">Mostrar Mas</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
