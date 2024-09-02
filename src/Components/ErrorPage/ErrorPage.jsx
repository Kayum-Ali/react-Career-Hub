import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            
            <h2>ooops!!!</h2>
            <Link to='/' className="btn btn-accent">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;