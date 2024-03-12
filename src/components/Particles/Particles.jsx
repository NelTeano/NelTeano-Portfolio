import PropTypes from 'prop-types'

import { useEffect, useMemo, useState } from "react";
import ReactParticles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";



function Particles({children}) {
    
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Check if Particles Loaded to Container", container);
    };

        const options = useMemo(
            () => ({
            background: {
                color: {
                value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                },
                modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                value: "#ffffff",
                },
                links: {
                color: "#ffffff",
                distance: 180,
                enable: true,
                opacity: 0.5,
                width: 1,
                },
                move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
                },
                number: {
                density: {
                    enable: true,
                },
                value: 80,
                },
                opacity: {
                value: 0.5,
                },
                shape: {
                type: "circle",
                },
                size: {
                value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            }),
            [],
        );

        if (init) {
                return (
                <ReactParticles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    
                >
                    {children}
                </ReactParticles>
                );
        }

        return <></>;
}

Particles.propTypes = {
    children: PropTypes.node
}

export default Particles
