const paymentButtons = document.querySelectorAll('div.button button');
const modal = document.getElementById('payment');

paymentButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.setAttribute('payment-id', index);

        setModal(item.getAttribute("title"));
    })
});

const setModal = title => {
    const modalTitle = modal.querySelector('div.modal-header div.title');

    modalTitle.innerHTML = title;
}