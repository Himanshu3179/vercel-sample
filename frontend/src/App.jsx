import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
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
  const [data, setData] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get("http://localhost:4000/")
      const response = await axios.get("https://vercel-sample-one-pied.vercel.app/")
      console.log(response)
      setData(response.data)
    }
    fetchData()
  }
    , []);
  return <div>
    {data}
  </div>;
}


function Users() {
  const [data, setData] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://vercel-sample-one-pied.vercel.app/user")
      console.log(response)
      setData(response.data)
    }
    fetchData()
  }
    , []);
  return <div>
    {data}
  </div>;
}


