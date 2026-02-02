# Guida Passo-Passo: Deploy su GitHub e Netlify

## Parte 1: Preparazione dei File

### Passo 1: Scaricare tutti i file
1. Scarica tutti i file da questa conversazione
2. Crea una cartella sul tuo computer chiamata `comitato-genitori-bagnera`
3. Inserisci tutti i file nella cartella:
   - index.html
   - eventi-passati.html
   - styles.css
   - script.js
   - README.md
   - .gitignore
   - netlify.toml
   - logo_comitato.jpg
   - Tutte le immagini (.jpg, .jpeg)
   - I file PDF (modulo_adesione_new.pdf, statuto_comitato_approvato.pdf)

### Passo 2: Aggiornare le email
1. Apri `index.html` con un editor di testo
2. Cerca tutte le occorrenze di `@example.com`
3. Sostituiscile con le email reali dei membri del direttivo

---

## Parte 2: Pubblicazione su GitHub

### Passo 1: Creare un account GitHub (se non lo hai già)
1. Vai su https://github.com
2. Clicca "Sign up"
3. Completa la registrazione

### Passo 2: Creare una nuova repository
1. Una volta loggato, clicca sul "+" in alto a destra
2. Seleziona "New repository"
3. Nome repository: `comitato-genitori-bagnera`
4. Descrizione: "Sito web ufficiale del Comitato Genitori IC Bagnera"
5. Seleziona "Public"
6. NON selezionare "Add a README file" (lo hai già)
7. Clicca "Create repository"

### Passo 3: Installare Git sul tuo computer

**Per Windows:**
1. Scarica Git da https://git-scm.com/download/win
2. Installa con le impostazioni predefinite

**Per Mac:**
1. Apri il Terminale
2. Digita: `git --version`
3. Se non installato, segui le istruzioni

**Per Linux:**
```bash
sudo apt-get install git
```

### Passo 4: Caricare i file su GitHub

1. Apri il Terminale (Mac/Linux) o Git Bash (Windows)
2. Naviga nella cartella del progetto:
   ```bash
   cd percorso/della/cartella/comitato-genitori-bagnera
   ```

3. Inizializza Git:
   ```bash
   git init
   ```

4. Aggiungi tutti i file:
   ```bash
   git add .
   ```

5. Fai il primo commit:
   ```bash
   git commit -m "Initial commit - Sito Comitato Genitori IC Bagnera"
   ```

6. Collega la repository remota (sostituisci TUO_USERNAME):
   ```bash
   git branch -M main
   git remote add origin https://github.com/TUO_USERNAME/comitato-genitori-bagnera.git
   ```

7. Carica i file:
   ```bash
   git push -u origin main
   ```

8. Ti verrà chiesto di inserire username e password GitHub

---

## Parte 3: Pubblicazione su Netlify

### Passo 1: Creare un account Netlify
1. Vai su https://app.netlify.com/signup
2. Clicca "Sign up with GitHub"
3. Autorizza Netlify ad accedere al tuo GitHub

### Passo 2: Importare il progetto
1. Una volta dentro Netlify, clicca "Add new site"
2. Seleziona "Import an existing project"
3. Clicca su "GitHub"
4. Cerca e seleziona la repository `comitato-genitori-bagnera`
5. Configurazione build:
   - **Branch to deploy:** main
   - **Build command:** (lascia vuoto)
   - **Publish directory:** / (o lascia vuoto)
6. Clicca "Deploy site"

### Passo 3: Attendere il deployment
1. Netlify inizierà a costruire il sito (richiede 1-2 minuti)
2. Una volta completato, vedrai "Site is live"
3. Il tuo sito sarà disponibile su un URL tipo: `random-name-123456.netlify.app`

### Passo 4: Personalizzare il dominio
1. Clicca su "Site settings"
2. Vai su "Domain management"
3. Clicca "Options" → "Edit site name"
4. Cambia in qualcosa come: `comitato-bagnera.netlify.app`
5. Salva

---

## Parte 4: Dominio Personalizzato (Opzionale)

Se vuoi usare un dominio tipo `comitatobagnera.it`:

1. Acquista un dominio su un provider (es: Aruba, Register.it)
2. In Netlify vai su "Domain management"
3. Clicca "Add custom domain"
4. Inserisci il tuo dominio
5. Segui le istruzioni per configurare i DNS

---

## Aggiornare il Sito

Ogni volta che vuoi aggiornare il sito:

1. Modifica i file sul tuo computer
2. Apri il terminale nella cartella del progetto
3. Esegui:
   ```bash
   git add .
   git commit -m "Descrizione delle modifiche"
   git push
   ```
4. Netlify aggiornerà automaticamente il sito

---

## Problemi Comuni e Soluzioni

### Il sito non si vede correttamente
- Controlla che tutti i file siano stati caricati
- Verifica i nomi dei file (devono corrispondere esattamente)
- Controlla la console del browser per errori (F12)

### Le immagini non si caricano
- Verifica che i nomi dei file immagine nel codice HTML corrispondano ai nomi effettivi
- I nomi sono case-sensitive (maiuscole/minuscole contano)

### Il modulo email non funziona
- Assicurati che l'email nel codice sia corretta
- Il modulo apre il client email dell'utente (non invia automaticamente)

---

## Supporto

Per ulteriore assistenza:
- Email: comitato.genitori.icbagnera@gmail.com
- Documentazione Netlify: https://docs.netlify.com
- Documentazione GitHub: https://docs.github.com

---

**Buona fortuna con il tuo nuovo sito! 🚀**