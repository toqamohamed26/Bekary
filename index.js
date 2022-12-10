let totalCount = document.getElementById("counter");
var count = 0;
totalCount.innerHTML = window.sessionStorage.getItem('totalCount' ) || 0 ;
let Increment = () => {
  count++;
  window.sessionStorage.setItem('totalCount',count);
  totalCount.innerHTML = sessionStorage.getItem('totalCount');
};

// Select increment and decrement buttons
let incrementCount = document.getElementsByClassName('buy');
for(i=0 ; i<incrementCount.length ; i++){
  incrementCount[i].addEventListener("click",Increment)
}



// function eventIncrement()
// incrementCount.addEventListener('click' ,Increment())
//    {
//     let target = e.target 
//     let shop = target.parentElement
//     var title = shop.getElementsByClassName('proName') [0] .innerText ;
//     var sectionName = shop.getElementsByClassName('section') [0] .innerText
//     var price = shop.getElementsByClassName('price') [0] .innerText ;

//     var imgsrc = shop.getElementsByClassName('productPic') [0] .src ;
//     console.log('imgsrc')



let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}




function value(){
  let info = document.getElementById("info");
  let Image = document.getElementById("tabImg");
  info.innerHTML=`
  <div class="mainInfo" id="info">
  <h5 class="mb">
  A gorgeous selection of our favorites for a client to send as a new year’s gift.  </h5>
  <p class="con">
    A gorgeous selection of our favorites for a client to send as a new
    year’s gift. A gorgeous selection of our favorites for a client to
    send as a new year’s gift. A gorgeous selection of our favorites for a
    client to send as a new year’s gift.
  </p>
  <p class="con">
  A gorgeous selection of our favorites for a client to send as a new
  year’s gift.
</p>

  <button class="button1">Reed More</button>
</div>`

  let mission =document.getElementById("mission").classList ;
  let value =document.getElementById("value").classList ;
  let goal =document.getElementById("goal").classList ;

  Image.src = "images/cup.jpeg";

  value.add('open')
  value.remove('content')
  mission.remove('open')
  mission.add('content')
  goal.remove('open')
  goal.add('content')

}


function mission(){
  let info = document.getElementById("info");
  let Image = document.getElementById("tabImg");
  let mission =document.getElementById("mission").classList ;
  let value =document.getElementById("value").classList ;
  let goal =document.getElementById("goal").classList ;
  info.innerHTML= `   <div class="mainInfo" id="info">
  <h5 class="mb">
  A gorgeous selection of our favorites for a client to send as a new year’s gift.  </h5>
  <p class="con">
    A gorgeous selection of our favorites for a client to send as a new
    year’s gift. A gorgeous selection of our favorites for a client to
    send as a new year’s gift. A gorgeous selection of our favorites for a
    client to send as a new year’s gift.
  </p>
  <p class="con">
  A gorgeous selection of our favorites for a client to send as a new
  year’s gift.
</p>

  <button class="button1">Reed More</button>
</div>`
  Image.src = "images/tabimg.jpg";

  mission.add('open')
  mission.remove('content')
  value.remove('open')
  value.add('content')
  goal.remove('open')
  goal.add('content')

}


function goal(){
  let Image = document.getElementById("tabImg");
  let mission =document.getElementById("mission").classList ;
  let value =document.getElementById("value").classList ;
  let goal =document.getElementById("goal").classList ;

  Image.src = "images/OIP.jpg";

  info.innerHTML= `<div class="mainInfo" id="info">
  <h5 class="mb">
  A gorgeous selection of our favorites for a client to send as a new year’s gift.  </h5>
  <p class="con">
    A gorgeous selection of our favorites for a client to send as a new
    year’s gift. A gorgeous selection of our favorites for a client to
    send as a new year’s gift. A gorgeous selection of our favorites for a
    client to send as a new year’s gift.
  </p>
  <p class="con">
  A gorgeous selection of our favorites for a client to send as a new
  year’s gift.
</p>

  <button class="button1">Reed More</button>
</div>`
  goal.add('open')
  goal.remove('content')
  mission.remove('open')
  mission.add('content')
  value.remove('open')
  value.add('content')
}

function Quote1(){
  let bakeryquotes =document.getElementById('bakeryquotes');
  let dot1 =document.getElementById("dot1").classList ;
  let dot2 =document.getElementById("dot2").classList ;
  let dot3 =document.getElementById("dot3").classList ;
 dot1.add('activeDot')
 dot1.remove('dot')
 dot2.add('dot')
 dot2.remove('activeDot')
 dot3.add('dot')
 dot3.remove('activeDot')


}

function Quote2(){
  let bakeryquotes =document.getElementById('bakeryquotes');
  let dot1 =document.getElementById("dot1").classList ;
  let dot2 =document.getElementById("dot2").classList ;
  let dot3 =document.getElementById("dot3").classList ;

  bakeryquotes.innerHTML=`<h4 id="bakeryquotes" > We’ve got everything from cute dessert quotes to snarky ones, inspirational ones that really make you think (life is short, eat dessert first!) to short and snappy captions that truly profess your love of dessert to the world.</h4>
  `
  dot2.add('activeDot')
  dot2.remove('dot')
  dot1.add('dot')
  dot1.remove('activeDot')
  dot3.add('dot')
  dot3.remove('activeDot')
 
}

function Quote3(){
  let bakeryquotes =document.getElementById('bakeryquotes');
  let dot1 =document.getElementById("dot1").classList ;
  let dot2 =document.getElementById("dot2").classList ;
  let dot3 =document.getElementById("dot3").classList ;

  bakeryquotes.innerHTML=`<h4 id="bakeryquotes" >You can’t buy happiness, but you can buy dessert and that’s kind of the same thing so eat from Bakery and enjoy! </h4>`
  dot3.add('activeDot')
  dot3.remove('dot')
  dot1.add('dot')
  dot1.remove('activeDot')
  dot2.add('dot')
  dot2.remove('activeDot')
 
}

function displayCart(){
  let cart = document.getElementById('carticonn').className;
  document.getElementById('allBody').style.display = 'none' ;
  document.getElementById('allBody').style.background = '#ce3c83' ;
}

