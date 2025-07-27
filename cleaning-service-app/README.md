# Top Notch Reinigungsservice

Eine moderne React-Website für einen Reinigungsservice.

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm start
```

Die App läuft dann unter [http://localhost:3000](http://localhost:3000).

## Deployment auf GitHub Pages

### Voraussetzungen

1. Das Repository muss auf GitHub gehostet werden
2. Das Repository muss öffentlich sein oder du musst GitHub Pro haben

### Deployment-Schritte

1. **Repository auf GitHub erstellen:**

   - Erstelle ein neues Repository auf GitHub mit dem Namen `topnotchreinigungsservice`
   - Stelle sicher, dass es öffentlich ist

2. **Code zu GitHub pushen:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/schnitzellover84/topnotchreinigungsservice.git
   git push -u origin main
   ```

3. **Deployment ausführen:**

   ```bash
   npm run deploy
   ```

4. **GitHub Pages aktivieren:**
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf "Settings"
   - Scrolle runter zu "Pages"
   - Unter "Source" wähle "Deploy from a branch"
   - Wähle den Branch "gh-pages" aus
   - Klicke "Save"

### Nach dem Deployment

Die Website wird unter folgender URL verfügbar sein:
**https://schnitzellover84.github.io/topnotchreinigungsservice**

### Wichtige Hinweise

- Nach jedem `npm run deploy` wird die Website automatisch aktualisiert
- Es kann einige Minuten dauern, bis die Änderungen sichtbar sind
- Stelle sicher, dass alle Pfade in der App relativ sind (das ist bereits korrekt konfiguriert)

## Technologien

- React 19
- TypeScript
- Bootstrap 5
- Framer Motion
- React Router DOM
- React Helmet
