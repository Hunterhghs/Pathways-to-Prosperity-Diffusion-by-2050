import React from 'react';

const ScalingIntegrationSection = () => {
    return (
        <section id="scaling" className="timeline-section" style={{ backgroundColor: '#f4f7f6' }}>
            <div className="container">
                <div className="section-header">
                    <h2>2025-2035: Scaling & Integration</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '700px', margin: '0.5rem auto 0' }}>
                        Sequenced reforms compress the global poverty curve as households and small firms transition to formal enterprises.
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>

                    <div style={{ flex: '1 1 400px' }}>
                        <div className="info-banner" style={{ margin: 0, backgroundColor: 'white' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Inclusive Diffusion vs. Enclave Growth</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                Historically, growth in emerging economies was often confined to specific 'enclaves' or sectors. The new paradigm focuses on <strong>inclusive diffusion</strong>, expanding economic activity hubs.
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Transformation in Agriculture</li>
                                <li style={{ marginBottom: '0.5rem' }}>Growth of Light Manufacturing</li>
                                <li style={{ marginBottom: '0.5rem' }}>Expansion of Services Sectors</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 400px' }}>
                        <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
                            <h3>Digital Transfers & Market Access</h3>
                            <p>
                                As households connect to global markets and small firms formalize, digital transfers act as a catalyst. This period sees a massive shift from subsistence to scalable economic activity, increasing exports and global market integration.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ScalingIntegrationSection;
