import { MazeMaker } from "@/components/engine/MazeMaker"

export default function mazemaker() {
  const mazeData = {
    "id": "1754d99c-20db-40bc-90ca-33bb7aa562d5",
    "title": "1-1",
    "name": "coldpotato",
    "mazeSize": {
      "row": 10,
      "col": 10
    },
    "mazeData": [
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0
      ]
    ],
    "start": {
      "x": 0,
      "y": 0
    },
    "end": {
      "x": 9,
      "y": 9
    },
    "resolvedPath": [
      {
        "x": 0,
        "y": 1
      },
      {
        "x": 0,
        "y": 2
      },
      {
        "x": 0,
        "y": 3
      },
      {
        "x": 0,
        "y": 4
      },
      {
        "x": 0,
        "y": 5
      },
      {
        "x": 0,
        "y": 6
      },
      {
        "x": 1,
        "y": 6
      },
      {
        "x": 2,
        "y": 6
      },
      {
        "x": 3,
        "y": 6
      },
      {
        "x": 3,
        "y": 7
      },
      {
        "x": 3,
        "y": 8
      },
      {
        "x": 3,
        "y": 9
      },
      {
        "x": 4,
        "y": 9
      },
      {
        "x": 5,
        "y": 9
      },
      {
        "x": 6,
        "y": 9
      },
      {
        "x": 7,
        "y": 9
      },
      {
        "x": 8,
        "y": 9
      },
      {
        "x": 9,
        "y": 9
      }
    ]
  }

  return (
    <div>
      <MazeMaker mazeData={mazeData} />
    </div>
  )
}