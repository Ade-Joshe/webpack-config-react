import React from 'react'

const Home = () => {
    return (
        <div className="mt-5">
            <h1>Dashboard</h1>

            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <section className="shadow-sm rounded">

                            <div className="d-flex border-bottom p-3">
                                <p>6 tasks completed out of 10</p>
                                <div className="ml-auto">
                                    <p>Show</p>
                                    <picker />
                                </div>
                            </div>

                            <div className="p-3">

                            </div>

                        </section>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home }
