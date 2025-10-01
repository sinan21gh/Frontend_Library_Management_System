import { useEffect, useState } from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import LogOut from "./LogOut.jsx";


function Profile() {
    const [profile, setProfile] = useState(null);

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

    if (!profile) return <p>Loading profile...</p>;

    return (
        <>
            <h2 id="profileh2">My Profile</h2>
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
            </div>

        </>
    )
}

export default Profile
