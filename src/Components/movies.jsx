import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import "font-awesome/css/font-awesome.css";
import Pagination from "./Pagination.jsx";
import { paginate } from "./paginate.js";
import { getGenres } from "../services/fakeGenreService.js";
import ListGroup from "./listGroup.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class Movies extends Component {
    state = {
        movies: getMovies(),
        geners: getGenres(),
        pageSize: 4,
        currentPage: 1,
        selectedGener: {_id:"", name:"All Geners"}
    };

    styles = {
        color: "white",
        size: "10px",
        background:"red"
    };

    handleDelete = (id) => {
        this.setState({movies: this.state.movies.filter((elem) => {return elem._id != id})});
    };

    handleLike = (id) => {
        const movies = this.state.movies.map((elem) => {
            if (elem._id == id) {
                console.log("Check", elem);
                if (elem.liked == "Like") {
                    elem.liked = "Nike";
                } else {
                    elem.liked = "Like";
                }
            }
            return elem
        });
        this.setState({movies: movies});
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});

    }

    handleGenerSelect = (gener) => {
        console.log(gener);
        this.setState({selectedGener: gener});
    }

    render() {
        const {movies: allMovies, geners, selectedGener, pageSize, currentPage} = this.state;
        
        
        const filterd = selectedGener._id ? allMovies.filter((elem) => {
            return selectedGener._id == elem.genre._id}): allMovies;
            
        const count = filterd.length;
        if (count === 0) return <p>No movies to show in Database</p>

        const movies = paginate(filterd, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-3" style={{width:200, margin: 40, size: 180, textAlign:"center"}}>
                    <ListGroup 
                        items={geners}
                        selectedItem={this.state.selectedGener}
                        onItemSelect={this.handleGenerSelect}
                        >
                    </ListGroup>
                </div>

                <div className="col">
                    <p>Showing {count} movies in the database</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Fav</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie =>
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                    <FontAwesomeIcon onClick={() => this.handleLike(movie._id)} icon={movie.liked === "Like" ? faHeart: farHeart} />
                                    </td>
                                    <td>
                                    <button onClick={() => this.handleDelete(movie._id)} style={this.styles} className='btn btn-secondary'>Delete</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                    <Pagination
                        itemsCount={filterd.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                        >
                    </Pagination>
                </div>
                
            </div>
        );
    }
}
 
export default Movies;