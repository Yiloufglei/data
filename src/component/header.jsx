import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:'',
            timer: '',
        };
    }
    formatTime(date,type="yy-MM-dd hh:mm:ss"){
        let obj = {
            yy: date.getFullYear(),
            MM: date.getMonth()+1,
            dd: date.getDate(),
            hh: date.getHours(),
            mm: date.getMinutes(),
            ss: date.getSeconds()
        }
        for(let o in obj){
            let replaceObj = obj[o]
            if(o !== 'yy'){
                (replaceObj+'').length===1 && (replaceObj = '0'+replaceObj)
            }
            type = type.replace(o,replaceObj);
        }
        return type;
    }
    start(){
        this.timer = setTimeout(()=>{
            this.setState({
                time: this.formatTime(new Date())
            })
            this.start();
        },1000);
    }
    componentWillMount() {
        this.setState({
            time: this.formatTime(new Date())
        })
        this.start();
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        let {time} = this.state;
        return ( 
            <div className="time">
                {time}
            </div>
        )
    }
}

export default class Header extends Component{
    render(){
        let {url,name,city="全国"} = this.props;
        console.log('header');
        return(
            <div className="pageHead">
                <div className="con">
                    <div className="title">{name}</div>
                    {
                        url?
                        <Link to={url}  className="goGroup">
                            {url==='/group'?'返回集团桌面':'返回城市桌面'}
                        </Link>:''
                    }
                    <div className={url?"area":'area only'}>{city}</div>
                    <Timer />
                </div>
            </div>
        )
    }
}