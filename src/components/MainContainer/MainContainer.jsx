import { useState } from "react";
import AllPlayers from "../AllPlayers/AllPlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContainer = ({ handleIsActive, isActive, handleDeleteCoins, addCoins }) => {

    const notify = () => toast.warning("Player Already Added!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify2 = () => toast.error("You can not select more than 6 players", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify3 = () => toast.success("Player has been added successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    // ! choosing a specific player and show it in selected players
    const [choosePlayer, setChoosePlayer] = useState([]);

    const handleChoosePlayer = (player) => {
        const isExist = choosePlayer.find(p => p.playerId === player.playerId);

        // console.log(choosePlayer);
        // console.log(player);

        // ! check if player already selected
        if (isExist) {
            notify();
            return false;
        }

        // ! check the number of players
        if (choosePlayer.length >= 6) {
            notify2();
            return false;
        }
        else {
            notify3();
        }

        const newPlayer = [...choosePlayer, player];
        setChoosePlayer(newPlayer);
    };


    const handleRemovePlayer = (player) => {
        const remaining = choosePlayer.filter(p => p.playerId !== player.playerId);
        setChoosePlayer(remaining);
    }


    return (
        <div className="my-10">

            <div className="flex justify-end gap-2">
                <button onClick={() => handleIsActive('available')} className={`${isActive.available === true ? 'btn bg-[#E7FE29]' : 'btn'}`}>Available</button>
                <button onClick={() => handleIsActive('selected')} className={`${isActive.available === false ? 'btn bg-[#E7FE29]' : 'btn'}`}>Selected ({choosePlayer.length})</button>
            </div>




            {
                isActive.available === true ?
                    <AllPlayers
                        handleChoosePlayer={handleChoosePlayer}
                        handleDeleteCoins={handleDeleteCoins}
                        addCoins={addCoins}
                    ></AllPlayers> :
                    <SelectedPlayers
                        choosePlayer={choosePlayer}
                        handleRemovePlayer={handleRemovePlayer}
                        handleIsActive={handleIsActive}
                    ></SelectedPlayers>
            }




            <ToastContainer />
        </div>
    );
};

MainContainer.propTypes = {
    handleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    handleDeleteCoins: PropTypes.func,
    addCoins: PropTypes.number,
}

export default MainContainer;