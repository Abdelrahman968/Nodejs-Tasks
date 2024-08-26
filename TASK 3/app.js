// Name : Abdelrahman Ayman
// Task : 3
// Try To Fetch Data From URL "https://jsonplaceholder.typicode.com/posts" [Only The Body From ID]

/* ======================================================= */

async function testFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const pElement = document.getElementById("ranBody"); // Store the Data From [P TAG] into an Const called [pElement]
  const randomId = Math.floor(Math.random() * data.length); // Make a Random ID ---> use Floor Method To returns the largest integer
  // console.log(randomId);

  const randomBody = data[randomId].body; // Store the Data [Body] From [url--Api] into an Const called [randomBody]
  pElement.textContent = randomBody; // Change the content of [P TAG] to the new data from [randomBody]
}

testFetch(); // Function execution
setInterval(testFetch, 60000); // Function execution every 60000 milliseconds = 60 seconds

/* ======================================================= */
/* ======================================================= */
