const qrinput=document.querySelector("#qr-input");
const qrbutton=document.querySelector("#qr-button");
const qrimage=document.querySelector("#qr-image");
const downloaded=document.querySelector("#downloadlink");
const downloadbtn=document.querySelector("#btn")

qrbutton.addEventListener("click",function(){
    let inputValue=qrinput.value;
    if(!inputValue){
        alert("Enter a Valid URL.....");
    }
    else{
        
       qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimage.alt=`QR Code for ${inputValue}`;
        downloaded.href=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        downloaded.download=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        downloadbtn.style.display="block";

       
   }
})

//Improvementsk
/* 
1. Add a Share Button
2. User Fetch APi Method(/Axios Method)
*/
