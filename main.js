const elTaskNameBox = document.getElementById("taskNameBox");
const elTaskTimeBox = document.getElementById("taskTimeBox");
const elTaskDateBox = document.getElementById("taskDateBox");
const elTaskList = document.getElementById("taskList");

const LOCAL_STORAGE_KEY = "ofir-Gallery";
let images = [];

function renderNotes() {
  let htmlStr = "<ul>";
  for (let i = 0; i < images.length; i++) {
    htmlStr += `
        <li>
            <div class="note text-center">
                
                <div class="note-field-container">
                    <div class="label headline-font">Task:</div> 
                    <div class="value">${images[i].Task}</div>
                </div>

                <div class="note-field-container">
                     <div class="label headline-font">Time:</div>
                     <div class="value">${images[i].Time}</div>
                </div>

                <div class="note-field-container">
                     <div class="label headline-font">Date:<div>
                     <div class="value">${images[i].Date}</div>
                </div>

                <button
                    id="${i}" 
                    class="btn btn-danger btn-sm  top-2  btn-note-submit"
                    onclick="deleteNote(this)">X
                </button>



            </div>
        </li>
    `.trim();
  }

  htmlStr += "</ul>";

  elTaskList.innerHTML = htmlStr;
}

function loadFromLocalStorage() {
  const json = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (json != null && json.length > 0) {
    images = JSON.parse(json);
  }
}

function main() {
  loadFromLocalStorage();
  renderNotes();
}

function saveToLocalStorage() {
  const str = JSON.stringify(images);
  localStorage.setItem(LOCAL_STORAGE_KEY, str);
}

function addTask(event) {
  event.preventDefault();

  const item = {
    Task: elTaskNameBox.value,
    Time: elTaskTimeBox.value,
    Date: elTaskDateBox.value,
  };
  //push item to array
  images.push(item);

  //save to local storage
  saveToLocalStorage();

  // display the note
  renderNotes();

  //reset fields in the form
  document.getElementById("taskForm").reset();
}

function deleteNote(element) {
  console.log(element);
  const index = element.id;
  images.splice(index, 1);
  //save after delete
  saveToLocalStorage();
  //display after delete
  renderNotes();
}
