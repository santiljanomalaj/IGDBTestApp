import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Toast } from 'primereact/toast';
import Layout from '../components/Layout';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from './AppContext';

export default function Ranking() {
    const toast = useRef(null);
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState(0);
    const [user] = useContext(AppContext);

    const onDepositHandler = async () => {
        console.log(user);
        axios({
            method: 'POST',
            baseURL: 'http://127.0.0.1:8080/',
            url: '/deposit',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            params: {
                sender: user.email,
                address,
                amount
            }
        }).then(response => {
            console.log(response);
            toast.current.show({ severity: 'success', summary: 'Deposit Success!', detail: '' });
        }).catch(error => {
            console.log(error);
            if (error.code == "ERR_NETWORK") {
                toast.current.show({ severity: 'error', summary: 'Deposit Failed!', detail: error.message });
            } else if (error.error) {
                toast.current.show({ severity: 'warning', summary: 'Deposit Failed!', detail: error.message });
            }
        });
    }

    useEffect(() => {
    }, [])

    return (
        <Layout>
            <Toast ref={toast} />
            <div className='w-full flex justify-center items-center'>
                <Panel header="Deposit to " className='w-2/6'>
                    <div className="col-12 md:col-12 mb-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">Send To</span>
                            <InputText placeholder="Address" onChange={e => setAddress(e.target.value)} value={address} />
                        </div>
                    </div>
                    <div className="col-12 md:col-12 mb-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">Amount</span>
                            <InputNumber placeholder="Price" onChange={e => setAmount(e.value)} value={amount} />
                            <span className="p-inputgroup-addon">$</span>
                        </div>
                    </div>
                    <div className="col-12 md:col-12">
                        <div className="p-inputgroup justify-end">
                            <Button label="Deposit" className='p-button-text' onClick={onDepositHandler} />
                        </div>
                    </div>
                </Panel>
            </div>
        </Layout>
    )
}
