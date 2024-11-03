const daysInMonth = new Date().getDate();
const habitGrid = document.querySelector(".habit-grid-nov");
const TodaysDateForRunningNov = new Date().getDate();
const novCalender = document.getElementById("november-div");
const calFunPosition = novCalender.getBoundingClientRect();

const userData = [];
for (let novMonth = 1; novMonth <= 30; novMonth++) {
  const cell = document.createElement("div");
  cell.classList.add("novMonth-cell");
  cell.textContent = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))[novMonth - 1].date
    : novMonth;
  console.log(cell.textContent);
  if (
    novMonth > TodaysDateForRunningNov ||
    novMonth < TodaysDateForRunningNov
  ) {
    cell.classList.add("disabled");
  } else {
    cell.addEventListener("click", () => {
      cell.classList.add("checked");

      const star = (yPos) => {
        emojiBlast({
          emojiCount: 1,
          emojis: ["🌊", "💦"],
          physics: {
            fontSize: { max: 38, min: 32 },
            gravity: 0.05,
            initialVelocities: {
              x: 45,
              y: -10,
            },
          },
          position: {
            x: 0,
            y: yPos,
          },
        });
      };
      const sparkles = (yPos, size) => {
        emojiBlast({
          emojiCount: 1,
          emojis: ["🌵"],
          physics: {
            fontSize: size,
            gravity: 0.05,
            initialVelocities: {
              rotation: 0,
              x: 45,
              y: -10,
            },
          },
          position: {
            x: 0,
            y: yPos,
          },
        });
      };
      const cactochan = () => {
        const randYPos = Math.random() * innerHeight + 100;
        let emojiSize = 45;
        star(randYPos);
        const intervalId2 = setInterval(() => {
          sparkles(randYPos, emojiSize);
          emojiSize -= 3;
        }, 60);
        setTimeout(() => {
          clearInterval(intervalId2);
        }, 400);
      };
      const intervalId = setInterval(cactochan, 60);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 2e3);
      const existingObject = userData.find((obj) => obj.id === novMonth);
      if (existingObject) {
        existingObject.date = "🌵";
        existingObject.checked = true;
      } else {
        userData.push({ id: novMonth, date: "🌵", checked: true });
        console.log(userData);
      }
      localStorage.setItem("userData", JSON.stringify(userData));
    });
  }
  habitGrid.appendChild(cell);
}

// -----------  December 2024 -----------

// const decMonthRunning = new Date.getMonth() === 10;

// if (decMonthRunning) {
//   const habitGridDec = document.querySelector(".habit-grid-dec");
//   const TodaysDateForRunningDec = new Date().getDate();
//   for (let decMonth = 1; decMonth <= 30; decMonth++) {
//     const cell = document.createElement("div");
//     cell.classList.add("decMonth-cell");
//     cell.textContent = decMonth;

//     if (
//       decMonth > TodaysDateForRunningDec ||
//       decMonth < TodaysDateForRunningDec
//     ) {
//       cell.classList.add("disabled");
//     } else {
//       cell.addEventListener("click", () => {
//         cell.classList.add("checked");
//         cell.textContent = "🌵";
//       });
//     }
//     habitGrid.appendChild(cell);
//   }
// }

// for (let novMonth = 1; novMonth <= 30; novMonth++) {
//   const cell = document.createElement("div");
//   cell.classList.add("novMonth-cell");
//   const userData = [{
//     date: novMonth,
//     checked: false,
//   }];
//   cell.textContent = localStorage.getItem("cellContent") ?? cell.textContent;

//   if (
//     novMonth > TodaysDateForRunningNov ||
//     novMonth < TodaysDateForRunningNov
//   ) {
//     cell.classList.add("disabled");
//     localStorage.setItem("cellContent", JSON.stringify(cell.textContent));
//   } else {
//     cell.addEventListener("click", () => {
//       cell.classList.add("checked");
//       cell.textContent = "🌵";
//       localStorage.setItem("userData", JSON.stringify(userData));
//     });
//   }
//   habitGrid.appendChild(cell);
// }

// novMonth > TodaysDateForRunningNov ||
// novMonth < TodaysDateForRunningNov
