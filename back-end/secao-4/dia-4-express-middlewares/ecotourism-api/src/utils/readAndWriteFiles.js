const fs = require('fs').promises;

const readActivities = async () => {
  try {
    const activities = await fs.readFile('../../activities.json', 'utf8');
    return JSON.parse(activities);
  } catch (error) {
    const err = new Error('Error opening file');
    err.statusCode = 500;
    throw err;
  }
};

const writeActivitiesFile = async (activity) => {
  try {
    const arrayPosts = await readActivities();
    console.log(arrayPosts);
    arrayPosts.push({ id: arrayPosts.length += 1, activity });
    return await fs.writeFile('../../activities.json', JSON.stringify(arrayPosts, null, 2));
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  writeActivitiesFile,
};