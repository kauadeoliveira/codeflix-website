export function minutesToHours(minutes: number): string {
    const hr = Math.floor(minutes/60);
    const min = minutes % 60;

    return `${hr}h ${min}min`
} 