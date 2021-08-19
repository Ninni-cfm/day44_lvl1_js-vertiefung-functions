# day44_lvl1_js-vertiefung-functions

**CodeFlow Übung lev1_1: Arrow Function - Aufgabenstellung**

Arrow Functions ermöglichen es uns, eine kürzere Funktions-Syntax zu schreiben.

Schreibe die Intro-Funktion und gib bitte nur Hello World in der Konsole aus.

        function intro() {
            console.log("Hello World)";
        }

Hier verkürzen wir unseren Code mit Hilfe von einer Arrow Function.

-   Ändere die Intro-Funktion auf die Arrow-Funktion.

        intro = () => {
            console.log("Hello World");
        }

Wenn die Funktion nur eine Statement hat und das Statement einen Wert zurückgibt, können die <b>Klammern</b> entfernen werden.

-   Verkürze die Arrow Funktion.

        intro = () => console.log("Hello World");

<b>Lese zuerst darüber</b>. <a href="https://blog.codeanalogies.com/">CodeAnalogies Arrow Function</a>.

Konvertiere Funktionen aus früheren Aufgaben, um die Arrow-Functions zu verinnerlichen.

---

**CodeFlow Übung lev1_2: functions - Aufgabenstellung**

-   Schreibe eine Funktion, die "Hallo" in deinem Browser (console / HTML) anzeigt.
-   Schreibe eine Funktion, die die Summe von zwei Zahlen in deinem Browser (console / HTML) anzeigt. (x=2; y=3)
-   Schreibe eine Funktion, die die Multiplikation von zwei Zahlen als Alert ausgibt. (x=2; y=3)
-   Schreibe eine Funktion, die einen Parameter nimmt und den Typ dieses Elements in deinem Browser (console / HTML) anzeigt.

        Teste: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]

Dann konvertiere die normalen Funktionen in Arrow Funktionen.

---

**CodeFlow Übung lev1_4: function hero - Aufgabenstellung**

Deklariere die Funktion hero() mit <b>drei Parametern</b> heroName, heroPower, heroEnemy und im Funktionskörper {}:

-   Deklariere drei Variablen name, power und enemy.
-   Weise den Variablen dann diese Werte zu:
    -   Mein Lieblingsheld aus Marvel ist:
    -   Er/Sie hat die Fähigkeit:
    -   Sein/Ihr größter Gegner ist:
-   Füge die passenden Parameter in die Variablen ein.
-   Gib <b>name</b> + <b>power</b> + <b>enemy</b> in der Konsole aus.
-   Ruf deine Funktion auf.
-   Übergib Argumente für deine*n Lieblingsheld*in und gib diese in der Konsole aus.

---

**CodeFlow Übung lev1_6: function vs. variable - Aufgabenstellung**

In dieser Übung werden wir die Funktion mit der Variable vergleichen.

-   Deklariere die Funktion <b>returnOne()</b> und in Funktionskörper {}:
-   Schreibe <a href=https://www.w3schools.com/jsref/jsref_return.asp>return</a> <b>1;</b> in den Funktionskörper
-   Deklariere die Variable <b>x</b> mit Wert 1;
-   Deklariere die Variable <b>y</b> mit Wert <b>returnOne();</b>
-   Füge bitte ein.

        if (x === y) {
            console.log("Wird das gedruckt?");
        }

-   SchreibeIn diesem Code wird geschrieben: Wenn <b>x</b> gleich <b>y</b> ist, dann wird in der Konsole “Wird das gedruckt?” angezeigt. Wenn x gleich y nicht ist, dann es wird nicht angezeigt.

Am Beispiel dieser Aufgabe lernst du, was der Unterschied zwischen Variablen und Funktionen ist.

---

**CodeFlow Übung lev1_7: function double - Aufgabenstellung**

-   Erstelle eine Funktion
-   Diese soll einen Parameter haben
-   Multipliziere den Parameter mit 2
-   Gib das Ergebnis mit Return zurück
-   Schau dir das Ergebnis in der Konsole an!
-   Versuche es weiter, bis du es schaffst. Viel Erfolg!

<b>Hinweis:</b>

-   <a href=https://www.w3schools.com/js/js_function_parameters.asp>Function with Parameter</a>

---

**CodeFlow Übung lev1_8: function your age - Aufgabenstellung**

Eine Funktion zur Berechnung deines Alters.

-   Definiere eine Funktion, die einen Parameter hat: <b>yearBorn></b>.
-   In Funktionskörper nutze <b>return</b>, um dein Alter zu berechnen und zurückzugeben.
-   Gib dein Alter in der Konsole aus.

Schreibe eine Funktion, die dein Alter mit dem Alter eines anderen Teilnehmers vergleicht.

-   Definiere eine Funktion die zwei Parameter hat.
-   Im Funktionskörper:
    -   Benutze die Parameter um die Differenz eurer Alter zu berechnen.
    -   Schreibe Code <b>let alterDiff = alter1 - alter2;></b>
    -   Schreibe <b>return alterDiff</b>.
-   Gib die Altersdifferenz in der Konsole aus.

---

**CodeFlow Übung lev1_9: function introduction - Aufgabenstellung**

Schreibe eine Funktion, die dich vorstellt und einen Text über dich ausgibt:

-   mit den Parametern:
    -   vorname, nachname, geburtsort, alter, wohnort
-   und der Funktionskörper soll in der Konsole folgendes ausgeben (nutze String concatenation):

    <b>"string text " + Parameter + " string text".</b>

    -   Mein Name ist Baschar Shaheen.
    -   Ich bin in Syrien geboren.
    -   Ich lerne Coden bei SuperCode.
    -   Ich bin 34 Jahre alt.
    -   Ich wohne in Düsseldorf.

-   Vergiss nicht, die Funktion aufzurufen mit deinen Daten/Argumenten.

---

_Source:_ https://github.com/Ninni-cfm/day44_lvl1_js-vertiefung-functions

_Demo:_ https://ninni-cfm.github.io/day44_lvl1_js-vertiefung-functions/
