import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from '../features/colorSlice'


export default function ChangeColor() {

    const [color, setColor] = useState('')
    const dispatch = useDispatch()

    function handleInput(e) {
        setColor(e.target.value)
    }

    return(
        <div className='color-change'>
            <input onChange={handleInput} type='text' placeholder='Color name...' />
            <button onClick={()=>dispatch(changeColor(color))}>Change Color</button>
        </div>
    )
}