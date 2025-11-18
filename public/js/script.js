/**
 * Calcula el descuento y el precio final usando estructuras básicas.
 * @param {number} price 
 * @param {string} clientType 
 * @param {string} paymentMethod 
 * @returns {object}
 */
function calculateDiscount(price, clientType, paymentMethod) {

    let discountPercent = 0;
    let clientMessage = "";

    // 1. DESCUENTO SEGÚN TIPO DE CLIENTE (IF...ELSE)
    if (clientType === "estudiante") {
        discountPercent = 20;
    } else if (clientType === "adulto") {
        discountPercent = 10;
    } else if (clientType === "jubilado") {
        discountPercent = 30;
    }

    // 2. DESCUENTO ADICIONAL POR PAGO EN EFECTIVO (TERNARIO)
    let extraDiscount = (paymentMethod === "efectivo") ? 5 : 0;
    discountPercent += extraDiscount;

    // 3. MENSAJE MOTIVACIONAL SEGÚN CLIENTE (SWITCH)
    switch (clientType) {
        case "estudiante":
            clientMessage = "¡Sigue adelante con tus estudios!";
            break;
        case "adulto":
            clientMessage = "Gracias por preferirnos, excelente elección.";
            break;
        case "jubilado":
            clientMessage = "Aproveche sus beneficios, usted lo merece.";
            break;
    }

    // 4. CÁLCULO FINAL
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
 * Muestra los datos en el modal sin modificar su estructura original.
 */
function showModal(data) {
    document.getElementById('modalProductName').textContent = data.productName;
    document.getElementById('modalOriginalPrice').textContent = `$${data.originalPrice.toFixed(2)}`;
    document.getElementById('modalTotalDiscount').textContent = `${data.totalDiscountPercent}%`;
    document.getElementById('modalFinalPrice').textContent = `$${data.finalPrice.toFixed(2)}`;
    document.getElementById('modalClientMessage').textContent = data.clientMessage;
}

/**
 * Maneja el envío del formulario.
 */
function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productName = formData.get('productName');
    const productPrice = parseFloat(formData.get('productPrice'));
    const clientType = formData.get('clientType');
    const paymentMethod = formData.get('paymentMethod');

    const results = calculateDiscount(productPrice, clientType, paymentMethod);

    const modalData = {
        productName: productName,
        originalPrice: results.originalPrice,
        totalDiscountPercent: results.totalDiscountPercent,
        finalPrice: results.finalPrice,
        clientMessage: results.clientMessage
    };

    showModal(modalData);
}

/**
 * Configura los listeners cuando el DOM está listo.
 */
function setupListeners() {
    const discountForm = document.getElementById('discountForm');

    if (discountForm) {
        discountForm.addEventListener('submit', handleSubmit);
    } else {
        console.error("Error: No existe el formulario con ID 'discountForm'");
    }
}

document.addEventListener('DOMContentLoaded', setupListeners);
