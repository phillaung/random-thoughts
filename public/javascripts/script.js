(function () {
    const currentEl = document.querySelector('.current');
    currentEl.addEventListener('focusin', function (evt) {
            console.log('click in');
        });
    currentEl.addEventListener('keyup', function (evt) {
        evt.preventDefault();
        if (evt.key === 'Enter') console.log('enter');
    });
    currentEl.addEventListener('focusout', function (evt) {
        console.log('click out');
    });
    
})();