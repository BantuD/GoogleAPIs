

function initMap()
{
 var options = {
    center:{lat:38.3460,lng:-0.4907},
    zoom:8,

 }
 map = new google.maps.Map(document.getElementById("map"),options);

 //Marker
 const marker = new google.maps.Marker({
   position:{lat:37.9922, lng:-1.1307},
   map:map
 });
 //Marker End

//Info window 
const detailWindow = new google.maps.InfoWindow({
   content: `<h2>Murcia City</h2>`
});

marker.addListener("mouseover",()=>{
   detailWindow.open(map,marker);
})

}
