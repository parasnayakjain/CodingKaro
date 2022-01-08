


const d = new Date();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturay"];
function day(){

var n=Number(d.getDay());
return days[n];
};

module.exports.day=day;