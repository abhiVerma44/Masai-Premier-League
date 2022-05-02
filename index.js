// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchdata);
var matchArr= JSON.parse(localStorage.getItem("schedule")) ||[]
 function matchdata(){
   event.preventDefault();
   var matchObj={
     matchno:document.querySelector("#matchNum").value,
     team1:document.querySelector("#teamA").value,
     team2:document.querySelector("#teamB").value,
     Date:document.querySelector("#date").value,
     Venue:document.querySelector("#venue").value,
   };
   matchArr.push(matchObj);
//    console.log(matchArr);
   localStorage.setItem("schedule",JSON.stringify(matchArr));
   window.location.href="matches.html"
 }

