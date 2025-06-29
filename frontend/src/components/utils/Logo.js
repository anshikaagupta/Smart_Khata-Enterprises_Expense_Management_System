import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (
        <h1 className="logo" onClick={() => {navigate('/')}} style={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer',fontFamily:'var(--cyber-font)',fontWeight:'bold',fontSize:'1.35rem',color:'var(--cyber-primary)',textShadow:'0 0 8px #00FF9D, 0 0 2px #00FF9D', margin:0, padding:0, lineHeight:1}}>
            {/* Neon Wallet SVG */}
            <span style={{display:'inline-flex',alignItems:'center'}}>
                <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="8" width="32" height="22" rx="6" fill="#181818" stroke="#00FF9D" strokeWidth="2.5" filter="url(#glow)"/>
                  <rect x="7" y="14" width="20" height="10" rx="3" fill="#0f0f0f" stroke="#00FF9D" strokeWidth="1.5"/>
                  <circle cx="28" cy="19" r="2.5" fill="#00FF9D"/>
                  <defs>
                    <filter id="glow" x="-5" y="0" width="46" height="36" filterUnits="userSpaceOnUse">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00FF9D"/>
                    </filter>
                  </defs>
                </svg>
            </span>
            <span style={{fontFamily:'var(--cyber-font)',fontWeight:'bold',letterSpacing:'1px',color:'var(--cyber-primary)',textShadow:'0 0 8px #00FF9D, 0 0 2px #00FF9D', fontSize:'1.15rem'}}>SmartKhata</span>
        </h1>
    )
}

export default Logo;