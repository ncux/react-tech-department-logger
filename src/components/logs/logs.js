import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from "../loading/loading";
import { Log } from "./log/log";

const SERVER_URL = `/logs`;

export const Logs = props => {

    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    // get all logs
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(SERVER_URL);
            console.log(data);
            setLogs(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    const showLogs = (
        !loading && logs.length === 0 ? (<p className="center">No logs</p>)
            : logs.map(log => (<Log log={ log } key={log.id} />))
    );

    if(loading) return (<Loading />);

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            { showLogs }
        </ul>
    );

};

