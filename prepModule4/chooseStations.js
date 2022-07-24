function chooseStations(stations) {
  let goodStation = "";
  for (i = 0; i < votingStations.length; i++) {
    let station = stations[i];
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community center")) {
      goodStation += station[0] + "\n";
    }
    return goodStation;
  }
}
