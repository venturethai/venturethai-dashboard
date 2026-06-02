import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [page, setPage] = useState("dashboard");
  const [startups, setStartups] = useState([]);
  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");

  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [founderName, setFounderName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [fundingStage, setFundingStage] = useState("");
  const [amountRaising, setAmountRaising] = useState("");
  const [location, setLocation] = useState("");

  const loadStartups = async () => {
    const querySnapshot = await getDocs(collection(db, "startups"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setStartups(data);
  };

  useEffect(() => {
    loadStartups();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "startups"), {
      startupName,
      industry,
      description,
      founderName,
      email,
      website,
      fundingStage,
      amountRaising,
      location,
      createdAt: new Date(),
    });

    alert("Startup saved successfully!");

    setStartupName("");
    setIndustry("");
    setDescription("");
    setFounderName("");
    setEmail("");
    setWebsite("");
    setFundingStage("");
    setAmountRaising("");
    setLocation("");

    await loadStartups();
    setPage("dashboard");
  };

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      (
        (startup.startupName || "") +
        (startup.industry || "") +
        (startup.location || "")
      )
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesIndustry =
      industryFilter === "All" ||
      startup.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={() => setPage("dashboard")}
          style={{ marginRight: "10px", padding: "10px" }}
        >
          Investor Dashboard
        </button>

        <button
          onClick={() => setPage("submit")}
          style={{ padding: "10px" }}
        >
          Submit Startup
        </button>
      </div>

      {page === "dashboard" && (
        <>
          <h1>VentureThai Investor Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Search startups..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px",
                width: "300px",
                borderRadius: "8px",
              }}
            />

            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <option>All</option>
              <option>AI</option>
              <option>HealthTech</option>
              <option>FinTech</option>
              <option>EdTech</option>
              <option>FoodTech</option>
            </select>
          </div>

          {filteredStartups.map((startup) => (
            <div
              key={startup.id}
              style={{
                border: "1px solid #334155",
                padding: "20px",
                marginTop: "15px",
                borderRadius: "10px",
                background: "#1e293b",
              }}
            >
              <h2>{startup.startupName}</h2>

              <p><strong>Industry:</strong> {startup.industry}</p>
              <p><strong>Founder:</strong> {startup.founderName}</p>
              <p><strong>Email:</strong> {startup.email}</p>
              <a
  href={`mailto:${startup.email}`}
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    background: "#38bdf8",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
  }}
>
  Contact Founder
</a>
              <p><strong>Website:</strong> {startup.website}</p>
              <p><strong>Funding Stage:</strong> {startup.fundingStage}</p>
              <p><strong>Amount Raising:</strong> {startup.amountRaising}</p>
              <p><strong>Location:</strong> {startup.location}</p>
              <p>{startup.description}</p>
            </div>
          ))}
        </>
      )}

      {page === "submit" && (
        <>
          <h1>Founder Submission Page</h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "600px",
            }}
          >
            <input
              placeholder="Startup Name"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
            />

            <input
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />

            <input
              placeholder="Founder Name"
              value={founderName}
              onChange={(e) => setFounderName(e.target.value)}
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <input
              placeholder="Funding Stage"
              value={fundingStage}
              onChange={(e) => setFundingStage(e.target.value)}
            />

            <input
              placeholder="Amount Raising"
              value={amountRaising}
              onChange={(e) => setAmountRaising(e.target.value)}
            />

            <input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <textarea
              placeholder="Startup Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
            />

            <button type="submit">
              Submit Startup
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;