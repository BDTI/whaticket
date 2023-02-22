import axios from "axios";
import { getBackendUrl } from "../config";

const api = axios.create({
	baseURL: getBackendUrl(),
	withCredentials: true,
});

export const webhookVersotech = axios.create({
	baseURL: "http://localhost:6060",
}); 

export default api;
