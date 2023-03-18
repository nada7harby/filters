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
var convas= document.getElementById("myCanvas");
var ctx =convas.getContext("2d");


function resetValue(){
               ctx.filter="none";
               ctx.drawImage(img,0,0,convas.width,convas.height); 
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
                              convas.width =img.width;
                              convas.height =img.height;
                              ctx.drawImage(img,0,0,convas.width,convas.height);
                              img.style.display="none";
               }
}   

/*saturate.addEventListener("input" ,function(){
               let value=saturate.value
               img.style.filter=`saturate(${value}%)`;
              
               
})*/
 let filters=document.querySelectorAll("ul li input");
 filters.forEach(filter => {
               filter.addEventListener("input" ,function(){
                              
                                ctx.filter= `
                                saturate(${saturate.value}%)
                                contrast(${contrast.value}%)
                                brightness(${brightnes.value}%)
                                sepia(${sepia.value}%)
                                grayscale(${grayscale.value})
                                blur(${blur.value}px)
                                hue-rotate(${hueRotate.value}deg)
                                  `
                              ctx.drawImage(img,0,0,convas.width,convas.height); 
               })
               
               
 });
 download.onclick=function(){
               download.href=convas.toDataURL();
 }









