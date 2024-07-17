import React from 'react';

interface Props {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
    variant?: 'important' | 'important-2',
    customClass?: string,
    children: React.ReactNode,
}

const tagStyle = {
    'h1': 'text-4xl font-semibold',
    'h2': 'text-3xl font-semibold',
    'h3': 'text-2xl font-semibold',
    'h4': 'text-xl font-semibold',
    'h5': 'text-lg font-semibold',
    'h6': 'text-md font-semibold',
    'p': '',
    'span': '',
}

const variantStyle = {
    'important': 'text-camelia font-semibold',
    'important-2': 'text-retama font-semibold',
}

export default function Typography ({ tag='p', variant, customClass="", children }: Props) {
    const Tag = tag;
    return (
        <Tag className={`${variant ? variantStyle[variant] : ""} ${tagStyle[tag]} ${customClass}`}>
            {children}
        </Tag>
    );
}