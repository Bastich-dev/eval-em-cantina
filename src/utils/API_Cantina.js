const urlApi = "http://localhost:9000/api";

const headers = new Headers();
// myHeaders.append("Content-Type", "application/json");

export async function getListAllRecipes() {
    const path = `${urlApi}/recipes/`;
    const response = await fetch(path, { method: "GET", headers }).then(res => res.json());
    return response;
}

export async function getRecipeFromId({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await fetch(path, { method: "GET", headers }).then(res => res.json());
    return response;
}

export async function createRecipe() {
    const path = `${urlApi}/recipes/`;
    const response = await fetch(path, { method: "POST", headers }).then(res => res.json());
    return response;
}

export async function updateRecipe({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await fetch(path, { method: "PUT", headers }).then(res => res.json());
    return response;
}

export async function deleteRecipe({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await fetch(path, { method: "DELETE", headers }).then(res => res.json());
    return response;
}
