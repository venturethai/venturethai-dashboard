import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [page, setPage] = useState("dashboard");
  const [startups, setStartups] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);

  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const [startupName, setStartupName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [founderName, setFounderName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [fundingStage, setFundingStage] = useState("");
  const [amountRaising, setAmountRaising] = useState("");
  const [location, setLocation] = useState("");
  const [valuation, setValuation] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

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
      valuation,
      logoUrl,
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
    setValuation("");
    setLogoUrl("");

    await loadStartups();
    setPage("dashboard");
  };

 const filteredStartups = startups
  .filter((startup) => {
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
  })
  .sort((a, b) => {
    if (sortBy === "Highest Valuation") {
      return Number(b.valuation || 0) - Number(a.valuation || 0);
    }

    if (sortBy === "Lowest Valuation") {
      return Number(a.valuation || 0) - Number(b.valuation || 0);
    }

    if (sortBy === "A-Z") {
  return (a.startupName || "").localeCompare(
    b.startupName || ""
  );
}

if (sortBy === "Newest") {
  return new Date(b.createdAt?.seconds * 1000 || 0)
    - new Date(a.createdAt?.seconds * 1000 || 0);
}

return 0;
  });
const featuredStartup = [...filteredStartups].sort(
  (a, b) => Number(b.valuation || 0) - Number(a.valuation || 0)
)[0];
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
   <h1
  style={{
    fontSize: "52px",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "5px",
  }}
>
  VentureThai
</h1>

<p
  style={{
    color: "#94a3b8",
    fontSize: "18px",
    marginBottom: "10px",
  }}
>
  Showing {filteredStartups.length} startups
</p>

<p
  style={{
    color: "#e5e7eb",
    marginBottom: "30px",
    fontSize: "18px",
  }}
>
  Connecting Thai founders with investors.
</p>

      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={() => setPage("dashboard")}
          style={{
            marginRight: "10px",
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Investor Dashboard
        </button>

        <button
          onClick={() => setPage("submit")}
          style={{
            padding: "12px 20px",
            background: "#475569",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Startup
        </button>
      </div>

      {page === "dashboard" && (
        <>
        {featuredStartup && (
  <div
    style={{
      background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
      padding: "25px",
      borderRadius: "16px",
      marginBottom: "25px",
      color: "white",
      boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
    }}
  >
    <p
      style={{
        margin: 0,
        fontSize: "14px",
        opacity: 0.9,
      }}
    >
      🔥 Featured Startup
    </p>

    <h2 style={{ marginTop: "10px" }}>
      {featuredStartup.startupName}
    </h2>

    <p>
      {featuredStartup.industry} • {featuredStartup.location}
    </p>

    <p>
      <strong>Valuation:</strong> $
      {featuredStartup.valuation}
    </p>
  </div>
)}
          <h2>Submitted Startups</h2>

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
            <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  style={{
    padding: "10px",
    borderRadius: "8px",
  }}
>
  <option>Newest</option>
  <option>Highest Valuation</option>
  <option>Lowest Valuation</option>
  <option>A-Z</option>
</select>
          </div>

          {filteredStartups.map((startup) => (
  <div
    key={startup.id}
    onClick={() => setSelectedStartup(startup)}
              style={{
  background: "white",
  color: "#111827",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "20px",
  cursor: "pointer",
}}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                  {startup.logoUrl && (
                    <img
                      src={startup.logoUrl}
                      alt="logo"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <h2>{startup.startupName}</h2>
                </div>

                <button
                  onClick={() => toggleFavorite(startup.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "28px",
                    cursor: "pointer",
                  }}
                >
                  {favorites.includes(startup.id) ? "⭐" : "☆"}
                </button>
              </div>

              <p><strong>Industry:</strong> {startup.industry}</p>
              <p><strong>Founder:</strong> {startup.founderName}</p>
              <p><strong>Email:</strong> {startup.email}</p>
              <p><strong>Website:</strong> {startup.website}</p>
              <p><strong>Funding Stage:</strong> {startup.fundingStage}</p>
              <p><strong>Valuation:</strong> {startup.valuation}</p>
              <p><strong>Amount Raising:</strong> {startup.amountRaising}</p>
              <p><strong>Location:</strong> {startup.location}</p>
              <p>{startup.description}</p>

              <a
                href={`mailto:${startup.email}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#2563eb",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                }}
              >
                Contact Founder
              </a>
            </div>
          ))}
        </>
      )}

      {page === "submit" && (
        <>
          <h2>Founder Submission Page</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "600px",
            }}
          >
            <input placeholder="Startup Name" value={startupName} onChange={(e) => setStartupName(e.target.value)} />
            <input placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            <input placeholder="Founder Name" value={founderName} onChange={(e) => setFounderName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
            <input placeholder="Funding Stage" value={fundingStage} onChange={(e) => setFundingStage(e.target.value)} />
            <input placeholder="Startup Valuation (USD)" value={valuation} onChange={(e) => setValuation(e.target.value)} />
            <input placeholder="Amount Raising" value={amountRaising} onChange={(e) => setAmountRaising(e.target.value)} />
            <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input placeholder="Logo URL" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />

            <textarea
              rows="5"
              placeholder="Startup Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="submit"
              style={{
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Submit Startup
            </button>
          </form>
        </>
      )}

      {selectedStartup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              color: "#111827",
              padding: "30px",
              borderRadius: "16px",
              maxWidth: "700px",
              width: "90%",
            }}
          >
            <h2>{selectedStartup.startupName}</h2>

            <p><strong>Industry:</strong> {selectedStartup.industry}</p>
            <p><strong>Founder:</strong> {selectedStartup.founderName}</p>
            <p><strong>Email:</strong> {selectedStartup.email}</p>
            <p><strong>Website:</strong> {selectedStartup.website}</p>
            <p><strong>Funding Stage:</strong> {selectedStartup.fundingStage}</p>
            <p><strong>Valuation:</strong> {selectedStartup.valuation}</p>
            <p><strong>Amount Raising:</strong> {selectedStartup.amountRaising}</p>
            <p><strong>Location:</strong> {selectedStartup.location}</p>

            <p>{selectedStartup.description}</p>

            <button
              onClick={() => setSelectedStartup(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;