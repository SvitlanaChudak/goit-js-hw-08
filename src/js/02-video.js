import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
console.log(Player)
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const onPlay = function (data) {
    {
        duration: 61.857
        percent: 0.049
        seconds: 3.034
    }
};
player.on('play', onPlay);

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
});

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

player.on('timeupdate', throttle(onPlay, 1000));


