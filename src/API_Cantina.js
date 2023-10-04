import axios from "axios";
const urlApi = "http://localhost:5000/api";

export async function getListAllRecipes() {
    await fakeDelay(1000);
    const path = `${urlApi}/recipes/`;
    const response = await axios.get(path);
    return response?.data;
}

export async function getRecipeFromId({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await axios.get(path);
    return response?.data;
}

export async function createRecipe({ data }) {
    const path = `${urlApi}/recipes/`;
    const response = await axios.post(path, data);
    return response?.data;
}

export async function updateRecipe({ id, data }) {
    const path = `${urlApi}/recipe/${id}`;
    const response = await axios.put(path, { ...data, id });
    return response?.data;
}

export async function deleteRecipe({ id }) {
    const path = `${urlApi}/recipe/${id}/`;
    const response = await axios.delete(path);
    return response?.data;
}

const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
