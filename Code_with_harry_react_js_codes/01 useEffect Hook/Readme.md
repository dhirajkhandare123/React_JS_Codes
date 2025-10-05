import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return(
    <>
        <button onClick={()=>{setCount(count+1)}}>Update</button>
        <h1>{count}</h1>
    </>
  )
}
 
export default App

<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/d180b8a5-3648-4f78-9c11-95a0cc7bf3b1" />

