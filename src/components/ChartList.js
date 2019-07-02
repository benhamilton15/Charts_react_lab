import React, {Fragment} from 'react';
import ChartEntry from './ChartEntry'

const ChartList = (props)=>{
    if (!props.chartdata[0])return null

    console.log(props.chartdata[0]);

    

    
    
    const entries = props.chartdata.map((entry, index) => {
        return(
            <ChartEntry entry={entry} key={index} position={index + 1}/>
        )
    })

    return(
        <Fragment>
            {entries}
        </Fragment>
    )

    
}

export default ChartList