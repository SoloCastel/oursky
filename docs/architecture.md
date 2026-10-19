# Architettura OurSky

## Principi

- Interfaccia in italiano, mobile-first e responsive.
- Pagine distinte per esplorazione, attrezzatura, località e pianificazione.
- La home mostra riepiloghi brevi; i dati completi vivono nelle rispettive pagine.
- Calcoli ottici, visibilità e condizioni devono derivare da dati e formule esplicite.
- Cataloghi e integrazioni esterne restano separati dalla presentazione.

## Aree applicative

| Percorso | Responsabilità |
| --- | --- |
| `src/features/catalog` | Catalogo DSO e oggetti del Sistema Solare, coordinate e criteri di selezione. |
| `src/features/gear` | Componenti, setup composti, FOV, campionamento e compatibilità filtri. |
| `src/features/planner` | Progetti, finestre osservative, soglie meteo e checklist di sessione. |
| `src/features/sites` | Località, geolocalizzazione, orizzonte e qualità del cielo. |
| `src/data` | Dati astronomici e tecnici con fonte, licenza e data di aggiornamento. |
| `src/components` | Componenti condivisi dell’interfaccia. |
| `src/pages` | Pagine e viste principali. |

## Schermata iniziale

La home è una base visiva e di navigazione. Non simula dati, integrazioni o funzioni non ancora implementate. Le schede indicano chiaramente le aree in sviluppo.
