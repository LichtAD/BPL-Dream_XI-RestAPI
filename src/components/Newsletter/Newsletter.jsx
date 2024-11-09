import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="absolute z-10 -bottom-[2585px] right-[0px] border-2 border-white w-[1200px] mx-48 mt-20 rounded-2xl">
            <div className="newsletter-bg border-2 m-8 p-10 space-y-4 flex justify-center items-center flex-col rounded-2xl">
                <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                <p>Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-2 items-center justify-center">
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-[300px]" />
                    <button className="btn btn_color font-bold">Success</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;