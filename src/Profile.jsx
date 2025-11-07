import { useEffect, useState } from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import LogOut from "./LogOut.jsx";
import Dropdown from "./Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer.jsx";
import PopUp from "./PopUp.jsx";
import Heading from "./Heading.jsx";
import ThemeToggle from "./ThemeToggle.jsx";


function Profile() {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const [temp, setTemp] = useState(null);


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



    const popUp = () => {
        setTemp("c");
        setTimeout(() => {
            setTemp(null);
        }, 15000);
    };

    if (!profile) return <p>Loading profile...</p>;

    return (
        <>

            <div className="page-container profile-page">
                <header className=".app-header">
                    <h1>Library4u</h1>
                    <div className="heading3divs">
                        <button id="b111" >Home Page</button>
                        <button id="b222">Profile</button>
                    </div>
                    <h2>profile</h2>
                    <Dropdown/>
                    <ThemeToggle />
                </header>
                <LogOut/>

                {temp ? <PopUp/> : ""}

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

                <div id="db5">
                    <p>{message ?? message}</p>
                    <button onClick={popUp}>Delete Account</button>
                </div>



            </div>

        </>
    )
}

export default Profile
