document.addEventListener("DOMContentLoaded", function () {
  const readMoreButton = document.getElementById("read-more-button");
  const personalSummary = document.getElementById("personal-summary");

  readMoreButton.addEventListener("click", function () {
    if (
      personalSummary.style.display === "none" ||
      personalSummary.style.display === ""
    ) {
      personalSummary.style.display = "block";
      readMoreButton.textContent = "Read Less";
    } else {
      personalSummary.style.display = "none";
      readMoreButton.textContent = "Read More";
    }
  });
});

// Add an event listener to change text color on click
const skillItems = document.querySelectorAll("#skills li");

skillItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Change the text color back to the default
    skillItems.forEach((skill) => {
      skill.style.color = "#555";
    });

    // Change the text color of the clicked skill
    item.style.color = "#007bff";
  });
});
