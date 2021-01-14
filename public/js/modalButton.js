const button = document.querySelector('.modal-body button');

button.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.modal-body input');
    const modal = document.querySelector('.modal');

    const nickname = inputs[0].value;
    const code = inputs[1].value;
    const index = modal.getAttribute("payment-id")

    location.href=`/lvlup/push/${nickname}/${code}/${index}`;
});