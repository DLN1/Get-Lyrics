const app = document.getElementById("app");

const artistName = document.createElement("input");
const songTitle = document.createElement("input");
const button = document.createElement("button");
const resultsArea = document.createElement("textarea");
const errorMessage = document.createElement("div");

app.appendChild(artistName);
app.appendChild(songTitle);
app.appendChild(button);
app.appendChild(resultsArea);
app.appendChild(errorMessage);

button.innerText = "Search";
app.style.display = "flex";
errorMessage.style.backgroundColor = "red";
errorMessage.innerText = "Please enter an artist";


button.setAttribute("disabled", "disabled");

artistName.addEventListener("keyup", function () {
  if (artistName.value <= 1) {
    button.setAttribute("disabled", "disabled");
  } else {
    button.removeAttribute("disabled");
    errorMessage.display = "none";
    errorMessage.innerText = "";
  }
});

function getData(artist, song) {
  fetch(`http://ianertson.com:3500/${artist}/${song}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        resultsArea.innerText = el.lyrics;
      });
    });
}

button.addEventListener("click", () => {
  const artist = artistName.value;
  const song = songTitle.value;

  getData(artist, song);
});
