import React, { useRef } from 'react';
import { connect } from 'react-redux';
import classes from './search-bar.module.css';
import { searchLogsAction } from "../../state/actions/logsActions";

const SearchBar = ({ searchLogsAction }) => {

    const query = useRef('');

    return (
        <nav className={classes.nav + ' ' + 'blue'}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input onChange={ event => searchLogsAction(query.current.value) } ref={ query } id="search" type="search" required placeholder="Search logs" />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );

};

export default connect(null, { searchLogsAction })(SearchBar);

