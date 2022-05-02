// write js code here corresponding to matches.html

var matchArr= JSON.parse(localStorage.getItem("schedule"));
displaymatchdata(matchArr)
var FavouriteArr= JSON.parse(localStorage.getItem("favourites")) ||[];
function displaymatchdata(data){
data.forEach(function(elem){
    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=elem.matchno

    var td2=document.createElement("td");
    td2.innerText=elem.team1

    var td3=document.createElement("td");
    td3.innerText=elem.team2

    var td4=document.createElement("td");
    td4.innerText=elem.Date

    var td5=document.createElement("td");
    td5.innerText=elem.Venue

    var td6=document.createElement("td");
    td6.innerText="Favourite"
    td6.addEventListener("click",function(){
        Favouritefun(elem)
    });


    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)

});
function Favouritefun(elem){
    FavouriteArr.push(elem)
   
    localStorage.setItem("favourites",JSON.stringify(FavouriteArr));
    window.location.href="favourites.html"
}
}

