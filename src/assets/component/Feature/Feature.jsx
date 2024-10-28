import PropTypes from "prop-types";
import { AiFillLeftCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className=" flex items-center gap-2">
                <AiFillLeftCircle className=" text-green-500"></AiFillLeftCircle>
                {feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature: PropTypes.string
}

export default Feature;