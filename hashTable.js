function hashStringToInt(s, tableSize) {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable {
    table = new Array(3);
    numItems = 0;

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                });
            }
        })
        this.table = newTable;
    };

    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        if (loadFactor > .8) {
            this.resize();
        }
        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];
        }
    };

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            return null;
        }

        return this.table[idx].find(x => x[0] === key)[1];
    };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'boo');
myTable.setItem('DOB', '1/2/3');
myTable.setItem('city', 'victoria');
myTable.setItem('country', 'canada');
myTable.setItem('lastName', 'smith');
console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('DOB'));
console.log(myTable.getItem('city'));
console.log(myTable.getItem('country'));
console.log(myTable.table.length);