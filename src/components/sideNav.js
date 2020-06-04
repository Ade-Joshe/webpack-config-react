import React from 'react';
import { avatar } from '../assets';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='border border-right shadow-sm p-3' id='sideNav'>
            <h2>SideNav</h2>

            <div className="mt-5 d-flex align-items-center" id='sideNav_profile'>
                <img className="border rounded-circle mr-2" src={avatar} />
                <div>
                    <p>Adegoke Joshua</p>
                    <p>help@zendesk.com</p>
                </div>
            </div>

            <div className={'mt-5'}>
                <NavLink to="/">
                    <p><span className='fa fa-menu' />Dashboard</p>
                </NavLink>
                <NavLink to='/'>
                    <p>Tickets</p>
                </NavLink>
                <NavLink to='/'>
                    <p>Contacts</p>
                </NavLink>
            </div>
        </div>
    )
}

export { SideNav }