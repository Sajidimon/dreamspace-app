

//save users to db;

export const saveUser = user => {
    const currentUser = {
        email: user.email
    }

    fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
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