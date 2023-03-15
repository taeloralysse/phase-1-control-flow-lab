function scuberGreetingForFeet(ride){
  // Write your code here!
  let result
  if (ride <= 400) {result = `This one is on me!`;} 
    else if (ride >= 401) {result = `That will be twenty bucks.`;
      if (ride >= 2000) {result = `I will gladly take your thirty bucks.`;
      if (ride >= 2500) {result = `No can do.`}}}
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
  
return checkCity}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reply
  switch (tip){
    case `generous`:
      reply = `Thank you so much.`;
      break;
    case `not as generous`:
      reply = `Thank you.`
      break;
    default:
      console.log(reply = `Bye.`);
      break;}
    return reply;}