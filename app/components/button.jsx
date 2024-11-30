const Button = (props) =>{
    const variants = {
        default : 'bg-black text-white dark:text-black dark:bg-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-200',
        outline : 'border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500',
        ghost : 'rounded-md bg-white hover:bg-gray-300 dark:hover:bg-gray-500 dark:bg-black'
    }
    const sizes = {
        xs : 'text-xs px-2 py-1',
        sm : 'text-sm px-3 py-1.5',
        base: 'text-base px-4 py-2',
        lg : 'text-lg px-4 py-2'
    }
    return (
        <button
            {...props}
            className={`${props.variant ? variants[props.variant] : variants['default']} ${props.size ? sizes[props.size] : sizes['base']}`}
        />
    );
}

export default Button