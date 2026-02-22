import React from 'react';

const FoundationsSection = () => {
    const foundations = [
        {
            title: 'Interoperable Digital Public Infrastructure (DPI)',
            description: 'Universal, low-cost access and verifiable data through Digital ID, Instant Payments, and Data Exchange registries.',
            icon: '🌐'
        },
        {
            title: 'Reliable Power Grids',
            description: 'Decarbonized, affordable energy for production from smart metering, wind, solar, and clean thermal sources.',
            icon: '⚡'
        },
        {
            title: 'Logistics & Trade Facilitation Systems',
            description: 'Reduced friction, lower costs, and increased market access through modernized ports, efficient customs, and digital trade platforms.',
            icon: '🚢'
        },
        {
            title: 'Urban Land Formalization',
            description: 'Secure tenure, unlocked capital, and planned growth enabled by digital maps, titles, and urban planning tools.',
            icon: '🏙️'
        },
        {
            title: 'SME Credit Infrastructure',
            description: 'Accessible finance for scaling and productivity via digital lending platforms, alternative credit scoring, and capital access.',
            icon: '💰'
        }
    ];

    return (
        <section id="foundations" className="timeline-section" style={{ backgroundColor: '#fdfdfd' }}>
            <div className="container">
                <div className="section-header">
                    <h2>2025: Foundational Platform Layers</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                        Establishing the essential baselines for broad-based economic scaling.
                    </p>
                </div>
                <div className="grid-container">
                    {foundations.map((item, index) => (
                        <div key={index} className="card">
                            <h3><span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{item.icon}</span> {item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoundationsSection;
