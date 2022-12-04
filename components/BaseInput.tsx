import {capitalizeFirstLetter} from "../helpers/util"

const BaseInput = (props : any) => {    
    let rule = props.ruleLabel 
        ? <p className="text-sm text-gray-500">{props.ruleLabel}</p> 
        : "";
    
    let isRequired = props.required ? <span className="text-red text-sm"> *</span> : false;
    let showLabel = (props.noLabel)
        ? ""
        : <label htmlFor={props.for}
            className="text-gray-700 text-sm font-medium">
            {capitalizeFirstLetter(props.for)}
            {isRequired}
        </label>;

    let hasCurrencyAndUnit = false;
    let extras = null;
    if(props.currency && props.unit){
        hasCurrencyAndUnit = true;
        extras = <div>
            <span className="absolute left-4 top-3 text-gray-500">{props.currency}</span>
            <span className="absolute right-4 bottom-3 text-gray-500">{props.unit}</span>
        </div>
    }
    

    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            {showLabel}
            
            <div className={`flex relative ${(hasCurrencyAndUnit) ? "w-1/3" : ""}`}>
                <input type={props.type} 
                    name={props.for}
                    placeholder={props.placeholder} 
                    autoComplete="off"
                    className={`px-4 py-2.5 ${(hasCurrencyAndUnit) ? "pl-8" : ""} placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border border-gray-300 outline-none focus:border-primary w-full`} />
                {extras}
            </div>

            {rule}
        </div>
    )
}

// function capitalizeFirstLetter(data : string) {
//     return data.charAt(0).toUpperCase() + data.slice(1);
// }

export default BaseInput;