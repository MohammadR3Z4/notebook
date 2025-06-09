import networkApi from "./networkApi";

export const readNoteBook = async () => {
  try {
    const response = await networkApi.get(`/note-book`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const showNotebook = async (id) => {
  try {
    const response = await networkApi.get(`/note-book/${id}`);

    return response.data;
  } catch (error){
    throw error;
  }
}

export const craeteNoteBook = async (data) => {
  try {
    const response = await networkApi.post('/note-book', {data});

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNoteBook = async (id) => {
  try {
    const response = await networkApi.delete(`/note-book/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};