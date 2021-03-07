const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 900))
}


document.addEventListener("click", async () => {
    const dark = document.getElementById('dark');
    const light = document.getElementById('light');
    dark.style.width = "23vw";
    dark.style.height = "23vw";
    light.style.width = "23vw";
    light.style.height = "23vw";
    await sleep();
    window.location.replace('./home.html')
})


document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    let cursor = document.getElementById('cursor');
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})