export class Matrix {
  constructor(input) {
    this.matrix = input.split("\n").map( row => row.split(" ").map( value => parseInt(value)));
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return Object.keys(this.matrix[0]).map(col => this.matrix.map(row => row[col]));
  }
}
