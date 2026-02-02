# Sito Web Comitato Genitori IC Bagnera

Sito web ufficiale del Comitato Genitori dell'Istituto Comprensivo Giuseppe Bagnera di Roma.

## 🌟 Caratteristiche

- Design moderno e responsive
- Modulo di adesione online con invio automatico email
- Galleria fotografica degli eventi passati con lightbox
- Pagina dedicata agli eventi "Non ti scordar di me"
- Sezione direttivo con contatti email
- Ottimizzato per mobile, tablet e desktop

## 📁 Struttura del Progetto

```
comitato-genitori-bagnera/
├── index.html              # Homepage
├── eventi-passati.html     # Pagina eventi passati
├── styles.css              # Fogli di stile
├── script.js               # JavaScript
├── logo_comitato.jpg       # Logo del comitato
├── *.jpeg, *.jpg          # Immagini eventi
├── modulo_adesione_new.pdf # Modulo PDF adesione
├── statuto_comitato_approvato.pdf # Statuto
└── README.md              # Questo file
```

## 🚀 Deployment su Netlify

### Metodo 1: Deploy tramite GitHub

1. **Crea una repository su GitHub:**
   - Vai su https://github.com/new
   - Nome repository: `comitato-genitori-bagnera`
   - Rendi il repository pubblico
   - Crea la repository

2. **Carica i file su GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sito Comitato Genitori IC Bagnera"
   git branch -M main
   git remote add origin https://github.com/TUO_USERNAME/comitato-genitori-bagnera.git
   git push -u origin main
   ```

3. **Connetti a Netlify:**
   - Vai su https://app.netlify.com
   - Clicca "Add new site" > "Import an existing project"
   - Scegli "GitHub" e autorizza l'accesso
   - Seleziona la repository `comitato-genitori-bagnera`
   - Build settings:
     - Build command: (lascia vuoto)
     - Publish directory: `/`
   - Clicca "Deploy site"

### Metodo 2: Deploy Drag & Drop

1. **Vai su Netlify:**
   - Apri https://app.netlify.com/drop
   
2. **Trascina la cartella:**
   - Comprimi tutti i file in una cartella
   - Trascina la cartella nella zona indicata
   
3. **Configurazione:**
   - Il sito sarà pubblicato automaticamente
   - Puoi personalizzare il nome del dominio nelle impostazioni

## 📝 Personalizzazione

### Aggiornare le email dei referenti

Modifica il file `index.html` alla sezione "Il Direttivo" e aggiorna gli indirizzi email:

```html
<a href="mailto:EMAIL_REALE@example.com" class="email-link">✉️ Contatta</a>
```

### Aggiungere nuovi eventi

Per aggiungere un nuovo evento passato, modifica `eventi-passati.html` e aggiungi una nuova sezione `<div class="evento-passato">`.

### Aggiornare le immagini

Sostituisci i file immagine mantenendo gli stessi nomi, oppure aggiorna i riferimenti nel codice HTML.

## 🔧 Tecnologie Utilizzate

- HTML5
- CSS3 (con variabili CSS)
- JavaScript (Vanilla)
- Design Responsive
- Nessuna dipendenza esterna

## 📱 Browser Supportati

- Chrome/Edge (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 File PDF

I file PDF (modulo adesione e statuto) devono essere caricati nella root del progetto:
- `modulo_adesione_new.pdf`
- `statuto_comitato_approvato.pdf`

## 🤝 Contribuire

Per suggerimenti o modifiche, contatta il Comitato Genitori all'indirizzo:
comitato.genitori.icbagnera@gmail.com

## 📜 Licenza

© 2026 Comitato Genitori IC Bagnera. Tutti i diritti riservati.

## 🆘 Supporto

Per problemi tecnici o domande sul sito, contatta:
- Email: comitato.genitori.icbagnera@gmail.com
- O apri una issue su GitHub

---

**Comitato Genitori IC Bagnera** - Uniti per il benessere e la crescita dei nostri figli 🤝