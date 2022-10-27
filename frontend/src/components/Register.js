import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate =useNavigate()

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');
    const [msg,setmsg]=useState('')


    const Register= async(e)=>{
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/register',{
                name:name,
                email:email,
                password:password,
                confpassword:confPassword
            }
            )

            navigate("/")
            
        } catch (error) {
            if(error.response){
                setmsg(error.response.data.msg);
            }
        }

    }
  return (
   <section class="hero has-background-grey-light is-fullheight is-fullwidth">
     <div class="hero-body">
       <div class="container">
         <div className="columns is-centered">
            <div className="column is-4-desktop">
            
                <form className='box' onSubmit={Register}>
                <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                        <label className='label'>Name</label>
                        <div className="controls">
                            <input type="text" className='input' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className='label'>Email</label>
                        <div className="controls">
                            <input type="text" className='input' placeholder='Email'  value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className='label'>Password</label>
                        <div className="controls">
                            <input type="password" className='input' placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                   
                    <div className="field mt-5">
                        <label className='label'>Confirm Password</label>
                        <div className="controls">
                            <input type="password" className='input' placeholder='Confirm Password'  value={confPassword} onChange={(e)=>setConfPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="field mt-5">
                       <button className='button is-success is-fullwidth'>Register</button>
                    </div>
                </form>
            </div>
         </div>
       </div>
     </div>
   </section>
  )
}

export default Register