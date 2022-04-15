/*------------------------DECLARATION OF VARIABLES--------------------------- */
let nxt = document.querySelector(".next"); //next button
let prev = document.querySelector(".previous"); // prev button
let section = 0; //setting index at 0 on the sections for startingpoint
let sections = document.querySelectorAll(".section"); //call all sections available
let nav = document.querySelectorAll(".nav > li"); //for changing sections

/*--------------DECLARATION OF VARIABLES------------------------------------- */




/*---------------------------------------------------------------CODE------------------------------------- */

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
        sections[section].classList.remove("active"); //will change focus to the next selected one.
        sections[section = i].classList.add("active"); //the current selected section will be the focus or rather displayed.

        //FOR BUTTONS APPEAR AND DISAPPEAR ON FIRST/LAST PAGE
        if (i < 1 ) {  
        document.getElementById("previous").classList.remove("activeBtn"); //assuming the page starts at first 0, prev button will disappear
        document.getElementById("next").classList.add("activeBtn");
        } else if(i == 2) { //if index ever reach last, which index is 2, show the following
              document.getElementById("previous").classList.add("activeBtn"); 
              document.getElementById("next").classList.remove("activeBtn"); 
        }else { //if index ever reach last, which index is 2, show the following
          document.getElementById("previous").classList.add("activeBtn"); 
          document.getElementById("next").classList.add("activeBtn"); 
    }
    });
}

//NAVIGATION FOR SECTIONS
nxt.addEventListener("click", function() {
    if (section < nav.length - 1) {
      nav[section + 1].click();
    }
});

prev.addEventListener("click", function() {
    if (section > 0) {
      nav[section - 1].click();
    }
});

/*---------------------------------------------------------------CODE------------------------------------- */