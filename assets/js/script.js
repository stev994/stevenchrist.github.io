document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const coffeeType = document.getElementById('coffeeType').value;
    const quantity = document.getElementById('quantity').value;
    const pricePerUnit = document.getElementById('pricePerUnit').value;
    const totalPrice = quantity * pricePerUnit;
    const tableBody = document.querySelector('#transactionTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${coffeeType}</td>
        <td>${quantity}</td>
        <td>${totalPrice.toFixed(2)}</td>
    `;
    document.getElementById('transactionForm').reset();
    document.getElementById('totalPrice').value = totalPrice.toFixed(2);
});
document.getElementById('quantity').addEventListener('input', calculateTotal);
document.getElementById('pricePerUnit').addEventListener('input', calculateTotal);

function calculateTotal() {
    const quantity = document.getElementById('quantity').value;
    const pricePerUnit = document.getElementById('pricePerUnit').value;
    const totalPrice = quantity * pricePerUnit;
    document.getElementById('totalPrice').value = totalPrice.toFixed(2);
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('Please fill in all fields.');
    } else {
        alert('Login successful!');
        // Here you can add further login logic
    }
});