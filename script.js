const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* SEARCH */

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

    const searchValue = searchBar.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h2").textContent.toLowerCase();

        if(title.includes(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

/* MODAL */

const startupCards = document.querySelectorAll(".card");

startupCards.forEach(card => {

    card.addEventListener("click", () => {

        const startupName = card.querySelector("h2").textContent;

        const modal = document.createElement("div");

        modal.classList.add("modal");

        modal.innerHTML = `
        
            <div class="modalContent">

                <h1>${startupName}</h1>

                <p>
                    High-growth Thai startup looking for investors.
                </p>

                <ul>
                    <li>Market: Thailand</li>
                    <li>Stage: Early Growth</li>
                    <li>Potential: High</li>
                    <li>Industry: Technology</li>
                </ul>

                <button id="closeModal">Close</button>

            </div>

        `;

        document.body.appendChild(modal);

        document.getElementById("closeModal")
        .addEventListener("click", () => {
            modal.remove();
        });

    });

});