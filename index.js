let allDivsCourses=document.querySelectorAll(".course-four");

for(let i=0;i<allDivsCourses.length;i++)
{
    allDivsCourses[i].setAttribute("counter","0");
    allDivsCourses[i].style.display="none";
}
let allButtons=document.querySelectorAll(".sp-buttons")
for(let i=0;i<allButtons.length;i++)
{
allButtons[i].onclick=()=>
{
   let counter=+allButtons[i].parentElement.nextElementSibling.getAttribute("counter");
   if(counter%2==0)
   {
    allButtons[i].parentElement.nextElementSibling.style.display="block";
    counter++;
    allButtons[i].parentElement.nextElementSibling.setAttribute("counter",counter);
    allButtons[i].innerHTML="read Less";
   }
   else
   {
    allButtons[i].parentElement.nextElementSibling.style.display="none";
    counter++;
    allButtons[i].parentElement.nextElementSibling.setAttribute("counter",counter);
    allButtons[i].innerHTML="read More";
   }
}
}