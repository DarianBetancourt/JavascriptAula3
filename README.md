# JavascriptAula3
Receber dados e exibir no console

## lógica 

1. solicitar dados do usuário usando prompt.
2. verifique se os dados inseridos estão vazios ou são apenas letras.
3. caso os dados obtidos não tenham o formato esperado, solicite novamente os dados.
4. se os dados tiverem o formato esperado, armazene-os em um objeto.
5. mostrar o objeto pelo console.


## Dica 

>Expressão regular usada para verificar se os dados são apenas letras
>^ [A-Z] + $ , i

>Onde:

>'^' indica que o padrão deve começar com os caracteres dentro dos colchetes

>'[A-Z]' indica que os caracteres suportados são letras do alfabeto

>'+' indica que os caracteres entre colchetes podem ser repetidos

>'$' indica que o padrão termina com os caracteres que estão dentro dos colchetes.

>'i' indica que validaremos letras maiúsculas e minúsculas (não diferencia maiúsculas de minúsculas) 
