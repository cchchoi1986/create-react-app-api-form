import React from 'react';

const ResultsTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Validated {props.type}</th>
        </tr>
      </thead>
      <tbody>
        {
          props.results.map(n => {
            return (<tr key={n}><td>{n}</td></tr>);
          })
        }
      </tbody>
    </table>
  );
}

export default ResultsTable;
