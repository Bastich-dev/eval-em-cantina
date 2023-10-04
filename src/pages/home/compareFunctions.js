import dayjs from "dayjs";

export function compareTime({ tempsPreparation }, searchInput) {
    if (!searchInput.time) return true;
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
    if (!searchInput.search) return true;
    const isInTitle = titre.toLowerCase().indexOf(searchInput.search.toLowerCase()) > -1;
    const isInDescription = description.toLowerCase().indexOf(searchInput.search.toLowerCase()) > -1;
    if (isInTitle || isInDescription) return true;
    else return false;
}

export function compareLevel({ niveau }, searchInput) {
    if (!searchInput.level) return true;
    if (niveau === searchInput.level) return true;
    else return false;
}

export function comparePersons({ personnes }, searchInput) {
    if (!searchInput.persons) return true;
    if (personnes === searchInput.persons) return true;
    else return false;
}

export function formatTime(new_date) {
    return String(dayjs(new_date).get("hours")).padStart(2, "0") + ":" + String(dayjs(new_date).get("minutes")).padStart(2, "0");
}
