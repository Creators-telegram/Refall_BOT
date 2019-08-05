/*CMD
  command: /clear
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(Libs.ReferralLib.currentUser.refList.clear()){
  Bot.sendMessage("I tuoi refall sono stati eliminati")
}
