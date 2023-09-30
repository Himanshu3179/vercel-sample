import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";


function App() {



  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </div>;
}

export default App;

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/")
      console.log(response)
    }
    fetchData()
  }
    , []);
  return <div>
    from home
  </div>;
}


function Users() {
  return <div>
    from users
  </div>;
}


