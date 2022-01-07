const Nav = ({onTabClick}) => {

    const handleClick = (event) => {
        onTabClick(event.target.value);
    }

    return(
        <>
            <button value ="to watch" onClick={handleClick}>
                To Watch
            </button>
            <button value="watched" onClick={handleClick}>
                Watched
            </button>
            
        </>
    )
}

export default Nav;