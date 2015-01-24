<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Embed TypoScript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Development', 'Theme EXT:"' . $_EXTKEY . '" DEVELOPMENT');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Production', 'Theme EXT:"' . $_EXTKEY . '" PRODUCTION');

/***************
 * Make backend-layout selector multilanguage aware
 */
\TYPO3\CMS\Core\Utility\GeneralUtility::requireOnce(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY) . 'Classes/Hooks/ItemsProcFunc.php');
$GLOBALS['TCA']['backend_layout']['ctrl']['label_alt_force'] = 1;
$GLOBALS['TCA']['backend_layout']['ctrl']['label_userFunc'] = 'Tx_Modernpackage_Hooks_ItemsProcFunc->getLabel';

/***************
 * Include styling for backend/login
 */
$GLOBALS['TBE_STYLES']['logo'] = '../typo3conf/ext/' . $_EXTKEY . '/Resources/Public/Backend/img/backend_logo.png';
$GLOBALS['TBE_STYLES']['inDocStyles_TBEstyle'] .= '@import "' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Backend/css/login.css";';

/***************
 * Add icons to the page tree
 */
$availableIcons = array('system', 'layouts', 'menufolder');
foreach($availableIcons as $icon) {
	\TYPO3\CMS\Backend\Sprite\SpriteManager::addTcaTypeIcon(
		'pages',
		'contains-' . $icon,
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . 'Resources/Public/Icons/PageTree/' . $icon . '.png');
	$GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
		0 => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_be.xml:pagetree.' . $icon ,
		1 => $icon,
	);
}

?>
