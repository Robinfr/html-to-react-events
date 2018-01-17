# HTML to React events
Converts HTML event names to React event handler names.

Ever tried working with HTML event names but needed to have the name of the related React event handler? Now you can use this library to easily retrieve the event handler name or bind to it straight away.

## Install
Install with NPM/Yarn:

```bash
npm install html-to-react-events --save
```

## Usage
Getting the event handler name in React:

```javascript
import { convertEvent} from 'html-to-react-events';

const eventName = 'dblclick';
const reactEventHandler = convertEvent(eventName);

console.log(reactEventHandler); //Will return onDoubleClick
```

Binding a single event:

```javascript
import { bindEvent } from 'html-to-react-events';

const eventName = 'dblclick';

const MyComponent = ({onConfirm}) => (
    <div {...bindEvent(eventName, onConfirm)}>
        Double click to confirm
    </div>
);
```

Binding multiple events:

```javascript
import { bindEvents } from 'html-to-react-events';

const eventName = 'dblclick';

const MyComponent = ({onEdit, onConfirm}) => {
    const events = {
        'click': onEdit,
        'dblclick': onConfirm
    };

    return (
        <div {...bindEvents(events)}>
            One click to edit. <br />
            Double click to confirm.
        </div>
    );
}
```

## Supported events
For the supported events, see https://reactjs.org/docs/events.html.

## TypeScript
Typings are included in the library.

## License
MIT © [R. Franken](https://github.com/Robinfr)