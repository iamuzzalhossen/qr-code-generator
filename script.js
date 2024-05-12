const imgBox = document.getElementById("imageBox");
const qrImg = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQRCode(){
    const trimmedValue = qrText.value.trim();

    if(trimmedValue.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("showQRCode");
    }
}