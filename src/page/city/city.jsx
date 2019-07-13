import React,{Component} from 'react'
import Header from '../../component/header'
import '../../static/css/city.scss';

export default class City extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render(){
        return(
            <div className="page cityPage">
                <Header name="武汉新城大数据园区平台" />
            </div>
        )
    }
}