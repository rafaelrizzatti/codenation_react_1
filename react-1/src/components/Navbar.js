import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import { withRouter, matchPath } from 'react-router-dom';

const Navbar = ({ history }) => {
  const match = matchPath(history.location.pathname, {
    path: '/:searchString?',
    exact: true,
    strict: false,
  });

  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand col-1">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </div>
      <div className="form-group justify-content-center row col-10 my-2">
        <input
          // TODO: onChange deve atualizar a URL
          onChange={e => history.push('/' + e.currentTarget.value)}
          value={match !== null ? match.params.searchString : ''}
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchString: PropTypes.string,
};

export default withRouter(Navbar);
