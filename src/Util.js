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
      elementBackground = `rgba(118, 118, 118, ${fade})`
      // elementBackground = `rgba(170, 170, 170, ${fade})`
      break;
  }
  return elementBackground;
}

export function getLegendData(type, value) {
  const data = {}

  if(type==='Group') {
    switch(value) {
      case '1':
        data.title = 'Group 1';
        data.content = `Group 1 includes hydrogen and the alkali metals, which have one electron in their outermost s sub-shell. The alkali metals are soft, highly reactive metals, and their reactivity increases down the group. Hydrogen behaves very differently from elements in the lower periods and so scientists disagree over whether it should belong to group 1 or 17.`;
        break;
      case '2':
        data.title = 'Group 2';
        data.content = `The group 2 elements are also called the ‘alkaline earth metals’. They are all reactive metals with distinctive flame colours. In general they are harder, denser and have higher melting points than each alkali metal in the same period. Group 2 elements have two electrons in their outermost s sub-shell.`;
        break;
      case '3':
        data.title = 'Group 3';
        data.content = `Group 3 is a family of transition metal elements. They each have a valence electron configuration of d1s2. They are most often found in the +3 oxidation state. Scientists do not always agree whether lanthanum and actinium, or lutetium and lawrencium, should be included in this group.`;
        break;
      case '4':
        data.title = 'Group 4';
        data.content = `Group 4 is a group of transition metal elements with high melting points. They typically have a valence electron configuration of d2s2.`;
        break;
      case '5':
        data.title = 'Group 5';
        data.content = `Group 5 is a group of reactive transition metal elements with high melting points. They typically have a valence electron configuration of d3s2.`;
        break;
      case '6':
        data.title = 'Group 6';
        data.content = `Group 6 is a group of transition metal elements. The aufbau principle predicts that they will each have a valence electron configuration of d4s2. However, chromium and molybdenum are exceptions to this rule and have a valence electron configuration of d5s1.`;
        break;
      case '7':
        data.title = 'Group 7';
        data.content = `Group 7 is a group of transition metal elements containing manganese, technetium, rhenium and bohrium. They typically have a valence electron configuration of d5s2.`;
        break;
      case '8':
        data.title = 'Group 8';
        data.content = `Group 8 is a group of shiny, silvery transition metals containing iron, ruthenium, osmium and hassium. They typically have a valence electron configuration of d6s2.`;
        break;
      case '9':
        data.title = 'Group 9';
        data.content = `Group 9 is a group of silvery-white transition metal elements with high melting points. The group contains cobalt, rhodium, iridium and meitnerium. They typically have a valence electron configuration of d7s2.`;
        break;
      case '10':
        data.title = 'Group 10';
        data.content = `Group 10 is a group of white to light grey transition metal elements. The group contains nickel, palladium, platinum and darmstadtium. The aufbau principle predicts that they will each have a valence electron configuration of d8s2, however, palladium, platinum and darmstadtium are all exceptions to this rule.`;
        break;
      case '11':
        data.title = 'Group 11';
        data.content = `Group 11 is a group of transition metals. The group includes copper, silver and gold, which are sometimes called the 'coinage metals'. They typically have a valence electron configuration of d10s1.`;
        break;
      case '12':
        data.title = 'Group 12';
        data.content = `Group 12 is a group of metals. They each have a full d sub-shell. The elements in this group tend to have low melting points and mercury is the only metal that is a liquid at room temperature.`;
        break;
      case '13':
        data.title = 'Group 13';
        data.content = `Group 13 is the boron group. All the elements in this group are metals except for boron, which is a metalloid. Boron and aluminium each have three electrons in their outer electron shell.`;
        break;
      case '14':
        data.title = 'Group 14';
        data.content = `Group 14 is the carbon group. It contains a combination of non-metals, metalloids and metals. Carbon and silicon each have four electrons in their outer electron shell.`;
        break;
      case '15':
        data.title = 'Group 15';
        data.content = `Group 15 is called the pnictogens or nitrogen group. It contains a combination of non-metals, metalloids and metals. Nitrogen and phosphorus each have five electrons in their outer electron shell.`;
        break;
      case '16':
        data.title = 'Group 16';
        data.content = `Group 16 is called the chalcogens, or oxygen family. It contains a combination of non-metals, metalloids and metals. Oxygen and sulfur have six electrons in their outer electron shell.`;
        break;
      case '17':
        data.title = 'Group 17';
        data.content = `Group 17 is called the halogens. This is a group of highly reactive non-metals. This is the only group that contains elements in all three states of matter at room temperature and pressure. Fluorine and chlorine are gases, bromine is a liquid and iodine is a solid. Fluorine and chlorine have seven electrons in their outer electron shell.`;
        break;
      case '18':
        data.title = 'Group 18';
        data.content = `The group 18 elements are commonly known as the noble gases. They are typically unreactive. At one time they were known as the inert gases, but some compounds (particularly of Xe) are now known. Reactivity increases down the group with radon being the most reactive. The noble gases each have a full outer electron shell.`;
        break;
      default: break;
    }
  }

  if(type==='Period') {
    switch(value) {
      case '1':
        data.title = 'Period 1';
        data.content = ``;
        break;
    }
  }
  
  return data;
};


//   'Period':
//   [
//     ``,

//     `The first period contains two elements: hydrogen and helium. These are both colourless gases. They have electrons in the first electron shell only, in an s orbital. Helium is usually placed in group 18 with the noble gases. Hydrogen behaves very differently from elements in the lower periods and so scientists disagree over whether it should belong to group 1 or 17.`,

//     `The second period contains eight elements (six more elements than the first period). This is because across this period electrons fill the second electron shell, which has both s and p orbitals. Elements in this period typically follow the so-called ‘octet rule’. This means that these elements tend to form compounds in which each atom has eight electrons in its outer electron shell.`,

//     `The third period contains eight elements. This is because across this period electrons fill the third electron shell, which has both s and p orbitals. Elements in this period typically follow the so-called 'octet rule'. This means that these elements tend to form compounds in which each atom has eight electrons in its outer electron shell.`,

//     `The fourth period contains 18 elements. The elements in this period have valence electrons in the 4s, 3d and 4p orbitals. The 'octet rule', which applied to the second and third periods, does not apply here because of the introduction of the d sub-shell.`,

//     `The fifth period contains 18 elements. The elements in this period have valence electrons in the 5s, 4d and 5p orbitals.`,

//     `The sixth period contains 32 elements, and includes the lanthanides. The elements in this period have valence electrons in the 6s, 4f, 5d and 6p orbitals. This period contains lead, which is the heaviest stable element in the periodic table.`,

//     `The seventh period contains 32 elements, and includes the actinides. The elements in this period have valence electrons in the 7s, 5f, 6d and 7p orbitals. This period ends with oganesson which is the heaviest element for which discovery has been claimed.`
//   ]
// }