import { useEffect, useState } from "react";
import "./App.css";
import { BACKEND } from "./config";
import Papers from "./Papers";

function App() {
  const [researchData, setResearchData] = useState("");

  async function getData() {
    const res = await fetch(BACKEND);
    const data = await res.json();
    setResearchData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {researchData.message}
      <Papers />
    </>
  );
}

export default App;
