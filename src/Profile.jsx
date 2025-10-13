import { useEffect, useState } from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import LogOut from "./LogOut.jsx";
import Dropdown from "./Dropdown.jsx";
import {useNavigate} from "react-router-dom";


function Profile() {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:8080/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProfile(res.data);
            } catch (err) {
                console.error("Failed to fetch profile", err);
            }
        };
        fetchProfile();
    }, []);

    const deleting = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.delete("http://localhost:8080/deleteuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.status === 204){
                setMessage("Successfully deleted");
            }
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        }
        catch (e) {
            console.log(e);
        }

    }

    if (!profile) return <p>Loading profile...</p>;

    return (
        <>
            <div className="body2">
                <h1 style={{color:"white"}} id="profileh2">My Profile</h1>
                <Dropdown/>
                <LogOut/>

                <div className="profileinfo">

                    <img
                        src={userIcon}
                        alt="Profile"
                        style={{ width: "150px", borderRadius: "50%" }}
                    />
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Password:</strong> *************</p>
                    <br/>
                    <button onClick={deleting}>delete account</button>
                    <p>{message}</p>
                </div>

            </div>

        </>
    )
}

export default Profile
