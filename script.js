/* STARTUP DATABASE */

const startups = [

    {
        name:"ThaiPay",
        description:"Fintech startup transforming digital payments.",
        stage:"Series A",
        growth:"+180%",
        raised:"$2M",
        image:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        industry:"Fintech",
        market:"Thailand",
        investors:"15+"
    },

    {
        name:"Bangkok AI",
        description:"AI startup helping businesses automate operations.",
        stage:"Seed Stage",
        growth:"+240%",
        raised:"$800K",
        image:"https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
        industry:"Artificial Intelligence",
        market:"Southeast Asia",
        investors:"22+"
    },

    {
        name:"EcoMove",
        description:"Sustainable transportation startup across SEA.",
        stage:"Series B",
        growth:"+320%",
        raised:"$5M",
        image:"https://cdn-icons-png.flaticon.com/512/854/854878.png",
        industry:"Transportation",
        market:"SEA",
        investors:"30+"
    }

];

/* GENERATE STARTUPS */

const companies =
document.getElementById("startups");

function displayStartups(items){

    companies.innerHTML = "";

    items.forEach(startup => {

        companies.innerHTML += `

            <div class="card">

                <img src="${startup.image}">

                <h2>${startup.name}</h2>

                <p>
                    ${startup.description}
                </p>

                <h3>${startup.stage}</h3>

                <div class="stats">

                    <span>
                        Growth: ${startup.growth}
                    </span>

                    <span>
                        Raised: ${startup.raised}
                    </span>

                </div>

                <button class="investBtn">
                    View Details
                </button>

            </div>

        `;

    });

    addModalEvents(items);

}

displayStartups(startups);

/* MODAL */

function addModalEvents(items){

    const cards =
    document.querySelectorAll(".card");

    cards.forEach((card,index) => {

        card.addEventListener("click", () => {

            const startup = items[index];

            const modal =
            document.createElement("div");

            modal.classList.add("modal");

            modal.innerHTML = `

                <div class="modalContent">

                    <img
                    src="${startup.image}"
                    width="80"
                    >

                    <h1>
                        ${startup.name}
                    </h1>

                    <p>
                        ${startup.description}
                    </p>

                    <ul>

                        <li>
                            Industry:
                            ${startup.industry}
                        </li>

                        <li>
                            Market:
                            ${startup.market}
                        </li>

                        <li>
                            Funding:
                            ${startup.raised}
                        </li>

                        <li>
                            Growth:
                            ${startup.growth}
                        </li>

                        <li>
                            Investors:
                            ${startup.investors}
                        </li>

                    </ul>

                    <button id="closeModal">
                        Close
                    </button>

                </div>

            `;

            document.body.appendChild(modal);

            document
            .getElementById("closeModal")
            .addEventListener("click", () => {

                modal.remove();

            });

        });

    });

}

/* SEARCH */

const searchBar =
document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

    const value =
    searchBar.value.toLowerCase();

    const filtered =
    startups.filter(startup =>

        startup.name
        .toLowerCase()
        .includes(value)

    );

    displayStartups(filtered);

});

/* DARK MODE */

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* HERO BUTTON */

const exploreBtn =
document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    window.open(
        "http://localhost:5173/",
        "_blank"
    );

});

/* CONTACT FORM */

const form =
document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Message sent successfully 🚀"
    );

    form.reset();

});

const submitBtn =
document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

    window.open(
        "http://localhost:5173/",
        "_blank"
    );

});