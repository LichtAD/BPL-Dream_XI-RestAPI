import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SinglePlayer = ({ player, handleChoosePlayer, handleDeleteCoins, addCoins }) => {

    // console.log(addCoins);

    const notify4 = () => toast.warning("Not Enough Coins!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div>
            <div className="card lg:w-full w-[400px] bg-base-100 border-2">
                {/* <h1>nfsjn</h1> */}
                <figure className="px-6 pt-6">
                    <img
                        src={player.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <p className='font-semibold'>{player.name}</p>
                    <div className='flex justify-between items-center'>
                        <p>{player.country}</p>
                        <button disabled className='bg-slate-100 px-4 py-2 rounded-lg'>{player.role}</button>
                    </div>
                    <hr />
                    <h1 className='font-bold'>Rating</h1>
                    <div className='flex justify-between items-center'>
                        <button disabled>{player.battingType}</button>
                        <button disabled>{player.bowlingType}</button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1>Price: {player.biddingPrice} Coins</h1>
                        <button onClick={() => {
                                                if(addCoins<=0){
                                                    // alert("not enough coins")
                                                    notify4()
                                                    return
                                                }
                                                else if(addCoins < player.biddingPrice) {
                                                    notify4()
                                                    return
                                                }
                                                const result = handleChoosePlayer(player)
                                                if(result !== false){
                                                    handleDeleteCoins(player.biddingPrice)
                                                }
                                                // handleDeleteCoins(player.biddingPrice)
                                            }} className='btn rounded-lg hover:bg-[#E7FE29] border-none'>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlayer.propTypes = {
    player: PropTypes.object,
    handleChoosePlayer: PropTypes.func,
    handleDeleteCoins: PropTypes.func,
    addCoins: PropTypes.number
}

export default SinglePlayer;
