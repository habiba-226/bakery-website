const menu = [
  {
    id: 1,
    title: "mini croissants",
    category: "bakeries",
    price: 15.99,
    img: "./imagess/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "buttermilk croissants",
    category: "bakeries",
    price: 13.99,
    img: "./imagess/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "spanish latte",
    category: "drinks",
    price: 6.99,
    img: "./imagess/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "mini brownies",
    category: "desserts",
    price: 20.99,
    img: "./imagess/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "cookie bites",
    category: "desserts",
    price: 22.99,
    img: "./imagess/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "strawberry milk tea",
    category: "drinks",
    price: 15.99,
    img: "./imagess/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "souffle cake",
    category: "desserts",
    price: 8.99,
    img: "./imagess/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "iced caramel macchiato",
    category: "drinks",
    price: 12.99,
    img: "./imagess/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "pink lemonade",
    category: "drinks",
    price: 12.99,
    img: "./imagess/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }, 
  {
    id: 10,
    title: "mini donuts",
    category: "desserts",
    price: 7.99,
    img: "./imagess/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "petit four (savoury)",
    category: "bakeries",
    price: 12,
    img: "./imagess/item-11.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "petit four (sweet)",
    category: "desserts",
    price: 13.99,
    img: "./imagess/item-12.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');


//load items
window.addEventListener('DOMContentLoaded',function(){
 displayMenuItems(menu);
});

//filter items
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
          return menuItem;
        }
      });
      if(category=== 'all'){
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }
  });
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title}/>
                <div class="item-info">
                  <header>   
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
                </div>
           </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}