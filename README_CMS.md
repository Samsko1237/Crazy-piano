# Configuration Decap CMS (Netlify CMS)

## Installation

Decap CMS est déjà configuré dans ce projet. Il ne nécessite pas d'installation de packages npm car il fonctionne via CDN.

## Configuration Netlify

Pour activer le CMS sur Netlify, vous devez :

1. **Activer Netlify Identity** :
   - Allez dans votre tableau de bord Netlify
   - Settings → Identity → Enable Identity
   - Activez "Enable Git Gateway"

2. **Configurer Git Gateway** :
   - Settings → Identity → Services → Git Gateway
   - Cliquez sur "Enable Git Gateway"
   - Autorisez Netlify à accéder à votre repository GitHub/GitLab

3. **Créer un utilisateur** :
   - Settings → Identity → Invite users
   - Invitez-vous avec votre email
   - Vous recevrez un email d'invitation

## Accès au CMS

Une fois déployé sur Netlify, accédez à :
- `https://votre-site.netlify.app/admin`

## Collections disponibles

Le CMS est configuré avec les collections suivantes :

- **Pages** : Pages générales du site
- **Accueil** : Contenu de la page d'accueil (hero section)
- **Services** : Services proposés
- **Pianos** : Catalogue de pianos (neufs/occasion)
- **Actualités** : Blog/actualités

## Structure des fichiers

Les fichiers de contenu sont stockés dans :
- `content/pages/` - Pages générales
- `content/accueil/` - Contenu page d'accueil
- `content/services/` - Services
- `content/pianos/` - Catalogue pianos
- `content/actualites/` - Actualités

Les images uploadées via le CMS sont stockées dans :
- `public/images/`

## Développement local

Pour tester le CMS en local (avec authentification simulée) :

1. Installez netlify-cli : `npm install -g netlify-cli`
2. Lancez : `netlify dev`
3. Accédez à : `http://localhost:8888/admin`

## Documentation

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)


