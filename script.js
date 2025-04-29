function openModal(project) {
    var modal = document.getElementById("projectModal");
    var title = document.getElementById("modalTitle");
    var image = document.getElementById("modalImage");
    var description = document.getElementById("modalDescription");

    if (project === 'carRental') {
        title.innerText = "Car Rental System";
        image.src = "your-images-folder/car_rental_system.jpg"; // <- Your Car Rental project image
        description.innerText = "The Car Rental System allows users to browse, book, and manage rental cars efficiently. Developed with a clean UI, multiple booking options, and integrated payment gateway.";
    } else if (project === 'diceGame') {
        title.innerText = "Dice Rolling Game";
        image.src = "your-images-folder/dice_rolling_game.jpg"; // <- Your Dice Rolling Game image
        description.innerText = "A Python-based Dice Rolling Game that simulates real dice throws using random number generation and displays dynamic dice faces.";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
}
