document.addEventListener("DOMContentLoaded", function () {
    const greetBtn = document.getElementById("greetBtn");
    if (greetBtn) {
        greetBtn.addEventListener("click", function () {
            alert("Thanks for visiting ShopMate!");
        });
    }
});
