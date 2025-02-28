addEventListener("DOMContentLoaded", () => {
    let line0 = document.getElementById("line0");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let previousScroll;
    let slideTrack = document.getElementById("slideTrack");
    let slideTrack2 = document.getElementById("slideTrack2");

    let loader = document.getElementById("loader");
    let posterPos = 0;

    const nadpisy = document.querySelectorAll('.nadpisy');
    const popisy = document.querySelectorAll(".popisy");

    let imagine = document.getElementById("imagine");

    let cover = document.getElementById("cover");
    let background = document.getElementById("background");
    let nadpis = document.getElementById("nadpis");
    let nadpisPodtext = document.getElementById("nadpisPodtext");
    let kulin = document.getElementById("kulin");
    let vyzvyNadpis = document.getElementById("vyzvyNadpis");
    let premium = document.getElementById("premium");
    let regular = document.getElementById("regular");

    let poster = document.getElementById("poster");
    let plagat = document.getElementById("plagat");

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
      
    let fadeOpacity = 0;
      window.addEventListener("scroll", () => {
        
        if (isElementVisible(line2, 100)) {
          line2.style.width = "95%";
          document.getElementById("onastext").style.opacity = 1;
          document.getElementById("onastext").style.transform = "translateX(0px)";
        }
        if (isElementVisible(slideTrack, 200)) {
            slideTrack.style.opacity = 1;
            slideTrack.style.transform = "translateX(0px)";
        }
        if (isElementVisible(slideTrack2, 200)) {
            slideTrack2.style.opacity = 1;
            slideTrack2.style.transform = "translateX(0px)";
        }

        if (isElementVisible(poster, 300)){
            posterPos = posterPos + (window.scrollY - previousScroll);
            poster.style.transform = "translateY(" + posterPos*(-0.1) + "px)";
            plagat.style.transform = "translateY(" + posterPos*(-0.12) + "px)";
            
        }

        if(isElementVisible(poster, 300)){
            document.getElementById("posterCover").style.opacity = 0;
        }
        previousScroll = window.scrollY;

        if(isElementVisible(document.getElementById("yapping"), 400)){
            nadpisy.forEach((nadpis, index) => {
                setTimeout(() => {
                    nadpis.style.transform = "translateY(" + posterPos*(-0.1) + "px)";
                    nadpis.style.opacity = 1;
                    nadpis.style.transform = "translateX(0px)";
                }, index * 200);
            });
            popisy.forEach((popis, index) => {
                setTimeout(() => {
                    popis.style.opacity = 1;
                    popis.style.transform = "translateX(0px)";
                }, index * 250);
            });
        }

        if(isElementVisible(document.getElementById("team"), 100)){
            document.getElementById("line3").style.width = "95%";
            document.getElementById("teamtext").style.opacity = 1;
            document.getElementById("teamtext").style.transform = "translateY(0px)";
        }

        if(isElementVisible(document.getElementById("sulin"), 200)){
            document.getElementById("ksichtSulin").style.transform = "translateY(-50%) translateX(0px) rotate(0deg)";
            document.getElementById("ksichtSulin").style.filter = "blur(0px)";
        }

        if(isElementVisible(document.getElementById("delfin"), 200)){
            document.getElementById("ksichtDelfin").style.transform = "translateY(-50%) translateX(0px) rotate(0deg)";
            document.getElementById("ksichtDelfin").style.filter = "blur(0px)";
        }

        if(isElementVisible(document.getElementById("bajdinec"), 200)){
            document.getElementById("ksichtBajdinec").style.transform = "translateY(-50%) translateX(0px) rotate(0deg)";
            document.getElementById("ksichtBajdinec").style.filter = "blur(0px)";
        }

        if(isElementVisible(document.getElementById("bartuk"), 200)){
            document.getElementById("ksichtBartuk").style.transform = "translateY(-50%) translateX(0px) rotate(0deg)";
            document.getElementById("ksichtBartuk").style.filter = "blur(0px)";
        }

        loader.style.width = (window.scrollY/(document.body.scrollHeight - window.innerHeight))*100 + "%";
        let line4 = document.getElementById("line4");
        if(isElementVisible(document.getElementById("pata"), 200)){
            line4.style.width = "95%";
            document.getElementById("koniec").style.opacity = 1;
            document.getElementById("koniec").style.top = "40%";
            document.getElementById("koniec").style.letterSpacing = "5px";
        }
        const element = document.querySelector("#profiles");

        const backFade = document.getElementById("backgroundFade");
        fadeOpacity = window.scrollY;
        if(fadeOpacity < 400)
            backFade.style.opacity = fadeOpacity/400;
        else
            backFade.style.opacity = 1;
      });
})
realMenu.style.transform = "translateY(-100%)";
document.getElementById("menu").addEventListener("click", () => {
    realMenu.style.transform = realMenu.style.transform == "translateY(-100%)" ? "translateY(0%)" : "translateY(-100%)";
    document.getElementById("menu").style.transform = document.getElementById("menu").style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
    imagine.style.marginTop = imagine.style.marginTop == "20px" ? "200px" : "20px";
});


function isElementVisible(el, delay) {
    const rect = el.getBoundingClientRect();
    return rect.top + delay <= (window.innerHeight || document.documentElement.clientHeight);
}

function isPosterVisible(el, delay) {
    const rect = el.getBoundingClientRect();
    return rect.top + delay <= (window.innerHeight || document.documentElement.clientHeight);
}
