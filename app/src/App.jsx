import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import UnderWork from "./pages/UnderWork"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/under-wokr"  element={<UnderWork/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
