import { useAuthStore } from "../store/authStore";

function Navbar() {

    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);

    return (
        <nav>
            <h2>Branding</h2>
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
                        <button> Login </button>
                    )
            }
        </nav>
    );
}
export default Navbar;