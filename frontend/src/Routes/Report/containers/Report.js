import React, { Component } from 'react';

import ReportLayout from '../components/ReportLayout';

import { getReports, setReport } from '../../../utils/api';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        }
    }

    componentDidMount = async () => {
        try {
            const { data } = await getReports();
            this.setState({ reports: data.data});
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = async (e, report) => {
        e.preventDefault();
        try {
            await setReport(report);
            alert('Reporte creado con éxito!');
            const { data } = await getReports();
            this.setState({ reports: data.data});
        } catch (error) {
            console.log(error);
            alert('Ha habido un problema');
        }
    }

    render() {
        return (
            <ReportLayout
                reports={this.state.reports}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default Report;