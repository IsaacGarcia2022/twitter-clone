import BtnTweetComposer from "./BtnTweetComposer"
export default function Tweet(){
    return(
        <div className="flex flex-col border-t-[0.01px] border-b-[0.01px] border-t-gray-400/75 border-b-gray-400/75">
            <div className="flex">
                <img class="w-10 h-10 rounded-full" src="/src/assets/react.svg" alt="Rounded avatar"/>
                <div className="flex flex-col">
                    <div className="flex justify-between m-0 p-0">
                        <span className="flex items-center">
                        <h1>El vato Loco</h1>
                        <h4>@El vato loco</h4>
                        <p>10h</p>
                        </span>
                        <span className="flex">
                            <BtnTweetComposer sizeIcon={"size-5" } nameIcon={"#icon-grok"}/>
                            <BtnTweetComposer sizeIcon={"size-5" } nameIcon={"#icon-more-horizontal"}/>
                        </span>
                    </div>
                    <p>El motociclista promedio conduciendo en las calles de El Salvador diariamente. (Eso pasó en chapinlandia).</p>
                </div>
            </div>
            <div className="flex flex-col items-start pl-10">
                <img class="w-100 h-100 border rounded-3xl" src="/src/assets/react.svg" alt="Rounded avatar"/>
                <p>De El vato loco</p>
            </div>
            <div className="flex">
                <span className="flex items-center">
                    <BtnTweetComposer sizeIcon={"size-5"} nameIcon={"#icon-coment"} color={"text-gray-500"}/>
                    <span className="text-sm -ml-2 text-gray-500">125</span>
                </span>
                
                <span className="flex items-center">
                    <BtnTweetComposer sizeIcon={"size-5"} nameIcon={"#icon-rt"} color={"text-gray-500"}/>
                    <span className="text-sm -ml-2 text-gray-500">125</span>
                </span>
            </div>
        </div>
    )
}