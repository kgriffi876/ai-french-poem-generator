function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tb40f7o735bc1dcb0b4c9507ada531a4";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value} in basic HTML and separate each line with a <br/>. Do not include a title for the poem and sign the poem "Shecodes AI" inside a <strong> element and only at the end of the poem`;
  let context =
    "You are a contemporary poet and love to write simple poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a French poem about ${instructionsInput.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
