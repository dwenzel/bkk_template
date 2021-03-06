# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# General PAGE setup
#
# including template, CSS + JS files
# **********************************************************

#page = PAGE
page {
/*
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			default = TEXT
			#default.value = EXT:bkk_template/Resources/Private/Templates/content-2col-75-25.html
			default.value = EXT:bkk_template/Resources/Private/Templates/default.html
			1 = TEXT
			1.value = EXT:bkk_template/Resources/Private/Templates/ohne_stage.html
			2 = TEXT
			2.value = EXT:bkk_template/Resources/Private/Templates/breit.html
			3 = TEXT
			3.value = EXT:bkk_template/Resources/Private/Templates/login.html
			4 = TEXT
			4.value = EXT:bkk_template/Resources/Private/Templates/breit_2spaltig.html
			5 = TEXT
			5.value = EXT:bkk_template/Resources/Private/Templates/links240_mitte540.html
			6 = TEXT
			6.value = EXT:bkk_template/Resources/Private/Templates/splash.html
			7 = TEXT
			7.value = EXT:bkk_template/Resources/Private/Templates/links240_mitte540_stage.html
		}
		partialRootPath = EXT:bkk_template/Resources/Private/Templates/Partials/
		layoutRootPath = EXT:bkk_template/Resources/Private/Templates/Layouts/
		variables {

		}
	}
*/
	# CSS files to be included
	includeCSS {
		#file1 = EXT:bkk_template/Resources/Public/Template/css/bootstrap.min.css
		#file1.media = screen,print
		#kkMain = EXT:bkk_template/Resources/Public/Template/css/main.css
		#bkkMain.media = screen,print
		#file3 = EXT:bkk_template/Resources/Public/Template/css/mediaqueries.css
		#file3.media = screen,print
		#file5 = EXT:bkk_template/Resources/Public/Template/css/flexslider.css
		#file5.media = screen,print
		#file6 = EXT:bkk_template/Resources/Public/Template/css/responsiveTable.css
		#file6.media = screen,print
		#file6 = EXT:bkk_template/Resources/Public/Template/css/yoxview.css
		#file6.media = screen,print
	}

	# JS files to be included
	#includeJSFooter {
		#bootstrap = EXT:bkk_template/Resources/Public/Template/js/bootstrap.min.js
		#flexslider = EXT:bkk_template/Resources/Public/Template/js/jquery.flexslider-min.js
		#yoxview = EXT:bkk_template/Resources/Public/Template/js/jquery.yoxview-2.21.min.js
		#placeholder = EXT:bkk_template/Resources/Public/Template/js/jquery.placeholder.min.js
		#responsive = EXT:bkk_template/Resources/Public/Template/js/respond.min.js
		#customjs = EXT:bkk_template/Resources/Public/Template/js/script.js
	#}
/*
	includeJS {
		html5shiv = EXT:bkk_template/Resources/Public/Template/js/html5shiv.js
		html5shiv {
			allWrap = <!--[if lt IE 9]>|<![endif]-->
			excludeFromConcatenation = 1
			forceOnTop = 1
		}
	}

	includeJSFooterlibs {
		jQuery = EXT:bkk_template/Resources/Public/Template/js/jquery-1.9.1.js
	}
*/

	# Add some good classes to the bodytag to make a styling of special pages easier
/*
	bodyTagCObject = COA
	bodyTagCObject   {
		stdWrap.wrap = <body class="|">

		# Add page UID
		10 = TEXT
		10 {
			value = page-{field:uid}
			insertData = 1
			noTrimWrap = || |
		}

		# Add uid of the backend-layout
		20 = TEXT
		20 {
			wrap = template-|
			data = levelfield:-1, backend_layout_next_level, slide
			override.field = backend_layout
		}

		# Add uid of optional FE-layout
		30 = TEXT
		30 {
			fieldRequired = layout
			value = layout-{field:layout}
			insertData = 1
			noTrimWrap = | ||
		}
	}

	headerData.5 = COA
	headerData.5 {
		stdWrap.noTrimWrap = |<!-- | -->|

		10 = TEXT
		10 {
			insertData = 1
			value = Page: {page:uid} | Pid: {page:pid} | Sys_language uid : {TSFE:sys_language_uid} | Sys_language content: {TSFE:sys_language_content}
		}
	}
*/
}

