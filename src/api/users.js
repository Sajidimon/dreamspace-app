import Swal from "sweetalert2";

//save users to db;

export const saveUser = user => {
    const currentUser = {
        email: user.email
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log('signup is successfull', data);
        })
}

export const makeAdmin = email => {
    const userRole = {
        role: 'admin'
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userRole)
    })
        .then(res => res.json())
        .then(data => {
            if (data.matchedCount > 0) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You are admin now",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}

// Get role
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
}