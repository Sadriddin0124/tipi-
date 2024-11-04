export const formatWithSpaces = (num: number) => {
    return new Intl.NumberFormat('en-US', { 
        style: 'decimal', 
        useGrouping: true 
    }).format(num).replace(/,/g, ' ');
};

const formattedNumberWithSpaces = formatWithSpaces(1000);
console.log(formattedNumberWithSpaces); // Outputs: "1 000"
