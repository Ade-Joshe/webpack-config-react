import React from 'react'
import { Header } from './header'
import { SideNav } from './sideNav'

const Layout = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <SideNav />
                <div className='ml-auto' id='right'>
                    <main className="">
                        <section className="">
                            <Header />
                            <div className="px-4">
                                {props.children}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export { Layout }