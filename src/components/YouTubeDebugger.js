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
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                
                }
                
            }
        })
    }
    handleResClick = () => {
        this.setState(previousState => {
            return{
                ...previousState,
                settings: {
                    ...previousState.settings,
                    video:{
                        resolution: "720p"
                    }
                
                }
                
            }
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleResClick}>Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger;