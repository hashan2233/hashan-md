const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
╭━━━━━━━━━━━━━━━━━━━╮
┃   🤖  *𝐇𝐀𝐒𝐇𝐀𝐍 𝐌𝐃* BOT STATUS     
┣━━━━━━━━━━━━━━━━━━━┫
┃ 👋  *User*     : ${pushname}
┃ ⏳  *Uptime*   : ${runtime(process.uptime())}
┃ 💾  *RAM*      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃ 👨‍💻  *Owner*: HASHAN MADUSANKA
╰━━━━━━━━━━━━━━━━━━━╯

🔥 *𝐇𝐀𝐒𝐇𝐀𝐍 𝐌𝐃 - MultiDevice WhatsApp Bot*
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/xSd4WSFd/SulaMd.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363285386038532@newsletter',
                    newsletterName: '𝐇𝐀𝐒𝐇𝐀𝐍-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
