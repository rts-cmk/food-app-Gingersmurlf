import { Link } from "react-router";

export default function NotFound() {
    return(
        <>
            <Link to="/"><h1>404</h1>
                <h2>Gå tilbage til forsiden</h2>
            </Link>
        </>
    )
}