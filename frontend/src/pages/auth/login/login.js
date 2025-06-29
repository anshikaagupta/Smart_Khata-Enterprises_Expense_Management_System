import {useEffect, useState} from 'react';
import '../../../assets/styles/register.css';
import {useForm} from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import Logo from '../../../components/utils/Logo';

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getCurrentUser() && Array.isArray(AuthService.getCurrentUser().roles) && AuthService.getCurrentUser().roles.includes("ROLE_USER")) {
            navigate("/user/dashboard");
        }else if (AuthService.getCurrentUser() && Array.isArray(AuthService.getCurrentUser().roles) && AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")) {
            navigate("/admin/transactions");
        }
    }, [])


    const {register, handleSubmit,formState} = useForm();

    const [response_error, setResponseError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true)        
        await AuthService.login_req(data.email, data.password).then(
            () => {
                setResponseError("");

                setTimeout(() => {
                    if (AuthService.getCurrentUser() && Array.isArray(AuthService.getCurrentUser().roles) && AuthService.getCurrentUser().roles.includes("ROLE_USER")) {
                        navigate("/user/dashboard");
                    }else if (AuthService.getCurrentUser() && Array.isArray(AuthService.getCurrentUser().roles) && AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")) {
                        navigate("/admin/transactions");
                    }
                }, 5000)
                localStorage.setItem("message", JSON.stringify({ status: "SUCCESS", text: "Login successfull!" }))
            },
            (error) => {
                const resMessage =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                console.log(resMessage);
                if (resMessage === "Bad credentials"){
                    setResponseError("Invalid email or password!");
                }else {
                    setResponseError("Something went wrong: Try again later!");
                }
            }
          );
        setIsLoading(false);
    }

    return(
        <div className="login-bg-cyber">
            {/* Geometric SVG shapes background - diamonds distributed across the background */}
            <div className="login-geo-bg">
                <svg width="60" height="60" style={{top:'8%',left:'7%',position:'absolute'}}><rect x="20" y="20" width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2.5" transform="rotate(45 30 30)"/></svg>
                <svg width="50" height="50" style={{top:'12%',right:'10%',position:'absolute'}}><rect x="15" y="15" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2" transform="rotate(45 25 25)"/></svg>
                <svg width="40" height="40" style={{top:'50%',left:'5%',position:'absolute'}}><rect x="10" y="10" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2" transform="rotate(45 20 20)"/></svg>
                <svg width="40" height="40" style={{top:'60%',right:'8%',position:'absolute'}}><rect x="10" y="10" width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2" transform="rotate(45 20 20)"/></svg>
                <svg width="50" height="50" style={{bottom:'10%',left:'15%',position:'absolute'}}><rect x="15" y="15" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2" transform="rotate(45 25 25)"/></svg>
                <svg width="60" height="60" style={{bottom:'12%',right:'12%',position:'absolute'}}><rect x="20" y="20" width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2.5" transform="rotate(45 30 30)"/></svg>
                <svg width="40" height="40" style={{top:'40%',left:'50%',position:'absolute'}}><rect x="10" y="10" width="20" height="20" fill="none" stroke="#00fff0" strokeWidth="2" transform="rotate(45 20 20)"/></svg>
            </div>
            <div className="login-form-card-cyber">
                <form className="auth-form login-card-professional cyber-card"  onSubmit={handleSubmit(onSubmit)}>
                    <Logo/>
                    <h2 className="cyber-heading">Login</h2>
                    {
                        (response_error!=="") && <p>{response_error}</p>
                    }
                    
                    <div className='input-box'>
                        <label>Email</label><br/>
                        <input 
                            type='text'
                            {...register('email', {
                                required: "Email is required!",
                                pattern: {value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Invalid email address!"}
                            })}
                        />
                        {formState.errors.email && <small>{formState.errors.email.message}</small>}
                    </div>
                    
                    <div className='input-box'>
                        <label>Password</label><br/>
                        <input 
                            type='password'
                            {
                                ...register('password', {
                                    required: 'Password is required!'
                                })
                            }
                        />
                        {formState.errors.password && <small>{formState.errors.password.message}</small>}
                    </div>
                    <div className='msg'> <Link to={'/auth/forgetpassword/verifyEmail'} className='inline-link'>Forgot password?</Link></div><br/>
                    
                    <div className='input-box'>
                        <input type='submit' value={isLoading ? "Logging in..." : 'Login'}
                            className={isLoading ? "button button-fill loading cyber-btn" : "button button-fill cyber-btn"}
                        />
                    </div>
                    <br/><div className='msg'>New member? <Link to='/auth/register' className='inline-link'>Register Here</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login;