export enum FocusEvent {
    Focus = 'focus',
    Blur = 'blur'
}

export default {
    [FocusEvent.Focus]: 'onFocus',
    [FocusEvent.Blur]: 'onBlur'
}
