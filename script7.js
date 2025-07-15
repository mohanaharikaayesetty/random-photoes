const imageList = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg"
];

function loadImages() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; 
 
  const shuffled = imageList.sort(() => 0.5 - Math.random());

  
  const selected = shuffled.slice(0, 6);

  selected.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
  });
}


window.onload = loadImages;