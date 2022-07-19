const smartGarbage = function (trash, bins) {
  const garbage = { waste : 0, recycling : 0, compost : 0 }; 

  garbage.waste += bins.waste;
  garbage.recycling += bins.recycling;
  garbage.compost += bins.compost;

  garbage[trash] += 1;

  return garbage;
};

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
