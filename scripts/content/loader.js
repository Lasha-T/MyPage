document.addEventListener("DOMContentLoaded", function() {
  // Simulate a delay to showcase the loader
  setTimeout(function() {
    document.querySelector(".loader-container").style.display = "none";
    document.querySelector(".content").style.display = "block";
    homeFunction();
    document.getElementById('homeButton').style.color = 'rgb(255, 244, 119)';
  }, 1500); 
});
