document.getElementById('fertilizerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let area = parseFloat(document.getElementById('area').value);
    let nitrogen = parseFloat(document.getElementById('nitrogen').value);
    let phosphorus = parseFloat(document.getElementById('phosphorus').value);
    let potassium = parseFloat(document.getElementById('potassium').value);

    // Calculate total amounts
    let totalNitrogen = area * nitrogen;
    let totalPhosphorus = area * phosphorus;
    let totalPotassium = area * potassium;

    // Display results
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Quantidade necessária de fertilizantes:</h3>
        <p>Nitrogênio: ${totalNitrogen.toFixed(2)} kg</p>
        <p>Fósforo: ${totalPhosphorus.toFixed(2)} kg</p>
        <p>Potássio: ${totalPotassium.toFixed(2)} kg</p>
    `;
});
