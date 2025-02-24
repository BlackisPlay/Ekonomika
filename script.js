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

    let vyzva0 = document.getElementById("vyzva0");
    let vyzva1 = document.getElementById("vyzva1");
    let vyzva2 = document.getElementById("vyzva2");
    let vyzva3 = document.getElementById("vyzva3");
    let vyzva4 = document.getElementById("vyzva4");

    let check0 = document.getElementById("check0");
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    setTimeout(() => {
        line1.style.width = "100%";

    }, 1000)
    setTimeout(() => {
        
        cover.style.transform = "translateY(-100%)";
        background.style.transform = "translateY(0px)";
        setTimeout(() => {
            nadpis.style.transform = "translateY(0px)";
            nadpis.style.opacity = 1;
        }, 100);
        setTimeout(() => {

            document.getElementById("logoImg").style.transform = "translateY(0px) scale(0.3)";
            document.getElementById("logoImg").style.opacity = 1;
            document.getElementById("login").style.transform = "translateY(0px)";
            document.getElementById("login").style.opacity = 1;
            setTimeout(() => {
                vyzvyNadpis.style.opacity = 1;
                vyzvyNadpis.style.transform = "translateY(0px)";

                line0.style.width = "100%";
                document.getElementById("register").style.transform = "translateY(0px)";
                document.getElementById("register").style.opacity = 1;
                setTimeout(() => {
                    nadpisPodtext.style.transform = "translateY(0px)";
                    nadpisPodtext.style.opacity = 1;
                    kulin.style.transform = "translateY(0px)";
                    kulin.style.opacity = 1;
                    document.getElementById("menu").style.transform = "translateY(0px)";
                    document.getElementById("menu").style.opacity = 1;

                    
                    vyzva0.style.opacity = 1;
                    vyzva0.style.transform = "translateX(0px)";
                    check0.style.opacity = 1;
                    check0.style.transform = "translateX(0px)";
                    setTimeout(() => {
                        vyzva1.style.opacity = 1;
                        vyzva1.style.transform = "translateX(0px)";
                        check1.style.opacity = 1;
                        check1.style.transform = "translateX(0px)";
                        premium.style.opacity = 1;
                        premium.style.transform = "translateY(0px)";
                        setTimeout(() => {
                            vyzva2.style.opacity = 1;
                            vyzva2.style.transform = "translateX(0px)";
                            check2.style.opacity = 1;
                            check2.style.transform = "translateX(0px)";
                            regular.style.opacity = 1;
                            regular.style.transform = "translateY(0px)";
                            setTimeout(() => {
                                vyzva3.style.opacity = 1;
                                vyzva3.style.transform = "translateX(0px)";
                                check3.style.opacity = 1;
                                check3.style.transform = "translateX(0px)";
                                setTimeout(() => {
                                    vyzva4.style.opacity = 1;
                                    vyzva4.style.transform = "translateX(0px)";
                                    check4.style.opacity = 1;
                                    check4.style.transform = "translateX(0px)";
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 100);
            }, 100);
        }, 1000);
    }, 500);
})