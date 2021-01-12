let img = ["a.jpeg", "b.jpeg", "c.jpeg", "d.png", "e.jpg", "f.jpg"];
let x = 0;
let y = 5
let i;
let DocId = document.getElementById("image");
let DocBtnFoward = document.getElementById("Buttonfoward");
let DocBtnBack = document.getElementById("Buttonback");
let DocCallsImg = document.getElementsByClassName("classimg");
let DocCallsImg2 = document.getElementsByClassName("classimg2");
let DocIdFr = document.getElementById("footer");
let DocTagImg = document.getElementsByTagName("img");

function imagefoward() {
  DocId.setAttribute("src", img[x])
  x++
  if (x > 5) {
    x = 0
  }
}

function imageback() {
  DocId.setAttribute("src", img[y])
  y--
  if (y === -1) {
    y = 6
    y--
  }
}

function ChangeOpacity1() {
  DocBtnFoward.style.opacity = "0"
  DocBtnBack.style.opacity = "0"
}

function ChangeOpacity2() {
  DocBtnFoward.style.opacity = "1"
  DocBtnBack.style.opacity = "1"
}
DocId.addEventListener("mouseover", ChangeOpacity2)
DocId.addEventListener("mouseout", ChangeOpacity1)
DocBtnFoward.addEventListener("mouseover", ChangeOpacity2)
DocBtnBack.addEventListener("mouseover", ChangeOpacity2)

function SideImages1() {
  if (x !== 0) {
    x = 0
    DocId.setAttribute("src", img[x])
  }
}

function SideImages2() {
  if (x !== 1) {
    x = 1
    DocId.setAttribute("src", img[x])
  }
}

function SideImages3() {
  if (x !== 2) {
    x = 2
    DocId.setAttribute("src", img[x])
  }
}

function SideImages4() {
  if (x !== 3) {
    x = 3
    DocId.setAttribute("src", img[x])
  }
}

function SideImages5() {
  if (x !== 4) {
    x = 4
    DocId.setAttribute("src", img[x])
  }
}

function SideImages6() {
  if (x !== 5) {
    x = 5
    DocId.setAttribute("src", img[x])
  }
}

DocCallsImg[0].addEventListener("click", SideImages1)
DocCallsImg[1].addEventListener("click", SideImages2)
DocCallsImg[2].addEventListener("click", SideImages3)
DocCallsImg[3].addEventListener("click", SideImages4)
DocCallsImg[4].addEventListener("click", SideImages5)
DocCallsImg[5].addEventListener("click", SideImages6)

console.log(Array.isArray(img))

/*function changeimg() {
  let CrElImg = document.createElement("img");
  let CrAtSrc = document.createAttribute("src");
  CrAtSrc.value = "1.jpg";
  CrElImg.setAttributeNode(CrAtSrc);
  let CrAtCls = document.createAttribute("class");
  CrAtCls.value = "classimg classimg2";
  CrElImg.setAttributeNode(CrAtCls);
  DocIdFr.replaceChild(CrElImg, DocCallsImg[0])
}

for (i = 1; i < 7; i++) {
  DocTagImg[i].addEventListener("mouseover", changeimg)
  //DocCallsImg[i].addEventListener("mouseout", SideImagesTransform2)
}*/

/*function SideImagesTransform() {
  for (i = 0; i < 6; i++) {
    DocCallsImg[i].style.transitionDuration = "1.5s";
    DocCallsImg[i].style.transform = "rotate(1440deg)" + "scale(1.1)";
    DocCallsImg[i].style.borderRadius = "100px";
  }
}
function SideImagesTransform2() {
  for (i = 0; i < 6; i++) {
    DocCallsImg[i].style.transitionDuration = "1.5s";
    DocCallsImg[i].style.transform = "rotate(0deg)" + "scale(1)";
    DocCallsImg[i].style.borderRadius = "0px";
  }
  DocCallsImg2[0].style.borderRadius = "5px 5px 0px 0px";
  DocCallsImg2[1].style.borderRadius = "0px 0px 5px 5px";
}
for (i = 0; i < 6; i++) {
  DocCallsImg[i].addEventListener("mouseover", SideImagesTransform)
  DocCallsImg[i].addEventListener("mouseout", SideImagesTransform2)
}*/

console.log(DocCallsImg[i]);

function HoverBorder1(e) {
  if (x === 0 || x === 1 || x === 2 || x === 3 || x === 4 || x === 5) {
    e.style.border = "solid 2.5px rgb(99, 99, 99)"
    e.style.transitionDuration = "0.6s"
    setTimeout(() => {
      e.style.transform = "rotate(360deg)"
    }, 500);
  }
}

function HoverBorder2(e) {
  if (x === 0 || x === 1 || x === 2 || x === 3 || x === 4 || x === 5) {
    e.style.border = "none"
    e.style.transform = "rotate(0deg)"
    e.style.transitionDuration = "0.4s"
  }
}