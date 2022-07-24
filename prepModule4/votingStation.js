const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStation = "";
  for(let i = 0; i < stations.length; i++) {
    let station = stations[i];
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      goodStation += station[0] + "\n";
    }
  }
  return goodStation; 
}

console.log(chooseStations(stations));