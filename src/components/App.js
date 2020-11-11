import react from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import { addMovies , addFavourite } from '../actions';
class App extends react.Component {

componentDidMount(){
const {store} = this.props;
store.subscribe(() =>{
this.forceUpdate();
});
  store.dispatch(addMovies(data));
  console.log('STATE', this.props.store.getState());
}

  render(){
  const {list} = this.props.store.getState();
  console.log(this.props.store.getState());
  return (
    <div className="App">
      <Navbar />
<div className="main">
<div className="tabs">
  <div className="tab">Movies</div>
  <div className="tab">favourites</div>
</div>
<div className="list">
  {
    list.map((movie ,index) =>(
      <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch}/>
    ))
  }
</div>
</div>
    </div>
  );
}
}
export default App;
