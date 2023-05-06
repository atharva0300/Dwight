import {createContext , useState , useEffect} from 'react'

import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'




const AuthContext = createContext()  // creating the context 
// will have to create -> consumers and providers 


export default AuthContext

export const AuthProvider = ({children}) => {


    let [authTokens , setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null )
    let [user , setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : false )
    let [loading , setLoading ] = useState(true)


    let loginUser = async (item) => {
        console.log(item['username'])
        console.log(item['password'])

        let response = await fetch('http://127.0.0.1:8000/api/token/' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'username' : item['username'] , 'password' : item['password']})  // sending the username and the password to the server ( the null values )
        })

        let data = await response.json()    // parsing the response 
        console.log('data : ' , data)
        console.log('response : ' , response)
        if(response.status===200){
            setAuthTokens(data) // set and store the token
            setUser(jwt_decode(data.access))    // getting the access token, decoding it and setting it to user  
            // jwt_decode -> decoddes the token 

            // setting the localStorage value 
            localStorage.setItem('authTokens' , JSON.stringify(data))
        }else{
            alert('Something went wrong!')
        }
        
    }

    let logoutUser = () => {
        console.log('handling signout')
        setAuthTokens(null)
        setUser(false)
        localStorage.removeItem('authTokens')
    }

    let updateToken  = async () => {
        console.log('update token calling!')

        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'refresh' : authTokens.refresh})  // sending the username and the password to the server ( the null values )
        })

        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data) // set and store the token
            setUser(jwt_decode(data.access))    // getting the access token, decoding it and setting it to user  
            // jwt_decode -> decoddes the token 

            // setting the localStorage value 
            localStorage.setItem('authTokens' , JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user : user,
        loginUser :  loginUser,
        logoutUser : logoutUser,
        authTokens : authTokens
    }

    useEffect(() => {

        if(loading){
            // we still need to update the token 
            updateToken()
        }

        console.log('inside update useEffect')
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            console.log('inside interval')
            if(authTokens){
                updateToken()
            }
        } , fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens , loading])


    return(
        <AuthContext.Provider value = {contextData}>
            {children}
        </AuthContext.Provider>
    )
}