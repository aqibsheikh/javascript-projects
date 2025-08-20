const calculateTip = document.getElementById('calculateTip');
calculateTip.addEventListener('click', () => {
    const totalBill = document.getElementById('total-bill').value;
    const tipPercentage = document.getElementById('tip-percentage').value;
    const grandTotal = totalBill * tipPercentage / 100;
    const totalTip = Number(grandTotal) + Number(totalBill);
    if (totalTip) {
        document.getElementById('grand-total').innerText = totalTip;
    }
});