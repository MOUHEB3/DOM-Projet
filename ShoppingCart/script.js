document.addEventListener("DOMContentLoaded", function () {
    // Prix des produits
    const prices = [29.99, 15.49, 12.99]; // Prix pour chaque produit
    const quantityInputs = document.querySelectorAll(".qte");
    const priceDisplays = document.querySelectorAll(".item.price-1, .item.price-2, .item.price-3");
    const totalDisplay = document.querySelector(".total");

    // Fonction pour mettre à jour l'affichage des prix et du total
    function updatePrices() {
        let totalPrice = 0;

        quantityInputs.forEach((input, index) => {
            const quantity = parseInt(input.value) || 0; // Assurez-vous que c'est correct
            const itemPrice = quantity * prices[index];
            
            // Mettre à jour l'affichage du prix de l'article
            priceDisplays[index].textContent = `$${itemPrice.toFixed(2)}`;

            // Ajouter au prix total
            totalPrice += itemPrice;
        });

        // Mettre à jour le prix total
        totalDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    // Ajout d'événements pour les boutons plus et moins
    document.querySelectorAll(".plus-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            quantityInputs[index].value = parseInt(quantityInputs[index].value || 0) + 1;
            updatePrices();
        });
    });

    document.querySelectorAll(".minus-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            const currentQuantity = parseInt(quantityInputs[index].value || 0);
            if (currentQuantity > 0) {
                quantityInputs[index].value = currentQuantity - 1;
                updatePrices();
            }
        });
    });

    // Initialisation des quantités et des prix
    updatePrices();
});