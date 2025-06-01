import networkApi from "./networkApi";

export const craeteNoteBook = async (data) => {
  try {
    const response = await networkApi.post(`/note-book/create${data}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const readNoteBook = async () => {
  try {
    const response = await networkApi.post(`/note-book/read`);

    return response.data;
  } catch (error) {
    throw error;
  }
};