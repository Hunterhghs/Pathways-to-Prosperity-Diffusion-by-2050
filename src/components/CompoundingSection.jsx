import React from 'react';

const CompoundingSection = () => {
    return (
        <section id="compounding" className="timeline-section" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="section-header">
                    <h2>2035-2050: Compounding Productivity & Inclusion</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '800px', margin: '0.5rem auto 0' }}>
                        High "gear ratio" reforms enable compounding returns, culminating in a universal reasonable standard of living.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                        <h3>Digital Adoption</h3>
                        <p>Widespread digital adoption enhances productivity across all sectors and accelerates inclusion.</p>
                    </div>

                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                        <h3>Advanced Manufacturing</h3>
                        <p>Transitioning from light to advanced manufacturing increases value-add and robust export capacity.</p>
                    </div>

                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
                        <h3>Knowledge Economy Growth</h3>
                        <p>Investments in human capital drive innovation, enabling participation in the high-value global knowledge economy.</p>
                    </div>

                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '8px' }}>
                    <h2 style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '1rem' }}>The Goal: Universal Reasonable Standard of Living</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#e2e8f0' }}>
                        By 2050, the structural integration of DPI, infrastructure, and compounded productivity creates a unified global market where basic needs and aspirational goals are universally accessible.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CompoundingSection;
