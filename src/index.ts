import clipboardEvents, { ClipboardEvent } from './clipboard';
import compositionEvents, { CompositionEvent } from './composition';
import keyboardEvents, { KeyboardEvent } from './keyboard';
import focusEvents, { FocusEvent } from './focus';
import formEvents, { FormEvent } from './form';

type EventType =
    | ClipboardEvent
    | CompositionEvent
    | KeyboardEvent
    | FocusEvent
    | FormEvent;

const allEvents = {
    ...clipboardEvents,
    ...compositionEvents,
    ...keyboardEvents,
    ...focusEvents,
    ...formEvents
};

const convertEvent = (eventName: EventType) => {
    return allEvents[ eventName ];
};

export default convertEvent;
