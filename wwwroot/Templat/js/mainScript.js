function changeImage(event, imgId) {
    console.log(imgId)
    const input = event.target;
    const file = input.files[0];
    const img = document.getElementById(imgId);

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}