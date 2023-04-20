import "../index.css";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorRoot() {
    const error = useRouteError();
    return <main>
        <p>Unexpected error:</p>
        <p>{error.statusText || error.message}</p>
        <Link to={"/"}>HOME</Link>
    </main>;
};

export default ErrorRoot;