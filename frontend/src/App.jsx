import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import StartInterview from "./pages/interview/StartInterview";
import Interview from "./pages/interview/Interview";
import InterviewHistory from "./pages/interview/InterviewHistory";
import InterviewDetails from "./pages/interview/InterviewDetails";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";
function App() {

    return (

        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/start"
                element={
                    <ProtectedRoute>
                        <StartInterview />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/interview"
                element={
                    <ProtectedRoute>
                        <Interview />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/history"
                element={
                    <ProtectedRoute>
                        <InterviewHistory />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/history/:id"
                element={
                    <ProtectedRoute>
                        <InterviewDetails />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />


            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}

export default App;