const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 0))
}

window.addEventListener('DOMContentLoaded', async () => {
    await sleep();
    if (document.cookie) {
        document.getElementById('lasturl').innerHTML = document.cookie.split(' ')[1].split('=')[1];
    }
});