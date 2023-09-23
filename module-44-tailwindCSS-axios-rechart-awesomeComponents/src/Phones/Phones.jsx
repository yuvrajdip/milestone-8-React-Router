import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setPhones(phones))

    // * axios is alternative of fetch
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const phonesData = data.data.data;
        const phonesWithFakeData = phonesData.map(phone => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
          }
          return obj; //* this would return array of object in phonesWithFakeData
        })

        setPhones(phonesWithFakeData);
      })

  }, [])



  return (
    <div>
      <h2 className='text-3xl'>Phones Length : {phones.length}</h2>
      
      <BarChart
        width={1200}
        height={300}
        data={phones}
      >
        
        <XAxis dataKey="name" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>


    </div>
  );
};

export default Phones;