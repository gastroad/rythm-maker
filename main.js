const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
let gameID

canvas.width = 600
canvas.height = 760
const lineX = [100, 205, 310, 415]
const keyList = ['KeyD', 'KeyF', 'KeyJ', 'KeyK']
let song = [
    [0, 60, 90, 120],
    [0, 80, 90, 120],
    [0, 60, 70, 120],
    [0, 30, 90, 120]
]

let timer = 0
let noteSpeed = 20

class Note {
    constructor(x = 100, y = 10, width = 100, height = 20, color = 'red') {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Line {
    constructor(line) {
        this.noteList = []
        this.keyFlag = false
        this.line = line
        this.timer = 0
    }
    drawNote() {
        this.noteList.forEach((note, index, array) => {
            if (note.y > 760) {
                array.splice(index, 1)
                console.log('miss')
            }
            if (this.keyFlag && (Math.abs(array[0].y - 700) < 300)) {
                if ((Math.abs(array[0].y - 700) < 30)) {
                    console.log("per")
                } else if ((Math.abs(array[0].y - 700) < 50)) {
                    console.log("gre")
                } else {
                    console.log('miss')
                }
                array.splice(index, 1)
            }
            note.y = note.y + noteSpeed
            note.draw()
        })
    }
    drawKey() {
        if (!this.keyFlag) return
        const note = new Note(lineX[this.line], 700, 100, 20, 'blue')
        note.draw()
    }
    makeNote = () => {
        if (!song[this.line].length) return

        if (song[this.line][0] <= timer) {
            const note = new Note(lineX[this.line])
            this.noteList.push(note)
            song[this.line].shift()
        }
    }
    handleKeyFlag(nextFlag) {
        this.keyFlag = nextFlag
    }
    handleTimeimg(number) {
        this.timer = number
    }
}

const lineList = Array.from({ length: 4 }, (_, index) => new Line(index))

const frame = () => {
    gameID = requestAnimationFrame(frame)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    timer++
    lineList.forEach((line) => {
        line.makeNote()
        line.drawNote()
        line.drawKey()
        line.handleTimeimg(timer)
    })
}

const bindKeyboard = () => {
    document.addEventListener('keydown', (e) => {
        lineList.forEach((line, index) => {
            if (e.code === keyList[index]) {
                line.handleKeyFlag(true)
            }
        })
    })
    document.addEventListener('keyup', (e) => {
        lineList.forEach((line, index) => {
            if (e.code === keyList[index]) {
                line.handleKeyFlag(false)
            }
        })
    })
}
bindKeyboard()


let fps = 0;
let lastFrameTime = performance.now();

function updateFPS() {
    let currentTime = performance.now();
    let deltaTime = currentTime - lastFrameTime;
    lastFrameTime = currentTime;
    fps = Math.round(1000 / deltaTime);
    document.querySelector('#hello').innerHTML = `Current FPS: ${fps}`
    requestAnimationFrame(updateFPS);
}

updateFPS();
document.querySelector('#play').onclick = () => {
    frame()
}
document.querySelector('#reset').onclick = () => {
    cancelAnimationFrame(gameID);
    song = [
        [0, 60, 90, 120],
        [0, 80, 90, 120],
        [0, 60, 70, 120],
        [0, 30, 90, 120]
    ]
    timer = 0
}