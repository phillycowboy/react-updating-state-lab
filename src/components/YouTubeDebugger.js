// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component{
    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitClick = () => {
        this.setState(previousState => {
            return{
                bitrate: previousState.settings.bitrate+ 4
            }
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitClick}>Bitrate</button>
                <button className="resolution">Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger;