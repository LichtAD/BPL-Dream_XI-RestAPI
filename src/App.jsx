import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
// import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notifyCoins = () => toast.success("Credit Added to Your Account!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

  // ! choosing between available and selected players
  const [isActive, setIsActive] = useState({
    available: true,
  });
  // console.log(isActive);

  const handleIsActive = (status) => {
    if (status === 'available') {
      setIsActive({
        available: true,
      })
    }
    else {
      setIsActive({
        available: false,
      })
    }
  }
  // console.log(isActive);

  // ! add coins when clicked on claim free coins
  const [addCoins, setAddCoins] = useState(0);
  const handleAddCoins = () => {
    // console.log('coin add hbe');
    const newCoins = addCoins + 100;
    setAddCoins(newCoins);
    notifyCoins();
  }
  // console.log(addCoins);

  // ! decrease coins after choosing a player
  // const [deleteCoins, setDeleteCoins] = useState(0);
  const handleDeleteCoins = (player_price) => {
    // console.log('coin delete hbe', player_price);
    const newDeleteCoins = addCoins - player_price;
    setAddCoins(newDeleteCoins);
  }

  return (
    <>
      <div>
        <div className='lg:mt-0 lg:mb-16 lg:mx-16 mx-3'>
          <Header addCoins={addCoins}></Header>
          <Banner handleAddCoins={handleAddCoins}></Banner>
          <MainContainer
            handleIsActive={handleIsActive}
            isActive={isActive}
            handleDeleteCoins={handleDeleteCoins}
            addCoins={addCoins}
          ></MainContainer>
        </div>

        <div>
          {/* <Newsletter></Newsletter> */}
          <Footer isActive={isActive}></Footer>
        </div>

      </div>
    </>
  )
}

export default App
