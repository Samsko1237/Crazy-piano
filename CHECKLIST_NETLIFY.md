# Checklist de Vérification Netlify

## ✅ Vérifications Essentielles pour Decap CMS

### 1. **Vérifier que config.yml est accessible**

Ouvrez dans votre navigateur :
```
https://crazy-piano.netlify.app/admin/config.yml
```

**Résultat attendu** : Le fichier YAML s'affiche en texte brut
**Si 404** : Le fichier n'est pas copié correctement lors du build

### 2. **Vérifier Netlify Identity**

Dans votre dashboard Netlify :
- [ ] **Settings → Identity** → "Enable Identity" est activé
- [ ] **Settings → Identity → Services → Git Gateway** → "Enable Git Gateway" est activé
- [ ] **Settings → Identity → Services → Git Gateway** → Le repository GitHub est autorisé

### 3. **Vérifier la Configuration du Build**

Dans **Settings → Build & deploy** :
- [ ] **Build command** : `npm run build`
- [ ] **Publish directory** : `dist`
- [ ] Le dossier `public/admin/` est bien copié dans `dist/admin/`

### 4. **Vérifier les Redirections**

Dans `netlify.toml`, vous devez avoir :
```toml
[[redirects]]
  from = "/admin"
  to = "/admin/index.html"
  status = 200
```

### 5. **Test de l'Admin**

1. Allez sur `https://crazy-piano.netlify.app/admin`
2. Vous devriez voir :
   - "Loading configuration" (2-5 secondes) ✅ Normal
   - Puis soit la connexion, soit le CMS ✅ Normal
   - L'URL peut changer entre `/admin` et `/admin/#` ✅ Normal

### 6. **Si ça ne fonctionne toujours pas**

**Vérifiez la console du navigateur (F12)** :
- Erreurs JavaScript ?
- Erreurs de chargement de fichiers ?
- Erreurs CORS ?

**Vérifiez les logs Netlify** :
- Settings → Build logs
- Y a-t-il des erreurs lors du build ?

## 🔧 Solutions aux Problèmes Courants

### Problème : "Failed to load config.yml"

**Solution** :
1. Vérifiez que `public/admin/config.yml` existe
2. Vérifiez que le fichier est dans le repository GitHub
3. Vérifiez l'URL : `https://crazy-piano.netlify.app/admin/config.yml`

### Problème : "Email not confirmed"

**Solution** :
1. Settings → Identity → Email → Désactivez "Email confirmation required" (pour tester)
2. Ou configurez un service SMTP (SendGrid, Mailgun, etc.)

### Problème : Boucle infinie de chargement

**Causes possibles** :
1. `config.yml` invalide (syntaxe YAML incorrecte)
2. Git Gateway non activé
3. Repository non autorisé dans Git Gateway

**Solution** :
1. Validez votre `config.yml` avec un validateur YAML en ligne
2. Vérifiez que Git Gateway est activé
3. Réautorisez le repository dans Git Gateway

## 📝 Notes Importantes

- **git-gateway** est correct pour Netlify (pas besoin de `github` backend)
- **public/images** est correct pour Vite/Netlify (Vite copie `public/` dans `dist/`)
- Les changements d'URL entre `/admin` et `/admin/#` sont normaux (gestion de l'authentification)

