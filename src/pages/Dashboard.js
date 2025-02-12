import { useEffect, useState } from "react"
import { UserDetailsApi } from "../services/Api"
import NavBar from "../component/NavBar"
import { isAuthenticated, logout } from "../services/Auth"
import { Navigate, useNavigate } from "react-router-dom"

export default function DashBoardPage(){
    const navigate=useNavigate();
    const[user,setUsers]=useState({name:"",email:"", localId:"" })

        useEffect(()=>{
            if(isAuthenticated()) {
                UserDetailsApi().then((response)=>{
                    setUsers({
                        name:response.data.users[0].displayName,
                        email:response.data.users[0].email,
                        localId:response.data.users[0].localId
                        })
                    }
                 )

            }
        },[])
        const logoutUser=()=>{
            logout();
            navigate('/login')


        }
      if(!isAuthenticated()) {
        return <Navigate to="/login"/>
      }

    return (
        <div>
        <NavBar logoutUser={logoutUser}/>
        <main role="main" className="container mt-5">
            <div className="container">
            <div className="text-center mt-5">
                <h3>Dashboard page</h3>
                { user.name && user.email && user.localId ?
                    (<div>
                        <p className="text-bold " >Hi {user.name}, your Firebase ID is {user.localId}</p>
                        <p> Your Email is {user.email}</p>
                    </div>):<p>LOADING...</p>

                }    
            </div>
            </div>
        </main>
   </div> 
    )
}