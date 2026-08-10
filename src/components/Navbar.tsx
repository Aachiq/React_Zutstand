import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Navbar() {

    const user = useAuthStore(state => state.user);

    console.log('user navbar :', user)
    const logout = useAuthStore(state => state.logout);

    const navigate = useNavigate()

    return (
        <nav style={{background: 'lightgray', padding: '5px'}}>
            <h4>Branding</h4>
            {
                user ?
                    (
                        <>
                            <span> Welcome {user.name}</span>
                            <button onClick={logout}> Logout </button>
                        </>
                    )
                    :
                    (
                        <button onClick={() => navigate('/login')}> Login </button>
                    )
            }
        </nav>
    );
}
export default Navbar;