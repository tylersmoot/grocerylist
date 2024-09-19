
let totalList = [];

function addItem() {


     //variables
   let input = document.getElementById("input").value;
   let list = document.querySelector("#list");
   let listitem = document.createElement("li");
   let listtext = document.createTextNode(input);
   let clear = document.createElement("span");
  
   
 
//conditional
if (totalList.length < 10) {


      // append input text to a list item & append list item to unordered list
        listitem.appendChild(listtext);
         list.appendChild(listitem);
          listitem.classList.add("item");
          
             console.log(listitem);

               // add list text to total list array
                  totalList.unshift(listtext);
         

      // loop through array of list items and display all that are submitted
         for (let i = 0; i < totalList.length; i++) {

          console.log(totalList[i]);

         } 
            }

else { 

                 let alert = document.getElementById("notesFull");
                  alert.innerText = "**List Full**";
                    
         }
}


 
function reset() {

   let items = document.getElementsByClassName("item");
   let alert = document.getElementById("notesFull");
   let listitem = document.querySelectorAll(".item")
   let textField = document.querySelector("input");


   for (let i = 0; i < totalList.length; i++) {
      totalList[i].remove();
        listitem[i].remove();
   }
    
          alert.innerText = " ";
            totalList = [];
            textField.value = " ";
  
               console.log(totalList);
}


