# Configuration Netlify Identity - Guide de résolution

## Problème : "Email not confirmed" ou impossible de créer un mot de passe

### Solution étape par étape :

1. **Vérifiez la configuration Netlify Identity** :
   - Allez dans votre tableau de bord Netlify
   - Settings → Identity → Services
   - Assurez-vous que "Enable Identity" est activé
   - Vérifiez que "Git Gateway" est activé

2. **Configuration de l'email** :
   - Settings → Identity → Email
   - Vérifiez que "Enable email" est activé
   - Si vous n'avez pas configuré SMTP, utilisez "Email confirmation" : **OFF** (pour le développement)
   - OU configurez un service SMTP (SendGrid, Mailgun, etc.)

3. **Pour désactiver la confirmation d'email (recommandé pour commencer)** :
   - Settings → Identity → Email
   - Désactivez "Email confirmation required"
   - Les utilisateurs pourront créer leur mot de passe directement

4. **Si vous gardez la confirmation d'email activée** :
   - L'utilisateur recevra un email de confirmation
   - Il doit cliquer sur le lien dans l'email
   - Ensuite il pourra créer son mot de passe

5. **Inviter un utilisateur** :
   - Settings → Identity → Invite users
   - Entrez l'email
   - L'utilisateur recevra un email d'invitation
   - Quand il clique sur le lien, il arrive sur `/admin/`
   - Le script ouvre automatiquement la modal d'inscription

6. **Créer un mot de passe** :
   - Quand la modal s'ouvre avec le token d'invitation
   - L'utilisateur doit entrer son email et créer un mot de passe
   - Cliquer sur "Sign up" ou "Accept invite"

## Configuration recommandée pour commencer :

1. **Désactiver la confirmation d'email** :
   - Settings → Identity → Email
   - "Email confirmation required" : **OFF**

2. **Activer Git Gateway** :
   - Settings → Identity → Services → Git Gateway
   - Cliquez sur "Enable Git Gateway"
   - Autorisez l'accès au repository

3. **Tester l'invitation** :
   - Invitez-vous avec votre email
   - Cliquez sur le lien d'invitation
   - Vous devriez arriver sur `/admin/` avec la modal ouverte
   - Créez votre mot de passe directement

## Dépannage :

Si vous voyez toujours "Email not confirmed" :
1. Vérifiez que l'email de confirmation n'est pas dans les spams
2. Ou désactivez temporairement la confirmation d'email
3. Vérifiez que Git Gateway est bien activé
4. Videz le cache du navigateur et réessayez

## Alternative : Créer un utilisateur directement

Si l'invitation ne fonctionne pas :
1. Settings → Identity → Users
2. Cliquez sur "Add user"
3. Entrez l'email et le mot de passe
4. L'utilisateur pourra se connecter directement

