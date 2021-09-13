const urlApi = "http://localhost:9000/api";

const headers = new Headers();
// myHeaders.append("Content-Type", "application/json");

export async function getRecipeFromId({ id }) {
    const path = `${urlApi}/recipes/`;
    const response = await fetch(path, { method: "GET", headers });
    return response;
}

export async function getListRecipesFromSearch() {
    const path = `${urlApi}/recipes/`;
    const response = await fetch(path, { method: "GET", headers });
    return response;
}
