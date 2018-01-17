import clipboardEvents, { ClipboardEvent } from './clipboard';
import compositionEvents, { CompositionEvent } from './composition';
import keyboardEvents, { KeyboardEvent } from './keyboard';
import focusEvents, { FocusEvent } from './focus';
import formEvents, { FormEvent } from './form';
import mouseEvents, { MouseEvent } from './mouse';
import selectionEvents, { SelectionEvent } from './selection';
import animationEvents, { AnimationEvent } from './animation';

type EventType =
    | ClipboardEvent
    | CompositionEvent
    | KeyboardEvent
    | FocusEvent
    | FormEvent
    | MouseEvent
    | SelectionEvent
    | AnimationEvent;

const allEvents = {
    ...clipboardEvents,
    ...compositionEvents,
    ...keyboardEvents,
    ...focusEvents,
    ...formEvents,
    ...mouseEvents,
    ...selectionEvents,
    ...animationEvents
};

export interface Events {
    [propName: string]: (...args: any[]) => any;
}

export const convertEvent = (eventName: EventType) => allEvents[ eventName ];
export const bindEvent = (eventName: EventType, callback: (...args: any[]) => any) => ({
    [ convertEvent(eventName) ]: callback
});
export const bindEvents = (events: Events) => {
    const newEvents: Events = {};

    for (let eventKey in events) {
        newEvents[ convertEvent(eventKey as EventType) ] = events[ eventKey ];
    }

    return newEvents;
};
