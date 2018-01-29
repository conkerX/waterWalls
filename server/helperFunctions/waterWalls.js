const waterWalls = (heights) => {
  // set max area to 0 and result to []
  let maxArea = 0;
  let result = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      // max area is the maximum between current max area and the 
      // * (distance between index j and index i)
      let tempMax = Math.max(maxArea, Math.min(heights[i], heights[j]) * (j - i));


      if (tempMax > maxArea) {
        maxArea = tempMax;

        let shortestWall = Math.min(i, j);

        let wallToWall = heights.slice(i + 1, j - 1);

        let wallArea = wallToWall.reduce((acc, val) => {
          return acc + val;
        }, (shortestWall * 2));

        let water = maxArea - wallArea;

        // replace results array with [i, j, water]
        result = [i, j, water];
      }
    }
  }
  // return results array
  return result;
}


module.exports = {
  waterWalls
}