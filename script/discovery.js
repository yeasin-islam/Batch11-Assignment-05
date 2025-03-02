// alert()
document
  .getElementById("go-to-discovary-page")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./discovery.html";
    
  });
