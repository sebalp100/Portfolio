const menu = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop');
const scrollb = document.querySelector('body');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  popUp.classList.toggle('active');
  scrollb.classList.toggle('active');
});

document.querySelectorAll('.menu-links').forEach((i) => i.addEventListener('click', () => {
  menu.classList.remove('active');
  popUp.classList.remove('active');
  scrollb.classList.remove('active');
}));

let projectOne = {
  name: "Tonic",
  position: "CANOPY Back End Dev 2015",
  image: "images/Snapshoot Portfolio.png",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ["html", "css", "javascript"],
  livelink: "link",
  sourcelink: "link",
};

let projectTwo = Object.create(projectOne);
projectTwo.name = "Multy-Post Stories";
projectTwo.image = "images/avail.png"

let projectThree = Object.create(projectOne);
projectThree.image = "images/yoga.png"

let projectFour = Object.create(projectOne);
projectFour.name = "Multy-Post Stories";
projectFour.image = "images/art printing.png"

let projectFive = {
  name: "Tonic",
  position: "CANOPY Back End Dev 2015",
  image: "images/modalone.png",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ["html", "css", "javascript, github, ruby, bootstraps"],
  livelink: "link",
  sourcelink: "link",
}

const body = document.querySelector("body");

let opened = document.querySelector(".projButtOne");
opened.addEventListener("click", () => {
  const newSection = document.createElement('div');
  newSection.id = "modals";
  const modal = document.createElement('div');
  modal.className = "modal";
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectOne);
  const closed = document.querySelector('.xButt');
  closed.addEventListener("click", () => {
    body.removeChild(newSection);
  })
});

let opened2 = document.querySelector(".projButtTwo");
opened2.addEventListener("click", () => {
  const newSection = document.createElement('div');
  newSection.id = "modals";
  const modal = document.createElement('div');
  modal.className = "modal";
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectTwo);
  const closed = document.querySelector('.xButt');
  closed.addEventListener("click", () => {
    body.removeChild(newSection);
  })
});

let opened3 = document.querySelector(".projButtThree");
opened3.addEventListener("click", () => {
  const newSection = document.createElement('div');
  newSection.id = "modals";
  const modal = document.createElement('div');
  modal.className = "modal";
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectThree);
  const closed = document.querySelector('.xButt');
  closed.addEventListener("click", () => {
    body.removeChild(newSection);
  })
});

let opened4 = document.querySelector(".projButtFour");
opened4.addEventListener("click", () => {
  const newSection = document.createElement('div');
  newSection.id = "modals";
  const modal = document.createElement('div');
  modal.className = "modal";
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectFour);
  const closed = document.querySelector('.xButt');
  closed.addEventListener("click", () => {
    body.removeChild(newSection);
  })
});

let opened5 = document.querySelector(".projButtFive");
opened5.addEventListener("click", () => {
  const newSection2 = document.createElement('div');
  newSection2.id = "modals2";
  const modal = document.createElement('div');
  modal.className = "modal";
  newSection2.appendChild(modal);
  body.appendChild(newSection2);
  createModalDesktop(projectFive);
  const closed = document.querySelector('.xButt');
  closed.addEventListener("click", () => {
    body.removeChild(newSection2);
  })
});

function createModal(projectName) {

  let h2 = document.createElement("h2");
  h2.className = "modalh2";
  let text = document.createTextNode(projectName.name);
  h2.appendChild(text);
  document.getElementById("modals").appendChild(h2);

  let xbutt = document.createElement("img");
  xbutt.src = "images/x.png";
  xbutt.className = "xButt";
  h2.append(xbutt);

  let subtext = document.createElement("p");
  subtext.className = "date";
  let posit = document.createTextNode(projectName.position);
  subtext.appendChild(posit);
  document.getElementById("modals").appendChild(subtext);

  let image = document.createElement("img");
  image.src = projectName.image;
  document.getElementById("modals").appendChild(image);

  let subtext2 = document.createElement("p");
  subtext2.className = "date";
  let descript = document.createTextNode(projectName.description);
  subtext2.appendChild(descript);
  document.getElementById("modals").appendChild(subtext2);

  let newDiv2 = document.createElement("div");
  newDiv2.id = "newDiv2";
  document.getElementById("modals").appendChild(newDiv2);

  let techno1 = document.createElement("button");
  techno1.className = "techno-button";
  let technoIcon1 = document.createTextNode(projectName.technologies[0]);
  techno1.appendChild(technoIcon1);
  newDiv2.append(techno1)

  let techno2 = document.createElement("button");
  techno2.className = "techno-button";
  let technoIcon2 = document.createTextNode(projectName.technologies[1]);
  techno2.appendChild(technoIcon2);
  newDiv2.append(techno2);

  let techno3 = document.createElement("button");
  techno3.className = "techno-button";
  let technoIcon3 = document.createTextNode(projectName.technologies[2]);
  techno3.appendChild(technoIcon3);
  newDiv2.append(techno3);

  let newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  document.getElementById("modals").appendChild(newDiv);

  let live = document.createElement("button");
  live.className = "project-button source";
  let buttonText = document.createTextNode("see live");
  live.appendChild(buttonText);
  document.getElementById("newDiv").appendChild(live);

  let source = document.createElement("button");
  source.className = "project-button source";
  let buttonText2 = document.createTextNode("see source");
  source.appendChild(buttonText2);
  document.getElementById("newDiv").appendChild(source);
};

function createModalDesktop(projectName) {
  let h2 = document.createElement("h2");
  h2.className = "modalh2";
  let text = document.createTextNode(projectName.name);
  h2.appendChild(text);
  document.getElementById("modals2").appendChild(h2);

  let xbutt = document.createElement("img");
  xbutt.src = "images/x.png";
  xbutt.className = "xButt";
  h2.append(xbutt);

  let subtext = document.createElement("p");
  subtext.className = "date";
  let posit = document.createTextNode(projectName.position);
  subtext.appendChild(posit);
  document.getElementById("modals2").appendChild(subtext);

  let image = document.createElement("img");
  image.className = "main-poster";
  image.src = projectName.image;
  document.getElementById("modals2").appendChild(image);

  let newDiv1 = document.createElement("div");
  newDiv1.id = "newDiv1";
  document.getElementById("modals2").appendChild(newDiv1);

  let subtext2 = document.createElement("p");
  subtext2.className = "date";
  let descript = document.createTextNode(projectName.description);
  subtext2.appendChild(descript);
  newDiv1.append(subtext2);

  let newDiv2 = document.createElement("div");
  newDiv2.id = "newDiv2";
  document.getElementById("newDiv1").appendChild(newDiv2);

  let techno1 = document.createElement("button");
  techno1.className = "techno-button";
  let technoIcon1 = document.createTextNode(projectName.technologies[0]);
  techno1.appendChild(technoIcon1);
  newDiv2.append(techno1)

  let techno2 = document.createElement("button");
  techno2.className = "techno-button";
  let technoIcon2 = document.createTextNode(projectName.technologies[1]);
  techno2.appendChild(technoIcon2);
  newDiv2.append(techno2);

  let techno3 = document.createElement("button");
  techno3.className = "techno-button";
  let technoIcon3 = document.createTextNode(projectName.technologies[2]);
  techno3.appendChild(technoIcon3);
  newDiv2.append(techno3);

  let newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  document.getElementById("modals2").appendChild(newDiv);

  let live = document.createElement("button");
  live.className = "project-button source";
  let buttonText = document.createTextNode("see live");
  live.appendChild(buttonText);
  document.getElementById("newDiv").appendChild(live);

  let source = document.createElement("button");
  source.className = "project-button source";
  let buttonText2 = document.createTextNode("see source");
  source.appendChild(buttonText2);
  document.getElementById("newDiv").appendChild(source);
}