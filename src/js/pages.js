const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 0))
}

//menu
const dropdown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdown.length; i ++) {
    dropdown[i].addEventListener("click", (e) => toggleDropdown(e));
}

const toggleDropdown = (e) => {
    let target = e.target;
    while (target.nextSibling.nodeType === 3) {
        target = target.nextSibling;
    }

    if (target.nextSibling.classList && target.nextSibling.classList.contains('hidden')) {
        target.nextSibling.classList.remove('hidden')
    } else {
        target.nextSibling.classList.add('hidden')
    }
}

let menuBurger = document.getElementById('menuBurger');
if (menuBurger) {
    menuBurger.addEventListener('click', () => {
        if (document.getElementById('menu').style.display === 'block') {
            document.getElementById('menu').style.display = 'none'
        } else {
            document.getElementById('menu').style.display = 'block'
        }
    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1280 && document.getElementById('menu').style.display === 'none') {
        document.getElementById('menu').style.display = 'block'
    } else if (window.innerWidth < 1280 && document.getElementById('menu').style.display === 'block') {
        document.getElementById('menu').style.display = 'none'
    }
})

//fade in
window.addEventListener('DOMContentLoaded', async () => {
    await sleep();
    document.getElementById('mainlist').classList.add("visible");
    document.getElementById('main').classList.add("visible");
});

//Cookie
const askForCookie = () => {

    const cookieDiv = document.createElement('div');
    cookieDiv.id = "cookie";
    cookieDiv.innerHTML = (
        '<p>Ce site utilise un petit cookie, ce cookie prends en information la dernière page visitée</p>'
    )
    const cookieButton = document.createElement('button');
    cookieButton.innerHTML = "J'en ai pris connaissance";
    cookieButton.addEventListener('click', () => {
        acceptCookie();
    })
    cookieDiv.append(cookieButton)
    document.body.appendChild(cookieDiv)

}

const acceptCookie = () => {
    document.getElementById('cookie').remove();
    updateCookie()
}

const updateCookie = () => {
    document.cookie = "last url = " + document.referrer;
}


if (!document.cookie && window.location.pathname.includes("home")) {
    askForCookie();
} else {
    updateCookie()
}