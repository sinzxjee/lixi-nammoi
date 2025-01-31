document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("liXiContainer");
    const numLiXi = 1; // Number of envelopes

    for (let i = 0; i < numLiXi; i++) {
        let liXi = document.createElement("div");
        liXi.classList.add("li-xi");

        let money = document.createElement("div");
        money.classList.add("money");
        let amount = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; // Random amount
        money.textContent = amount + " VND";

        liXi.appendChild(money);

        liXi.addEventListener("click", function () {
            liXi.classList.add("opened");
        });

        container.appendChild(liXi);
    }
});
