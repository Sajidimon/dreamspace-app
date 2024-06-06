

// delete product from db;

export const deleteCart = id => {
    return new Promise((resolve, reject) => {
        fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
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
