const arr = [
  {
    name: "Genji",
    type: "DPS",
    weapon: "Shuriken",
    ultimate: "Dragonblade",
    numbers: [1, 22, 3, 4],
  },

  {
    name: "Soldier76",
    type: "DPS",
    weapon: "Heavy Pulse Rifle",
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

arr.forEach((obj) => {
  console.log(obj.name);
  console.log(obj.type);
  console.log(obj.weapon);
  console.log(obj.ultimate);
  obj.numbers.forEach((num) => {
    console.log(num);
  });
});
const result = arr.filter((obj) => obj.type === "DPS");
