import { useEffect, useReducer } from 'react';
import './Form.scss';

export default function Form({ handleApiCall }) {
  const ACTIONS = {
    UPDATE_URL: 'update-url',
    UPDATE_METHOD: 'update-method',
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.UPDATE_URL:
        return { ...state, url: action.payload };
      case ACTIONS.UPDATE_METHOD:
        return { ...state, method: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { url: '', method: 'GET' });

  useEffect(() => {
    if (state.url && state.method) {
      console.log(state.url, state.method);
    }
    return () => {
      console.log('cleanup');
    };
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input
          type='text'
          value={state.url}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_URL, payload: e.target.value })
          }
          required
        />
      </label>
      <label>
        Method:
        <select
          value={state}
          onChange={(e) =>
            dispatch({ type: ACTIONS.UPDATE_METHOD, payload: e.target.value })
          }
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
      </label>
      <button type='submit'>GO!</button>
    </form>
  );
}
