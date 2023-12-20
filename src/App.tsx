import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Instances from './pages/Instances/Instances';
import Users from './pages/Users/Users';
import ShowUser from './pages/ShowUser/ShowUser';
import ShowInstance from './pages/ShowInstance/ShowInstance';

import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/instances" element={<Instances />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/show" element={<ShowUser />} />
            <Route path="/instances/show" element={<ShowInstance />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

