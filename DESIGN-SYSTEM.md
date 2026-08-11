# NoA Connect — Designsystem (2026)

Visuell identitet for alle leveranser fra NoA Connect: slides, diagrammer, tabeller og HTML-output.

> **Status:** Gjeldende identitet, gjelder fra juli 2026. Erstatter den utgåtte gull/grønn-paletten (Gull `#F9C25E` / Grønn `#3A8A6E` / Krem `#F2EDE3`), som ikke skal brukes til nye leveranser.

> **Tema:** Dette dokumentet beskriver det **lyse** temaet, som er standard for alle leveranser. Et valgfritt mørkt tema finnes i [`dark/DARK-THEME.md`](dark/DARK-THEME.md) — bruk det bare når det er eksplisitt bestilt.

> **Grunnregel:** Visuell vekt skal komme fra typografi og struktur — ikke farger alene. Unngå støyende farger, overdrevne gradienter og dekorative elementer uten funksjon.

---

## Logo

**Logoen er wordmarket «NoA Connect».** Ingenting annet.

| Fil | Bruk |
|---|---|
| `assets/logo-wordmark.svg` | Standard. Mørkegrønn `#243419`, 654×85 |
| `assets/logo-wordmark-cream.svg` | Samme merke i krem `#FDFEEA`, for mørk bakgrunn |

Kilde: `powerpoint template.pptx` → `ppt/media/image4.png`, satt i footeren på
slide-masteren.

Bruk den kremfargede varianten på mørkegrønn bakgrunn. Standardvarianten er fylt
`#243419`, som **er** bakgrunnsfargen i mørkt tema, så den forsvinner der.

### ⚠️ Ikke sett en pil ved siden av logoen

`assets/accent-arrow.svg` er **ikke** en del av logoen og skal ikke plasseres ved
den. Den er et dekorativt ikon: i malen finnes den i én enkelt layout
(`1_Box_Modules`), brukt tre ganger på 1,1 × 1,5 cm som ikon inne i tre
innholdsbokser. Den opptrer aldri sammen med wordmarket.

Denne filen het tidligere `logo-arrow.svg`, og dette dokumentet omtalte pilen som
«logoen». Det var feil, og det førte til leveranser med en pil klistret ved siden
av navnet. Filen er omdøpt for å hindre gjentakelse.

Slide/dokument-metaformat: `"Noa connect x [partner]"` + dato. Dette er **tekst**
i malen, ikke et bilde.

---

## Typografi

### Husfont: NoA Serif 2.0

**NoA Serif 2.0 er vår font.** Den brukes til all tekst, i alle leveranser.
Regular (400) er standardsnittet, Bold (700) til overskrifter og uthevinger.
Logo-snittet er reservert wordmark og logolockup — aldri til brødtekst.

Filene ligger i `fonts/` og lastes via `@font-face` i `design-tokens.css`:

| Fil | Snitt | Token |
|---|---|---|
| `fonts/NoaSerif2.0-Regular.otf` | Regular 400 (standard) | `--font-sans` / `--font-base` |
| `fonts/NoaSerif2.0-Bold.otf` | Bold 700 | `--font-display` med `font-weight:700` |
| `fonts/NoaSerif2.0-Logo.otf` | Logo (kun wordmark) | `--font-logo` |

### Font-hierarki

| Rolle | Font | Vekt |
|---|---|---|
| Overskrifter / display (H1–H3) | NoA Serif 2.0 | 700 |
| Brødtekst, UI-elementer, tabeller | NoA Serif 2.0 | 400 |
| Wordmark / logolockup | NoA Serif 2.0 Logo | 400 |
| Fallback | Georgia, serif | — |

### Størrelseshierarki

| Token | px | Bruk |
|---|---|---|
| `--font-size-xs` | 12px | Seksjonsetiketter, footer-tekst |
| `--font-size-sm` | 14px | Støttetekst, metadata |
| `--font-size-base` | 16px | Brødtekst |
| `--font-size-lg` | 18px | Ingress |
| `--font-size-xl` | 20px | H3 |
| `--font-size-2xl` | 24px | H2 |
| `--font-size-3xl` | 30px | H1 / slide-heading |

### Linjeavstand

- Overskrifter: `1.2`
- Brødtekst: `1.65`

---

## Fargepalett

Kilde: PowerPoint-tema (`ppt/theme/theme1.xml`), tema-navn "NoA Connect".

| Rolle | Navn | Hex |
|---|---|---|
| Primær aksent | Lime | `#E4FB00` |
| Bakgrunn / slide-bakgrunn | Krem | `#FDFEEA` |
| Sekundær / dempet | Sage | `#6C7962` |
| Mørk / ink (tekst, footer) | Mørkegrønn | `#243419` |
| Varm aksent | Fersken | `#FCD9A3` |
| Lys grå | — | `#EBEAEA` |
| Primærtekst / dark1 | — | `#000000` |
| Sekundærtekst / dark2 | — | `#282828` |
| Tekst muted / light2 | — | `#545050` |
| Lys / bakgrunn kort | Hvit | `#FFFFFF` |
| Lenke | — | `#467886` |
| Besøkt lenke | — | `#96607D` |

**Bruk aldri** rene primærfarger (ren blå, rød) som ikke er listet ovenfor.

### Chart-farger (rekkefølge)

| Serie | Farge | Hex |
|---|---|---|
| Serie 1 | Lime | `#E4FB00` |
| Serie 2 | Mørkegrønn | `#243419` |
| Serie 3 | Sage | `#6C7962` |
| Serie 4 | Fersken | `#FCD9A3` |

---

## Form og struktur

| Element | Verdi |
|---|---|
| Hjørneradius standard | `6px` |
| Hjørneradius kort/panel | `12px` |
| Hjørneradius pill/badge | `20px` |
| Skygge kort | `0 1px 3px rgba(36,52,25,0.06)` |
| Skillelinje (solid) | `1px solid #EBEAEA` |
| Skillelinje (stiplet) | `1px dashed #EBEAEA` |

---

## Komponenter

### Knapper

```css
/* Primær */
background: #E4FB00;
color: #243419;
border-radius: 6px;
padding: 9px 20px;
font-family: 'NoA Serif 2.0', Georgia, serif;
font-weight: 500;

/* Primær hover */
background: #c9dd00;

/* Sekundær */
background: transparent;
border: 1px solid #EBEAEA;
color: #243419;

/* CTA (mørkegrønn) */
background: #243419;
color: #FDFEEA;
```

### Kort med ramme

```css
/* Lime-ramme */
background: #FFFFFF;
border: 1px solid #E4FB00;
border-radius: 12px;
padding: 1rem 1.25rem;

/* Sage-ramme */
background: #FFFFFF;
border: 1px solid #6C7962;
border-radius: 12px;
padding: 1rem 1.25rem;
```

### Blokkquote

```css
border-left: 3px solid #E4FB00;
padding: 0.75rem 1rem;
background: #FDFEEA;
border-radius: 0 6px 6px 0;
font-family: 'NoA Serif 2.0', Georgia, serif;
```

### Metrikk-kort

```css
background: #EBEAEA;
border-radius: 6px;
padding: 1rem;

/* Etikett */
font-size: 12px;
font-family: 'NoA Serif 2.0', Georgia, serif;
color: #545050;
text-transform: uppercase;
letter-spacing: 0.07em;

/* Verdi */
font-size: 28px;
font-weight: 700;
font-family: 'NoA Serif 2.0', Georgia, serif;
color: #243419;
```

### Seksjonsetikett

```css
font-size: 11px;
font-family: 'NoA Serif 2.0', Georgia, serif;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #545050;
border-bottom: 1px solid #EBEAEA;
padding-bottom: 0.5rem;
margin-bottom: 1rem;
```

### Footer / mørk bakgrunn

```css
background: #243419;
color: #FDFEEA;
border-radius: 12px;
padding: 1.5rem;
font-family: 'NoA Serif 2.0', Georgia, serif;
```

---

## Spacing

| Bruksområde | Verdi |
|---|---|
| Tett spacing / ikonmargin | `4px` |
| Komponent-intern gap | `8px` |
| Grid gap / badge padding | `12px` |
| Standard padding | `16px` |
| Knapp padding (horisontal) | `20px` |
| Seksjonsavstand | `2rem` |

---

## Tone og stil

Rolig, analytisk og profesjonell. Unngå støyende farger, overdrevne gradienter og dekorative elementer uten funksjon. Visuell vekt skal komme fra typografi og struktur — ikke farger alene.

---

## Filer i dette repoet

| Fil | Bruk |
|---|---|
| `index.html` | Nettsiden. Palett, tokens, komponenter, logonedlasting |
| `design-tokens.css` | CSS-variabler for lyst tema + `@font-face` for husfonten |
| `fonts/` | NoA Serif 2.0: Regular, Bold, Logo (.otf) |
| `assets/logo-wordmark.svg` | Logo: wordmark, mørkegrønn |
| `assets/logo-wordmark-cream.svg` | Logo: wordmark, krem — for mørk bakgrunn |
| `assets/accent-arrow.svg` | Dekorativt ikon. **Ikke logoen**, skal ikke stå ved wordmarket |
| `dark/` | Valgfritt mørkt tema: tokens, dokumentasjon, forhåndsvisning |

**Ikke i dette repoet:** `powerpoint template.pptx` (95 MB) og `ripple1–4.mp4`
er for tunge for git. De ligger på delt disk. PowerPoint-malen er kilden til
tema, fonter og slide-layouts; ripple-videoene brukes til intro og overganger,
og bare i lyst tema.

---

## Mørkt tema

Valgfritt. Lyst er standard. Se [`dark/DARK-THEME.md`](dark/DARK-THEME.md).

Kort oppsummert: bakgrunn blir merkevaregrønn `#243419`, overskrifter lime `#E4FB00`, brødtekst hvit. Chart-serie 2 byttes fra mørkegrønn til krem. Ripple-videoene brukes ikke.

```html
<link rel="stylesheet" href="design-tokens.css">
<link rel="stylesheet" href="dark/dark-tokens.css">   <!-- valgfritt -->
```

Åpne `dark/preview.html` i nettleser for å se begge temaene med toggle.
