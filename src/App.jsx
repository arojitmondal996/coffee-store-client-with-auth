import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
    <Header/>
    <div className='m-20'>
      <h1 className='text-6xl my-20 text-center text-purple-600'>Hot Hot Coffees: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees}  coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
    </>
  )
}

export default App
