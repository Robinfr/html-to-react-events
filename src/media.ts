export type MediaEvent =
    | 'abort'
    | 'canplay'
    | 'canplaythrough'
    | 'durationchange'
    | 'emptied'
    | 'encrypted'
    | 'ended'
    | 'error'
    | 'loadeddata'
    | 'loadedmetadata'
    | 'loadstart'
    | 'pause'
    | 'play'
    | 'playing'
    | 'progress'
    | 'ratechange'
    | 'seeked'
    | 'seeking'
    | 'stalled'
    | 'suspend'
    | 'timeupdate'
    | 'volumechange'
    | 'waiting';

export default {
    'abort': 'onAbort',
    'canplay': 'onCanPlay',
    'canplaythrough': 'onCanPlayThrough',
    'durationchange': 'onDurationChange',
    'emptied': 'onEmptied',
    'encrypted': 'onEncrypted',
    'ended': 'onEnded',
    'error': 'onError',
    'loadeddata': 'onLoadedData',
    'loadedmetadata': 'onLoadedMetadata',
    'loadstart': 'onLoadStart',
    'pause': 'onPause',
    'play': 'onPlay',
    'playing': 'onPlaying',
    'progress': 'onProgress',
    'ratechange': 'onRateChange',
    'seeked': 'onSeeked',
    'seeking': 'onSeeking',
    'stalled': 'onStalled',
    'suspend': 'onSuspend',
    'timeupdate': 'onTimeUpdate',
    'volumechange': 'onVolumeChange',
    'waiting': 'onWaiting'
};