import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar=()=> {
  // const [input,setInput]=useState('');
  // const [searchResult,setSearchResult]=useState([]);
  const allProducts = useSelector((state) => state.products.value);

  // useEffect(() => {
  //   setSearchResult(allProducts.filter((obj)=>{
  //     return obj.title.toLowerCase().includes(input.toLowerCase());
  //   }));
  // }, [input]);

  // const handleSearchChange = (event) => {
  //   setInput(event.target.value);

  // }

  const navigate = useNavigate();
  const handleSearch = (e, value) => {
    const selectedProd = allProducts.filter((obj) => {
      return obj.title.toLowerCase().includes(value.toLowerCase());
    });
    if(selectedProd.length==0) return;
    if (selectedProd.length == 1) {
      console.log(value)
      const selectedObj = selectedProd[0];
      const num = Math.floor(selectedObj.price * 88);
      const price = num.toLocaleString('en-US');
      const percentOff = Math.floor(selectedObj.discountPercentage);
      const originalPrice = Math.floor((num * 100) / (100 - percentOff));
      navigate(`/product/${selectedObj.id}`, { state: { obj: selectedObj,price, originalPrice, percentOff } })
    }else{
        navigate('/searchResults',{state:{filteredData:selectedProd}})
    }
    
  }


  return (


    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      sx={{ width: "300px",outline:"none" }}
      size='small'
      onChange={handleSearch}
      options={allProducts.map((ele) => ele.title)}
      renderInput={(params) => (


        <TextField
          {...params}
          label="Search..."
          // value={input}
          // onChange={handleSearchChange}

          slotProps={{
            input: {
              ...params.InputProps,
              type: 'search',
            },
          }}
        />

      )}
    />
  );
}

export default SearchBar