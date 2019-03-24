const deleteButton = document.querySelector('#delete');
const howard = document.querySelector('#howard');
const toggleButton = document.querySelector('#toggle');
const wat = document.querySelector('#watson');


deleteButton.addEventListener('click',() => {
    howard.style.display = 'none';
    deleteButton.style.display = 'none';
});


toggleButton.addEventListener('click',() => {
   if (wat.style.display !== 'none'){
    wat.style.display = 'none'
   } else {
    wat.style.display = 'block';
   };
});