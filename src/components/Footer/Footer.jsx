import './Footer.css'
import PropTypes from 'prop-types';

const Footer = ({ isActive }) => {
    return (
        <div>
            {/* newletter */}
            <div>
                <div id='newsletter_container' className={`lg:absolute ${isActive.available === false && 'hidden'} z-10 top-[2950px] right-[0px] border-2 border-white w-[425px] lg:w-[1200px] lg:mx-48 lg:mt-20 rounded-2xl`}>
                    <div className="newsletter-bg border-2 m-8 p-10 space-y-4 flex justify-center items-center flex-col rounded-2xl">
                        <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                        <p>Get the latest updates and news right in your inbox!</p>
                        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-[300px]" />
                            <button className="btn btn_color font-bold">Success</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div>
                <div className="lg:relative bg-black flex justify-center pt-10 lg:pt-40">
                    <img src="https://i.ibb.co.com/Z15WzwM/logo-footer.png" alt="" />
                </div>
                <div className="lg:grid grid-cols-3 items-center px-16 pt-10 pb-8 bg-black text-white space-y-4 lg:space-y-0">
                    <div>
                        <h1 className="mb-2 text-lg">About Us</h1>
                        <small>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</small>
                    </div>
                    <div className="lg:ml-16">
                        <h1 className="text-lg">Quick Links</h1>
                        <ul className="list-disc ml-10 mt-2">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-lg">Subscribe</h1>
                        <p className="text-sm">Subscribe to our newsletter for the <br /> latest updates.</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-[300px] text-black" />
                            <button className="btn btn_color font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    isActive: PropTypes.object
}

export default Footer;