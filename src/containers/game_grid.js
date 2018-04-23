import React, { Component } from 'react';
//import { connect } from 'react-redux'

export default class GameGrid extends Component { 
    render() {
        return (
            <div>
                <div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        );
    }
}