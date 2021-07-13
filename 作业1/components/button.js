
import React,{ Component } from 'react'
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonState: false,
    }
  }

  componentDidMount() {
    console.log('demo')
  }

  componentWillReceiveProps(props) {
    this.setState({
      buttonState: props.visible
    })

  }

  render() {
    return (
      <div>
        {this.state.buttonState && <span>lagou is very good</span>}
      </div>
    )
  }
}
export default Button