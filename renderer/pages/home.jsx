import React    from "react"
import Head     from "next/head"
import Link     from "next/link"
import MyWorker from "../lib/my.worker"

export default class extends React.Component {
  state = {
    latestMessage: null
  }

  handleClick = e => {
    e.preventDefault()
    this.worker.postMessage("Hello")
  }

  onWorkerMessage = event => {
    this.setState({latestMessage:event.data})
  }

  componentDidMount() {
    this.worker = new MyWorker()
    this.worker.addEventListener("message", this.onWorkerMessage)
  }

  componentWillUnmount() {
    this.worker.terminate()
  }

  render() {
    return (
      <React.Fragment>
        <Head><title>Home - Nextron (web-worker)</title></Head>
        <div>
          <p>⚡ Electron + Next.js ⚡ - <Link href="/next"><a>Go to next page</a></Link></p>
          <img src="/static/logo.png"/>
          <hr/>
          <button onClick={this.handleClick}>Send a message to worker!</button>
          <h1>Message from Worker: {this.state.latestMessage}</h1>
        </div>
      </React.Fragment>
    )
  }
}
