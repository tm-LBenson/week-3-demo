import React, { useEffect, useState } from "react";
import { BACKEND } from "./config";

function Papers() {
  const [papers, setPaper] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getPapers() {
    try {
      setLoading(true);
      const res = await fetch(BACKEND + "/api/papers");
      const { papers } = await res.json();
      setPaper(papers);
      console.log("Got data");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPapers();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <ul>
      {papers.map((paper) => (
        <li key={paper.id}>
          <p style={{ fontWeight: "900" }}>{paper.title}</p>
          <p>{paper.summary}</p>
          <a href={paper.link} target='_blank'>Visit</a>
        </li>
      ))}
    </ul>
  );
}

export default Papers;
