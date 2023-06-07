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
                    <div class="label">
                        Task
                    </div> 

                    <div class="value">
                        ${images[i].Task}
                    </div>
                </div>

                <div class="note-field-container">
                    <div class="label">Time</div>
                    <div class="value">${images[i].Time}</div>
                </div>

                <div class="note-field-container">
                    <div class="label">Date:<div>
                    <div class="value">${images[i].Date}</div>
                </div>

                <button id="${i}" class="btn-note-submit btn btn-danger delete-button mx-auto d-block mb-2" onclick="deleteNote(this)">X</button>
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
