export function getBackground(category) {
  let elementBackground;
  switch(category) {
    case 'diatomic nonmetal':
      elementBackground = '#f1ff90';
      break;
    case 'noble gas':
      elementBackground = '#c0ffff';
      break;
    case 'alkali metal':
      elementBackground = '#ff6666';
      break;
    case 'metalloid':
      elementBackground = '#CCCC99';
      break;
    case 'alkaline earth metal':
      elementBackground = '#ffdead';
      break;
    case 'polyatomic nonmetal':
      elementBackground = '#F0FF8F';
      break;
    case 'post-transition metal':
      elementBackground = '#C3C4C4';
      break;
    case 'transition metal':
      elementBackground = '#FFC0C0';
      break;
    case 'lanthanide':
      elementBackground = '#FFBFFF';
      break;
    case 'actinide':
      elementBackground = '#FF99CC';
      break;
    default:
      elementBackground = '#E8E8E8';
      break;
  }
  return elementBackground;
}