/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		//{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		//{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },

		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'styles' },
		{ name: 'tools' }
		//{ name: 'styles' },
		//{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		//{ name: 'others' },
		//{ name: 'colors' },
		//{ name: 'about' }
	];

    config.filebrowserBrowseUrl = 'browse.jsp';
    config.filebrowserImageBrowseUrl = UploadDomain+ '/manage/filews/browser/';

    config.filebrowserUploadUrl=UploadDomain+"/manage/filews/upload/";

    config.filebrowserImageUploadUrl =UploadDomain+ '/manage/filews/upload/?type=image';


//  config.filebrowserFlashBrowseUrl = 'browse.jsp?type=Flashs';
//  config.filebrowserFlashUploadUrl = 'reciveUpload.jsp?type=Flashs';

    config.filebrowserWindowWidth = '640';
    config.filebrowserWindowHeight = '480';

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
