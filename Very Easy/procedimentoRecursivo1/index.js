const chunksTest = (amount) => {
  const chunk = new Array(amount).fill("chunk");
  return chunk.join("-");
};

document.querySelector("button").addEventListener("click", () => {
  console.clear();
  console.log(chunksTest(4));
  console.log(chunksTest(1));
  console.log(chunksTest(8));
  console.log(chunksTest(2));
});
