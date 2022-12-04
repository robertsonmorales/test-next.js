import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Input from '../components/BaseInput'
import Checkbox from '../components/BaseCheckbox'

const Login = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Buy, Sell, Recycle your Eyewear | ecoVision</title>
                <meta name="description" content="Start selling your new and used eyewears easily. It’s good for you and for the environment." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <main className='p-5'>
                
                <div className='flex items-center justify-center h-screen'>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 items-center mb-8">
                            <h1 className='text-3xl font-semibold'>Log in to your account</h1>
                            <p className="text-gray-500">Welcome back! Please enter your details.</p>
                        </div>

                        <form className="form-group" method="post">
                            <Input for="email" 
                                type="text" 
                                placeholder="Enter your email" />
                                
                            <Input for="password" 
                                type="password" 
                                placeholder="Enter your password" />
                            
                            <div className="flex justify-between">
                                <Checkbox />

                                <a href="/forgot-password"
                                    className='text-link text-primary text-sm font-semibold'>Forgot Password</a>
                            </div>

                            <div className="login-options mb-6">
                                <button type="submit" 
                                    className="w-full bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg outline-none hover:bg-secondary hover:shadow-lg focus:bg-primary ease-linear transition-all duration-150 mb-4">Sign in</button>
                                <button type="button"
                                    className="w-full bg-white border-2 border-gray-300 px-5 py-2.5 rounded-lg hover:shadow-lg ease-linear transition-all duration-150">
                                    <div className="flex items-center justify-center">
                                        <Image src="/google.svg" 
                                            alt="Google" 
                                            width={24} 
                                            height={24} />
                                        <span className='font-semibold ml-2 text-gray-700'>Sign in with Google</span>
                                    </div>
                                </button>
                            </div>

                            <div className="text-center">
                                <p className='text-sm text-gray-500'>
                                    <span>Don&apos;t have an account yet? </span>
                                    <Link href="/signup" className='text-primary font-semibold'>Sign up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Login