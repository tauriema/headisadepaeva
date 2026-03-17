# Backendi töötuba

Tere tulemast oma esimesse backend (taustaprogrammi) projekti! Selles töötoas õpid, kuidas üks server töötab ja kuidas oma koodi GitHubi üles laadida.

---

## Sõnastik / Vocabulary

| Inglise keeles (English) | Eesti keeles |
|---|---|
| Backend | Taustaprogramm |
| Frontend | Kasutajaliides |
| Server | Server |
| Request | Päring |
| Response | Vastus |
| Route / Endpoint | Marsruut / Lõpp-punkt |
| Port | Port |
| Repository | Hoidla |
| Commit | Muudatuste kinnitus |
| Push | Üleslaadimine |
| Branch | Haru |
| Dependency | Sõltuvus |
| Terminal | Terminal |
| JSON | JSON (andmevorming) |

---

## Restoranianaloogia 🍽️

Kujuta ette, et külastad restorani:

- **Kasutajaliides (Frontend)** → Menüü — see on see, mida klient näeb.
- **Taustaprogramm (Backend)** → Köök — siin toimub tegelik töö.
- **Päring (Request)** → Tellimus, mille kelner köögile viib.
- **Vastus (Response)** → Valmis toit, mis lauale tuuakse.

Taustaprogramm ei hooli värvide ega nuppude kujust — ta töötleb ainult andmeid ja loogikat.

---

## 1. samm — Git seadistamine

Enne millegi muuga alustamist käivita terminalis järgmised käsud. Asenda näidisandmed oma omadega.

```bash
git config --global user.email "sinu.email@näide.ee"
git config --global user.name "Sinu Nimi"
```

---

## 2. samm — Sõltuvuste installimine

> **Märkus:** Kui kasutad GitHub Codespaces'i, tehakse see samm automaatselt. Kui mitte, käivita käsk käsitsi.

```bash
npm install
```

See käsk laadib alla kõik vajalikud teegid (näiteks Express), mis on loetletud failis `package.json`.

---

## 3. samm — Serveri käivitamine

```bash
npm start
```

Terminalis peaks ilmuma teade:

```
Server töötab pordil 3000 / Server is live on port 3000
```

---

## 4. samm — Serveri vaatamine brauseris

### GitHub Codespaces'is:

1. Klõpsa terminali kõrval vahekaardil **Ports** (Pordid).
2. Leia portiga **3000** rida.
3. Ava lukuikooni kõrval rippmenüü ja vali **Public** (Avalik).
4. Klõpsa kera ikoonil — avaneb brauser koos sinu serveriga.

Peaksid nägema:

```json
{ "message": "Hello World" }
```

---

## 5. samm — Koodi GitHubi laadimine

Nüüd salvesta oma töö GitHubi. Selleks kasutatakse kolme käsku.

### Etapid järjekorras:

```bash
# 1. Lisa kõik muutused n-ö kastiga (staging)
git add .

# 2. Tee muudatustest kinnitus (snapshot) koos sõnumiga
git commit -m "Minu esimene server"

# 3. Lae muudatused GitHubi üles
git push
```

> **Lihtne mäletamisviis:** Pane kast kokku → Kinnita kaas → Saada ära.

Pärast `git push` käivitamist mine oma GitHubi hoidlasse (repository) — peaksid nägema oma koodi seal.

---

## Levinumad vead ja lahendused

| Probleem | Lahendus |
|---|---|
| `Cannot find module 'express'` | Käivita `npm install` |
| `Port 3000 is already in use` | Klõpsa terminalis ja vajuta `Ctrl + C`, seejärel proovi uuesti |
| `git push` lükatakse tagasi | Kontrolli, kas oled enne teinud `git commit` |
| Server ei avane brauseris | Kontrolli, et port 3000 olek **Ports** vahekaardil oleks **Public** |

---

## Projekti struktuur

```
📁 backend-example/
├── 📄 server.js          ← Serveri põhifail
├── 📄 package.json       ← Projekti info ja sõltuvused
├── 📄 .gitignore         ← Failid, mida GitHubi EI laadita
└── 📁 .devcontainer/
    └── 📄 devcontainer.json  ← Codespaces'i seadistus
```