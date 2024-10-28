import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "features": [
                "Access to gym floor",
                "Locker room access",
                "1 personal training session per month",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "features": [
                "Access to gym floor",
                "Locker room access",
                "5 personal training sessions per month",
                "Access to group fitness classes",
                "Access to swimming pool",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 80,
            "features": [
                "Access to gym floor",
                "Locker room access",
                "Unlimited personal training sessions",
                "Access to group fitness classes",
                "Access to swimming pool and sauna",
                "Nutrition counseling",
                "Free protein shake per visit",
                "Priority support",
                "Free Wi-Fi"
            ]
        }
    ]


    return (
        <div className="mx-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;