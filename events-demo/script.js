let clickMeButton = document.getElementById("click-me");
clickMeButton.addEventListener("click", () => {
  console.log("Clicked!");
  clickMeButton.style.color = "fuchsia";
  clickMeButton.style.backgroundColor = "white";
  clickMeButton.style.border = "3px solid fuchsia";

  document.body.style.backgroundColor = "black";
});

document.body.addEventListener("mousemove", (event) => {
  // console.log(event);
  const circle = document.getElementById("circle");
  circle.style.left = `${event.pageX - 50}px`;
  circle.style.top = `${event.pageY - 50}px`;
});