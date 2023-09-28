import { useState } from "react";

import Button from "./Components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen  text-cyan-50"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg py-3 px-4 bg-white  rounded-xl text-black">
          <button className="outline-none px-5 py-2  rounded-full text-white shadow-lg" style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
          <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
          <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
          <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}} onClick={()=>setColor('black')}>Black</button>
          <button className="outline-none px-5 py-2 rounded-full text-black shadow-lg" style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>Pink</button>
          <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:'orange'}} onClick={()=>setColor('orange')}>Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
