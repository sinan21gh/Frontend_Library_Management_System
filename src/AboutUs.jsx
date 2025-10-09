import {useState} from "react";
const delay = 300;


function AboutUs(){
    const [visibleId, setVisibleId] = useState(null);

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

    return(
        <div>
            <header className="heading1">
                <h1>Library4u</h1>
                <div className="heading1divs">
                    <button id="b11">Create Account</button>
                    <button id="b22">Login</button>
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
                            <button onClick={() => d('a1')}>What Services Do We Provide?</button>
                                <div id="a1" className={visibleId === 'a1' ? 'answer show' : 'answer'}>At the moment we only allow users to create authors and assign several books to each author, users can also search for books and authors.</div>
                        </li>
                        <li>
                            <button onClick={() => d('a2')}>What Services Should Users Expect?</button>
                            <div id="a2" className={visibleId === 'a2' ? 'answer show' : 'answer'}>We will soon allow users to borrow books and give feedback on these books.</div>
                        </li>
                        <li className="faq-item">
                            <button onClick={() => d('a3')}>Q3</button>
                            <div id="a3" className={visibleId === 'a3' ? 'answer show' : 'answer'}>Answer 3</div>
                        </li>



                    </ul>
                </div>
            </main>
        </div>
    )
}
export default AboutUs