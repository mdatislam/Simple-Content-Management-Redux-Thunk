import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { modifiedContent } from "../../redux/thunk/modifiedContent";
import Swal from "sweetalert2";
//import { useEffect } from "react";
//import { fetchContent } from "../../redux/thunk/fetchContent";


const UpdateContent = () => {
    // const params= useParams()
    // const id=params.contentId 
    // console.log(id);
     
    // useEffect(()=>{
    //     dispatch( fetchContent())
    //  },[])
    //  const contents = useSelector(state => state.contents.contents)
   
    //  const targetContent = contents.find(content=>content._id===id)
     const targetContent = useLoaderData()
     console.log(targetContent);
    const {name,category,price,image,_id}=targetContent
    const dispatch= useDispatch()
     const navigate= useNavigate()

    const {
        register, reset,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {

        const newContent = {
            name: data.name || name,
            category: data.category || category,
            image: data.image || image,
            price: data.price ||price,
            remark: data.remarks
        }
        console.log(newContent)
         dispatch(modifiedContent({newContent,_id}))
        navigate("/Dashboard/ContentList")
        Swal.fire("Saved!", "", "success");
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
                        <input defaultValue={name} type='text' id='name' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='category'>
                            Category
                        </label>
                        <input defaultValue={category} type='text' id='category' {...register("category")} className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='image'>
                            Image
                        </label>
                        <input defaultValue={image} type='text' id='image' {...register("image")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='price'>
                            Price
                        </label>
                        <input defaultValue={price} type='text' id='price' {...register("price")} className="input input-bordered w-full max-w-xs" />
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
            </div>
    );
};

export default UpdateContent;