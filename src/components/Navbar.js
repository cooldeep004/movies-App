import React from 'react';
import { addMovies ,handleMovieSearch,addMoviesToList} from '../actions';
//import data from '../data';
class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      searchText:''
    }
  }


  handleAddmovies =(movie)=>{
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
      showSearchResults:false
    });
  }

handlesearch=()=>{
const {searchText} =this.state;

this.props.dispatch(handleMovieSearch(searchText))

};
handleChange=(e)=>{
this.setState({
  searchText : e.target.value
})
}


    render(){
      const {result , showSearchResults} = this.props.search;
  return (
    <div className="nav">
     <div className="search-container">
<input onChange={this.handleChange} />
<button id="search-btn" onClick={this.handlesearch}>Search</button>

{
  showSearchResults && 
  <div className="search-results">
  <div className="search-result">
    <img src={result.Poster} alt="search-pic" />

    <div className="movie-info">
<span>{result.Title}</span>
<button onClick={()=>this.handleAddmovies(result)}>
  Add to movies
</button>
    </div>
    </div>
    </div>
}


     </div>
    </div>
  );
}
}
export default Navbar;
