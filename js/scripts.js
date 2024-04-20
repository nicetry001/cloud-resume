/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Select the DOM element where the data will be displayed
const counter = document.querySelector(".counter-number");

// Asynchronous function to fetch data from the API Gateway endpoint and update the DOM
async function updateCounter() {
    try {
        // Fetch the data from the API Gateway endpoint
        const response = await fetch("https://gst6lziagf.execute-api.us-east-1.amazonaws.com/prod");

        // Check if the HTTP response is successful
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the data to the console to verify its structure
        console.log("Fetched data:", data);

        // Extract the desired field from the data (e.g., 'views')
        // Change the key name as needed, or use data directly if it's a number
        //const viewCount = data.views ?? 0; // If 'views' doesn't exist, default to 0

        // Update the HTML content with the fetched data
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        // Handle any errors during fetching or data parsing
        console.error("Error fetching data:", error);
        counter.innerHTML = "Error fetching data"; // Display an error message on failure
    }
}

// Call the function to update the counter
updateCounter();

