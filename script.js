addEventListener("DOMContentLoaded", () => {
    let line0 = document.getElementById("line0");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let realMenu = document.getElementById("realMenu");

    let slideTrack = document.getElementById("slideTrack");
    let slideTrack2 = document.getElementById("slideTrack2");

    let loader = document.getElementById("loader");

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
      
      window.addEventListener("scroll", () => {
        if (isElementVisible(line2)) {
          line2.style.width = "95%";
        }
        if (isElementVisible(slideTrack)) {
            slideTrack.style.opacity = 1;
            slideTrack.style.transform = "translateX(0px)";
        }
        if (isElementVisible(slideTrack2)) {
            slideTrack2.style.opacity = 1;
            slideTrack2.style.transform = "translateX(0px)";
        }
        
        loader.style.width = (window.scrollY/(document.body.scrollHeight - window.innerHeight))*100 + "%";

        const element = document.querySelector("#profiles");
        if (isElementInCenter(element)) {
            
        }
      });
})
realMenu.style.transform = "translateY(-100%)";
document.getElementById("menu").addEventListener("click", () => {
    realMenu.style.transform = realMenu.style.transform == "translateY(-100%)" ? "translateY(0%)" : "translateY(-100%)";
    document.getElementById("menu").style.transform = document.getElementById("menu").style.transform == "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
});

let fadeOpacity = 0;

addEventListener("scroll", () => {
    const backFade = document.getElementById("backgroundFade");
    fadeOpacity = window.scrollY;
    if(fadeOpacity < 400)
        backFade.style.opacity = fadeOpacity/400;
    else
        backFade.style.opacity = 1;
})

function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom + 100 <= (window.innerHeight || document.documentElement.clientHeight);
  }


function isElementInCenter(el) {
    if (!el) return false; // Prevent errors if element is null

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate the vertical center of the viewport
    const viewportCenter = viewportHeight / 2;

    // Calculate the element's center
    const elementCenter = rect.top + rect.height / 2;

    // Check if the element's center is near the viewport's center
    return Math.abs(viewportCenter - elementCenter - 200) < rect.height / 2;
}

// Example usage: check when scrolling
window.addEventListener("scroll", () => {

});
