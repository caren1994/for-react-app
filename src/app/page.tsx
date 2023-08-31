'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function Home() {
  const [primeiroValor,setPrimeiroValor] = useState('');
  const [segundoValor,setSegundoValor] = useState('');
  const [resultado,setResultado] = useState(0);
  const [metodo,setMetodo] = useState('');

  function calculo(sinal:any){
    if(sinal ==='soma'){
      setResultado(Number(primeiroValor) + Number(segundoValor))
    }
    if(sinal ==='subtracao'){
      setResultado(Number(primeiroValor) - Number(segundoValor))
    }

  }
  return (
    <main style={{backgroundColor: '#fff',height:'700px'}}>

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
        value={primeiroValor} onChange = {(e)=> setPrimeiroValor(e.target.value)}/>
      <TextField id="filled-basic" label="Filled" variant="filled" 
        value={segundoValor} onChange = {(e)=> setSegundoValor(e.target.value)} />
      <TextField id="standard-basic" label="Standard" variant="standard" 
        value={resultado} />
    </Box>
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">métodos</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="métodos"
      onChange = {(e)=> calculo(e.target.value)}
    >
      <MenuItem value={'soma'} >soma</MenuItem>
      <MenuItem value={'subtracao'} >subtração</MenuItem>
    </Select>
    </FormControl>
    </main>
  )
}
