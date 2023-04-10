const buttons = [...document.querySelectorAll('.language-button')];

buttons.forEach(item =>
    {
        item.addEventListener('click', () =>
        {
            document.querySelector('.language-button.active').classList.remove('active');
            item.classList.add('active')
        })
    })