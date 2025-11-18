document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("discountForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            resultDiv.classList.add("d-none");
            return;
        }

        const productName = document.getElementById("productName").value;
        const productPrice = parseFloat(document.getElementById("productPrice").value);
        const clientType = document.getElementById("clientType").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        let discount = 0;
        switch (clientType) {
            case "estudiante":
                discount = 0.10;
                break;
            case "adulto":
                discount = 0.05; 
                break;
            case "jubilado":
                discount = 0.15; 
                break;
        }

        const extraDiscount = paymentMethod === "efectivo" ? 0.05 : 0;

        const totalDiscount = discount + extraDiscount;
        const discountAmount = productPrice * totalDiscount;
        const finalPrice = productPrice - discountAmount;

        resultDiv.classList.remove("d-none");
        resultDiv.innerHTML = `
            <strong>Producto:</strong> ${productName} <br>
            <strong>Precio original:</strong> $${productPrice.toFixed(2)} <br>
            <strong>Descuento aplicado:</strong> ${(totalDiscount * 100).toFixed(0)}% <br>
            <strong>Precio final:</strong> $${finalPrice.toFixed(2)}
        `;
    });
});
