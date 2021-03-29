class DeathNoteEntry{
  constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  whoWilDie(){
    console.log("Umrze " + this.name + " " + this.surname + " w wieku: " + this.age + " lat");
  }
}

let mateusz = new DeathNoteEntry("Mateusz", "Morawiecki", "53");
mateusz.whoWilDie()

/* ARRAY DECLARATION */

let peopleList = [];
refreshList();

/* ADDING LIST ITEMS */

$("button#submitButton").click(function() {

  let name = $('input[name = "name"]').val();
  let surname = $('input[name = "surname"]').val();
  let age = $('input[name = "age"]').val();    
  
  peopleList.push(new DeathNoteEntry(name, surname, age));
  console.log(peopleList.length);

  $("#list").empty();

  refreshList();
});

/* ALL LIST BUTTONS */

function refreshList(){
  $("#list").empty();

  for(let i=0; i<peopleList.length; i += 1){
    let liElement = "<div data-entryId='"+ i +"'>" + peopleList[i].name + " " + peopleList[i].surname + " " + peopleList[i].age + "<button class='upButtons'>Up</button><button class='downButtons'>Down</button><button class='allRemoveButtons'>Remove</button></div>";
    $("#list").append(liElement);
  }; 
}

function array_move(arr, old_index, new_index) {
  let newOne = arr[new_index]; // "c"
  let oldOne = arr[old_index];

  arr[old_index] = newOne;
  arr[new_index] = oldOne;

}


function array_move_przemek(arr, old_index, new_index) {
  
  let tmp = arr[old_index];
  arr[old_index] = arr[new_index];
  arr[new_index] = tmp;

}

/* REMOVE BUTTONS */

$(document).on('click', '.allRemoveButtons', (function() {

 let showIndexNum = $(this).parent().attr("data-entryId");
 showIndexNum = parseInt(showIndexNum);
 console.log(showIndexNum);
 peopleList.splice(showIndexNum, 1); 
 refreshList();

}));

/* UP BUTTONS */

$(document).on('click', '.upButtons', function() {

  let showIndexNumUp = $(this).parent().attr("data-entryId");  
  showIndexNumUp = parseInt(showIndexNumUp);
  let upDec = showIndexNumUp - 1;
  
  if(upDec >= 0){   
  array_move(peopleList, showIndexNumUp, upDec); 
  refreshList();
  };

});

/* DOWN BUTTONS */
$(document).on('click', '.downButtons', function() {

  let showIndexNumDown = $(this).parent().attr("data-entryId"); 
  showIndexNumDown = parseInt(showIndexNumDown); 
  let downInc = showIndexNumDown + 1;  
  let lastElementId = peopleList.length - 1;
  
  if(downInc <= lastElementId)  {
  array_move(peopleList, showIndexNumDown, downInc); 
  refreshList();
  };  

});