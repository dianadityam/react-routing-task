import { useParams } from "react-router-dom";

const Categories = (e) => {
    const params = useParams();

    return (
        <div>
            <h4>{params.name} Category Page</h4>
        </div>

    ) 
};

export default Categories;