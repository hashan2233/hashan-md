const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = '𝐇𝐀𝐒𝐇𝐀𝐍-𝐌𝐃';
        const repolink = `
*😈 : 𝐇𝐀𝐒𝐇𝐀𝐍-𝐌𝐃 REPOSTORI*
*╭┈───────────╴╴╴•⟢*
*│
*╰┈───────────╴╴╴•⟢*
*😈 : 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*
*╭┈───────────╴╴╴•⟢*
*│
*╰┈───────────╴╴╴•⟢*
*😈 : 𝐂𝐎𝐍𝐓𝐀𝐂𝐓*
*╭┈───────────╴╴╴•⟢*
*│wa.me/
*╰┈───────────╴╴╴•⟢*

> 𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 𝐇𝐀𝐒𝐇𝐀𝐍-𝐌𝐃
`;

        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/xSd4WSFd/SulaMd.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363285386038532@newsletter',
                    newsletterName: '𝐇𝐀𝐒𝐇𝐀𝐍-𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
