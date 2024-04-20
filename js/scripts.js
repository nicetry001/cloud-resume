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

// const counter = document.querySelector(".counter-number");
// async function updateCounter() {
//     let response = await fetch("https://gst6lziagf.execute-api.us-east-1.amazonaws.com/prod");
//     let data = await response.json();
//     counter.innerHTML = ` Views:${data}`;
// }

// updateCounter();

// Selecting the DOM element where the data will be displayed
const counter = document.querySelector(".counter-number");

// Asynchronous function to fetch data from the API Gateway endpoint
async function updateCounter() {
    try {
        // Fetch data from the specified URL
        const response = await fetch("https://gst6lziagf.execute-api.us-east-1.amazonaws.com/prod");

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Assuming 'data' is an object, extract the desired field (like 'views') 
        // You can adjust the key based on your data structure
        const viewCount = data.views ?? 0; // Default to 0 if 'views' field is missing

        // Update the HTML content with the fetched data
        counter.innerHTML = `Views: ${viewCount}`;
    } catch (error) {
        // Handle any errors during fetching or parsing
        console.error("Failed to update counter:", error);
        counter.innerHTML = "Error fetching data"; // Display an error message
    }
}

// Call the function to update the counter
updateCounter();
