import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DoodleBackgroundProps {
    variant: 'visual' | 'digital' | 'art' | 'default';
    className?: string;
}

const DoodleBackground: React.FC<DoodleBackgroundProps> = ({ variant, className = "" }) => {
    const doodlePaths = useMemo(() => {
        switch (variant) {
            case 'visual':
                return [
                    "M10,10 Q50,90 90,10 T170,90",
                    "M30,150 C70,110 130,190 170,150",
                    "M250,50 L280,80 L250,110 Z",
                    "M400,100 A50,50 0 1,1 300,100"
                ];
            case 'digital':
                return [
                    "M50,50 H150 V150 H50 Z",
                    "M200,50 L250,100 L200,150",
                    "M300,50 v100 M320,50 v100 M340,50 v100",
                    "M400,50 h100 M400,70 h100 M400,90 h100"
                ];
            case 'art':
                return [
                    "M10,10 C40,40 10,70 40,100 S10,160 40,190",
                    "M100,20 Q150,150 200,20",
                    "M250,100 Q300,10 350,100 T450,100",
                    "M50,250 C150,200 150,300 250,250"
                ];
            default:
                return [
                    "M20,20 L100,100",
                    "M150,50 Q200,150 250,50",
                    "M300,100 A40,40 0 1,0 380,100"
                ];
        }
    }, [variant]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-10 ${className}`}>
            <AnimatePresence mode="wait">
                <motion.svg
                    key={variant}
                    viewBox="0 0 500 500"
                    className="w-full h-full text-brand-purple"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    {doodlePaths.map((path, i) => (
                        <motion.path
                            key={i}
                            d={path}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
                        />
                    ))}
                </motion.svg>
            </AnimatePresence>
        </div>
    );
};

export default DoodleBackground;
