// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Italo",
    photo: "https://picsum.photos/200/300",
    scores: [3, 1, 5, 2, 3]
  },
  {
    name: "PJ",
    photo: "https://picsum.photos/200/300",
    scores: [3, 4, 2, 4, 4]
  },
  {
    name: "Omar",
    photo: "https://picsum.photos/200/300",
    scores: [2, 3, 5, 5, 2]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
