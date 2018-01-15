export enum KeyboardEvent {
    KeyDown  = 'keydown',
    KeyPress = 'keypress',
    KeyUp = 'keyup'
}

export default {
    [KeyboardEvent.KeyDown]: 'onKeyDown',
    [KeyboardEvent.KeyPress]: 'onKeyPress',
    [KeyboardEvent.KeyUp]: 'onKeyUp'
}
