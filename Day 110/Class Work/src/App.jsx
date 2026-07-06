import "./App.css";
import Card from "./components/card";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const prods = [
    {
      title: "Apple",
      price: 10.99,
    },
    {
      title: "Banana",
    },
    {
      name: "Mango",
    },
  ];

  return (
    

    <div>
      {prods.map((item,i) => {
          return(
            <ErrorBoundary key={i} fallback={<h1>Something went wrong</h1>}>
              <Card title={item.title} price={item.price}/>
            </ErrorBoundary>
                          

          )
        })}
    </div>
    
      
      
    
  );
}

export default App;
