export enum FormEvent {
    Change = 'change',
    Input = 'input',
    Invalid = 'invalid',
    Submit = 'submit'
}

export default {
    [FormEvent.Change]: 'onChange',
    [FormEvent.Input]: 'onInput',
    [FormEvent.Invalid]: 'onInvalid',
    [FormEvent.Submit]: 'onSubmit',
}
