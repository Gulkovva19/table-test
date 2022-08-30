import './App.css';
import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '15%',
  },
  {
    title: 'Доходность',
    dataIndex: 'profitability',
    sorter: (a, b) => a.profitability - b.profitability,
    width: '20%',
  },
  {
    title: 'Валюта',
    dataIndex: 'currency',
    filters: [
      {
        text: 'Рубль',
        value: 'Рубль',
      },
      {
        text: 'Доллар',
        value: 'Доллар',
      }
    ],
    filterSearch: true,
    onFilter: (value, record) => record.currency.includes(value),
    sorter: (a, b) => a.currency.localeCompare(b.currency),
    width: '20%',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    width: '20%',
  },
  {
    title: 'Тип акции',
    dataIndex: 'type',
    filters: [
      {
        text: 'Российская',
        value: 'Российская',
      },
      {
        text: 'Иностранная',
        value: 'Иностранная',
      },
    ],
    onFilter: (value, record) => record.type.includes(value),
    sorter: (a, b) => a.type.localeCompare(b.type),
    filterSearch: true,
    width: '20%',
  },
];


let stocks = `[
  {
      "key": "1",
      "currency": "Рубль",
      "name": "Апельсин",
      "type": "Российская",
      "profitability": 12,
      "price": 14
  },
  {
      "key": "2",
      "currency": "Доллар",
      "name": "Мандарин",
      "type": "Российская",
      "profitability": 1,
      "price": 51
  },
  {
      "key": "3",
      "currency": "Рубль",
      "name": "Яблоко",
      "type": "Иностранная",
      "profitability": 7,
      "price": 67
  },
  {
      "key": "4",
      "currency": "Доллар",
      "name": "Груша",
      "type": "Российская",
      "profitability": 8,
      "price": 23
  },
  {
      "key": "5",
      "currency": "Рубль",
      "name": "Дыня",
      "type": "Иностранная",
      "profitability": 29,
      "price": 13
  },
  {
      "key": "6",
      "currency": "Доллар",
      "name": "Арбуз",
      "type": "Иностранная",
      "profitability": 20,
      "price": 49
  },
  {
      "key": "7",
      "currency": "Рубль",
      "name": "Персик",
      "type": "Российская",
      "profitability": 35,
      "price": 100
  },
  {
      "key": "8",
      "currency": "Доллар",
      "name": "Нектарин",
      "type": "Российская",
      "profitability": 78,
      "price": 37
  },
  {
      "key": "9",
      "currency": "Рубль",
      "name": "Клубника",
      "type": "Иностранная",
      "profitability": 43,
      "price": 3
  },
  {
      "key": "10",
      "currency": "Доллар",
      "name": "Крыжовник",
      "type": "Иностранная",
      "profitability": 15,
      "price": 6
  }
]`

let data = JSON.parse(stocks);

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App = () => <Table className='table' columns={columns} dataSource={data} onChange={onChange} />;

export default App;