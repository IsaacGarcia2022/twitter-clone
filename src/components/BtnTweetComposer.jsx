export default function BtnTweetComposer({sizeIcon, nameIcon, color = "text-blue-500"}){
    return(
        <button className={`flex items-center p-3 transition-colors duration-200 text-center rounded-full bg-black hover:bg-blue-950 cursor-pointer ${color}`}>
            <svg className={sizeIcon}>
                <use href={nameIcon}/>
            </svg>
        </button>        
    )
}