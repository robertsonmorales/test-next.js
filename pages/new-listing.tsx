import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Input from '../components/BaseInput'
import Select from '../components/BaseSelect'
import Textarea from '../components/BaseTextarea'
import FileUpload from '../components/BaseFileUpload'
import Radio from '../components/BaseRadio'

const category = [
    {value: "prescription-glasses", text: "Prescription Glasses"},
    {value: "sunglasses", text: "Sunglasses"},
]

const conditions = [
    {value: "brand-new", text: "Brand new"},
    {value: "like-new", text: "Like new"},
    {value: "lightly-used", text: "Lightly used"},
    {value: "well-used", text: "Well used"},
    {value: "heavily-used", text: "Heavily used"}
];

const NewListing = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Buy, Sell, Recycle your Eyewear | ecoVision</title>
                <meta name="description" content="Start selling your new and used eyewears easily. It’s good for you and for the environment." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />

            <main className='p-5 flex justify-center'>
                <form action="/"
                    method="POST"
                    className='w-10/12 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-8'>What eyewear are you listing today?</h1>

                        <Select for="category"
                            options={category}
                            placeholder="Select a category" />
                        <Input for="title" 
                            type="text" 
                            placeholder="Listing title"
                            noLabel={true} />
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold mb-4'>About the item</h2>

                        <Select for="condition"
                            options={conditions}
                            placeholder="Condition of the item" />
                        <Input for="price" 
                            type="number"
                            placeholder="Price of your listing"
                            currency="$"
                            unit="NZD" />
                    </div>

                    <div className='description'>
                        <h2 className='text-xl font-semibold mb-2'>Description</h2>
                        <Textarea for="description"
                            noLabel={true}
                            placeholder="Describe what you are selling and include any details a  buyer might be interested in. People love items with stories!" />
                    </div>

                    <div className='file-upload'>
                        <h2 className='text-xl font-semibold mb-2'>Photos</h2>
                        <FileUpload />
                    </div>

                    <div className='shipping-options'>
                        <h2 className='text-xl font-semibold mb-2'>Shipping & Pickup options</h2>
                        <Radio for="shipping" text="Pick up" />
                        <Radio for="shipping" text="Delivery" />
                    </div>

                    <div className="payment-options">
                        <h2 className='text-xl font-semibold mb-2'>Payment options </h2>
                        <Radio for="payment" text="Cash" />
                        <Radio for="payment" text="NZ bank deposit" />
                    </div>

                    <div className="action-buttons flex gap-2">
                        <button type="submit" className='px-10 py-4 text-white text-sm bg-primary rounded-lg shadow font-semibold'>Publish</button>
                        <button type="reset" className='px-10 py-4 text-sm bg-white border rounded-lg shadow font-semibold'>Reset</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default NewListing