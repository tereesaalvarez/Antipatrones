# Antipatrones

Dada una porción de código Python escrita en estilo "Spaghetti Code", se te pide que identifiques las principales características de este antipatrón y refactorices el código para mejorar su legibilidad y mantenibilidad.

Considera el siguiente fragmento de código:


def calcular(operacion, num1, num2):
    if operacion == 'suma':
        return num1 + num2
    if operacion == 'resta':
        return num1 - num2
    if operacion == 'multiplicacion':
        return num1 * num2
    if operacion == 'division':
        if num2 != 0:
            return num1 / num2
        else:
            print("No se puede dividir entre cero.")
    else:
        print("Operación no soportada.")
Las funciones deberían tener una sola responsabilidad, y esta función tiene muchas. También se pueden observar problemas como la falta de modularización, uso de cadenas de texto para la lógica de control, y falta de manejo de errores.

### Resolución del antipatron
 
En esta refactorización, he creado funciones separadas para realizar cada operación, lo que sigue el principio de responsabilidad única. También he mejorado el manejo de errores en la división, evitando la división entre cero y retornando None en lugar de imprimir mensajes directamente.

Además, he cambiado la lógica de control de cadenas de texto a una estructura de control más clara usando if-elif-else, lo que hace que el código sea más legible y evita problemas potenciales si se introduce una operación no reconocida.
