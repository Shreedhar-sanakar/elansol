//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import UserForm from "./UserForm";
import Login from "./Login";
import UserTable from "./UserTable";

function App() {
  
  
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #305170, #6DFC6B)",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<UserForm />} />
          
         
            <Route path="/table/:id" element={<UserTable />} />
       
        
          {/* Default route */}
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
