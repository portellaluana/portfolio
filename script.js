const jobs = [
  {
    name: "check<br>speech<br>ai",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "https://github.com/portellaluana/CheckSpeech-AI",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "https://portellaluana.github.io/CheckSpeech-AI/",
        img: "./assets/new-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-checkspeechai.png",
  },
  {
    name: "run<br>mario<br>run",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "https://github.com/portellaluana/RunMarioRun",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "https://portellaluana.github.io/RunMarioRun/",
        img: "./assets/new-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-runmariorun.png",
  },

  {
    name: "rachadinha<br>divisor<br>despesa",
    ferramentas: ["html | css | js | figma"],
    links: [
      {
        href: "https://github.com/portellaluana/rachadinha",
        img: "./assets/github-icon-light.png",
      },
      {
        href: "https://portellaluana.github.io/rachadinha/",
        img: "./assets/new-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-rachadinha.png",
  },

  {
    name: "frutali",
    ferramentas: ["xd | photoshop"],
    links: [
      {
        href: "https://www.behance.net/gallery/97630845/Design-de-Interfaces-com-foco-em-ux",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-frutali.png",
  },

  {
    name: "astrobot<br>mobile<br>concept",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/125344383/Astro-Bot-Mobile-Concept",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-astrobot.png",
  },

  {
    name: "editech<br>summit",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/115237535/edTech-summit",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-editech.png",
  },

  {
    name: "miditec<br>acate",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/89334891/MIDITEC-AWARDS-2019",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-miditec.png",
  },

  {
    name: "startlab<br>acate",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/89268957/StartLab-ACATE",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-startlab.png",
  },

  {
    name: "acate",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/97623727/Relatorio-de-atividades-ACATE",
        img: "./assets/behance-icon-dark.png",
      },
    ],
    background: "./assets/portfolio-gallery-acate.png",
  },

  {
    name: "rede<br>inovação<br>floripa",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/77956463/Rede-de-Inovacao",
        img: "./assets/behance-icon-dark.png",
      },
    ],
    background: "./assets/portfolio-gallery-redeinocacao.png",
  },

  {
    name: "hempness",
    ferramentas: ["photoshop | indesign"],
    links: [
      {
        href: "https://www.behance.net/gallery/56335477/Hempness-Camisetas",
        img: "./assets/behance-icon-light.png",
      },
    ],
    background: "./assets/portfolio-gallery-hempness.png",
  },
];

const ul = document.querySelector(".portfolio-itens");

for (i = 0; i <= jobs.length - 1; i++) {
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
  imgLink.src = jobs[i].links[0].img; //todo links

  let name = document.createElement("h2");
  name.classList.add("name");
  name.innerHTML = jobs[i].name;

  let ferramentas = document.createElement("p");
  ferramentas.classList.add("ferramentas");
  ferramentas.innerHTML = jobs[i].ferramentas;

  div.appendChild(link);
  li.appendChild(div);
  li.appendChild(name);
  li.appendChild(ferramentas);
  ul.appendChild(li);

  li.paramBackground = jobs[i].background;
  li.paramName = name;
  li.paramFerramentas = ferramentas;
  li.addEventListener("mouseover", mouseOverEvent);
  li.addEventListener("mouseout", mouseOutEvent);
}

function mouseOverEvent(evt) {
  evt.currentTarget.style.backgroundImage =
    "url(" + evt.currentTarget.paramBackground + ")";
  evt.currentTarget.style.backgroundColor = "";
  evt.currentTarget.paramName.style.display = "none";
  evt.currentTarget.paramFerramentas.style.display = "none";
}
function mouseOutEvent(evt) {
  console.log("mouseOutEvent");
  evt.currentTarget.style.backgroundColor = "black";
  evt.currentTarget.style.backgroundImage = "";
  evt.currentTarget.paramName.style.display = "";
  evt.currentTarget.paramFerramentas.style.display = "";
}

new ClipboardJS(".clipboard");
