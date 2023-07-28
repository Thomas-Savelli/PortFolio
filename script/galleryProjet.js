// Fonction asynchrone pour récupérer les data du fichier json
async function fetchProjets() {
    try{
        let requestUrl = "https://github.com/Thomas-Savelli/PortFolio/blob/main/public/data/projets.json";
        let dataProjets = [];

        // Effectuer la requete pour récupérer les datas
        const reponse = await fetch(requestUrl);
        const data = await Response.json();

        // Verifier si la requete a reussi
        if (reponse.ok) {
            const results = data.results;
        } else {
            throw new Error('Une erreur s\'est produite lors de la récupération des films d\'action.');
          }
    }
    catch (error) {
        console.error(error);
      }
}

fetchProjets()