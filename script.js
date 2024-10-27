const daysInMonth = new Date().getDate();
const habitGrid = document.getElementById("habitGrid");

const currentDate = new Date().getDate();

for (let day = 1; day <= 30; day++) {
  const cell = document.createElement("div");
  cell.classList.add("day-cell");
  cell.textContent = day;

  if (day > currentDate || day < currentDate) {
    cell.classList.add("disabled");
  } else {
    cell.addEventListener("click", () => {
      cell.classList.add("checked");
      cell.textContent = "☃️";
    });
  }
  habitGrid.appendChild(cell);
}
