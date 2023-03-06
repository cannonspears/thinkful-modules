/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park) => {
    return park.location.state === state;
  });
}

function getWishlistParksForUser(parks, users, userName) {
  const wishList = [];
  users[userName].wishlist.forEach((wishListId) => {
    wishList.push(
      parks.find((park) => {
        return wishListId === park.id;
      })
    );
  });
  return wishList;
}

function userHasVisitedAllParksInState(parks, users, state, userName) {
  const visitedParks = users[userName].visited;
  const filteredParks = getParksByState(parks, state);
  const result = filteredParks.every((park) => {
    return visitedParks.includes(park.id);
  });
  return result;
}

function userHasVisitedParkOnWishlist(users, userNameA, userNameB) {
  const userNameAVisited = users[userNameA].visited;
  const userNameBWishlist = users[userNameB].wishlist;
  return userNameAVisited.some((parkId) => {
    return userNameBWishlist.includes(parkId);
  });
}

function getUsersForUserWishlist(users, userName) {
  const result = [];
  const userNameWishlist = users[userName].wishlist;
  for (const userNameKey in users) {
    if (userHasVisitedParkOnWishlist(users, userNameKey, userName) === true) {
      result.push(userNameKey);
    }
  }
  return result;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
