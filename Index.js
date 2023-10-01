document.addEventListener("DOMContentLoaded", () => {
    const productData = {
        "id": "1",
        "name": "Men Navy Blue Solid Sweatshirt",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "photos": [
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
        ],
        "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
        "size": [1, 1, 0, 1, 0],
        "isAccessory": false,
        "brand": "United Colors of Benetton",
        "price": 2599
    };

    let selectedImageIndex = 0;

    // Function to update product details
    function updateProductDetails() {
        const productName = document.getElementById("productName");
        const productBrand = document.getElementById("productBrand");
        const productPrice = document.getElementById("productPrice");
        const productDescription = document.getElementById("productDescription");

        productName.textContent = productData.name;
        productBrand.textContent = productData.brand;
        productPrice.innerHTML = `Price: Rs <span class="text-green-600 font-semibold">${productData.price}</span>`;
        productDescription.textContent = productData.description;

        // Update product image
        const productImage = document.getElementById("productImage");
        productImage.src = productData.photos[selectedImageIndex];
        productImage.alt = productData.name;

        // Update image preview thumbnails
        const imagePreviews = document.querySelector(".imagepreview"); // Select the container for product images
        imagePreviews.innerHTML = ""; // Clear the container

        productData.photos.forEach((photo, index) => {
            const img = document.createElement("img");
            img.src = photo;
            img.alt = `Product Preview ${index + 1}`;
            img.classList.add("preview-image", "border", "border-green-500","border-2", "m-1", "p-1", "rounded"); // Add Tailwind CSS classes with margin

            // Add hover effect to apply the border
            img.addEventListener("mouseenter", () => {
                img.classList.add("border", "border-green-500", "border-2"); // Increase border size to 2 pixels on hover
            });

            // Remove the border when not hovering
            img.addEventListener("mouseleave", () => {
                img.classList.remove("border", "border-green-500", "border-2");
            });

            img.addEventListener("click", () => handleImageClick(index)); // Add click event listener
            imagePreviews.appendChild(img); // Append the image to the container
        });
    }

    // Function to handle image click
    function handleImageClick(index) {
        selectedImageIndex = index;
        updateProductDetails();
    }

    // Initialize product details
    updateProductDetails();
});