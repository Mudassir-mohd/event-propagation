document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  console.log("Form submission prevented!");

  let nameInput = document.getElementById("name").value || "Default Name"; // Short-circuit operator
  console.log("Entered Name:", nameInput);
});

document.getElementById("myForm").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops event bubbling
  console.log("Form clicked! Bubbling stopped.");
});

document.getElementById("myForm").addEventListener("click", function (event) {
  event.stopImmediatePropagation(); // Stops all other event listeners of the same type
  console.log("This will prevent any further 'click' events on form.");
});

document.body.addEventListener("click", function () {
  console.log("Body clicked!");
});
