import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function ProtectedRoute() {
  const user = useAuthStore((state) => state.user);
  console.log('### user ### :', user)
  if (!user) {
      console.log('### no user ### :')
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;