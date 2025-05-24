import { jobs } from "./jobs.js";

const ul = document.querySelector(".portfolio-itens");

for (let i = 0; i <= jobs.length - 1; i++) {
  let li = document.createElement("li");
  li.classList.add("item-li");
  li.style.backgroundColor = "black";

  let div = document.createElement("div");
  div.classList.add("icons");

  let link = document.createElement("a");
  link.classList.add("link");
  link.href = jobs[i].links[0].href;
  link.target = "_blank";

  let imgLink = document.createElement("img");
  imgLink.src = jobs[i].links[0].img;

  let name = document.createElement("h2");
  name.classList.add("name");
  name.innerHTML = jobs[i].name;

  let ferramentas = document.createElement("p");
  ferramentas.classList.add("ferramentas");
  ferramentas.innerHTML = jobs[i].ferramentas;

  link.appendChild(imgLink);
  div.appendChild(link);
  li.appendChild(div);
  li.appendChild(name);
  li.appendChild(ferramentas);
  ul.appendChild(li);

  li.paramBackground = jobs[i].background;
  li.paramName = name;
  li.paramFerramentas = ferramentas;
  // li.paramLink = link;
  li.addEventListener("mouseover", mouseOverEvent);
  li.addEventListener("mouseout", mouseOutEvent);
}

function mouseOverEvent(li) {
  li.currentTarget.style.backgroundImage =
    "url(" + li.currentTarget.paramBackground + ")";
  li.currentTarget.style.backgroundColor = "";
  li.currentTarget.paramName.style.display = "none";
  li.currentTarget.paramFerramentas.style.display = "none";
}
function mouseOutEvent(li) {
  li.currentTarget.style.backgroundColor = "black";
  li.currentTarget.style.backgroundImage = "";
  li.currentTarget.paramName.style.display = "";
  li.currentTarget.paramFerramentas.style.display = "";
}

let div = document.querySelector(".redes-sociais");
const scrollingNav = "320";

let emailCopied = document.querySelector(".emailClipboard");
const clipboard = document.querySelector(".clipboard");

clipboard.addEventListener("click", function () {
  emailCopied.innerHTML = "email copied";
  clipboard.src = "./assets/copied-icon-light.png";

  setTimeout(() => {
    emailCopied.innerHTML = "luanaportella@gmail.com";
    clipboard.src = "./assets/copy-icon-light.png";
  }, 1500);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > scrollingNav) {
    div.classList.add("minhas-redes-sociais");
  } else {
    div.classList.remove("minhas-redes-sociais");
  }
});

new ClipboardJS(".clipboard");
