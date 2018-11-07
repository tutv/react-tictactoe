import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Square from "./Square"

class Board extends Component {

    _renderBoard = (position) => {
        const {squares, onSelect} = this.props

        return (
            <Square onSelect={onSelect} position={position} value={squares[position]}/>
        )
    }

    render() {


        return (
            <div className="Board">
                <div className="Row">
                    {this._renderBoard(0)}
                    {this._renderBoard(1)}
                    {this._renderBoard(2)}
                </div>
                <div className="Row">
                    {this._renderBoard(3)}
                    {this._renderBoard(4)}
                    {this._renderBoard(5)}
                </div>
                <div className="Row">
                    {this._renderBoard(6)}
                    {this._renderBoard(7)}
                    {this._renderBoard(8)}
                </div>
            </div>
        )
    }
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Board
