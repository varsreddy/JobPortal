import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies();
  const [input ,setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input));
  },[input]);
  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <Input 
                className='w-full'
                placeholder='Filter by name'
                onChange={(e) => setInput(e.target.value)}
            />
            <Button className="bg-black text-white ml-3" onClick = {() => navigate("/admin/companies/create")}>New company</Button>
            </div>
            <CompaniesTable/>
        </div>

    </div>
  )
}

export default Companies