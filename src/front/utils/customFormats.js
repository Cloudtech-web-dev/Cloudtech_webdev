/**
 * ### Phone Number Formatter
 * A utility method to format an ecuadorian phone number into the `+593 ×× ××× ××××` shape.
 * > ***CAUTION:** This is not intended to work as a generic method to format any phone number, regardless of region or input format.*
 * @param {string} rawNoString A string containing a phone number, with ecuadorian code `593` (12 chars total), but without the plus sign (`+`). (e.g. `593987654321`)
 */
// export const formatPhoneNo = (rawNoString) => {
  // return `+${rawNoString.slice(0, 3)} ${rawNoString.slice(3, 5)} ${rawNoString.slice(5, 8)} ${rawNoString.slice(8, 12)}`
  // const stringArray = Array.from(rawNoString);
  // return "+" + [3,2,3,4].reduceRight((acc,segSz) => [stringArray.splice(-segSz).join(""), ...acc], []).join(" ");
  // return "+" + [3,2,3,4].reduce((acc,segSz) => [...acc, stringArray.splice(0,segSz).join("")], []).join(" ");
  // return "+"+[3,2,3,4].reduce((acc,seg) => [...acc,rawNoString.slice(acc.join("").length,acc.join("").length+seg)],[]).join(" ");
  // return "+"+[3,2,3,4].reduce((acc,seg) => [[...acc[0],rawNoString.slice(acc[1],acc[1]+seg)],acc[1]+seg],[[],0])[0].join(" ");
  // return "+" + [ 3 , 2 , 3 , 4 ].reduce((acc, segmentSize) => {
  //   const oldLength = acc.length, newLength = oldLength + segmentSize;
  //   return { array: [...acc.array, rawNoString.slice(oldLength, newLength)], length: newLength };
  // }, { array: [], length: 0 }
  // ).array.join(" ");
// };
export const PhoneNumber = (rawNoString) => (
  `+${rawNoString.slice(0, 3)} ${rawNoString.slice(3, 5)} ${rawNoString.slice(5, 8)} ${rawNoString.slice(8, 12)}`
);

export default {PhoneNumber};