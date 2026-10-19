# OurSky

Interfaccia web per organizzare l’astrofotografia amatoriale.

## Avvio locale

Il prototipo è statico e non richiede installazione di dipendenze:

```bash
python3 -m http.server 4173
```

Apri `http://localhost:4173`.

## Struttura

```text
public/                  asset statici
src/
  components/            elementi condivisi
  data/                  cataloghi astronomici e attrezzatura
  features/
    catalog/             oggetti e mappa del cielo
    gear/                configurazioni e calcoli ottici
    planner/             progetti e calendario sessioni
    sites/               località e qualità del cielo
  pages/                 viste principali
  scripts/               bootstrap e interazioni
  styles/                token, layout e componenti visuali
docs/                    note architetturali e fonti dati
```

La prima schermata usa HTML, CSS e JavaScript nativi, senza dipendenze. Le cartelle delle funzionalità sono già predisposte e descritte in `docs/architecture.md`.

## Verifica

```bash
node --check src/scripts/main.js
```
