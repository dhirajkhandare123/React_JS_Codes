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