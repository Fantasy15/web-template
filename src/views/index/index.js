/**
 * @file index.js
 * @description index component
 */

import React, {useEffect, useContext} from 'react';
import {observer}from 'mobx-react';
import {StoresContext} from 'Src/store';
import './index.less';

export default observer(() => {
    const {count, plusCount} = useContext(StoresContext).mainStore;
    useEffect(() => {
        console.log('render');
    })
    return (
        <div className="index">
            this is index page,
            and a mobx mainStore state {count}
            <br/>
            <button onClick={plusCount}>click</button> to plus this count;
        </div>
    );
})