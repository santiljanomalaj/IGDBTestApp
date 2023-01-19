import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import Layout from '../components/Layout';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';

export default function Ranking() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        axios({
            method: 'post',
            url: API_ROUTES.GAME_LIST
        }).then(val => {
            console.log("game-list", val);
            setProducts(val.data);
        }).catch(console.log);
        // axios({
        //   method: 'post',
        //   url: API_ROUTES.SIGN_UP,
        // });
        // console.log(response);
    }, []);

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const productTemplate = (product) => {
        const imgUrl = product?.screenshots?.length > 0 ? ("https://" + product?.screenshots[0].url.slice(2).replace('t_thumb', 't_screenshot_big')) : "";
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3 h-52 flex item-center">
                        <img className="product-image m-auto" src={imgUrl} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <h6 className="mt-0 mb-3">{formatDate(new Date(product.created_at))}</h6>
                        <div className="car-buttons mt-5">
                            <a href={product.url}><Button icon="pi pi-search" className="p-button p-button-rounded mr-2" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Layout>
            <div className="carousel-demo w-full flex justify-center items-center">
                <div className="card w-10/12">
                    <Carousel value={products} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} header={<h1></h1>} />
                </div>
            </div>
        </Layout>
    )
}
