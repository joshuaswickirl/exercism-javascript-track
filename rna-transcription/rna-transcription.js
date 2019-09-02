// DNA to RNA complement
const complements = {
  '': '',
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}
export const toRna = ( dna_sequence ) => { 
  const rna = ((dna_sequence.split('')).map( dna => complements[dna] )).join(''); 
  return rna; 
};
