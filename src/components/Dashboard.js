import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { VectorMap } from '@react-jvectormap/core';
import { usAea } from '@react-jvectormap/unitedstates';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Calendar from 'react-calendar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-calendar/dist/Calendar.css';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Digital Goods',
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            tension: 0.5
        },
        {
            label: 'Electronics',
            backgroundColor: 'rgba(210, 214, 222, 1)',
            borderColor: 'rgba(210, 214, 222, 1)',
            pointRadius: false,
            pointColor: 'rgba(210, 214, 222, 1)',
            pointStrokeColor: '#c1c7d1',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            tension: 0.5
        }
    ]
};

const salesGraphData = {
    labels: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'],
    datasets: [
        {
            label: 'Digital Goods',
            fill: true,
            borderWidth: 2,
            spanGaps: true,
            borderColor: '#efefef',
            pointRadius: 3,
            pointHoverRadius: 7,
            pointColor: '#efefef',
            pointBackgroundColor: '#efefef',
            data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
        }
    ]
}

const doughnutData = {
    labels: [
        'Instore Sales',
        'Download Sales',
        'Mail-Order Sales'
    ],
    datasets: [
        {
            data: [30, 12, 20],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12']
        }
    ]
};

const visitorsData = {
    US: 398, // USA
    SA: 400, // Saudi Arabia
    CA: 1000, // Canada
    DE: 500, // Germany
    FR: 760, // France
    CN: 300, // China
    AU: 700, // Australia
    BR: 600, // Brazil
    IN: 800, // India
    GB: 320, // Great Britain
    RU: 3000 // Russia
};

const Dashboard = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [salesChart, setSalesChart] = useState('area')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPreloader(false);
        }, 2000)
    }, []);
    return (
        <div className="wrapper">
            {/* Preloader */}
            {showPreloader && <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div>}

            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>

                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>

                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>

                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-chart-pie mr-1"></i>
                                            Sales
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="nav nav-pills ml-auto">
                                                <li className="nav-item">
                                                    <span className={`nav-link ${salesChart === 'area' ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setSalesChart('area')}>Area</span>
                                                </li>
                                                <li className="nav-item">
                                                    <span className={`nav-link ${salesChart === 'donut' ? 'active' : ''}`} style={{ cursor: 'pointer' }} onClick={() => setSalesChart('donut')}>Donut</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/* /.card-header */}
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            {/* Morris chart - Sales */}
                                            <div className={`chart tab-pane ${salesChart === 'area' ? 'active' : ''}`} id="revenue-chart"
                                                style={{ position: 'relative', height: '430px' }}>
                                                <Line options={options} data={data} />
                                            </div>
                                            <div className={`chart tab-pane ${salesChart === 'donut' ? 'active' : ''}`} id="sales-chart" style={{ position: 'relative', height: '430px', alignItems: 'center' }}>
                                                <Doughnut data={doughnutData} />
                                            </div>
                                        </div>
                                    </div>{/* /.card-body */}
                                </div>
                                {/* /.card */}

                                {/* DIRECT CHAT */}
                                <div className="card direct-chat direct-chat-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Direct Chat</h3>

                                        <div className="card-tools">
                                            <span title="3 New Messages" className="badge badge-primary">3</span>
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                <i className="fas fa-comments"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        {/* Conversations are loaded here */}
                                        <div className="direct-chat-messages">
                                            {/* Message. Default to the left */}
                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                </div>
                                                {/* /.direct-chat-infos */}
                                                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                {/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    Is this template really for free? That's unbelievable!
                                                </div>
                                                {/* /.direct-chat-text */}
                                            </div>
                                            {/* /.direct-chat-msg */}

                                            {/* Message to the right */}
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                </div>
                                                {/* /.direct-chat-infos */}
                                                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                {/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    You better believe it!
                                                </div>
                                                {/* /.direct-chat-text */}
                                            </div>
                                            {/* /.direct-chat-msg */}

                                            {/* Message. Default to the left */}
                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                                </div>
                                                {/* /.direct-chat-infos */}
                                                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                {/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    Working with AdminLTE on a great new app! Wanna join?
                                                </div>
                                                {/* /.direct-chat-text */}
                                            </div>
                                            {/* /.direct-chat-msg */}

                                            {/* Message to the right */}
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                                </div>
                                                {/* /.direct-chat-infos */}
                                                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                {/* /.direct-chat-img */}
                                                <div className="direct-chat-text">
                                                    I would love to.
                                                </div>
                                                {/* /.direct-chat-text */}
                                            </div>
                                            {/* /.direct-chat-msg */}

                                        </div>
                                        {/*/.direct-chat-messages*/}

                                        {/* Contacts are loaded here */}
                                        <div className="direct-chat-contacts">
                                            <ul className="contacts-list">
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date float-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Sarah Doe
                                                                <small className="contacts-list-date float-right">2/23/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">I will be waiting for...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Nadia Jolie
                                                                <small className="contacts-list-date float-right">2/20/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">I'll call you back at...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Nora S. Vans
                                                                <small className="contacts-list-date float-right">2/10/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Where is your new...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                John K.
                                                                <small className="contacts-list-date float-right">1/27/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Can I take a look at...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar" />

                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Kenneth M.
                                                                <small className="contacts-list-date float-right">1/4/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Never mind I found...</span>
                                                        </div>
                                                        {/* /.contacts-list-info */}
                                                    </a>
                                                </li>
                                                {/* End Contact Item */}
                                            </ul>
                                            {/* /.contacts-list */}
                                        </div>
                                        {/* /.direct-chat-pane */}
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <form action="#" method="post">
                                            <div className="input-group">
                                                <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                <span className="input-group-append">
                                                    <button type="button" className="btn btn-primary">Send</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.card-footer*/}
                                </div>
                                {/*/.direct-chat */}

                                {/* TO DO List */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="ion ion-clipboard mr-1"></i>
                                            To Do List
                                        </h3>

                                        <div className="card-tools">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item"><a href="#" className="page-link">&laquo;</a></li>
                                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                                <li className="page-item"><a href="#" className="page-link">&raquo;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <ul className="todo-list" data-widget="todo-list">
                                            <li>
                                                {/* drag handle */}
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                {/* checkbox */}
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo1" id="todoCheck1" />
                                                    <label htmlFor="todoCheck1"></label>
                                                </div>
                                                {/* todo text */}
                                                <span className="text">Design a nice theme</span>
                                                {/* Emphasis label */}
                                                <small className="badge badge-danger"><i className="far fa-clock"></i> 2 mins</small>
                                                {/* General tools such as edit or delete*/}
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo2" id="todoCheck2" checked />
                                                    <label htmlFor="todoCheck2"></label>
                                                </div>
                                                <span className="text">Make the theme responsive</span>
                                                <small className="badge badge-info"><i className="far fa-clock"></i> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo3" id="todoCheck3" />
                                                    <label htmlFor="todoCheck3"></label>
                                                </div>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="badge badge-warning"><i className="far fa-clock"></i> 1 day</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo4" id="todoCheck4" />
                                                    <label htmlFor="todoCheck4"></label>
                                                </div>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="badge badge-success"><i className="far fa-clock"></i> 3 days</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo5" id="todoCheck5" />
                                                    <label htmlFor="todoCheck5"></label>
                                                </div>
                                                <span className="text">Check your messages and notifications</span>
                                                <small className="badge badge-primary"><i className="far fa-clock"></i> 1 week</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" value="" name="todo6" id="todoCheck6" />
                                                    <label htmlFor="todoCheck6"></label>
                                                </div>
                                                <span className="text">Let theme shine like a star</span>
                                                <small className="badge badge-secondary"><i className="far fa-clock"></i> 1 month</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit"></i>
                                                    <i className="fas fa-trash-o"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer clearfix">
                                        <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus"></i> Add item</button>
                                    </div>
                                </div>
                                {/* /.card */}
                            </section>
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable">

                                {/* Map card */}
                                <div className="card bg-gradient-primary">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-map-marker-alt mr-1"></i>
                                            Visitors
                                        </h3>
                                        {/* card tools */}
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                                <i className="far fa-calendar-alt"></i>
                                            </button>
                                            <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                        {/* /.card-tools */}
                                    </div>
                                    <div className="card-body">
                                        <VectorMap map={usAea} backgroundColor='transparent' style={{ height: '350px' }}
                                            series={{
                                                regions: [{
                                                    values: visitorsData,
                                                    scale: ['#ffffff', '#0154ad'],
                                                    normalizeFunction: 'polynomial'
                                                }]
                                            }} />
                                    </div>
                                    {/* /.card-body*/}
                                    <div className="card-footer bg-transparent">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <Sparklines data={[1000, 1200, 920, 927, 931, 1027, 819, 930, 10]} width={60} height={20}>
                                                    <SparklinesLine color="white" />
                                                    <SparklinesSpots />
                                                </Sparklines>
                                                <div className="text-white">Visitors</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <Sparklines data={[515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]} width={60} height={20}>
                                                    <SparklinesLine color="white" />
                                                    <SparklinesSpots />
                                                </Sparklines>
                                                <div className="text-white">Online</div>
                                            </div>
                                            {/* ./col */}
                                            <div className="col-4 text-center">
                                                <div id="sparkline-3"></div>
                                                <Sparklines data={[15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]} width={60} height={20}>
                                                    <SparklinesLine color="white" />
                                                    <SparklinesSpots />
                                                </Sparklines>
                                                <div className="text-white">Sales</div>
                                            </div>
                                            {/* ./col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                </div>
                                {/* /.card */}

                                {/* solid sales graph */}
                                <div className="card bg-gradient-info">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-th mr-1"></i>
                                            Sales Graph
                                        </h3>

                                        <div className="card-tools">
                                            <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Line options={{ responsive: true }} data={salesGraphData} />
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}

                                {/* Calendar */}
                                <div className="card bg-gradient-success">
                                    <div className="card-header border-0">

                                        <h3 className="card-title">
                                            <i className="far fa-calendar-alt"></i>
                                            Calendar
                                        </h3>
                                        {/* tools card */}
                                        <div className="card-tools">
                                            {/* button with a dropdown */}
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                                                    <i className="fas fa-bars"></i>
                                                </button>
                                                <div className="dropdown-menu" role="menu">
                                                    <a href="#" className="dropdown-item">Add new event</a>
                                                    <a href="#" className="dropdown-item">Clear events</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="#" className="dropdown-item">View calendar</a>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                        {/* /. tools */}
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body pt-0" align="center">
                                        {/*The calendar */}
                                        <Calendar className="bootstrap-datetimepicker-widget usetwentyfour" width="100%" />
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </section>
                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;