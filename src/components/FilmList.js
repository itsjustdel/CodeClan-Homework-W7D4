const FilmList = ({films, onFilmWatchedClick, tab}) => {

    const handleClick = (event) => {
        onFilmWatchedClick(films[ event.target.value ]);
        
    }

    const filmList = films.map((film, index) => {
        return  (
            <li key={index}>                                    
                <img src={film.image}/>     
                {tab=="to watch" ? <button value={index} onClick={handleClick}>Watched</button>
                 : null}
                
            </li>
        );
    });

    return(
       
        <ul>
            {filmList}            
        </ul>        
        
    )
};

export default FilmList;