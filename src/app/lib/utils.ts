export const formatWithSpaces = (num: number) => {
    return new Intl.NumberFormat('en-US', { 
        style: 'decimal', 
        useGrouping: true 
    }).format(num).replace(/,/g, ' ');
};

// lib/utils.ts
export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  