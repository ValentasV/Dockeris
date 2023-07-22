document.addEventListener("DOMContentLoaded", function () {
    const duomenysDOM = document.getElementById("duomenys");
    const atsakymasDOM = document.getElementById("atsakymas");
    const mygtukasDOM = document.getElementById("mygtukas");

    mygtukasDOM.addEventListener("click", () => {
        const laukelioDuomenys = duomenysDOM.value;
        localStorage.setItem("lankytojoVardas", laukelioDuomenys);
    });

    const lankytojoVardas = localStorage.getItem("lankytojoVardas");
    if (lankytojoVardas) {
        atsakymasDOM.textContent = lankytojoVardas;
    }

});