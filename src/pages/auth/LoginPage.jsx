import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


export default function LoginPage() {

    const handleLogin = async e => {
        e.preventDefault()
    }
    return (
        <main>
            <div id="space-on-top-of-page" className="container auth">
                <h1 className='matrix-element'>Log in to <span className='clp-green-border' style={{ display: "block" }}>Client Learning Protocol</span></h1>

                <form onClick={handleLogin} className='auth-form'>
                    <div className="login-input-container">
                        <MdOutlineMailOutline className='icon-in-text-field' />
                        <input className='login-input' type="email" placeholder="Email" />
                    </div>
                    <div className="login-input-container">
                        <RiLockPasswordLine className='icon-in-text-field' />
                        <input className='login-input' type="password" placeholder="Password" />
                    </div>
                </form>

                <p>Don't have an account yet? <Link to="">Sign up</Link></p>
                <p><Link to="">Forgot password?</Link></p>

                <button type="submit">LOGIN</button>
                <button>Continue with Google</button>
            </div>
        </main>
    )
}

//  UI - TO DO
{/* 
    1. make green boarder thinner
    2. add input validations
        - email needs to have @ symbol
        - password needs one upper, one lower, special, num, & min length
    3. fix button look. Still do not have a good universal btn yet
    4. fix footer. Looks weird in the middle of the page lol  
*/}