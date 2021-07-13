
import React,{ Component } from 'react'
import Button from './button.js'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonStatus: false,
    }
  }

  componentDidMount() {
    console.log('demo')
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.setState({ buttonStatus: true }) }}>What do you think of the lagou ?</button>
        <Button visible={this.state.buttonStatus} />
      </div>
    )
  }
}
export default Demo