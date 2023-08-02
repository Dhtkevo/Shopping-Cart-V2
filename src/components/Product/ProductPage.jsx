import Card from "../Card/Card";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUserData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setUsers(json))
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <Outlet />
            <div className="w-full h-full bg-slate-100 px-24 pt-12 pb-8">
                <h1 className="font-bold text-5xl mb-4">Products</h1>
                <section className=" h-full  grid grid-cols-3 gap-4 gap-y-0">
                    {users.map(prod => (
                        <Card title={prod.title} price={prod.price} img={prod.image} key={prod.id} />
                    ))}

                </section>
            </div>
        </>
    );
}

export default ProductPage;