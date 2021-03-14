const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 0))
}

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

window.addEventListener('DOMContentLoaded', async () => {
    await sleep();
    document.getElementById('mainlist').classList.add("visible");
    document.getElementById('main').classList.add("visible");
});