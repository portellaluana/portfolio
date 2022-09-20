const jobs = [
  {
    name: "check<br>speech<br>ai",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "http://www.google.com",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "http://www.google.com",
        img: "./assets/new-icon-light.png",
      },
    ],
    backgroundHover: "./assets/portfolio-gallery-checkspeechai.png",
  },

  {
    name: "rachadinha",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "http://www.google.com",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "http://www.google.com",
        img: "./assets/new-icon-light.png",
      },
    ],
    backgroundHover: "./assets/portfolio-gallery-rachadinha.png",
  },

  {
    name: "run<br>mario<br>run",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "http://www.google.com",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "http://www.google.com",
        img: "./assets/new-icon-light.png",
      },
    ],
    backgroundHover: "./assets/portfolio-gallery-mario.png",
  },
];

const ul = document.querySelector(".portfolio-itens");

for (i = 0; i <= jobs.length - 1; i++) {
  let li = document.createElement("li");

  let div = document.createElement("div");
  div.classList.add("icons");

  let link = document.createElement("a");
  link.classList.add("link");
  link.href = jobs[i].links[0].href;
  link.target = "_blank";

  let imgLink = document.createElement("img");
  imgLink.src = jobs[i].links[0].img; //todo links

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
}

/*
<li>
    <div class="icons">
        <a class="link" href=""><img src="./assets/github-icon-light.png" alt=""></a>
        <a class="link" href=""><img src="./assets/new-icon-light.png" alt=""></a>
    </div>
    <h2 class="name">Speech<br>ai</h2>
    <p class="ferramentas">html | css</p>
</li>*/

new ClipboardJS(".clipboard");
