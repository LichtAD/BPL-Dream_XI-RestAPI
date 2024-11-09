import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import PropTypes from 'prop-types';

const AllPlayers = ({ handleChoosePlayer, handleDeleteCoins, addCoins }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data.players);
                setPlayers(data.players);
            })
    }, [])

    return (
        <div className="my-8">
            {/* <h1 className="text-xl font-bold my-4">All Player: {players.length}</h1> */}
            <h1 className="text-2xl font-bold my-8">Available Players</h1>
            <div className="lg:grid space-y-4 lg:space-y-0 grid-cols-3 gap-4 mb-52">
                {
                    players.map((player) => <SinglePlayer 
                                                key={player.playerId} 
                                                player={player}
                                                handleChoosePlayer={handleChoosePlayer}
                                                handleDeleteCoins={handleDeleteCoins}
                                                addCoins={addCoins}
                                            ></SinglePlayer>)
                }
            </div>
        </div>
    );
};

AllPlayers.propTypes = {
    handleChoosePlayer: PropTypes.func,
    handleDeleteCoins: PropTypes.func,
    addCoins: PropTypes.number
}

export default AllPlayers;