const keyboardCanvas = document.getElementById('keyboardCanvas');
const keyboardCtx = keyboardCanvas.getContext('2d');

const defaultSize = 42
const keyboardLayout = [
    [
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "ESC", label: 'ESC', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F1", label: 'F1', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F2", label: 'F2', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F3", label: 'F3', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F4", label: 'F4', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F5", label: 'F5', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F6", label: 'F6', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F7", label: 'F7', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F8", label: 'F8', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F9", label: 'F9', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F10", label: 'F10', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F11", label: 'F11', },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, code: "F12", label: 'F12', }
    ],
    [
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Backquote", code: "Backquote" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit1", code: "Digit1" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit2", code: "Digit2" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit3", code: "Digit3" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit4", code: "Digit4" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit5", code: "Digit5" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit6", code: "Digit6" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit7", code: "Digit7" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit8", code: "Digit8" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit9", code: "Digit9" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Digit0", code: "Digit0" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Minus", code: "Minus" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Equal", code: "Equal" },
        { x: 0, y: 0, width: defaultSize + 52, height: defaultSize, label: "Backspace", code: "Backspace" },
    ],
    [
        { x: 0, y: 0, width: defaultSize + 26, height: defaultSize, label: "Tab", code: "Tab" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyQ", code: "KeyQ" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyW", code: "KeyW" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyE", code: "KeyE" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyR", code: "KeyR" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyT", code: "KeyT" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyY", code: "KeyY" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyU", code: "KeyU" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyI", code: "KeyI" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyO", code: "KeyO" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyP", code: "KeyP" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "BracketLeft", code: "BracketLeft" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "BracketRight", code: "BracketRight" },
        { x: 0, y: 0, width: defaultSize + 25, height: defaultSize, label: "Backslash", code: "Backslash" },
    ], [
        { x: 0, y: 0, width: defaultSize + 40, height: defaultSize, label: "CapsLock", code: "CapsLock" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyA", code: "KeyA" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyS", code: "KeyS" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyD", code: "KeyD" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyF", code: "KeyF" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyG", code: "KeyG" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyH", code: "KeyH" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyJ", code: "KeyJ" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyK", code: "KeyK" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyL", code: "KeyL" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Semicolon", code: "Semicolon" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Quote", code: "Quote" },
        { x: 0, y: 0, width: defaultSize + 58, height: defaultSize, label: "Enter", code: "Enter" },
    ], [
        { x: 0, y: 0, width: defaultSize + 68, height: defaultSize, label: "ShiftLeft", code: "ShiftLeft" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyZ", code: "KeyZ" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyX", code: "KeyX" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyC", code: "KeyC" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyV", code: "KeyV" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyB", code: "KeyB" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyN", code: "KeyN" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "KeyM", code: "KeyM" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Comma", code: "Comma" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Period", code: "Period" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Slash", code: "Slash" },
        { x: 0, y: 0, width: defaultSize + 77, height: defaultSize, label: "ShiftRight", code: "ShiftRight" },
    ], [
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "ControlLeft", code: "ControlLeft" },
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "MetaLeft", code: "MetaLeft" },
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "AltLeft", code: "AltLeft" },
        { x: 0, y: 0, width: defaultSize + 262, height: defaultSize, label: "Space", code: "Space" },
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "AltRight", code: "AltRight" },
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "MetaRight", code: "MetaRight" },
        { x: 0, y: 0, width: defaultSize, height: defaultSize, label: "Fn", code: "Fn" },
        { x: 0, y: 0, width: defaultSize + 12, height: defaultSize, label: "ControlRight", code: "ControlRight" },
    ]]
function adjustKeyboardLayout(keyboardLayout, defaultSize) {
    return keyboardLayout.reduce((acc, row) => {
        let currentX = 0;
        const newRow = row.map(key => {
            if (key.code === 'F1') { currentX += defaultSize }
            if (key.code === 'F5' || key.code === 'F9') { currentX += 27 }
            const newKey = { ...key, x: currentX, y: acc.currentY };
            currentX += key.width + 5;
            return newKey;
        });
        acc.layout.push(newRow);
        if (acc.layout.length === 1) { acc.currentY += 27 }
        acc.currentY += (row[0]?.height || defaultSize) + 5;
        return acc;
    }, { currentY: 0, layout: [] }).layout;
}
const newLayout = adjustKeyboardLayout(keyboardLayout, defaultSize);

function drawKeyboard() {
    keyboardCtx.clearRect(0, 0, keyboardCanvas.width, keyboardCanvas.height);
    keyboardCtx.font = '14px Arial';
    keyboardCtx.textAlign = 'center';
    keyboardCtx.textBase = 'middle';
    newLayout.forEach((line) => {
        line.forEach((key, index) => {
            const { x, y, width, height, label } = key
            keyboardCtx.fillStyle = 'lightgray';
            keyboardCtx.fillRect(x, y, width, height);

            keyboardCtx.strokeStyle = 'black';
            keyboardCtx.strokeRect(x, y, width, height);

            keyboardCtx.fillStyle = 'black';
            keyboardCtx.fillText(label, x + width / 2, y + height / 2);
        })
    })
}
drawKeyboard();