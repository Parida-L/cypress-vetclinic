# Introduction à Cypress

Cypress est un outil open-source basé sur JavaScript, conçu pour l'automatisation des tests d'applications web. Il est reconnu pour :

- **Rapidité** : Exécution rapide des tests.
- **Simplicité** : Installation et configuration faciles.
- **Flexibilité** : Tests end-to-end, de composants et d'API.

---

## Installation

### Prérequis

- **Node.js** : Installer Node.js pour utiliser npm.

### Étapes

```bash
# Installation de Cypress
npm install cypress --save-dev

# Vérification de la version
npx cypress --version

# Ouverture de l'interface Cypress
npx cypress open
```

---

## Structure des Dossiers Cypress

- **`fixtures/`** : Fichiers de données (JSON, CSV, etc.).
- **`e2e/`** : Contient les fichiers de tests (`*.cy.js`).
- **`support/`** : Fonctions réutilisables.
- **`cypress.config.js`** : Fichier de configuration (par ex. : `baseURL`).

---

## Assertions

Les assertions sont essentielles pour valider les résultats attendus dans vos tests.

### Assertions Explicites

- **Vérifier un texte** :

  ```javascript
  cy.get('selector').should('contain.text', 'expected');
  ```

- **Vérifier la visibilité** :

  ```javascript
  cy.get('selector').should('be.visible');
  ```

- **Vérifier l'existence** :

  ```javascript
  cy.get('selector').should('exist');
  ```

### Assertions Implicites

- **Contient un texte spécifique** :

  ```javascript
  cy.contains('text');
  ```

- **Récupérer et vérifier un texte** :

  ```javascript
  cy.get('selector').invoke('text').should('eq', 'expected');
  ```

### Fonctionnalités Avancées

- **Valider une propriété** :

  ```javascript
  cy.wrap(obj).its('property').should('eq', 'value');
  ```

- **Chaînage avec asynchronisme** :

  ```javascript
  cy.then((element) => {
    // Code de vérification
  });
  ```

---

## Exemple de Test

```javascript
describe('Test d\'exemple', () => {
  it('Vérifie le titre de la page', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain.text', 'Bienvenue');
  });
});
```

---

## Bonnes Pratiques

- **Favoriser les assertions explicites (`should`)** pour améliorer la lisibilité des tests.
- **Utiliser des fixtures** pour gérer les données de test.
- **Tester les éléments dynamiques** avec des commandes comme `cy.wrap()` ou `cy.intercept()`.

---

## Ressources

- [Documentation Cypress](https://docs.cypress.io/)
- [Automatisez des tests fonctionnels - OpenClassrooms](https://openclassrooms.com/fr/courses/8157231-automatisez-des-tests-fonctionnels-pour-le-web-avec-cypress)

---
