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

/* POPUP */

const startupCards = document.querySelectorAll(".card");

startupCards.forEach(card => {

    card.addEventListener("click", () => {

        const startupName = card.querySelector("h2").textContent;

        alert(
            startupName +
            "\n\nFounder: John Doe" +
            "\nMarket: Thailand" +
            "\nPotential: High Growth Startup" +
            "\nLooking for investors 🚀"
        );

    });

});