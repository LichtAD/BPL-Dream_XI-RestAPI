import './Banner.css'
import PropTypes from 'prop-types';

const Banner = ({handleAddCoins}) => {
    return (
        <div className='banner flex justify-center items-center flex-col space-y-4 p-4 mt-[100px] w-[400px] lg:w-full'>
            {/* <img src="./src/assets/banner-main.png" alt="" /> */}
            <img src="https://i.ibb.co.com/zJjcbDy/banner-main.png" alt="" />
            <h1 className='text-3xl text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p>Beyond Boundaries Beyond Limits</p>
            <div className='p-2 border-2 border-[#E7FE29] rounded-2xl'>
                <button onClick={() => handleAddCoins()} className="btn bg-[#E7FE29]">Claim Free Credits</button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleAddCoins: PropTypes.func
}

export default Banner;