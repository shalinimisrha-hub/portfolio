//select the elements
var toggle_btn;
var big_wrapper;
var hamburgur_menu;

const declare=()=>{
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburgur_menu = document.querySelector('.hamburger-menu');
}

const main = document.querySelector("main");

declare();
let dark = false;

const toggleAnimation = ()=>{
    //clone the wrapper

    dark =!dark;
    console.log(dark) 
    let clone = big_wrapper.cloneNode(true);
    if(dark==true){
        clone.classList.remove('light');
        clone.classList.add('dark');
    }
    else{
        clone.classList.remove('dark');
        clone.classList.add('light');
    }
    clone.classList.add('copy')
    main.appendChild(clone)


    document.body.classList.add('stop-scrolling');

    clone.addEventListener('animationend',() => {
        document.body.classList.remove('stop-scrolling')
        big_wrapper.remove();
        clone.classList.remove('copy')

        //Reset variables
        declare();
        events();
    })
}
const events=()=>{
    toggle_btn.addEventListener('click', toggleAnimation);
    hamburgur_menu.addEventListener('click',()=>{
        big_wrapper.classList.toggle("active");
    })
    
}
events();
