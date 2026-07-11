import api from "./api";

export const startInterview = (data) =>
    api.post("/interview/start", data);

export const submitAnswer = (data) =>
    api.post("/interview/answer", data);

export const getHistory = () =>
    api.get("/interview/history");

export const getInterview = (id) =>
    api.get(`/interview/${id}`);

export const getStatistics = () =>
    api.get("/interview/statistics");

export const getRecentInterview = () =>
    api.get("/interview/recent");