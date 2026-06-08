import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import Register from './Register';
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register setUser={setUser} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;