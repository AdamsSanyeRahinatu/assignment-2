import {useState} from "react";
function Counter() {
    const [count, setcount]=useState(2)
    return(
        <div className="bus">
            <button onClick={() => setcount(count+2)}>add</button>
            <div>count:{count}</div>
            <button onClick={() => setcount(count-4)}>minus</button>
        </div>
    )
}
export default Counter;