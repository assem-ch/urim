/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Urim
 *
 * The Initial Developer of the Original Code is
 * Oleg Mazko
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 * Oleg Mazko <o.mazko@mail.ru>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

Components.utils.import("resource://urim/log4moz.js");

if ("undefined" == typeof(XULUrimChrome)) {
	var XULUrimChrome = {
		constUrimButtonId : "urim-browser-xul-toolbar-button"
	};
};

XULUrimChrome.firefoxOverlay = {

	_logger : null,

	init : function() {
		try {
			if (!this._logger) {
				this.setupLogging();
				this._logger.info("firefoxOverlay:init");
			}
		} catch (ex) {
			var consoleService = Components.classes["@mozilla.org/consoleservice;1"]
					.getService(Components.interfaces.nsIConsoleService);
			consoleService.logStringMessage(ex);
		}

		try {
			this.addToolbarButton();
		} catch (ex) {
			this._logger.error(ex);
		}
	},
//
//	uninit : function() {
//		this._logger.info("firefoxOverlay:uninit");
//	},

	setupLogging : function() {
		this._logger = Log4Moz.repository.getLogger("Urim.firefoxOverlay");

		var formatter = new Log4Moz.BasicFormatter();
		var root = Log4Moz.repository.rootLogger;

		/* Fatal, Error, Warn, Info, Config, Debug, Trace, All */

		root.level = Log4Moz.Level.Warn;

		var capp = new Log4Moz.ConsoleAppender(formatter);
		capp.level = Log4Moz.Level.All;
		root.addAppender(capp);

		var dapp = new Log4Moz.DumpAppender(formatter);
		dapp.level = Log4Moz.Level.All;
		root.addAppender(dapp);

		var verbose = Components.classes["@mozilla.org/file/directory_service;1"]
				.getService(Components.interfaces.nsIProperties).get("ProfD",
						Components.interfaces.nsIFile);

		verbose.QueryInterface(Components.interfaces.nsILocalFile);
		verbose.append("urim");
		verbose.append("logs");
		verbose.append("verbose-log.txt");

		this._logger.info("Log path: " + verbose.path);

		if (!verbose.exists())
			verbose.create(verbose.NORMAL_FILE_TYPE, 0644);

		var maxSize = 65536; // 64 * 1024 (64KB)
		var debugApp = new Log4Moz.RotatingFileAppender(verbose, formatter,
				maxSize);
		debugApp.level = Log4Moz.Level.All;
		root.addAppender(debugApp);
	},

	hasButton : function() {
		var toolbox = document.getElementById("navigator-toolbox");
		for (var i = 0; i < toolbox.childNodes.length; ++i) {
			var toolbar = toolbox.childNodes[i];
			if (toolbar.localName == "toolbar"
					&& toolbar.getAttribute("customizable") == "true") {
				if (toolbar.currentSet.indexOf(XULUrimChrome.constUrimButtonId) > -1) {
					return true;
				}
			}
		}
	},

	addToolbarButton : function() {
		if (!this.hasButton()) {
			this._logger
					.info("Urim toolbar button does not present, adding new");

			var toolbox = document.getElementById("navigator-toolbox");
			for (var i = 0; i < toolbox.childNodes.length; ++i) {
				toolbar = toolbox.childNodes[i];
				if (toolbar.localName == "toolbar"
						&& toolbar.getAttribute("customizable") == "true"
						&& toolbar.id == "nav-bar") {
					var newSet = "";
					var child = toolbar.firstChild;
					while (child) {
						if (child.id == "urlbar-container") {
							newSet += XULUrimChrome.constUrimButtonId + ",";
						}
						newSet += child.id + ",";
						child = child.nextSibling;
					}
					newSet = newSet.substring(0, newSet.length - 1);
					toolbar.currentSet = newSet;
					toolbar.setAttribute("currentset", newSet);
					toolbox.ownerDocument.persist(toolbar.id, "currentset");
					try {
						BrowserToolboxCustomizeDone(true);
					} catch (ex) {
						this._logger.error(ex);
					}
					break;
				}
			}
		} else
			this._logger.info("Urim toolbar button already exists");
	},

	handleEvent : function(event) {
		switch (event.type) {
			case "load" :
				this.init();
				break;
		}
	}
};

window.addEventListener("load", XULUrimChrome.firefoxOverlay, false);