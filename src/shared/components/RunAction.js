import {Component} from 'react'

class RunAction extends Component {
  static defaultProps = {
    action: () => {},
  }
  componentDidMount() {
    this.props.action()
  }
  render() {
    return null
  }
}

export default RunAction
