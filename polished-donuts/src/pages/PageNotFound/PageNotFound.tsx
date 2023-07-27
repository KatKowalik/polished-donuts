import "./PageNotFound.scss";
import { Link } from "react-router-dom";
import img from "../../assets/images/404-img.png";


const PageNotFound = () => {
    return (
        <section className="page-notfound">
            <h1 className="page-notfound__title page-header">404 PAGE NOT FOUND</h1>
            <img src={img} alt="crumbs" className="page-notfound__img"/>
            <p className="page-notfound__paragraph paragraph">There are no donuts here...Anymore... Let me take you 
                <Link to="/" className="link">
                    <span className="span"> home.</span>
                </Link>
            </p>
        </section>
    )
}

export default PageNotFound;