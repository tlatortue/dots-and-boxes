import React, { Component } from 'react';

export default class GameInfo extends Component { 
    render() {
        return (
            <form>
                <input 
                    placeholder="Enter Player 1 Name"
                    className="form-control"
                />
                <input 
                    placeholder="Enter Player 2 Name"
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button 
                        type="submit"
                        className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}