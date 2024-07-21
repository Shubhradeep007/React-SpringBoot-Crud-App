
import './App.css';
import AddUsers from './Users/AddUsers';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
        {/* <HomePage /> */}
      </Router>
    </>
  );
}

export default App;
