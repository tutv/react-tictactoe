import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Info extends Component {
    render() {
        const {isFinish, nextPlayer, winner} = this.props
        const text = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`

        return (
            <div className={classNames("Info", {hasWinner: !!winner})}>
                {
                    (isFinish && !winner) ? 'Game end.' : text
                }
            </div>
        )
    }
}

Info.propTypes = {
    winner: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
    nextPlayer: PropTypes.string.isRequired,
}

export default Info
