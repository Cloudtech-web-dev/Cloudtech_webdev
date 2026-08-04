/**### Form Data Structure
 * 
 * @typedef DataStructure
 * @prop {string[]} needs
 * @prop {number} stage
 * @prop {string} problemDescription
 * @prop {number} idealTimeframe
 * @prop {PersonalData} personalData
 * @prop {boolean} newsletterOptIn
 * 
 * @typedef PersonalData
 * @prop {string} wholeName
 * @prop {string} email
 * @prop {string} phone
 * @prop {string} projectName
 * 
*/

/**### `PageHeader` Props Schema
 * 
 * @typedef PageHeaderProps
 * @prop {string} title
 * @prop {string} description
 * @prop {string} [backgroundImgURL]
 * @prop {boolean} [withSphereEffect] Use the *Gradient Spheres Background* instead of an image (this is the default if no `backgroundImgURL` is provided).
 * @prop {boolean} [withoutProjectsButton] Remove the *Go to Projects* button.
 * @prop {boolean} [withoutTransparencyEffect] Remove the transparency effect on the highlighted text.
 * @prop {boolean | 'mobile' | 'desktop'} [withoutBackgroundFilter] Remove the dark filter that usually sits on top of the background. It is possible to remove it only on ***mobile***, on ***desktop*** (`lg`), or on both if just `true`.
 * @prop {boolean} [withoutParallaxEffect] Remove the *False Parallax Effect* when scrolling down the page.
 */

export default {};