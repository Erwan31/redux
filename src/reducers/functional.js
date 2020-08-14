import React from 'react';
import { connect } from 'react-redux';
import { getMoviesList } from './../actions/index';

const Functional = (props) => {

    console.log(props);

    return ( 
        <>
            Functional
            <button
                onClick={ () => props.dispatch(getMoviesList())}
            >Get Movies</button>
        </>
     );
}

const mapStateToProps = (state) => ({
    movies: state.movies
});
 
 
export default connect(mapStateToProps)(Functional);