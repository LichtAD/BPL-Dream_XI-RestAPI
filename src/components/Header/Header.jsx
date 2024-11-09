import PropTypes from 'prop-types';

const Header = ({ addCoins }) => {
    return (
        <div className='relative'>
            {/* <h1 className="bg-red-500 text-3xl">Vite + React</h1> */}

            <nav className='fixed top-0 left-0 right-0 z-10 bg-white w-full'>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <img className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px]" src="https://i.ibb.co.com/Z15WzwM/logo-footer.png" alt="" />
                        {/* <img className="h-[80px] w-[80px]" src="../../assets/logo-footer.png" alt="" /> */}
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li className="lg:hidden">
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex="0" className="btn btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                    </label>
                                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Home</a></li>
                                        <li><a>Fixture</a></li>
                                        <li><a>Teams</a></li>
                                        <li><a>Schedules</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="hidden lg:block"><a>Home</a></li>
                            <li className="hidden lg:block"><a>Fixture</a></li>
                            <li className="hidden lg:block"><a>Teams</a></li>
                            <li className="hidden lg:block"><a>Schedules</a></li>

                            <li className="border-2 rounded-lg font-bold pt-3 lg:pt-0"><button>{addCoins} Coins <i className="fa-solid fa-coins" style={{ color: "#FFD43B" }}></i></button></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    addCoins: PropTypes.number
}

export default Header;