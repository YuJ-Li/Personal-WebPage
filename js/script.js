//mouse
let mouseCursor=document.querySelector('.mouse')
//rotation angle
let deg=0
//position on x axis
let imgx=0
//position on y axis
let imgy=0
//position to the left
let imgl=0
//position to the top
let imgt=0
//flip angle
let y=0
//counter
let index=0
window.addEventListener('mousemove',cursor)

function cursor(xyz){
    //x disposition after scroll
    let scrollx=this.document.documentElement.scrollLeft
    //y disposition after scroll
    let scrolly=this.document.documentElement.scrollTop
    //img to the left
    imgx = xyz.x - mouseCursor.offsetLeft-mouseCursor.clientWidth/2 +scrollx
    //img to the top
    imgy = xyz.y - mouseCursor.offsetTop - mouseCursor.clientHeight/2 +scrolly
    //rotation formula
    deg = 360*Math.atan(imgy/imgx)/(2*Math.PI)
    //reset index
    index=0
    //current x position
    let x = event.clientX
    //if larger than img, flip the img
    if(mouseCursor.offsetLeft<x){
        y=-180
    }else{
        y=0
    }
}


setInterval(()=>{
    //rotation and flip
    mouseCursor.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
    index++
    //position and spd, stop when reached cursor
    if(index<50){
        imgl+=imgx/50
        imgt+=imgy/50
    }
    mouseCursor.style.left = imgl+"px"
    mouseCursor.style.top = imgt+"px"
},10)


// scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});