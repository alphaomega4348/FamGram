import { getCurrentUser } from '@/lib/appwrite/api';
import { IContextType, IUser } from '@/types';
import {createContext,useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const INTITAL_USER={
    id :'',
    name:'',
    username:'',
    email:'',
    imageUrl:'',
    bio:''
};

const INITIAL_STATE={
        user: INTITAL_USER,
        isLoading:false,
        setUser:()=>{},
        isAuthenticated:false,
        setIsAuthenticated:()=>{},
        checkAuthUser: async ()=> false as boolean
}
 const AuthContext=createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({children }:{children : React.ReactNode}) => {
    const [user,setUser]=useState<IUser>(INTITAL_USER);
    const[isLoading,setIsLoading]= useState(false);
    const[isAuthenticated,setIsAuthenticated]= useState(false);
    const navigate=useNavigate();

    const checkAuthUser= async()=>{
       try{
        const currentAccount= await getCurrentUser();
        if(currentAccount){
            setUser({
                id:currentAccount.$id,
                name:currentAccount.name,
                email:currentAccount.email,
                username:currentAccount.username,
                imageUrl:currentAccount.imageUrl,
                bio:currentAccount.bio

            })
            setIsAuthenticated(true);
            return true;
        }
        return false;
       }
       catch(err){
        console.log(err);
        return false;
       }
       finally{
        setIsLoading(false);
       }
    }
  
    useEffect(()=>{
        //   localStorage.getItem('cookieFallback') === null
        if(localStorage.getItem('cookieFallback') === '[]'
        )  navigate('/sign-in');

        checkAuthUser();
    },[])

    const value={
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useUserContext=()=>useContext(AuthContext);