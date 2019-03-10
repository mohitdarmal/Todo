/* var title = document.querySelectorAll('.todo-title');
console.log(title);
for(var i = 0; i < title.length; i++){
    title[i].addEventListener('click', () => {
        this.style.textDecoration = 'underline'
    });
} */

var title = document.querySelectorAll('.todo-title');
console.log(title)
/* 
 */

title.forEach((todo) => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('text-line-through');
    });
})

var timeAlert = document.querySelectorAll('.time-alert');
var dataHeading = document.querySelector('#data-heading');
var container = document.querySelector('.container');

var row = document.querySelectorAll('.row-bg');
for(var i = 0; i < row.length; i++){
    console.log(row[i]);
    if((row[i])){
        // dataHeading.style.display = 'block'
        console.log(true)
        
    }
    else{
       /*  dataHeading.style.display = 'none'
        console.log(false) */
        
    }
}
/* var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var minute = min.toString();
if(minute.length == 2){
    minute = '0'+minute
}
var crtime = hr + ':' + min  */

