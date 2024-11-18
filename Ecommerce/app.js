const dragBox = document.getElementById("dragBox");
const dropArea = document.getElementById("dropArea");

dragBox.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    //data transfer - an object used to hold any data transferred between contexts such as drag and drop operations
});

dropArea.addEventListener("dragover", function(event) {
    event.preventDefault(); //This allows you to drop
});

dropArea.addEventListener("drop", function(event) {
    event.preventDefault(); //This allows you to drop
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    dropArea.appendChild(draggedElement);
    dropArea.style.border = "2px solid green";
    dropArea.textContent = "dropped!";
});