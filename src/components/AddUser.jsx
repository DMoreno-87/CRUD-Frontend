import React from 'react';

const AddUser = () => {
    return (
        <main>
            <h1>Create User</h1>
            <form>
                <label>Username:</label>
                <input
                    type='text'
                    name='username'
                    required
                />
                <label>Password</label>
                <input
                    type='pasword'
                    name='passwordHASH'
                    required
                />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default AddUser