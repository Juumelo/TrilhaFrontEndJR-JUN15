
const toggleButton = document.querySelector('.toggle');
const contentPT = document.querySelector('#contentPT');
const contentUS = document.querySelector('#contentUS');


toggleButton.addEventListener('click', function() {     
    toggleButton.classList.toggle('active');
});

toggleButton.addEventListener('click', function() {     
    if(contentPT.style.display ==='block'){
        contentPT.style.display ='none';
    } else{
        contentPT.style.display ='block';
    }
    if (contentUS.style.display ==='none'){
        contentUS.style.display ='block';
    } else{
        contentUS.style.display ='none';
    }
});