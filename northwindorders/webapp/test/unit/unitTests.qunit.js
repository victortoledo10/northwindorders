/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"es/victor/northwindorders/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});