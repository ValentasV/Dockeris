
const forma = document.getElementById('forma');

const rezultatas = document.getElementById('rezultatas');

forma.addEventListener('submit', function(e) {

    e.preventDefault();

    const vardas = document.getElementById('vardas').value;

    const pavarde = document.getElementById('pavarde').value;

    rezultatas.textContent = `Vardas: ${vardas}, pavarde: ${pavarde}`;

    forma.reset();

});







//// Get form element
//      var form = document.getElementById("myForm");
//
//      // Add submit event listener
//      form.addEventListener("submit", function(event) {
//        event.preventDefault(); // Prevent form submission
//
//        // Get input values
//        var firstName = document.getElementById("firstName").value;
//        var lastName = document.getElementById("lastName").value;
//
//        // Display input values in paragraph
//        var result = document.getElementById("result");
//        result.innerHTML = "First Name: " + firstName + "<br>Last Name: " + lastName;
//
//        // Clear input fields
//        document.getElementById("firstName").value = "";
//        document