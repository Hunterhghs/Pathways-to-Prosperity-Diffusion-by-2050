import React from 'react';

const HeroSection = () => {
    return (
        <section id="intro" className="hero">
            <div className="container">
                <h1>Pathways to Prosperity Diffusion by 2050</h1>
                <p className="subtitle">
                    Structural Transformation and Poverty Reduction in Emerging Economies
                </p>
                <div className="info-banner" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderLeftColor: 'var(--accent-color)' }}>
                    <p>
                        <strong>The economic premise:</strong> Coordinated reforms in infrastructure, institutions, and market integration compress the global poverty curve. Over the next few decades, high 'gear ratio' reforms are poised to enable a universal reasonable standard of living.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
