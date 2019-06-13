import React, { Component } from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

export class Control extends Component {
    render() {
        return (
            <div>
               <Admin dataProvider={dataProvider}>
                    <Resource name="users" list={ListGuesser} />
                </Admin>
            </div>
        )
    }
}

export default Control
