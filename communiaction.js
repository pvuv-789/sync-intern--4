document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('p');
            messageElement.textContent = messageText;
            chatBox.appendChild(messageElement);
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });

    messageInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
