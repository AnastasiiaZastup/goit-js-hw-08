import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const CONST_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (event) {
    console.log(event.seconds);
    const startSec = Number(event.seconds)
    localStorage.setItem(CONST_CURRENT_TIME, startSec);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(CONST_CURRENT_TIME)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});