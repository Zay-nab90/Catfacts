// script.js
document.getElementById('fetchButton').addEventListener('click', function() {
    const loadingMessage = document.getElementById('loadingMessage');
    const catFactElement = document.getElementById('catFact');

    // Show the loading message
    loadingMessage.style.display = 'block';
    catFactElement.textContent = '';  // Clear any previous cat fact

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Set up the request to fetch a random cat fact from the new API
    xhr.open('GET', 'https://catfact.ninja/fact', true);

    // Set up the callback for when the request is complete
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            // Hide the loading message
            loadingMessage.style.display = 'none';
            // Display the fetched cat fact
            catFactElement.textContent = response.fact;
        } else {
            // Handle errors
            
            catFactElement.textContent = 'Error fetching cat fact.';
        }
    };

    // Send the request
    xhr.send();
});

