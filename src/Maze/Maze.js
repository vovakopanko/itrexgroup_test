import React from "react";
import style from "./Maze.module.css"

const Maze = () => {
  const findPath = (maze, point, result) => {
    maze[point.x][point.y] = "visited"; // mark current point as visited

    // check if we've reached exit
    if (
      point.x === 0 ||
      point.y === 0 ||
      point.x + 1 === maze.length ||
      point.y + 1 === maze[point.x].length
    ) {
      return "done";
    }

    // define queue of way options
    const currentQueue = [];

    // check every direction:

    if (maze[point.x + 1][point.y] === "+") {
      currentQueue.push({ x: point.x + 1, y: point.y, direction: "bottom" });
    }

    if (maze[point.x - 1][point.y] === "+") {
      currentQueue.push({ x: point.x - 1, y: point.y, direction: "top" });
    }

    if (maze[point.x][point.y + 1] === "+") {
      currentQueue.push({ x: point.x, y: point.y + 1, direction: "right" });
    }

    if (maze[point.x][point.y - 1] === "+") {
      currentQueue.push({ x: point.x, y: point.y - 1, direction: "left" });
    }

    let latestResult; //Scope

    // run through queue for current point
    currentQueue.forEach((point) => {
      result.push(point.direction);
      latestResult = findPath(maze, point, result);

      // if we got stuck then remove last direction from paths array
      if (latestResult !== "done") {
        result.pop();
      }
    });

    return latestResult;
  };


  const maze = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["+", "+", "#", "+", "0", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ];

  let startPoint;

  for (let x = 0; x < maze.length; x++) {
    for (let y = 0; y < maze[x].length; y++) {
      if (maze[x][y] === "0") startPoint = { x, y };
    }
  }

  const path = [];
  findPath(maze, startPoint, path);

  return (
    <div className={style.maze}>
      <div>
        <p>The way out from Maze:</p>
      </div>
      <div>
        <b> The trajectory to exit the maze: </b> <span className={style.maze_trajectory}>{path.map((m) => (
          <span>{m + " "}</span>
        ))}</span>
      </div>
    </div>
  );
};

export default Maze;
