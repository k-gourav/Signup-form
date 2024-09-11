import React, { Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SignupPage = React.lazy(() => import('../pages/SignupPage'));
const SignupSuccessPage = React.lazy(() => import('../pages/SignupSuccessPage'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<SignupPage />} />
                <Route path="/signup-success" element={<SignupSuccessPage />} />
            </Routes>
            </Suspense>
        </Router>
    )
};

export default AppRoutes;