const arr = [
  {
    name: "Genji",
    type: "DPS",
    weapon: "Shuriken",
    ultimate: "Dragonblade",
    numbers: [1, 2, 3, 4],
  },

  {
    name: "Soldier76",
    type: "DPS",
    weapon: "Heavy",
    ultimate: "Tactical Visor",
    numbers: [5, 6, 7, 8],
  },

  {
    name: "Sigma",
    type: "Tank",
    numbers: [9, 10, 11, 12],
    weapon: "Hyperspheres",
    ultimate: "Gravitic Flux",
  },
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[2]);

arr.forEach((arr) => console.log(arr.numbers));
