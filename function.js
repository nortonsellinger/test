

const device_width = window.screen.width;
const device_height = window.screen.height;
const device_ratio = device_width / device_height;
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');

document.getElementById('button').addEventListener('click', function() { //кнопочька
    alert(Math.round((device_ratio + Number.EPSILON) * 100) / 100);
});