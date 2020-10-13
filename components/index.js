const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";
const lat = document.getElementById('lat');
const lan = document.getElementById('lan');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtbWl0cGFsMjAwMCIsImEiOiJja2ZoeGF5cmUwMWY0MnRxanlhZm1wa2ZwIn0.HCs9mgxZpygzeHZbSfRXDQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 20],
    zoom: 1
});



const marker = new mapboxgl.Marker()
    .setLngLat([0, 0])
    .addTo(map);
async function getISS() {
    const response = await fetch(API_URL);
    const respdata = await response.json();

    const { latitude, longitude } = respdata;
    console.log(latitude, longitude);
    lat.innerText = "Latitude: "+latitude;
    lan.innerText = "Longitude: "+longitude;
    marker.setLngLat([longitude, latitude]);
}
getISS();
setInterval(getISS, 1000);


