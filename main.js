const azonElem = document.querySelector("#azon");
console.log(azonElem);

azonElem.innerHTML = "<p>Alakul a js</p>";

const kartyaElemek = document.querySelectorAll(".kartya");
kartyaElemek[3].innerHTML = "Beleírtunk";

const gombElem = document.querySelectorAll("button")[0];
gombElem.addEventListener("click", gombraKattint);

function gombraKattint() {
  kartyaElemek[0].innerHTML += kartyaElemek[3].innerHTML;
}
