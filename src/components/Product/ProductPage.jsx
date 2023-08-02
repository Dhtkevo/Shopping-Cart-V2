import Card from "../Card/Card";
import { Outlet } from "react-router";

const ProductPage = () => {
    return (
        <>
            <Outlet />
            <div className="w-full h-full bg-slate-100 px-24 pt-12 pb-8">
                <h1 className="font-bold text-5xl mb-4">Products</h1>
                <section className=" h-full  grid grid-cols-3 gap-4">
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </>
    );
}

export default ProductPage;