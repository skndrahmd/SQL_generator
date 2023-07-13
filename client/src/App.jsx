import styles from "./index.module.css";
import sqlServer from "./assets/sql-server.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [queryDescription, setQueryDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", queryDescription)
  }

  return (
    <main className={styles.main}>
      <img src={sqlServer} alt="dbimage" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
    </main>
  );
}

export default App;
