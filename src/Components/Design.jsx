import {useState} from "react"

function Design (){
    const [color,setColor] = useState(false)
    // Handle ON Button
    const handleOnButton = () => {
        setColor(true)
    }
    const handleOffButton = () => {
        setColor(false)
    }
    return <div>
        <div  className="ml-[450px] mt-[80px]">
            <div style={{ backgroundColor:color == true ? "yellow" : " " }} className=" w-[300px] rounded-full h-[300px] border-[6px] border-solid border-black mb-[20px]"></div>
            <button style={{ backgroundColor: color ==true ? "blue" : " "}} onClick={handleOnButton} className="bg-orange-500 rounded-[10px]  ml-[50px] w-[100px] h-[50px] text-[20px] font-semibold hover:border-2 hover:border-solid hover:border-black hover:bg-white"> ON </button>
            <button style={{ backgroundColor: color ==false ? "blue" : " "}} onClick={handleOffButton} className="bg-orange-500  rounded-[10px] w-[100px] h-[50px] text-[20px] font-semibold hover:border-2 hover:border-solid hover:border-black ml-[10px] hover:bg-white"> OFF</button>
        </div>
    </div>
}
export default Design