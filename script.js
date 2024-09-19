document.querySelectorAll('.Image_container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup_img').style.display = 'block';
        document.querySelector('.popup_img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup_img span').onclick= () =>{
    document.querySelector('.popup_img').style.display = 'none';
}