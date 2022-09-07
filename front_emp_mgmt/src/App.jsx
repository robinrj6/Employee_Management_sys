import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './components/LoginComponent';
import MainComponent from './components/MainComponent';
import SignupComponent from './components/SignupComponent';
import NavHeader from './components/NavHeader';
import ListComponent from './components/ListComponent';
import ActionComponent from './components/ActionComponent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavHeader />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="home" element={<MainComponent />} />
            <Route path="list" element={<ListComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="signup" element={<SignupComponent />} />
            <Route path="actions" >
              <Route index element={<ActionComponent />} />
              <Route path="3.1" element={<ActionComponent />} />
              <Route path="*" element={<MainComponent />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
