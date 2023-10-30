/**
 * Fetches task data for a specific user from the API.
 * @param {string} userMail - The user's email address.
 * @returns {Promise<Object>} A Promise that resolves to the fetched data.
 */
export const fetchApiData = async (userMail) => {
  const response = await fetch(`http://localhost:8000/todos/${userMail}`);
  const json = await response.json();
  return json;
};

/**
 * Deletes a task item from the API by its ID.
 * @param {string} id - The ID of the task to delete.
 * @returns {Promise<Response>} A Promise that resolves to the HTTP response.
 */
export const deleteApiData = async (id) => {
  const response = await fetch(`http://localhost:8000/todos/${id}`, {
    method: "DELETE",
  });
  return response;
};

/**
 * Creates a new task item in the API.
 * @param {Object} data - The task data to be created.
 * @returns {Promise<Response>} A Promise that resolves to the HTTP response.
 */
export const createApiData = async (data) => {
  const response = await fetch(`http://localhost:8000/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};

/**
 * Edits an existing task item in the API.
 * @param {Object} task - The task to be edited.
 * @param {Object} data - The updated task data.
 * @returns {Promise<Response>} A Promise that resolves to the HTTP response.
 */
export const editApiData = async (task, data) => {
  const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};
