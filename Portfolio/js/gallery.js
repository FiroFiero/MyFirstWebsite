document.addEventListener("click", function(e) {
    if (e.target.classList.contains("gallery-item")) {
        const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
        myModal.show();
    }
})