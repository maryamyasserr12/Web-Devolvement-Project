// Select the 'Add to Cart' button
const addToCartButton = document.querySelector('button');

// Add a click event to the button
addToCartButton.addEventListener('click', function() {
    // Change the button text
    addToCartButton.textContent = 'Added to Cart';

    // Change the background color temporarily
    addToCartButton.style.backgroundColor = '#4CAF50'; // Green background

    // Reset button after 2 seconds
    setTimeout(() => {
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.style.backgroundColor = '#C1908B'; // Original background
    }, 2000); // 2 seconds
});
