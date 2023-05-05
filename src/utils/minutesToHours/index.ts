export function minutesToHours(minutes: number): string {
    const hr = Math.floor(minutes/60);
    const min = minutes % 60;

    if(hr === 0){
        return `${min}min`
    }

    if(min === 0){
        return `${hr}h`
    }
    
    return `${hr}h ${min}min`
} 