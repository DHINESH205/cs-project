import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import DashBoardPage from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/register" element={  <RegisterPage />}/>
          <Route path="/login" element={ <LoginPage/>}/>
          <Route path="/dashboard" element={ <DashBoardPage/>}/>
          <Route path="/" element={ <h1>HOME</h1>}/>


      </Routes>





      </BrowserRouter>
      

    </div>
  );
}

export default App;
