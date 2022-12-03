const BaseCheckbox = () => {
    return (
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
                <input id="remember" 
                    type="checkbox" 
                    value="" 
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                    required />
            </div>
            <label htmlFor="remember" 
                className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Remember for 30 days</label>
        </div>
    )
}

export default BaseCheckbox