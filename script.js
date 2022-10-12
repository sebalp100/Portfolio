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

const projectOne = {
  name: 'Tonic',
  position: 'CANOPY Back End Dev 2015',
  image: 'images/Snapshoot Portfolio.png',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: ['html', 'css', 'javascript'],
  livelink: 'link',
  sourcelink: 'link',
};

const projectTwo = Object.create(projectOne);
projectTwo.name = 'Multy-Post Stories';
projectTwo.image = 'images/avail.png';

const projectThree = Object.create(projectOne);
projectThree.image = 'images/yoga.png';

const projectFour = Object.create(projectOne);
projectFour.name = 'Multy-Post Stories';
projectFour.image = 'images/art printing.png';

const projectFive = {
  name: 'Tonic',
  position: 'CANOPY Back End Dev 2015',
  image: 'images/modalone.png',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstraps'],
  livelink: 'link',
  sourcelink: 'link',
};

const projectSix = Object.create(projectFive);
projectSix.name = 'Multy-Post Stories';
projectSix.position = 'FACEBOOK Full Stack Dev 2015';

const projectSeven = Object.create(projectFive);
projectSeven.name = 'Facebook 360';
projectSeven.position = 'FACEBOOK Full Stack Dev 2015';

const projectEight = Object.create(projectFive);
projectEight.name = 'Facebook 360';
projectEight.position = 'UBER Lead Developer 2018';

const body = document.querySelector('body');

const opened = document.querySelector('.projButtOne');
opened.addEventListener('click', () => {
  const newSection = document.createElement('div');
  newSection.id = 'modals';
  const modal = document.createElement('div');
  modal.className = 'modal';
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectOne);
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection);
  });
});

const opened2 = document.querySelector('.projButtTwo');
opened2.addEventListener('click', () => {
  const newSection = document.createElement('div');
  newSection.id = 'modals';
  const modal = document.createElement('div');
  modal.className = 'modal';
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectTwo);
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection);
  });
});

const opened3 = document.querySelector('.projButtThree');
opened3.addEventListener('click', () => {
  const newSection = document.createElement('div');
  newSection.id = 'modals';
  const modal = document.createElement('div');
  modal.className = 'modal';
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectThree);
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection);
  });
});

const opened4 = document.querySelector('.projButtFour');
opened4.addEventListener('click', () => {
  const newSection = document.createElement('div');
  newSection.id = 'modals';
  const modal = document.createElement('div');
  modal.className = 'modal';
  newSection.appendChild(modal);
  body.appendChild(newSection);
  createModal(projectFour);
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection);
  });
});

const opened5 = document.querySelector('.projButtFive');
opened5.addEventListener('click', () => {
  const newSection2 = document.createElement('div');
  newSection2.id = 'modals2';
  const modal = document.createElement('div');
  const mainBack = document.querySelector('main');
  mainBack.className = 'mainBack';
  modal.className = 'modal';
  newSection2.appendChild(modal);
  body.appendChild(newSection2);
  createModalDesktop(projectFive);
  mainBack.classList.toggle('active');
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection2);
    mainBack.classList.remove('active');
  });
});

const opened6 = document.querySelector('.projButtSix');
opened6.addEventListener('click', () => {
  const newSection2 = document.createElement('div');
  newSection2.id = 'modals2';
  const modal = document.createElement('div');
  const mainBack = document.querySelector('main');
  mainBack.className = 'mainBack';
  modal.className = 'modal';
  newSection2.appendChild(modal);
  body.appendChild(newSection2);
  createModalDesktop(projectSix);
  mainBack.classList.toggle('active');
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection2);
    mainBack.classList.remove('active');
  });
});

const opened7 = document.querySelector('.projButtSeven');
opened7.addEventListener('click', () => {
  const newSection2 = document.createElement('div');
  newSection2.id = 'modals2';
  const modal = document.createElement('div');
  const mainBack = document.querySelector('main');
  mainBack.className = 'mainBack';
  modal.className = 'modal';
  newSection2.appendChild(modal);
  body.appendChild(newSection2);
  createModalDesktop(projectSeven);
  mainBack.classList.toggle('active');
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection2);
    mainBack.classList.remove('active');
  });
});

const opened8 = document.querySelector('.projButtEight');
opened8.addEventListener('click', () => {
  const newSection2 = document.createElement('div');
  newSection2.id = 'modals2';
  const modal = document.createElement('div');
  const mainBack = document.querySelector('main');
  mainBack.className = 'mainBack';
  modal.className = 'modal';
  newSection2.appendChild(modal);
  body.appendChild(newSection2);
  createModalDesktop(projectEight);
  mainBack.classList.toggle('active');
  const closed = document.querySelector('.xButt');
  closed.addEventListener('click', () => {
    body.removeChild(newSection2);
    mainBack.classList.remove('active');
  });
});

function createModal(projectName) {
  const h2 = document.createElement('h2');
  h2.className = 'modalh2';
  const text = document.createTextNode(projectName.name);
  h2.appendChild(text);
  document.getElementById('modals').appendChild(h2);

  const xbutt = document.createElement('img');
  xbutt.src = 'images/x.png';
  xbutt.className = 'xButt';
  h2.append(xbutt);

  const subtext = document.createElement('p');
  subtext.className = 'date';
  const posit = document.createTextNode(projectName.position);
  subtext.appendChild(posit);
  document.getElementById('modals').appendChild(subtext);

  const image = document.createElement('img');
  image.src = projectName.image;
  document.getElementById('modals').appendChild(image);

  const subtext2 = document.createElement('p');
  subtext2.className = 'date';
  const descript = document.createTextNode(projectName.description);
  subtext2.appendChild(descript);
  document.getElementById('modals').appendChild(subtext2);

  const newDiv2 = document.createElement('div');
  newDiv2.id = 'newDiv2';
  document.getElementById('modals').appendChild(newDiv2);

  const techno1 = document.createElement('button');
  techno1.className = 'techno-button';
  const technoIcon1 = document.createTextNode(projectName.technologies[0]);
  techno1.appendChild(technoIcon1);
  newDiv2.append(techno1);

  const techno2 = document.createElement('button');
  techno2.className = 'techno-button';
  const technoIcon2 = document.createTextNode(projectName.technologies[1]);
  techno2.appendChild(technoIcon2);
  newDiv2.append(techno2);

  const techno3 = document.createElement('button');
  techno3.className = 'techno-button';
  const technoIcon3 = document.createTextNode(projectName.technologies[2]);
  techno3.appendChild(technoIcon3);
  newDiv2.append(techno3);

  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  document.getElementById('modals').appendChild(newDiv);

  const live = document.createElement('button');
  live.className = 'project-button source';
  const buttonText = document.createTextNode('see live');
  live.appendChild(buttonText);
  document.getElementById('newDiv').appendChild(live);

  const source = document.createElement('button');
  source.className = 'project-button source';
  const buttonText2 = document.createTextNode('see source');
  source.appendChild(buttonText2);
  document.getElementById('newDiv').appendChild(source);
}

function createModalDesktop(projectName) {
  const h2 = document.createElement('h2');
  h2.className = 'modalh2';
  const text = document.createTextNode(projectName.name);
  h2.appendChild(text);
  document.getElementById('modals2').appendChild(h2);

  const xbutt = document.createElement('img');
  xbutt.src = 'images/x.png';
  xbutt.className = 'xButt';
  h2.append(xbutt);

  const subtext = document.createElement('p');
  subtext.className = 'date';
  const posit = document.createTextNode(projectName.position);
  subtext.appendChild(posit);
  document.getElementById('modals2').appendChild(subtext);

  const image = document.createElement('img');
  image.className = 'main-poster';
  image.src = projectName.image;
  document.getElementById('modals2').appendChild(image);

  const newDiv1 = document.createElement('div');
  newDiv1.id = 'newDiv1';
  document.getElementById('modals2').appendChild(newDiv1);

  const subtext2 = document.createElement('p');
  subtext2.className = 'date';
  const descript = document.createTextNode(projectName.description);
  subtext2.appendChild(descript);
  newDiv1.append(subtext2);

  const newDiv2 = document.createElement('div');
  newDiv2.id = 'newDivDeskt';
  document.getElementById('newDiv1').appendChild(newDiv2);

  const techno1 = document.createElement('button');
  techno1.className = 'techno-button';
  const technoIcon1 = document.createTextNode(projectName.technologies[0]);
  techno1.appendChild(technoIcon1);
  newDiv2.append(techno1);

  const techno2 = document.createElement('button');
  techno2.className = 'techno-button';
  const technoIcon2 = document.createTextNode(projectName.technologies[1]);
  techno2.appendChild(technoIcon2);
  newDiv2.append(techno2);

  const techno3 = document.createElement('button');
  techno3.className = 'techno-button';
  const technoIcon3 = document.createTextNode(projectName.technologies[2]);
  techno3.appendChild(technoIcon3);
  newDiv2.append(techno3);

  const techno4 = document.createElement('button');
  techno4.className = 'techno-button';
  const technoIcon4 = document.createTextNode(projectName.technologies[3]);
  techno4.appendChild(technoIcon4);
  newDiv2.append(techno4);

  const techno5 = document.createElement('button');
  techno5.className = 'techno-button';
  const technoIcon5 = document.createTextNode(projectName.technologies[4]);
  techno5.appendChild(technoIcon5);
  newDiv2.append(techno5);

  const techno6 = document.createElement('button');
  techno6.className = 'techno-button';
  const technoIcon6 = document.createTextNode(projectName.technologies[5]);
  techno6.appendChild(technoIcon6);
  newDiv2.append(techno6);

  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  newDiv2.append(newDiv);

  const live = document.createElement('button');
  live.className = 'project-button source';
  const buttonText = document.createTextNode('see live');
  live.appendChild(buttonText);
  document.getElementById('newDiv').appendChild(live);

  const source = document.createElement('button');
  source.className = 'project-button source';
  const buttonText2 = document.createTextNode('see source');
  source.appendChild(buttonText2);
  document.getElementById('newDiv').appendChild(source);
}