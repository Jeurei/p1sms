import{S as e,N as t,P as a}from"./vendor.64dcf12d.js";e.use([t,a]),new e("#slider",{loop:!0,slidesPerView:1,speed:650,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),document.querySelectorAll(".prices__tab-button").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),document.querySelectorAll(".prices__tab-button").forEach((e=>e.parentNode.classList.contains("prices__tab--active")&&e.parentNode.classList.remove("prices__tab--active"))),e.currentTarget.parentNode.classList.add("prices__tab--active"),document.querySelectorAll(".prices__content").forEach((e=>e.classList.contains("prices__content--active")&&e.classList.remove("prices__content--active"))),document.querySelectorAll(`.prices__content[data-content="${e.currentTarget.dataset.content}"]`).forEach((e=>e.classList.add("prices__content--active")))}))}));document.querySelector(".header__burger").addEventListener("click",(e=>{var t;e.currentTarget.classList.contains("header__burger--active")?((t=e.currentTarget).classList.remove("header__burger--active"),document.querySelector(".nav").classList.remove("nav--active"),document.body.classList.remove("overflow-hidden"),t.classList.contains("header__burger--inactive")||document.querySelector(".nav").classList.add("nav--inactive"),setTimeout((()=>document.querySelector(".nav").classList.remove("nav--inactive")),300)):(e=>{e.classList.toggle("header__burger--active"),document.querySelector(".nav").classList.toggle("nav--active"),document.body.classList.add("overflow-hidden")})(e.currentTarget)})),window.init=e=>{const t=new e.Map("map",{center:[55.87,37.66],zoom:10}),a=new e.Placemark([55.75,37.61]);t.geoObjects.add(a)};
