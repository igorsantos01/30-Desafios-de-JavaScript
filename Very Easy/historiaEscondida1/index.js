const hiddenStory = (strings) => {
  const hiddenStory = strings
    .replace(/[^a-zA-Z\s]/g, "")
    .toLowerCase()
    .split("")
    .sort();
  return hiddenStory[hiddenStory.length - 1];
};

document.querySelector("button").addEventListener("click", () => {
  console.clear();
  console.log(hiddenStory("Lorem ipsum dolore sec avanti"));
  console.log(hiddenStory("Hello"));
  console.log(hiddenStory("May the force be with you"));
  console.log(hiddenStory("It's over nine thousand"));
});
