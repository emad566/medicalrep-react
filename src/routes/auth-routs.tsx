import { Route, Routes } from 'react-router-dom';
import Signin from '../auth/signin';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={`${window.location.origin}/login`} Component={Signin} />
        </Routes>
    )
}

export default AuthRoutes;