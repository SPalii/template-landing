//gallery
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic){
   fullImgBox.style.display = "flex";
   fullImg.src = pic;
}
function closeFullImg(){
   fullImgBox.style.display = "none";
}


// button top
let btnScrollToTop = document.querySelector("#btnScrollToTop");
console.log(btnScrollToTop);

btnScrollToTop.addEventListener("click", function () {
 window.scrollTo({
   top: 0,
   left: 0,
   behavior: "smooth"
   });

});



