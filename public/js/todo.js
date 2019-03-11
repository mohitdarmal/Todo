var title = document.querySelectorAll('.todo-title');
console.log(title)

title.forEach((todo) => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('text-line-through');
    });
})

var timeAlert = document.querySelectorAll('.time-alert');
var dataHeading = document.querySelector('#data-heading');


var row = document.querySelectorAll('.row-bg');
var dataRow = document.querySelector('.data-row');
var i = 0;
if(i < row.length){
    dataHeading.style.opacity = '1'
}else{
    dataHeading.style.opacity = '0'
    console.log(false)
}

/* 
var searchBtn = document.querySelector('#search-btn');
var  todoTitleTxt = document.querySelectorAll('#todo-title-txt');

searchBtn.addEventListener('keyup', () => {
    console.log(searchBtn.value);
    if(searchBtn.value == todoTitleTxt){
        console.log(true)
    }
});
  */