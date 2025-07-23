<p align="center">
  <img src="https://hkiam.github.io/imposter-party/pwa-512x512.png" alt="Imposter Party Logo" width="512" />
</p>

# 🕵️‍♂️ Imposter Party – Das Partyspiel als PWA

**Imposter Party** ist ein unterhaltsames Gruppenspiel, das du direkt im Browser spielen kannst – auch **offline als installierbare PWA**.

Ziel des Spiels: Alle sehen ein geheimes Wort – außer dem Imposter. Der muss bluffen, erraten und enttarnt werden!

---

## 🎮 Features

- ✅ Spielerverwaltung mit Bildern & Icons
- ✅ Kategorien-Editor mit Stichwörtern und Hinweisen
- ✅ Automatische Imposter-Zuweisung & Wortverteilung
- ✅ Spielrunden mit Timer, Pausenfunktion und Notstop
- ✅ Auswertung: Wer hat gewonnen? Wer war der Imposter?
- ✅ Highscore-System (lokal gespeichert)
- ✅ PWA: Installierbar & offline spielbar
- ✅ Deployment via GitHub Pages

---

## 📦 Installation (lokal)

```bash
git clone https://github.com/hkiam/imposter-party.git
cd imposter-party
npm install
npm run dev
```

Die App läuft dann unter [http://localhost:5173](http://localhost:5173)

---

## 🔧 Lokale Entwicklung & Build

### ▶️ Entwicklung starten

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Entwicklungsserver starten (http://localhost:5173)
```

### ⚙️ PWA aktivieren (nur einmal nötig)

```bash
npm install --save-dev vite-plugin-pwa
```

> Stelle sicher, dass `vite.config.js` korrekt konfiguriert ist (siehe unten).

### 🏗 Produktion bauen & lokal testen

```bash
npm run build         # Produktionsbuild erzeugen (im dist/ Ordner)
npx serve dist        # Lokal testen (http://localhost:3000)
```

---

## 🚀 Deployment auf GitHub Pages

### Vite-Konfiguration:

In `vite.config.js`:

```js
base: "/imposter-party/", // Passe ggf. an deinen Repo-Namen an
```

### Build & Bereitstellung:

```bash
npm run build
rm -r docs 
cp -r dist docs
git commit -m "Deploy to GitHub Pages"
git push
```

Dann unter **Settings > Pages** in GitHub:

- Source: `main`
- Folder: `docs/`
- Nach wenigen Minuten ist dein Spiel online unter:

```
https://hkiam.github.io/imposter-party/
```

---

## 🛠 Entwicklung

**Tech-Stack:**

- ⚛️ React mit Hooks & Context
- ⚡️ Vite als Build-Tool
- 💾 Lokale Speicherung mit `localStorage`
- 📲 PWA-Unterstützung via `vite-plugin-pwa`
- 🎨 Styling mit TailwindCSS

---

## 🧠 Spielablauf

1. **Spieler erstellen** → mit Namen & Bild
2. **Kategorien auswählen**
3. **Wort anzeigen lassen** → Spieler für Spieler
4. **Imposter bekommt Hinweis statt Wort**
5. **Diskussionsrunde mit Timer**
6. **Ergebnisphase**: Wer war's? Konnten sie das Wort erraten?
7. **Highscore aktualisiert sich automatisch**

---

## 📱 PWA-Features

- **Installierbar** auf Homescreen (Android/iOS/Desktop)
- **Offlinefähig** dank Service Worker
- Manifest & Icons sind vollständig eingebunden

---

## 🧾 Lizenz

MIT – Nutze es, ändere es, verbessere es.  
Wenn du Features einreichst, freuen sich alle!

---

### 📬 Fragen oder Feedback?

Erstelle ein [Issue](https://github.com/hkiam/imposter-party/issues) oder kontaktiere mich direkt.
