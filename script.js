let saturate=document.getElementById("saturate");
let contrast =document.getElementById("contrast");
let brightnes=document.getElementById("brightnes");
let sepia=document.getElementById("sepia");
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hueRotate=document.getElementById("hue-rotate");
let Upload=document.getElementById("upload");
let download=document.getElementById("download");
let reset=document.querySelector("span");
let img=document.getElementById("img");
let imgBox=document.querySelector(".img-box");
var x = document.getElementById("myCanvas");
var ctx = x.getContext("2d");


function resetValue(){
               img.style.filter="none";
               saturate.value="100"
               contrast.value="100"
               brightnes.value="100"
               sepia.value="0"
               grayscale.value="0"
               hueRotate.value="0"
}

window.onload=function(){
               download.style.display="none"
               reset.style.display="none"
               imgBox.style.display="none"
}
Upload.onchange=function(){
               resetValue();
               download.style.display="block"
               reset.style.display="block"
               imgBox.style.display="block "
               let file =new FileReader();
               file.readAsDataURL(upload.files[0])
               file.onload=function(){
                              img.src=file.result;
               }
               img.onload=function(){
                              canvas.width=img.width;
                              canvas.height=img.height;
                              ctx.drawImage(img,canvas.width,canvas.height);
                                img.style.display="none"
               }
}   

/*saturate.addEventListener("input" ,function(){
               let value=saturate.value
               img.style.filter=`saturate(${value}%)`;
              
               
})*/
 let filters=document.querySelectorAll("ul li input");
 filters.forEach(filter => {
               filter.addEventListener("input" ,function(){
                              img.style.filter= `
                              saturate(${saturate.value}%)
                              contrast(${contrast.value}%)
                              brightness(${brightnes.value}%)
                              sepia(${sepia.value}%)
                              grayscale(${grayscale.value})
                              blur(${blur.value}px)
                              hue-rotate(${hueRotate.value}deg)
                                `
                                x.style.filter= `
                                saturate(${saturate.value}%)
                                contrast(${contrast.value}%)
                                brightness(${brightnes.value}%)
                                sepia(${sepia.value}%)
                                grayscale(${grayscale.value})
                                blur(${blur.value}px)
                                hue-rotate(${hueRotate.value}deg)
                                  `
                             
               })
               
 });
 download.onclick=function(){
               download.href=img.src;
 }









