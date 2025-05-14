function showAnswer(response) {
  console.log(response.data.answer);
  let answer = response.data.answer;
  alert(`Holiday recommendation: ${answer}`);
}

let apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
let prompt = "What is the best country to visit right now?";
let context =
  "Please give me one country that is safe, fun, cheap has great food and a warm climate. Please pick one country, short answer (max. 50 characters). so I can use it on my webpage. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing...");
axios.get(apiUrl).then(showAnswer);
