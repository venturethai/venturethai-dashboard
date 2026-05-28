import { useEffect } from "react";
import { db } from "./firebase";

function App() {

  useEffect(() => {
    console.log("Firebase Connected:", db);
  }, []);

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>VentureThai Investor Dashboard</h1>

      <p>🔥 Firebase successfully connected.</p>

      <div
        style={{
          marginTop: "30px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h2>Bangkok AI</h2>
        <p>AI startup helping Thai businesses automate operations.</p>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h2>ThaiPay</h2>
        <p>Fintech startup transforming digital payments.</p>
      </div>
    </div>
  );
}

export default App;