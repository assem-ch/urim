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

const gUrimOverflowManager = (function() {
	const _logger = Log4Moz.repository.getLogger("Urim.overflowManager");

	var _modifiedChilds = [];
	var _lastWindowInnerWidth, _lastWindowInnerHeight;
	var _container, _childs, _onoverflow, _undefined;

	function onResize() {
		if ((window.innerWidth > _lastWindowInnerWidth)
				|| (window.innerHeight > _lastWindowInnerHeight)) {

			if (_modifiedChilds.length) {
				restoreChilds();
				_modifiedChilds = [];
			}
		}

		if (_lastWindowInnerWidth != window.innerWidth
				|| _lastWindowInnerHeight != window.innerHeight) {

			fitWidth();
			fitHeight();
			fitWidth();

			_lastWindowInnerWidth = window.innerWidth;
			_lastWindowInnerHeight = window.innerHeight;
		}

		function restoreChilds() {
			var logResult = [];

			for (var i = 0; i < _modifiedChilds.length; i++) {
				var childToRestore = _modifiedChilds[i];

				if (childToRestore.node.style.display != childToRestore.styleDisplay) {
					childToRestore.node.style.display = childToRestore.styleDisplay;
					logResult.push("\""
							+ childToRestore.node.firstChild.innerHTML
							+ "\" class: " + childToRestore.nodeClass);
				}
				childToRestore.node.firstChild.setAttribute("class",
						childToRestore.nodeClass);
			}

			if (logResult.length)
				_logger.info("Show: " + logResult.join("; "));
		}
	}

	function onNodeRemoved() {
		if (window.onresize) {
			window.onresize = _undefined;
			if (window.onresize) {
				_logger.error("onresize must be undefined, logic error");
			}
		}

		if (!_container.onoverflow) {
			_container.onoverflow = _onoverflow;
			if (!_container.onoverflow) {
				_logger.error("onoverflow must have value, logic error");
			}
		}

		if (_modifiedChilds.length) {
			_modifiedChilds = [];
			_logger.info("onNodeRemoved(); clear _modifiedChilds");
		}
	}

	function onOverflow(container, childs) {
		_logger.info("onOverflow();");

		if (!_container) {
			_container = container;
			_onoverflow = _container.onoverflow;
			_childs = childs;
			_container.firstChild.addEventListener("DOMNodeRemoved",
					onNodeRemoved, false);
		}

		_container.onoverflow = _undefined;
		if (_container.onoverflow) {
			_logger.error("onoverflow must be undefined, logic error");
		}

		fitWidth();
		fitHeight();
		fitWidth();

		_lastWindowInnerWidth = window.innerWidth;
		_lastWindowInnerHeight = window.innerHeight;

		var _window = window;
		if (!_window.onresize)
			window.onresize = onResize;
	}

	function fitHeight() {
		var realContainerClientHeight = calculateRealContainerHeight();

		if (realContainerClientHeight <= 0
				|| _container.firstChild.scrollHeight < realContainerClientHeight)
			return;

		var logResult = [];

		while (true) {

			/*
			 * Step 1: try to hide childs with minimum font (1) untill they not
			 * fit in container height
			 */

			if (forEachNode(function(childNode, childNodeClassStr, font) {

						/* if (font > 1) continue forEach */

						if (font > 1)
							return true;

						logResult.push("\"" + childNode.firstChild.innerHTML
								+ "\"");
						childNode.style.display = "none";
					}))
				return;

			var modifiebleNodesExists = false;

			/*
			 * Step 2: try decrement childs font untill they not fit in
			 * container height
			 */

			if (forEachNode(function(childNode, childNodeClassStr, font) {
						modifiebleNodesExists = true;
						childNode.firstChild.setAttribute("class", "w"
										+ (font - 1));
					}))
				return;

			if (!modifiebleNodesExists)
				break;
		}

		if (logResult.length) {
			_logger.warn("Possible something WRONG, check !!! Hide [Height]: "
					+ logResult.join("; "));
		}

		function forEachNode(callback) {

			/* let's find childs min font diff */

			var minChildFontDiff, childsBuffer = [];

			for (var i = 0; i < _childs.length; i++) {
				var childNode = _childs[i];
				if (childNode.nodeType != Node.ELEMENT_NODE
						|| childNode.style.display == "none")
					continue;

				var modifiedChild = modifiedChildsFind(childNode);
				if (!modifiedChild) {
					childsBuffer.push({
								"node" : childNode,
								"fontDiff" : 0
							});
					minChildFontDiff = 0;
					continue;
				}

				var childNodeClassStr = childNode.firstChild
						.getAttribute("class");
				var font = parseInt(childNodeClassStr.substring(1));
				var fontDiff = modifiedChild.maxFont - font;
				childsBuffer.push({
							"node" : childNode,
							"fontDiff" : fontDiff
						});

				if (minChildFontDiff) {
					minChildFontDiff = Math.min(fontDiff, minChildFontDiff);
				} else if (minChildFontDiff != 0) {
					minChildFontDiff = fontDiff;
				}
			}

			for (var i = 0; i < childsBuffer.length; i++) {
				var item = childsBuffer[i];
				if (item.fontDiff != minChildFontDiff)
					continue;

				var childNode = item.node;
				var childNodeClassStr = childNode.firstChild
						.getAttribute("class");
				var font = parseInt(childNodeClassStr.substring(1));
				var childNodeStyleDisplay = childNode.style.display;

				if (callback(childNode, childNodeClassStr, font))
					continue;

				if (!modifiedChildsFind(childNode)) {
					_modifiedChilds.push({
								"node" : childNode,
								"nodeClass" : childNodeClassStr,
								"styleDisplay" : childNodeStyleDisplay,
								"maxFont" : font
							});
				}

				if (_container.firstChild.scrollHeight < realContainerClientHeight) {
					if (logResult.length)
						_logger.info("Hide [Height]: " + logResult.join("; "));
					return true;
				}
			}
		}
	}

	function fitWidth() {
		var realContainerClientWidth = calculateRealContainerWidth();

		var logResult = [];

		while (_container.firstChild.scrollWidth > realContainerClientWidth) {
			var maxNode = findMaxScrollWidthNode();
			var maxNodeClassStr = maxNode.firstChild.getAttribute("class");
			var font = parseInt(maxNodeClassStr.substring(1));

			if (!modifiedChildsFind(maxNode)) {
				_modifiedChilds.push({
							"node" : maxNode,
							"nodeClass" : maxNodeClassStr,
							"styleDisplay" : maxNode.style.display,
							"maxFont" : font
						});
			}

			var newFont = font - 1;
			if (newFont) {
				maxNode.firstChild.setAttribute("class", "w" + newFont);
			} else {
				logResult.push("\"" + maxNode.firstChild.innerHTML + "\"");
				maxNode.style.display = "none";
			}
		}

		if (logResult.length)
			_logger.info("Hide: [Width]:" + logResult.join("; "));

		function findMaxScrollWidthNode() {
			var maxWidth = 0, maxWidthNode;
			for (var i = 0; i < _childs.length; i++) {
				if (_childs[i].nodeType != Node.ELEMENT_NODE)
					continue;
				var childNode = _childs[i];

				if (childNode.scrollWidth > maxWidth) {
					maxWidth = childNode.scrollWidth;
					maxWidthNode = childNode;
				}
			}

			return maxWidthNode;
		}
	}

	function modifiedChildsFind(child) {
		for (var i = 0; i < _modifiedChilds.length; i++) {
			var modifiedChild = _modifiedChilds[i];
			if (modifiedChild.node === child)
				return modifiedChild;
		}
	}

	function calculateRealContainerWidth() {
		var containerFirstChildStyle = window.getComputedStyle(
				_container.firstChild, null);
		var realContainerClientWidth = _container.clientWidth
				- parseInt(containerFirstChildStyle.marginLeft)
				- parseInt(containerFirstChildStyle.marginRight);

		return realContainerClientWidth;
	}

	function calculateRealContainerHeight() {
		var containerFirstChildStyle = window.getComputedStyle(
				_container.firstChild, null);
		var realContainerClientHeight = _container.clientHeight
				- parseInt(containerFirstChildStyle.marginTop)
				- parseInt(containerFirstChildStyle.marginBottom);

		return realContainerClientHeight;
	}

	return {
		onOverflow : onOverflow
	};
})();