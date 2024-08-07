import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../apiUrl/apiUrl';

const Login = () => {

    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const loginHandler = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${API_URL}/auth/login`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email,password})
            })

            const data = await response.json(); 
            
            if(response.ok){       
            alert("Login Success")   
            localStorage.setItem('loginToken', data.token);  
            navigate('/dashboard') 
            }
         } catch(err){
            console.log('Login Failed',err)
            alert('Login Failed')
        }
    
    }

    return (
        <div>
            <center>
            <form onSubmit={loginHandler} autoComplete='off'>
            <h1>Login</h1>
            <input type="email" placeholder="Enter E-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button type="submit">Submit</button>
            </form>  
            </center>         
        </div>
    )
}

export default Login