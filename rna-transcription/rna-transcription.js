// DNA to RNA complement
const complements = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}
export const toRna = ( dna_sequence ) => dna_sequence.replace( /[GCTA]/g, nucleotide => complements[nucleotide]);
