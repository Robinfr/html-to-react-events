import clipboardEvents, { ClipboardEvent } from './clipboard';
import compositionEvents, { CompositionEvent } from './composition';
import keyboardEvents, { KeyboardEvent } from './keyboard';
import focusEvents, { FocusEvent } from './focus';
import formEvents, { FormEvent } from './form';
import mouseEvents, { MouseEvent } from './mouse';
import selectionEvents, { SelectionEvent } from './selection';

type EventType =
    | ClipboardEvent
    | CompositionEvent
    | KeyboardEvent
    | FocusEvent
    | FormEvent
    | MouseEvent
    | SelectionEvent;

const allEvents = {
    ...clipboardEvents,
    ...compositionEvents,
    ...keyboardEvents,
    ...focusEvents,
    ...formEvents,
    ...mouseEvents,
    ...selectionEvents
};

const convertEvent = (eventName: EventType) => allEvents[eventName];

export default convertEvent;
