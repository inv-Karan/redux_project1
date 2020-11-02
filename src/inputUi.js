import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { action1, action2, action3, action4 } from './actions';
import { reducer } from './reducers';

export default class inputUi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: [
                {
                    id: 1,
                    moviename: "Piku",
                    actors: "Amitabh",
                    years: 2000
                },
                {   
                    id: 2,
                    moviename: "Hera Pheri",
                    actors: "Paresh Rawal",
                    years: 2002
                },
                {
                    id: 3,
                    moviename: "Phir Hera Pheri",
                    actors: "Akshay Kumar",
                    years: 2008
                }
            ]
        };

        // this.state = {
        //     details: [],
        //     id: '',
        //     moviename: "",
        //     actors: "",
        //     years: ''
        // }
    };
    
    renderTableData() {
        return this.state.details.map(detail => {
            const {id, moviename, actors, years } = detail
                return (
                    <tr key = {id}>
                        <td>{id}</td>
                        <td>{moviename}</td>
                        <td>{actors}</td>
                        <td>{years}</td>
                    </tr>
                );
        })
    }

    render() 
    {
        return(
            <div class = "text-left">
                <p/>
                <button type = "primary" class = "btn btn-primary" onClick = {() => {
                    debugger
                    // const a = this.state.data.filter(item => (
                    //     data.actors === item.actors
                    // ))
                    // this.props.action1(a)
                }}>Filter by Amitabh</button><p/>
                <button type = "primary" class = "btn btn-primary" onClick = {() => {

                }}>Filter a movie which released in 2002</button><p/>
                <button type = "primary" class = "btn btn-primary" onClick = {() => {

                }}>How many movies are there in the table</button>3 movies<p/>
                <button type = "danger" class = "btn btn-danger" onClick = {() => {

                }}>Reset Table</button><p/>

                <table class = "table table-bordered">
                <thead class = "thead black-text">
                    <tr class = "table-danger">
                        <th scope = "col">id</th>
                        <th scope = "col">Movie Name</th>
                        <th scope = "col">Actors</th>
                        <th scope = "col">Years</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = {
    action1, action2, action3, action4
};

connect(mapStateToProps, mapDispatchToProps)(inputUi);