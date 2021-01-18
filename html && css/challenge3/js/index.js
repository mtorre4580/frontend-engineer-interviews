// Init
(() => {
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');

    if (fill) {
        fill.addEventListener('dragstart', () => console.log('dragstart...'));
        fill.addEventListener('dragend', () => console.log('dragend...'));
    }

    if (empties) {
        for (const empty of empties) {
            empty.addEventListener('dragenter', event => {
                event.preventDefault();
                console.log('enter....');
            });
            empty.addEventListener('dragover', event => {
                event.preventDefault();
                console.log('over....');
            });
            empty.addEventListener('dragleave', () => {
                console.log('leave....');
            });
            empty.addEventListener('drop', () => {
                empty.appendChild(fill);
            });
        }
    }
})();