document.addEventListener("DOMContentLoaded", function() {
  const showButton = document.getElementById("showButton");
  const hideButton = document.getElementById("hideButton");
  const contentSection = document.getElementById("contentSection");

  showButton.addEventListener("click", function() {
    contentSection.style.display = "block";
    showButton.style.display = "none";
  });

  hideButton.addEventListener("click", function() {
    contentSection.style.display = "none";
    showButton.style.display = "block";
  });
});




// document.addEventListener("DOMContentLoaded", function() {
//     const toggleButton = document.getElementById("toggleButton");
//     const contentSection = document.getElementById("contentSection");
  
//     toggleButton.addEventListener("click", function() {
//       if (contentSection.style.display === "none") {
//         contentSection.style.display = "block";
//       } else {
//         contentSection.style.display = "none";
//       }
//     });
//   });
