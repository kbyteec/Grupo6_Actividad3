// Contribución en Grupo 6 - Actividad 3: Isaac Betún
/**
 * Esta función calcula el descuento y el precio final.
 * @param {number} price - El precio original del producto.
 * @param {string} clientType - El tipo de cliente (estudiante, adulto, jubilado).
 * @param {string} paymentMethod - El método de pago (efectivo, tarjeta, transferencia).
 * @returns {object} - Un objeto con los resultados del cálculo.
 */
function calculateDiscount(price, clientType, paymentMethod) {
    let discountPercent = 0;
    let clientMessage = "";

    // 1. Descuento por tipo de cliente
    switch (clientType) {
        case 'estudiante':
            discountPercent += 10; // 10%
            clientMessage = "Descuento de estudiante aplicado.";
            break;
        case 'jubilado':
            discountPercent += 15; // 15%
            clientMessage = "Descuento de jubilado aplicado.";
            break;
        case 'adulto':
        default:
            clientMessage = "No se aplican descuentos para este tipo de cliente.";
            break;
    }

    // 2. Descuento adicional por método de pago (con operadores ternarios)
    discountPercent += (paymentMethod === 'efectivo' ? 5 : 0);
    clientMessage += (paymentMethod === 'efectivo' ? " Se añadió 5% por pago en efectivo." : "");


    // 3. Cálculos finales
    const totalDiscount = price * (discountPercent / 100);
    const finalPrice = price - totalDiscount;

    return {
        originalPrice: price,
        totalDiscountPercent: discountPercent,
        finalPrice: finalPrice,
        clientMessage: clientMessage
    };
}

/**
 * Esta función llena el modal con los datos calculados.
 * @param {object} data - Los datos del formulario y los resultados del cálculo.
 */
function showModal(data) {
    // Usamos los IDs del HTML del modal que creamos antes
    document.getElementById('modalProductName').textContent = data.productName;

    // Formateamos los números como moneda
    document.getElementById('modalOriginalPrice').textContent = `$${data.originalPrice.toFixed(2)}`;
    document.getElementById('modalTotalDiscount').textContent = `${data.totalDiscountPercent}%`;
    document.getElementById('modalFinalPrice').textContent = `$${data.finalPrice.toFixed(2)}`;

    document.getElementById('modalClientMessage').textContent = data.clientMessage;
}

/**
 * Esta función se ejecuta cuando se envía el formulario.
 * @param {Event} event - El objeto del evento de envío.
 */
function handleSubmit(event) {
    // Evita que la página se recargue
    event.preventDefault();

    // 1. Obtener los datos del formulario
    const formData = new FormData(event.target);
    const productName = formData.get('productName');
    const productPrice = parseFloat(formData.get('productPrice')); // Convertir a número
    const clientType = formData.get('clientType');
    const paymentMethod = formData.get('paymentMethod');

    // 2. Calcular los descuentos
    const results = calculateDiscount(productPrice, clientType, paymentMethod);

    // 3. Preparar los datos para el modal
    const modalData = {
        productName: productName,
        originalPrice: results.originalPrice,
        totalDiscountPercent: results.totalDiscountPercent,
        finalPrice: results.finalPrice,
        clientMessage: results.clientMessage
    };

    // 4. Llenar el modal con los datos
    // El modal se mostrará automáticamente gracias a los atributos
    // 'data-bs-toggle' y 'data-bs-target' en el botón de submit.
    showModal(modalData);
}

/**
 * Esta función solo registra cambios en la consola.
 * @param {Event} event - El objeto del evento.
 */


/**
 * Esta función encuentra los elementos y adjunta los event listeners
 * después de que el DOM se haya cargado.
 */
function setupListeners() {
    console.log("DOM loaded");

    // Obtener referencias a los elementos
    const discountForm = document.getElementById('discountForm');
    // Adjuntar listener al formulario (principal)
    if (discountForm) {
        discountForm.addEventListener('submit', handleSubmit);
    } else {
        console.error("Error: Elemento con ID 'discountForm' no encontrado.");
    }
}

// 4. Esperar a que el HTML esté listo para ejecutar la configuración.
document.addEventListener('DOMContentLoaded', setupListeners);