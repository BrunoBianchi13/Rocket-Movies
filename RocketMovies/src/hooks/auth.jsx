import { createContext, useContext, useState, useEffect} from 'react'
import { api } from '../services/api';

export const AuthContext = createContext({})



function AuthProvider({ children }){ 

  

  const[data, setData] = useState({})
  async function signIn({ email, password}){


    try {
      const response = await api.post("/sessions" , { email, password })
      const { user, token } = response.data
      localStorage.setItem("@rockmovies:user", JSON.stringify(user))
      localStorage.setItem("@rockmovies:token", token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({user, token})
      alert("Login efetuado!!!")
    } catch (error) {
      alert("Nao foi possivel efetuar o Login!!!")
    }

    
    
  }

  async function updateProfile({ user, avatarFile }){
    try {
      
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      console.log(user)

      await api.put("/users", user);

      localStorage.setItem("@rockmovies:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });

      alert("Perfil atualizado!!!");
      

    } catch (error) {
      alert("Nao foi possivel atualizar!!!")
    }
  }

  function signOut(){
  
  localStorage.removeItem("@rockmovies:token");
  localStorage.removeItem("@rockmovies:user");

  setData({});

  
  }

  

  useEffect(()=>{
    const token = localStorage.getItem("@rockmovies:token");
    const user = localStorage.getItem("@rockmovies:user");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);
  return(
    <AuthContext.Provider value={{signIn, user: data.user, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}



function useAuth(){
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth }