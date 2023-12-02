import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { uploadContent } from "../../redux/thunk/uploadContent";
import { useNavigate } from "react-router-dom";


const AddContent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register, reset,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {

        const newContent = {
            name: data.name,
            category: data.category,
            image: data.image || "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
            price: data.price,
            remark: data.remarks
        }
        console.log(newContent)
        dispatch(uploadContent(newContent))
        navigate("/Dashboard/ContentList")
        reset()

    }



    return (
        <div className="card shadow-lg mt-4 bg-slate-100 mx-4 mb-4">

            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row gap-3">
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input type='text' id='name' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='category'>
                            Category
                        </label>
                        <input type='text' id='category' {...register("category")} className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input type='text' id='image' {...register("image")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='price'>
                            Price
                        </label>
                        <input type='text' id='price' {...register("price")} className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='remarks'>
                        Remarks
                    </label>
                    <textarea type='text' id='remarks' {...register("remarks")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>

            <p>
                Default image:https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg
            </p>

        </div>
    );
};

export default AddContent;