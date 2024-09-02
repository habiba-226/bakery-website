
// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
  linksContainer.classList.toggle("show-links")
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight>navHeight){
    navbar.classList.add('fixed-nav');
  }
  else{
    navbar.classList.remove('fixed-nav');
  }
  if(scrollHeight>500){
    topLink.classList.add('show-link');
  }
  else{
    topLink.classList.remove('show-link');
  }
});

// ********** about us ************
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
 const id = e.target.dataset.id;
 if(id){
  btns.forEach(function(btn){
    btn.classList.remove("active");
    e.target.classList.add("active")
  });
  articles.forEach(function(article){
    article.classList.remove("active")
  })
  const element = document.getElementById(id);
  element.classList.add("active");
 }
});



// ********** reviews ************


// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'artist',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];    

// select items for each section
const imgContainers = document.querySelectorAll('.img-container');
const authors = document.querySelectorAll('.author');
const jobs = document.querySelectorAll('.job');
const infos = document.querySelectorAll('.info');

const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
const randomBtns = document.querySelectorAll('.random-btn');

// set starting item
let currentItem = 0;

// load initial items
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  imgContainers.forEach(container => {
    container.querySelector('img').src = item.img;
  });
  authors.forEach(author => {
    author.textContent = item.name;
  });
  jobs.forEach(job => {
    job.textContent = item.job;
  });
  infos.forEach(info => {
    info.textContent = item.text;
  });
}

// show next person
nextBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
});

// show prev person
prevBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
});

// show random person
randomBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
});
