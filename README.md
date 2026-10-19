# OurSky

Atlante e pianificatore italiano per l’astrofotografia amatoriale. App statica, mobile-first, senza dipendenze runtime.

## Avvio e verifica

```bash
python3 -m http.server 4173
```

Apri `http://localhost:4173`. Verifica sintattica: `npm run check`.

## Funzioni presenti

- Panoramica del sito attivo, progetti, setup e soggetti in stagione.
- Atlante offline con 12.036 oggetti NGC/IC estratti da OpenNGC, più una selezione curata di Messier, Sharpless e altri target. Ricerca, filtri per classe/stagione e schede con coordinate J2000, dimensioni, magnitudine, campo, scienza e storia.
- Gear composto da telescopio, camera, filtri e accessori. Include suggerimenti per modelli comuni e inserimento custom; FOV, diagonale e scala pixel vengono calcolati quando i dati ottici e del sensore sono noti.
- Mappa cielo orientabile con giroscopio/bussola quando il dispositivo lo consente, pan manuale, selezione dei target e geolocalizzazione attivabile dall’utente.
- Più località, ricerca geocodificata OpenStreetMap/Nominatim, GPS, previsione Open-Meteo, link centrato alla mappa Light Pollution Map e campi Bortle/SQM modificabili.
- Progetti con obiettivo, setup, località, ore, intervallo date, giorni preferiti, orario e soglie di luna/altezza/nuvolosità; checklist, scheda esportabile e calendario lunare locale.
- Dati profilo e checklist salvati in `localStorage` sul dispositivo. La località iniziale è un esempio su Milano, da sostituire con GPS o ricerca del proprio sito.

## Fonti e limiti delle integrazioni

- Catalogo: estratto OpenNGC, licenza CC BY-SA 4.0. Attribuzione e provenienza in `src/data/OPENNGC-ATTRIBUTION.md`.
- Meteo: Open-Meteo. Luoghi: OpenStreetMap Nominatim. Mappa dell’inquinamento luminoso: collegamento a Light Pollution Map.
- Le schede curate contengono pillole introduttive; i record importati mostrano metadati catalografici e una descrizione derivata dai dati, non una biografia enciclopedica individuale.
- Le finestre stagionali sono una stima basata su ascensione retta; l’altezza massima è geometrica. Non include ostacoli locali, rifrazione o precisione di un planetario.
- AstroBin apre una ricerca per oggetto; per mostrare immagini, attribuzioni e metadati direttamente nell’app serve una chiave API AstroBin.
- Il catalogo camera/telescopio è un set iniziale di modelli frequenti con campi editabili, non un database completo del mercato.
- Non è ancora collegato il controllo diretto di APT, N.I.N.A., ASCOM/INDI o altro software di acquisizione.

## Struttura

```text
index.html
public/                  icona
src/data/                catalogo compresso e attribuzione
src/scripts/main.js      app, calcoli, UI e integrazioni web
src/styles/              token e componenti responsive
```
