// movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const cardTitle = document.querySelector(".card__title");
const cardSneaker = document.querySelector(".card__sneaker img");
const cardInfo = document.querySelector(".card__info");
const cardSizes = document.querySelector(".card__sizes");
const cardPurchase = document.querySelector(".card__purchase");
//moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //popout
  cardTitle.style.transform = "translateZ(150px)";
  cardSneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  cardInfo.style.transform = "translateZ(125px)";
  cardSizes.style.transform = "translateZ(100px)";
  cardPurchase.style.transform = "translateZ(75px)";
});
//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //popout reset
  cardTitle.style.transform = "translateZ(0px)";
  cardSneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  cardInfo.style.transform = "translateZ(0px)";
  cardSizes.style.transform = "translateZ(0px)";
  cardPurchase.style.transform = "translateZ(0px)";
});
