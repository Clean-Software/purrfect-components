const mergeClassNames = (classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};

export { mergeClassNames };
