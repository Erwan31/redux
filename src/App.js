import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesList } from './actions/index';
import { bindActionCreators } from 'redux';

import Functional from './reducers/functional';
import Hooks from './reducers/hooks';

class App extends Component {
  state = {  }

  componentDidMount() {
    this.props.getMoviesList();  
  }

  render() { 
    console.log(this.props);
    return ( 
      <>
        <Hooks/>
        {/*
          this.props.movies ?
          this.props.movies.map( (item) => (
            <div key={item.id}>
              {item.name}
            </div>
          ))
          :null*/
        }
      </>
     );
  }
}

const mapStateToProps = (state) => (
  {
    movies: state.movies
  }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getMoviesList }, dispatch)
)
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
