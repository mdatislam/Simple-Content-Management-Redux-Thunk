import { useNavigate } from 'react-router-dom';
import loginBack from '../../assets/Login-background.jpg'

const Login = () => {
    const navigate= useNavigate()

    const handleSubmit=()=>{
navigate('/Home')
    }
    return (
        <div className="bg-base-300 h-[calc(100vh-25px)]">
        <div className="hero  bg-base-200 mt-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center hidden lg:block">
                    <img src={loginBack} alt="logimg" />
                </div>

                <form className="card flex-shrink-0 w-96 mx-auto max-w-sm shadow-2xl bg-base-100 mt-5" onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-xl font-bold"> Login now !</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="No need just click Login" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="No need just click Login" className="input input-bordered" name='password'  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                           
                        </div>
                        <div className="form-control mt-6">
                                <input className="btn btn-info"  type="submit" value="Login" />
                            </div>

                    </div>
                </form>

            </div>
        </div>


    </div>
    );
};

export default Login;