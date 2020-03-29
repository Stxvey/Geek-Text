import { createContext, useContext} from 'react'

//Create a global context that other components can reach out to
export const AuthContext = createContext({
    user: {}
});

export function useAuth(){
    return useContext(AuthContext)
}