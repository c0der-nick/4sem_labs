document.getElementById('alertButton').addEventListener('click', function() {
    alert('уведомление');
});

document.getElementById('confirmButton').addEventListener('click', function() {
    const userConfirmed = confirm('Вы уверены?');
    if (userConfirmed) {
        alert('Вы подтвердили дейстие.');
    } else {
        alert('Вы отменили действие.');
    }
});

document.getElementById('promptButton').addEventListener('click', function() {
    const userInput = prompt('Введите своё имя:');
    if (userInput) {
        alert('Привет, ' + userInput + '!');
    } else {
        alert('Вы отменили действие.');
    }
});