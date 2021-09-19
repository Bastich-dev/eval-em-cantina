export function compareTime({ tempsPreparation }, searchInput) {
    const isEmpty = !searchInput.time;
    if (isEmpty) return true;
    else if (searchInput.time <= 60 && tempsPreparation <= searchInput.time) return true;
    else if (searchInput.time > 60 && tempsPreparation > searchInput.time) return true;
    else {
        return false;
    }
}

export function compareIngredients({ ingredients }, searchInput) {
    // const isEmpty = !searchInput.ingredients.length === 0;
    // let commonIngredient = false;
    // searchInput.ingredients.forEach(e => {
    //     if (ingredients.includes(e)) {
    //         commonIngredient = true;
    //     }
    // });
    // if (isEmpty || commonIngredient) return true;
    // else {
    //     return false;
    // }
    return true;
}

export function compareSearch({ titre, description }, searchInput) {
    const isEmpty = !searchInput.search;
    const isInTitle = titre.toLowerCase().indexOf(searchInput.search) > -1;
    const isInDescription = description.toLowerCase().indexOf(searchInput.search) > -1;
    if (isEmpty || isInTitle || isInDescription) return true;
    else return false;
}

export function compareLevel({ niveau }, searchInput) {
    const isEmpty = !searchInput.level;
    if (isEmpty || searchInput.level === niveau) return true;
    else return false;
}

export function comparePersons({ personnes }, searchInput) {
    const isEmpty = !searchInput.persons;
    if (isEmpty) return true;
    else if (searchInput.persons < 6 && personnes === searchInput.persons) return true;
    else if (searchInput.persons === 6 && personnes > searchInput.persons) return true;
    else return false;
}
