// write js code here corresponding to favourites.html
var FavouriteArr= JSON.parse(localStorage.getItem("favourites"));
displaymatchdata(FavouriteArr);

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
    td6.innerText="Remove as Favourite"
    td6.style.cursor="pointer"
    td6.addEventListener("click",deleteRow)
       

  
   

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
  
    })
    function deleteRow() {
        event.target.parentNode.remove();
      
        event.target.parentNode.innerHTML = "";
        localStorage.setItem("favourites",JSON.stringify(FavouriteArr));
      }
      
        
    //    


    // }
}
