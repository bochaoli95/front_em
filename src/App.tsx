import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './App.css';

function App() {
    const [finished, setFinished] = React.useState(false);

    const backgroundProps = useSpring({
        to: { transform: 'scale(1.3)' },
        from: { transform: 'scale(1)' },
        config: { duration: 5000 },
        onRest: () => setFinished(true),
    });

    const foregroundProps = useSpring({
        to: { transform: 'scale(1.5)', opacity: 1 },
        from: { transform: 'scale(1)', opacity: 0.5 },
        config: { duration: 5000 },
    });

    return (
        <div className="app">
            <animated.img
                src='/images/home_cloud.jpg' // 替换为你的背景图片URL
                alt="Background Image"
                style={{...backgroundProps, transformOrigin: '50% 100%'}}
                className="background-image"
            />
            <animated.img
                src='/images/home_house.png'
                alt="Foreground Image"
                style={{...foregroundProps, transformOrigin: '50% 100%'}}
                className="foreground-image"
            />
            {finished && <nav className="top-nav"> {/* 动画完成后显示导航栏 */}
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>}
        </div>
    );
}

export default App;
