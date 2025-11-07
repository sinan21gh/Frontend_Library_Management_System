import {useState} from "react";
import {useNavigate} from "react-router-dom";
const delay = 300;


function AboutUs(){
    const [visibleId, setVisibleId] = useState(null);
    const navigate = useNavigate();

    const d = (answerId) => {
        try{
            // clearTimeout(window.transitionTimeout);

            if(visibleId === answerId){
                setVisibleId(null);
                return;
            }

            setVisibleId(null);

            setTimeout(() => {
                setVisibleId(answerId);
            },delay);
        }
        catch (e) {
            console.log(e);
        }
    };

    function goTo(to){
        navigate(`/${to}`);
    }


    return(
        <div>
            <header className=".app-header">
                <h1>Library4u</h1>
                <div className="heading1divs">
                    <button id="b11" onClick={() => goTo("")}>Create Account</button>
                    <button id="b22" onClick={() => goTo("login")}>Login</button>
                </div>
            </header>

            <nav>
                <h1 style={{textAlign:"center", marginTop:"200px", maxwidth:"90vw", backgroundColor:"blue",
                    borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px", padding:"80px", fontSize:"6.5rem",
                    fontFamily: "BBH Sans Hegarty, sans-serif"
                    , fontWeight:"bold"}}>
                    About Us</h1>
            </nav>

            <main>
                <div className="questions">
                    <ul className="aboutus">
                        <li>
                            <button onClick={() => d('a1')}>What Services Do We Provide? {visibleId === 'a1' ? "⮟" : "⮝"}</button>
                                <div id="a1" className={visibleId === 'a1' ? 'answer show' : 'answer'}>At the moment we only allow users to create authors and assign several books to each author, users can also search for books and authors.</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"400px"}}/>
                        <li>
                            <button onClick={() => d('a2')}>What Services Should Users Expect? {visibleId === 'a2' ? "⮟" : "⮝"}</button>
                            <div id="a2" className={visibleId === 'a2' ? 'answer show' : 'answer'}>We will soon allow users to borrow books and give feedback on these books.</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"400px"}}/>

                        <li className="faq-item">
                            <button onClick={() => d('a3')}>Do We Have Social Media? {visibleId === 'a3' ? "⮟" : "⮝"}</button>
                            <div id="a3" className={visibleId === 'a3' ? 'answer show' : 'answer'}>We do not own any social media accounts.</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"400px"}}/>




                    </ul>
                </div>
            </main>
        </div>
    )
}
export default AboutUs