import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FoundationsSection from './components/FoundationsSection';
import ScalingIntegrationSection from './components/ScalingIntegrationSection';
import CompoundingSection from './components/CompoundingSection';
import './index.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <FoundationsSection />
                <ScalingIntegrationSection />
                <CompoundingSection />
            </main>
            <footer style={{ backgroundColor: '#1a202c', color: '#718096', textAlign: 'center', padding: '2rem 0' }}>
                <p>&copy; {new Date().getFullYear()} Pathways to Prosperity Diffusion. All rights reserved.</p>
            </footer>
        </>
    );
}

export default App;
