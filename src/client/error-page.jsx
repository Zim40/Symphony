import { useRouteError } from "react-router-dom";
import { CgDanger } from "react-icons/cg";

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
            </div>
        </div>
    );
}