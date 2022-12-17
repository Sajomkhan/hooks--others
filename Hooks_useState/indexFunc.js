import React, {useState} from 'react'

export default function Hooks_useState_func() {   
    
    const [count, setCount] = useState(0)
    const handelIncrement = () => {
        setCount(count + 1)
    }
        return (            
            <div className='hooks'>
                <h1>Count: {count}</h1>
                <button onClick={handelIncrement} >Increment</button>
                
            </div>
        )    
}