/*CMD
  command: /top
  help: Vedi la top 10
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = "*Top 10 List*:\n";
let users = Libs.ReferralLib.topList.get(10);

for(var index in users){
  let u = users[index];
  msg+= "@" + u.username + ": " + u.count + "\n";
}

Bot.sendMessage(msg);
