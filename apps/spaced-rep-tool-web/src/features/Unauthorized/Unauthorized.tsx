import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-[10rem] font-bold text-blue-950 mb-4">401</h1>
      <p className="text-xl text-gray-700 mb-8 text-center">
        You are not authorized to access this page
        <br></br>
        Please sign in
      </p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-150">
        Main page
      </Link>
    </div>
  );
};
