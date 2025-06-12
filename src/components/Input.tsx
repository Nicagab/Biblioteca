export default function Input({name,placeholder,tipo,onChange, value}: {name: string,placeholder: string, tipo: string,onChange: any, value: any}){
    return(
        <div className='bg-gray-400 p-4 flex flex-row gap-3.5'>
            <label htmlFor={name} className=''>{placeholder}:</label>
            <input type={tipo} name={name} id={name} className='outline-none appearance-none' onChange={onChange} value={value}/>
        </div>
    )
}