/**
* Debugging Guide
* 1. Enhance code readability for easier debugging.
* 2. Identify and correct calculation errors.
* 3. Improve the robustness of calculations. If incorrect units are used or other errors are detected,
*    the code should notify the user instead of producing an incorrect result.
*/

/**
* Function to calculate the new velocity after acceleration
* @param {Object} params
* @param {number} params.initialVelocity - The initial velocity in km/h
* @param {number} params.acceleration - The acceleration in m/s^2
* @param {number} params.time - The time duration in seconds
* @returns {number} The new velocity in km/h after acceleration
*/
const calcNewVelocity = ({ initialVelocity, acceleration, time }) => {
  // Check if the input parameters are valid numbers
  if (
    typeof initialVelocity !== 'number' ||
    typeof acceleration !== 'number' ||
    typeof time !== 'number'
  ) {
    throw new Error('Invalid input parameter types. All parameters must be numbers.');
  }
 
  // Convert initial velocity from km/h to m/s
  const initialVelocityInMetersPerSecond = (initialVelocity * 1000) / 3600;
 
  // Calculate the new velocity in m/s
  const newVelocityInMetersPerSecond = initialVelocityInMetersPerSecond + acceleration * time;
 
  // Convert the new velocity from m/s to km/h
  const newVelocityInKmPerHour = (newVelocityInMetersPerSecond * 3600) / 1000;
 
  return newVelocityInKmPerHour;
 };
 
 /**
 * Function to calculate the new distance traveled
 * @param {Object} params
 * @param {number} params.initialDistance - The initial distance in km
 * @param {number} params.initialVelocity - The initial velocity in km/h
 * @param {number} params.time - The time duration in seconds
 * @returns {number} The new distance traveled in km
 */
 const calcNewDistance = ({ initialDistance, initialVelocity, time }) => {
  // Check if the input parameters are valid numbers
  if (
    typeof initialDistance !== 'number' ||
    typeof initialVelocity !== 'number' ||
    typeof time !== 'number'
  ) {
    throw new Error('Invalid input parameter types. All parameters must be numbers.');
  }
 
  // Convert initial velocity from km/h to m/s
  const initialVelocityInMetersPerSecond = (initialVelocity * 1000) / 3600;
 
  // Calculate the new distance in meters
  const newDistanceInMeters = initialDistance * 1000 + initialVelocityInMetersPerSecond * time;
 
  // Convert the new distance from meters to km
  const newDistance = newDistanceInMeters / 1000;
 
  return newDistance;
 };
 
 /**
 * Function to calculate the remaining fuel
 * @param {Object} params
 * @param {number} params.initialFuel - The initial amount of fuel in kg
 * @param {number} params.fuelBurnRate - The fuel burn rate in kg/s
 * @param {number} params.time - The time duration in seconds
 * @returns {number} The remaining fuel in kg
 */
 const calcRemainingFuel = ({ initialFuel, fuelBurnRate, time }) => {
  // Check if the input parameters are valid numbers
  if (
    typeof initialFuel !== 'number' ||
    typeof fuelBurnRate !== 'number' ||
    typeof time !== 'number'
  ) {
    throw new Error('Invalid input parameter types. All parameters must be numbers.');
  }
 
  const fuelConsumed = fuelBurnRate * time;
  const remainingFuel = initialFuel - fuelConsumed;
 
  return remainingFuel;
 };
 
 // Initial Parameters
 const initialVelocity = 10000; // velocity (km/h)
 const acceleration = 3; // acceleration (m/s^2)
 const time = 3600; // seconds (1 hour)
 const initialDistance = 0; // distance (km)
 const initialFuel = 5000; // remaining fuel (kg)
 const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
 
 // Calculate the corrected results
 const newVelocity = calcNewVelocity({
  initialVelocity,
  acceleration,
  time,
 });
 
 const newDistance = calcNewDistance({
  initialDistance,
  initialVelocity,
  time,
 });
 
 const remainingFuel = calcRemainingFuel({
  initialFuel,
  fuelBurnRate,
  time,
 });
 
 // Log the corrected results
 console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
 console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
 console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);