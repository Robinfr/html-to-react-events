export type MouseEvent =
    | 'click'
    | 'contextmenu'
    | 'dblclick'
    | 'drag'
    | 'dragend'
    | 'dragenter'
    | 'dragexit'
    | 'dragleave'
    | 'dragover'
    | 'dragstart'
    | 'drop'
    | 'mousedown'
    | 'mouseenter'
    | 'mouseleave'
    | 'mousemove'
    | 'mouseout'
    | 'mouseover'
    | 'mouseup';

export default {
    'click': 'onClick',
    'contextmenu': 'onContextMenu',
    'dblclick': 'onDoubleClick',
    'drag': 'onDrag',
    'dragend': 'onDragEnd',
    'dragenter': 'onDragEnter',
    'dragexit': 'onDragExit',
    'dragleave': 'onDragLeave',
    'dragover': 'onDragOver',
    'dragstart': 'onDragStart',
    'drop': 'onDrop',
    'mousedown': 'onMouseDown',
    'mouseenter': 'onMouseEnter',
    'mouseleave': 'onMouseLeave',
    'mousemove': 'onMouseMove',
    'mouseout': 'onMouseOut',
    'mouseover': 'onMouseOver',
    'mouseup': 'onMouseUp'
};
