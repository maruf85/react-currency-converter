## Currency converter

The project is developed using Reacj.js & bootstrapped with [Create React App]. For currency convertion, Free Currency Converter API 
https://www.currencyconverterapi.com/ is used to convert from one currency to another & also list all currencies. This application stores 
recent currecy convertions to Local Storage. 

##### List of currencies

```
/api/v7/currencies?apiKey=[API_KEY]
```

##### Convert Currency

```
/api/v7/convert?q=USD_BDT&compact=y&apiKey=[API_KEY]
```

##### Libraries used

* HTTP client used 'axios': https://github.com/axios/axios
* React Components for Bootstrap 4 : https://github.com/reactstrap/reactstrap


##### Deployment

The project is deployed to Netlify: https://currency-convert.netlify.com/
