// const go-to-top = document.querySelector('.dropbtn')


// DROPRIGHT


// CURRENT TIME
// function currentTime() {
//     let date = new Date();
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     hh = (hh < 10) ? "0" + hh : hh;
//     mm = (mm < 10) ? "0" + mm : mm;
//     ss = (ss < 10) ? "0" + ss : ss;

//     let time = hh + ":" + mm + ":" + ss;

//     document.getElementById("time-now").innerText = time;
//     let t = setTimeout(function () { currentTime() }, 1000);
// }

// currentTime();
// CURRENT TIME








window.addEventListener("click",(e)=>{
    if(Array.from(document.querySelectorAll(".dropbtn")).find(el=>el === e.target)){
        e.target.parentElement.querySelector(".myDropdown").classList.toggle("show")
        Array.from(document.querySelectorAll(".dropdown")).forEach(el => {
            if(el !== e.target.parentElement){
                el.querySelector(".myDropdown").className = "myDropdown"
            }
        })
    }
    else{
        Array.from(document.querySelectorAll(".dropdown")).forEach(el => {
            el.querySelector(".myDropdown").className = "myDropdown"
        })
    }
})





// Scroll Back To Top Button and opacity effect
$(window).scroll(function () {
    if ($(this).scrollTop() >= 20) {
        $('#go-to-top').fadeIn(200);
        $('#go-to-top').css("display", "flex")
        $('#whatsapp').fadeIn(200);
    } else {
        $('#go-to-top').fadeOut(200);
        $('#whatsapp').fadeOut(200);
    }
});
$('#go-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
// Scroll Back To Top Button and opacity effect



const hamburger = document.querySelector(".hamburger-xmark-icon");
const navMenu = document.querySelector(".navbar-2-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
)



AOS.init();




// slider
$('.mainservicesinfo-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
})

$('.partners-slider').slick({
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
})

$('.corporate-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.sheets-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.commentboxes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
})

$('.staff-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.box-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
})

$('.publications-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$('.lessons-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
})

$('.videos-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
})




// currentyear
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
// currentyear




// TYPING EFFECT
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
var textArray = ["hüquqi", "akademik", "korporativ"];

// if (document.querySelector(".main-title-child").className.includes("Peşəkar") === true) {
//     var textArray = ["a", "akademik", "korporativ"];
// }

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 750;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// TYPING EFFECT

// LOADING

// window.addEventListener('load', function () {
//     this.document.body.style.overflow = 'hidden'
//     document.querySelector('.page-loader').style.display = 'flex'
// })

// setTimeout(function () {
//     this.document.body.style.overflow = ''
//     document.querySelector('.page-loader').style.display = 'none'
// }, 3000) 



