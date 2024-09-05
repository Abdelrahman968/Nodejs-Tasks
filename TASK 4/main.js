// Name : Abdelrahman Ayman
// Task : 4
// Try To Fetch Images,Body,IndexNumber From URL "https://jsonplaceholder.typicode.com/photos"

/* ======================================================= */

let currentIndex = 0;
async function fetchAImage() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    const imgElement = document.getElementById("post-image");
    const titleElement = document.getElementById("image-title");
    const Cindex = document.getElementById("index");
    if (currentIndex >= data.length) {
      currentIndex = 0;
    }

    const currentImage = data[currentIndex];

    imgElement.src = currentImage.url;
    titleElement.textContent = `Title: ${currentImage.title}`;
    Cindex.textContent = `Index: ${currentIndex + 1} of ${data.length}`;

    currentIndex++;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    document.getElementById("image-title").textContent =
      "An error occurred while fetching data. Try again.";
  }
}

fetchAImage();
setInterval(fetchAImage, 5000); // ---> every 5s

/* ======================================================= */
/* ======================================================= */
