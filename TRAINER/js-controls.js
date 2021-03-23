        // Aufgabe 1
        // Gebe in die Konsole dreimal das heutige Datum mit Hilfe einer Schleife
        // let date = new Date()
        // Aufgabe 2
        // let elements = ['Kupfer', 'Eisen', 'Aluminium', 'Platinum']
        // Iterriere das Array und gebe die Länge von den Wörtern in einem Output aus
        let elements = ['Kupfer', 'Eisen', 'Aluminium', 'Platinum']
        for (const arrayElement of elements) {
            // debugger
            let wordLength = arrayElement.length;
            // debugger
            let oldContent = document.getElementById('ausgabe').value
            let newContent = oldContent + ' ' + wordLength
            document.getElementById('ausgabe').value = newContent           
        }