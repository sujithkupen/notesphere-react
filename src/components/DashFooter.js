import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate,useLocation } from "react-router-dom";

const DashFooter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    
    const onHomeClick = () => {
        navigate("/dash");
    }
    let goHome = null;
    if (pathname !== "/dash") {
        goHome = (
            <button className="dash-footer__button icon-button" title="Home" onClick={onHomeClick}>
                <FontAwesomeIcon icon={faHouse} />
            </button>
        );
    }


    const content = (

        <footer className="dash-footer">
            {goHome}
            <p>Current User:</p>
            <p>Status:</p>
            <p>© 2024 NoteSphere</p>
        </footer>

    );

    return content;
}

export default DashFooter;