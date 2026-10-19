# OurSky

OurSky è un atlante e un pianificatore in italiano per l'astrofotografia amatoriale. Interfaccia mobile-first, app statica e profilo salvato nel browser.

## Avvio

```bash
python3 -m http.server 4173
```

Apri `http://localhost:4173`. Controllo sintattico: `npm run check`.

## Sezioni

- **Stasera**: soggetto in evidenza, immagine ottica di survey DSS2, setup, sito, condizioni meteo e progetti.
- **Soggetti**: catalogo NGC/IC locale con ricerca su sigla primaria, nomi comuni e cross-reference disponibili; filtri per classe, stagione, costellazione, dimensione, altezza geometrica e compatibilità del campo. Risultati progressivi, senza migliaia di schede caricate insieme.
- **Attrezzatura**: oltre 200 telescopi/ottiche e più di 100 camere fra camere astronomiche e fotocamere DSLR/mirrorless. Ricerca per marca e modello, specifiche editabili, filtri e componenti custom. FOV orizzontale/verticale/diagonale e scala pixel sono calcolati da sensore, focale e correttore ottico.
- **Località**: mappa OpenStreetMap con pin trascinabile o cliccabile, GPS, coordinate e quota da Open-Meteo, fuso orario e più siti. La classe Bortle e SQM sono registrate come dati forniti dall'utente o da una misura: non vengono dedotte da un colore della mappa.
- **Progetti**: soggetto, setup, sito, integrazione desiderata, date, giorni disponibili e soglie per luna, altezza e nuvolosità. Le ore di integrazione sono un obiettivo impostato dall'utente, non una promessa automatica di qualità.
- **Calendario**: fasi lunari calcolate localmente e progetti.

## Dati, immagini e limiti

- Catalogo NGC/IC: estratto locale di OpenNGC, licenza CC BY-SA 4.0. Attribuzione in `src/data/OPENNGC-ATTRIBUTION.md`. Le posizioni sono J2000; i record OpenNGC forniscono misure e identificatori/cross-reference solo quando presenti nel dataset.
- La selezione editoriale contiene schede con pillole scientifiche e storico-culturali. Per i record catalografici generici non sono inventate storie individuali.
- Le immagini mostrate sono ritagli DSS2 dal servizio HiPS2FITS del CDS/Università di Strasburgo. Sono immagini reali di survey astronomiche, non astrofotografie individuali: ogni scheda offre anche la ricerca AstroBin.
- Dati meteo e quota: Open-Meteo. Ricerca e cartografia: OpenStreetMap / Nominatim / Leaflet. La mappa Light Pollution Map si apre centrata sul sito; Bortle/SQM non vengono falsamente presentate come letture automatiche.
- Gli elenchi gear sono una selezione locale estesa di modelli reali; ogni riga espone il sito di riferimento della marca e i campi restano modificabili per varianti e correttori. Prima della sessione controlla le specifiche della revisione esatta del tuo strumento.
- Stagionalità e culminazione sono calcoli geometrici di supporto; non sostituiscono un planetario completo né includono ostacoli locali o rifrazione. Le previsioni sono meteo terrestre, non seeing o trasparenza astronomica misurati.
- AstroBin apre risultati pubblici. La visualizzazione diretta delle fotografie e dei metadati richiede l'accesso alla relativa API. Non è collegato il controllo diretto di N.I.N.A., APT, ASCOM o INDI.

## Struttura

```text
index.html
public/
src/data/             OpenNGC, attribuzione e provenienza gear
src/scripts/main.js   app, catalogo, calcoli e integrazioni
src/styles/           componenti e override responsive
```
