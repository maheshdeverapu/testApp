import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup =()=>{
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const signupHandle = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            return alert('password and confirm password should be same')
        }
        fetch("/signup",{
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
            alert('signup successfull');
            navigate("/signin")
        })
    }
    return(
        <div>
            <h1>signup</h1>
            <input type={"text"} placeholder='userName' onChange={(e)=>{setUserName(e.target.value)}} value={userName} />
            <input type={"password"} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
            <input type={"password"} placeholder='password' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword} />
            <button onClick={(e)=>{signupHandle(e)}}>submit</button>

        </div>
    )
}
export default Signup;