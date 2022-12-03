import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container mx-auto flex items-center border-b-1 border-gray-100 px-6 py-2 h-24">
            <div className="w-full">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h1>
                            <Image src="/ecovision.svg" 
                                alt="branding logo" 
                                width={188} 
                                height={72} />
                        </h1>
                        <div className="grow">
                            <div className="flex items-center justify-start gap-2 md:gap-8">
                                <Link href="home" 
                                    className="font-semibold text-gray-500">Home</Link>
                                <Link href="prescription-glasses" 
                                    className="font-semibold text-gray-500">Prescription Glasses</Link>
                                <Link href="sunglasses" 
                                    className="font-semibold text-gray-500">Sunglasses</Link>
                                <Link href="list-an-eyewear" 
                                    className="font-semibold text-gray-500">List an Eyewear</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="login" 
                            className="px-6 py-3 font-semibold text-gray-500">Login</Link>
                        <Link href="signup" 
                            className="bg-primary text-white font-semibold px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Sign up</Link>
                    </div>
                </nav>    
            </div>
        </header>
    )
}

export default Header;