/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * on trouve le projet voulue dans la liste des recettes
 * @param {Array} projects - tous les projets
 * @param {string} searchedProjectId - l'identifiant du projet recherché
 * @return {Object} - La recette trouvée
 */
 export function findProject(projects, searchedProjectId) {
  const project = projects.find((currentProject) => {
    return currentProject.slug === searchedProjectId;
  });
  return project;
}

export function findPriority(priorityId) {
  let stringPriority = '';
  if (priorityId == 1) {
    stringPriority = 'Peu important'
  }
  if (priorityId == 2) {
    stringPriority = 'Important'
  }
  if (priorityId == 3) {
    stringPriority = 'Très important'
  }
  return stringPriority;
}

export let importanceList = [
  {
    id: 1,
    inportanceName: 'Peu important'
  },
  {
    id: 2,
    inportanceName: 'Important'
  },
  {
    id: 3,
    inportanceName: 'Très important'
  },
]
