import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Input from '../components/BaseInput'

const Signup = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Buy, Sell, Recycle your Eyewear | ecoVision</title>
                <meta name="description" content="Start selling your new and used eyewears easily. It’s good for you and for the environment." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <main className='p-5'>

                <div className='flex items-center justify-center'>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 items-center mb-8">
                            <h1 className='text-3xl font-semibold'>Create an account</h1>
                            <p className="text-gray-500">Sign up to start buying and selling</p>
                        </div>

                        <form className="form-group" method="post">
                            <Input for="name" 
                                type="text" 
                                placeholder="Enter your name"
                                required="true" />

                            <Input for="email" 
                                type="text" 
                                placeholder="Enter your email"
                                required="true" />
                                
                            <Input for="password" 
                                type="password" 
                                placeholder="Create your password"
                                required="true"
                                minLength="8"
                                ruleLabel="Must be at least 8 characters." />

                            <div className="login-options mb-6">
                                <button type="submit" 
                                    className="w-full bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg outline-none hover:bg-secondary hover:shadow-lg focus:bg-primary ease-linear transition-all duration-150 mb-4">
                                    Create account
                                </button>
                                <button type="button"
                                    className="w-full bg-white border-2 border-gray-300 px-5 py-2.5 rounded-lg hover:shadow-lg ease-linear transition-all duration-150">
                                    <div className="flex items-center justify-center">
                                        <Image src="/google.svg" 
                                            alt="Google" 
                                            width={24} 
                                            height={24} />
                                        <span className='font-semibold ml-2 text-gray-700'>Sign up with Google</span>
                                    </div>
                                </button>
                            </div>

                            <div className="text-center">
                                <p className='text-sm text-gray-500'>
                                    <span>Already have an account? </span>
                                    <Link href="/signup" className='text-primary font-semibold'>Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Signup