# Boodschappenlijst
Simpele applicatie voor je boodschappenlijstje

## Inleiding

In dit document zal ik uitleggen wat ik heb geleerd en welke keuzes ik heb gemaakt voor mijn boodschappenlijst applicatie. Dit project is onderdeel van de opleiding Communication & Multimedia Design in de vorm van een Studieregiepunt.

Om te beginnen is mijn beroepsrol gericht op ontwerpen, maar ik heb wel een achtergrond van frontend development. Ik wil altijd op de hoogte blijven van de nieuwste technieken wat mij als ontwerper beter maakt. Daarom heb ik voor dit project gekozen om een applicatie te bouwen in volledig React. React is een opensource Javascript library en is ontwikkeld door Facebook. Er zijn vele manieren om in React te programmeren en die zal ik ook allemaal bespreken.

## React

React is een javascript library en is ontwikkeld door Facebook. Je kan het voor verschillende platformen gebruiken, maar ook verschillende manieren. Zo is het gebruikelijk om React te draaien via een NodeJS server en alle javascript library te managen via npm. Npm zorgt ervoor dat je gemakkelijk al je javascript libraries kan installeren en beheren. Vaak wordt React geprogrammeerd in combinatie met JSX, een extra javascript library die ervoor zorgt dat je bepaalde functies en syntacs niet hoeft te schrijven. Hierbij heb je wel een compiler nodig en de populairste is Babel. Babel zorgt ervoor dat op het moment dat jij je code opslaat dat hij de JSX code omzet naar normale React en alles bij elkaar voegt in een compacte vorm.

Dit alles heb ik niet gebruikt omdat ik graag de puurheid van React wil leren. Zo laadt ik React.js en ReactDOM.js in via een CDN server. Zo kan ik gemakkelijk aan het werk zonder heel veel programma’s te installeren, zoals NodeJS en npm.

React is een perfect combinatie om je HTML en je data/logica bij elkaar te houden en direct te tonen aan de gebruiker. Bij andere javascript libraries zoals KnockoutJS of Angular, zijn de HTML en Javascript gescheiden zijn. Bij React programmeer je alles veel gestructureerder.

## Applicatie

De applicatie is vrij eenvoudig. Gebruikers kunnen snel en gemakkelijk een boodschappenlijstje bijhouden en daarbij aangeven hoeveel ze van een artikel nodig hebben. Als ze een item al hebben gepakt of in hun mandje hebben kunnen ze hem afvinken. Ook heb ik een functie toegevoegd om het lijstje te printen zodat een gebruiker hem als PDF kan versturen naar iemand anders.

De applicatie werkt zonder server en slaat zijn data op als array in localStorage, zodat het boodschappenlijstje voor een lange tijd bewaard wordt.

## React in de basis

```javascript
class boodschappenlijst extends React.Component {
  render() {
    return React.createElement(“div”, null,”Hello World”)
  }
}

ReactDOM.render(
  React.createElement(boodschappenlijst, null), document.body
);
```
Hier boven staat de basis van mijn applicatie. Zo bestaat je code uit een Class waar de logica van je applicatie in staat die return bepaalde elementen die getoond worden aan de gebruiker. Daarnaast heb je ReactDOM.render die de waardes van de hoofd class toont op het scherm.

```javascript
React.createElement(
  'div',
  { className: 'wrapper' },
  'Dit blok bevat geen items..'
);
```
Met de functie createElement maak je een HTML element aan. Hierbij kan je aangeven wat voor element het is en in dit geval is dat een div. Daarna kan je aangeven wat voor attributen het element kan hebben. Een element kan zichtbaar of onzichtbare attributen bevatten. Zo kan je aangeven wat bijvoorbeeld de key met zijn van een lijst. De key waarde kan je weet gebruiken in de logica van React, maar de gebruiker krijgt deze key nooit te zien.

```javascript
constructor(props) {
  super(props);
  this.state = {
    count: '1'
	};
}
```
Als laatste heb je de constructie functie waar je bepaalde waardes asynchroon kan zetten en die weer terug te halen zijn en die kan koppelen aan een element. Wanneer je deze functie gebruikt en wanneer niet is mijn soms nog wat onduidelijk.

## Uitleg van functies

De applicatie begint bij de render functie en deze bestaat uit een opsomming van elementen. Zo bepaal ik eerst of de array van items wel items bevat en als dat zo is dan ga ik de lijst vorm geven.

Het eerste functionele element is de check button. Dit element is een div en verwijst met een klik naar de functie handleCheck. In deze functie kijkt hij in de array van items of een item checken heeft en dat verwerkt hij terug als className voor het element. Tweede functionele element is de count en het up en down vote van de count. Het element count kijkt puur naar de array hoeveel de count is. De up en down vote buttons zijn gekoppeld aan een functie via een klik. Die functies brengen de count omhoog of omlaag als de count niet lager is als 1. Dan volgt er een element met de naam van het item en vervolgens een knop om de dit alles te verwijderen.

Dan verder in de render functie staat de rest van de applicatie. Zoals de hoofd titel, een invoerveld voor nieuwe items, een lijst van items en een print knop. De lijst van items vult hij door te kijken naar de inhoud van de array. Hij loopt met de functie map door array heen en vult deze met de gedetineerde listItems.

Het enige wat nog speciaal is aan de applicatie is het invoer veld. Op het moment dat het invoerveld veranderd, geeft de functie handleChange dit door aan de constructor die de value in de gaten houdt van het invoerveld. Om het moment dat de gebruiker op enter drukt, voert het invoerveld een andere functie uit handleSubmit. In deze functie voegt hij een item toe boven aan de array en vult deze met de value van het invoerveld die wordt bij gehouden in de constructor.

Voor de rest bij elke actie die invloed heeft op de array sla ik de array op in LocalStorage en voer in een trucje uit om de render functie te activeren. Ik kon geen goede functie vinden die de render functie ging uitvoeren met een onChange, dus heb ik dit trucje gevonden via Stackoverflow.

```javascript
var event = new Event('input', { bubbles: true });
input.dispatchEvent(event);
```

Hij vuurt een nep trigger van een input die niet bestaat af en verwijderd hem daarna weer. Hierdoor krijgt React een change te zien en dan voert hij de render functie weer uit.

Als laatste functie heb je de print functie. Als een gebruiker op de knop drukt voert de standaard print functie uit die inbouwt zich in de browser.

## Conclusie

Persoonlijk vind ik de basis van React erg prettig om te gebruiken. Zo kan gemakkelijk elementen maken en deze direct koppelen met een functie waar hij de data vandaan haalt. Ik zou zelf niet zo snel een applicatie in React gaan bouwen omdat ik vind dat het soms nogal omslagtig te werk gaat.

Ik wilde een sorteer functie toevoegen aan mijn applicatie, maar kreeg het maar niet goed werkend. De plugin/libary die ik gebruikte was geschreven in kale javascript en het visueel werkbaar krijgen ging goed, maar op het moment dat React met de render functie er weer overheen ging ging de boel helemaal in de war. Ik had de sorteer functie netjes geschreven zodat de array keys werden veranderd naar de juiste volgorde, maar op een rare manier kon React daar niet goed mee overweg en gebruikte de oude keys van array die hij in zijn geheugen had.

Een lang verhaal kort te maken. React is een goede stap, maar voor mij is het soms iets te lastig om controle over te krijgen. Misschien in de toekomst zal ik React nog eens gaan gebruiken. De tijd zal het leren.

## Bronnen

**Create a Simple To-Do App With React**  
https://scotch.io/tutorials/create-a-simple-to-do-app-with-react#toc-prerequisites

**To-Do List**  
https://codepen.io/codebeast/pen/PzVyRm 

**Babel**  
https://babeljs.io

**React Documentation**  
https://facebook.github.io/react/docs/

**React (JavaScript library)**  
https://en.wikipedia.org/wiki/React_(JavaScript_library) 

**Local Storage And How To Use It On Websites**  
https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/ 

**Iterating & Rendering with Loops in React components**  
https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react 
