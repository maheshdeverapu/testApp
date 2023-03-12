import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin =()=>{
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const signinHandle = (e)=>{
        e.preventDefault();
        fetch("/signin",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                userName,password
            })
        }).then(res=>res.json()).then((data)=>{
            if(data.error){
                return alert(data.error)
            }
            alert(data.message);
            navigate("/home")
        })
    }
    return(
        <div>
            <h1>signin</h1>
            <input type={"text"} placeholder='userName' onChange={(e)=>{setUserName(e.target.value)}} value={userName} />
            <input type={"password"} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
            <button onClick={(e)=>{signinHandle(e)}}>submit</button>

        </div>
    )
}
export default Signin;