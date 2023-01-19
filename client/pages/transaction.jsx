import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Layout from '../components/Layout';
import axios from 'axios';
import AppContext from './AppContext';

export default function Ranking() {

    const [transaction, setTransaction] = useState([]);
    const [user] = useContext(AppContext);

    useEffect(() => {
        getTransaction();
    }, [])

    const getTransaction = async () => {
        axios({
            method: 'GET',
            baseURL: 'http://127.0.0.1:8080/',
            url: '/getall',
            params: {
                limit: 20,
                sender: user.email
            }
        }).then(response => {
            console.log(response);
            setTransaction(response.data);
        }).catch(error => {
            console.log(error);
            if (error.code == "ERR_NETWORK") {
                toast.current.show({ severity: 'error', summary: 'Deposit Failed!', detail: error.message });
            } else if (error.error) {
                toast.current.show({ severity: 'warning', summary: 'Deposit Failed!', detail: error.message });
            }
        });
    }

    const paginatorLeft = () => {
        return (
            <Button type="button" icon="pi pi-refresh" className="p-button-text" onClick={getTransaction} />
        )
    }


    return (
        <Layout>
            <div className="w-full h-full flex justify-center">
                <DataTable value={transaction} paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} onReset={(e) => { console.log("onRowEditChange", e) }} rowsPerPageOptions={[10, 20, 50]}
                    paginatorLeft={paginatorLeft}>
                    <Column field="date" header="Date" style={{ width: '25%' }}></Column>
                    <Column field="address" header="Address" style={{ width: '25%' }}></Column>
                    <Column field="amount" header="Amount" style={{ width: '25%' }}></Column>
                    <Column field="verified" header="Status" style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </Layout>
    )
}
