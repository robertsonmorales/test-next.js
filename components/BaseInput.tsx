const BaseInput = (props : any) => {
    let rule = props.ruleLabel 
        ? <p className="text-sm text-gray-500">{props.ruleLabel}</p> 
        : "";
    let isRequired = props.required ? <span className="text-red text-sm"> *</span> : false;

    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            <label htmlFor={props.for}
                className="text-gray-700 text-sm font-medium">
                {capitalizeFirstLetter(props.for)}
                {isRequired}
            </label>
            <input type={props.type} 
                name={props.for}
                placeholder={props.placeholder} 
                autoComplete="off"
                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl border-2 border-gray-300 outline-none focus:border-primary w-full"/>
            
            {rule}
        </div>
    )
}

function capitalizeFirstLetter(data : string) {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

export default BaseInput;