# Explorateur de fichiers – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Explorateur de fichiers
- **Ressource** : file-explorer
- **Clé / route** : racine du module
- **Type d'écran** : Vue composite
- **Icône** : Folder

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show File Explorer — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_FILES : url `admin/files?`.
- CREATE_DIR : url `admin/files/createDir`.
- ZIP_DIRECTORY : url `admin/files/zipDirectory`.
- SUPPRESS_FILE : url `admin/files/suppressFile`.
- SUPPRESS_DIRECTORY : url `admin/files/suppressDirectory`.
- UPLOAD_FILE : url `admin/files/upload`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Explorateur de fichiers.
- Libellé EN : File explorer.