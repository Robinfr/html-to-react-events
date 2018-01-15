import clipboardEvents, {ClipboardEvent} from './clipboard';
import compositionEvents, {CompositionEvent} from './composition';

type EventType = ClipboardEvent | CompositionEvent;

const allEvents = {
    ...clipboardEvents,
    ...compositionEvents
};

const convertEvent = (eventName: EventType) => {
    return allEvents[eventName];
};

export default convertEvent;
