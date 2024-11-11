export const FETCH_STATUS = "FETCH_STATUS";

export const setFetchStatus = (entity, status) => ({
  type: FETCH_STATUS,
  payload: { entity, status },
});
