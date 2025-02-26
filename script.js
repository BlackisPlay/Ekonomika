addEventListener("DOMContentLoaded", () => {
    let line0 = document.getElementById("line0");
    let line1 = document.getElementById("line1");
    let cover = document.getElementById("cover");
    let background = document.getElementById("background");
    let nadpis = document.getElementById("nadpis");
    let nadpisPodtext = document.getElementById("nadpisPodtext");
    let kulin = document.getElementById("kulin");
    let vyzvyNadpis = document.getElementById("vyzvyNadpis");
    let premium = document.getElementById("premium");
    let regular = document.getElementById("regular");

    setTimeout(() => {
        line1.style.width = "100%";
    }, 1000)
    setTimeout(() => {
        cover.style.transform = "translateY(-100%)";
        background.style.transform = "translateY(0px)";
    }, 500);

    setTimeout(() => {
        document.getElementById("logoImg").style.transform = "translateY(0px) scale(0.3)";
        document.getElementById("logoImg").style.opacity = 1;
        document.getElementById("login").style.transform = "translateY(0px)";
        document.getElementById("login").style.opacity = 1;

        vyzvyNadpis.style.opacity = 1;
        vyzvyNadpis.style.transform = "translateY(0px)";

        line0.style.width = "100%";
        document.getElementById("register").style.transform = "translateY(0px)";
        document.getElementById("register").style.opacity = 1;

        const checks = document.querySelectorAll('.checks');
        
        checks.forEach((check, index) => {
            setTimeout(() => {
                check.style.opacity = 1;
                check.style.transform = "translateX(0px)";
            }, index * 200); // Delay increases for each div (500ms delay)
        });

        const vyzvy = document.querySelectorAll('.vyzvy');

        vyzvy.forEach((vyzva, index) => {
            setTimeout(() => {
                vyzva.style.opacity = 1;
                vyzva.style.transform = "translateX(0px)";
            }, index * 200); // Delay increases for each div (500ms delay)
        });
    }, 1600);
    
    setTimeout(() => {
        nadpisPodtext.style.transform = "translateY(0px)";
        nadpisPodtext.style.opacity = 1;
        kulin.style.transform = "translateY(0px)";
        kulin.style.opacity = 1;
        document.getElementById("menu").style.transform = "translateY(0px)";
        document.getElementById("menu").style.opacity = 1;
    }, 1700);

    setTimeout(() => {
        premium.style.opacity = 1;
        premium.style.transform = "translateY(0px)";
    }, 2100);

    setTimeout(() => {
        regular.style.opacity = 1;
        regular.style.transform = "translateY(0px)";
    }, 2200);

    setTimeout(() => {
        nadpis.style.transform = "translateY(0px)";
        nadpis.style.opacity = 1;
    }, 600);
})

let fadeOpacity = 0;

addEventListener("scroll", () => {
    const backFade = document.getElementById("backgroundFade");
    console.log(fadeOpacity);
    fadeOpacity = window.scrollY;
    if(fadeOpacity < 400)
        backFade.style.opacity = fadeOpacity/400;
    else
        backFade.style.opacity = 1;
})
