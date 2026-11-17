# Recepty

Aplikace pro tablet a mobil: recepty, týdenní jídelníček a nákupní seznam.
Běží jako statická stránka, data zůstávají v prohlížeči daného zařízení.
Přepis receptů z fotky a sestavení jídelníčku zajišťuje Gemini – API klíč se
zadává v Nastavení a ukládá se jen v tom zařízení.

## Nasazení na GitHub Pages
1. Nahraj všechny soubory z této složky do repozitáře.
2. Settings → Pages → Deploy from a branch, branch `main`, složka `/ (root)`.
3. Na tabletu i telefonu otevři adresu a dej „Přidat na plochu“.

## Gemini
- Klíč: aistudio.google.com → Get API key.
- V Nastavení klepni na „Ověřit klíč a načíst modely“ a vyber Flash nebo
  Flash-Lite model – ty umí číst fotky i text.
- Google modely čas od času ruší. Když se to stane, aplikace si přečte
  z chybové hlášky, čím ho nahradit, sama se přepne a požadavek zopakuje;
  v Nastavení pak uvidíš nový model.
- Bezplatný tarif má nízké limity (u některých modelů jednotky požadavků za
  minutu a desítky za den). Při chybě 429 počkej chvíli, nebo zapni v AI Studiu
  platby – u tohoto používání jde o haléře za recept.

## Práce s aplikací
- **Nový recept** z fotky stránky v knížce (i víc stránek najednou) nebo
  z vloženého textu. Obrázek hotového jídla se vkládá ručně.
- **Doba přípravy, kalorie a cena na porci** se při přepisu předvyplní – čas
  se opíše z receptu, pokud je uvedený, kalorie a cenu Gemini odhadne
  z ingrediencí. Všechno jde ručně přepsat přes „Upravit“.
  U dříve uložených receptů je v detailu tlačítko **„Dopočítat čas, kalorie
  a cenu“**; objeví se, dokud některý z údajů chybí.
- **Skupiny ingrediencí**: řádek zakončený dvojtečkou („Na těsto:“) zahájí
  novou skupinu.
- **Jídelníček** se sestavuje z receptů se štítkem „hlavní jídlo“; u každého
  dne se nastavuje počet porcí.
- **Nákupní seznam** sčítá suroviny přes jednotky (0,5 kg + 500 g = 1 kg),
  vynechává běžné zásoby ze seznamu „Co nekupuji“ v Nastavení a odškrtnuté
  položky řadí na konec.
- **Export do PDF** v detailu receptu – v dialogu tisku vyber „Uložit jako PDF“.
- **Záloha**: Nastavení → „Stáhnout zálohu (JSON)“. Recepty žijí jen v daném
  zařízení, zálohu si dělej pravidelně.

## Aktualizace
Po úpravě `index.html` zvedni `VERSION` v `sw.js` (teď `recepty-v12`).
Zařízení si novou verzi stáhnou při druhém spuštění.

## Poznámka ke kaloriím a ceně
Obojí je odhad jazykového modelu z ingrediencí, ne výpočet z nutriční databáze
ani z aktuálních cen v obchodech. Ber to jako orientační údaj a kde na tom
záleží, oprav si ho ručně.
