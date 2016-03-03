import React from 'react';
import { Link } from 'react-router';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import reactMixin from 'react-mixin';

import AccountsUIWrapper from './../AccountsUIWrapper/AccountsUIWrapper.jsx';
import Avatar from './../Avatar/Avatar.jsx';

export default class Menu extends React.Component {

    getMeteorData() {
        const usersHandle = Meteor.subscribe('users');
        if (usersHandle.ready) {
            return {
                user: Meteor.users.find({_id: Meteor.userId()}).fetch()
            };
        }
    }

    render() {
        const user = this.data.user[0];

        return (
            <nav role="navigation" className="Menu">
                <ul>
                    <li><Link to="/">Create Channel</Link></li>
                    <li><Link to="/">Manage Channels</Link></li>
                    <li><Link to="/">Settings</Link></li>

                    <li className="right-aligned">
                        <AccountsUIWrapper />
                        { user ? <Avatar userId={ user._id } /> : ''}
                    </li>
                </ul>
            </nav>
        );
    }
}

reactMixin(Menu.prototype, ReactMeteorData);