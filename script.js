// ===== Ajouter au panier =====
function ajouterPanier(nom, prix) {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.push({
        nom: nom,
        prix: prix
    });

    localStorage.setItem("panier", JSON.stringify(panier));

    mettreAJourCompteur();

    alert("Produit ajouté au panier !");
}


// ===== Supprimer un produit =====
function supprimerProduit(index) {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.splice(index, 1);

    localStorage.setItem("panier", JSON.stringify(panier));

    afficherPanier();
    mettreAJourCompteur();
}


// ===== Afficher le panier =====
function afficherPanier() {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let container = document.getElementById("panierContainer");

    if (!container) return;

    if (panier.length === 0) {
        container.innerHTML = "<p>Votre panier est vide</p>";
        return;
    }

    let total = 0;
    container.innerHTML = "";

    panier.forEach(function(produit, index) {

        total += produit.prix;

        container.innerHTML += `
            <div class="card">
                <h3>${produit.nom}</h3>
                <p>Prix : $${produit.prix}</p>
                <button onclick="supprimerProduit(${index})">
                    Supprimer
                </button>
            </div>
        `;
    });

    container.innerHTML += `<h2>Total : $${total}</h2>`;
}


// ===== Vider panier =====
function viderPanier() {
    localStorage.removeItem("panier");
    location.reload();
}


// ===== Compteur panier =====
function mettreAJourCompteur() {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let compteur = document.getElementById("compteurPanier");

    if (compteur) {
        compteur.innerText = panier.length;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    mettreAJourCompteur();
});
