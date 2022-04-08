import fs from 'fs';

class Journal {
    constructor () {
        this.entries = {};
    }
    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index]
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    // Do not add more than one purpose to a class. These
    // should be in a seperate class.
    // save(filename) {
    //     fs.writeFileSync(filename, this.toString())
    // }

    // load(filename) {
    //     //
    // }

    // loadFromUrl(url) {
    //     //
    // }
}

class PersistenceManager {
    preprocessor() {
        //
    }
    saveToFile(journal, filename) {
        // SAVE FILE
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I smiled.');
j.addEntry('I slept');
console.log(j.toString())

let p = PersistenceManager();
p.saveToFile('filename.txt', j);

// Separation of concerns