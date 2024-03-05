import { Navigate, Outlet } from "react-router-dom"
import Cookies from "universal-cookie"

const ProtectedRoute = () => {
    const cookies = new Cookies()
    let user = cookies.get('user')
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedRoute
