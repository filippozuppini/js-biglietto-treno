
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.






//Input utente (n_chilometri)

const n_chilometri = prompt('Quanti chilometri vuoi percorrere?');
const eta_passeggero = prompt('Quanti anni hai?')

//Costo del biglietto 0.21€*km

const costo_biglietto = n_chilometri*0.21

const sconto_giovani = 0.80
const sconto_anziani = 0.60

let prezzo_giovani
let prezzo_anziani


if (eta_passeggero < 18) {
    
    //Se eta_passeggero < 18 allora sconto 20%
    prezzo_giovani = costo_biglietto*sconto_giovani
    console.log("Costo del biglietto prezzo giovani:" + prezzo_giovani.toFixed(2))
    
} else if (eta_passeggero > 65){

    //Se eta_passeggero > 65 allora sconto 40%
    prezzo_anziani = costo_biglietto*sconto_anziani
    console.log( "Costo del biglietto prezzo over 65:" + prezzo_anziani.toFixed(2))

} else {
    // il passeggero é maggiorenne e meno di 65 anni quindi paga il prezo pieno
    console.log("Costo del biglietto:" + costo_biglietto.toFixed(2))
}


