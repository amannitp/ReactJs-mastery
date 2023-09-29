import { useState,useCallback } from "react"

function App() {
 const [passwordLength,setPasswordLength]= useState(8);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [charAllowed,setCharAllowed]=useState(false);
 const [password,setPassword]=useState()
 
 const passwordGenerator=useCallback(()=>{

  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  if(numberAllowed) str+='0123456789'
  if(charAllowed)   str+='!@#$%^&*()}{[]'

  for (let i = 1; i <=passwordLength; i++) {
    
    let char=Math.floor(Math.random*str.length+1);
    pass+=str.charAt(char)
    
  }
  setPassword(pass)

 },[passwordLength,numberAllowed,charAllowed,setPassword])

  return (
    
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
     <h1 className="text-center text-white text-lg mb-3"> Password</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-100">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        readOnly
        />
      </div>
     </div>
  
  )
}

export default App
