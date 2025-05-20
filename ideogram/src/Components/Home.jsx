import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Gallery from './Gallery';
import './Home.scss';

const sampleItems = [
  { title: 'YUSHIRO', description: 'Neon samurai street art' },
  { title: 'CARDINAL FURY', description: 'Tattoo style birds' },
  { title: 'ISLAND OF NO RETURN!', description: 'Mysterious island poster' },
  { title: 'THRASHERX', description: 'Comic book battle' },
  { title: 'LOST IN THOUGHT', description: 'Surreal illustration' },
  { title: 'NATIONAL ANTI-TERRORISM DAY', description: 'Event poster' },
  { title: 'FLUFF', description: 'Cat logo' },
  { title: 'Designer Bag', description: 'Product shot' },
];

const Home = () => (
  <div className="layout-root">
    <div className="main-content">
      <Sidebar />
      <div className="topbar-container">
        <Topbar />
      <Gallery items={sampleItems} />
      </div>
    </div>
  </div>
);

export default Home; 