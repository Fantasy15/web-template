/**
 * @file index.js
 * @description index component
 */

import React, {Component} from 'react';
import {observer, inject}from 'mobx-react';
import './index.less';

@inject('mainStore') @observer
class Index extends Component {
    render() {
        const {count, plusCount} = this.props.mainStore;
        return (
            <div className="index">
                this is index page,
                and a mobx userInfo state {count}
                <button onClick={plusCount}>click</button> to plus 1;
            </div>
        );
    }
}

export default Index;