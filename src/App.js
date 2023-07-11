import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profiles from './screens/Profiles';
import ProfileForm from './screens/ProfileForm';
import ProfileDetails from './screens/ProfileDetails';
import PageNotFound from './screens/PageNotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/profiles/:id" element={<ProfileDetails />} />
        <Route path="/addprofile" element={<ProfileForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
