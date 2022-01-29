import { AxiosInstance } from "axios";

/**
 * This is the ApiEndpoint type, this type makes sure that the all endpoints are valid.
 */

export type ApiEndpoint =
  | "/"
  | "/api/login"
  | "/api/signup"
  | "/api/get-mesages"
  | "/api/get-user-info"
  | "/api/get-users"
  | "/api/report-user"
  | "/api/block-user";

/**
 * This is the ApiEndpoints type, This type works with the "ApiEndpoint"
 * type to validate the endpoints in the code.
 *
 * Endpoints:
 * @param {ApiEndpoint} home
 * @param {ApiEndpoint} login
 * @param {ApiEndpoint} signup
 * @param {ApiEndpoint} getMessages
 * @param {ApiEndpoint} getUsers
 * @param {ApiEndpoint} getUserInfo
 * @param {ApiEndpoint} blockUser
 * @param {ApiEndpoint}reportUser
 */

export interface ApiEndpoints {
  home: ApiEndpoint;
  login: ApiEndpoint;
  signup: ApiEndpoint;
  getMessages: ApiEndpoint;
  getUserInfo: ApiEndpoint;
  reportUser: ApiEndpoint;
  blockUser: ApiEndpoint;
  getUsers: ApiEndpoint;
}

/**
 * This is the combined type that is exported from "api.ts".
 *
 * @param {AxiosInstance} instance The Axios instance
 * @param {ApiEndpoints} endpoints All the api endpoints
 * @param {string} apiKey Api key
 */

export interface ApiCombined {
  instance: AxiosInstance;
  endpoints: ApiEndpoints;
  apiKey: string;
}
