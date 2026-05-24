/* DARK MODE */

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

/* SEARCH */

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

    const searchValue =
    searchBar.value.toLowerCase();

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        const title =
        card.querySelector("h2")
        .textContent
        .toLowerCase();

        if(title.includes(searchValue)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});

/* STARTUP MODAL */

const startupCards =
document.querySelectorAll(".card");

startupCards.forEach(card => {

    card.addEventListener("click", () => {

        const startupName =
        card.querySelector("h2").textContent;

        const modal =
        document.createElement("div");

        modal.classList.add("modal");

        modal.innerHTML = `

            <div class="modalContent">

                <h1>${startupName}</h1>

                <p>
                    High-growth startup currently
                    expanding across Thailand and SEA.
                </p>

                <ul>
                    <li>Industry: Technology</li>
                    <li>Market: Southeast Asia</li>
                    <li>Potential: High Growth</li>
                    <li>Investors Interested: 12+</li>
                    <li>Revenue Growth: +230%</li>
                </ul>

                <button id="closeModal">
                    Close
                </button>

            </div>

        `;

        document.body.appendChild(modal);

        const closeBtn =
        document.getElementById("closeModal");

        closeBtn.addEventListener("click", () => {

            modal.remove();

        });

    });

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

/* HERO BUTTON */

const heroButton =
document.querySelector(".heroText button");

heroButton.addEventListener("click", () => {

    document
    .getElementById("startups")
    .scrollIntoView({
        behavior:"smooth"
    });

});

/* BUTTON ANIMATION */

const buttons =
document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "scale(1)";

    });

});