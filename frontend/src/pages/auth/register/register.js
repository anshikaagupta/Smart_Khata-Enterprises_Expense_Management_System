import {useRef, useState } from 'react';
import '../../../assets/styles/register.css';
import { Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import AuthService from '../../../services/auth.service';
import Logo from '../../../components/utils/Logo';

function Register() {

    const navigate = useNavigate();

    const {register, handleSubmit, watch, formState} = useForm();
    const password = useRef({});
    password.current = watch('password', "");

    const [response_error, setResponseError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        setIsLoading(true)        
        await AuthService.register_req(data.username, data.email, data.password).then(
            (response) => {
                console.log(response);
                if (response.data.status === "SUCCESS"){
                    setResponseError("");
                    navigate(`/auth/userRegistrationVerfication/${data.email}`);
                }
                else {
                    setResponseError("Registration failed: Something went wrong!")
                }
            },
            (error) => {
                if (error.response) {
                    const resMessage = error.response.data.response
                    setResponseError(resMessage);
                    console.log(error.response.data);
                }else {
                    setResponseError("Registration failed: Something went wrong!")
                }
                
            }
          );
        setIsLoading(false);
    }

    return (
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
                <Logo/>
                <h2 className="cyber-heading">Register</h2>
                {
                    (response_error!=="") && <p>{response_error}</p>
                }
                <div className='input-box'>
                    <label>Username</label><br/>
                    <input 
                        type='text'
                        {...register('username', {
                            required: "Username is required!"
                        })}
                    />
                    {formState.errors.username && <small>{formState.errors.username.message}</small>}
                </div>
                
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
                                required: 'Password is required!',
                                minLength: {
                                    value:8,
                                    message: "Password must have atleast 8 characters"
                                }
                            })
                        }
                    />
                    {formState.errors.password && <small>{formState.errors.password.message}</small>}
                </div>
                
                <div className='input-box'>
                    <label>Confirm Password</label><br/>
                    <input 
                        type='password'
                        {
                            ...register('cpassword', {
                                required: 'Confirm password is required!',
                                minLength: {
                                    value:8,
                                    message: "Password must have atleast 8 characters"
                                },
                                validate: cpass => cpass === password.current || "Passwords do not match!"
                            })
                        }
                    />
                    {formState.errors.cpassword && <small>{formState.errors.cpassword.message}</small>}
                </div>
                
                <div className='input-box'>
                    <input type='submit' value={isLoading ? "Please wait" : 'Register'}
                     className={isLoading ? "button button-fill loading cyber-btn" : "button button-fill cyber-btn"}
                    />
                </div>
                <br/><div className='msg'>By clicking Register, you are agree to our user agreement, privacy policy, and cookie policy.</div>
                <br/><div className='msg'>Already a member? <Link to='/auth/login'  className='inline-link'>Login Here</Link></div>
            </div>
        </div>
    )
}

export default Register;