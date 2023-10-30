/**
 * Filters a list of tasks by a specific category and updates the filtered tasks.
 * @param {string} category - The category by which tasks should be filtered.
 * @param {Function} setFilteredTasks - Function to set the filtered tasks.
 * @param {Array<Object>} tasks - The list of tasks to filter.
 */

export const filterTasksByCategory = (category, setFilteredTasks, tasks) => {
  if (category === "Todo") {
    setFilteredTasks(tasks);
  } else {
    const filtered = tasks?.filter((task) => task.category === category);
    setFilteredTasks(filtered);
  }
};
