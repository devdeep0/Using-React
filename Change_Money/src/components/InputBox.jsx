import React from 'react'


function InputBox({
    label,
    defaultValue,
    onChangeValue,
    onChangeCurrency,
    selectCurrency ="usd",
    currencyoptions =[],
    amountChange = false ,

}) {
    
  return (
    <div>
        <div className=' flex items-center gap-3 p-3 bg-white rounded-xl'style={{height:'90px',width:'400px'}}>
            <label  htmlFor="" className='flex text-s h-8 w-8 mb-9 opacity-60'>
               {label}
            </label>
            <input
             type="Number"
             value={defaultValue}
             placeholder='0'
             disabled = {amountChange}
             onChange={(e) => onChangeValue(Number(e.target.value))}
             className='h-3/4 bg-white p-3 w-2/2'
             />
             <div className=' flex-shrink flex items-end flex-col ml-4 '>
                <p className='text-xs'>Currency Type</p>
                 <select 
                 value={selectCurrency}
                onChange={(e) => onChangeCurrency(e.target.value)}
                 className='h-7 w-12 text-xs cursor-pointer'>
                    {currencyoptions.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                    ))}
                </select>
               
             </div>
        </div>
         
    </div>
  )
}

export default InputBox