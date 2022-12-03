const BaseInput = (props : any) => {
    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            <label htmlFor={props.for}
                className="text-gray-700 text-sm font-medium">{capitalizeFirstLetter(props.for)}</label>
            <input type={props.type} 
                name={props.for}
                placeholder={props.placeholder} 
                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl border-2 border-gray-300 outline-none focus:outline-none focus:ring w-full"/>
        </div>
    )
}

function capitalizeFirstLetter(data : string) {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

export default BaseInput;