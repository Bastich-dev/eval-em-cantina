const urlApi = "http://localhost:9000/api";
const axios = require("axios");

export async function getListAllRecipes() {
    const path = `${urlApi}/recipes/`;
    const response = await axios.get(path);
    return response.data;
}

export async function getRecipeFromId({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await axios.get(path);
    return response.data;
}

export async function createRecipe({ data }) {
    const path = `${urlApi}/recipes/`;
    const response = await axios.post(path, data);
    return response.data;
}

export async function updateRecipe({ id, data }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await axios.put(path, data);
    return response.data;
}

export async function deleteRecipe({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await axios.delete(path);
    return response.data;
}
