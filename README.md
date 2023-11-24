# Antipatrones

El link de este repositorio es: https://github.com/tereesaalvarez/Antipatrones.git

## Enunciado ejercicio
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

## Resolución del antipatron
 
#### Identificación de características de 'Spaguetti Code'

Entre las carácteristicas más notables se incluye la falta de modularización. Esto es debido a que la función 'calcular' maneja muchas responsabilidades, como la sección de operaciones y la gestión de errores en solo una función.

También se incluye el uso de cadenas de texto para control de flujo lo que puede ser propensa a errores y que sea difícil de leer. A parte también se puede mencionar la falta de manejo de errores, ya que la función imprime mensajes de error en vez de lanzar excepciones o devolver códigos de error.

#### Refactorización del código

Código refactorizado:


    def sumar(num1, num2):
        return num1 + num2

    def restar(num1, num2):
        return num1 - num2

    def multiplicar(num1, num2):
        return num1 * num2

    def dividir(num1, num2):
        if num2 != 0:
            return num1 / num2
        else:
            raise ValueError("No se puede dividir entre cero.")

    def calcular(operacion, num1, num2):
        if operacion in operaciones:
            return operaciones[operacion](num1, num2)
        else:
            raise ValueError("Operación no soportada.")

    operaciones = {
        'suma': sumar,
        'resta': restar,
        'multiplicacion': multiplicar,
        'division': dividir
    }

Ejemplo de uso:


     try:
         resultado = calcular('suma', 5, 3)
         print(resultado)
     except ValueError as e:
         print(f"Error: {e}")


Para la refactorización del codigo, lo más optimo es crear funciones separadas para realizar cada operación, lo que sigue el principio de responsabilidad única. Esto hace que tenga más legibilidad y facilita el mantenimiento al tener funciones que realizan tareas específicas.

Además, se reemplaza la lógica de control basada en cadenas de texto con un diccionario que mapea las operaciones a funciones correspondientes, eliminando la necesidad de múltiples declaraciones if y mejorando la escalabilidad al agregar nuevas operaciones. Por último, se implementa un manejo de errores más estructurado mediante el uso de excepciones ValueError, lo cual proporciona una forma más clara de manejar situaciones de error y evita las impresiones directas de mensajes de error. Estos cambios buscan no solo mejorar la legibilidad del código sino también hacerlo más mantenible y resistente a errores, evitando así las características asociadas con el "Spaghetti Code".




