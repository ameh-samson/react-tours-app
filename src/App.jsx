import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);

  async function fetchTours() {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
  }

  fetchTours();

  return <h2>{tours.name}</h2>;
}

export default App;
