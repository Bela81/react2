# Színező applikáció, natív redux megvalósítás

Hivalos dokumentácó [link](https://redux.js.org/introduction/getting-started)

Két különböző önálló komponens a redux tool segítségével osztja meg a színdefiníciókat.

+ A gomb kattintásra meghívja a store dispatch eseményét
+ A dispatch-el elküldött színérték rögzül a store state-jében
+ A színes boxot tartalmazó komponens fel van íratkozva a store state-jére, és követi háttérszín változással