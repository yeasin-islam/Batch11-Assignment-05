// function for change body color
function changeBodyColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

//Function for converted a inner text String to Intiger
function getInnerTextByID(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

//Function for set a value in a inner text by id
function getInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

// Function for Just time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Function for showing corrent date
function dailyUpdateDate() {
  let date = new Date();

  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dayName = dayNames[date.getDay()];
  let tarikh = date.getDate();
  let monthName = monthNames[date.getMonth()];
  let year = date.getFullYear();

  document.getElementById("currentDate").innerHTML = `
      <span class="text-lg font-normal">${dayName}</span> , <br />${monthName} ${tarikh} ${year}
      `;
}
window.onload = dailyUpdateDate;

//Function for complete task, sub,sum and history save
function handleTaskCompletion(
  completeButtonIds,
  boxHeadingIds,
  historyContainerId
) {
  let totalTasks = completeButtonIds.length;
  let completedTasks = 0;

  completeButtonIds.forEach((completeButtonId, index) => {
    let button = document.getElementById(completeButtonId);
    button.disabled = index !== 0;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Board updated Successfully");

      const taskAssignedNumber = getInnerTextByID("task-assigned-number");
      const navbarCheckboxNumber = getInnerTextByID("navbar-checkbox-number");

      const sub = taskAssignedNumber - 1;
      const sum = navbarCheckboxNumber + 1;

      getInnerTextByIdAndValue("task-assigned-number", sub);
      getInnerTextByIdAndValue("navbar-checkbox-number", sum);

      this.disabled = true;
      this.className =
        "opacity-10 bg-[#3752FD] rounded-md px-3 py-2 text-sm font-medium text-white";

      const heading = document.getElementById(boxHeadingIds[index]).innerText;
      const time = getCurrentTime();

      const container = document.getElementById(historyContainerId);
      const div = document.createElement("div");
      div.classList.add("bg-none");
      div.innerHTML = `
                  <p class="text-gray-600 text-sm p-3 my-4 bg-[#F4F7FF] py-2 rounded-lg">
                      You have completed the task ${heading} at ${time}.
                  </p>
              `;
      container.appendChild(div);

      completedTasks++;

      if (index + 1 < totalTasks) {
        document.getElementById(completeButtonIds[index + 1]).disabled = false;
      }

      if (completedTasks === totalTasks) {
        alert("Congratulations!!! You have completed all the task.☺");
      }
    });
  });
}

//Function for clear history
function hendelHistory() {
  document.getElementById("activlog-history").innerHTML = '';
}