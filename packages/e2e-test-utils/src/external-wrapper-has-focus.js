/**
 * Asserts that the element with keyboard focus is a block's external wrapper
 *
 * @param {string} blockType  The expected value of the data-type attribute of the block's external wrapper
 */

export async function externalWrapperHasFocus( blockType ) {
	const activeElementDataType = await page.evaluate( () => document.activeElement.dataset.type );
	expect( activeElementDataType ).toEqual( blockType );
}
