export default function AlertModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 px-4 z-50">
            <div className="bg-customGray p-8 rounded-lg flex flex-col items-center shadow-xl max-w-md w-full space-y-4">
                <div className="text-center flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-lg font-medium text-black mt-3">
                        {children}
                    </p>
                </div>
                <span onClick={onClose} className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                    Close
                </span>
            </div>
        </div>
    );
}

