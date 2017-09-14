// useage: getRandomWithChance(['a', 'b', 'c:1.5'])
// the default chance is 1.0, and you should not use key name with semicolon
const getRandomWithChance = function(items){
    // generate candidate items and their chance;
    let itemsWithChance = [];
    for(let i=0;i<items.length;i++) {
        let itemArr = items[i].split(':')
        itemsWithChance.push({
            name: itemArr[0],
            occupy: (itemArr[1] && parseFloat(itemArr[1])) || 1.0,
            start: i==0 ? 0 : itemsWithChance[i-1].end,
            end: i==0 ? (itemArr[1] && parseFloat(itemArr[1])) || 1.0 : itemsWithChance[i-1].end + itemsWithChance[i-1].occupy,
        })
    }

    // get a random item
    let random = Math.random() * itemsWithChance[itemsWithChance.length-1].end;
    for(let i=0;i<itemsWithChance.length;i++) {
        if(random>=itemsWithChance[i].start && random < itemsWithChance[i].end) {
            return itemsWithChance[i].name;
        }
    }
}

export default getRandomWithChance;