import { useState } from "react"




const LoginPage=({isLoggedIn,user,onLogout,onLogin})=>{
    const [userName,setUserName]=useState('')
    const [passWord,setPassWord]=useState('')
    
    const handleLogin=(event)=>{
     event.preventDefault();
     onLogin(userName,passWord);
     setUserName('');
     setPassWord('');
    }
  
    return(
    <div>
        {isLoggedIn ?(
             <div>
                <header>
                <h1 className="h1 display-1">Welcome {user.userName}</h1>
                 
            </header>
            <br/>
              <button onClick={onLogout}><h2>logout</h2></button>
             </div>
            
        ):(
            <div>
              <form onSubmit={handleLogin}>
                <input
                type="text" 
                placeholder="UserName"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <br/>
                <input 
                type="text"
                placeholder="password"
                value={passWord}
                onChange={(e)=>setPassWord(e.target.value)}
                
                />
                <button className="btn btn-dark btn-lg mx-3" type="submit">submit</button>
                </form>  
            </div>
        )}
    </div>
    )

}
export default LoginPage