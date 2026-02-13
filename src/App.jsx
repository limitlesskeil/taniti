import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Booking from './pages/Booking'
import BookingItem from './pages/BookingItem'
import RoomItem from './pages/RoomItem'
import Attractions from './pages/Attractions'
import AttractionItem from './pages/AttractionItem'
import Events from './pages/Events'
import EventItem from './pages/EventItem'
import Faq from './pages/Faq'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:id" element={<BookingItem />} />
        <Route path="/booking/:id/room/:roomId" element={<RoomItem />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attractions/:id" element={<AttractionItem />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventItem />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
