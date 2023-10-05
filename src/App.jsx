import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useCallback, useEffect, useReducer } from 'react';

console.log(import.meta.env.VITE_SOME_KEY);
console.log(import.meta.env.DB_PASSWORD);

export default function App() {
  const ACTIONS = {
    SET_DATA: 'set_data',
    SET_REQUEST_PARAMS: 'set_request_params',
    SET_HEADERS: 'set_headers',
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_DATA:
        return { ...state, data: action.payload };
      case ACTIONS.SET_REQUEST_PARAMS:
        return { ...state, requestParams: action.payload };
      case ACTIONS.SET_HEADERS:
        return { ...state, headers: action.payload };
      default:
        return state;
    }
  }

  function previousApiCalls() {
    localStorage.setItem('previousCalls', JSON.stringify(data));
    const previousCalls = localStorage.getItem('previousCalls');
    if (previousCalls) {
      return JSON.parse(previousCalls);
    } else {
      return [];
    }
  }

  const [data, dispatchData] = useReducer(reducer, {
    data: null,
    requestParams: {},
    headers: null,
  });
  const prev = useCallback(previousApiCalls, []);
  console.log('prev', prev);

  useEffect(() => {
    if (data && data.requestParams) {
      console.log(data);
    }
    return () => {
      console.log('cleanup');
    };
  }, [data]);

  const callApi = async (requestParams) => {
    try {
      const response = await fetch(requestParams.url, {
        method: requestParams.method,
      });
      const responseHeaders = Object.fromEntries(response.headers.entries());

      const responseData = await response.json();

      dispatchData({ type: ACTIONS.SET_DATA, payload: responseData });
      dispatchData({ type: ACTIONS.SET_HEADERS, payload: responseHeaders });
      dispatchData({
        type: ACTIONS.SET_REQUEST_PARAMS,
        payload: requestParams,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div>Request Method: {data.requestParams.method}</div>
      <div>URL: {data.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results headers={data.headers} data={data} />
      <Footer />
    </>
  );
}
