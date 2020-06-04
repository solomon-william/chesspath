let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

if( window.innerWidth< 1250){
  image1.src = "cimage/IMG_20190908_100730lg.jpg";
  image1.src = "cimage/m2lg.jpeg";
  image1.src = "cimage/IMG-20190908-WA0010lg.jpg";
}else{
  image1.src = "cimage/IMG_20190908_100730.jpg";
  image1.src = "cimage/m2.jpeg";
  image1.src = "cimage/IMG-20190908-WA0010.jpg";
}
