import React, {Component} from 'react';
import {NavLink,Route} from "react-router-dom";
import News from "./News";
import Messages from "./Messages";
// import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
                            <NavLink className="list-group-item" activeClassName='active' to='/home/news'>News</NavLink>
                        </li>
                        <li>
                            {/*<a className="list-group-item " href="./home-message.html">Message</a>*/}
                            <NavLink className="list-group-item" activeClassName='active' to='/home/messages'>Message</NavLink>
                        </li>
                    </ul>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/messages' component={Messages}/>
                </div>
            </div>
        );
    }
}

// Home.propTypes = {};

export default Home;
