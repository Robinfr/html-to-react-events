import { convertEvent, bindEvent, bindEvents } from '../src/index';

test('Converting an event', () => {
    const eventName = 'dblclick';

    expect(convertEvent(eventName)).toBe('onDoubleClick');
});

test('Binding an event', () => {
    const eventName = 'click';
    const callback = jest.fn();

    expect(bindEvent(eventName, callback)).toEqual({
        'onClick': callback
    });
});

test('Binding multiple events', () => {
    const events = {
        'click': jest.fn(),
        'dblclick': jest.fn()
    };

    expect(bindEvents(events)).toEqual({
        'onClick': events[ 'click' ],
        'onDoubleClick': events[ 'dblclick' ]
    });
});
