function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "49f354ef01df4547",
    zoom: 18,
    center: { lat: 28.52104776281828, lng: -81.1839212179325},
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: true
  });

const markers = [
[
"Harry Potter Worlds",
28.52104776281828, 
-81.1839212179325,
"./images/harry.svg",
40,
40
],
[
"Stoneybrook blvd",
28.521415407506865,
 -81.1837978363179,
"./images/caldero.svg",
40,
40
],
[
"Condado orange",
28.521047762819222, 
-81.18425917626516,
"./images/varita1.svg",
40,
40
],
[
"Northampton",
28.520658091985396, 
-81.18405606720702,
"./images/reloj.svg",
40,
40
],
[
"Condadado 2 orange",
28.52103762632456, 
-81.18332469465545,
"./images/snich.svg",
40,
40
],
];


for(let i = 0; i<markers.length; i++){
const currMaker = markers[i];

const marker = new google.maps.Marker({
  position: {lat: currMaker[1], lng:currMaker[2] },
  map: map,
  title: currMaker[0],
  icon: {
    url: currMaker[3], 
    scaledSize: new google.maps.Size(currMaker[4], currMaker[5])
  },
  Animation: google.maps.Animation.DROP
});
const infowindow = new google.maps.InfoWindow({
  content: currMaker[0],
});
marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
});

}

}


