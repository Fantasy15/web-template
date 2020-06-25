/**
 * @file index.js
 * @description about component
 */

import React, {useEffect, useContext} from 'react';
import {observer}from 'mobx-react';
import {StoresContext} from 'Src/store';
import './index.less';

export default observer(() => {
    const {name, fullName} = useContext(StoresContext).userStore;
    useEffect(() => {
        console.log('render');
    });
    return (
        <div>this is about page, and mobx userStor state, name: {name}, fullName: {fullName}</div>
    )
})
