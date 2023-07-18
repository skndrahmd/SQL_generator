import styles from "./index.module.css";
import sqlServer from "./assets/sql-server.png";
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
      <h3>Generate SQL with AI</h3>

      <form action="" onSubmit={onSubmit}>

        {/* <input
          type="text"
          name="query-description"
          class="input"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}
          
        /> */}
        <div class="input-wrapper">

  <input placeholder="" class="newinput" name="text" type="text" onChange={(e) => setQueryDescription(e.target.value)}/>
</div>


        <button class="button">
          Generate
          <div class="hoverEffect">
            <div>

            </div>
          </div></button>



        <div class="output" placeholder="Your Output Here">
        
          {sqlQuery}
        </div>
      </form>

      <img src={logo} alt="dbimage" className={styles.logo} />
    </main>
  );
}

export default App;
