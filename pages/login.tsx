import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import styles from '../styles/Login.module.css'

type ChildProps = {}

const Login= () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [emailError, setEmailError] = useState("false")
  const [passwordError, setPasswordlError] = useState("false")
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const login = () => {
    if (email.length === 0){
        setError(true)
        setEmailError("Email is required")
    }
    if (password.length === 0){
        setError(true)
        setPasswordlError("Password is required")
    }
    if (email && password){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email.match(mailformat)){
            if (password.length < 8){
                setError(true)
                setPasswordlError("Password is too short")
            }
            else{
                if (email === 'sarah@gmail.com' && password === 'xccm xccm'){
                    const destination = window.location.origin
                    window.location.href = `${destination}/projects-manager`
                }
                else{
                    setError(true)
                    setEmailError("incorrect email address")
                    setPasswordlError("Incorrect password")
                }
            }
        }
        else{
            setError(true)
            setEmailError("Email is not valid email format")
        }
    }
  }
  const resetError = () => {
    setError(false)
    setEmailError("")
    setPasswordlError("")
  }
  useEffect(() => {
    resetError()
  }, [])
  return (
    <AuthLayout title='login Page'>
        <div className={styles.loginForm}>
            <h1 className='font-bold text-xl'>Connexion</h1>
            <div className='w-full flex flex-col justify-between items-center py-4 mt-4 h-64'>
                <div className={error?styles.loginFieldErr:styles.loginField}>
                    <input type="text" name="" id="" placeholder='Email'
                        className='w-full h-12 border outline-none px-3'
                        onChange={ e => setEmail(e.target.value)}
                        onClick={resetError}
                    />
                    {emailError && (<p className='my-1 text-xs'>{emailError}</p>)}
                    {email && <span className='text-xs'>Email</span>}
                </div>
                <div className={error?styles.loginFieldErr:styles.loginField}>
                    <input type={passwordIsVisible? "text" :"password"} name="" id="" placeholder='Mot de passe'
                        className='w-full h-12 border outline-none px-3'
                        onChange={ e => setPassword(e.target.value)}
                        onClick={resetError}
                    />
                    {passwordIsVisible && (<div className={styles.eye}><FontAwesomeIcon icon={faEye} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div>) }
                    {!passwordIsVisible && <div className={styles.eye}><FontAwesomeIcon icon={faEyeSlash} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div> }
                    {passwordError && (<p className='my-1 text-xs'>{passwordError}</p>)}
                    {password && <span className='text-xs'>Mot de passe</span>}
                </div>
                <div>
                    <Button className='mt-8' onClick={login}>Se connecter</Button>
                </div>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Login