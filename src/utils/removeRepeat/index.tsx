

export function removeRepeat(items: any[]): any[] {
    const newArray: any[] = []

    items.forEach(item => {
        if(!newArray.find(i => i.id === item.id)){
            newArray.push(item)
        }
    })

    return newArray
}