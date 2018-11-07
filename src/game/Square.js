import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Square extends Component {
    _handleClick = e => {
        e.preventDefault()

        this.props.onSelect(this.props.position)
    }

    render() {
        const {value} = this.props

        return (
            <div onClick={this._handleClick} className={classNames("Square", {selected: !!value})}>
                {value}
            </div>
        )
    }
}

Square.propTypes = {
    value: PropTypes.any,
    position: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Square
