// Add an event listener to execute code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("ageCalculatorForm");
  // Get the modal element by its ID
  const modal = document.getElementById("myModal");
  // Get the element to display the age in the modal
  const modalAge = document.getElementById("modal-age");
  // Get the element to display the age in months in the modal
  const modalMonth = document.getElementById("modal-month_result");
  // Get the element to display the age in weeks in the modal
  const modalWeek = document.getElementById("modal-week");
  // Get the element to display the age in days in the modal
  const modalDay = document.getElementById("modal-day");
  // Get the element to display the age in hours in the modal
  const modalHours = document.getElementById("modal-hours");
  // Get the element to display the age in minutes in the modal
  const modalMinutes = document.getElementById("modal-minutes");
  // Get the element to display the age in seconds in the modal
  const modalSeconds = document.getElementById("modal-seconds");
  // Get the close button element by its class name
  const closeBtn = document.querySelector(".close");

  // Add an event listener to the form for the submit event
  form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the month value from the input field and parse it as an integer
    const month = parseInt(document.getElementById("month").value);
    // Get the day value from the input field and parse it as an integer
    const day = parseInt(document.getElementById("days").value);
    // Get the year value from the input field and parse it as an integer
    const year = parseInt(document.getElementById("year").value);

    // Check if the year is not a number
    if (isNaN(year)) {
      // Display an alert message
      alert("Please enter a valid year.");
      // Exit the function
      return;
    }

    // Create a new Date object with the provided year, month, and day
    const birthDate = new Date(year, month, day);
    // Create a new Date object for the current date and time
    const today = new Date();

    // Calculate the age in years
    let age = today.getFullYear() - birthDate.getFullYear();
    // Calculate the difference in months between today and the birth date
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birth month is later than the current month or if the birth day is later than the current day
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      // Decrement the age
      age--;
    }

    // Calculate the age in months
    const ageInMonths = age * 12 + monthDiff;
    // Calculate the age in weeks
    const ageInWeeks = Math.floor(
      (today - birthDate) / (7 * 24 * 60 * 60 * 1000)
    );
    // Calculate the age in days
    const ageInDays = Math.floor((today - birthDate) / (24 * 60 * 60 * 1000));
    // Calculate the age in hours
    const ageInHours = Math.floor((today - birthDate) / (60 * 60 * 1000));
    // Calculate the age in minutes
    const ageInMinutes = Math.floor((today - birthDate) / (60 * 1000));
    // Calculate the age in seconds
    const ageInSeconds = Math.floor((today - birthDate) / 1000);

    // Set the text content of the modalAge element to the calculated age
    modalAge.textContent = age;
    // Set the text content of the modalMonth element to the calculated age in months
    modalMonth.textContent = ageInMonths;
    // Set the text content of the modalWeek element to the calculated age in weeks
    modalWeek.textContent = ageInWeeks;
    // Set the text content of the modalDay element to the calculated age in days
    modalDay.textContent = ageInDays;
    // Set the text content of the modalHours element to the calculated age in hours
    modalHours.textContent = ageInHours;
    // Set the text content of the modalMinutes element to the calculated age in minutes
    modalMinutes.textContent = ageInMinutes;
    // Set the text content of the modalSeconds element to the calculated age in seconds
    modalSeconds.textContent = ageInSeconds;
    // Display the modal
    modal.style.display = "block";
  });

  // Add an event listener to the close button to close the modal
  closeBtn.addEventListener("click", function () {
    // Hide the modal
    modal.style.display = "none";
  });

  // Add an event listener to the window to close the modal if the user clicks outside of it
  window.addEventListener("click", function (event) {
    // Check if the clicked element is the modal
    if (event.target == modal) {
      // Hide the modal
      modal.style.display = "none";
    }
  });
});
