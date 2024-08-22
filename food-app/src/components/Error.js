import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return(
        <div>
            <h1>Oops.....</h1>
            <h2>{error.status}: {error.error.message}</h2>
        </div>
    )
}

export default Error;