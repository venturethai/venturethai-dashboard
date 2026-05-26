import { useState } from "react";

function App() {

  const startupData = [

    {
      id: 1,
      name: "Bangkok AI",
      industry: "Artificial Intelligence",
      valuation: "$12M",
      revenue: "$85K MRR",
      growth: "+240%",
      stage: "Seed",
      founders: "3 Founders",
      location: "Bangkok",
      description:
      "AI startup helping businesses automate operations using advanced AI systems."
    },

    {
      id: 2,
      name: "ThaiPay",
      industry: "Fintech",
      valuation: "$28M",
      revenue: "$210K MRR",
      growth: "+180%",
      stage: "Series A",
      founders: "2 Founders",
      location: "Thailand",
      description:
      "Digital payments platform simplifying financial infrastructure across SEA."
    },

    {
      id: 3,
      name: "EcoMove",
      industry: "Transportation",
      valuation: "$40M",
      revenue: "$500K MRR",
      growth: "+320%",
      stage: "Series B",
      founders: "5 Founders",
      location: "SEA",
      description:
      "Electric transportation and logistics startup scaling across Southeast Asia."
    }

  ];

  const [search, setSearch] =
  useState("");

  const [selectedStartup, setSelectedStartup] =
  useState(null);

  const [watchlist, setWatchlist] =
  useState([]);

  const filteredStartups =
  startupData.filter((startup) =>

    startup.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );

  function addToWatchlist(startup){

    if(
      !watchlist.find(
        item => item.id === startup.id
      )
    ){

      setWatchlist([
        ...watchlist,
        startup
      ]);

    }

  }

  return (

    <div style={styles.app}>

      {/* SIDEBAR */}

      <div style={styles.sidebar}>

        <h1 style={styles.logo}>
          VentureThai
        </h1>

        <button style={styles.sideBtn}>
          Dashboard
        </button>

        <button style={styles.sideBtn}>
          Startups
        </button>

        <button style={styles.sideBtn}>
          Investors
        </button>

        <button style={styles.sideBtn}>
          Analytics
        </button>

        <button style={styles.sideBtn}>
          AI Scoring
        </button>

        {/* WATCHLIST */}

        <div style={{
          marginTop:"50px"
        }}>

          <h3 style={{
            marginBottom:"20px",
            color:"#38bdf8"
          }}>
            Watchlist
          </h3>

          {watchlist.length === 0 && (

            <p style={{
              color:"#94a3b8"
            }}>
              No startups saved.
            </p>

          )}

          {watchlist.map((item)=>(

            <div
              key={item.id}
              style={styles.watchCard}
            >

              {item.name}

            </div>

          ))}

        </div>

      </div>

      {/* MAIN */}

      <div style={styles.main}>

        <h1 style={styles.heading}>
          Investor Dashboard
        </h1>

        <p style={styles.subheading}>
          Discover Thailand’s fastest-growing startups.
        </p>

        {/* METRICS */}

        <div style={styles.metricWrapper}>

          <div style={styles.metricCard}>
            <h1>120+</h1>
            <p>Total Startups</p>
          </div>

          <div style={styles.metricCard}>
            <h1>$45M</h1>
            <p>Total Funding</p>
          </div>

          <div style={styles.metricCard}>
            <h1>80+</h1>
            <p>Investors</p>
          </div>

        </div>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search startups..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
          style={styles.search}
        />

        {/* STARTUP CARDS */}

        <div style={styles.cardContainer}>

          {filteredStartups.map((startup)=>(

            <div
              key={startup.id}
              style={styles.card}
            >

              <h2 style={{
                color:"#38bdf8"
              }}>
                {startup.name}
              </h2>

              <p style={{
                color:"#cbd5e1",
                marginTop:"10px"
              }}>
                {startup.industry}
              </p>

              <div style={styles.infoContainer}>

                <div style={styles.infoBox}>
                  Valuation:
                  {startup.valuation}
                </div>

                <div style={styles.infoBox}>
                  Revenue:
                  {startup.revenue}
                </div>

                <div style={styles.infoBox}>
                  Growth:
                  {startup.growth}
                </div>

              </div>

              <button
                style={styles.viewBtn}
                onClick={()=>
                  setSelectedStartup(startup)
                }
              >

                View Startup

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedStartup && (

        <div style={styles.modalOverlay}>

          <div style={styles.modal}>

            <h1 style={{
              color:"#38bdf8"
            }}>
              {selectedStartup.name}
            </h1>

            <p style={{
              marginTop:"20px",
              color:"#cbd5e1",
              lineHeight:"1.8"
            }}>
              {selectedStartup.description}
            </p>

            <div style={styles.modalInfo}>

              <div style={styles.infoBox}>
                Industry:
                {selectedStartup.industry}
              </div>

              <div style={styles.infoBox}>
                Stage:
                {selectedStartup.stage}
              </div>

              <div style={styles.infoBox}>
                Founders:
                {selectedStartup.founders}
              </div>

              <div style={styles.infoBox}>
                Location:
                {selectedStartup.location}
              </div>

              <div style={styles.infoBox}>
                Revenue:
                {selectedStartup.revenue}
              </div>

            </div>

            <button
              style={styles.watchBtn}
              onClick={()=>
                addToWatchlist(selectedStartup)
              }
            >

              Add To Watchlist

            </button>

            <button
              style={styles.closeBtn}
              onClick={()=>
                setSelectedStartup(null)
              }
            >

              Close

            </button>

          </div>

        </div>

      )}

    </div>

  );

}

/* STYLES */

const styles = {

  app:{
    display:"flex",
    minHeight:"100vh",
    background:"#0f172a",
    color:"white",
    fontFamily:"Arial"
  },

  sidebar:{
    width:"260px",
    background:"#111827",
    padding:"30px",
    borderRight:"1px solid #1e293b"
  },

  logo:{
    color:"#38bdf8",
    marginBottom:"50px"
  },

  sideBtn:{
    width:"100%",
    padding:"15px",
    marginBottom:"15px",
    border:"none",
    borderRadius:"12px",
    background:"#1e293b",
    color:"white",
    cursor:"pointer",
    fontSize:"16px"
  },

  main:{
    flex:1,
    padding:"40px"
  },

  heading:{
    fontSize:"45px"
  },

  subheading:{
    color:"#94a3b8",
    marginTop:"10px",
    marginBottom:"40px"
  },

  metricWrapper:{
    display:"flex",
    gap:"25px",
    flexWrap:"wrap",
    marginBottom:"40px"
  },

  metricCard:{
    background:"#1e293b",
    padding:"30px",
    borderRadius:"20px",
    width:"220px"
  },

  search:{
    width:"100%",
    maxWidth:"400px",
    padding:"18px",
    borderRadius:"14px",
    border:"none",
    fontSize:"16px",
    marginBottom:"40px"
  },

  cardContainer:{
    display:"flex",
    gap:"25px",
    flexWrap:"wrap"
  },

  card:{
    width:"320px",
    background:"#1e293b",
    padding:"30px",
    borderRadius:"20px",
    border:"1px solid #334155"
  },

  infoContainer:{
    marginTop:"25px",
    display:"flex",
    flexDirection:"column",
    gap:"12px"
  },

  infoBox:{
    background:"#0f172a",
    padding:"12px",
    borderRadius:"10px"
  },

  viewBtn:{
    marginTop:"25px",
    width:"100%",
    padding:"15px",
    border:"none",
    borderRadius:"12px",
    background:"#38bdf8",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  },

  watchCard:{
    background:"#1e293b",
    padding:"12px",
    borderRadius:"10px",
    marginBottom:"10px"
  },

  modalOverlay:{
    position:"fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    background:"rgba(0,0,0,0.7)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  modal:{
    background:"#1e293b",
    padding:"40px",
    borderRadius:"20px",
    width:"500px",
    maxWidth:"90%"
  },

  modalInfo:{
    marginTop:"30px",
    display:"flex",
    flexDirection:"column",
    gap:"15px"
  },

  watchBtn:{
    marginTop:"30px",
    width:"100%",
    padding:"15px",
    border:"none",
    borderRadius:"12px",
    background:"#22c55e",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  },

  closeBtn:{
    marginTop:"15px",
    width:"100%",
    padding:"15px",
    border:"none",
    borderRadius:"12px",
    background:"#ef4444",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  }

};

export default App;