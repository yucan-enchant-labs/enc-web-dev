'use client'
import React from 'react';

interface ButtonProps {
    label: string;
    style: string;
    externalUrl: string;
    openIn: boolean;
}

export const EncButton: React.FC<ButtonProps> = ({ label, style, externalUrl, openIn }) => {
    console.log(label, style, externalUrl, openIn)
    const handleClick = () => {
        if (openIn) {
            window.location.href = externalUrl;
        } else {
            window.open(externalUrl, '_blank');
        }
    };

    return (
        <button className={style == 'Primary' ? 'primaryButton' : "secondaryButton"} onClick={handleClick}>
            {label}
        </button>
    );
};