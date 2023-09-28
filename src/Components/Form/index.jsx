import { useState } from 'react';
import './Form.scss';

export default function Form({ handleApiCall }) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall({ url, method });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
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
