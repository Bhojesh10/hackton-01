let div=document.createElement("div")
div.innerHTML=`
<h1 class="Search">Search</h2>
<h2>Nationlize API</h2>
<div class="BB"><input type="text" id="txt" placeholder="Enter your country Name"> </div>
<button type="button" id="but" onclick="Boo()">Search</button>


<div class="output"></div>`
div.style.textAlign="center"
document.body.append(div)


async function Boo(){
try{
    
let res=document.getElementById("txt").value;
let res1=await fetch(`https://api.nationalize.io/?name=${res}`)
let res2=await res1.json();
console.log(res2)

 document.querySelector(".output").innerHTML=`
    
      <p>Name: ${res2.name}</p>
      <p>Country ID-1: ${res2.country[0].country_id} </p>
      <p>Probability : ${res2.country[0].probability}</p>
      <p>Country ID-2: ${res2.country[1].country_id} </p> 
      <p> Probability: ${res2.country[1].probability}</p>`
    }
    catch(error){
        alert("Oops this Name is not found")
    }

}
