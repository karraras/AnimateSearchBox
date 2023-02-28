let cloze = document.querySelector(".close");
let search = document.querySelector(".search");
let input = document.querySelector("input");
input.focus();

cloze.addEventListener("click", function () {
  document.querySelector(".input").classList.add("cloz");
  cloze.classList.add("shrink");
  document.querySelector(".result").innerHTML = "";
  input.value = "";
});
search.addEventListener("click", function () {
  input.focus();
  document.querySelector(".input").classList.remove("cloz");
  cloze.classList.remove("shrink");

  if (input.value != "") {
    document.querySelector(
      ".result"
    ).innerHTML = `You just typed ${input.value}`;
  }
});
