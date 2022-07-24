const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const judgeVegetable = function(vegetables, metric) {
  
  let topVeggie = vegetables[0];
  let winner = 0;
  
  for(let i = 1; i < vegetables.length; i++){
    let contestant = vegetables[i];
    if(contestant[metric] >= topVeggie[metric]) {
      winner = i;
      topVeggie = vegetables[i];
    } 
  }
  vegetables = vegetables[winner];
  return vegetables.submitter;

}
console.log(judgeVegetable(vegetables, metric));

