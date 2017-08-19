import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import NavbarLink from './NavbarLink';

const Navbar = ({ location, match }) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/feed/top">GitHunt</Link>
      </div>
      <ul className="nav navbar-nav">
        <NavbarLink
          title="Top"
          href="/feed/top"
          active={location.pathname === '/' || match.params.type === 'top'}
        />
        <NavbarLink
          title="Hot"
          href="/feed/hot"
          active={match.params && match.params.type === 'hot'}
        />
        <NavbarLink
          title="New"
          href="/feed/new"
          active={match.params && match.params.type === 'new'}
        />
      </ul>

      <Profile />
    </div>
  </nav>
);

Navbar.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      type: React.PropTypes.string,
    }),
  }),
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
};

export default withRouter(Navbar);
