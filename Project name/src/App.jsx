import { useState } from "react";

function App() {

  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Startup Submitted:\n\nName: ${startupName}\nIndustry: ${industry}\nDescription: ${description}`
    );

    setStartupName("");
    setIndustry("");
    setDescription("");
  };

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

      <h1 style={{ marginBottom: "10px" }}>
        VentureThai
      </h1>

      <p style={{ marginBottom: "40px" }}>
        Submit your startup to Thailand’s top investors.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        <input
          type="text"
          placeholder="Startup Name"
          value={startupName}
          onChange={(e) => setStartupName(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <textarea
          placeholder="Startup Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "15px",
            background: "#38bdf8",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Submit Startup
        </button>

      </form>

    </div>
  );
}

export default App;