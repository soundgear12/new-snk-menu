import React from "react";
import Cell from "../cell/Cell";
import './mode-select.css'
import Options from "../options/Options";

const ModeSelect = () => {
    return (
        <div className="snk__modeSelect">
            <div className="snk__modeSelect__cell">
                <Cell />
                <div className="snk__modeSelect__cell-text">
                    <h1>SURVIVAL MODE</h1>
                </div>
            </div>
            <div className="snk__modeSelect__cell-options">
                <Options />
            </div>
        </div>
    )
}

export default ModeSelect;