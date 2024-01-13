const hiddenStory = (strings) => {
  const hiddenStory = strings
    .replace(/[^a-zA-Z\s]/g, "")
    .toLowerCase()
    .split(" ")
    .map((string) => string.split("").reverse().join(""))
    .join(" ");

  return hiddenStory;
};

document.querySelector("button").addEventListener("click", () => {
  console.clear();
  console.log(hiddenStory("Lorem ipsum dolore sec avanti"));
  console.log(hiddenStory("This is an apple"));
  console.log(hiddenStory("May the force be with you"));
  console.log(hiddenStory("It's over nine thousand"));
});
