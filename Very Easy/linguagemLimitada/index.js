const elements1 = [0, 9, 6, 8, 9, 1, 5, 7];
const elements2 = ["Oh", "Hi", "Mark"];
const elements3 = [false, true, true, true];
const elements4 = ["It's", "not", true, 0];

const inverterOrder = (...elements) => {
  let newElements = [];
  for (let i = 1; i <= elements.length; i++) {
    newElements.push(elements[elements.length - i]);
  }
  return newElements;
};

document.querySelector("button").addEventListener("click", () => {
  console.log(inverterOrder(...elements1), elements1);
  console.log(inverterOrder(...elements2), elements2);
  console.log(inverterOrder(...elements3), elements3);
  console.log(inverterOrder(...elements4), elements4);
});
