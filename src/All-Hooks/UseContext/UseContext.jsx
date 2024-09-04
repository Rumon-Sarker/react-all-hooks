import { createContext } from "react";


export const AuthProvider = createContext();

const UseContext = ({ children }) => {
    const userInfo = {
        name: 'Rumon',
        email: "mdsrrumon1234@gmail.com",
        phone: "017*****67"
    }

    return (
        <AuthProvider.Provider value={{ userInfo }}>
            {children}
        </AuthProvider.Provider>
    )
}
export default UseContext;