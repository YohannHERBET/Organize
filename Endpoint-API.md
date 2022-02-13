# Les routes


## Les Tâches

| Endpoint               | Méthode HTTP | action                                                                     |
| ---------------------- | ------------ | -------------------------------------------------------------------------- |
| api/task               | (**GET**)    | récupère toutes les taches (tout user confondu)                            |
| api/task/{id}          | (**GET**)    | récupère une tache selon son id                                            |
| api/category/{id}/task | (**GET**)    | récupère toute les tache d'une catégorie selon son id (id de la catégorie) |
| api/category/{id}/task | (**POST**)   | pour créer une tache                                                       |
| api/task/{id}          | (**PUT**)    | pour modifier une tache selon son id (tous les champs a renseigner)        |
| api/task/{id}          | (**DELETE**) | pour supprimer une tache selon son id                                      |


## Les Utilisateurs

| Endpoint      | Méthode HTTP | action                                                                   |
| ------------- | ------------ | ------------------------------------------------------------------------ |
| api/user      | (**GET**)    | récupère tous les utiliseurs                                             |
| api/user/{id} | (**GET**)    | récupère un utilisateur selon son id                                     |
| api/user      | (**POST**)   | pour créer un utilisateur                                                |
| api/user/{id} | (**PUT**)    | pour modifier un utilisateur selon son id (tous les champs à renseigner) |
| api/user/{id} | (**DELETE**) | pour supprimer un utilisateur selon son id                               |


## Les Projets

| Endpoint              | Méthode HTTP | action                                                              |
| --------------------- | ------------ | ------------------------------------------------------------------- |
| api/project           | (**GET**)    | récupère tous les projets (tout user confondu)                      |
| api/project/{id}      | (**GET**)    | récupère un projet selon son id                                     |
| api/user/{id}/project | (**GET**)    | récupère tous les projets d'un user selon son id (id du user)       |
| api/user/{id}/project | (**POST**)   | pour créer un projet                                                |
| api/project/{id}      | (**PUT**)    | pour modifier un projet selon son id (tous les champs a renseigner) |
| api/project/{id}      | (**DELETE**) | pour supprimer un projet selon son id                               |


## Les Categories

| Endpoint                  | Méthode HTTP | action                                                                  |
| ------------------------- | ------------ | ----------------------------------------------------------------------- |
| api/category              | (**GET**)    | récupère toutes les categories (tout user confondu)                     |
| api/category/{id}         | (**GET**)    | récupère une categories selon son id                                    |
| api/project/{id}/category | (**GET**)    | récupère toute les catégories d'un projet selon son id (id du projet)   |
| api/project/{id}/category | (**POST**)   | pour créer une catégorie                                                |
| api/category/{id}         | (**PUT**)    | pour modifier une catégorie selon son id (tous les champs a renseigner) |
| api/category/{id}         | (**DELETE**) | pour supprimer une catégorie selon son id                               |
