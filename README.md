# HARJUTUS - UI TESTIMINE

React rakenduse kood on võetud [teambit/react-demo-app](https://github.com/teambit/react-demo-app) repost.

## PROJEKTI ÜLESSEADMINE

### Nõuded

Kui sul pole veel, siis paigalda järgmised asjad oma arvutisse.

- [Node >= 10.16 and npm >= 5.6](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Ülesseadmise sammud

Eeldan, et käsureal on olemas töötavad käsud `npm` ja `yarn`.

- Jooksutage käsk `yarn install` projekti juurkaustas, et laadida alla vajalikud moodulid.
- Käivitage rakendus `yarn start`
- Käivitage rakendus `yarn cypress`

*TÄHELEPANU!* UI testide jooksutamiseks ava kaks käsurida, millega ole juurkaustas. Ühe käsurea peal käivitad rakenduse `yarn start` ja teise peal käivitad Cypress'i `yarn cypress`. Caypress külastab töötavat rakendust ja püüab teda kasutada vastavalt kirjutatud testijuhule.

### Käsud

- `yarn start` käivitab rakenduse
- `yarn cypress` avab testide käivitamiseks eraldi akna

## ÜLESANNE

Tänapäeval pole vaja isegi UI testimist teha alati käsitsi. Kasutame selleks parem sellist tööriista nagu [Cypress](https://www.cypress.io/). Kirjelda kasutaja käitumine koodi kujul ja enne rakenduse uute versioonide üles panekut saad lihtsalt paluda arvutil ise järgi proovida, kas kõik nupud ja funktsionaalsused käituvad endiselt ootuspäraselt.

`cypress/integration/todo-list.spec.js` failis on loodud üks test.

Kasutades [Cypress dokumentatsiooni](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file) palun loo sinna juurde veel üks test (`it('testi nimi', () => { .. })`), mis lisab _todo_ nimekirja kolm rida ning eemaldab neist kaks.
