import PropTypes from 'prop-types';

const SelectedPlayers = ({ choosePlayer, handleRemovePlayer, handleIsActive }) => {

    // console.log(choosePlayer);

    return (
        <div className="my-8">
            {/* <h1>Selected Players: {choosePlayer.length}</h1> */}
            <h1 className="text-2xl font-bold my-8">Selected Players: ({choosePlayer.length} / 6)</h1>


            <div>
                {
                    choosePlayer.map((player, idx) => <div key={idx} className="flex items-center border-2 p-2 mb-4 rounded-lg gap-4">
                        <img className="rounded-lg object-cover w-[100px] h-[100px]" src={player.image} alt="" />
                        <div className='space-y-2'>
                            <h1>Name: {player.name}</h1>
                            <h1>Role: {player.role}</h1>
                            <h1>Price: {player.biddingPrice} Coins</h1>
                        </div>

                        {/* delete btn */}
                        <div className="flex justify-end ml-auto mr-4">
                            <button onClick={() => handleRemovePlayer(player)}><i className="fa-solid fa-trash-can" style={{ color: "#ff0000" }}></i></button>
                        </div>

                    </div>)

                }
            </div>

            <button className='border-2 rounded-2xl border-gray-400 my-4'>
                <div onClick={() => handleIsActive('available')} className='btn bg-[#E7FE29] p-2 m-1 rounded-2xl'>Add More Players</div>
            </button>
        </div>
    );
};

SelectedPlayers.propTypes = {
    choosePlayer: PropTypes.array,
    handleRemovePlayer: PropTypes.func,
    handleIsActive: PropTypes.func,
}

export default SelectedPlayers;