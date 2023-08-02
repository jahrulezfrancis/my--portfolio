import "./index.css"
import { useNavigate } from "react-router-dom"
import { Text } from "@chakra-ui/react";

export default function PageNotFound() {
    const Navigate = useNavigate()

    setTimeout(() => {
        Navigate("/")
    }, 5000);

    return (
        <div className="page-not-found-container">
            <Text style={{ textAlign: "center" }}>
                Francis is not sure of the page you are looking for, it seems to not to be available. <br />
                Redirecting...
            </Text>
        </div>
    )
}