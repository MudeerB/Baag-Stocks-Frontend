import React from 'react';
import './index.css';
import Navbar from './Navbar';
import LoginForm from './Loginform';
import SearchPage from './searchpage';

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <SearchPage />
   
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.css';
// import Navbar from './Navbar';
// import LoginForm from './Loginform';
// import SearchPage from './searchpage';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col items-center bg-gray-200 min-h-screen">
//         <Navbar />
//         <Switch>
//           <Route path="/search">
//             <SearchPage />
//           </Route>
//           <Route path="/">
//             <LoginForm />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;




