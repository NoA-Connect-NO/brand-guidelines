# NoA Connect — Mørkt tema (2026)

**Valgfritt tillegg.** Lyst tema er standard for alle leveranser. Mørkt tema brukes bare når det er bestilt eller når konteksten krever det (skjermpresentasjon i mørkt rom, produkt-UI med temavalg, video/motion).

> **Grunnregel, uendret:** Visuell vekt skal komme fra typografi og struktur, ikke farger alene. Mørkt tema skal ikke være en anledning til å legge på glød, gradienter eller neon.

---

## Les dette først: tre feller

Alle tre ble truffet da temaet faktisk ble implementert i en rapport. Ingen av
dem er synlige fra paletten alene, og to av dem produserer 1:1-kontrast — altså
usynlig innhold, ikke bare stygt.

### 1. Ingen farge må være lik tokenet den ligger oppå

Mørkegrønn `#243419` er **bakgrunnen** i mørkt tema. Alt som bruker den som fyll
forsvinner. Det gjelder ikke bare åpenbare tilfeller:

| Symptom | Årsak |
|---|---|
| Chart-serie 2 blir borte | Serien er mørkegrønn, som nå er bakgrunnen |
| To identiske serier i samme diagram | Serien leser `--color-green`-rollen, som er **lime** i mørkt tema, og kolliderer med serie 1 |
| Logoen forsvinner | Wordmarket er fylt `#243419` |
| Knappetekst usynlig | Teksten bruker et «tekst på lime»-token, men ligger på et kort |

Regelen: en seriefarge eller ikonfarge skal aldri hente fra et token som også
brukes som flate. Bruk `--chart-1` … `--chart-4`, som bytter med temaet.

### 2. Peach og sage er lyse fyllfarger

De er lesbare på krem, men som fyll på mørk grunn leser de som levninger fra
lyst tema. Løft grønnfargen i stedet, og la lime eller sage være **ramme**.
Å fylle hele paneler med lime blir altfor høylytt — lime skal være en strek.

### 3. Et fyll kan ikke alltid bære en markering

I mørkt tema er alt som er lyst nok til å skille seg tydelig fra kortflaten også
lyst nok til å skyve dempet celletekst under AA. Derfor markeres en uthevet rad
med en 3px kant (`--row-marker`), mens fyllet bare løfter.

Marker-fargen kan ikke være én felles verdi: lime på peach er 1,2:1. Den skal
alltid være den sterkeste fargen mot radens **eget** fyll — mørkegrønn i lyst,
lime i mørkt.

---

## Kjerneidé

Bakgrunnen er merkevaregrønn `#243419` — ikke en nøytral gråsvart. Overskrifter er lime, brødtekst hvit. Det er hele grepet.

```
Bakgrunn    #243419   merkevaregrønn
Overskrift  #E4FB00   lime
Brødtekst   #FFFFFF   hvit
```

---

## Oppsett

Last mørkt tema **etter** basetokens. Arket overstyrer bare det som må snus.

```html
<link rel="stylesheet" href="../design-tokens.css">
<link rel="stylesheet" href="dark/dark-tokens.css">
```

### Aktivering

| Tilstand | Resultat |
|---|---|
| `<html data-theme="dark">` | Mørkt, eksplisitt |
| `<html data-theme="light">` | Lyst, tvunget. Overstyrer OS-preferanse |
| Ingen attributt | Lyst, men følger OS via `prefers-color-scheme` |

Skal leveransen alltid være lys uansett OS-innstilling: sett `data-theme="light"`, eller ikke last `dark-tokens.css` i det hele tatt.

Toggle:

```js
document.documentElement.dataset.theme =
  document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
```

---

## Fargepalett

### Flater — tre trinn

Dybde kommer fra trinn i grønt, ikke fra skygge.

| Token | Hex | Bruk |
|---|---|---|
| `--color-bg-primary` | `#243419` | Side- / slide-bakgrunn |
| `--color-bg-card` | `#2E4020` | Kort, panel. Hevet ett trinn |
| `--color-bg-secondary` | `#2E4020` | Sekundær flate, metrikkort |
| `--color-bg-deep` | `#1A2612` | Nedsenket: footer, kodeblokk, blokkquote, plotflate |

### Tekst

| Token | Hex | Kontrast mot `bg-primary` | Bruk |
|---|---|---|---|
| `--color-heading` | `#E4FB00` | 13,8:1 | Overskrifter H1–H3, display, key numbers |
| `--color-text-primary` | `#FFFFFF` | 12,6:1 | Brødtekst, tabellceller, UI |
| `--color-text-secondary` | `#E6E9DF` | 11,3:1 | Støttetekst |
| `--color-text-muted` | `#A9B69C` | 5,4:1 | Metadata, seksjonsetiketter, footer-tekst |

Alle fire klarer WCAG AA for brødtekst. `text-muted` klarer AA, ikke AAA — bruk den ikke til lange tekstblokker.

### Ramme og lenker

| Token | Hex | Merknad |
|---|---|---|
| `--color-border` | `#3F5430` | Erstatter skygge som dybdesignal |
| `--color-border-lime` | `#E4FB00` | Uendret |
| `--color-border-sage` | `#8B9A80` | Løftet |
| `--color-link` | `#8FC4D1` | `#467886` faller igjennom på mørk grønn |
| `--color-link-visited` | `#D3A3BB` | |

### Aksenter

| Token | Lys | Mørk | Merknad |
|---|---|---|---|
| `--color-lime` | `#E4FB00` | `#E4FB00` | **Uendret. Ikke forhandlingsbart** |
| `--color-lime-hover` | `#C9DD00` | `#EFFF4D` | Hover går motsatt vei: mørkere i lyst, lysere i mørkt |
| `--color-sage` | `#6C7962` | `#8B9A80` | Løftet for lesbarhet |
| `--color-peach` | `#FCD9A3` | `#FCD9A3` | Uendret, fungerer på begge |

---

## Chart-serier

Serie 2 må byttes. `#243419` er bakgrunnsfargen i mørkt tema og blir usynlig.

| Serie | Lys | Mørk |
|---|---|---|
| 1 | Lime `#E4FB00` | Lime `#E4FB00` |
| 2 | Mørkegrønn `#243419` | **Krem `#FDFEEA`** |
| 3 | Sage `#6C7962` | Sage løftet `#8B9A80` |
| 4 | Fersken `#FCD9A3` | Fersken `#FCD9A3` |

Bruk `var(--chart-1)` til `var(--chart-4)` — de bytter automatisk med temaet.

Rutenett og akselinjer: `--color-border` `#3F5430`. Aksetekst: `--color-text-muted`.

---

## Komponenter

### Knapper og pills

Fra designmalen: **begge varianter er fylte, ikke rammer.** Pill-form, ikke 6px radius.

```css
/* Felles */
border-radius: var(--border-radius-pill);   /* 20px */
padding: 6px 16px;
font-family: var(--font-sans);
font-weight: 500;
font-size: var(--font-size-xs);
letter-spacing: .06em;
text-transform: uppercase;
border: none;

/* Primær — lime fylt */
background: var(--color-btn-primary-bg);     /* #E4FB00 */
color: var(--color-btn-primary-text);        /* #243419 */

/* Primær hover */
background: var(--color-lime-hover);         /* #EFFF4D, lysere */

/* Sekundær — hvit fylt */
background: var(--color-btn-secondary-bg);   /* #FFFFFF */
color: var(--color-btn-secondary-text);      /* #243419 */
```

Malen bruker samme pill-form til prosessnoder og etiketter, ikke bare klikkbare knapper. Lime pill = hovedsteg eller aktivt punkt. Hvit pill = sekundært eller påfølgende steg. Hvite pills kan bære et lite lime punkt (`8px`, `--color-lime`) som markør foran teksten.

Rammevariant brukes ikke.

### Kort

```css
background: var(--color-bg-card);       /* #2E4020 */
border: 1px solid var(--color-border);  /* #3F5430 */
border-radius: 12px;
padding: 1rem 1.25rem;
```

Lime- eller sage-ramme brukes som i lyst tema, men uten skygge.

### Metrikkort

```css
background: var(--color-bg-secondary);  /* #2E4020 */
border-radius: 6px;
padding: 1rem;

/* Etikett */
font-size: 12px;
color: var(--color-text-muted);
text-transform: uppercase;
letter-spacing: 0.07em;

/* Verdi */
font-family: var(--font-display);
font-size: 28px;
font-weight: 700;
color: var(--color-heading);            /* lime */
```

### Blokkquote

```css
background: var(--color-bg-deep);       /* #1A2612 */
border-left: 3px solid var(--color-lime);
border-radius: 0 6px 6px 0;
padding: 0.75rem 1rem;
```

### Footer

```css
background: var(--color-bg-deep);       /* #1A2612 */
color: var(--color-text-primary);
border-radius: 12px;
padding: 1.5rem;
```

Merk: i lyst tema er footeren mørkere enn siden. I mørkt tema er den fortsatt mørkere enn siden — retningen holdes, verdiene flyttes.

### Tabellrader

```css
tr             { background: var(--color-bg-card); }
tr:nth-child(even) { background: var(--row-alt); }
tr.klient      { background: var(--row-kunde); }
tr.kryssvalgt  { background: var(--row-cross); }

/* Markeringen. 3px kant på FØRSTE celle, ikke på <tr>: Tailwinds preflight
   setter border-collapse på tabeller, og kollapsede tabeller dropper
   venstrekanter på radnivå. Gi head og foot samme kant i transparent, ellers
   forskyves kolonnene. */
tr.klient td:first-child { border-left: 3px solid var(--row-marker); }
tr td:first-child        { border-left: 3px solid transparent; }
```

Se felle 3 over for hvorfor markeringen ligger i kanten og ikke i fyllet.

### Uthevet element og sammenligning

```css
/* Primært valg — lime ramme */
background: var(--accent-soft-bg);
color: var(--accent-soft-text);
border: 2px solid var(--color-lime);

/* Sammenligning — sage ramme */
background: var(--accent-alt-bg);
color: var(--accent-alt-text);
border: 2px solid var(--accent-alt-border);
```

Gjelder valgt-merkevare-brikker, statistikkpaneler og valgte rader i nedtrekk.
Ikke bruk `--color-peach` eller `--color-sage` direkte som fyll her.

### Aktiv navigasjon

```css
background: var(--nav-active-bg);   /* lime i mørkt, peach i lyst */
color: var(--color-btn-primary-text);
```

### Endringstall

```css
color: var(--color-positive);   /* lime i mørkt, mørkegrønn i lyst */
color: var(--color-negative);   /* #FF9C9C i mørkt, #A82A2A i lyst */
```

Den negative er lysere i mørkt tema enn en ren invertering ville gitt, fordi den
også må klare AA oppå `--row-kunde`, ikke bare på kortflaten.

### Bevisst mørkt panel

```css
background: var(--panel-deep);
border: 1px solid var(--panel-deep-border);
color: var(--panel-deep-text);
/* dempet tekst: var(--panel-deep-muted), skillelinjer: var(--panel-deep-rule) */
```

Et panel som er mørkt i *begge* temaer, brukt som kontrastvirkemiddel. Har egne
tokens fordi retningen holdes: alltid dypere enn siden. Ligger et diagram inne i
et slikt panel, sjekk om det står direkte på panelet eller i et `--color-bg-card`
-kort inni — de krever ulike seriefarger.

---

## Skygger

Skygger leses knapt på mørk bakgrunn. Dybde skal komme fra flatetrinn og `--color-border`. `--shadow-card` finnes i mørkt tema, men gi alltid kortet en ramme i tillegg.

---

## Det som ikke følger med

| Ressurs | Status i mørkt tema |
|---|---|
| `ripple1–4.mp4` | **Kun lyst tema.** Videoene har lys bakgrunn og bryter mot mørk flate. Ingen mørk versjon finnes. Utelat dem, eller bestill mørk re-eksport |
| `powerpoint template.pptx` | Bare lyse layouts. Mørke slides må lages manuelt |
| `assets/logo-wordmark.svg` | **Kan ikke brukes.** Fylt `#243419`, som er bakgrunnen her — bruk `logo-wordmark-cream.svg` |
| `assets/accent-arrow.svg` | Lime, fungerer uendret. Dekorativt ikon, ikke logoen |

`mix-blend-mode: screen` på ripple-videoene er *ikke* godkjent som løsning — resultatet blir grumsete og off-brand.

---

## Sjekkliste før levering i mørkt tema

- [ ] Er mørkt tema faktisk bestilt? Standard er lyst
- [ ] Overskrifter lime, brødtekst hvit
- [ ] Ingen chart-serie i `#243419`, og ingen to serier med samme farge
- [ ] Ingen seriefarge hentet fra et token som også brukes som flate
- [ ] Ingen peach eller sage brukt som fyll
- [ ] Kort har ramme, ikke bare skygge
- [ ] Lenker bruker `#8FC4D1`, ikke `#467886`
- [ ] Ingen ripple-videoer
- [ ] Logo: krem variant, ikke den mørkegrønne
- [ ] Lyst tema fungerer fortsatt hvis leveransen støtter begge

### Testing

Kontrastsjekk i standardvisningen er ikke nok. Disse tilstandene skjuler feil, og
i praksis var det nettopp her de satt:

- [ ] Nedtrekk **åpnet** — valgte rader i en liste har egne farger
- [ ] Sammenligningsmodus **påslått** — hele paneler vises bare da
- [ ] Uthevede rader — dempet og negativ tekst skal klare AA *oppå* fyllet, ikke bare på kortet

To av feilene som ble funnet på denne måten var brutt i **lyst** tema også, og
hadde ligget der lenge uten å bli oppdaget.

---

## Filer i denne mappen

| Fil | Bruk |
|---|---|
| `dark-tokens.css` | Overstyrings-ark. Last etter `../design-tokens.css` |
| `preview.html` | Levende sammenligning lys / mørk med toggle. Åpne i nettleser |
| `DARK-THEME.md` | Dette dokumentet |
