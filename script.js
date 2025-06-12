const maListe = document.querySelectorAll("li");
const img = document.querySelector("img");

console.log(img.src);

maListe.forEach((element) => {
  element.style.color = "red";
});

document.querySelector("button").addEventListener("click", () => {
  img.classList.toggle("hide");
});
