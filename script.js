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

    // Check for negative values
    if (
        costPerSample < 0 ||
        samplesPerMonth < 0 ||
        reductionPercentage < 0 ||
        transportationCostPerSample < 0 ||
        softwareCost < 0
    ) {
        alert("Inputs cannot be negative. Please enter positive values.");
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

    // Display results with thousands separator
    document.getElementById('monthlySavings').innerText = `Monthly Savings: $${monthlySavings.toLocaleString()}`;
    document.getElementById('annualSavings').innerText = `Annual Savings: $${annualSavings.toLocaleString()}`;
    document.getElementById('totalSavings').innerText = `Total Annual Savings: $${annualSavings.toLocaleString()}`;
    document.getElementById('roi').innerText = `ROI: ${roi.toFixed(2)}%`;

    // Display explanation with thousands separator
    document.getElementById('explainMonthlySavings').innerText = 
        `Monthly Savings = Reduced Samples × (Cost per Sample + Transportation Cost per Sample) = (${samplesPerMonth.toLocaleString()} * ${(reductionPercentage * 100).toFixed(2)}) × ($${costPerSample.toLocaleString()} + $${transportationCostPerSample.toLocaleString()}) = $${monthlySavings.toLocaleString()}`;
    document.getElementById('explainAnnualSavings').innerText = 
        `Annual Savings = Monthly Savings × 12 = $${monthlySavings.toLocaleString()} × 12 = $${annualSavings.toLocaleString()}`;
    document.getElementById('explainROI').innerText = 
        `ROI = ((Annual Savings - Software Cost) / Software Cost) × 100 = (($${annualSavings.toLocaleString()} - $${softwareCost.toLocaleString()}) / $${softwareCost.toLocaleString()}) × 100 = ${roi.toFixed(2)}%`;

    // Show the explanation section
    document.getElementById('explanation').classList.remove('hidden');
}
