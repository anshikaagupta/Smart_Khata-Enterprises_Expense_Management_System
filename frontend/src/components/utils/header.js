import { memo, useContext, useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import user from '../../assets/images/user.png'
import useProfileImage from "../../hooks/useProfileImage";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = memo(({ title}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [profileImg] = useProfileImage();
    const {isDarkMode} = useContext(ThemeContext)

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setEmail(user.email)
            setUsername(user.username)
        }
    }, [])

    return (
        <div className='top'>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className='profile'>
                <div className="profile-img">
                    {!profileImg && <img src={user} width={50} height={50} alt='user'/>}
                    {profileImg !== null && <img src={profileImg} width={50} height={50} alt='user'/>}
                </div>
                <div>
                    <p>{username}</p>
                    <p>{email}</p>
                </div>
                {/* Neon theme icon, non-clickable */}
                <span style={{marginLeft:'12px', display:'flex', alignItems:'center'}}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{filter:'drop-shadow(0 0 8px #00FF9D88)'}}>
                    <circle cx="16" cy="16" r="13" stroke="#00FF9D" strokeWidth="2.5" fill="#181818"/>
                    <path d="M16 8V16L21 19" stroke="#00FF9D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
            </div>
        </div>
    )
})

export default Header;