import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userRoutes, adminRoutes } from './routes/routes.js';
import { UserContext } from './utils/userContext.jsx';
import './App.scss';

function App() {
    const { user } = useContext(UserContext);
    const appRoutes = user.isAdmin === true ? adminRoutes : userRoutes;
    return (
        <Router>
            <div className="app">
                <Routes>
                    {appRoutes.map((route, index) => {
                        const Layout = route.layout;
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Layout children={<Page />} />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
