document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  // Function to update and display the count
  function updateCount() {
    let count = getCookie('count');
    
    // If count cookie does not exist, initialize it to 0
    if (count === null) {
      count = 0;
    }
    
    // Increment the count
    count++;

    // Update the cookie
    setCookie('count', count, 7); // Cookie expires in 7 days

    // Display the count on the webpage
    document.getElementById('count-display').textContent = `Count: ${count}`;
  }

  // Run the update function on page load
  updateCount();
});
