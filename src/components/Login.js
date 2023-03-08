import { useDispatch } from "react-redux"
import {login} from '../features/userSlice'


export default function Login() {

    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(login({
                name: 'Pedro', 
                age: 47, 
                email: 'pedro.pascal@gmail.com'
                })
            )}>Log In</button>
        </div>
    )
}