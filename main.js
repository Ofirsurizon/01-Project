const IMAGES_KEY = "ofir-Gallery";
let images = []
loadFromLocalStorage()

function saveToLocalStorage() {
    const str = JSON.stringify(images);
    localStorage.setItem(IMAGES_KEY, str);
}


function addTask() {
    event.preventDefault()

    const taskNameBox = document.getElementById("taskNameBox");
    const taskTimeBox = document.getElementById("taskTimeBox");
    const taskDateBox = document.getElementById("taskDateBox");


    const item = {
        Image: '/assets/images/note.jpg',
        Task: taskNameBox.value,
        Time: taskTimeBox.value,
        Date: taskDateBox.value

    };
    //push item to array
    images.push(item);

    //save to local storage
    saveToLocalStorage();

    // display the note
    displayNotes();
}

function displayNotes() {
    const taskList = document.getElementById("taskList");

    let html = "";
    for (let i = 0; i < images.length; i++) {

        html += `
        <li>
            <div class="note text-center">
                <p>Task: ${images[i].Task}</p>
                <p>Time: ${images[i].Time}</p>
                <p>Date: ${images[i].Date}</p>
                <button id="${i}" class="btn btn-danger delete-button mx-auto d-block mb-2" onclick="deleteNote(this)">X</button>
            </div>
        </li>
        `;

    }

    taskList.innerHTML = html;
}


function deleteNote(element) {
console.log(element);
const index = element.id;
images.splice(index,1)
//save after delete
saveToLocalStorage();
//display after delete
displayNotes();
}

function loadFromLocalStorage() {
    const json = localStorage.getItem(IMAGES_KEY);
    if (json != null && json.length > 0) {
        images = JSON.parse(json);
    }
    displayNotes()

}