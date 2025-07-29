import React, { useState, useEffect } from "react";
import GameSetupScreen from "./screens/GameSetupScreen";
import RevealWordScreen from "./screens/RevealWordScreen";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameEndScreen from "./screens/GameEndScreen";
import CategoryManagerScreen from "./screens/CategoryManagerScreen";

export default function App() {
    const [phase, setPhase] = useState("setup");
    const [players, setPlayers] = useState([]);
    const [settings, setSettings] = useState({});
    const [gameState, setGameState] = useState(null);
    const [highscore, setHighscore] = useState(() => {
        const saved = localStorage.getItem("imposter_highscore");
        return saved ? JSON.parse(saved) : {};
    });
    const [guesses, setGuesses] = useState({});
    const [ImposterAnswer, setImposterAnswer] = useState("");
    const [evaluationDone, setEvaluationDone] = useState(false);
    const [resultText, setResultText] = useState("");

    const [categories, setCategories] = useState(() => {
        const saved = localStorage.getItem("imposter_categories");
        if (saved) return JSON.parse(saved);

        const defaultCategories = [
            {
                "name": "Jugendworte",
                "active": true,
                "words": [
                    { "word": "cringe", "hint": "Gefühl" },
                    { "word": "sus", "hint": "Auffällig" },
                    { "word": "no front", "hint": "Nett sein" },
                    { "word": "slay", "hint": "Korrekt" },
                    { "word": "goofy", "hint": "Disney" },
                    { "word": "lit", "hint": "Stimmung" },
                    { "word": "bro", "hint": "Beziehung" },
                    { "word": "sheesh", "hint": "Ausruf" },
                    { "word": "vibe", "hint": "Atmosphäre" },
                    { "word": "drip", "hint": "Klamotten" },
                    { "word": "based", "hint": "Einstellung" },
                    { "word": "rizz", "hint": "Anziehung" },
                    { "word": "NPC", "hint": "Verhalten" },
                    { "word": "mid", "hint": "Qualität" },
                    { "word": "YOLO", "hint": "Motto" },
                    { "word": "wild", "hint": "Überraschend" },
                    { "word": "lowkey", "hint": "Zurückhaltend" },
                    { "word": "highkey", "hint": "Offensichtlich" },
                    { "word": "bussin", "hint": "Lecker" },
                    { "word": "savage", "hint": "Frech" },
                    { "word": "skrrt", "hint": "Sound" },
                    { "word": "flexen", "hint": "Angeben" },
                    { "word": "L", "hint": "Verlust" },
                    { "word": "W", "hint": "Gewinn" },
                    { "word": "tea", "hint": "Klatsch" },
                    { "word": "ghosten", "hint": "Kontakt" },
                    { "word": "simp", "hint": "Übertrieben" },
                    { "word": "sus", "hint": "Verdächtig" },
                    { "word": "grind", "hint": "Arbeiten" },
                    { "word": "AF", "hint": "Verstärkung" },
                    { "word": "on fleek", "hint": "Perfekt" },
                    { "word": "bruh", "hint": "Reaktion" },
                    { "word": "snatched", "hint": "Aussehen" },
                    { "word": "bet", "hint": "Zustimmung" },
                    { "word": "cap", "hint": "Lüge" },
                    { "word": "no cap", "hint": "Ehrlich" },
                    { "word": "mood", "hint": "Gefühl" },
                    { "word": "deadass", "hint": "Ernst" },
                    { "word": "main character", "hint": "Zentrum" },
                    { "word": "delulu", "hint": "Fantasie" },
                    { "word": "touch grass", "hint": "Realität" },
                    { "word": "suspect", "hint": "Zweifel" },
                    { "word": "iconic", "hint": "Unvergesslich" },
                    { "word": "valid", "hint": "Akzeptiert" },
                    { "word": "ratio", "hint": "Antwort" },
                    { "word": "fr", "hint": "Zustimmung" },
                    { "word": "irl", "hint": "Echt" },
                    { "word": "fomo", "hint": "Verpassen" },
                    { "word": "stan", "hint": "Fan" },
                    { "word": "ick", "hint": "Abneigung" },
                    { "word": "glow up", "hint": "Veränderung" }
                ]
            },
            {
                "name": "Tiere & Natur",
                "active": true,
                "words": [
                    { "word": "Löwe", "hint": "Majestätisch" },
                    { "word": "Tiger", "hint": "Streifen" },
                    { "word": "Elefant", "hint": "Groß" },
                    { "word": "Giraffe", "hint": "Hals" },
                    { "word": "Pinguin", "hint": "Kalt" },
                    { "word": "Koala", "hint": "Australien" },
                    { "word": "Känguru", "hint": "Beutel" },
                    { "word": "Zebra", "hint": "Schwarzweiß" },
                    { "word": "Krokodil", "hint": "Reptil" },
                    { "word": "Faultier", "hint": "Langsam" },
                    { "word": "Eichhörnchen", "hint": "Nuss" },
                    { "word": "Wolf", "hint": "Rudel" },
                    { "word": "Fuchs", "hint": "Schlau" },
                    { "word": "Biber", "hint": "Damm" },
                    { "word": "Delfin", "hint": "Intelligent" },
                    { "word": "Wal", "hint": "Riesig" },
                    { "word": "Hai", "hint": "Zähne" },
                    { "word": "Tintenfisch", "hint": "Arme" },
                    { "word": "Qualle", "hint": "Glasig" },
                    { "word": "Pfau", "hint": "Farben" },
                    { "word": "Adler", "hint": "Flug" },
                    { "word": "Eule", "hint": "Nacht" },
                    { "word": "Taube", "hint": "Frieden" },
                    { "word": "Schmetterling", "hint": "Leicht" },
                    { "word": "Biene", "hint": "Bestäuber" },
                    { "word": "Ameise", "hint": "Kolonie" },
                    { "word": "Grashüpfer", "hint": "Springen" },
                    { "word": "Marienkäfer", "hint": "Punkte" },
                    { "word": "Schnecke", "hint": "Haus" },
                    { "word": "Chamäleon", "hint": "Farbe" },
                    { "word": "Papagei", "hint": "Sprache" },
                    { "word": "Kakadu", "hint": "Frisur" },
                    { "word": "Luchs", "hint": "Pinselohren" },
                    { "word": "Waschbär", "hint": "Maske" },
                    { "word": "Eisbär", "hint": "Nordpol" },
                    { "word": "Seestern", "hint": "Meer" },
                    { "word": "Koralle", "hint": "Riff" },
                    { "word": "Bambus", "hint": "Pflanze" },
                    { "word": "Tanne", "hint": "Nadel" },
                    { "word": "Ahorn", "hint": "Sirup" },
                    { "word": "Eiche", "hint": "Stark" },
                    { "word": "Mohnblume", "hint": "Rot" },
                    { "word": "Löwenzahn", "hint": "Pusteblume" },
                    { "word": "Kaktus", "hint": "Stachelig" },
                    { "word": "Pilz", "hint": "Wald" },
                    { "word": "Moos", "hint": "Weich" },
                    { "word": "Farn", "hint": "Urzeitlich" },
                    { "word": "Gletscher", "hint": "Eis" },
                    { "word": "Vulkan", "hint": "Lava" },
                    { "word": "Regenbogen", "hint": "Farben" }
                ]
            },
            {
                "name": "Sport und Freizeit",
                "active": true,
                "words": [
                    { "word": "Fußball", "hint": "Tor" },
                    { "word": "Basketball", "hint": "Korb" },
                    { "word": "Volleyball", "hint": "Netz" },
                    { "word": "Tennis", "hint": "Aufschlag" },
                    { "word": "Tischtennis", "hint": "Platte" },
                    { "word": "Badminton", "hint": "Federball" },
                    { "word": "Schwimmen", "hint": "Wasser" },
                    { "word": "Joggen", "hint": "Ausdauer" },
                    { "word": "Radfahren", "hint": "Zweirad" },
                    { "word": "Skaten", "hint": "Rollen" },
                    { "word": "Reiten", "hint": "Pferd" },
                    { "word": "Klettern", "hint": "Höhe" },
                    { "word": "Yoga", "hint": "Dehnung" },
                    { "word": "Pilates", "hint": "Körpermitte" },
                    { "word": "Boxen", "hint": "Kampf" },
                    { "word": "Judo", "hint": "Wurf" },
                    { "word": "Karate", "hint": "Schlag" },
                    { "word": "Fechten", "hint": "Klinge" },
                    { "word": "Golf", "hint": "Loch" },
                    { "word": "Bowling", "hint": "Kegel" },
                    { "word": "Billard", "hint": "Kugeln" },
                    { "word": "Darts", "hint": "Ziel" },
                    { "word": "Tanzen", "hint": "Musik" },
                    { "word": "Zumba", "hint": "Fitness" },
                    { "word": "Skifahren", "hint": "Schnee" },
                    { "word": "Snowboarden", "hint": "Brett" },
                    { "word": "Schlittschuhlaufen", "hint": "Eis" },
                    { "word": "Surfen", "hint": "Welle" },
                    { "word": "Wandern", "hint": "Natur" },
                    { "word": "Angeln", "hint": "Haken" },
                    { "word": "Campen", "hint": "Zelt" },
                    { "word": "Kanu", "hint": "Paddel" },
                    { "word": "Segeln", "hint": "Wind" },
                    { "word": "Tauchen", "hint": "Tief" },
                    { "word": "Parkour", "hint": "Hindernis" },
                    { "word": "Slackline", "hint": "Balance" },
                    { "word": "Frisbee", "hint": "Scheibe" },
                    { "word": "Schach", "hint": "Brett" },
                    { "word": "Kartenspiel", "hint": "Blatt" },
                    { "word": "Videospiel", "hint": "Konsole" },
                    { "word": "Lesen", "hint": "Buch" },
                    { "word": "Malen", "hint": "Farbe" },
                    { "word": "Gärtnern", "hint": "Pflanzen" },
                    { "word": "Kochen", "hint": "Topf" },
                    { "word": "Backen", "hint": "Ofen" },
                    { "word": "Fotografieren", "hint": "Kamera" },
                    { "word": "Musizieren", "hint": "Instrument" },
                    { "word": "Karaoke", "hint": "Singen" },
                    { "word": "Theater", "hint": "Bühne" }
                ]
            },
            {
                "name": "Wissen und Schule",
                "active": true,
                "words": [
                    { "word": "Mathematik", "hint": "Zahlen" },
                    { "word": "Deutsch", "hint": "Sprache" },
                    { "word": "Englisch", "hint": "Fremdsprache" },
                    { "word": "Biologie", "hint": "Leben" },
                    { "word": "Chemie", "hint": "Reaktion" },
                    { "word": "Physik", "hint": "Kraft" },
                    { "word": "Geschichte", "hint": "Vergangenheit" },
                    { "word": "Geografie", "hint": "Karte" },
                    { "word": "Politik", "hint": "Staat" },
                    { "word": "Informatik", "hint": "Computer" },
                    { "word": "Kunst", "hint": "Malen" },
                    { "word": "Musik", "hint": "Töne" },
                    { "word": "Sport", "hint": "Bewegung" },
                    { "word": "Religion", "hint": "Glaube" },
                    { "word": "Ethik", "hint": "Moral" },
                    { "word": "Lehrer", "hint": "Person" },
                    { "word": "Schüler", "hint": "Lernen" },
                    { "word": "Klasse", "hint": "Raum" },
                    { "word": "Tafel", "hint": "Schreiben" },
                    { "word": "Heft", "hint": "Notizen" },
                    { "word": "Buch", "hint": "Lesen" },
                    { "word": "Schulranzen", "hint": "Tragen" },
                    { "word": "Lineal", "hint": "Messen" },
                    { "word": "Bleistift", "hint": "Schreiben" },
                    { "word": "Füller", "hint": "Tinte" },
                    { "word": "Radiergummi", "hint": "Korrigieren" },
                    { "word": "Zirkel", "hint": "Kreis" },
                    { "word": "Taschenrechner", "hint": "Rechnen" },
                    { "word": "Hausaufgabe", "hint": "Zuhause" },
                    { "word": "Klassenarbeit", "hint": "Test" },
                    { "word": "Zeugnis", "hint": "Bewertung" },
                    { "word": "Pause", "hint": "Zwischenzeit" },
                    { "word": "Schulhof", "hint": "Außen" },
                    { "word": "Lernen", "hint": "Wissen" },
                    { "word": "Lesen", "hint": "Text" },
                    { "word": "Schreiben", "hint": "Stift" },
                    { "word": "Rechnen", "hint": "Aufgabe" },
                    { "word": "Experiment", "hint": "Versuch" },
                    { "word": "Projekt", "hint": "Gruppe" },
                    { "word": "Aufsatz", "hint": "Textform" },
                    { "word": "Vokabel", "hint": "Wortschatz" },
                    { "word": "Tafelbild", "hint": "Visualisierung" },
                    { "word": "Tageslichtprojektor", "hint": "Oldschool" },
                    { "word": "Whiteboard", "hint": "Modern" },
                    { "word": "Präsentation", "hint": "Vortrag" },
                    { "word": "Bibliothek", "hint": "Bücher" },
                    { "word": "Pausebrot", "hint": "Snack" },
                    { "word": "Abitur", "hint": "Abschluss" },
                    { "word": "Note", "hint": "Bewertung" }
                ]
            },
            {
                "name": "Feste & Feiern",
                "active": true,
                "words": [
                    { "word": "Geburtstag", "hint": "Kerzen" },
                    { "word": "Weihnachten", "hint": "Geschenke" },
                    { "word": "Ostern", "hint": "Eier" },
                    { "word": "Silvester", "hint": "Feuerwerk" },
                    { "word": "Karneval", "hint": "Kostüm" },
                    { "word": "Halloween", "hint": "Gruselig" },
                    { "word": "Hochzeit", "hint": "Ringe" },
                    { "word": "Taufe", "hint": "Wasser" },
                    { "word": "Konfirmation", "hint": "Kirche" },
                    { "word": "Jubiläum", "hint": "Jahre" },
                    { "word": "Polterabend", "hint": "Scherben" },
                    { "word": "Weihnachtsmarkt", "hint": "Glühwein" },
                    { "word": "Nikolaus", "hint": "Stiefel" },
                    { "word": "Valentinstag", "hint": "Herz" },
                    { "word": "Muttertag", "hint": "Blumen" },
                    { "word": "Vatertag", "hint": "Bollerwagen" },
                    { "word": "Maifeiertag", "hint": "Tanz" },
                    { "word": "Erntedankfest", "hint": "Feld" },
                    { "word": "Laternenfest", "hint": "Licht" },
                    { "word": "Weihnachtsbaum", "hint": "Schmuck" },
                    { "word": "Advent", "hint": "Kerzen" },
                    { "word": "Neujahr", "hint": "Beginn" },
                    { "word": "Abschiedsfeier", "hint": "Lebewohl" },
                    { "word": "Einschulung", "hint": "Tüte" },
                    { "word": "Kindergeburtstag", "hint": "Spiele" },
                    { "word": "Party", "hint": "Musik" },
                    { "word": "Tanzfläche", "hint": "Bewegung" },
                    { "word": "DJ", "hint": "Musik" },
                    { "word": "Geschenk", "hint": "Überraschung" },
                    { "word": "Luftballon", "hint": "Helium" },
                    { "word": "Girlande", "hint": "Deko" },
                    { "word": "Konfetti", "hint": "Bunt" },
                    { "word": "Torte", "hint": "Süß" },
                    { "word": "Kerze", "hint": "Licht" },
                    { "word": "Sekt", "hint": "Anstoßen" },
                    { "word": "Toast", "hint": "Wunsch" },
                    { "word": "Buffet", "hint": "Auswahl" },
                    { "word": "Picknick", "hint": "Decke" },
                    { "word": "Feuerwerk", "hint": "Knall" },
                    { "word": "Hüpfburg", "hint": "Springen" },
                    { "word": "Laterne", "hint": "Leuchten" },
                    { "word": "Weihnachtsmann", "hint": "Bart" },
                    { "word": "Engel", "hint": "Flügel" },
                    { "word": "Krippe", "hint": "Stall" },
                    { "word": "Plätzchen", "hint": "Backen" },
                    { "word": "Wichteln", "hint": "Zufall" },
                    { "word": "Maskenball", "hint": "Verkleidung" },
                    { "word": "Braut", "hint": "Kleid" },
                    { "word": "Trauung", "hint": "Versprechen" }
                ]
            },
            {
                "name": "Deutsche Begriffe",
                "active": true,
                "words": [
                    { "word": "Feierabend", "hint": "Arbeit" },
                    { "word": "Fernweh", "hint": "Sehnsucht" },
                    { "word": "Schadenfreude", "hint": "Gefühl" },
                    { "word": "Kopfkino", "hint": "Vorstellung" },
                    { "word": "Zweisamkeit", "hint": "Beziehung" },
                    { "word": "Wanderlust", "hint": "Bewegung" },
                    { "word": "Heimat", "hint": "Zugehörigkeit" },
                    { "word": "Kummerspeck", "hint": "Essen" },
                    { "word": "Torschlusspanik", "hint": "Zeitdruck" },
                    { "word": "Weltschmerz", "hint": "Melancholie" },
                    { "word": "Fingerspitzengefühl", "hint": "Feinheit" },
                    { "word": "Ohrwurm", "hint": "Musik" },
                    { "word": "Treppenwitz", "hint": "Zu spät" },
                    { "word": "Schnapsidee", "hint": "Spontan" },
                    { "word": "Innerer Schweinehund", "hint": "Hindernis" },
                    { "word": "Doppelgänger", "hint": "Ähnlichkeit" },
                    { "word": "Kindergarten", "hint": "Früh" },
                    { "word": "Besserwisser", "hint": "Nervig" },
                    { "word": "Erklärbär", "hint": "Redselig" },
                    { "word": "Fußabtreter", "hint": "Eingang" },
                    { "word": "Zeitgeist", "hint": "Epoche" },
                    { "word": "Fahrvergnügen", "hint": "Auto" },
                    { "word": "Bratwurst", "hint": "Grill" },
                    { "word": "Gemütlichkeit", "hint": "Wohlfühlen" },
                    { "word": "Quatsch", "hint": "Unsinn" },
                    { "word": "Waldeinsamkeit", "hint": "Natur" },
                    { "word": "Hausmeister", "hint": "Gebäude" },
                    { "word": "Schlafmütze", "hint": "Träge" },
                    { "word": "Toilettenpapier", "hint": "Bad" },
                    { "word": "Handschuh", "hint": "Winter" },
                    { "word": "Buchdruck", "hint": "Erfindung" },
                    { "word": "Autobahn", "hint": "Fahren" },
                    { "word": "Dachschaden", "hint": "Spinnerei" },
                    { "word": "Kaffeeklatsch", "hint": "Plauderei" },
                    { "word": "Mahlzeit", "hint": "Gruß" },
                    { "word": "Luftschloss", "hint": "Illusion" },
                    { "word": "Vorsprung", "hint": "Vorteil" },
                    { "word": "Zugzwang", "hint": "Schach" },
                    { "word": "Schlafwagen", "hint": "Reise" },
                    { "word": "Stammtisch", "hint": "Runde" },
                    { "word": "Handwerker", "hint": "Beruf" },
                    { "word": "Meister", "hint": "Titel" },
                    { "word": "Muttersprache", "hint": "Herkunft" },
                    { "word": "Lügenpresse", "hint": "Medienkritik" },
                    { "word": "Bahnstreik", "hint": "Verzögerung" },
                    { "word": "Angst", "hint": "Gefühl" },
                    { "word": "Bauernregel", "hint": "Spruch" },
                    { "word": "Aktenordner", "hint": "Büro" },
                    { "word": "Sitzfleisch", "hint": "Ausdauer" }
                ]
            },
            {
                "name": "Stars und Promis",
                "active": true,
                "words": [
                    { "word": "Taylor Swift", "hint": "Pop" },
                    { "word": "Harry Styles", "hint": "Boyband" },
                    { "word": "Shirin David", "hint": "Deutschrap" },
                    { "word": "Helene Fischer", "hint": "Schlager" },
                    { "word": "Ariana Grande", "hint": "Stimme" },
                    { "word": "Kim Kardashian", "hint": "Reality" },
                    { "word": "Kanye West", "hint": "Skandal" },
                    { "word": "Justin Bieber", "hint": "Teenstar" },
                    { "word": "Billie Eilish", "hint": "Einzigartig" },
                    { "word": "Ed Sheeran", "hint": "Gitarre" },
                    { "word": "Dwayne Johnson", "hint": "Muskeln" },
                    { "word": "Zendaya", "hint": "Euphoria" },
                    { "word": "Leonardo DiCaprio", "hint": "Oscar" },
                    { "word": "Brad Pitt", "hint": "Charme" },
                    { "word": "Emma Watson", "hint": "Magie" },
                    { "word": "Tom Holland", "hint": "Spinne" },
                    { "word": "Selena Gomez", "hint": "Disney" },
                    { "word": "Rihanna", "hint": "Fenty" },
                    { "word": "Drake", "hint": "Toronto" },
                    { "word": "Beyoncé", "hint": "Queen" },
                    { "word": "Miley Cyrus", "hint": "Verwandlung" },
                    { "word": "Kylie Jenner", "hint": "Kosmetik" },
                    { "word": "Cristiano Ronaldo", "hint": "Tor" },
                    { "word": "Lionel Messi", "hint": "Argentinien" },
                    { "word": "Kylian Mbappé", "hint": "Tempo" },
                    { "word": "Neymar", "hint": "Tricks" },
                    { "word": "Lewis Hamilton", "hint": "Formel" },
                    { "word": "Tom Cruise", "hint": "Action" },
                    { "word": "Keanu Reeves", "hint": "Matrix" },
                    { "word": "Pedro Pascal", "hint": "Serie" },
                    { "word": "Joko Winterscheidt", "hint": "TV" },
                    { "word": "Klaas Heufer-Umlauf", "hint": "Late Night" },
                    { "word": "Palina Rojinski", "hint": "Moderatorin" },
                    { "word": "Bibi Claßen", "hint": "Influencerin" },
                    { "word": "Julien Bam", "hint": "YouTube" },
                    { "word": "Rezo", "hint": "Blau" },
                    { "word": "Lisa & Lena", "hint": "Zwillinge" },
                    { "word": "Pamela Reif", "hint": "Fitness" },
                    { "word": "MontanaBlack", "hint": "Streamer" },
                    { "word": "Gzuz", "hint": "187" },
                    { "word": "Apache 207", "hint": "Sonnenbrille" },
                    { "word": "Capital Bra", "hint": "Capi" },
                    { "word": "Loredana", "hint": "Rapperin" },
                    { "word": "Bushido", "hint": "Skandal" },
                    { "word": "Mark Forster", "hint": "Mütze" },
                    { "word": "Peter Maffay", "hint": "Rock" },
                    { "word": "Andrea Berg", "hint": "Bühne" },
                    { "word": "Stefan Raab", "hint": "TV Total" },
                    { "word": "Elton", "hint": "Assistent" }
                ]
            },
            {
                "name": "Internet & Spaß",
                "active": true,
                "words": [
                    { "word": "Meme", "hint": "Bild" },
                    { "word": "GIF", "hint": "Loop" },
                    { "word": "Emoji", "hint": "Symbol" },
                    { "word": "Filter", "hint": "Verzerrt" },
                    { "word": "Reel", "hint": "Kurz" },
                    { "word": "TikTok", "hint": "Trend" },
                    { "word": "YouTube", "hint": "Video" },
                    { "word": "Twitch", "hint": "Live" },
                    { "word": "Stream", "hint": "Echtzeit" },
                    { "word": "Fail", "hint": "Schief" },
                    { "word": "Cat Content", "hint": "Flausch" },
                    { "word": "Cringe", "hint": "Fremdscham" },
                    { "word": "Lifehack", "hint": "Trick" },
                    { "word": "Challenge", "hint": "Mutprobe" },
                    { "word": "Viral", "hint": "Schnell" },
                    { "word": "Kommentar", "hint": "Antwort" },
                    { "word": "Screenshot", "hint": "Beweis" },
                    { "word": "Clickbait", "hint": "Locken" },
                    { "word": "Algorithmus", "hint": "Sortieren" },
                    { "word": "Feed", "hint": "Anzeigen" },
                    { "word": "Follower", "hint": "Publikum" },
                    { "word": "Like", "hint": "Zustimmung" },
                    { "word": "Dislike", "hint": "Ablehnung" },
                    { "word": "Hashtag", "hint": "Thema" },
                    { "word": "Story", "hint": "24h" },
                    { "word": "Influencer", "hint": "Reichweite" },
                    { "word": "Boop", "hint": "Nase" },
                    { "word": "UwU", "hint": "Süß" },
                    { "word": "Lurk", "hint": "Mitlesen" },
                    { "word": "Simp", "hint": "Anhänglich" },
                    { "word": "Bait", "hint": "Köder" },
                    { "word": "Troll", "hint": "Stören" },
                    { "word": "Canceln", "hint": "Boykott" },
                    { "word": "Stan", "hint": "Fanatisch" },
                    { "word": "Alt-Text", "hint": "Beschreibung" },
                    { "word": "Facepalm", "hint": "Peinlich" },
                    { "word": "DM", "hint": "Privat" },
                    { "word": "Reddit", "hint": "Forum" },
                    { "word": "Discord", "hint": "Server" },
                    { "word": "Memesprache", "hint": "Insider" },
                    { "word": "Copypasta", "hint": "Kopiert" },
                    { "word": "Rickroll", "hint": "Überraschung" },
                    { "word": "Dank Memes", "hint": "Ironisch" },
                    { "word": "Wholesome", "hint": "Herzlich" },
                    { "word": "FYP", "hint": "TikTok" },
                    { "word": "NPC", "hint": "Mechanisch" },
                    { "word": "Shitpost", "hint": "Unsinnig" },
                    { "word": "Meme-Page", "hint": "Sammlung" },
                    { "word": "Reaction", "hint": "Antwort" },
                    { "word": "Reupload", "hint": "Kopie" }
                ]
            }

            // Weitere Kategorien können hier ergänzt werden...
        ];

        localStorage.setItem("imposter_categories", JSON.stringify(defaultCategories));
        return defaultCategories;
    });

    useEffect(() => {
        localStorage.setItem("imposter_highscore", JSON.stringify(highscore));
    }, [highscore]);

    useEffect(() => {
        localStorage.setItem("imposter_categories", JSON.stringify(categories));
    }, [categories]);

    const startGame = (updatedPlayers, updatedCategories, updatedSettings, state) => {
        setPlayers(updatedPlayers);
        setCategories(updatedCategories);
        setSettings(updatedSettings);
        setGameState(state);
        setPhase("reveal");
    };

    const handleRevealDone = () => {
        setPhase("play");
    };

    const handleEndGame = () => {
        setPhase("end");
    };

    const evaluateGame = (wordGuessed, impostersFound) => {
        const updated = { ...highscore };
        const imposters = new Set(gameState.imposters);

        players.forEach((p) => {
            const isImposter = imposters.has(p.name);
            if (!updated[p.name]) updated[p.name] = { wins: 0, losses: 0 };

            if (!impostersFound) {
                if (isImposter) updated[p.name].wins++;
                else updated[p.name].losses++;
                return;
            }

            if (wordGuessed) {
                if (isImposter) updated[p.name].wins++;
                else updated[p.name].losses++;
            } else {
                if (isImposter) updated[p.name].losses++;
                else updated[p.name].wins++;
            }
        });

        setHighscore(updated);

        if (!impostersFound) {
            setResultText("Die Imposter haben gewonnen, weil sie nicht alle entdeckt wurden.");
        } else if (wordGuessed) {
            setResultText("Die Imposter haben gewonnen, weil sie das geheime Wort erraten konnten.");
        } else {
            setResultText("Die ehrlichen Spieler haben gewonnen, weil die Imposter das Wort nicht erraten konnten.");
        }

        setEvaluationDone(true);
    };


    const restartGame = () => {
        setPlayers([]);
        setSettings({});
        setGameState(null);
        setGuesses({});
        setImposterAnswer("");
        setEvaluationDone(false);
        setPhase("setup");
    };

    const resetHighscore = () => {
        setHighscore({});
        localStorage.removeItem("imposter_highscore");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {phase === "setup" && (
                <GameSetupScreen
                    onStartGame={startGame}
                    highscore={highscore}
                    onResetHighscore={resetHighscore}
                    categories={categories}
                    onManageCategories={() => setPhase("categories")}
                />
            )}
            {phase === "categories" && (
                <CategoryManagerScreen
                    categories={categories}
                    setCategories={setCategories}
                    onBack={() => setPhase("setup")}
                />
            )}
            {phase === "reveal" && gameState && (
                <RevealWordScreen
                    players={players}
                    imposters={gameState.imposters}
                    word={gameState.word}
                    hint={gameState.hint}
                    showHints={settings.showHints}
                    onNext={handleRevealDone}
                    onAbort={restartGame}
                />
            )}
            {phase === "play" && gameState && (
                <GamePlayScreen
                    players={players}
                    imposters={gameState.imposters}
                    word={gameState.word}
                    roundTimeMinutes={settings.roundTimeMinutes}
                    votingTimeMinutes={settings.votingTimeMinutes}
                    onEndGame={handleEndGame}
                />
            )}
            {phase === "end" && gameState && (
                <GameEndScreen
                    players={players}
                    imposters={gameState.imposters}
                    word={gameState.word}
                    guesses={guesses}
                    setGuesses={setGuesses}
                    ImposterAnswer={ImposterAnswer}
                    setImposterAnswer={setImposterAnswer}
                    evaluateGame={evaluateGame}
                    evaluationDone={evaluationDone}
                    resultText={resultText}
                    highscore={highscore}
                    onRestart={restartGame}
                />
            )}
        </div>
    );
}
