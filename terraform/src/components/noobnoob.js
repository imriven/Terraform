import React, { useState, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import produce from "immer";
import { AwesomeButton3, Container, ContainerRow, Para } from "../styles";

const numRows = 50;
const numCols = 50;

class Cell {
  constructor(status, color, type) {
    this.status = status;
    this.color = color;
    this.type = type;
  }
}

// coordinates x,y
const directions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

//this function loops over number of Rows and generates columns filled with 0s for each


const generateCarbonGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () => {
        const r = Math.random();
        let type;
        let color;
        let status = Math.random() > 0.9 ? 1 : 0;
        if (r < 0.2) {
          status = 0;
          type = "Carbon";
          color = "black";
        }
        const n = new Cell(status, color, type);
        return n;
      })
    );
  }
  return rows;
};

function Noob() {
    const [generation, setGeneration] = useState(0);
  //sets initial state to be empty grid
  const [grid, setGrid] = useState(() => {
    setGeneration((old) => (old += 1));
    return generateCarbonGrid();
  });
  // sets state to record whether simulation is running or not
  const [running, setRunning] = useState(false);
  // a way of recording a non state variable
  const runningRef = useRef();
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    //setting Grid - using callback form of set state for safe access to current grid (g -current state)
    setGrid((g) => {
      // produce creates a deep copy of current state which is then modifiable via callback function. This is then returned to set the current state.
      return produce(g, (gridCopy) => {
        //looping over rows and columns
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            if (["Water", "Carbon"].includes(g[i][k].type)) {
              continue;
            }

            let neighbors = 0;
            //eight checks for each cell - directions
            directions.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              //check that we are in bounds
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                if (g[newI][newK].type === "Carbon" && g[i][k].status) {
                  gridCopy[newI][newK] = new Cell(0, "blue", "Water");
                }
                neighbors += g[newI][newK].status; //points to nanobot
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              let n = new Cell(0, undefined, "Nanobot");
              gridCopy[i][k] = n;
            } else if (g[i][k].status === 0 && neighbors === 3) {
              let n = new Cell(1, "purple", "Nanobot");
              gridCopy[i][k] = n;
            }
          }
        }
      });
    });
    //runs function you give it in ms - runSimulation is recursive
    setTimeout(runSimulation, 300);
  }, []);

  const history = useHistory();

  const routeChange = () => {
    history.push("/");
  };

  return (
    <>
      <ContainerRow>
        <Para>Generation: {generation}</Para>
      </ContainerRow>
      <Container>
        <AwesomeButton3
          //toggle
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "stop" : "start"}
        </AwesomeButton3>
        <AwesomeButton3
          onClick={() => {
            //resets state
            setGrid(generateCarbonGrid());
          }}
        >
          clear
        </AwesomeButton3>

        <AwesomeButton3 onClick={routeChange}>HOME</AwesomeButton3>
      </Container>
      {/*display grid*/}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
          justifyContent: "center",
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  const status = grid[i][k].status ? 0 : 1;
                  const color = status ? undefined : "purple";
                  const n = new Cell(status, color, "Nanobot");
                  gridCopy[i][k] = n;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k].color,
                border: "dashed 1px black",
              }}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Noob;
