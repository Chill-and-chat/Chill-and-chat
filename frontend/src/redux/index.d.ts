/**
 * This is the action interface for the redux store.(Without the payload)
 *
 * @param {string} type The type of the action.
 */

export interface ActionNoParameter {
  type: string;
}

/**
 * This is the action interface for the redux store.(With the payload)
 *
 * @extends {ActionNoParameter} This interface extends the action no paramater interface.
 * @param PayloadType The type of the payload.
 * @param {PayloadType} payload The payload of the action.
 */

export interface ActionWithParameter<PayloadType> extends ActionNoParameter {
  payload: PayloadType;
}
