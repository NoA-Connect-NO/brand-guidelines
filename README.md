# NoA Connect — Designsystem 2026

Gjeldende visuelle identitet for alt vi leverer: slides, rapporter, diagrammer,
tabeller og nettsider.

**Lime `#E4FB00` · Mørkegrønn `#243419` · Krem `#FDFEEA`**

## Skal du bare bruke det?

Åpne nettsiden. Der finner du paletten med klikk-for-å-kopiere, logoene til
nedlasting, typografi og komponenteksempler, og en bryter for lyst og mørkt tema.

Du trenger ikke å forstå noe av dette repoet for å bruke retningslinjene.

## Skal du bygge noe?

```html
<link rel="stylesheet" href="design-tokens.css">
<link rel="stylesheet" href="dark/dark-tokens.css">   <!-- valgfritt -->
```

Bruk CSS-variablene i stedet for hexverdier. Da følger alt temaet automatisk.

| Fil | Innhold |
|---|---|
| [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) | Full dokumentasjon av det lyse temaet |
| [`design-tokens.css`](design-tokens.css) | CSS-variabler, lyst tema |
| [`dark/DARK-THEME.md`](dark/DARK-THEME.md) | Mørkt tema: palett, kontrasttall, sjekkliste |
| [`dark/dark-tokens.css`](dark/dark-tokens.css) | Overstyringer for mørkt tema |
| [`dark/preview.html`](dark/preview.html) | Sammenligning av begge temaene |
| `assets/` | Logo i to varianter, pluss et dekorikon |
| `index.html` | Nettsiden |

## Tre ting folk pleier å ta feil

1. **Logoen er wordmarket «NoA Connect».** Pilen i `assets/accent-arrow.svg` er
   et dekorativt ikon og skal ikke stå ved siden av navnet.
2. **Lyst tema er standard.** Mørkt er et valgfritt tillegg, ikke en variant man
   velger fritt.
3. **Ingen farge må være lik flaten den ligger på.** Mørkegrønn er *bakgrunnen* i
   mørkt tema, så en diagramserie eller logo i mørkegrønn forsvinner. Bruk
   `--chart-1` til `--chart-4`, som bytter med temaet.

## Kjøre siden lokalt

```bash
npm start        # http://localhost:5180
```

Ingen avhengigheter. Node 18 eller nyere.

## Ikke i dette repoet

`powerpoint template.pptx` (95 MB) og `ripple1–4.mp4` er for tunge for git og
ligger på delt disk. PowerPoint-malen er kilden til tema, fonter og
slide-layouts. Ripple-videoene brukes til intro og overganger, og bare i lyst
tema.
