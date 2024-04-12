document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners or any other JavaScript functionality here
    
    // Example: Toggle dark mode
    const modeSwitch = document.querySelector('.mode-switch');
    const appContainer = document.querySelector('.app-container');
    modeSwitch.addEventListener('click', function() {
      appContainer.classList.toggle('dark');
    });
    
    // Example: Toggle messages section
    const messagesBtn = document.querySelector('.messages-btn');
    const messagesSection = document.querySelector('.messages-section');
    const messagesCloseBtn = document.querySelector('.messages-close');
    messagesBtn.addEventListener('click', function() {
      messagesSection.classList.toggle('show');
    });
    messagesCloseBtn.addEventListener('click', function() {
      messagesSection.classList.remove('show');
    });
    
    // Add more JavaScript functionality as needed

// Select the SVG paths within the div with class 'dust-paarticle'
const svgPaths = document.querySelectorAll('.dust-paarticle path');

// Function to change the stroke color of SVG paths
function changeStrokeColor(color) {
  svgPaths.forEach(path => {
    path.setAttribute('stroke', color);
  });
}

// Example: Change stroke color to red
changeStrokeColor('red');
  });
  
  // JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  // Your existing code here...

  // Search functionality
  document.getElementById("search-btn").addEventListener("click", function() {
      var searchText = document.getElementById("search-input").value.toLowerCase();
      var checkupChecked = document.getElementById("checkup-checkbox").checked;
      var informationChecked = document.getElementById("information-checkbox").checked;
      var fosterChecked = document.getElementById("foster-checkbox").checked;
      var volunteeringChecked = document.getElementById("volunteering-checkbox").checked;
      var adoptionChecked = document.getElementById("adoption-checkbox").checked;

      var gridItems = document.querySelectorAll(".grid-item");

      gridItems.forEach(function(item) {
          var category = item.getAttribute("data-category").toLowerCase();
          var itemName = item.textContent.toLowerCase();

          if (
              (checkupChecked && category.includes("check-up")) ||
              (informationChecked && category.includes("information")) ||
              (fosterChecked && category.includes("foster")) ||
              (volunteeringChecked && category.includes("volunteering")) ||
              (adoptionChecked && category.includes("adoption"))
          ) {
              if (itemName.includes(searchText)) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          } else {
              item.style.display = "none";
          }
      });
  });

  // Your existing code here...
});
