import { useContext } from "react";
import { AuthProvider } from "./UseContext";


const UserProfile = () => {

    const { userInfo } = useContext(AuthProvider)

    console.log(userInfo)
    return (
        <div className="bodyStyle">
            <h1>UseContext Hook</h1>
            <br />
            <h2>Name: {userInfo?.name}</h2>
            <h2>Email: {userInfo?.email}</h2>
            <h2>Phone: {userInfo?.phone}</h2>
        </div>
    );
};

export default UserProfile;