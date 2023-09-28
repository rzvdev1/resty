import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';

console.log(import.meta.env.VITE_SOME_KEY);
console.log(import.meta.env.DB_PASSWORD);

export default function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const callApi = async (requestParams) => {
    try {
      const response = await fetch(requestParams.url, {
        method: requestParams.method,
      });
      const responseData = await response.json();
      setData(responseData);
      setRequestParams(requestParams);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}
