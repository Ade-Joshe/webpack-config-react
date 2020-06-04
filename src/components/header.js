import React from 'react'

const Header = () => {
    return (
        <div className="d-flex align-items-center px-4 py-4 shadow-sm sticky-top" id='header'>
            <i className="fa fa-search" />
            <input placeholder={'search via client name, ticket ID'} className='border-0 ml-2' />
            <i className="fa fa-comments ml-auto" />
            <i className="fa fa-phone mx-3" />
            <i className="fa fa-bell" />
        </div>
    )
}

export { Header }