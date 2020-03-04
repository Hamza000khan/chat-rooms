document.addEventListener('DOMContentLoaded', () => {
    // Make enter key funtion to submit
    let msg = document.querySelector('#user-message');
    msg.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            document.querySelector('#send_message').click();
        }
    });

});