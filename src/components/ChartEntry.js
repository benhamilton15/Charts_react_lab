import React, {Fragment} from 'react'

const ChartEntry = (props) => {
    return(
        <div className="ChartEntry">
            <h2>Chart Position {props.position}</h2>
            <h3>Song name:{props.entry['im:name'].label}</h3>
            <h4>Artist: {props.entry["im:artist"].label}</h4>
            <img alt="boom" src={props.entry["im:image"][2].label}/>
        </div>
    )
}

export default ChartEntry