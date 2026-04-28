const columnsSelect=document.getElementById("columnsSelect");

columnsSelect.addEventListener("change",()=>{
products.style.gridTemplateColumns =
`repeat(${columnsSelect.value},1fr)`;
});


const items = [

/* КРЕМ */

{
name:"Крем + Максимайзер",
tags:"крем максимайзер догляд",
desc:"Склад: крем + максимайзер",
discount:"100 грн",
img:"images/krem-max.jpg"
},

{
name:"3 Крема",
tags:"крем",
desc:"Склад: 3 крема",
discount:"150 грн",
img:"images/3-krema.jpg"
},

{
name:"Парфум10 + Крем",
tags:"крем парфум",
desc:"Склад: парфум 10 мл + крем",
discount:"100 грн",
img:"images/parfum-krem.jpg"
},

{
name:"Гідрейтер + Крем",
tags:"крем гідрейтер догляд",
desc:"Склад: гідрейтер + крем",
discount:"100 грн",
img:"images/hydrater-krem.jpg"
},

{
name:"Лосьйон250 + Крем",
tags:"лосьйон крем",
desc:"Склад: лосьйон + крем",
discount:"100 грн",
img:"images/lotion-krem.jpg"
},

{
name:"Тверде мило + Крем",
tags:"мило крем",
desc:"Склад: мило + крем",
discount:"100 грн",
img:"images/soap-krem.jpg"
},

{
name:"Міст + Крем",
tags:"міст крем",
desc:"Склад: міст + крем",
discount:"100 грн",
img:"images/mist-krem.jpg"
},

/* ПАРФУМИ */

{
name:"Максимайзер + Гідрейтер",
tags:"максимайзер гідрейтер догляд",
desc:"Склад: максимайзер + гідрейтер",
discount:"150 грн",
img:"images/max-hydrater.jpg"
},

{
name:"Парфум10 + Максимайзер",
tags:"парфум максимайзер",
desc:"Склад: парфум + максимайзер",
discount:"150 грн",
img:"images/parfum-max.jpg"
},

{
name:"Парфум10 + Парфум50",
tags:"парфум",
desc:"Склад: 10 мл + 50 мл",
discount:"250 грн",
img:"images/parfum10-50.jpg"
},

{
name:"Міст + Парфум10",
tags:"міст парфум",
desc:"Склад: міст + парфум",
discount:"150 грн",
img:"images/mist-parfum.jpg"
},

{
name:"Міксологія",
tags:"парфум",
desc:"Склад: парфумний набір",
discount:"440 грн",
img:"images/mixology.jpg"
},

/* ДІМ */

{
name:"2 Дифузора",
tags:"дифузор диф",
desc:"Склад: 2 дифузора",
discount:"300 грн",
img:"images/2-dif.jpg"
},

{
name:"Рефіл + Дифузор",
tags:"рефіл дифузор диф",
desc:"Склад: рефіл + дифузор",
discount:"200 грн",
img:"images/refill-dif.jpg"
},

{
name:"Свічка + Дифузор",
tags:"свічка дифузор диф",
desc:"Склад: свічка + дифузор",
discount:"250 грн",
img:"images/candle-dif.jpg"
},

{
name:"Аромат в авто + Дифузор",
tags:"авто дифузор диф",
desc:"Склад: авто аромат + дифузор",
discount:"250 грн",
img:"images/car-dif.jpg"
},

{
name:"Мило500 + Дифузор",
tags:"мило дифузор диф",
desc:"Склад: мило + дифузор",
discount:"200 грн",
img:"images/soap-dif.jpg"
},

{
name:"8 Дифузорів",
tags:"дифузор диф",
desc:"Склад: 8 дифузорів",
discount:"1898 грн",
img:"images/8-dif.jpg"
},

{
name:"Рефіл + 2 Дифузора",
tags:"рефіл дифузор диф",
desc:"Склад: рефіл + 2 дифузора",
discount:"345 грн",
img:"images/refill-2dif.jpg"
},

/* ДОГЛЯД */

{
name:"Лосьйон250 + Гель250 + Крем",
tags:"лосьйон гель крем",
desc:"Склад: лосьйон + гель + крем",
discount:"200 грн",
img:"images/body-set1.jpg"
},

{
name:"Гель100 + Лосьйон100",
tags:"гель лосьйон",
desc:"Склад: гель + лосьйон",
discount:"150 грн",
img:"images/body-set2.jpg"
},

{
name:"Лосьйон250 + Гель250",
tags:"лосьйон гель",
desc:"Склад: лосьйон + гель",
discount:"150 грн",
img:"images/body-set3.jpg"
},

{
name:"Інтим250 + Гель250",
tags:"інтим гель",
desc:"Склад: інтим + гель",
discount:"250 грн",
img:"images/intim-gel.jpg"
},

{
name:"Део + Гель250",
tags:"део гель",
desc:"Склад: део + гель",
discount:"150 грн",
img:"images/deo-gel.jpg"
},

{
name:"3 Крема + 3 Лосьйони + 3 Гелі",
tags:"крем лосьйон гель",
desc:"Великий набір догляду",
discount:"1250 грн",
img:"images/mega-set.jpg"
},

{
name:"Тверде мило + Лосьйон250",
tags:"мило лосьйон",
desc:"Склад: мило + лосьйон",
discount:"150 грн",
img:"images/soap-lotion.jpg"
}

];

const products=document.getElementById("products");
const search=document.getElementById("search");
const columnsSelect=document.getElementById("columnsSelect");

function show(data){
products.innerHTML="";

data.forEach(item=>{
products.innerHTML += `
<div class="card">
<img src="${item.img}" class="photo">
<div class="title">${item.name}</div>
<div class="desc">${item.desc}</div>
<div class="discount">Сума знижки: ${item.discount}</div>
<div class="badge">ТОП набір</div>
</div>
`;
});
}

function filterTag(tag){
if(tag=="all"){show(items);return;}
show(items.filter(item=>item.tags.includes(tag)));
}

search.addEventListener("input",()=>{
let val=search.value.toLowerCase();

show(items.filter(item =>
item.name.toLowerCase().includes(val) ||
item.tags.toLowerCase().includes(val) ||
item.desc.toLowerCase().includes(val)
));
});

columnsSelect.addEventListener("change",()=>{
products.style.gridTemplateColumns=
`repeat(${columnsSelect.value},1fr)`;
});

show(items);
