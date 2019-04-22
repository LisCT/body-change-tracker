import React from 'react';

const OverviewPage = () => (

    <div className="grid-container">


        <header className="header">
            <div className="header__search">Search...</div>
            <div className="header__avatar">User</div>
        </header>

        <div className="menu-icon">
            <i className="fas fa-bars" />
        </div>

        <aside className="sidebar">

            <div className="sidebar__close-icon">
                <i className="fas fa-times" />
            </div>

            <ul className="sidebar__list">
                <li className="sidebar__list-item">Item One</li>
                <li className="sidebar__list-item">Item Two</li>
                <li className="sidebar__list-item">Item Three</li>
                <li className="sidebar__list-item">Item Four</li>
                <li className="sidebar__list-item">Item Five</li>
            </ul>
        </aside>

        <main className="main">
            <div className="main-header">
                <div className="main-header__heading">Hello User</div>
                <div className="main-header__updates">Recent Items</div>
            </div>

            <div className="main-overview">
                <div className="overviewcard">
                    <div className="overviewcard__icon">Overview</div>
                    <div className="overviewcard__info">Card</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Overview</div>
                    <div className="overviewcard__info">Card</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Overview</div>
                    <div className="overviewcard__info">Card</div>
                </div>
                <div className="overviewcard">
                    <div className="overviewcard__icon">Overview</div>
                    <div className="overviewcard__info">Card</div>
                </div>
            </div>

            <div className="main-cards">
                <div className="card">Card</div>
                <div className="card">Card</div>
                <div className="card">Card</div>
            </div>

        </main>

        <footer className="footer">
            <div className="footer__menu">
                Link
                Link
                Link
                Link
                Link
            </div>
            <div className="footer__copyright">Copyright © 2019 Lis</div>
        </footer>

    </div>

);

export default OverviewPage;
