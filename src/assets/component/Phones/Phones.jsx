import axios from "axios";
import { useEffect, useState } from "react";
import { CartesianGrid, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";


const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))


        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData)
            });
    }, [])

    return (
        <div>
            <h2 className="text-3xl">Phones:{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Bar dataKey="name" fill="blue" /> */}
                <Bar dataKey="price" fill="red" />
            </BarChart>
        </div>
    );
};

export default Phones;