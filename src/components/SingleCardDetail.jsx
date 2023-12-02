import { useLoaderData } from "react-router-dom";
import { TbCoinTaka } from "react-icons/tb";


const SingleCardDetail = () => {
    const content = useLoaderData()
    //console.log(content);
    const { name, image, price, recipe, rating } = content


    return (
        <div>
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                <figure>

                    <p className="flex absolute right-4 top-2 bg-slate-700 p-1 rounded-lg text-white">
                        <TbCoinTaka className="w-6 h-6 text-white-400" />
                        {price}</p>
                    {(location.pathname.includes("History")) && <p className="absolute left-4 top-2 bg-slate-700 p-2 rounded-lg text-white">{rating}</p>}

                    <img src={image} alt={name} />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleCardDetail;