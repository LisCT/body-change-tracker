import React from 'react';

const OverviewPage = () => (

    <div className="grid-container">

        <div className="menu-icon">
            <i className="fas fa-bars" />
        </div>

        <header className="header">
            <div className="header__search">Search...</div>
            <div className="header__avatar">User</div>
        </header>

        <aside className="sidebar">

            <div className="sidebar__close-icon">
                <i className="fas fa-times" />
            </div>

            <div className="sidebar__brand">
                <h3 className="sidebar__brand-copy">
                    <i className="sidebar__brand-icon far fa-chart-bar" />
                    Body Tracker
                </h3>
            </div>

            <ul className="sidebar__list">
                <li className="sidebar__list-title">Dashboard</li>
                <li className="sidebar__list-item sidebar__list-active">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Overview
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Measurements
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Achievements
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                    Meal & Routine
                </li>
            </ul>

            <ul className="sidebar__list">
                <li className="sidebar__list-title">Account</li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Profile
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Reset Week
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Support
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     About
                </li>
                <li className="sidebar__list-item">
                    <i className="sidebar__list-icon far fa-chart-bar" />
                     Log Out
                </li>
            </ul>
        </aside>

        <main className="main">

            <div className="main-content">

                <div className="main-header">
                    <div className="main-header__heading">Hello User</div>
                    <div className="main-header__updates">Recent Items</div>
                </div>

                <div className="main-overview">
                    <div className="main-overview-overviewcard">
                        <div className="overviewcard__icon">Overview</div>
                        <div className="overviewcard__info">Card</div>
                    </div>
                    <div className="main-overview-overviewcard">
                        <div className="overviewcard__icon">Overview</div>
                        <div className="overviewcard__info">Card</div>
                    </div>
                    <div className="main-overview-overviewcard">
                        <div className="overviewcard__icon">Overview</div>
                        <div className="overviewcard__info">Card</div>
                    </div>
                    <div className="main-overview-overviewcard">
                        <div className="overviewcard__icon">Overview</div>
                        <div className="overviewcard__info">Card</div>
                    </div>
                </div>

                <div className="main-cards">
                    <div className="main-cards-card">Card</div>
                    <div className="main-cards-card">Card</div>
                    <div className="main-cards-card">Card</div>
                </div>
            </div>

            <footer className="main-footer">
                <div className="footer__menu">
                Home
                About
                Log Out
                </div>
                <div className="footer__copyright">Copyright © 2019 LisCode</div>
            </footer>

        </main>

    </div>

);

export default OverviewPage;
