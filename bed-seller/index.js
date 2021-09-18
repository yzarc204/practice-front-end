const colors = document.querySelectorAll('.color');
colors.forEach(elm => {
    elm.addEventListener('click', e => {
        colors.forEach(color => color.classList.remove('active'));
        elm.classList.add('active');
    });
});