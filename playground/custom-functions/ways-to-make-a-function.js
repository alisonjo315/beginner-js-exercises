// recap from cf_params-arg.js
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous function
// but it won't work in this situation, needs a name
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
