import React,{useState, useEffect} from 'react'
import InputBox from './components/InputBox'
import UseCurrentCurr from './Hook/useCurrencyInfo'

function App() {
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [AmountChange, SetAmountchange] = useState(true)
    const [defaultValue, SetdefaultValu] = useState(0)
    const [finalVal, setFinalVal] =useState(0)

    const Result = () =>{
      setFinalVal (defaultValue * CurrencyOptions[to])
    }

    const CurrencyOptions = UseCurrentCurr(from);
    const realOptions = Object.keys(CurrencyOptions)

  return (
    <div className='w-full h-screen bg-black flex justify-center items-center' style={{backgroundImage: "url('https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2002&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}} >
        
        <div className='bg-white h-3/6 w-2/5 bg-opacity-20 backdrop-blur-md rounded-xl flex justify-start p-4 items-center flex-col gap-3'>
       
        <form
             className='h-screen flex justify-start items-center flex-col gap-3'
             onSubmit={(e) => {
                 e.preventDefault();
                 Result()
                
             }}
     > 
       
            <InputBox
            label="from"
            currencyoptions={realOptions}
            selectCurrency={from}
            defaultValue={defaultValue}
            onChangeCurrency={(value) => setFrom(value)}
            onChangeValue={(defaultValue) => SetdefaultValu(defaultValue)}

         
            />
            <InputBox
            label="to"
            currencyoptions={realOptions}
            selectCurrency={to}
            defaultValue = {finalVal}
            amountChange = {AmountChange}
            onChangeCurrency={(value) => setTo(value)}
          
           
            />
      
            <button type='submit' className='bg-yellow-600 h-1/6 hover:bg-yellow-700 w-5/6 mt-4'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
        </div>
           
    </div>
  )
}

export default App