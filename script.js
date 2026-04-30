const products = document.getElementById("products");
const search = document.getElementById("search");
const columnsSelect = document.getElementById("columnsSelect");

const items = [

/* КРЕМ */
{name:"Крем + Максимайзер",tags:"крем",desc:"Склад: крем + максимайзер",discount:"100 грн",icon:"🧴💋",img:"images/krem-max.jpg"},
{name:"3 Крема",tags:"крем",desc:"Склад: 3 крема",discount:"100 грн",icon:"🧴🧴🧴",img:"images/3-krema.jpg"},
{name:"Парфум10 + Крем",tags:"крем парфум",desc:"Склад: парфум 10 мл + крем",discount:"150 грн",icon:"🌸🧴",img:"images/parfum-krem.jpg"},
{name:"Гідрейтер + Крем",tags:"крем гідрейтер догляд",desc:"Склад: гідрейтер + крем",discount:"100 грн",icon:"💧🧴",img:"images/hydrater-krem.jpg"},
{name:"Лосьйон250 + Крем",tags:"лосьйон крем",desc:"Склад: лосьйон + крем",discount:"150 грн",icon:"🧴💚",images:[
    "images/krem.jpg",
    "images/losyon250.jpg"
  ]},
{name:"Тверде мило + Крем",tags:"мило крем",desc:"Склад: мило + крем",discount:"100 грн",icon:"🧼🧴",img:"images/soap-krem.jpg"},
{name:"Міст + Крем",tags:"крем",desc:"Склад: міст + крем",discount:"100 грн",icon:"✨🧴",img:"images/mist-krem.jpg"},

/* ПАРФУМИ */
{name:"Максимайзер + Гідрейтер",tags:"догляд",desc:"Склад: максимайзер + гідрейтер",discount:"150 грн",icon:"💋💧",images:[
    "images/maximazer.jpg",
    "images/hydrater.jpg"
  ]},
{name:"Парфум10 + Максимайзер",tags:"парфум",desc:"Склад: парфум + максимайзер",discount:"150 грн",icon:"🌸💋",images:[
    "images/maximazer.jpg",
    "images/parfum10.jpg"
  ]},
{name:"Парфум10 + Парфум50",tags:"парфум",desc:"Склад: 10 мл + 50 мл",discount:"250 грн",icon:"🌸💫",images:[
    "images/parfum10.jpg",
    "images/parfum50.jpg"
  ]},
{name:"Міст + Парфум10",tags:"парфум",desc:"Склад: міст + парфум",discount:"150 грн",icon:"✨🌸",img:"images/mist-parfum.jpg"},
{name:"Міксологія",tags:"парфум",desc:"Склад: парфумний набір",discount:"440 грн",icon:"🌺✨",img:"images/mixology.jpg"},

/* ДІМ */
{name:"2 Дифузора",tags:"диф",desc:"Склад: 2 дифузора",discount:"200 грн",icon:"🏠🏠",img:"images/2-dif.jpg"},
{name:"Рефіл + Дифузор",tags:"диф",desc:"Склад: рефіл + дифузор",discount:"200 грн",icon:"♻️🏠",img:"images/refill-dif.jpg"},
{name:"Свічка + Дифузор",tags:"диф",desc:"Склад: свічка + дифузор",discount:"250 грн",icon:"🕯️🏠",images:[
    "images/svichka.jpg",
    "images/dif.jpg"
  ]},
{name:"Аромат в авто + Дифузор",tags:"диф",desc:"Склад: авто аромат + дифузор",discount:"250 грн",icon:"🚗🏠",img:"images/car-dif.jpg"},
{name:"Мило500 + Дифузор",tags:"мило диф",desc:"Склад: мило + дифузор",discount:"200 грн",icon:"🧼🏠",img:"images/soap-dif.jpg"},
{name:"8 Дифузорів",tags:"диф",desc:"Склад: 8 дифузорів",discount:"1898 грн",icon:"🏠✨",img:"images/8-dif.jpg"},
{name:"Рефіл + 2 Дифузора",tags:"диф",desc:"Склад: рефіл + 2 дифузора",discount:"345 грн",icon:"♻️🏠🏠",img:"images/refill-2dif.jpg"},

/* ТІЛО */
{name:"Лосьйон250 + Гель250 + Крем",tags:"лосьйон гель крем",desc:"Склад: лосьйон + гель + крем",discount:"200 грн",icon:"💚🧴",img:"images/body-set1.jpg"},
{name:"Гель100 + Лосьйон100",tags:"лосьйон гель",desc:"Склад: гель + лосьйон",discount:"150 грн",icon:"💚💧",img:"images/body-set2.jpg"},
{name:"Лосьйон250 + Гель250",tags:"лосьйон гель",desc:"Склад: лосьйон + гель",discount:"150 грн",icon:"💚✨",img:"images/body-set3.jpg"},
{name:"Інтим250 + Гель250",tags:"гель",desc:"Склад: інтим + гель",discount:"250 грн",icon:"💗💧",img:"images/intim-gel.jpg"},
{name:"Део + Гель250",tags:"гель",desc:"Склад: део + гель",discount:"150 грн",icon:"🌿💧",img:"images/deo-gel.jpg"},
{name:"3 Крема + 3 Лосьйони + 3 Гелі",tags:"крем лосьйон гель",desc:"Великий набір догляду",discount:"1250 грн",icon:"💖🧴",img:"images/mega-set.jpg"},
{name:"Тверде мило + Лосьйон250",tags:"мило лосьйон",desc:"Склад: мило + лосьйон",discount:"150 грн",icon:"🧼💚",images:[
    "images/tverdemylo.jpg",
    "images/losyon250.jpg"
  ]}

];

function show(data){
  products.innerHTML="";

  data.forEach(item=>{

    let imageBlock = "";

    if(item.img){
      imageBlock = `<img src="${item.img}" class="photo">`;
    } else if(item.images){
      imageBlock = `
        <div class="images">
          ${item.images.map(img => `<img src="${img}">`).join("")}
        </div>
      `;
    } else {

      imageBlock = `<div class="no-image">Нема фото</div>`;
    }

    products.innerHTML += `
      <div class="card">
        ${imageBlock}
        <div class="title">${item.name}</div>
        <div class="desc">${item.desc}</div>
        <div class="discount">Сума знижки: ${item.discount}</div>
      </div>
    `;
  });
}

function filterTag(tag){
  if(tag==="all"){show(items);return;}
  show(items.filter(i=>i.tags.includes(tag)));
}

search.addEventListener("input",()=>{
  const val=search.value.toLowerCase();

  show(items.filter(i =>
    i.name.toLowerCase().includes(val) ||
    i.tags.toLowerCase().includes(val) ||
    i.desc.toLowerCase().includes(val)
  ));
});

columnsSelect.addEventListener("change",()=>{
  products.style.gridTemplateColumns=`repeat(${columnsSelect.value},1fr)`;
});

show(items);
