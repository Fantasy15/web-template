/**
 * @file index.js
 * @description index component
 */

import React, {useEffect} from 'react';
import {observer, inject}from 'mobx-react';
import {useStores} from '../../store';
import './index.less';

export const Index = observer(() => {
    const {count, plusCount} = useStores().mainStore;
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