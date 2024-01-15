const results1 = [
  [1, 5, 3],
  [6, 19, 11],
  [47, 128, 5],
  [1, 93, 57, 42, 103],
];
const results2 = [
  [1, 3],
  [4, 8],
  [7, 5],
  [2, 6],
];
const results3 = [[], [], [], []];
const results4 = [
  [100, 50],
  [60, 100],
  [20, 100, 70],
  [10, 40, 80, 90],
];

const organizeResults = (...results) => {
  return results.flat().sort((a, b) => a - b);
};

document.querySelector("button").addEventListener("click", () => {
  console.log(organizeResults(...results1));
  console.log(organizeResults(...results2));
  console.log(organizeResults(...results3));
  console.log(organizeResults(...results4));
});
