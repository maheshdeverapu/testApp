import { useState, useEffect } from "react";
const Home = ()=>{
    const [datas,setData] = useState('');
    useEffect(()=>{
        homeHandle();
    },[])
    const homeHandle=()=>{
        fetch('/home',{
            method:"get",
            headers:{'content-type':"application/json",           
        }
        }).then(res=>res.json()).then((data)=>{
            if(data.error){
                return alert(data.error)
            }
            console.log(data)
            setData(data);
        })
    }
    return(
        <div>
            {datas}
        </div>
    )
}
export default Home;