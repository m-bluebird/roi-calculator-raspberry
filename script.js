function calculateROI() {
    // Get input values
    const costPerSample = parseFloat(document.getElementById('costPerSample').value);
    const samplesPerMonth = parseFloat(document.getElementById('samplesPerMonth').value);
    const reductionPercentage = parseFloat(document.getElementById('reductionPercentage').value) / 100;
    const transportationSavings = parseFloat(document.getElementById('transportationSavings').value);
    const softwareCost = parseFloat(document.getElementById('softwareCost').value);

    // Validate inputs
    if (isNaN(costPerSample) || isNaN(samplesPerMonth) || isNaN(reductionPercentage) || 
        isNaN(transportationSavings) || isNaN(softwareCost)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculate results
    const monthlySavings = costPerSample * samplesPerMonth * reductionPercentage;
    const annualSavings = monthlySavings * 12;
    const totalSavings = annualSavings + transportationSavings;
    const roi = ((totalSavings - softwareCost) / softwareCost) * 100;

    // Display results
    document.getElementById('monthlySavings').innerText = `Monthly Savings from Samples: $${monthlySavings.toFixed(2)}`;
    document.getElementById('annualSavings').innerText = `Annual Savings from Samples: $${annualSavings.toFixed(2)}`;
    document.getElementById('totalSavings').innerText = `Total Annual Savings: $${totalSavings.toFixed(2)}`;
    document.getElementById('roi').innerText = `ROI: ${roi.toFixed(2)}%`;
}
