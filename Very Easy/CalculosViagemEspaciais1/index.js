const calculateSpaceTravel = (number) => {
  const calculateSpaceTravel = number
    .toString()
    .split("")
    .map((number) => Math.pow(number, 2))
    .join("");
  return calculateSpaceTravel;
};

document.querySelector("button").addEventListener("click", () => {
  console.clear();
  console.log(calculateSpaceTravel(3514));
  console.log(calculateSpaceTravel(94571));
  console.log(calculateSpaceTravel(24));
  console.log(calculateSpaceTravel(745821698));
});
