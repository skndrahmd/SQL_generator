import styles from "./index.module.css";
import sqlServer from "./assets/brainblck-04.png";
import logo from "./assets/neuralogo.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedQuery = await generateQuery()
    setSqlQuery(generatedQuery)
    console.log("returned from server:", sqlQuery)
  }

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({ queryDescription: queryDescription })
    })

    const data = await response.json()
    return data.response.trim()
  }

  return (

    <main className={styles.main}>

      <img src={sqlServer} alt="dbimage" className={styles.icon} />
      <h3>Neura SQL-Gen</h3>

      <form action="" onSubmit={onSubmit}>

        <input
          type="text"
          name="query-description"
          class="input"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}

        />


        <button class="button" type="submit">
        
        <span class="text">Generate</span>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>
          <div class="hoverEffect">
            <div>

            </div>
          </div></button>


        
        <div class="output" placeholder="Your Output Here">
        
          {sqlQuery}
          
        </div>
        {/* <div class="output">
        <div class="card">
          {sqlQuery}
          <div class="overlay"></div>
          <button class="card-btn">Copy</button>
        </div>
        </div> */}

      </form>
      {/* <img src={logo} alt="dbimage" className={styles.logo} /> */}
      
    </main>
  );
}

export default App;
