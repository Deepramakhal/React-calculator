/*eslint-disable*/
import React,{useState} from 'react'
import { Parser } from 'expr-eval';

const parser = new Parser();

function Calculator() {
const [value, setvalue] = useState("");
const sqrt = Math.sqrt(value);

const backspace = () =>{
try {
    setvalue(value.slice(0,-1))
} catch (error) {
    setvalue("")
}
}

const calculate = () =>{
try {
    setvalue(parser.evaluate(value))
} catch (error){
    setvalue("Error")
}
}

return (
<>
    <div className='w-screen h-screen flex justify-center items-center z-[1]'>
    <div id="calculator-box" className='w-screen h-[70%] m-4 md:w-[40%] md:min-h-64 flex flex-wrap justify-around items-center p-4 bg-[#212121] rounded-lg'>
        <input type="text" className='w-[95%] h-[20%] rounded-lg mb-auto m-4 text-right text-4xl font-bold px-2 bg-no-repeat' value={value}
        onChange={(e)=>setvalue(e.target.value)} 
        />
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#fa8c55] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='' onClick={()=>backspace()}>C/CE</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#fa8c55] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value={value} onClick={(e)=>{setvalue(e.target.value*e.target.value)}}>x²</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#fa8c55] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value={sqrt} onClick={(e)=>{setvalue(e.target.value)}}>√</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#fa8c55] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='/' onClick={(e)=>{setvalue(value + e.target.value)}}>/</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(#fa8c55,white)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='9' onClick={(e)=>{setvalue(value + e.target.value)}}>9</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(#fa8c55,white)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='8' onClick={(e)=>{setvalue(value + e.target.value)}}>8</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(#fa8c55,white)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='7' onClick={(e)=>{setvalue(value + e.target.value)}}>7</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(#fa8c55,white)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='*' onClick={(e)=>{setvalue(value + e.target.value)}}>*</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[white] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='6' onClick={(e)=>{setvalue(value + e.target.value)}}>6</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[white] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='5' onClick={(e)=>{setvalue(value + e.target.value)}}>5</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[white] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='4' onClick={(e)=>{setvalue(value + e.target.value)}}>4</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[white] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='-' onClick={(e)=>{setvalue(value + e.target.value)}}>-</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(white,#34b84a)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='3' onClick={(e)=>{setvalue(value + e.target.value)}}>3</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(white,#34b84a)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='2' onClick={(e)=>{setvalue(value + e.target.value)}}>2</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(white,#34b84a)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='1' onClick={(e)=>{setvalue(value + e.target.value)}}>1</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[linear-gradient(white,#34b84a)] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='+' onClick={(e)=>{setvalue(value + e.target.value)}}>+</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#34b84a] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='0' onClick={(e)=>{setvalue(value + e.target.value)}}>0</button>
        <button className='w-[22%] h-[10%] rounded-2xl bg-[#34b84a] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-500'
        value='.' onClick={(e)=>{setvalue(value + e.target.value)}}>.</button>
        <button className='w-[44%] h-[10%] rounded-2xl bg-[#34b84a] hover:scale-110 active:bg-blue-600 p-2 active:text-white text-2xl font-bold border-2 hover:border-orange-400'
        value='=' onClick={()=>calculate()}>=</button>
    </div>
    </div>
</>
)
}

export default Calculator