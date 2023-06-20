import React, { useCallback, useState } from 'react'
import Input from '../components/Input'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const Auth = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/creation/draft',
        })
        router.push('/')
    } catch (error) {
        console.log(error)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
        await axios.post('/api/register', {
            email,
            name,
            password
        })
        login()
    } catch (error) {
        console.log(error)
    }
  }, [email, name, password])

  
  return (
    <div className='relative h-full w-full bg-zinc-400'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5 text-white'>
            Composix
        </nav>
        <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md'>
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                {variant === 'login' ? 'Sign in' : 'Create an account'}
                </h2>
                <div className='flex flex-col gap-4'>
                    {variant === 'register' && (
                        <Input 
                            label='Username'
                            onChange={(ev: { target: { value: React.SetStateAction<string> } }) => setName(ev.target.value)}
                            id='email'
                            type='email'
                            value={name}
                        />
                    )}
                    <Input 
                        label='Email'
                        onChange={(ev: { target: { value: React.SetStateAction<string> } }) => setEmail(ev.target.value)}
                        id='email'
                        type='email'
                        value={email}
                    />
                    <Input 
                        label='Password'
                        onChange={(ev: { target: { value: React.SetStateAction<string> } }) => setPassword(ev.target.value)}
                        id='email'
                        type='email'
                        value={password}
                    />
                </div>
                <button
                    onClick={ variant === 'login' ? login : register }
                    className='
                        bg-red-600
                        py-3
                        text-white
                        rounded-md
                        w-full
                        mt-10
                        hover:bg-red-700
                        transition
                    '
                >
                    {variant === 'login' ? 'Login' : 'Sign up'}
                </button>
                <p className='text-neutral-500 mt-12'>
                    {variant === 'login' ? 'First time using composix?' : 'Already have an account?'}
                    <span onClick={toggleVariant} className='text-white ml-1 hover-underline cursor-pointer'>
                        {variant === 'login' ? 'Create an account' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
