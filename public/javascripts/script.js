(function () {
    const currentEl = document.querySelector('.current');
    currentEl.addEventListener('focusin', function (evt) {
            console.log('click in');
        });
    currentEl.addEventListener('focusout', function (evt) {
        console.log('click out');
    });
    currentEl.addEventListener('keup', function (evt) {
        if(evt.key === 'Enter') console.log('enter')
    });
})();