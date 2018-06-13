import React, { Component } from 'react';
//import { connect } from 'react-redux'

export default class GameGrid extends Component { 

    render() {
        return (
            <tbody>
                <tr>
                    <td id="0.0" className="vertex"></td>
                    <td id="0.1" className="hline"></td>
                    <td id="0.2" className="vertex"></td>
                </tr>
                <tr>
                    <td id="1.0" className="vline"></td>
                    <td id="1.1" className="cell"></td>
                    <td id="1.2" className="vline"></td>
                </tr>
                <tr>
                    <td id="2.0" className="vertex"></td>
                    <td id="2.1" className="hline"></td>
                    <td id="2.2" className="vertex"></td>
                </tr>
            </tbody>

            // <div>
            //     <div>
            //         <div>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //         </div>
            //         <div>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //         </div>
            //     </div>
            //     <div>
            //         <div>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //         </div>
            //     </div>
            //     <div>
            //         <div>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //             <circle className="dot"></circle>
            //         </div>
            //     </div>
            // </div>

        );
    }
}