import { useDispatch } from 'react-redux'
import { Label } from '../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import React, { useEffect, useState } from 'react'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderbad", "Kerala", "Gujarat"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0 to 40k", "42k to 1 lakh", "1 lakh to 5 lakh"]
  }
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='my-3' />
      <RadioGroup onValueChange={changeHandler} value={selectedValue}>
        {
          filterData.map((data, index) => (
            <div key={data.filterType}> {/* ✅ Added key here */}
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, i) => {
                  const itemId = `r${i}-${item}`;
                  return (
                    <div key={itemId} className='flex items-center space-x-2 my-2'> {/* ✅ Added key here */}
                      <RadioGroupItem value={item} id={itemId} />
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  );
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
