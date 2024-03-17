import { faker } from '@faker-js/faker';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
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

export const salesGraphData = {
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

export const doughnutData = {
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

export const visitorsData = {
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