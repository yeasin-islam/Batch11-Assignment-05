// alert()
document
  .getElementById("box-1-complete-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const taskAssignedNumber = getInnerTextByID("task-assigned-number");
    const navbarCheckboxNumber = getInnerTextByID("navbar-checkbox-number");

    const sub = taskAssignedNumber - 1;
    const sum = navbarCheckboxNumber + 1;

    getInnerTextByIdAndValue("task-assigned-number", sub);
    getInnerTextByIdAndValue("navbar-checkbox-number", sum);

    this.disabled = true;
    let a = document.getElementById("box-1-complete-btn");
    a.className =
      "opacity-10 bg-[#3752FD] rounded-md px-3 py-2 text-sm font-medium text-white";

    const heading = document.getElementById("box-1-heading").innerText;
    const time = getCurrentTime();

    const container = document.getElementById("activlog-history");
    const div = document.createElement("div");
    div.classList.add("bg-none");
    div.innerHTML = `
                    <p class="text-gray-600 text-sm p-3 my-4 bg-[#F4F7FF] py-2">
                You have completed the task ${heading} at ${time}.
              </p>
              <hr />
     
                `;

    container.appendChild(div);
  });
