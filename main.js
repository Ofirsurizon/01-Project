const images = []

function addTask() {
    event.preventDefault()

    const taskNameBox = document.getElementById("taskNameBox");
    const taskTimeBox = document.getElementById("taskTimeBox");
    const taskDateBox = document.getElementById("taskDateBox");
    const taskList = document.getElementById("taskList");

    const item = {
        Task: taskNameBox.value,
        Time: taskTimeBox.value,
        Date: taskDateBox.value,
        Image: '/assets/images/notebg.png'
    };

    images.push(item);
    console.log(images);

    let html = "";
    for (const item of images) {

        
        html += `
        <li>
            <div class="note">
                <img src="${item.Image}" alt="Task image">
                <div class="note-text">
                    Task: ${item.Task}, <br> Time: ${item.Time}, <br> Date: ${item.Date} <br>
                    <button class="btn btn-danger delete-button">X</button>
                    </div>
                    
                    
            </div>
        </li>
    `;

    }

    taskList.innerHTML = html;

}