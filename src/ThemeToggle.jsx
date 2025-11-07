import {useEffect, useState} from "react";

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
export default ThemeToggle;