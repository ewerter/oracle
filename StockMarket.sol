pragma solidity >=0.5.16 <0.7.0;
   
   contract StockMarket{ /// quote structure
    
    struct stock {
        uint price;
        uint volume;
    }
    
    /// quotes by symbol
    mapping(bytes4 => stock) stockQuote;
    
    //event StockPrice(bytes4 symbol, uint price);
    
    /// Contract owner
    address oracleOwner;
    
    constructor() public{
        oracleOwner = msg.sender;
    }
       
    
    
    
        /// Set the value of a stock 
    function setStock(bytes4 symbol, uint price, uint volume) public returns (uint){
       stockQuote[symbol].price = price;
       stockQuote[symbol].volume = volume;
    }
    
    /// Get the value of a stock 
    function getStockPrice(bytes4 symbol) public view returns (uint price){
        return stockQuote[symbol].price;
        
    }
    
    /// Get the value of volume traded for a stock 
    function getStockVolume(bytes4 symbol) public view returns (uint volume){
       return stockQuote[symbol].volume; 
    }

}