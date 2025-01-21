import { useRouteError } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="error-container">
                <CgDanger className="danger-icon" />
                <p className="error-text">Sorry, an unexpected error has occurred.</p>
                <p className="error-text">
                    <i>{error.statusText || error.message}</i>
                </p>
                <button><Link to={'/'}>Return Home</Link></button>
            </div>
        </div>
    );
}