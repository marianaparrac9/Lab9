//Definir las variables de los formularios
const formUser1 = document.querySelector('#chat-form-user1');
const formUser2 = document.querySelector('#chat-form-user2');
//Definir el contenedor de los mensajes
const chatMessagesContainer = document.querySelector('#chat-container');

//Añadir estilos al contenedor de mensajes
chatMessagesContainer.style.display = 'flex';
chatMessagesContainer.style.flexDirection = 'column';
chatMessagesContainer.style.gap = '10px';
chatMessagesContainer.style.padding = '10px';
chatMessagesContainer.style.paddingTop = '2rem';
chatMessagesContainer.style.paddingRight = '2rem';






//Definir los eventos de los formularios y obtener el valor de los inputs
formUser1.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#user1').value;
    if (message) {
        //Hacer append del mensaje en el contenedor de mensajes
        const messageElement = document.createElement('div'); //Crear un elemento div
        messageElement.classList.add('message'); //Agregar la clase message al elemento div
        messageElement.innerHTML = message;    //Agregar el mensaje al elemento div
        chatMessagesContainer.appendChild(messageElement); //Agregar el elemento div al contenedor de mensajes
    
        // Agregar estilos al mensaje
        messageElement.style.textAlign = 'right'; //Alinear el texto a la derecha
        messageElement.style.width = 'fit-content'; //Ajustar el ancho del mensaje al contenido
        messageElement.style.backgroundColor = 'lightblue';
        messageElement.style.color = 'black';
        messageElement.style.borderRadius = '10px';
        messageElement.style.padding = '10px';
    
    
        // Asegurarse de que el mensaje haga appenchild en la derecha del contenedor
        // chatMessagesContainer.style.justifyContent = 'flex-end';
        chatMessagesContainer.style.alignItems = 'flex-end';

        // Desplazar el scroll hacia abajo
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    
        //Limpiar el input
        document.querySelector('#user1').value = '';
    } else {
        alert('Por favor, escribe un mensaje');
    }
} 
);





formUser2.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#user2').value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = message;
        chatMessagesContainer.appendChild(messageElement);
    
        // Agregar estilos al mensaje
        messageElement.style.textAlign = 'right'; //Alinear el texto a la derecha
        messageElement.style.width = 'fit-content'; //Ajustar el ancho del mensaje al contenido
        messageElement.style.backgroundColor = 'red';
        messageElement.style.color = 'black';
        messageElement.style.borderRadius = '10px';
        messageElement.style.padding = '10px';
    
    
            // Asegurarse de que el mensaje haga appenchild en la derecha del contenedor
        // chatMessagesContainer.style.justifyContent = 'flex-end';
        chatMessagesContainer.style.alignItems = 'flex-end';

        
        // Desplazar el scroll hacia abajo
        
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    
        document.querySelector('#user2').value = '';
    } else {
        alert('Por favor, escribe un mensaje');
    }
} 
);
