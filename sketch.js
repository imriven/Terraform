make2DArray = (cols, rows) => {
    let array = new Array(cols);
    for (i in array){
        array[i] = new Array(rows)
    }
    return array;
}

let grid;
let cols = 10;
let rows = 10;

setup = () => {

    grid = make2DArray(cols, rows);
    for (i in cols) {
        i += 1
    }
    for (j in rows) {
        j += 1
    }
    grid[i][j] = floor(random(2));

}