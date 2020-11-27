import react from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import { addMovies, addFavourite, showFavourite } from '../actions';
class App extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
  }
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());
  }
  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index != -1)
      return true;
    else
      return false;
  }
  clicked = (val) => {
    this.props.store.dispatch(showFavourite(val));
  }

  render() {
    const { movies, search } = this.props.store.getState();

    const { favourites, list, showFavourites } = movies;
    console.log(this.props.store.getState());

    const displayMovie = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">

            <button className="tab" onClick={() => this.clicked(false)}>Movies</button>
            <button className="tab" onClick={() => this.clicked(true)}>favourites</button>
          </div>
          <div className="list">
            {

              displayMovie.map((movie, index) => (
                <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch}
                  isFavourite={this.isFavourite(movie)}
                />
              ))
            }
          </div>
          {displayMovie.length === 0 ? <div> "no movies" </div> : null}
        </div>
      </div>
    );
  }
}
export default App;
