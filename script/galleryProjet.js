let projectsData = [
    {
        "id": 1,
        "imagePath": "",
        "name": "Book Online",
        "type": "Back-end",
        "tools": "",
        "mission": "Créer un programme de scrapping",
        "description": "Ce programme a pour objectif de faciliter la tâche de suivi des prix des livres d'occasion sur les sites web de concurrents de Books Online. Il s'agit d'un scraper développé en Python qui extrait les informations tarifaires d'autres librairies en ligne. Dans cette version bêta, le programme se concentre sur la récupération des prix chez un revendeur de livres en ligne nommé Books to Scrape, au moment de son exécution. L'application est développée pour être exécutable à la demande et ne surveille pas les prix en temps réel sur la durée. Il permettra à Books Online de gagner du temps et de rester compétitif sur le marché.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/Books_Online_ETL.git"
    },
    {
        "id": 2,
        "imagePath": "public/images/projects/PROGESTEC-mini.svg",
        "name": "Progestec",
        "type": "Back-end",
        "tools": "",
        "mission": "Créer un programme hors ligne en POO pour la gestion de tournois d'échecs",
        "description": "Le Programme de Gestion de Tournois d'Échecs est une application simple et conviviale conçue pour aider les clubs d'échecs locaux à gérer efficacement leurs tournois. Contrairement aux solutions existantes, cette application fonctionne hors ligne, ce qui la rend idéale pour les tournois qui ne disposent pas d'une connexion Internet fiable.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/association_echecs.git"
    },
    {
        "id": 3,
        "imagePath": "",
        "name": "JustStreamIt",
        "type": "web application",
        "tools": "",
        "mission": "",
        "description": "Créer une application web permettant de visualiser en temps réel un classement de films intéressants.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/juststreamit"
    },
    {
        "id": 4,
        "imagePath": "",
        "name": "AlgoInvest Trade",
        "type": "Back-end",
        "tools": "",
        "mission": "",
        "description": "Réalisation de deux algorithmes (Brut Force et Optimisé) pour une société financière spécialisée dans l'investissement. La société cherche à optimiser ses stratégies d'investissement à l'aide d'algorithmes, afin de dégager davantage de bénéfices pour ses clients. ",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/AlgoInvest-Trade_brutforce"
    },
    {
        "id": 5,
        "imagePath": "",
        "name": "LITRevu",
        "type": "web application",
        "tools": "",
        "mission": "Application Web de critiques de Livres et d'Articles",
        "description": "Ce programme a pour objectif de faciliter la tâche de suivi des prix des livres d'occasion sur les sites web de concurrents de Books Online. Il s'agit d'un scraper développé en Python qui extrait les informations tarifaires d'autres librairies en ligne. Dans cette version bêta, le programme se concentre sur la récupération des prix chez un revendeur de livres en ligne nommé Books to Scrape, au moment de son exécution. L'application est développée pour être exécutable à la demande et ne surveille pas les prix en temps réel sur la durée. Il permettra à Books Online de gagner du temps et de rester compétitif sur le marché.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/LITRevu.git"
    },
    {
        "id": 6,
        "imagePath": "",
        "name": "SoftDesk API",
        "type": "Back-end",
        "tools": "",
        "mission": "Créer une API sécurisée RESTful",
        "description": "Le projet SoftDesk est une initiative visant à créer un backend robuste et sécurisé pour alimenter des applications frontend sur diverses plateformes. Cette API RESTful permettra de traiter et de gérer efficacement les données, offrant une expérience utilisateur optimale.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/SoftDesk_API.git"
    },
    {
        "id": 7,
        "imagePath": "",
        "name": "Python Testing",
        "type": "Back-end",
        "tools": "",
        "mission": "Améliorer une application web Python pour des tests et du débogage",
        "description": "Ce projet est divisé en plusieurs branches. Chaques bugs ou features disposent de sa propre branche. La branche QA (Qualité) contient l'intégralité du code testé et débogué.",
        "videoPath": "",
        "githubLink": "https://github.com/Thomas-Savelli/Books_Online_ETL.git"
    }
];


window.addEventListener('load', function() {
  generateProjectIcons();
});

// Fonction pour générer les icônes de projet
function generateProjectIcons() {
  var projectsContainer = document.querySelector('.gallery__projets');

  projectsData.forEach(project => {
    var projectIcon = document.createElement('div');
    projectIcon.classList.add('project-icon');

    var imgButton = document.createElement('img');
    imgButton.src = project.imagePath;
    imgButton.alt = project.name;
    imgButton.classList.add('project-id-' + project.id);

    imgButton.onclick = function () {
      openModal(
        project.name,
        project.description,
        project.githubLink,
        project.imagePath,
        project.videoPath
      );
    };

    projectIcon.appendChild(imgButton);
    projectsContainer.appendChild(projectIcon);
  });
}


function openModal(projectName, projectDescription, githubLink, imagePath, videoPath) {
  var modal = document.getElementById('myModal');
  var modalTitle = document.getElementById('modal-title');
  var modalDescription = document.getElementById('modal-description');
  var modalGithub = document.getElementById('modal-github');
  var modalImage = document.getElementById('modal-image');
  var modalVideo = document.getElementById('modal-video');

  modalTitle.textContent = projectName;
  modalDescription.textContent = projectDescription;
  modalGithub.href = githubLink;
  modalImage.src = imagePath;
  modalVideo.src = videoPath;

  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Attache un gestionnaire d'événement pour fermer la fenêtre modale en cliquant sur la croix
var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Attache un gestionnaire d'événement pour fermer la fenêtre modale en cliquant en dehors de la fenêtre
window.addEventListener('click', function(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
});
