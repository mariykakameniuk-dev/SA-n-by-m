const products = document.getElementById("products");
const search = document.getElementById("search");
const columnsSelect = document.getElementById("columnsSelect");

const items = [

/* КРЕМ */
{name:"Крем + Максимайзер",tags:"крем",desc:"Склад: крем + максимайзер",oldPrice: 958,price: 858,icon:"🧴💋",img:"images/krem-max.jpg"},
{name:"3 Крема",tags:"крем",desc:"Склад: 3 крема",oldPrice: 1077,price: 977,icon:"🧴🧴🧴",img:"images/3-krema.jpg"},
{name:"Парфум10 + Крем",tags:"крем парфум",desc:"Склад: парфум 10 мл + крем",oldPrice: 1058,price: 908,icon:"🌸🧴",img:"images/parfum-krem.jpg"},
{name:"Гідрейтер + Крем",tags:"крем гідрейтер догляд",desc:"Склад: гідрейтер + крем",oldPrice: 958,price: 798,icon:"💧🧴",img:"images/hydrater-krem.jpg"},
{name:"Лосьйон250 + Крем",tags:"лосьйон крем",desc:"Склад: лосьйон250 + крем",oldPrice: 1158,price: 1008,icon:"🧴💚",images:["images/krem.jpg","images/losyon250.jpg"]},
{name:"Тверде мило + Крем",tags:"мило крем",desc:"Склад: тверде мило + крем",oldPrice: 948,price: 820,icon:"🧼🧴",img:"images/soap-krem.jpg"},
{name:"Міст + Крем",tags:"крем",desc:"Склад: міст + крем",oldPrice: 1348,price: 1150,icon:"✨🧴",img:"images/mist-krem.jpg"},

/* ПАРФУМИ */
{name:"Парфум10 + Максимайзер",tags:"парфум",desc:"Склад: парфум10 + максимайзер",oldPrice: 1258,price: 1108,icon:"🌸💋",images:["images/maximazer.jpg","images/parfum10.jpg"]},
{name:"Парфум10 + Парфум50",tags:"парфум",desc:"Склад: парфум 10 мл + парфум 50 мл",oldPrice: 2898,price: 2648,icon:"🌸💫",images:["images/parfum10.jpg","images/parfum50.jpg"]},
{name:"Міст + Парфум10",tags:"парфум",desc:"Склад: міст + парфум",oldPrice: 1898,price: 1700,icon:"✨🌸",img:"images/mist-parfum.jpg"},
{name:"Міксологія",tags:"парфум",desc:"Склад: 5 парфумів 10 мл",oldPrice: 3495,price: 2799,icon:"🌺✨",img:"images/mixology.jpg"},

/* ДІМ */
{name:"2 Дифузора",tags:"диф",desc:"Склад: 2 дифузора",oldPrice: 1898,price: 1698,icon:"🏠🏠",img:"images/2-dif.jpg"},
{name:"Рефіл + Дифузор",tags:"диф",desc:"Склад: рефіл + дифузор",oldPrice: 1948,price: 1748,icon:"♻️🏠",img:"images/refill-dif.jpg"},
{name:"Свічка + Дифузор",tags:"диф",desc:"Склад: свічка + дифузор",oldPrice: 1848,price: 1640,icon:"🕯️🏠",images:["images/svichka.jpg","images/dif.jpg"]},
{name:"Аромат в авто + Дифузор",tags:"диф",desc:"Склад: аромат в авто + дифузор",oldPrice: 1748,price: 1540,icon:"🚗🏠",img:"images/car-dif.jpg"},
{name:"Мило500 + Дифузор",tags:"мило диф",desc:"Склад: мило + дифузор",oldPrice: 1648,price: 1498,icon:"🧼🏠",img:"images/soap-dif.jpg"},
{name:"8 Дифузорів",tags:"диф",desc:"Склад: 8 дифузорів",oldPrice: 8541,price: 6643,icon:"🏠✨",img:"images/8-dif.jpg"},
{name:"Рефіл + 2 Дифузора",tags:"диф",desc:"Склад: рефіл + 2 дифузора",oldPrice: 2897,price: 2552,icon:"♻️🏠🏠",img:"images/refill-2dif.jpg"},

/* ТІЛО */
{name:"Лосьйон250 + Гель250 + Крем",tags:"лосьйон250 + гель250 + крем",desc:"Склад: лосьйон + гель + крем",oldPrice: 1907,price: 1707,icon:"💚🧴",img:"images/body-set1.jpg"},
{name:"Гель100 + Лосьйон100",tags:"лосьйон гель",desc:"Склад: гель100 + лосьйон100",oldPrice: 948,price: 748,icon:"💚💧",img:"images/body-set2.jpg"},
{name:"Лосьйон250 + Гель250",tags:"лосьйон гель",desc:"Склад: лосьйон250 + гель250",oldPrice: 1498,price: 1248,icon:"💚✨",img:"images/body-set3.jpg"},
{name:"Інтим250 + Гель250",tags:"гель",desc:"Склад: інтим250 + гель250",oldPrice: 1498,price: 1248,icon:"💗💧",img:"images/intim-gel.jpg"},
{name:"Део + Гель250",tags:"гель",desc:"Склад: део + гель250",oldPrice: 1448,price: 1270,icon:"🌿💧",img:"images/deo-gel.jpg"},
{name:"3 Крема + 3 Лосьйони + 3 Гелі",tags:"3 крема + 3 лосьйона + 3 геля",desc:"Великий набір догляду",oldPrice: 5841,price: 4591,icon:"💖🧴",img:"images/mega-set.jpg"},
{name:"Тверде мило + Лосьйон250",tags:"мило лосьйон",desc:"Склад: тверде мило + лосьйон250",oldPrice: 1348,price: 1170,icon:"🧼💚",images:["images/tverdemylo.jpg","images/losyon250.jpg"]},

/* 🌸 ВЕСНА */
{name:"Подарунковий набір ДОМАШНІЙ ЗАТИШОК",tags:"spring дім диф свічка",holiday:"spring",desc:" диф ожина + спрей ожина + мило500 інжир + косметичка чорний",oldPrice: 3296,price: 2669,icon:"🏠✨",img:"images/home-cozy.jpg"},
{name:"Подарунковий набір ДЛЯ СУМОЧКИ",tags:"spring крем парфум",holiday:"spring",desc:" парфум10 La La Lovely + бальзам брелок Glow On, Girl + крем маракуя 30 мл + крум шуга 15 мл ",oldPrice: 1816,price: 1449,icon:"👛💄",img:"images/for-bag.jpg"},
{name:"Подарунковий набір ДЛЯ ПОДРУЖОК",tags:"spring крем догляд",holiday:"spring",desc:"бальзам брелок Glow On, Girl + бальзам брелок Халва + крем Sugar Porn 15 мл + крем Маракуя 15 мл ",oldPrice: 1516,price: 1199,icon:"💕✨",img:"images/for-girls.jpg"},
{name:"Подарунковий набір СОЛОДКИЙ",tags:"spring дім свічка диф",holiday:"spring",mothersDay:true,desc:"диф Круасан + свічка Круасан + спрей Груша Фрезія + крем Sugar Porn 30 мл ",oldPrice: 2856,price: 2199,icon:"🍯🕯",img:"images/sweet-set.jpg"},
{name:"Подарунковий набір УЛЮБЛЕНІ КРЕМИ",tags:"spring крем догляд",holiday:"spring",mothersDay:true,desc:"5 кремів",oldPrice: 1795,price: 1399,icon:"🧴💕",img:"images/favorite-creams.jpg"},
{name:"Подарунковий набір ВИШНЯ",tags:"spring крем гель лосьйон",holiday:"spring",mothersDay:true,desc:"пінка Вишня + батер Вишня + скраб Вишня + крем Вишня + диф Вишня ",oldPrice: 3495,price: 2799,icon:"🍒✨",img:"images/cherry-set.jpg"},
{
  name:"SUGAR PORN",
  tags:"spring парфум крем",
  holiday:"spring",
  mothersDay:false,
  desc:"пінка Sugar Porn + мило Sugar Porn + крем Sugar Porn + міст Sugar Porn",
  oldPrice:2456,
  price:1999,
  icon:"🍭💋",
  img:"images/sugar-porn.jpg"
},

{
  name:"SUGAR PORN ДОГЛЯДОВИЙ",
  tags:"spring парфум крем догляд",
  holiday:"spring",
  mothersDay:true,
  desc:"пінка Sugar Porn + скраб Sugar Porn + крем Sugar Porn + міст Sugar Porn",
  oldPrice:2796,
  price:2199,
  icon:"🍭💋",
  img:"images/sugar-porn-care.jpg"
},

{
  name:"Набір ТУРБОТА ПРО НЕЇ",
  tags:"spring крем догляд парфум",
  holiday:"spring",
  mothersDay:true,
  desc:"гель Маркакуя + крем Маракуя + лосьйон Маракуя + мило Маракуя",
  oldPrice:2406,
  price:1899,
  icon:"💕🧴",
  img:"images/care-for-her.jpg"
},
];

function show(data){
  products.innerHTML = "";

  data.forEach(item => {

    let imageBlock = item.img
      ? `<img src="${item.img}" class="photo">`
      : item.images
        ? `<div class="images">${item.images.map(img => `<img src="${img}">`).join("")}</div>`
        : `<div class="no-image">Нема фото</div>`;

    const discount = (item.oldPrice && item.price) ? (item.oldPrice - item.price) : 0;

    products.innerHTML += `
      <div class="card">

        ${imageBlock}

        <div class="title">${item.name}</div>
        <div class="desc">${item.desc}</div>
        
  ${item.holiday === "spring" ? `<div class="badge spring">🌸 Весняний набір</div>` : ""}
        
        ${item.mothersDay ? `<div class="badge pink">🌷 День матері</div>` : ""}

        <div class="price-box">
          <div class="old">Стара: ${item.oldPrice} грн</div>
          <div class="new">Ціна: ${item.price} грн</div>
          <div class="save">Знижка: -${discount} грн</div>
        </div>

      </div>
    `;
  });
}

function filterTag(tag){
  if(tag === "all") return show(items);

  if(tag === "весняні")
    return show(items.filter(i => i.holiday === "spring"));

  show(items.filter(i => i.tags.includes(tag)));
}

search.addEventListener("input",()=>{
  const val = search.value.toLowerCase();
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
