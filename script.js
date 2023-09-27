document.addEventListener('DOMContentLoaded', function() {
    var verificarButton = document.getElementById('verificarButton');
    verificarButton.addEventListener('click', function() {
        var numero = parseInt(document.getElementById('numeroInput').value);
        var resultadoElement = document.getElementById('resultado');

        if (numero % 2 === 0 && numero > 0 && numero < 100) {
            resultadoElement.textContent = 'O número atende aos critérios.';
        } else {
            resultadoElement.textContent = 'O número não atende aos critérios.';
        }
    });
});


