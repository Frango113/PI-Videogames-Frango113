import axios from "axios";
import {
  GET_ALL_VGAMES,
  GET_DETAIL,
  GET_GENRES,
  POST_VGAME,
  PAGINADO,
  SEARCH_NAME,
  DELETE_VGAME,
  UPDATE_VGAME,
  CLEAR_DETAIL,
  FILTER_BANK,
  REMOVE_ALL_FILTER,
  REMOVE_FILTER,
  REMOVE_ALL_FILTER,
  ERRORS,
  CLEAR_ERRORS,
  NOT_RELOAD,
} from "../actiontypes";

export function getAllVGames() {
  return async function (dispatch) {
    try {
      const response = (await axios.get("http://localhost:3001/videogames"))
        .data;
      dispatch({
        type: GET_ALL_VGAMES,
        payload: response,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function paginado(value) {
  return async function (dispatch) {
    dispatch({
      type: PAGINADO,
      payload: value,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get("http://localhost:3001/videogames/" + id)
      ).data;
      dispatch({
        type: GET_DETAIL,
        payload: response,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function clearDetail() {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_DETAIL,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    try {
      const response = (await axios.get("http://localhost:3001/genres")).data;
      dispatch({
        type: GET_GENRES,
        payload: response,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function postVgame(payload) {
  return async function (dispatch) {
    try {
      const headers = { "Content-Type": "application/json" };
      const response = await axios.post(
        "http://localhost:3001/videogames",
        payload,
        { headers }
      );
      dispatch({
        type: POST_VGAME,
        payload: response.data,
      });
      return false;
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: { type: "postVideogame", error: error.response.data },
      });
      return error;
    }
  };
}

export function setNewErrors(obj) {
  return async function (dispatch) {
    dispatch({
      type: ERRORS,
      payload: obj,
    });
  };
}

export function clearErrors() {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}

export function notReload(boolean) {
  return async function (dispatch) {
    dispatch({
      type: NOT_RELOAD,
      payload: boolean,
    });
  };
}

export function filterBank(filterObj) {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BANK,
      payload: filterObj,
    });
  };
}

export function removeFilter(value) {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_FILTER,
      payload: value,
    });
  };
}

export function filterApply() {
  return async function (dispatch) {
    dispatch({
      type: FILTER_APPLY,
    });
  };
}

export function removeAllFilter() {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_ALL_FILTER,
    });
  };
}

export function searchName(name) {
  return async function (dispatch) {
    const response = (
      await axios.get("http://localhost:3001/videogames?name=" + name)
    ).data;
    dispatch({
      type: SEARCH_NAME,
      payload: response,
    });
  };
}

export function deleteVgame(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete("http://localhost:3001/delete/" + id);
      dispatch({
        type: DELETE_VGAME,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
}

export function updateVgame(payload, id) {
  return async function (dispatch) {
    try {
      const headers = { "Content-Type": "application/json" };
      const response = await axios.patch(
        `http://localhost:3001/update/${id}`,
        payload,
        { headers }
      );
      dispatch({
        type: UPDATE_VGAME,
        payload: response.data,
      });
      return false;
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: { type: "updateVideogame", error: error.response.data },
      });
      return error;
    }
  };
}
