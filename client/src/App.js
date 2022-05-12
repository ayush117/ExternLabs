import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.message);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data.map(item => {
          return <>
            <li>
              {item.firstName}
            </li>
          </>
        })}</p>
      </header>
    </div>
  );
}

export default App;