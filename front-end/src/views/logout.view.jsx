import { Navigate } from "react-router-dom";

export default function LogOutView(props){
    const {userSetter} = props
    userSetter(null)
    return (
        <Navigate to={'/'}/>
    )
}