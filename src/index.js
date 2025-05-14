function showAnswer(response) {
  console.log(response);
}

let apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
let prompt = "What is the best country to visit?";
let context =
  "Please give me one country that is safe, fun, cheap has great food and a warm climate.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
