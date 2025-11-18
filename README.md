TAREA: Calculadora de Descuentos con Estructuras Condicionales
Requisitos de finalización
Apertura: martes, 11 de noviembre de 2025, 00:00
Cierre: martes, 18 de noviembre de 2025, 00:00
Objetivo

Aplicar las estructuras condicionales if, el operador ternario y la sentencia switch en JavaScript dentro de una página web utilizando HTML y Bootstrap 5 para el diseño visual.

Descripción de la tarea

Desarrolle una página web que permita calcular el precio final de un producto aplicando diferentes descuentos según el tipo de cliente y la forma de pago seleccionada por el usuario.
La interfaz debe ser clara, moderna y construida con Bootstrap 5, mientras que la lógica de programación se realizará con JavaScript.

Requisitos técnicos

Interfaz con HTML y Bootstrap 5
Debe incluir un formulario con los siguientes campos:
Nombre del producto.
Precio del producto.
Tipo de cliente (estudiante, adulto, jubilado).
Forma de pago (efectivo, tarjeta, transferencia).
Un botón para realizar el cálculo.
Un espacio para mostrar el resultado final (precio con descuento y mensaje personalizado).
Lógica con JavaScript
Utilizar una estructura condicional if...else para definir el porcentaje de descuento según el tipo de cliente:
Estudiante: 20%
Adulto: 10%
Jubilado: 30%
Utilizar el operador ternario para agregar un descuento adicional del 5% si el cliente paga en efectivo.
Utilizar un switch para mostrar un mensaje motivacional diferente según el tipo de cliente.
Mostrar resultados en pantalla:
Nombre del producto.
Precio original.
Porcentaje total de descuento aplicado.
Precio final con descuento.
Mensaje correspondiente al tipo de cliente.
Aspecto visual esperado

El diseño debe ser limpio, con colores agradables, etiquetas claras y botones bien definidos. Debe aprovechar las clases de Bootstrap 5 para mejorar la presentación (tarjetas, botones, formularios, alertas, etc.).

<div align="center">

# Cálculo de Precio Final con Descuentos  
**Actividad de Aprendizaje N° 3**  
**JavaScript y Bootstrap 5**
  
### Integrantes:
Diego Roberto Díaz Chávez  
Cristina Belén Enríquez Sánchez  
Maria José Haro Velasco  
Isaac Geovanny Betún Vergara  
Marcos Moisés Morales Velasco

  
**Ciencias de la Computación**  
**Universidad de las Fuerzas Armadas “ESPE”**  
**NRC:** 29314 – Aplicación de Tecnologías Web  
**Docente:** Ing. Vilmer David Criollo Chanchicocha, Mgtr.  
**Quito D.M, 17 de noviembre de 2025**

</div>
---

## Introducción

El presente informe describe la implementación de una aplicación web diseñada para calcular el precio final de un producto, aplicando diferentes descuentos según:

- El tipo de cliente  
- La forma de pago  

Este proyecto se desarrolló como parte de la asignatura **Aplicación de Tecnologías Web**, empleando:

- **HTML + Bootstrap 5** → interfaz gráfica  
- **JavaScript** → procesamiento de la lógica  
- **Estructuras condicionales, operador ternario y sentencia switch**

---

## Implementación del Código JavaScript

Repositorio:  
🔗 https://github.com/kbyteec/Grupo6_Actividad3

El archivo **`script.js`** contiene la lógica encargada de:

- Procesar el descuento base según el cliente  
- Añadir descuento extra si el pago es en efectivo  
- Mostrar mensajes personalizados con `switch`

---

### Uso de `if...else` según el tipo de cliente

Esta estructura determina el porcentaje base según la categoría.

```js
if (cliente === 'estudiante') {
  descuento = 20;
} else if (cliente === 'adulto') {
  descuento = 10;
} else if (cliente === 'jubilado') {
  descuento = 30;
}

```

### Imagen 1. Ejemplo de la estructura if…else

<img width="3332" height="1772" alt="image" src="https://github.com/user-attachments/assets/b0151684-24c7-4524-8914-de8bb3ce8fd0" />

Uso del operador ternario para el descuento adicional
Se utiliza el operador ternario para añadir un descuento extra del 5% cuando el
usuario selecciona la forma de pago en efectivo.
Código:
```js
descuentoAdicional = (pago === 'efectivo') ? 5 : 0;


```
### Imagen 2.Ejemplo del operador ternario aplicado al pago en efectivo

<img width="3344" height="1694" alt="image" src="https://github.com/user-attachments/assets/3feb2eb2-f6f2-4931-8314-16e48c86e0d9" />

Sentencia switch para generar un mensaje motivacional
El bloque switch permite mostrar mensajes personalizados dependiendo del tipo
de cliente. Este mensaje se presenta junto con el precio del producto.
Código:
```js
switch (cliente) {
case 'estudiante': mensaje = '¡Sigue adelante con tus estudios!'; break;
case 'adulto': mensaje = 'Gracias por elegirnos.'; break;
case 'jubilado': mensaje = 'Aproveche sus beneficios.'; break;
}
```

### Imagen 3. Ejemplo del mensaje mostrado según el cliente


<img width="1746" height="306" alt="image" src="https://github.com/user-attachments/assets/30423266-314a-4924-aaf5-e2048fb186cf" />

<img width="1596" height="362" alt="image" src="https://github.com/user-attachments/assets/b3d46ea0-45e5-4791-b3bd-d177bbfb69d2" />

<img width="1886" height="500" alt="image" src="https://github.com/user-attachments/assets/854bdd4f-8926-4187-8181-44a7c83bdf91" />


# Integración con el HTML
El formulario HTML registra los datos ingresados por el usuario y activa las
funciones definidas en JavaScript para procesar la información. Bootstrap 5 facilita el
diseño responsivo mediante clases como form-control, btn, card y alert.
Ejemplo de integración:
```js
<button class="btn btn-primary" id=”dicountButton”>Calcular precio</button>
```

### Imagen 4. Fragmento del HTML mostrando la integración con JavaScript

<img width="874" height="370" alt="image" src="https://github.com/user-attachments/assets/13cb8ae6-81a9-4bbd-8830-3a257a207789" />

# Análisis del Uso de JavaScript

El uso de JavaScript en esta aplicación permite controlar eventos del usuario,
manipular el DOM en tiempo real y realizar cálculos matemáticos personalizados sin
recargar la página. El manejo de errores mediante condicionales y estructuras controladas
garantiza estabilidad y coherencia en los resultados.

# Conclusiones

• JavaScript permitió implementar una aplicación interactiva y completamente
funcional.

• El uso de estructuras condicionales, operador ternario y la sentencia switch
cumplió con los objetivos académicos.

• Bootstrap 5 aportó una interfaz limpia, moderna y adaptable a diferentes
dispositivos.

• La estructura modular del código facilita futuras ampliaciones.



## Bibliografía

- Mozilla Developer Network. (2024). Guía de JavaScript. Documentación web de MDN.  
  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide

- W3Schools. (2024). Condiciones y switch en JavaScript.  
  https://www.w3schools.com/js/js_conditions.asp
