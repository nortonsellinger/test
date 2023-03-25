//ПОЛУЧАЕМ ШИРИНУ ЭКРАНА
const device_width = window.screen.width;
//ПОЛУЧАЕМ ВЫСОТУ ЭКРАНА
const device_height = window.screen.height;
//ВЫЧИСЛЯЕМ ОТНОШЕНИЕ !ШИРИНЫ! К !ВЫСОТЕ!
const device_ratio = device_width / device_height;
//ПРИСВАИВАЕМ ПЕРЕМЕННОЙ --DEVICE_RATIO В CSS ВЫЧИСЛЕННОЕ СООТНОШЕНИЕ СТОРОН УСТРОЙСТВА
document.documentElement.style.setProperty('--DEVICE_RATIO', 'device_ratio');

function alertDeviceRatio() {
    alert(Math.round((device_ratio + Number.EPSILON) * 100) / 100);
}
document.getElementById('button').addEventListener('click', alertDeviceRatio);

