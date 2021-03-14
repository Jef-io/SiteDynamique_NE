const getLocalisation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            showPosition(position);
            document.getElementById('mapsButton').style.display = 'block';
            const url = "https://www.google.com/maps/search/?api=1&query="+ position.coords.latitude +"," + position.coords.longitude;
            document.getElementById('mapsButton').addEventListener('click', () => {
                const win = window.open(url, '_blank');
                win.focus();
            })
        });
      } else { 
        location.innerHTML = "Geolocation is not supported by this browser.";
      }
}

const showPosition = (position) => {
    document.getElementById('location').innerHTML =  (
        "Latitude : " + position.coords.latitude 
        + "<br>Longitude : " + position.coords.longitude
        + "<br>Précision : " + position.coords.accuracy
    )
}

getLocalisation();