function calculateROI() {
    // Get input values
    const costPerSample = parseFloat(document.getElementById('costPerSample').value);
    const samplesPerMonth = parseFloat(document.getElementById('samplesPerMonth').value);
    const reductionPercentage = parseFloat(document.getElementById('reductionPercentage').value) / 100;
    const transportationCostPerSample = parseFloat(document.getElementById('transportationSavings').value);
    const softwareCost = parseFloat(document.getElementById('softwareCost').value);

    // Validate inputs
    if (isNaN(costPerSample) || isNaN(samplesPerMonth) || isNaN(reductionPercentage) || 
        isNaN(transportationCostPerSample) || isNaN(softwareCost)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // Calculate reduced samples
    const reducedSamples = samplesPerMonth * reductionPercentage;

    // Calculate monthly savings (including transportation savings)
    const monthlySavings = reducedSamples * (costPerSample + transportationCostPerSample);

    // Calculate annual savings
    const annualSavings = monthlySavings * 12;

    // Calculate ROI
    const roi = ((annualSavings - softwareCost) / softwareCost) * 100;

    // Display results
    document.getElementById('monthlySavings').innerText = `Monthly Savings: $${monthlySavings.toFixed(2)}`;
    document.getElementById('annualSavings').innerText = `Annual Savings: $${annualSavings.toFixed(2)}`;
    document.getElementById('totalSavings').innerText = `Total Annual Savings: $${annualSavings.toFixed(2)}`;
    document.getElementById('roi').innerText = `ROI: ${roi.toFixed(2)}%`;

    // Display explanation
    document.getElementById('explainMonthlySavings').innerText = 
        `Monthly Savings = Reduced Samples × (Cost per Sample + Transportation Cost per Sample) = ${reducedSamples.toFixed(2)} × ($${costPerSample.toFixed(2)} + $${transportationCostPerSample.toFixed(2)}) = $${monthlySavings.toFixed(2)}`;
    document.getElementById('explainAnnualSavings').innerText = 
        `Annual Savings = Monthly Savings × 12 = $${monthlySavings.toFixed(2)} × 12 = $${annualSavings.toFixed(2)}`;
    document.getElementById('explainROI').innerText = 
        `ROI = ((Annual Savings - Software Cost) / Software Cost) × 100 = (($${annualSavings.toFixed(2)} - $${softwareCost.toFixed(2)}) / $${softwareCost.toFixed(2)}) × 100 = ${roi.toFixed(2)}%`;

    // Show the explanation section
    document.getElementById('explanation').classList.remove('hidden');
}
