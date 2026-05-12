import * as THREE from 'three/webgpu'

const text = `
 █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗ ██╗███████╗
██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗╚═╝██╔════╝
███████║███████║██╔████╔██║█████╗  ██║  ██║   ███████╗
██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║   ╚════██║
██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝   ███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝    ╚══════╝

██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝

╔═ Intro ═══════════════╗
║ Thank you for visiting my portfolio, you sneaky developer!
║ I’m Ahmed AbdElhaleem Gamal — Senior Backend / Full-Stack Developer · Laravel & Node.js · Tech Lead.
║ If you are curious about the stack and how this site was built, here’s everything you need to know.
╚═══════════════════════╝

╔═ Socials ═══════════════╗
║ Mail     ⇒ ahmedabdelhaliemgamal@gmail.com
║ Phone    ⇒ +20 110 101 5643
║ GitHub   ⇒ https://github.com/ahmedabdelhaleemnoby
║ LinkedIn ⇒ https://www.linkedin.com/in/ahmed-abdelhaleem-gamal-abdelhameed
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Three.js ════════════╗
║ Three.js is the library used to render this 3D world (release: ${THREE.REVISION})
║ https://threejs.org/
║ It was created by mr.doob (https://x.com/mrdoob, https://github.com/mrdoob),
║ followed by hundreds of awesome developers,
║ one of which being Sunag (https://x.com/sea3dformat, https://github.com/sunag) who added TSL,
║ enabling the use of both WebGL and WebGPU, making this portfolio possible.
╚═══════════════════════╝

╔═ Template ════════════╗
║ This portfolio is built on top of Bruno Simon’s open-source folio-2025 template.
║ https://github.com/brunosimon/folio-2025
║ Released under the MIT license.
╚═══════════════════════╝

╔═ Musics ══════════════╗
║ The music was made by the awesome Kounine (Linktree).
║ https://linktr.ee/Kounine
║ Released under CC0 license.
╚═══════════════════════╝

╔═ Some more links ═════╗
║ Rapier (Physics library)  ⇒ https://rapier.rs/
║ Howler.js (Audio library) ⇒ https://howlerjs.com/
║ Amatic SC (Fonts)         ⇒ https://fonts.google.com/specimen/Amatic+SC
║ Nunito (Fonts).           ⇒ https://fonts.google.com/specimen/Nunito?query=Nunito
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
