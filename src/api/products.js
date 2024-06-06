
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

// delete product from db;

export const deleteProduct = id => {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted.",
                                icon: "success"
                            });
                            resolve(); // Resolve the promise after successful deletion
                        } else {
                            reject("Delete operation failed"); // Reject the promise if deletion fails
                        }
                    })
                    .catch(error => {
                        reject(error); // Reject the promise if there's an error during fetch
                    });
            }
        });
    });
};



// update product to db;

export const updateProduct = updateItem => {
    const updatedProductData = {
        productId: updateItem.productId,
        title: updateItem.title,
        description: updateItem.description,
        category: updateItem.category,
        price: updateItem.price,
        shortdescription: updateItem.shortdescription,
        productImgUrl: updateItem.productImgUrl
    }

    fetch(`${import.meta.env.VITE_API_URL}/products/${updateItem.productId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProductData)
    }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}

