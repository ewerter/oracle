import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from 'web3'
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import material from './material';
import data_market from './index';
import axios from 'axios';
import hash from './hash'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

function App() {
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios(
      'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=B5PE8R5S53O8PIVS',
    );
    setData(result.data);
  });

  return (
    
    <form>
    <div className={useStyles.root}>
      <Typography variant="h6" gutterBottom>
        Show Stock Price
      </Typography>
    </div>
    <ul>
      {data.hits.map(item => (
        <li key={item.id}>
          <a href={item.symbol}>{item.title}</a>
        </li>
      ))}
    </ul>
    <div>
      
    </div>
      </form>
    
  );
}

export default App;
