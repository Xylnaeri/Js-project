console.log("java is running..")

document.getElementById("img-popup")

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick =() =>{
        previewContainer.style.display ='flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target')
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});


previewBox.forEach(close =>{
    close.querySelector('.material-icons').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

const boxArray = ['preview1', 'preview2', 'preview3', 'preview4', 'preview5', 'preview6', 
'preview7', 'preview8', 'preview9', 'preview10', 'preview11', 'preview12'];
window.addEventListener('mouseup', function(event) {
    
    for(const i=0; i < boxArray.length; i++){
        const box = document.getElementById(boxArray[i]);
        if(event.target != box && event.target.parentNode != box){
            previewContainer.style.display = 'none';
            preview1.classList.remove('active');
            preview2.classList.remove('active');
            preview3.classList.remove('active');
            preview4.classList.remove('active');
            preview5.classList.remove('active');
            preview6.classList.remove('active');
            preview7.classList.remove('active');
            preview8.classList.remove('active');
            preview9.classList.remove('active');
            preview10.classList.remove('active');
            preview11.classList.remove('active');
            preview12.classList.remove('active');
        }
    }
})