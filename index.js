/* eslint-disable */
const Discord = require("discord.js");
const bot = new Discord.Client();
const DestinyBot =
  "NTgzNDAwNDM0NzI3NjQ5MzIy.XO70aw._KMgMwuQOaUZYteea-BDiX7-VEU";
bot.on("ready", () => {
  console.log("initialized");
});
const adminRole = message.guild.roles.find(role => role.name == "Admin");
// msg options
bot.on("message", msg => {
  if (msg.author !== bot.user) {
    //disco func - makes specific role rainbow color
    discoRole = () => {
      msg.guild.roles.forEach(role => {
        if (role.id == "561935588341710869") {
          let random = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
          role.setColor(random);
        }
      });
    };
    // initiate disco
    if (msg.content.startsWith("&startDisco")) {
      setInterval(() => {
        discoRole();
      }, 1500);
    }
    // terminate disco
    if (msg.content.startsWith("&stopDisco")) {
      setTimeout(() => {
        console.log(process.exit(0));
      }, 300);
    }
    //kick func
    if (msg.content === "&kickme") {
      msg.guild.members.get(msg.author.id).kick();
      msg.reply("Bye!");
    }
    //show me func
    if (msg.content === "&me") {
      let currUser = msg.guild.members.get(msg.author);
      msg.reply(currUser);
    }
    //reg func
    if (msg.content === "&register") {
      //Adding base role and Changing Nickname for new players only
      if (msg.guild.members.get(msg.author.id).nickname == true) {
        var currentNick = msg.guild.members
          .get(msg.author.id)
          .nickname.search("[DeIL]");
        msg.member.addRole("454747868226650132");
      }
      if (currentNick === -1) {
        msg.guild.members
          .get(msg.author.id)
          .setNickname(
            "[DeIL] " + msg.guild.members.get(msg.author.id).nickname
          );
        msg.reply("All set ! Registration complete!");
      } else {
        msg.reply("Seems like you are already registered..");
      }
    }
    //administration function passing on all members adding newcomer role
    if (msg.content === "&adminReg") {
      if (message.member.roles.has(adminRole.id)) {
        msg.guild.fetchMembers();
        msg.guild.members.forEach(soloUser => {
          soloUser.addRole("454747868226650132");
        });
      } else {
        message
          .reply("Sorry, you don't have permission to use this command!")
          .catch(console.error);
      }
    }
  }
});

bot.login(dafna);
