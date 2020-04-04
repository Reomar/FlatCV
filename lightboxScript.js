const lightbox = document.createElement("div")
lightbox.id = "lightbox";
document.body.appendChild(lightbox)

const frontend = document.getElementById("front-certificate");


frontend.onclick = () =>{
    lightbox.classList.add('active');
     const img =document.createElement("img");
     img.src = "imgs/certificate.png";
     img.alt = "Can't load image"
     while(lightbox.firstChild){
         lightbox.removeChild(lightbox.firstChild)
     }
     lightbox.appendChild(img);

}

lightbox.onclick= e =>{
    if(e.target !== e.currentTarget) return;
    lightbox.classList.remove('active')
}