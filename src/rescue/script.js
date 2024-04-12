$("form").on("change", ".file-upload-field", function () {
    $(this)
      .parent(".file-upload-wrapper")
      .attr(
        "data-text",
        $(this)
          .val()
          .replace(/.*(\/|\\)/, "")
      );
  });
//   description box
  (function () {
    var btn = document.getElementsByClassName("feedback-body__submit")[0];
    btn.onclick = function(e) {
        e.preventDefault()
    }
 })()
  
 // Function to handle location access
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  // Function to show position
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // Do something with latitude and longitude, like storing in hidden inputs
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  }
  
  // Function to handle errors
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
  // Event listener for the location button
  document.querySelector('.feedback-body__location').addEventListener('click', getLocation);
  