import { useDispatch } from "react-redux"
import { logout } from "../features/userSlice"

export default function Logout() {

    const dispatch = useDispatch()
        
    return (
        <button onClick={(() => dispatch(logout()))}>Logout</button>
    )
}