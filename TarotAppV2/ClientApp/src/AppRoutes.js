import About from "./components/About";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ReadingHistory from "./components/ReadingHistory";
import TarotReading from "./components/TarotReading";



const AppRoutes = [
  
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        index: true,
        element: <TarotReading />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/reading-history',
        element: <ReadingHistory />
    }
];

export default AppRoutes;
