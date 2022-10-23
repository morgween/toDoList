//jshint esversion:6

module.exports.getDate = getDate;
function getDate() {
    let today = new Date();

    return today.toLocaleDateString("en-US", {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });
}