import React, {Component} from 'react'
import Info from "./Info"
import Board from "./Board"
import Reset from "./Reset"
import classNames from 'classnames'

class Game extends Component {
    state = {
        squares: Array(9).fill(null),
        nextPlayer: 'X',
        winner: '',
        isFinish: false,
    }

    _handleSelect = position => {
        if (this.state.isFinish) return

        this.setState(({squares, nextPlayer}) => {
            const updatedSquares = squares.map((value, index) => {
                if (index !== position) return value

                return nextPlayer
            })

            const winner = this._calculateWinner(updatedSquares)

            return {
                isFinish: !!winner || this._isFinish(updatedSquares),
                winner,
                nextPlayer: nextPlayer === 'X' ? 'O' : 'X',
                squares: squares.map((value, index) => {
                    if (index !== position) return value

                    return nextPlayer
                })
            }
        })
    }

    _isFinish = squares => {
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) return false
        }

        return true
    }

    _calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [one, two, three] = lines[i]

            if (squares[one] && squares[one] === squares[two] && squares[one] === squares[three]) {
                return squares[one]
            }
        }

        return ''
    }

    _handleReset = () => {
        this.setState({
            squares: Array(9).fill(null),
            nextPlayer: 'X',
            winner: '',
            isFinish: false,
        })
    }


    render() {
        const {squares, isFinish, nextPlayer, winner} = this.state

        return (
            <div className={classNames("Game", {isFinish, hasWinner: !!winner})}>
                <div className="Top">
                    <Info isFinish={isFinish} nextPlayer={nextPlayer} winner={winner}/>
                    <Reset onReset={this._handleReset}/>
                </div>
                <Board onSelect={this._handleSelect} squares={squares}/>

                <div className="Bottom">
                    <a href="https://github.com/tutv/react-tictactoe">Source code</a>
                </div>
            </div>
        )
    }
}

export default Game
