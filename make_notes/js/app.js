console.log("Welcome to notes app");
showNotes();
//if users adds a note ... add it to local storage

let addBtn = document.getElementById("addBtn");
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
    <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class = "card-text">${element}</p>
            <button id = ${index} onclick ="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
          </div>
        </div>
    `;
  });
  let notesElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use Add a note Section above to add notes `;
  }
}

//function to delete node

function deleteNote(index) {
  // console.log(`I am deleting`, index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    //we parse it so that we get the array inthe array form ... otherwise we would obtain a string
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});

//function to show elements from localstorage

let search = document.getElementById("searchText");

search.addEventListener("input", function() {
  let inputVal = search.value.toLowerCase();
  // console.log(`Input Event fired!`, inputVal);

  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function(element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;

    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
