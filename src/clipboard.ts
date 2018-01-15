export enum ClipboardEvent {
    Copy = 'copy',
    Cut = 'cut',
    Paste = 'paste'
}

export default {
    [ClipboardEvent.Copy]: 'onCopy',
    [ClipboardEvent.Cut]: 'onCut',
    [ClipboardEvent.Paste]: 'onPaste',
}
