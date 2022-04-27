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








function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    if (event.target.className == 'dropbtn') {
        console.log(event.target)
        if (event.target.parentElement.querySelector('div').className.includes('show')) {
            event.target.parentElement.querySelector('div').classList.remove('show')
        }
        else {
            event.target.parentElement.querySelector('div').classList.add('show')
        }
    }
}

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



const hamburger = document.getElementById("demo");
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
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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

$('.partners_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

$(function () {
    $('.partners2014_slider').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function () {
    $('.worksheets_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function () {
    $('.commentboxes_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    })
})

$(function () {
    $('.employees_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function () {
    $('.news_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1250,
    })
})


// currentyear
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
// currentyear




// TYPING EFFECT
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hüquqi", "akademik", "korporativ"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 750; // Delay between current and next text
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

