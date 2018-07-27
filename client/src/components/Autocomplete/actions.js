import propertiesService from "../../services/axios/propertiesService";

export const POST_PROPERTIES = "post_properties";

export function postProperties(data) {
  const request = propertiesService.post(null, data);

  return {
    type: POST_PROPERTIES,
    payload: request
  };
}