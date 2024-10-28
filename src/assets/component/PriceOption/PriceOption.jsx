import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="rounded-md p-4 bg-blue-500 flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h2 className="tex-3xl text-center">{name}</h2>
           <div className="pl-6 flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="px-4 py-3 bg-green-400 hover:bg-green-600 mt-5 rounded-xl w-full font-bold text-white">Boy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;