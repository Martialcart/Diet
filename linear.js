const m1 = [
    [10,2,32,44,5,446,7,28,9],
    [99999999,8,7,6,5,4,3,2,1]
];

let m2 = [
    [5,3,6,3],
    [6,3,2,3],
    [2,3,6,3]
];

function solve(matrix) {
   solve_lower_triangle(matrix);
   solve_upper_triangle(matrix);    
   return matrix;
}
/*negative numbers will get wrong results*/
function solve_lower_triangle(matrix) {
    for (let diagonal = 0; diagonal < matrix.length; diagonal++) {
        //get divider
        divider = matrix[diagonal][diagonal];      
        //divide row by divider
        for (let x = diagonal; x < matrix[diagonal].length; x++) {
            matrix[diagonal][x] /= divider;     
        }
        //turn rows below into zero's
        for (let y = diagonal + 1; y < matrix.length; y++){
          subtrakt_main_row(matrix, y, diagonal);        
        }   
        print(matrix);     
    }
}

function subtrakt_main_row(matrix, y, m_row) {
    for (let x = m_row; x < matrix.length; x++) {
        matrix[y][x] = matrix[y][x] - (matrix[m_row][x] * matrix[y][x]);
    }
}

function solve_upper_triangle(matrix) {

}

function print(matrix) {
    let str = "";
    for (y = 0; y < matrix.length; y++) {
        str = "";
        for (let x = 0; x < matrix[y].length; x++) {
            str += "\t" + matrix[y][x]; // collect current row to string
        }
        console.log(str + ""); // print current row
    }
}