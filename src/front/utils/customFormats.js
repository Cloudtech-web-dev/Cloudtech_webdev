/**
 * ### Phone Number Formatter
 * A utility method to format an ecuadorian phone number into the `+593 ×× ××× ××××` shape.
 * > ***CAUTION:** This is not intended to work as a generic method to format any phone number, regardless of region or input format.*
 * @param {string} rawNoString A string containing a phone number, with ecuadorian code `593` (12 chars total), but without the plus sign (`+`). (e.g. `593987654321`)
 */
export const PhoneNumber = (rawNoString) => (
  `+${rawNoString.slice(0, 3)} ${rawNoString.slice(3, 5)} ${rawNoString.slice(5, 8)} ${rawNoString.slice(8, 12)}`
);

export default { PhoneNumber };