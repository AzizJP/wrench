const breakpoints: Array<number> = [420, 768];
const mq: Array<string> = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default mq;
