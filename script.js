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