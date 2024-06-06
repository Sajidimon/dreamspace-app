
import Swal from 'sweetalert2'

//save products to db;

export const saveProducts = products => {
    const productData = {
        email: products.email,
        title: products.title,
        description: products.description,
        category: products.category,
        price: products.price,
        shortdescription: products.shortdescription,
        productImgUrl: products.productImgUrl
    }

    fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    }).then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}
