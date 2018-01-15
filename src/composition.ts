export enum CompositionEvent {
    CompositionEnd  = 'compositionend',
    CompositionStart = 'compositionstart',
    CompositionUpdate = 'compositionupdate'
}

export default {
    [CompositionEvent.CompositionEnd]: 'onCompositionEnd',
    [CompositionEvent.CompositionStart]: 'onCompositionStart',
    [CompositionEvent.CompositionUpdate]: 'onCompositionUpdate'
}
