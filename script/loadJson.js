// Charger le fichier JSON à l'aide d'une balise script
function chargerFichierJSON(nomFichier, callback) {
    var script = document.createElement('script');
    script.src = nomFichier;
    script.onload = function() {
      // Le fichier JSON a été chargé avec succès
      // Utiliser les données JSON ici (elles doivent être disponibles dans une variable globale)
      callback(monObjetJSON);
    };
    script.onerror = function() {
      console.error("Une erreur est survenue lors du chargement du fichier JSON.");
    };
    document.head.appendChild(script);
  }
  