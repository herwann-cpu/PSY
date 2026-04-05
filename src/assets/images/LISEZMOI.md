Ce dossier est prêt à recevoir vos images.

**Comment utiliser vos images dans le site ?**

Puisque vous utilisez le fichier `content.ts` pour gérer les liens de vos images sous forme de texte, il est **fortement recommandé** de placer vos images dans le dossier `/public/images/` (que je viens également de créer) plutôt qu'ici. 

Si vous placez une image nommée `ma-photo.jpg` dans `/public/images/`, vous pourrez simplement écrire `"/images/ma-photo.jpg"` dans votre fichier `content.ts`.

Si vous souhaitez tout de même les mettre ici (`/src/assets/images/`), vous devrez les importer tout en haut du fichier `content.ts` comme ceci :
`import maPhoto from './assets/images/ma-photo.jpg';`
Puis utiliser la variable `maPhoto` (sans guillemets) dans le contenu.
