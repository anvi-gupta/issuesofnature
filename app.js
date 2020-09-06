const $climate=document.getElementById("climate");
const $consumption=document.getElementById("consumption");
const $resource=document.getElementById("resource");
const $people=document.getElementById("people");
$climate.onclick=()=>{
document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')";
document.body.style.backgroundSize="100% 100%";
$climate.style.backgroundColor="#2f80ed";
$consumption.style.backgroundColor="transparent";
$resource.style.backgroundColor="transparent";
$people.style.backgroundColor="transparent";
document.getElementById("amount").innerHTML="2,911,343,321";
document.getElementById("cause").innerHTML="Tons of CO2 emitted in the atmosphere";
document.getElementById("save").innerHTML="Do your bit! Save trees, use renewable resources and prefer to travel green";

};
$consumption.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize="100% 100%";
    $consumption.style.backgroundColor="#27ae60";
    $climate.style.backgroundColor="transparent";
    $resource.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.getElementById("amount").innerHTML="878,262,909";
    document.getElementById("cause").innerHTML="Tons of food wasted or lost";
    document.getElementById("save").innerHTML="Do your bit! Shop only what you need, eat only what you need and always save the leftovers";
};
$resource.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize="100% 100%";
    $resource.style.backgroundColor="#f2994a";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.getElementById("amount").innerHTML="347,822,203";
    document.getElementById("cause").innerHTML="Tons of minerals extracted from Earth";
    document.getElementById("save").innerHTML="Do your bit! Grow more trees and believe in 'Reduce, Reuse and Recycle'";
   
};
$people.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundSize="100% 100%";
    $people.style.backgroundColor="#eb5757";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    $resource.style.backgroundColor="transparent";
    document.getElementById("amount").innerHTML="822,773,598";
    document.getElementById("cause").innerHTML="Millions of people die of hunger";
    document.getElementById("save").innerHTML="Do your bit! Never waste food and always feed the needy";
    
};


