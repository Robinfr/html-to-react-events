import clipboardEvents, { ClipboardEvent } from './clipboard';
import compositionEvents, { CompositionEvent } from './composition';
import keyboardEvents, { KeyboardEvent } from './keyboard';
import focusEvents, { FocusEvent } from './focus';
import formEvents, { FormEvent } from './form';
import mouseEvents, { MouseEvent } from './mouse';
import selectionEvents, { SelectionEvent } from './selection';
import animationEvents, { AnimationEvent } from './animation';
import mediaEvents, { MediaEvent } from './media';
import imageEvents, { ImageEvent } from './image';
import transitionEvents, { TransitionEvent } from './transition';
import uiEvents, { UIEvent } from './ui';
import touchEvents, { TouchEvent } from './touch';
import wheelEvents, { WheelEvent } from './wheel';
import otherEvents, { OtherEvent } from './other';

type EventType =
    | ClipboardEvent
    | CompositionEvent
    | KeyboardEvent
    | FocusEvent
    | FormEvent
    | MouseEvent
    | SelectionEvent
    | AnimationEvent
    | MediaEvent
    | ImageEvent
    | TransitionEvent
    | UIEvent
    | TouchEvent
    | WheelEvent
    | OtherEvent;

const allEvents = {
    ...clipboardEvents,
    ...compositionEvents,
    ...keyboardEvents,
    ...focusEvents,
    ...formEvents,
    ...mouseEvents,
    ...selectionEvents,
    ...animationEvents,
    ...mediaEvents,
    ...imageEvents,
    ...transitionEvents,
    ...uiEvents,
    ...touchEvents,
    ...wheelEvents,
    ...otherEvents
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
        const event = convertEvent(eventKey as EventType);
        if(typeof event === 'undefined'){
            continue;
        }
        newEvents[ event ] = events[ eventKey ];
    }

    return newEvents;
};
