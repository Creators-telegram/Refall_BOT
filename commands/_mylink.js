/*CMD
  command: /mylink
  help: Prendi il tuo link di refall
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("Arkgraphic_bot");
Bot.sendMessage(parther_link);



