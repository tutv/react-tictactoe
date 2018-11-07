import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Reset extends Component {
    _handleClick = e => {
        e.preventDefault()

        this.props.onReset()
    }

    render() {
        return (
            <div className="Reset">
                <button onClick={this._handleClick}>Reset</button>
            </div>
        )
    }
}

Reset.propTypes = {
    onReset: PropTypes.func.isRequired,
}

export default Reset
