export function getBackground(category) {
  const fade = 0.9;
  let elementBackground;
  switch(category) {
    case 'diatomic nonmetal':
      elementBackground = `rgba(255, 220, 0, ${fade})`
      break;
    case 'noble gas':
      elementBackground = `rgba(255, 133, 27, ${fade})`
      break;
    case 'alkali metal':
      elementBackground = `rgba(255, 65, 54, ${fade})`
      break;
    case 'metalloid':
      elementBackground = `rgba(61, 153, 112, ${fade})`
      break;
    case 'alkaline earth metal':
      elementBackground = `rgba(200, 59, 222, ${fade})`
      break;
    case 'polyatomic nonmetal':
      elementBackground = `rgba(255, 220, 0, ${fade})`
      break;
    case 'post-transition metal':
      elementBackground = `rgba(46, 204, 64, ${fade})`
      break;
    case 'transition metal':
      elementBackground = `rgba(0, 116, 217, ${fade})`
      break;
    case 'lanthanide':
      elementBackground = `rgba(127, 219, 255, ${fade})`
      break;
    case 'actinide':
      elementBackground = `rgba(57, 204, 204, ${fade})`
      break;
    default:
      elementBackground = `rgba(170, 170, 170, ${fade})`
      break;
  }
  return elementBackground;
}