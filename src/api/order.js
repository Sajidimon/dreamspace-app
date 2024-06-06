import Swal from 'sweetalert2'

//save products to db;

export const saveOrders = orders => {
    const orderData = {
        email: orders.email,
        customerName: orders.customerName,
        customerNumber: orders.customerNumber,
        customerAddress: orders.customerAddress,
        orderDate: orders.orderDate,
        cartItems: orders.cartItems,
        total: orders.total
        
    }

    fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderData)
    }).then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Order has been successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}


// delete order item from db;

export const deleteOrder = id => {
    return new Promise((resolve, reject) => {
        fetch(`${import.meta.env.VITE_API_URL}/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log('delete cart item');
                    resolve(); // Resolve the promise after successful deletion
                } else {
                    reject("Delete operation failed"); // Reject the promise if deletion fails
                }
            })
            .catch(error => {
                reject(error); // Reject the promise if there's an error during fetch
            });


    });
};
