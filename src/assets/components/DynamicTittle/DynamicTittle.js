import React, { useEffect } from 'react';

const DynamicTittle = (title) => {
    useEffect(() => {
        document.title = `${title} - Savoury Bite`
    }, [title])
};

export default DynamicTittle;