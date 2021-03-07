import '../scss/home.scss'
import '../scss/index.scss'

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