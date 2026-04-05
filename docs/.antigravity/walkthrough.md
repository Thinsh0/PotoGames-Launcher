# Walkthrough - Rebranding PotoGames Launcher & Authentification Offline

Le launcher a été entièrement rebrandé et le système d'authentification modernisé pour inclure un mode Hors Ligne (Offline) et supprimer les dépendances obsolètes à Mojang.

## 🛠️ Modifications Principales

### 1. Rebranding & Configuration
- **Package Metadata** : Le projet a été renommé en `potogames-launcher` avec les URLs de dépôt et de support mises à jour vers l'organisation PotoGames.
- **Répertoire de Données** : Le dossier local est passé de `.helioslauncher` à `.potogames-launcher`.
- **Customisation** : Les textes d'accueil, les liens Discord/GitHub et les titres ont été mis à jour dans `app/assets/lang/_custom.toml`.

### 2. Authentification Hors Ligne
- **Logique Métier** : Ajout de `addOfflineAccount` dans `AuthManager` et `ConfigManager`.
- **Génération d'UUID** : Les comptes hors ligne utilisent un UUID déterministe basé sur le nom d'utilisateur (MD5), compatible avec le format Minecraft Offline.
- **Validation** : Le Launcher ignore désormais la validation côté serveur pour les types de comptes 'offline'.

### 3. Interface Utilisateur (UI/UX)
- **Options de Connexion** : Suppression du bouton Mojang et ajout d'un bouton "Login with Offline Account".
- **Formulaire de Connexion** : Masquage dynamique du champ mot de passe et des liens de récupération lorsque le mode hors ligne est sélectionné.
- **Paramètres** : Nettoyage complet de la gestion des comptes Mojang et ajout de la liste des comptes Offline.
- **Paramètres** : Ajout du stockage des comptes Offline dans `authenticationDatabase`.
- **Dashboard** : Retrait du widget de statut des serveurs Mojang (obsolète).

### 4. Correctifs Visuels (Fenêtre)
- **Angles de Fenêtre** : Suppression de l'effet "carré derrière l'arrondi" par l'ajout de `background: transparent` sur l'élément `html`.
- **Accélération Matérielle** : Réactivation de l'accélération GPU dans `index.js`. Cela corrige les bugs de rendu de la transparence et permet le bon fonctionnement des effets de flou (`backdrop-filter`) sur Windows.

## 🧪 Vérification

- [x] **Logique d'Auth** : Validation de la création de compte sans mot de passe.
- [x] **Stockage** : Vérification de la persistance dans `authenticationDatabase`.
- [x] **UI** : Toggle dynamique du mot de passe testé via les hooks `loginOfflineMode`.

## 📌 Note Importante
Le changement de répertoire de données (`.potogames-launcher`) entraîne une réinitialisation de la session utilisateur locale lors de la première utilisation de la nouvelle version.

**Is this the end of the session?**
