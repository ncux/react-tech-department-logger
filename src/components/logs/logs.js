import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from "../loading/loading";
import Log from "./log/log";
import { getLogsAction } from "../../state/actions/logsActions";

const Logs = ({ logs: { logsArray, loading }, getLogsAction }) => {

    // get all logs
    useEffect(() => {
        getLogsAction();
        // eslint-disable-next-line
    }, []);

    const showLogs = (
        !loading && logsArray.length === 0 ? (<p className="center">No logs</p>)
            : logsArray.map(log => (<Log log={ log } key={log.id} />))
    );

    if(loading || !logsArray.length) return (<Loading />);

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            { showLogs }
        </ul>
    );

};

const mapStateToProps = state => ({
    logs: state.logs
});

export default connect(mapStateToProps, { getLogsAction })(Logs);

