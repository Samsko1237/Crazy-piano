# Comportement Normal de Decap CMS

## Pourquoi l'URL change entre `/admin` et `/admin/#` ?

C'est **complètement normal** ! Voici ce qui se passe :

### 1. **Netlify Identity et les Hash (#)**
- Netlify Identity utilise le hash (`#`) dans l'URL pour gérer l'authentification
- Quand vous vous connectez, l'URL devient `/admin/#access_token=...`
- C'est une sécurité : le token n'est jamais envoyé au serveur

### 2. **Chargement de la Configuration**
- Decap CMS charge le fichier `config.yml` depuis votre repository
- Cela peut prendre 2-5 secondes selon votre connexion
- Pendant ce temps, vous voyez "Loading configuration"

### 3. **Redirections Normales**
Les changements d'URL suivants sont normaux :
- `/admin` → `/admin/#` (initialisation Identity)
- `/admin/#` → `/admin/#access_token=...` (après connexion)
- `/admin/#access_token=...` → `/admin` (nettoyage de l'URL)

## Optimisations Appliquées

J'ai optimisé le code pour :
- ✅ Réduire les rechargements inutiles
- ✅ Afficher un indicateur de chargement
- ✅ Nettoyer automatiquement les hash après authentification
- ✅ Éviter les boucles de redirection

## Temps de Chargement Normal

- **Premier chargement** : 3-5 secondes (chargement des scripts + config)
- **Chargements suivants** : 1-2 secondes (cache du navigateur)

## Si le Chargement est Trop Long

1. **Vérifiez votre connexion internet**
2. **Videz le cache du navigateur** (Ctrl+Shift+Delete)
3. **Vérifiez que `config.yml` est accessible** : `https://votre-site.netlify.app/admin/config.yml`
4. **Vérifiez la console du navigateur** (F12) pour les erreurs

## Comportement Attendu

1. Vous arrivez sur `/admin`
2. L'URL change en `/admin/#` (normal)
3. "Loading configuration" s'affiche (2-5 secondes)
4. Si non connecté : modal de connexion s'ouvre
5. Après connexion : l'URL se nettoie et reste sur `/admin`
6. Le CMS est prêt à l'emploi

**Tout cela est normal et attendu !** 🎹

