import React,{useState} from 'react';


const AddUser = () => {

    const [form, setForm] = useState(
        {
            userName: "",
            passwordHash: "",
        }
    )

    console.log("form-->:", form);
    console.log("hello world");

    const handleSubmit = (e) => {
       e.preventDefault();
     
       

       setForm()
    }
    return (
        <main>
            <h1>Create User</h1>
            <form>
                <label>Username:</label>
                <input
                    type='text'
                    name='userName'
                    value={form.userName}
                    onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                    required
                />
                <label>Password</label>
                <input
                    type='pasword'
                    name='passwordHASH'
                    value={form.passwordHash}
                    onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
                    required
                />
                <button>Submit</button>
            </form>
        </main>
    )

};

export default AddUser