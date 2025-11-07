import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

function Heading(props){
    const navigate = useNavigate();

    function goTo(to){
        navigate(`/${to}`);
    }

    function ThemeToggle() {
      const [dark, setDark] = useState(false);

      useEffect(() => {
        document.body.classList.toggle("dark-mode", dark);
      }, [dark]);

      return (
        <div className="theme-toggle">
          <label>Light</label>
          <label className="switch">
            <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
            <span className="slider"></span>
          </label>
          <label>Dark</label>
        </div>
      );
    }


    return(
        <header className=".app-header">
            <h1 onClick={() => goTo("about")}>Library4u</h1>
            <div className="heading2divs">
                <button id="b111" onClick={() => goTo("books")}>Home Page</button>
                <button id="b222" onClick={() => goTo("profile")}>Profile</button>
            </div>
            <h2>{props.heading}</h2>
        </header>
    )
}
export default Heading