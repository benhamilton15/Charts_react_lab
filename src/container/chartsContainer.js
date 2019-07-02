import React, {Fragment} from 'react'
import ChartList from '../components/ChartList'

class ChartsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            charts: []
        }
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        fetch(url)
            .then(res => res.json())
            .then(charts => this.setState({charts:charts.feed.entry}))
            .catch(err => console.error)
    }

    render(){
        return(
            <div className ="ChartsContainer">
                <h1>TOP CHARTS!!!!</h1>
                <ChartList chartdata={this.state.charts}/>
            </div>
        )
    }
    
}

export default ChartsContainer