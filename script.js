function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    document.getElementById("output").innerHTML =
    `
    <h2>Patient Details</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Disease:</b> ${disease}</p>
    `;
}
