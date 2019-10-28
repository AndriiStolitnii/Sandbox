var msg = 'INFO';
var notification = document.querySelector('.notification');

//var info = 'INFO';
    warning = 'WARN';
    error = 'ERROR';
    confirm - 'CONFIRM';

if (msg === info) {
    notification.classList.add('info');
    notification.innertext = 'info'
} else if (msg === warning){
    notification.classList.add('warning');
    notification.innertext = 'warning'
}
else if (msg === error){
    notification.classList.add('error');
    notification.innertext = 'error'
}else if (msg === confirm){
    notification.classList.add('confirm');
    notification.innertext = 'confirm'
}else if (msg === confirm){
    notification.classList.add('confirm');
    notification.innertext = 'confirm'
} else {
    notification.innertext = 'default log'
}
