// alert()
document
  .getElementById("back-to-desk-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./index.html";
    alert();
  });
