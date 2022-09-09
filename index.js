const $ = Selector => document.querySelector(Selector);
let $counter = $('#counter');
let $btn = document.querySelectorAll('.btn');
let count = 0;

$btn.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const value = e.target.textContent;
        if(value == -1){
            count--;
        }
        if(value == -10){
            count -= 10;
        }
        if(value == -100){
            count -= 100;
        }
        if(value == -1000){
            count -= 1000;
        }
        else if(value == 1){
            count++;
        }
        else if(value == 10){
            count += 10;
        }
        else if(value == 100){
            count += 100;
        }
        else if(value == 1000){
            count += 1000;
        }
        else if(value == 'reset'){
            count = 0;
        }
        $counter.textContent = count;
        
        
        
        
        // console.log(e.target.textContent);
    })
})