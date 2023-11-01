import About from "./components/About";
import ReadingHistory from "./components/ReadingHistory";
import TarotReading from "./components/TarotReading";



const AppRoutes = [
  
  
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
