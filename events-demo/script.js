let clickMeButton = document.getElementById("click-me");
clickMeButton.addEventListener("click", () => {
  console.log("Clicked!");
  clickMeButton.style.color = "fuchsia";
  clickMeButton.style.backgroundColor = "white";
  clickMeButton.style.border = "3px solid fuchsia";

  document.body.style.backgroundColor = "black";
});