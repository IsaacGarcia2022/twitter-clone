export default function Rightbar() {
  return (
    <div className="p-2 bg-black border-l-[0.01px] border-l-gray-400/75 shadow h-full sticky top-4">
      <div class="sticky top-0 bg-black">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg class="size-6 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <use href="#icon-search"></use>
          </svg>
        </div>
        <input input type="text" id="search" class="bg-black text-white border border-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-full block w-full ps-10 p-1.5"
        placeholder="Buscar">
        </input>
      </div>
      <h2 className="text-xl font-bold mb-4">Qué está pasando</h2>
      <ul className="space-y-3 text-white-700 text-sm">
        <li>#ReactJS</li>
        <li>#Vite</li>
        <li>#TailwindCSS</li>
        <li>#Frontend</li>
        <li>#JavaScript</li>
      </ul>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Personas a seguir</h3>
        <ul className="space-y-2 text-sm text-white-800">
          <li>@isaac_dev</li>
          <li>@ana_frontend</li>
          <li>@dev_jr</li>
        </ul>
      </div>
    </div>
  )
}
