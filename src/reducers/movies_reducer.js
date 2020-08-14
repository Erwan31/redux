/*
import { MOVIES_LIST } from './../types';
const data = {
    type: 'MOVIES_LIST',
    payload:[
        {id: 182, name:'Pulp fiction'}
    ]
}
*/

import {
    MOVIES_LIST
} from '../types';


export default function (state = null, action){
    switch( action.type ){
        case MOVIES_LIST:
            return action.payload;
        
        default:
            return state;
    }
}