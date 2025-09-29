import { useEffect, useState } from "react";
import axios from "axios";

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
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>My Profile</h2>
            <img
                src={profile.imageUrl}
                alt="Profile"
                style={{ width: "150px", borderRadius: "50%" }}
            />
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Password:</strong> *************</p>
        </div>
    );
}

export default Profile;
