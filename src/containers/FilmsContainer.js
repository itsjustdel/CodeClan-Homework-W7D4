import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";
import Nav from "../components/Nav";

const FilmsContainer = () => {

    const [films, setFilms] = useState([]);
    const [watchedFilms, setWatchedFilms] = useState([]);
    const [tab, setTab] = useState("to watch");

    useEffect( () => {
        console.log("useEffect");
        getFilms();
    }, []);

    const getFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films));
    };

    const onTabClick = (tab) => {
        setTab(tab);
    };

    const onFilmWatchedClick = (film) => {
        //add film to Watched list
        const updatedWatchedFilms = [...watchedFilms, film];
        setWatchedFilms(updatedWatchedFilms);
        //remove film from To Watch list with filter and id check        
        //filter returns a new array to then set
        setFilms(films.filter(item => item.id !== film.id));
    };

    return(
        <>
            <Nav onTabClick={onTabClick}/>
            {
                tab == "to watch" ? 
                <FilmList films={films} onFilmWatchedClick={onFilmWatchedClick} tab={tab}/> 
                :
                <FilmList films={watchedFilms} onFilmWatchedClick={onFilmWatchedClick} tab={tab}/> 
            }
        </>
    )
};

export default FilmsContainer;