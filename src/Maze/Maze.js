import React, { useState } from "react";

const findPath = (maze, point, result) => {
  maze[point.x][point.y] = "visited"; // mark current point as visited

  // check if we've reached exit
  if (
    point.x === 0 ||
    point.y === 0 ||
    point.x + 1 === maze.length ||
    point.y + 1 === maze[point.x].length
  ) {
    return true;
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

  let wayOutFound; //Scope

  // run through queue for current point
  currentQueue.forEach((point) => {
    result.push(point.direction);
    wayOutFound = findPath(maze, point, result);

    // if we got stuck then remove last direction from paths array
    if (!wayOutFound) {
      result.pop();
    }
  });

  return wayOutFound;
};

const Maze = () => {
  // todo: setMaze from user input
  const [maze, setMaze] = useState([
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["+", "+", "#", "+", "0", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ]);

  const copy = maze.map((row) => {
    return row.slice();
  });

  let startPoint;

  for (let x = 0; x < maze.length; x++) {
    for (let y = 0; y < maze[x].length; y++) {
      if (maze[x][y] === "0") startPoint = { x, y };
    }
  }

  const path = [];
  findPath(copy, startPoint, path);

  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <table>
        {maze.map((row, i) => {
          return (
            <tr key={i} style={{ fontSize: "20px", fontWeight: "bold" }}>
              {row.map((column, j) => {
                return (
                  <td
                    key={j}
                    style={{ padding: "5px", border: "1px solid black" }}
                  >
                    {column}{" "}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
      <div>
        {path && <span>The way out from Maze:</span>}
        {!path && <span>There is no way out from Maze</span>}
      </div>
      <div>
        {path.map((m) => (
          <span style={{ fontWeight: "bold" }}>{m + " "}</span>
        ))}
      </div>
    </div>
  );
};

export default Maze;
