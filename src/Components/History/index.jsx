export default function History({ handleApiCall }) {
  //      Iterates the history array in state and shows the previous API calls.

  function history() {
    const historyArr = [];
    const previousCalls = localStorage.getItem('previousCalls');
    if (previousCalls) {
      const parsed = JSON.parse(previousCalls);
      parsed.forEach((call) => {
        historyArr.push(call);
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // history();
    console.log('history');
    console.log(history());
  };

  return (
    <>
      <button onClick={handleSubmit}>History</button>
      {handleApiCall}
    </>
  );
}
