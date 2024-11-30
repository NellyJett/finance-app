const Input = (props) =>{
    const style = {
        'checkbox' : 'rounded text-gray-700 dark:text-gray-500  border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 shadow-sm',
        'default' : 'w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950'
    }
    return <input {...props} className={style[props.type] ?? style['default']}></input>
}

export default Input
    