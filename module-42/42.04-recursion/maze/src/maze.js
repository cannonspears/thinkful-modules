/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

function mazeSolver(maze, currentPosition = [0, 0], currentPath = "") {
  const [row, col] = currentPosition;
  const numRows = maze.length;
  const numCols = maze[0].length;

  // Check if current position is outside the boundaries or blocked
  if (row < 0 || row >= numRows || col < 0 || col >= numCols || maze[row][col] === "*") {
    return false;
  }

  // Check if current position is the exit
  if (maze[row][col] === "e") {
    return currentPath;
  }

  // Mark the current position as visited
  maze[row][col] = "*";

  // Recursively explore neighboring positions
  const upPath = mazeSolver(maze, [row - 1, col], currentPath + "U");
  if (upPath !== false) {
    // Up
    return upPath;
  }
  const downPath = mazeSolver(maze, [row + 1, col], currentPath + "D");
  if (downPath !== false) {
    // Down
    return downPath;
  }
  const leftPath = mazeSolver(maze, [row, col - 1], currentPath + "L");
  if (leftPath !== false) {
    // Left
    return leftPath;
  }
  const rightPath = mazeSolver(maze, [row, col + 1], currentPath + "R");
  if (rightPath !== false) {
    // Right
    return rightPath;
  }

  // Mark the current position as unvisited (backtrack)
  maze[row][col] = " ";

  return false;
}

module.exports = mazeSolver;
