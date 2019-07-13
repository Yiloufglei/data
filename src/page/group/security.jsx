import React, { Component } from 'react'
import Header from '../../component/header'
import '../../static/css/groupSecurity.scss';

class Safety extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list safety">
                <div className="con">
                    <div className="title">安全指数</div>
                </div>
            </div>
        )
    }
}

class China extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list chinaMap">
                <div className="con">
                    <div className="title">全国项目分布</div>
                </div>
            </div>
        )
    }
}

class WuHanMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list wuHanMap">
                <div className="con">
                    <div className="title">武汉新城项目</div>
                </div>
            </div>
        )
    }
}

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list total">
                <div className="con">
                    <div className="title">设备总量</div>
                </div>
            </div>
        )
    }
}

class Warn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list warn">
                <div className="con">
                    <div className="title">待处理预警</div>
                </div>
            </div>
        )
    }
}

class Wheel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( 
            <div className="list wheel">
                <div className="con">
                    <div className="title">各园区巡更轮播图</div>
                </div>
            </div>
        )
    }
}

class Security extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return ( 
            <div className="page groupSecurity">
                <Header url="/group" name="集团智慧安防大数据平台" />
                <div className="container">
                    <Safety />
                    <China />
                    <WuHanMap />
                    <Total />
                    <Warn />
                    <Wheel />
                </div>
            </div>
        )
    }
}

export default Security;