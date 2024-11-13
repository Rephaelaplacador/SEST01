document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const displayArea = document.getElementById("displayArea");
    const placeholder = displayArea.querySelector(".placeholder");

    thumbnails.forEach(thumbnail => {
        
        thumbnail.addEventListener("click", function() {
            
            displayArea.innerHTML = '';
            
            
            const largeImage = document.createElement("img");
            largeImage.src = thumbnail.src;
            largeImage.alt = "Displayed Image";
            largeImage.classList.add("active");
            
            
            displayArea.appendChild(largeImage);
        });

    
        thumbnail.addEventListener("mouseover", function() {
            thumbnail.style.opacity = "0.8";
        });

        thumbnail.addEventListener("mouseleave", function() {
            thumbnail.style.opacity = "1";
        });
    });
});
