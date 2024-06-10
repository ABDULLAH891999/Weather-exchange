
  
function convertCurrency() {

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    fetch(`http://localhost:3000/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Converted Amount: ${data.convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Error converting currency. Please try again.';
        });
  }
  
  