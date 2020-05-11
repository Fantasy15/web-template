/**
 * @file index.js
 * @description index component
 */

import React, {Component} from 'react';
import {observer, inject}from 'mobx-react';
import './index.less';

@inject('userStore') @observer
class Index extends Component {
    render() {
        const {userInfo} = this.props.userStore;
        return (
            <div className="index">
                this is index page,
                and a mobx userInfo state {userInfo.name}
            </div>
        );
    }
}

export default Index;