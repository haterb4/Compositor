import { Button } from '@material-tailwind/react'
import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import styles from '../styles/Login.module.css'

const login = () => {
  return (
    <AuthLayout title='login Page'>
        <div className={styles.loginForm}>
            <h1 className='font-bold text-xl'>Connexion</h1>
            <div className='w-full flex flex-col justify-between items-center py-4 mt-4 h-64'>
                <div className='w-full'>
                    <input type="text" name="" id="" placeholder='Email' className='w-full h-12 border outline-none px-3'/>
                </div>
                <div className='w-full'>
                    <input type="text" name="" id="" placeholder='Mot de passe' className='w-full h-12 border outline-none px-3'/>
                </div>
                <div>
                    <Button className='mt-8'>Se connecter</Button>
                </div>
            </div>
        </div>
    </AuthLayout>
  )
}

export default login