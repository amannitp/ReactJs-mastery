import { useState, useCallback } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()}{[]";

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passwordLength, numberAllowed, charAllowed, setPassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white text-lg mb-3"> Password</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-100">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-2 px-3"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={passwordLength}
            className="cursor-pointer"
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
          <label>Length:{passwordLength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
           <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
           <label>Characters</label>
        </div>

      </div>
    </div>
  );
}

export default App;
