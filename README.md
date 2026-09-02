# Recepty – kuchyňská aplikace

Jeden statický web bez serveru. Data (recepty, jídelníčky, API klíč) zůstávají jen v prohlížeči tabletu.

## Zprovoznění zdarma (GitHub Pages)
1. Vytvoř nový veřejný nebo soukromý repozitář na GitHubu a nahraj do něj všechny soubory z této složky.
2. Settings → Pages → Source: „Deploy from a branch“, branch `main`, složka `/ (root)`.
3. Za minutu běží na `https://<uzivatel>.github.io/<repozitar>/`.
4. Na tabletu otevři adresu v Chromu → menu → „Přidat na plochu“ (Android) / Sdílet → „Přidat na plochu“ (iPad).

API klíč do repozitáře nikdy nepatří – zadává se až v aplikaci v Nastavení.

## Gemini
- Klíč: aistudio.google.com → Get API key (bezplatný tarif, bez karty).
- V Nastavení klepni na „Ověřit klíč a načíst modely“ a vyber Flash model – ten čte fotky i text a stačí na něj bezplatný tarif.
- Nový recept: vyfoť stránku z knížky (jde vybrat víc fotek najednou), aplikace ji přepíše do polí. Obrázek hotového jídla vkládáš ručně.

## Aktualizace aplikace
Po změně `index.html` zvedni `VERSION` v `sw.js` (např. `recepty-v2`), aby si tablet stáhl novou verzi.

## Záloha
Nastavení → „Stáhnout zálohu (JSON)“. Obnova tamtéž. Dělej ji občas – data žijí jen v tabletu.
