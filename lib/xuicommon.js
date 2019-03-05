(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("xuicommon", [], factory);
	else if(typeof exports === 'object')
		exports["xuicommon"] = factory();
	else
		root["xuicommon"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * The Secondary Button is a command button that executes an action. The secondary button is different from the one found in a sidebar, which has a set width. Visually it does not have a border or background. The secondary button is used for the Cancel button, as well as other buttons such as the Add Row and Delete buttons.
 */


var SecondaryButton = React.createClass({
  displayName: "SecondaryButton",
  // custom properties
  secondaryButtonBaseStyle: {
    display: "inline",
    // use this style so that we get a block element, more explanation below for vertical align
    textAlign: "left",
    fontFamily: "verdana",
    fontSize: 11,
    fontWeight: "normal",
    lineHeight: "normal",
    height: 20,
    border: "none",
    backgroundColor: "transparent",
    outline: "none"
  },
  secondaryButtonStyle: function secondaryButtonStyle() {
    return _.extend({
      cursor: "default",
      color: "#999999"
    }, this.secondaryButtonBaseStyle);
  },
  secondaryButtonEnabledStyle: function secondaryButtonEnabledStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#285C7E"
    }, this.secondaryButtonBaseStyle);
  },
  secondaryButtonEnabledHoverStyle: function secondaryButtonEnabledHoverStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#2C4F61"
    }, this.secondaryButtonBaseStyle);
  },
  innerLayerStyle: {
    display: "table-cell",
    // use this style so that we can vertically middle align the content in the button
    verticalAlign: "middle",
    height: 22
  },
  textContainerStyle: {
    // the following two styles are required to make the text-overflow work.
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    verticalAlign: "bottom"
  },
  // custome properties
  // custom methods
  handleFocus: function handleFocus(event) {
    this.setState({
      isFocused: !this.props.noFocus
    });
  },
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the button, if not provided a unique id is added.
     */
    id: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Boolean that enables or disables the button. Defaults to true.
     */
    enabled: React.PropTypes.bool,

    /**
     * CSS class for icon. Example "fa fa-database" if using font-awesome icons.
     */
    icon: React.PropTypes.string,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Flag to turn off focus style as it will be distracting under certain circumstances. Default is false.
     */
    noFocus: React.PropTypes.bool,

    /**
     * Renders a data-button-type attribute in the HTML element. Useful for automated testing, but can also be used for
     * specifying intent.
     */
    type: React.PropTypes.string
  },

  /**
   * We need to set the enabled state when the enabled props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var enabled = newProps.enabled == false ? false : true;

    if (enabled != this.state.enabled) {
      this.setState({
        enabled: enabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var enabled = this.props.enabled == false ? false : true;
    return {
      enabled: enabled,
      // value set by prop because it is the default value
      showHover: false,
      isFocused: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Handler function for MouseEnter event
     * @param {Object} The event object from the MouseEnter event
     */
    var showHover = function showHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: true
        });
      }

      event.stopPropagation();
    };
    /**
     * Handler function for MouseLeave event
     * @param {Object} The event object from the MouseLeave event
     */


    var hideHover = function hideHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: false
        });
      }

      event.stopPropagation();
    };

    var clickHandler = function clickHandler() {
      if (_this.state.enabled == true) {
        return _this.props.clickHandler;
      } else {
        return null;
      }
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.enabled == false) {
        buttonStyle = _this.secondaryButtonStyle();
      } else {
        if (_this.state.showHover == true) {
          buttonStyle = _this.secondaryButtonEnabledHoverStyle();
        } else {
          buttonStyle = _this.secondaryButtonEnabledStyle();
        }
      }

      if (_this.props.overrideStyle) {
        buttonStyle = _.extend(buttonStyle, _this.props.overrideStyle);
      }

      if (_this.props.type == "sidebar") {
        buttonStyle.width = 224;
        _this.textContainerStyle.width = 172;
        _this.textContainerStyle.maxWidth = 172;
      } else {
        buttonStyle.width = "auto";
        buttonStyle.maxWidth = 200;
        _this.textContainerStyle.width = "auto";
        _this.textContainerStyle.maxWidth = 148;
      } // focus


      if (_this.state.enabled == true && _this.state.isFocused == true) {
        buttonStyle.border = "solid 1px D1DCE4";
        buttonStyle.borderRadius = 0;
        buttonStyle.boxShadow = "0 0 4px #64ADC2";
        buttonStyle.outline = "none";
      } // weight


      if (_this.props.type == "sidebar" || _this.props.type == "actionButton") {
        buttonStyle.fontWeight = "bold";
      } else {
        buttonStyle.fontWeight = "normal";
      }

      return buttonStyle;
    };

    var iconStyle = {
      color: "#346484",
      fontSize: 12,
      marginRight: 6
    };

    if (this.props.type == "sidebar") {
      iconStyle.fontSize = 14;
      iconStyle.marginLeft = 14;
      iconStyle.marginRight = 12;
    } else if (this.props.type == "actionButton") {
      iconStyle.fontSize = 11;
    }

    var icon = function icon() {
      if (_this.props.icon) {
        if (_this.state.enabled == false) {
          iconStyle.color = "#999999";
        } else {
          iconStyle.color = "#346484";
        }

        return React.createElement("span", {
          style: iconStyle,
          className: _this.props.icon
        });
      } else {
        return null;
      }
    };
    /**
     * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
     * The value of the textbox along with the keyPress event is passed to the function.
     */


    var handleEnterPress = function handleEnterPress(event) {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        if (_this.state.enabled == true) {
          _this.props.clickHandler(event); // Need to call this function otherwise the clickHandler is called twice.


          event.preventDefault();
        }
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var id = this.props.id || _.uniqueId("secondaryButton_");

    var type = "secondaryButton";

    if (this.props.type && this.props.type.length > 0) {
      type = this.props.type;
    }

    var getDisabledProp = function getDisabledProp() {
      if (_this.state.enabled == true) {
        return false;
      } else {
        return true;
      }
    };

    return React.createElement("button", {
      id: id,
      style: currentStyle(),
      disabled: getDisabledProp(),
      onClick: clickHandler(),
      "data-button-type": type,
      onMouseEnter: showHover,
      onMouseLeave: hideHover,
      tabIndex: tabIndex,
      onKeyDown: handleEnterPress,
      onFocus: this.handleFocus,
      onBlur: this.handleLostFocus
    }, React.createElement("div", {
      style: this.innerLayerStyle
    }, icon(), React.createElement("span", {
      style: this.textContainerStyle,
      title: this.props.text,
      "data-component-type": "Label"
    }, this.props.text)));
  } // lifecycle event handlers

});
module.exports = SecondaryButton;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Mixins for the common styles of components
 */
var StyleMixins = {
  /**
   * Styles used for components that are composed of two elements with one of them acting
   * like a button. For example the search box and select box
   */
  attachedButtonContainerStyle: {
    display: "table-cell",
    width: 28,
    height: 26,
    fontSize: 14,
    textAlign: "center",
    verticalAlign: "middle",
    textShadow: "0 1px 0 #ffffff",
    backgroundColor: "#eeeeee",
    borderRight: "1px solid #ccc",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    color: "#333",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0"
  },
  attachedButtonIconStyle: {},

  /**
   * Styles used for Incent components
   */
  IncentStyles: {
    commonStyles: {
      selectedRowBackgroundColor: "#EDF4F5",
      unselectedRowBackgroundColor: "#FFFFFF"
    },
    inputTableDataColumnStyle: {
      color: "#333333",
      verticalAlign: "middle",
      textAlign: "left",
      whiteSpace: "nowrap",
      paddingRight: 16,
      paddingBottom: 20
    },
    inputTableLabelColumnStyle: {
      color: "#333333",
      verticalAlign: "top",
      textAlign: "right",
      whiteSpace: "nowrap",
      paddingTop: 8,
      paddingRight: 16,
      paddingBottom: 20
    },
    labelContainerStyle: {
      display: "inline-block",
      width: 128,
      textAlign: "right",
      paddingRight: 16
    },
    componentContainerStyle: {
      display: "inline-block",
      textAlign: "left"
    },
    versionControlStyles: {
      shellStyle: {
        minWidth: 1160,
        boxShadow: "inset 0px 0px 3px 0px rgba(61, 123, 152, 0.2)",
        borderRadius: 2 // display: "flex", // allows for vertical aligning
        // alignContent: "flex-start" // align at the top

      },
      headerStyle: {
        minHeight: 48,
        // width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        boxShadow: "inset 0px 0px 2px 0px rgba(61, 123, 152, 0.2)",
        backgroundColor: "#EDF4F5",
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2
      },
      versionLabelContainerStyle: {
        float: "left",
        display: "flex",
        height: 48,
        alignItems: "center"
      },
      versionDetailsToggleContainerStyle: {
        float: "right",
        display: "flex",
        height: 48,
        alignItems: "center",
        cursor: "pointer"
      },
      versionLabelClearStyle: {
        clear: "both"
      },
      versionLabelStyle: {
        fontFamily: "Verdana",
        fontSize: 16,
        color: "#333333",
        marginRight: 12,
        display: "inline-flex",
        alignItems: "center"
      },
      versionDetailsToggleLabelStyle: {
        fontFamily: "Verdana",
        fontSize: 12,
        color: "#346F8F",
        marginRight: 6
      },
      versionDetailsToggleIconStyle: {
        fontSize: 12,
        color: "#346F8F"
      },
      versionTableContainerStyle: {
        padding: 20,
        border: "1px solid #64ADC2",
        borderRadius: 2,
        backgroundColor: "#FFF",
        maxHeight: 212,
        overflowX: "auto"
      },
      versionDetailsContainerStyle: {
        paddingTop: 32,
        paddingBottom: 32,
        marginRight: 32,
        marginLeft: 32,
        borderBottom: "solid 1px #ECF4F6"
      },
      versionDetailsRowOneLeftStyle: {
        float: "left",
        display: "flex",
        alignItems: "center",
        height: 30
      },
      versionDetailsRowRightStyle: {
        float: "right"
      },
      versionDetailsRowClearStyle: {
        clear: "both"
      },
      versionDetailsRowTwoLeftStyle: {
        float: "left",
        display: "flex",
        alignItems: "center",
        marginTop: 20,
        height: 30
      }
    }
  }
};
module.exports = StyleMixins;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Styles used in components. These styles are for the individual components.
 */
var ComponentStyles = function () {
  var tabs = function () {
    var tabHeaderHeight = 28; //var tabContainerHeight = 244;

    var tabContainerHeight = "auto";
    var maxWidth = "100%";
    var _tabs = {
      rootContainer: {
        width: maxWidth,
        fontFamily: "verdana",
        fontSize: 12
      },
      headers: {
        width: maxWidth,
        fontFamily: "verdana",
        fontSize: 14,
        height: tabHeaderHeight,
        display: "table"
      },
      indentHeader: {
        height: tabHeaderHeight,
        width: 4,
        display: "table-cell",
        borderBottom: "solid 1px #64ADC2"
      },
      spaceHeader: {
        height: tabHeaderHeight,
        //width: 396,
        display: "table-cell",
        borderBottom: "solid 1px #64ADC2"
      },
      header: {
        height: tabHeaderHeight,
        width: "1%",
        border: "solid 1px #64ADC2",
        borderBottom: "solid 1px #64ADC2",
        display: "table-cell",
        cursor: "pointer",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: "#F8FAFA",
        fontSize: 12,
        color: "#346F8F",
        fontWeight: "bold",
        paddingLeft: 12,
        paddingRight: 12
      },
      headerSelected: {
        height: tabHeaderHeight,
        width: "1%",
        border: "solid 1px #64ADC2",
        display: "table-cell",
        cursor: "pointer",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        borderBottom: "solid 1px #FFFFFF",
        fontSize: 12,
        color: "#333333",
        fontWeight: "bold",
        paddingLeft: 12,
        paddingRight: 12
      },
      headerSelectedEmpty: {
        height: tabHeaderHeight,
        width: "1%",
        border: "solid 1px #64ADC2",
        display: "table-cell",
        cursor: "pointer",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        borderBottom: "solid 1px #FFFFFF",
        fontSize: 12,
        color: "#AAAAAA",
        fontWeight: "bold",
        paddingLeft: 12,
        paddingRight: 12
      },
      truncate: {
        maxWidth: 136,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      title: {
        whiteSpace: "nowrap"
      },
      containers: {
        width: "calc(maxWidth - 2px)",
        height: tabContainerHeight,
        borderLeft: "solid 1px #64ADC2",
        borderBottom: "solid 1px #64ADC2",
        borderRight: "solid 1px #64ADC2",
        verticalAlign: "top",
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundColor: "#FFFFFF"
      },
      container: {
        width: "calc(maxWidth - 42px)",
        border: "none",
        verticalAlign: "top",
        backgroundColor: "#FFFFFF",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 12,
        paddingRight: 12
      },
      sectionContainer: {
        width: "100%",
        borderSpacing: 0,
        borderCollaps: "collapse",
        marginBottom: 20
      },
      sectionTitle: {
        height: 20,
        textAlign: "center",
        verticalAlign: "middle",
        fontWeight: "bold",
        color: "#666666",
        backgroundColor: "#EBF0F3",
        border: "solid 1px #E1E1E1"
      },
      sectionItemContainer: {
        width: "50%"
      },
      sectionItemLabel: {
        display: "inline-block",
        width: "36%",
        textAlign: "right",
        verticalAlign: "top",
        padding: "16px 2px 0px 4px",
        fontWeight: "bold"
      },
      sectionItemContent: {
        display: "inline-block",
        width: "56%",
        textAlign: "left",
        verticalAlign: "top",
        padding: "16px 4px 0px 2px"
      },
      expandedRowContainer: {
        padding: "20px 20px 20px 8px",
        backgroundColor: "#EDF4F5",
        borderBottom: "solid 1px #E1E1E1"
      }
    };
    return _tabs;
  }();

  var searchBox = function () {
    var _searchBox = {
      inputContainerStyle: {
        height: 28,
        backgroundColor: "#fff",
        float: "left",
        position: "relative"
      },
      cancelIconStyle: {
        color: "#999999",
        cursor: "pointer",
        fontSize: 11
      },
      cancelIconContainerStyle: {
        display: "table-cell",
        height: 26,
        width: 24,
        textAlign: "center",
        verticalAlign: "middle"
      },
      cancelIconOuterContainerStyle: {
        position: "absolute",
        top: 1,
        right: 0,
        height: 26
      },
      searchButtonContainerStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        fontSize: 14,
        textShadow: "0 1px 0 #ffffff",
        borderRight: "1px solid #E3E3E3",
        borderTop: "1px solid #E3E3E3",
        borderBottom: "1px solid #E3E3E3",
        color: "#333",
        cursor: "pointer",
        borderRadius: "0 2px 2px 0",
        float: "left",
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
      },
      searchButtonStandaloneContainerStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        fontSize: 14,
        textAlign: "center",
        verticalAlign: "middle",
        textShadow: "0 1px 0 #ffffff",
        borderLeft: "1px solid #E3E3E3",
        borderRight: "1px solid #E3E3E3",
        borderTop: "1px solid #E3E3E3",
        borderBottom: "1px solid #E3E3E3",
        color: "#333",
        cursor: "pointer",
        borderRadius: 2,
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
      }
    };
    return _searchBox;
  }();

  var pageFooter = function () {
    var _pageFooter = {
      containerStyle: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20,
        //backgroundColor: "#FAFAFA",
        backgroundColor: "#F5F5F5",
        height: 64,
        borderTop: "1px solid #DAE0E3",
        borderRadius: "0px 0px 7px 7px"
      },
      buttonStyle: {
        float: "right"
      },
      clearStyle: {
        float: "clear"
      },
      leftPaneContainerStyle: {
        width: "100%",
        minWidth: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
      },
      rightPaneContainerStyle: {
        width: "100%",
        minWidth: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      },

      /**
       * The style applied to the button wrapper
       */
      leftPaneButtonContainerStyle: {
        paddingRight: 16
      },
      rightPaneButtonContainerStyle: {
        paddingLeft: 16
      }
    };
    return _pageFooter;
  }();

  var fileUpload = function () {
    var _fileUpload = {
      inputFileStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: 0,
        padding: 0,
        fontSize: 20,
        cursor: "pointer",
        opacity: 0,
        filter: "alpha(opacity=0)"
      },
      buttonBaseStyle: {
        display: "inline-block",
        // use this style so that we get a block element, more explanation below for vertical align
        textAlign: "left",
        fontFamily: "verdana",
        fontSize: 12,
        fontWeight: "bold",
        height: 34,
        borderRadius: 20,
        WebkitBorderRadius: 20,
        boxShadow: "0 1px 1px 0px rgba(0,0,0,0.20)",
        WebkitBoxShadow: "0 1px 1px 0px rgba(0,0,0,0.20)",
        position: "relative",
        overflow: "hidden",
        marginLeft: 12
      },
      textStyle: {
        display: "table-cell",
        // use this style so that we can vertically middle align the content in the button
        verticalAlign: "middle",
        height: 32,
        paddingLeft: 16,
        paddingRight: 16
      },
      fileUploadContainerStyle: {
        display: "flex",
        height: 40,
        alignItems: "center"
      }
    };
    return _fileUpload;
  }();

  var form = function () {
    var _form = {
      containerStyle: {
        paddingTop: 32,
        paddingRight: 20,
        paddingBottom: 32,
        paddingLeft: 20,
        backgroundColor: "#FFFFFF"
      },
      errorMessageContainerStyle: {
        height: 40,
        width: "auto",
        backgroundColor: "rgba(247, 99, 33, 0.08)",
        fontSize: 12,
        color: "#4A4A4A",
        fontFamily: "verdana",
        paddingLeft: 20,
        marginBottom: 24
      },
      errorMessageWrapperStyle: {
        display: "table-cell",
        verticalAlign: "middle",
        height: 40
      },
      errorMessageIconStyle: {
        color: "#F76321",
        fontSize: 18,
        marginRight: 6,
        verticalAlign: "middle",
        float: "left"
      },
      errorMessageStyle: {
        position: "relative",
        top: "1px"
      }
    };
    return _form;
  }();

  var that = {
    tabs: tabs,
    searchBox: searchBox,
    pageFooter: pageFooter,
    fileUpload: fileUpload,
    form: form
  };
  return that;
}();

module.exports = ComponentStyles;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(8);

var _ = __webpack_require__(1);

__webpack_require__(46);
/**
 * Function that checks whether an input string is a number.
 * If it is a number, it is converted and returned as a number
 * else it is returned as a string. Null and Undefined are returned
 * as an empty string.
 * THIS FUNCTION IS NO LONGER USED BUT KEEPING FOR REFERENCE.
 */


function convertValue(value, valueType) {
  valueType = valueType || "string";
  var newValue = null;

  if (value == null || value == undefined) {
    newValue = "";
  } else {
    if (typeof value == "number") {
      newValue = value;

      if (valueType == "string") {
        newValue = newValue.toString();
      }
    } else {
      if (value.trim() == "") {
        newValue = "";
      } else {
        if (valueType == "string") {
          newValue = value.toString();
        } else {
          if (isNaN(value) == false) {
            var hasPeriodAtEnd = false; // if we enter a period then make it count as a decimal by adding a 0 at the end.

            if (value.indexOf(".") == value.length - 1) {
              hasPeriodAtEnd = true;
            }

            if (hasPeriodAtEnd == true) {
              newValue = parseFloat(value).toFixed(1);
            } else {
              newValue = parseFloat(value);
            }
          } else {
            newValue = value;
          }
        }
      }
    }
  }

  return newValue;
}

;
/**
 * Stricter parseFloat function to elimate a string like 34mm being parse floated to 34.
 * Source is MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
 */

var parseFloatStrict = function parseFloatStrict(value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) return Number(value);
  return NaN;
};
/**
 * The text box is typically found on a form page or modal dialog and is used to enter text.
 */


var TextBox = React.createClass({
  displayName: "TextBox",
  // custom methods
  handleChange: function handleChange(event) {
    var _this = this;

    var newValue = event.target.value == null || event.target.value == undefined ? "" : event.target.value; // cannot be null for controlled components

    this.setState({
      value: newValue
    });

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(newValue, event);
    }

    if (typeof this.props.typeAheadSearchHandler == "function" && newValue.length >= this.state.typeAheadTriggerCount) {
      var searchResults = this.props.typeAheadSearchHandler(newValue, function (searchResults) {
        if (Array.isArray(searchResults) == true && searchResults.length > 0) {
          _this.setState({
            typeAheadSearchResults: searchResults,
            showTypeAheadPanel: true
          });
        }
      });
    }
  },
  // To support IE's clear button, we listen to the onInput event instead if the onChange event, as onChange is not fired for the clear button.
  //   but we still need to specify a handler the onChange event otherwise there will be browser warning.
  handleChangeDummy: function handleChangeDummy(event) {},

  /**
   * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
   * The value of the textbox along with the keyPress event is passed to the function.
   */
  handleEnterPress: function handleEnterPress(event) {
    var ENTER_KEY_CODE = 13;
    var DOWN_ARROW_KEY_CODE = 40;
    var UP_ARROW_KEY_CODE = 38;

    if (event.keyCode == ENTER_KEY_CODE) {
      if (typeof this.props.enterPressHandler == "function") {
        this.props.enterPressHandler(this.state.value, event);
      }
    }

    if (event.keyCode == DOWN_ARROW_KEY_CODE || event.keyCode == UP_ARROW_KEY_CODE) {
      if (typeof this.props.handleKeyPress == "function") {
        this.props.handleKeyPress(event, event.keyCode);
      }

      this.setState({
        isTypeAheadPanelFocused: true
      });
    }
  },

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    this.setState({
      isFocused: true,
      hasFocusedOnce: true
    });
  },
  // When the text box loses focus this function is called. It calls
  // the validator prop function if one is provided.
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
    var value = event.target.value;

    if (value) {
      value = value.trim();
    }

    if (typeof this.props.validator == "function") {
      // create a new function from validator with the 'value' as an additional parameter.
      // this is done to accomodate composed components like the InputTableTextBoxColumn
      // that append their own parameters to the validator function.
      var validator = this.props.validator.bind(null, value);
      validator();
    }

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component. If the prop value is not supplied a unique identifier is added.
     */
    id: React.PropTypes.string,

    /**
     * The text for the text box component.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Shows a tooltip on the textbox.
     */
    title: React.PropTypes.string,

    /**
     * Visually adds an orange vertical bar to the left side of the box.
     */
    required: React.PropTypes.bool,

    /**
     * The maximum number of characters that can be entered in the control.
     */
    maxLength: React.PropTypes.number,

    /**
     * Placeholder text to show in the text box.
     */
    placeholder: React.PropTypes.string,

    /**
     * Control will be disabled when this value is true.
     */
    disabled: React.PropTypes.bool,

    /**
     * Users of the control can pass in an event handler to get notified when the value changes.
     * The handler is passed in the changed value and the event object.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     */
    validator: React.PropTypes.func,

    /**
     * Set this prop value to the message you want to show if validation fails, otherwise set its value to null to hide.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Property when set to true triggers the validation if the textbox has not had focus yet. This can be used
     * by a form to trigger a validation on the textbox without the textbox ever getting focus.
     */
    triggerValidation: React.PropTypes.bool,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Set this property value to true if you want the text box to receive automatic focus
     * when the component loads. For this to work, the id needs to be defined.
     */
    autoFocus: React.PropTypes.bool,

    /**
     * Set this prop value to a function that is called when the enter key is pressed.
     * The value of the textbox along with the keyPress event is passed to the function.
     */
    enterPressHandler: React.PropTypes.func,

    /**
     * Set this prop value to a function that is called when the textbox loses focus.
     */
    focusLostHandler: React.PropTypes.func,

    /**
     * For internal use only. Set this prop value to false if this component is going to be used in a composition to create another component.
     * Setting it to false, removes the border radius from the top-right and bottom-right. It defaults to true.
     */
    standalone: React.PropTypes.bool,

    /**
     * Set this prop to false if you want to hide the span element that shows the validation message. This is useful if you are not validating
     * and there is no need to reserve the space for the validation component.
     */
    hideValidation: React.PropTypes.bool,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     * The width prop will override the size prop.
     */
    size: React.PropTypes.oneOf(["extrasmall", "small", "medium", "large"]),

    /**
     * Should be used in very rare cases only when instructed by the design team. For standard sizes see the size prop.
     * Provide the percentage number to be used for the width. Do not add the % sign. You have to pass in type prop with
     * value "percent" in addition to the percentWidth prop. The value should be passed in as a number e.g. percentWidth={90}.
     * The width will be a percentage of the container.
     */
    percentWidth: React.PropTypes.number,

    /**
     * Set this prop value to either string or number to force the textbox to honor the alignment.
     */
    valueType: React.PropTypes.oneOf(["string", "number"]),

    /**
     * Function that is called when the type ahead is triggered. Parameters passed into the function are
     * the search value and a callback function. The callback function parameter are the results of the search.
     */
    typeAheadSearchHandler: React.PropTypes.func,

    /**
     * The number of characters the user enters before the typeAheadSearchHandler is called. Default is 2.
     */
    typeAheadTriggerCount: React.PropTypes.number
  },
  componentDidMount: function componentDidMount() {
    if (typeof this.props.autoFocus == "boolean" && this.props.autoFocus == true) {
      ReactDOM.findDOMNode(this.refs[this.props.id]).focus();
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    if (typeof this.props.typeAheadSearchHandler == "function" && this.state.showTypeAheadPanel == false) {
      ReactDOM.findDOMNode(this.refs[this.props.id]).focus();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var newValue = newProps.value == null || newProps.value == undefined ? "" : newProps.value; // cannot be null for controlled components

    var triggerValidation = false;

    if (typeof newProps.triggerValidation == "boolean") {
      triggerValidation = newProps.triggerValidation;
    }

    if (triggerValidation == true && this.state.triggerValidationHappened == false) {
      if (typeof this.props.validator == "function") {
        // create a new function from validator with the 'value' as an additional parameter.
        // this is done to accomodate composed components like the InputTableTextBoxColumn
        // that append their own parameters to the validator function.
        this.props.validator.call(null, newValue);
        this.setState({
          triggerValidationHappened: true
        });
      }
    } else {
      this.setState({
        validationMessage: newProps.validationMessage
      });
    }

    this.setState({
      disabled: newProps.disabled || false,
      required: newProps.required || false,
      value: newValue
    });
  },
  getInitialState: function getInitialState() {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      isRequired = this.props.required;
    }

    var initialValue = this.props.value;
    var valueType = "string";

    if (this.props.valueType == "string" || this.props.valueType == "number") {
      valueType = this.props.valueType;
    } else {
      if (initialValue != null && initialValue != undefined && typeof initialValue == "number") {
        valueType = "number";
      }
    }

    if (initialValue == null || initialValue == undefined) {
      initialValue = "";
    }

    return {
      // although these are anti-patterns as per React documentation, in some cases
      // like this setting initial state with props is allowed if explicitly done
      // for initialization
      value: initialValue,
      valueType: valueType,
      disabled: isDisabled,
      required: isRequired,
      validationFailed: false,
      isFocused: false,
      hasFocusedOnce: false,
      triggerValidationHappened: false,
      triggerValidation: false,
      typeAheadTriggerCount: typeof this.props.typeAheadTriggerCount == "number" ? this.props.typeAheadTriggerCount : 2,
      showTypeAheadPanel: false,
      isTypeAheadPanelFocused: null
    };
  },
  render: function render() {
    var _this2 = this;

    var id = this.props.id || _.uniqueId("textBox_");

    var getTextBoxStyle = function getTextBoxStyle() {
      var style = {
        fontFamily: "verdana",
        fontSize: 12,
        width: _this2.props.size == "large" ? 600 : _this2.props.size == "medium" ? 400 : _this2.props.size == "extrasmall" ? 100 : 200,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        marginBottom: 0,
        height: 28,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 0,
        paddingBottom: 0,
        cursor: "auto",
        outline: "none",
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
      };
      var standalone = true;

      if (typeof _this2.props.standalone == "boolean") {
        standalone = _this2.props.standalone;
      }

      if (standalone == false) {
        style.borderTopRightRadius = 0;
        style.borderBottomRightRadius = 0;
      } else {
        style.borderTopRightRadius = 2;
        style.borderBottomRightRadius = 2;
      } // backgroundColor


      if (_this2.props.validationMessage != null) {
        style.backgroundColor = "rgba(247, 99, 33, 0.05)";
      } else if (_this2.state.disabled == true) {
        style.backgroundColor = "#F3F3F3";
        style.cursor = "default !important";
      } else if (_this2.props.type == 'dateControl' && _this2.props.inputDisabled === true) {
        style.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
        style.cursor = "pointer";
      } else {
        style.backgroundColor = "#FFFFFF";
      } // border


      if (_this2.state.disabled == true) {
        if (_this2.state.required == true) {
          style.borderLeft = "3px solid #F7901e";
          style.borderTop = "solid 1px #E3E3E3";
          style.borderRight = "1px solid #E3E3E3";
          style.borderBottom = "1px solid #E3E3E3";
        } else {
          style.borderLeft = "solid 1px #E3E3E3";
          style.borderTop = "1px solid #E3E3E3";
          style.borderRight = "1px solid #E3E3E3";
          style.borderBottom = "1px solid #E3E3E3";
        }
      } else if (_this2.state.isFocused == true) {
        style.borderTop = "1px solid #64ADC2";
        style.borderRight = "1px solid #64ADC2";
        style.borderBottom = "1px solid #64ADC2";

        if (_this2.state.required == true) {
          if (_this2.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
          } else {
            style.borderLeft = "3px solid #F7901e";
          }
        } else {
          if (_this2.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
          } else {
            style.borderLeft = "1px solid #64ADC2";
          }
        }

        style.boxShadow = "inset 0 0 3px #346F8F";
      } else {
        style.boxShadow = "none";

        if (_this2.state.required == true) {
          style.borderLeft = "3px solid #F7901e";

          if (_this2.props.validationMessage != null) {
            style.borderTop = "1px solid #F76321";
            style.borderRight = "1px solid #F76321";
            style.borderBottom = "1px solid #F76321";
          } else {
            style.borderTop = "1px solid #E3E3E3";
            style.borderRight = "1px solid #E3E3E3";
            style.borderBottom = "1px solid #E3E3E3";
          }
        } else {
          if (_this2.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
            style.borderTop = "1px solid #F76321";
            style.borderRight = "1px solid #F76321";
            style.borderBottom = "1px solid #F76321";
          } else {
            style.borderLeft = "1px solid #E3E3E3";
            style.borderTop = "1px solid #E3E3E3";
            style.borderRight = "1px solid #E3E3E3";
            style.borderBottom = "1px solid #E3E3E3";
          }
        }
      } // change the styling when Placeholder is displayed


      if (_this2.state.value === null || _this2.state.value.length == 0) {
        style.fontStyle = "italic";
      } else {
        style.fontStyle = "normal";
      } // first honor the valueType prop.


      if (_this2.state.valueType == 'number' || _this2.state.valueType == 'string') {
        if (_this2.state.valueType == 'number') {
          style.textAlign = 'right';
        } else {
          style.textAlign = 'left';
        }
      } else {
        // alignment - text should be left aligned, if value type if number then it should be right aligned.
        if ((typeof _this2.state.value == "number" || isNaN(parseFloatStrict(_this2.state.value)) == false) && _this2.state.valueType == "number") {
          style.textAlign = "right";
        } else {
          style.textAlign = "left";
        }
      } // width - type


      if (_this2.props.type == "search") {
        // padding and width changed so that the text does not go behind the clear search button
        style.paddingRight = 20;
        style.width = style.width - 28;
      }

      if (_this2.props.type == "inputTableTextBoxColumn") {
        style.width = style.width - 98;
      }

      if (_this2.props.type == "inputTableEditableSelectBoxColumn") {
        style.width = 92;
      }

      if (_this2.props.type == "dateControl") {
        style.width = style.width - 28;
      }

      if (_this2.props.type == "percent" && typeof _this2.props.percentWidth == "number") {
        style.width = _this2.props.percentWidth + "%";
      }

      if (_this2.props.type == "editableSelectBox") {
        style.width = style.width - 28;
      }

      if (_this2.props.type == "multiSelect") {
        style.paddingLeft = 30;
        style.borderColor = "#E7E7E7";
        style.width = "100%";
        style.borderRadius = 2;
      }

      return style;
    };

    var getContainerStyle = function getContainerStyle() {
      var containerStyle = {
        display: "inline-block",
        position: "relative"
      };

      if (_this2.props.type == "percent" && typeof _this2.props.percentWidth == "number") {
        containerStyle.width = _this2.props.percentWidth + "%";
      }

      if (_this2.props.type == "multiSelect") {
        containerStyle.display = "block";
        containerStyle.padding = 9;
      }

      return containerStyle;
    };

    var validationMessageStyle = {
      boxSizing: "border-box",
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      marginTop: 4,
      visibility: "hidden",
      height: 16,
      position: "absolute",
      width: this.props.size == "large" ? 600 : 200
    };

    if (this.props.validationMessage != null && this.props.validationMessage != "dummy") {
      validationMessageStyle.visibility = "visible";
    }

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var getValidationMessageComponent = function getValidationMessageComponent() {
      var hideValidationMessageComponent = false;

      if (typeof _this2.props.hideValidation == "boolean") {
        hideValidationMessageComponent = _this2.props.hideValidation;
      }

      if (hideValidationMessageComponent == true) {
        return null;
      } else {
        if (_this2.props.validationMessage) validationMessageStyle.visibility = "visible";
        return React.createElement("span", {
          "data-component-type": "validationMessage",
          style: validationMessageStyle
        }, _this2.props.validationMessage);
      }
    };
    /**
     * Function that updates the textbox value with the one selected from the type ahead search results
     */


    var updateValueFromTypeAheadResult = function updateValueFromTypeAheadResult(searchResult, event) {
      if (searchResult && searchResult.length > 0) {
        _this2.setState({
          value: searchResult,
          showTypeAheadPanel: false,
          isTypeAheadPanelFocused: null
        });
      }
    }; // Function called when the key down event fires on the search result items


    var handleSearchResultEnterPress = function handleSearchResultEnterPress(searchResult, currentIndex, event) {
      // console.log("searchResult = " + searchResult + ", currentIndex = " + currentIndex + ", event object = " + event.type);
      if (searchResult && searchResult.length > 0) {
        _this2.setState({
          value: searchResult,
          showTypeAheadPanel: false,
          isTypeAheadPanelFocused: null
        });
      } //updateValueFromTypeAheadResult.bind(null, searchResult)

    };
    /**
     * Returns the type ahead panel
     */


    var getTypeAheadPanel = function getTypeAheadPanel() {
      if (_this2.state.showTypeAheadPanel == true && _this2.state.typeAheadTriggerCount >= 2 && _this2.state.typeAheadSearchResults.length > 0) {
        return React.createElement(TypeAheadSearchPanel, {
          searchResults: _this2.state.typeAheadSearchResults,
          searchRowClickHandler: updateValueFromTypeAheadResult,
          searchResultEnterHandler: handleSearchResultEnterPress,
          size: _this2.props.size,
          isTypeAheadPanelFocused: _this2.state.isTypeAheadPanelFocused
        });
      } else {
        return null;
      }
    };

    var getCursorStyle = function getCursorStyle() {
      // we need to use an external CSS file because React does not support !important in inline TextStyles
      // I have to use !important because this component is used in Incent which also loads the bootstrap
      // and they have a bad habit of adding styles to element definitions e.g input[type='text'] { cursor: not-allowed }
      if (_this2.state.disabled === true) {
        return "textCursorDisabled";
      }

      return "textCursor";
    };

    var getValidationType = function getValidationType() {
      if (_this2.state.required === true) {
        return 'Required';
      }

      return null;
    };

    return React.createElement("div", {
      "data-validation-type": getValidationType(),
      style: getContainerStyle()
    }, React.createElement("input", {
      id: id,
      type: "text",
      value: this.state.value,
      ref: id,
      tabIndex: tabIndex,
      disabled: this.state.disabled,
      maxLength: this.props.maxLength,
      title: this.props.title,
      placeholder: this.props.placeholder,
      onInput: this.handleChange,
      onChange: this.handleChangeDummy,
      style: getTextBoxStyle(),
      onBlur: this.handleLostFocus,
      className: getCursorStyle(),
      onKeyDown: this.handleEnterPress,
      onFocus: this.handleFocus
    }), getTypeAheadPanel(), getValidationMessageComponent());
  } // lifecycle event handlers

});
/**
 * Component that renders the type ahead search panel.
 */

var TypeAheadSearchPanel = React.createClass({
  displayName: "TypeAheadSearchPanel",
  id: _.uniqueId("typeAheadPanel_"),
  getInitialState: function getInitialState() {
    return {
      currentFocusedSearchResultRowIndex: null
    };
  },
  propTypes: {
    /**
     * The array of search result strings that will be displayed in the type ahead panel.
     */
    searchResults: React.PropTypes.array,

    /**
     * The size of the panel, depends on the size of the textbox.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * Function called when the user clicks a search result.
     * The clicked search result value is passed in as a parameter.
     */
    searchRowClickHandler: React.PropTypes.func,

    /**
     * Function called when the user presses enter on a search result that is in focus.
     * The search result and the index of the search result are passed in as parameters.
     */
    searchResultEnterHandler: React.PropTypes.func
  },
  componentDidUpdate: function componentDidUpdate() {
    // console.log("inside componentDidUpdate");
    if (typeof this.props.isTypeAheadPanelFocused == "boolean" && this.props.isTypeAheadPanelFocused == true) {
      var table = ReactDOM.findDOMNode(this.refs[this.id]);
      table.focus();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.isTypeAheadPanelFocused != null && this.props.isTypeAheadPanelFocused == null) {
      this.setState({
        currentFocusedSearchResultRowIndex: 0
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var typeAheadPanelStyle = {
      boxSizing: "border-box",
      position: "absolute",
      width: this.props.size == "large" ? 600 : this.props.size == "medium" ? 400 : 200,
      fontFamily: "Verdana",
      fontSize: 12,
      borderRight: "1px solid #CCC",
      borderBottom: "1px solid #CCC",
      borderLeft: "1px solid #CCC",
      height: 40,
      cursor: "default",
      outline: "none"
    };
    var typeAheadSearchResultStyle = {
      padding: 8,
      backgroundColor: "#FFFFFF",
      // the following two styles are required to make the text-overflow work.
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    var typeAheadSearchResultFocusedStyle = {
      padding: 8,
      backgroundColor: "#CCCCCC",
      // the following two styles are required to make the text-overflow work.
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };

    var handleSearchRowClick = function handleSearchRowClick(searchResult, e) {
      if (typeof _this3.props.searchRowClickHandler == "function") {
        _this3.props.searchRowClickHandler(searchResult, e);
      }
    };

    var handleTableKeyDown = function handleTableKeyDown(e) {
      var ENTER_KEY_CODE = 13;
      var UP_ARROW_KEY_CODE = 38;
      var DOWN_ARROW_KEY_CODE = 40;

      if (e.keyCode == DOWN_ARROW_KEY_CODE) {
        var currentFocusedSearchResultRowIndex = _this3.state.currentFocusedSearchResultRowIndex;

        if (currentFocusedSearchResultRowIndex == null) {
          currentFocusedSearchResultRowIndex = 0;
        } else if (currentFocusedSearchResultRowIndex + 1 < _this3.props.searchResults.length) {
          currentFocusedSearchResultRowIndex++;
        }

        _this3.setState({
          currentFocusedSearchResultRowIndex: currentFocusedSearchResultRowIndex
        });
      }

      if (e.keyCode == UP_ARROW_KEY_CODE) {
        var currentFocusedSearchResultRowIndex = _this3.state.currentFocusedSearchResultRowIndex;

        if (currentFocusedSearchResultRowIndex > 0) {
          currentFocusedSearchResultRowIndex--;

          _this3.setState({
            currentFocusedSearchResultRowIndex: currentFocusedSearchResultRowIndex
          });
        }
      }

      if (e.keyCode == ENTER_KEY_CODE) {
        if (typeof _this3.props.searchResultEnterHandler == "function") {
          var searchResult = _this3.props.searchResults[_this3.state.currentFocusedSearchResultRowIndex];
          var index = _this3.state.currentFocusedSearchResultRowIndex;

          _this3.props.searchResultEnterHandler(searchResult, index, e);
        }
      }

      e.preventDefault();
    };

    var getSearchRows = function getSearchRows() {
      return _this3.props.searchResults.map(function (searchResult, index, arr) {
        if (index == _this3.state.currentFocusedSearchResultRowIndex) {
          return React.createElement("tr", null, React.createElement("td", {
            style: typeAheadSearchResultFocusedStyle,
            onClick: handleSearchRowClick.bind(null, searchResult)
          }, searchResult));
        } else {
          return React.createElement("tr", null, React.createElement("td", {
            style: typeAheadSearchResultStyle,
            onClick: handleSearchRowClick.bind(null, searchResult)
          }, searchResult));
        }
      });
    };

    return React.createElement("table", {
      ref: this.id,
      id: this.id,
      style: typeAheadPanelStyle,
      onKeyDown: handleTableKeyDown,
      tabIndex: "0"
    }, React.createElement("tbody", null, getSearchRows()));
  }
});
module.exports = TextBox;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0;

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function createStyleElement() {
	var styleElement = document.createElement("style");
	var head = getHeadElement();
	styleElement.type = "text/css";
	head.appendChild(styleElement);
	return styleElement;
}

function createLinkElement() {
	var linkElement = document.createElement("link");
	var head = getHeadElement();
	linkElement.rel = "stylesheet";
	head.appendChild(linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement());
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement();
		update = updateLink.bind(null, styleElement);
		remove = function() {
			styleElement.parentNode.removeChild(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement();
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			styleElement.parentNode.removeChild(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * Component that renders a checkbox.
 */


var CheckBox = React.createClass({
  displayName: "CheckBox",
  // styles
  inputStyle: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 5,
    outline: "none"
  },
  enabledLabelStyle: {
    fontFamily: "Verdana",
    fontSize: 12,
    fontWeight: "normal",
    cursor: "pointer"
  },
  disabledLabelStyle: {
    fontFamily: "Verdana",
    fontSize: 12,
    fontWeight: "normal",
    cursor: "default"
  },
  // styles
  // custom methods
  handleChange: function handleChange(event) {
    var isChecked = event.target.checked == true ? true : false;
    this.setState({
      isChecked: isChecked
    });

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(isChecked, this.props.value, event);
    }
  },
  handleClick: function handleClick(evt) {
    if (this.props.stopClickPropagation === true) {
      evt.stopPropagation();
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * ID for the component.
     */
    id: React.PropTypes.string,

    /**
     * Text to display next to the checkbox.
     */
    text: React.PropTypes.string,

    /**
     * Tooltip to show on the checkbox.
     */
    tooltip: React.PropTypes.string,

    /**
     * The value to associate with the checkbox.
     */
    value: React.PropTypes.string,

    /**
     * Property to enable or disable the checkbox.
     */
    disabled: React.PropTypes.bool,

    /**
     * Property to set the default state of the checkbox.
     */
    defaultChecked: React.PropTypes.bool,

    /**
     * Handler for the change event. The handler is passed in a boolean argument indicating whether the checkbox was checked or unchecked.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Set this property to true to stop the bubbling of the click event to the ancestors of the checkbox. Default is false.
     */
    stopClickPropagation: React.PropTypes.bool,

    /**
     * specify a specific bottom margin
     */
    customMarginHeight: React.PropTypes.number
  },

  /**
   * Set the checked state when the defaultChecked prop is updated. We have to make sure the prop
   * value is not null otherwise we get a React warning about switching between controlled and uncontrolled
   * component
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    if (this.state.isChecked !== newProps.defaultChecked) {
      if (typeof newProps.defaultChecked == "boolean") {
        this.setState({
          isChecked: newProps.defaultChecked
        }, function () {
          if (typeof _this.props.propsUpdateHandler == "function") {
            _this.props.propsUpdateHandler(_this.state.isChecked, _this.props.value);
          }
        });
      }
    }
  },
  getInitialState: function getInitialState() {
    var isChecked = false;

    if (typeof this.props.defaultChecked == "boolean") {
      isChecked = this.props.defaultChecked;
    }

    return {
      isChecked: isChecked
    };
  },
  render: function render() {
    var _this2 = this;

    var id = this.props.id || _.uniqueId("checkBox_");

    var style = {
      display: "flex",
      marginBottom: 4
    };

    if (this.props.type == "inputTableCheckBoxColumn") {
      style.paddingTop = 4;
      this.inputStyle = {
        marginBottom: "auto",
        marginRight: 5
      };
    }

    this.inputStyle.cursor = 'pointer';

    if (this.props.disabled === true) {
      this.inputStyle.cursor = 'default';
    }

    var labelStyle = function labelStyle() {
      if (_this2.props.disabled == true) {
        return _this2.disabledLabelStyle;
      }

      return _this2.enabledLabelStyle;
    };

    var addLabel = function addLabel() {
      if (_this2.props.text != null && _this2.props.text != undefined && _this2.props.text.length > 0) {
        return React.createElement("label", {
          style: labelStyle(),
          title: _this2.props.tooltip,
          htmlFor: id
        }, _this2.props.text);
      } else {
        return null;
      }
    };

    return React.createElement("span", {
      style: {
        display: "flex",
        marginBottom: this.props.customMarginHeight != null ? this.props.customMarginHeight : 4
      }
    }, React.createElement("input", {
      id: id,
      style: this.inputStyle,
      type: "checkbox",
      disabled: this.props.disabled,
      title: this.props.tooltip,
      value: this.props.value,
      checked: this.state.isChecked,
      onChange: this.handleChange,
      onClick: this.handleClick
    }), addLabel());
  } // lifecycle event handlers

});
module.exports = CheckBox;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * The Primary Button is a command button that executes a primary action. 
 * It can typically be found on a form page or in a modal dialog. 
 */


var PrimaryButton = React.createClass({
  displayName: "PrimaryButton",
  // custom properties
  primaryButtonBaseStyle: {
    display: "table",
    // use this style so that we get a block element, more explanation below for vertical align
    textAlign: "left",
    fontFamily: "verdana",
    fontSize: 12,
    fontWeight: "bold",
    height: 34,
    borderRadius: 20,
    WebkitBorderRadius: 20,
    boxShadow: "0 1px 1px 1px rgba(0,0,0,0.1)",
    outline: "none"
  },
  primaryButtonStyle: function primaryButtonStyle() {
    return _.extend({
      cursor: "default",
      color: "#CFCFCF",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledStyle: function primaryButtonEnabledStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#285C7E",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledHoverStyle: function primaryButtonEnabledHoverStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#203a4a",
      border: "1px solid #c9c9c9",
      background: "linear-gradient(180deg, #E3E3E3, #CDDDE6)"
    }, this.primaryButtonBaseStyle);
  },
  iconStyle: {
    color: "#467B99",
    fontSize: 16
  },
  handleFocus: function handleFocus(event) {
    this.setState({
      isFocused: true
    });
  },
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
  },
  // custome properties
  // custom methods
  // custom methods
  // lifecycle event handlers

  /**
   * We need to set the enabled state when the enabled props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var enabled = newProps.enabled == false ? false : true;

    if (enabled != this.state.enabled) {
      this.setState({
        enabled: enabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var enabled = this.props.enabled == false ? false : true;
    return {
      enabled: enabled,
      // value set by prop because it is the default value
      showHover: false,
      isFocused: false
    };
  },
  propTypes: {
    /**
     * Id for the button, if not provided a unique id is added.
     */
    id: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Font-awesome icon to display on the button. Providing this prop overrides the text prop.
     * If icon prop is provided, the text prop is ignored.
     */
    icon: React.PropTypes.string,

    /**
     * Boolean that enables or disables the button. Defaults to true.
     */
    enabled: React.PropTypes.bool,

    /**
     * If set to true the button is rendered as an inline element. Useful when used in overlay title bars. Default is false.
     */
    inline: React.PropTypes.bool,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Renders a data-button-type attribute in the HTML element. Useful for automated testing, but can also be used for
     * specifying intent.
     */
    type: React.PropTypes.string
  },
  render: function render() {
    var _this = this;

    var clickHandler = function clickHandler() {
      if (_this.state.enabled == true) {
        return _this.props.clickHandler;
      } else {
        return null;
      }
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.enabled == false) {
        buttonStyle = _this.primaryButtonStyle();
      } else {
        if (_this.state.showHover == true) {
          buttonStyle = _this.primaryButtonEnabledHoverStyle();
        } else {
          buttonStyle = _this.primaryButtonEnabledStyle();
        }
      }

      var inline = false;

      if (typeof _this.props.inline == "boolean") {
        inline = _this.props.inline;
      }

      if (inline == true) {
        buttonStyle.display = "inline-block";
      }

      if (_this.props.overrideStyle) {
        buttonStyle = _.extend(buttonStyle, _this.props.overrideStyle);
      } // focus


      if (_this.state.enabled == true && _this.state.isFocused == true) {
        buttonStyle.background = "linear-gradient(180deg, #FFFFFF, #EBF1F5)";
        buttonStyle.borderRadius = 100;
        buttonStyle.boxShadow = "0 0 4px #64ADC2";
        buttonStyle.outline = "none";
      } // Update the height, width and radius of the button if icon prop is provided.


      if (_this.props.icon && _this.props.icon.length > 0) {
        buttonStyle.height = 24;
        buttonStyle.width = 24;
        buttonStyle.borderRadius = 2;
        buttonStyle.WebkitBorderRadius = 2;
        buttonStyle.textAlign = "center"; // user style sheet adds default padding of 6, we dont need it

        buttonStyle.padding = 0;
      }

      return buttonStyle;
    };

    var innerLayerStyle = {
      display: "table-cell",
      // use this style so that we can vertically middle align the content in the button
      verticalAlign: "middle",
      height: 32,
      paddingLeft: 32,
      paddingRight: 32
    }; // for button text longer than 6 characters the padding should be reduced

    if (this.props.text && this.props.text.length > 6) {
      innerLayerStyle.paddingLeft = 16;
      innerLayerStyle.paddingRight = 16;
    }
    /**
     * Function called when the mouse enters the button
     */


    var showHover = function showHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: true
        });
      }
    };
    /**
     * Function called when the mouse leaves the button
     */


    var hideHover = function hideHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: false
        });
      }
    };
    /**
     * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
     * The value of the textbox along with the keyPress event is passed to the function.
     */


    var handleEnterPress = function handleEnterPress(event) {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        var clickEventHandler = clickHandler();

        if (clickEventHandler) {
          clickEventHandler(event);
        }
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var id = this.props.id || _.uniqueId("primaryButton_");

    var type = "primaryButton";

    if (this.props.type && this.props.type.length > 0) {
      type = this.props.type;
    }
    /**
     * Function to render the icon of the button only if provided in the icon prop
     */


    var renderIcon = function renderIcon() {
      if (_this.props.icon && _this.props.icon.length > 0) {
        if (_this.state.enabled == false) {
          _this.iconStyle.color = "#999999";
        } else {
          _this.iconStyle.color = "#346484";
        }

        return React.createElement("span", {
          style: _this.iconStyle,
          className: _this.props.icon
        });
      } else {
        return null;
      }
    };
    /**
     * Function to render the text of the button only if provided in the text prop.
     * If the icon prop is provided it takes precedence over the text.
     */


    var renderText = function renderText() {
      if (_this.props.icon && _this.props.icon.length > 0) {
        return null;
      } else {
        if (_this.props.text && _this.props.text.length > 0) {
          return React.createElement("div", {
            style: innerLayerStyle
          }, _this.props.text);
        } else {
          return null;
        }
      }
    };

    var getDisabledProp = function getDisabledProp() {
      if (_this.state.enabled == true) {
        return false;
      } else {
        return true;
      }
    };

    return React.createElement("button", {
      id: id,
      style: currentStyle(),
      disabled: getDisabledProp(),
      onClick: clickHandler(),
      "data-button-type": type,
      onMouseEnter: showHover,
      onMouseLeave: hideHover,
      tabIndex: tabIndex,
      onKeyDown: handleEnterPress,
      onFocus: this.handleFocus,
      onBlur: this.handleLostFocus
    }, renderIcon(), renderText());
  } // lifecycle event handlers

});
module.exports = PrimaryButton;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// All constants used in the components defined here
var keyMirror = __webpack_require__(47);

module.exports = {
  SortOrder: {
    ASC: "ASC",
    DESC: "DESC",
    DEFAULT: "ASC"
  },
  ActionTypes: keyMirror({
    SORT_DATA_CHANGED: "SORT_DATA_CHANGED",
    TABLE_CHECKBOX_COLUMN_CHANGED: "TABLE_CHECKBOX_COLUMN_CHANGED",
    GET_TAGS_LIST: "GET_TAGS_LIST",
    GET_TAGS_COUNT: "GET_TAGS_COUNT"
  })
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Represents the header row in the Table component
 */
var React = __webpack_require__(0);

var TableHeadRow = React.createClass({
  displayName: "TableHeadRow",

  /**
   * Return the head row only if the first record is being recursed by the table component
   * This is required to be done because for each row the table component calls all children
   * which includes the head row, but we want to render it only once.
   */
  render: function render() {
    var _this = this;

    var getHeadColumns = function getHeadColumns() {
      return React.Children.map(_this.props.children, function (headColumnTemplate) {
        if (headColumnTemplate) {
          return React.cloneElement(headColumnTemplate, {
            tableId: _this.props.tableId
          });
        }
      });
    };

    var getHeadRow = function getHeadRow() {
      if (_this.props.dataIndex == 0) {
        return React.createElement("thead", null, React.createElement("tr", null, getHeadColumns()));
      } else {
        return null;
      }
    };

    return getHeadRow();
  }
});
module.exports = TableHeadRow;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Component to show text inside a column in the Table component
 * @param {String} textPropertyName Name of the property in the object bound to the row whose value we want to display or it can be a function that is passed the bound row object as an argument.
 * @param {String} tooltipPropertyName Name of the property in the object bound to the row whose value we want to display as a tooltip
 * @param {Number} maxLength Max length after which we want to truncate the text displayed
 * @param {isFavorite} if true, use this column to show a star for showing favorite.  The textPropertyName should denote a field that has a true/false value. 
 * @param {clickHandler} If present, will call the handler if column is clicked
 * @param {addEmptySpace} If present, will add a non breaking space in the column if the actual column value is null.
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var AbstractTableColumn = __webpack_require__(15);

var HelperActionsMixins = __webpack_require__(25);

var TableTextColumn = React.createClass({
  displayName: "TableTextColumn",
  labelStyle: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    width: '100%'
  },
  mixins: [HelperActionsMixins],

  /**
   * Function called when the column is clicked. If a click handler is assigned then it will be called with the row data as an argument.
   */
  columnClicked: function columnClicked(event) {
    if (typeof this.props.clickHandler == "function") {
      this.props.clickHandler(this.props.rowData, event);
    }
  },

  /**
   * Function called when the caret is clicked. If a click handler is assigned then it will be called with the row data as an argument.
   */
  onCaretClicked: function onCaretClicked(event) {
    if (typeof this.props.treeNodeClickHandler == "function") {
      this.props.treeNodeClickHandler(this.props.rowData, this.props.rowIndex, event);
      event.stopPropagation(); // Prevent expanded row (if exists) from being toggled
    }
  },
  render: function render() {
    var _this = this;

    var textPropertyName = null;
    var tooltipPropertyName = null;

    if (typeof this.props.textPropertyName == "function") {
      textPropertyName = this.props.textPropertyName;
    } else if (this.props.textPropertyName && this.props.textPropertyName.length > 0) {
      textPropertyName = this.props.textPropertyName;
    }

    if (this.props.tooltipPropertyName && this.props.tooltipPropertyName.length > 0) {
      tooltipPropertyName = this.props.tooltipPropertyName;
    }

    var text = null;

    if (_typeof(this.props.rowData) == "object") {
      if (typeof textPropertyName == "function") {
        text = textPropertyName(this.props.rowData);
      } else if (typeof textPropertyName == "string") {
        text = this.props.rowData[textPropertyName];
      }
    } else if (typeof this.props.rowData == "string") {
      text = this.props.rowData;
    } else {
      text = "";
    } // truncate if maxLength is present


    if (this.props.maxLength) {
      text = this.truncate(text, this.props.maxLength, 5);
    }

    var preText = "";
    this.labelStyle.paddingLeft = 0;

    if (this.props.isCaretColumn) {
      // prepend a caret to the column if it has children
      if (typeof this.props.rowData.treeOpen != 'undefined') {
        var caretStyle = {
          fontSize: 14,
          color: '#285C7E',
          paddingLeft: 4,
          paddingRight: 8
        };
        if (this.props.rowData.treeOpen) preText = React.createElement("i", {
          className: "fa fa-caret-down",
          style: caretStyle,
          onClick: this.onCaretClicked
        });else {
          caretStyle.paddingRight = 11;
          preText = React.createElement("i", {
            className: "fa fa-caret-right",
            style: caretStyle,
            onClick: this.onCaretClicked
          });
        }
      } // indent the column properly depending on the level the row is on


      this.labelStyle.paddingLeft = this.props.rowData.treeLevel * 28;
    }

    if (typeof this.props.width == "number") {
      this.labelStyle.width = this.props.width;
    } else {
      delete this.labelStyle.width;
    }

    var tooltip = typeof this.props.rowData === "string" ? this.props.rowData : null;

    if (tooltipPropertyName) {
      tooltip = this.props.rowData[tooltipPropertyName];
    }

    var newProps = {};

    if (tooltip) {
      newProps.title = tooltip;
    }

    _.extend(newProps, this.props);

    var getLabel = function getLabel() {
      var favoriteStyle = {
        fontSize: 14,
        paddingLeft: 20,
        color: text ? '#F7901E' : '#CCC'
      };
      var linkStyle = {
        color: "#346f8f",
        cursor: "pointer"
      };
      var isLink = typeof _this.props.clickHandler == "function";
      var labelStyle = isLink ? Object.assign({}, _this.labelStyle, linkStyle) : _this.labelStyle;
      return _this.props.isFavorite ? React.createElement("span", {
        style: labelStyle,
        title: "",
        onClick: _this.columnClicked
      }, React.createElement("i", {
        className: "fa fa-star",
        style: favoriteStyle
      })) : _this.props.addEmptySpace ? text ? React.createElement("span", {
        style: labelStyle,
        title: text,
        onClick: _this.columnClicked
      }, text) : React.createElement("span", {
        style: labelStyle,
        title: text,
        onClick: _this.columnClicked
      }, "\xA0") : React.createElement("span", {
        style: labelStyle,
        title: text,
        onClick: _this.columnClicked
      }, preText, text);
    };

    return React.createElement(AbstractTableColumn, {
      title: tooltip,
      type: this.props.type,
      style: this.props.style,
      isExpanded: this.props.isExpanded,
      showRowBorder: this.props.showRowBorder,
      width: this.props.width,
      align: this.props.align
    }, getLabel());
  }
});
module.exports = TableTextColumn;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A simple store that returns a counter object that can be used to get next and previous integer values
 * based on a seed value. 
 */
var _ = __webpack_require__(1);

var counters = {};

function createCounterObject(name) {
  var that = {
    counterName: name,
    getNextValue: function getNextValue() {
      var nextValue = counters[that.counterName] + 1;
      counters[that.counterName] = nextValue;
      return nextValue;
    },
    getPreviousValue: function getPreviousValue() {
      var previousValue = counters[that.counterName] - 1;
      counters[that.counterName] = previousValue;
      return previousValue;
    }
  };
  return that;
}

;
var CounterStore = {
  createNewCounter: function createNewCounter(name, seedValue) {
    if (typeof name != "string" || name == null || name == undefined || name.length == 0) {
      name = _.uniqueId("counter_");
    }

    counters[name] = 0;

    if (isNaN(parseInt(seedValue)) == false) {
      counters[name] = parseInt(seedValue);
    }

    return createCounterObject(name);
  },
  getCounterByName: function getCounterByName(name) {
    if (typeof name == "string" && name != null && name != undefined && name.length > 0 && counters.hasOwnProperty(name)) {
      return createCounterObject(name);
    }

    return null;
  }
};
module.exports = CounterStore;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Base class for column components of the SimpleTable component
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var AbstractTableColumn = React.createClass({
  displayName: "AbstractTableColumn",
  columnStyle: {
    borderBottom: "1px solid #E1E1E1",
    fontSize: 12,
    color: "#333333",
    verticalAlign: "middle",
    textAlign: "left",
    whiteSpace: "normal",
    paddingTop: 8,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    boxSizing: "border-box"
  },
  render: function render() {
    this.columnStyle.paddingLeft = 5;

    if (this.props.type == "detail") {
      this.columnStyle.paddingLeft = 11;
    }

    if (this.props.isExpanded == true) {
      this.columnStyle.borderBottom = "none";
    } else if (this.props.showRowBorder === false) {
      this.columnStyle.borderBottom = "none";
    } else {
      this.columnStyle.borderBottom = "1px solid #E1E1E1";
    }

    this.columnStyle.width = this.props.width;
    this.columnStyle.textAlign = this.props.align === "right" ? "right" : "left";
    return React.createElement("td", {
      title: this.props.title,
      style: this.columnStyle
    }, this.props.children);
  }
});
module.exports = AbstractTableColumn;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Table component to display data in a tabular fashion. It can display regular rows
 * and columns, it can be configured to display master and expanded details or it
 * can be configured to display master record and detail records like we do in
 * Draws and Pay Curves. All these configurations are achieved through sub component
 * composition.
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var Dispatcher = __webpack_require__(17);

var _require = __webpack_require__(11),
    ActionTypes = _require.ActionTypes;

var Table = React.createClass({
  displayName: "Table",
  // styles
  tableStyle: {
    width: "100%",
    border: 0,
    borderCollapse: "separate",
    tableLayout: 'fixed'
  },
  // styles
  // custom methods
  rowSelectedHandler: function rowSelectedHandler(rowData, rowIndex, clickEvent) {
    var _this = this;

    this.setState({
      selectedRowIndex: rowIndex
    }, function () {
      if (typeof _this.props.rowClickHandler == "function") {
        _this.props.rowClickHandler(rowData, rowIndex, clickEvent);
      }

      if (_this.props.toggleCheckboxOnRowClick == true) {
        Dispatcher.dispatch({
          type: ActionTypes.TABLE_CHECKBOX_COLUMN_CHANGED,
          index: rowIndex,
          checked: true,
          toggleCheckbox: true,
          rowData: rowData
        });
      }
    });
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The index of the row that we want to be selected. This only changes the background color of the row.
     * It does not trigger the row click.
     */
    selectedRowIndex: React.PropTypes.number,

    /**
     * The fieldname of the row data that determines whether the row should have bold text or not.  
     * The value of the field should be a boolean, and if the fieldname is prepended with a '!' sign, then the value will be negated.
     * Currently for expandable row only. See Docs-Track (TrackListPendingMyActions) for example.
     */
    conditionalBold: React.PropTypes.string
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (this.props.selectedRowIndex == -1 || typeof newProps.selectedRowIndex == "number" && newProps.selectedRowIndex % 1 === 0 && newProps.selectedRowIndex > -1) {
      this.setState({
        selectedRowIndex: newProps.selectedRowIndex
      });
    }
  },
  getInitialState: function getInitialState() {
    var selectedRowIndex = null;

    if (this.props.selectedRowIndex == -1 || typeof this.props.selectedRowIndex == "number" && this.props.selectedRowIndex % 1 === 0 && this.props.selectedRowIndex > -1) {
      selectedRowIndex = this.props.selectedRowIndex;
    }

    return {
      selectedRowIndex: selectedRowIndex
    };
  },
  render: function render() {
    var _this2 = this;

    var id = this.props.id || _.uniqueId("table_");

    var data = this.props.data || [];
    var clonedData = [];

    if (data.length > 0) {
      data.forEach(function (dataItem, index, arr) {
        var clonedItem = _.clone(dataItem);

        clonedData.push(clonedItem);
      });
    } // push a fake record to the data if it is empty. This will allow us to render the header
    // if there is no data, we will ignore this entry for data rows.


    if (clonedData.length == 0) {
      clonedData.push("headerOnly");
    }

    var getRows = function getRows() {
      return clonedData.map(function (item, index, arr) {
        var rowSelected = false;

        if (index == _this2.state.selectedRowIndex) {
          rowSelected = true;
        }

        if (!item.isToHide) return React.Children.map(_this2.props.children, function (rowTemplate) {
          if (rowTemplate) {
            return React.cloneElement(rowTemplate, {
              rowData: item,
              //key: item.id,   // This causes sorting to get weird when the object contains a field named id
              key: index,
              dataIndex: index,
              itemId: item.id,
              tableId: id,
              rowClickHandler: _this2.rowSelectedHandler,
              selected: rowSelected,
              rowSelectionEnabled: _this2.props.rowSelectionEnabled,
              showRowBorder: _this2.props.showRowBorder,
              conditionalBold: _this2.props.conditionalBold,
              selectType: _this2.props.selectType
            });
          }
        });
      });
    };

    var getTableContainerStyle = function getTableContainerStyle() {
      var containerStyle = {
        overflowY: "auto",
        position: "relative"
      };

      if (_this2.props.tableHeight != null && _this2.props.tableHeight != undefined && _this2.props.tableHeight % 1 == 0) {
        containerStyle.height = _this2.props.tableHeight;
      }

      return containerStyle;
    };

    return React.createElement("div", {
      style: getTableContainerStyle()
    }, React.createElement("table", {
      id: id,
      style: this.tableStyle,
      cellSpacing: "0"
    }, getRows()));
  } // lifecycle event handlers

});
module.exports = Table;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Returns the React-Flux dispatcher object that handles eventing
var _require = __webpack_require__(107),
    Dispatcher = _require.Dispatcher;

module.exports = new Dispatcher();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Represents the head column in the table component.
 * @param {String} sortPropertyName The name of the propery in the object that should be used for sorting
 * @param {Boolean} defaultSort Indicates whether the column is the default sort. NOTE - At this point 
 *                  we dont support defaultSortOrder because it is not required (ASC is the default)
 * @param {String} tableId The id of the table that this component is part of
 * @param {Number} maxLength Max length after which we want to truncate the header label displayed
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var Dispatcher = __webpack_require__(17);

var _require = __webpack_require__(11),
    SortOrder = _require.SortOrder,
    ActionTypes = _require.ActionTypes;

var TableStore = __webpack_require__(108);

var HelperActionsMixins = __webpack_require__(25);

var HelpDialog = __webpack_require__(31);

var TableHeadColumn = React.createClass({
  displayName: "TableHeadColumn",
  // styles
  columnStyle: {
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "verdana",
    color: "#333333",
    verticalAlign: "middle",
    borderBottom: "1px solid #E1E1E1",
    textAlign: "left",
    paddingTop: 8,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    height: 20
  },
  // styles
  eventDispatchToken: null,
  tableStore: null,
  columnClickHandler: function columnClickHandler(sortPropertyName, event) {
    event.stopPropagation();
    this.tableStore.setSortColumn(sortPropertyName);

    if (typeof this.props.clickHandler == "function") {
      // non-flux route
      this.props.clickHandler(this.tableStore.getCurrentSortColumn(), this.tableStore.getCurrentSortOrder(), event);
    }
  },
  getInitialState: function getInitialState() {
    var defaultSortColumn = null;
    var defaultSortOrder = null;
    var defaultSort = false;

    if (typeof this.props.defaultSort == "boolean") {
      defaultSort = this.props.defaultSort;
    }

    if (defaultSort == true && this.props.sortPropertyName) {
      defaultSortColumn = this.props.sortPropertyName;
    }

    if (this.props.defaultSortOrder == SortOrder.ASC || this.props.defaultSortOrder == SortOrder.DESC) {
      defaultSortOrder = this.props.defaultSortOrder;
    } else if (this.props.sortPropertyName && defaultSort == true) {
      // sort property name is set and is the default sort, then set the sort order to ASC if not provided
      defaultSortOrder = SortOrder.ASC;
    }

    return {
      currentSortColumn: defaultSortColumn,
      currentSortOrder: defaultSortOrder
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.tableStore = TableStore.create(this.props.tableId, this.state.currentSortColumn, this.state.currentSortOrder);
    this.eventDispatchToken = Dispatcher.register(function (action) {
      switch (action.type) {
        case ActionTypes.SORT_DATA_CHANGED:
          // set the state only for the current table
          if (_this.props.tableId == action.tableId) {
            _this.setState({
              currentSortColumn: action.newSortColumn,
              currentSortOrder: action.newSortOrder
            });
          }

          break;
      }
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.eventDispatchToken) {
      try {
        Dispatcher.unregister(this.eventDispatchToken);
      } catch (e) {// no op
      }
    }
  },
  mixins: [HelperActionsMixins],
  render: function render() {
    var _this2 = this;

    var columnWidth = null;

    var columnStyleCopy = _.clone(this.columnStyle);

    if (this.isInteger(this.props.width)) {
      columnStyleCopy.width = this.props.width;
    } else if (typeof this.props.width == "string") {
      // assume to be percentage
      if (this.props.width.length > 0) {
        columnStyleCopy.width = this.props.width;
      }
    } // truncate if maxLength is present


    var columnName = this.props.columnName;

    if (this.props.maxLength) {
      columnName = this.truncate(columnName, this.props.maxLength, 5);
    }

    var tooltip = null;
    var tooltipPropertyName = null;

    if (this.props.tooltipPropertyName && this.props.tooltipPropertyName.length > 0) {
      tooltipPropertyName = this.props.tooltipPropertyName;
    }

    if (tooltipPropertyName) {
      tooltip = this.props.columnName;
    }

    var getSortIcon = function getSortIcon() {
      if (_this2.props.sortPropertyName == _this2.state.currentSortColumn) {
        if (_this2.state.currentSortOrder == SortOrder.ASC) {
          return React.createElement("i", {
            className: "fa fa-sort-asc fa-lg",
            style: {
              marginTop: 0,
              verticalAlign: "text-bottom",
              fontSize: "initial"
            }
          });
        } else {
          return React.createElement("i", {
            className: "fa fa-sort-desc fa-lg",
            style: {
              marginTop: 0,
              verticalAlign: "text-top",
              fontSize: "initial"
            }
          });
        }
      } else {
        return React.createElement("i", {
          className: "fa fa-sort",
          style: {
            width: 15,
            opacity: 0.3
          }
        });
      }
    };

    var getColumnHeader = function getColumnHeader() {
      if (_this2.props.sortPropertyName) {
        return React.createElement("th", {
          style: columnStyleCopy,
          "data-component-name": "TableHeadColumn",
          title: tooltip
        }, React.createElement("span", {
          onClick: _this2.columnClickHandler.bind(null, _this2.props.sortPropertyName),
          style: {
            cursor: "pointer"
          }
        }, React.createElement("span", {
          "data-component-name": "TableHeadColumn",
          "data-component-type": "Label"
        }, columnName), React.createElement("span", {
          style: {
            display: "inline-block",
            marginLeft: 5
          }
        }, getSortIcon()), _this2.props.helpText && React.createElement(HelpDialog, {
          effect: "solid",
          type: "info",
          place: "top"
        }, React.createElement("div", {
          style: {
            width: 220,
            fontWeight: "normal"
          }
        }, _this2.props.helpText))));
      } else {
        return React.createElement("th", {
          style: columnStyleCopy,
          "data-component-name": "TableHeadColumn",
          title: tooltip
        }, React.createElement("span", {
          "data-component-name": "TableHeadColumn",
          "data-component-type": "Label"
        }, columnName), _this2.props.helpText && React.createElement(HelpDialog, {
          effect: "solid",
          type: "info",
          place: "top"
        }, React.createElement("div", {
          style: {
            width: 220,
            fontWeight: "normal"
          }
        }, _this2.props.helpText)));
      }
    };

    return getColumnHeader();
  }
});
module.exports = TableHeadColumn;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Row that acts as a 'normal' row which is to be used when we are displaying a regular row.
 * @param {Boolean} visible If true the row is visible, else invisible
 * @param {Object} rowData The data item bound to this row
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TableRow = __webpack_require__(20);

var TableNormalRow = React.createClass({
  displayName: "TableNormalRow",
  render: function render() {
    if (this.props.rowData && this.props.rowData != "headerOnly") {
      var id = this.props.dataIndex != null && this.props.dataIndex != undefined ? "tableNormalRow" + this.props.dataIndex : _.uniqueId("tableNormalRowId_");
      return React.createElement("tbody", null, React.createElement(TableRow, {
        id: id,
        rowData: this.props.rowData,
        dataIndex: this.props.dataIndex,
        type: "normalRow",
        selected: this.props.selected,
        visible: this.props.visible,
        rowClickHandler: this.props.rowClickHandler,
        rowDoubleClickHandler: this.props.rowDoubleClickHandler,
        rowSelectionEnabled: this.props.rowSelectionEnabled,
        showRowBorder: this.props.showRowBorder,
        selectType: this.props.selectType
      }, this.props.children));
    } else {
      return null;
    }
  }
});
module.exports = TableNormalRow;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Denotes a row for the Table component
 * @param {Boolean} visible If true the row is visible, else invisible
 * @param {Function} clickHandler Function that is called when the row is clicked
 * @param {Object} rowData The data item bound to this row
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TableStyles = __webpack_require__(4).table;

var _require = __webpack_require__(49),
    SelectType = _require.SelectType;
/** 
 * The following code is from https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/using_should_component_update.html
  *
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var bHasOwnProperty = hasOwnProperty.bind(objB);

  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

var TableRow = React.createClass({
  displayName: "TableRow",
  // custom methods
  getBaseStyle: function getBaseStyle() {
    return {
      borderBottom: "1px solid #E1E1E1",
      backgroundColor: "#FFF",
      position: "relative",
      cursor: "default",
      fontFamily: "verdana",
      fontSize: 12,
      fontWeight: "normal"
    };
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {},
  getInitialState: function getInitialState() {
    return {
      actionButtonsVisible: false
    };
  },

  /**
   * Implement this to speed up expanding a row when the table row is expandable and the table has lots of rows.
   * The idea here is to render the row only when 
   *   1. Row is hovered over or out of hover
   *   2. The row is currently expanded (we are opening it or need to handle tabs) or was expanded (we are closing it)
   * This is done primarily to fix the slow rendering in Setup/Calendar, where the list page doesn't have pagination and can have hundreds of rows.
   */
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextState.actionButtonsVisible !== this.state.actionButtonsVisible) return true;
    if (!shallowEqual(nextProps.rowData, this.props.rowData)) return true; // Need to do additional check for expanded row for possible tab switching
    //if (nextProps.rowData.isExpanded !== this.props.rowData.isExpanded)	// If there are more than one tab in the expanded row then the tab selectin won't work using this condition (tested in shallowEqual above)

    if (nextProps.rowData.isExpanded || this.props.rowData.isExpanded) return true;
    return false;
  },
  render: function render() {
    var _this = this;

    var baseStyle = this.getBaseStyle();
    /**
     * Function called when the row is clicked. If a click handler is assigned then it will be called with the row data as an argument.
     */

    var rowClicked = function rowClicked(event) {
      if (_this.props.rowSelectionEnabled == false) {
        event.stopPropagation();
      } else {
        if (typeof _this.props.rowClickHandler == "function") {
          _this.props.rowClickHandler(_this.props.rowData, _this.props.dataIndex, event);
        }
      }
    };
    /**
     * Function called when the row is double clicked.
     */


    var rowDoubleClicked = function rowDoubleClicked(event) {
      if (_this.props.rowSelectionEnabled == false) {
        event.stopPropagation();
      } else {
        if (typeof _this.props.rowDoubleClickHandler == "function") {
          _this.props.rowDoubleClickHandler(_this.props.rowData, _this.props.dataIndex, event);
        }
      }
    };
    /**
     * Sets the state of the action buttons visibility.
     */


    var toggleActionButtons = function toggleActionButtons(visible) {
      _this.setState({
        actionButtonsVisible: visible
      });
    };
    /**
     * Show the hover buttons on mouseover event of the row
     */


    var showActionButtons = function showActionButtons(e) {
      toggleActionButtons(true);
    };
    /**
     * Hide the hover buttons on mouseout event. The extra code is to prevent flickering when moving the mouse over the hover buttons.
     * See http://www.quirksmode.org/js/events_mouse.html for more explanation
     */


    var hideActionButtons = function hideActionButtons(e) {
      if (!e) {
        e = window.event;
      }

      var eventTarget = e.target || e.srcElement; // target is the element where the mouse moved out of
      // get to the parent TR node recursively, this is our real target as the mouse events are defined on the TR element

      while (eventTarget.nodeName != "TR") {
        eventTarget = eventTarget.parentNode;
      }

      var relatedTarget = e.relatedTarget ? e.relatedTarget : e.toElement; // target where the mouse moved to
      // move up the DOM tree of the related target element until we reach the target (TR) or the BODY element

      while (relatedTarget != eventTarget && relatedTarget && relatedTarget.nodeName != "BODY") {
        relatedTarget = relatedTarget.parentNode;
      } // the mouse moved to a child of the TR if the related target is the same as the target


      if (relatedTarget == eventTarget) {
        return;
      } // we actually moved out of the TR, hide the hover buttons


      toggleActionButtons(false);
    }; // background color


    if (this.state.actionButtonsVisible == true) {
      baseStyle.backgroundColor = "#ECF4F6";
    } else {
      if (this.props.isExpanded == true) {
        baseStyle.backgroundColor = "#EDF4F5";
      } else if (this.props.selected == true) {
        baseStyle.backgroundColor = "#EDF4F5";
      } else {
        if (this.props.type == "master") {
          baseStyle.backgroundColor = "#FAFAFA";
        } else {
          baseStyle.backgroundColor = "#FFFFFF";
        }
      }
    } // border bottom


    if (this.props.isExpanded == true) {
      baseStyle.borderBottom = "none";
    } else if (this.props.showRowBorder === false) {
      baseStyle.borderBottom = "none";
    } else {
      baseStyle.borderBottom = "1px solid #E1E1E1";
    } // font weight


    if (this.props.conditionalBold) {
      var negate = this.props.conditionalBold.charAt(0) == '!';
      var fieldName = negate ? this.props.conditionalBold.substr(1) : this.props.conditionalBold;
      if (negate ? !this.props.rowData[fieldName] : this.props.rowData[fieldName]) baseStyle.fontWeight = "bold";
    } else if (this.props.type == "master") {
      baseStyle.fontWeight = "bold";
    } else {
      if (this.props.selected == true && this.props.selectType === SelectType.SINGLE_SELECT) {
        baseStyle.fontWeight = "bold";
      } else {
        baseStyle.fontWeight = "normal";
      }
    } // cursor


    if (this.props.rowSelectionEnabled != false && typeof this.props.rowClickHandler == "function") {
      baseStyle.cursor = "pointer";
    } else {
      baseStyle.cursor = "default";
    }

    var visible = typeof this.props.visible == "boolean" ? this.props.visible : true;

    var handleChildren = function handleChildren() {
      return React.Children.map(_this.props.children, function (child) {
        if (child) {
          return React.cloneElement(child, {
            rowData: _this.props.rowData,
            visible: _this.state.actionButtonsVisible,
            type: _this.props.type,
            isExpanded: _this.props.isExpanded,
            rowIndex: _this.props.dataIndex,
            showRowBorder: _this.props.showRowBorder
            /*,
            selected: this.props.selected*/

          });
        }
      });
    }; // NOTE: Cannot assign the key as a prop to <tr> because when added the onMouseOut
    // event does not trigger. Found no information as to why this is happening.
    // var key = this.props.key || _.uniqueId("tableRowKey_");


    var id = this.props.id || _.uniqueId("tableRow_");
    /**
     * Commenting out this code because of the following warning thrown by React
     * Warning: `tr` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` of `TableRow`. Previous style: {cursor: "default", borderBottom: "1px solid #E1E1E1", backgroundColor: "#FFF", fontWeight: "bold"}. Mutated style: {cursor: "default", borderBottom: "1px solid #E1E1E1", backgroundColor: "#ECF4F6", fontWeight: "bold"}.
     * Need to clone the element and pass in the new style 
    var style = null;
    if (this.state.actionButtonsVisible == true) {
        // apply hover style
        style = _.extend(this.rowStyle, { backgroundColor: "#ECF4F6" });
    } else {
        // apply normal style
        style = _.extend(this.rowStyle, { backgroundColor: "#FFF" });
    }
    */


    var getRow = function getRow() {
      if (visible == true) {
        return React.createElement("tr", {
          id: id,
          style: baseStyle,
          onMouseOver: showActionButtons,
          onMouseOut: hideActionButtons,
          onClick: rowClicked,
          onDoubleClick: rowDoubleClicked
        }, handleChildren());
      } else {
        return null;
      }
    };

    return getRow();
  } // lifecycle event handlers

});
module.exports = TableRow;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var PageFooterStyles = __webpack_require__(4).pageFooter;
/**
 * Component for displaying the footer for the form page
 * Contains a set of buttons to the right or left.
 */


var PageFooter = React.createClass({
  displayName: "PageFooter",
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    /**
     * Wrap each button into a div with a bottom left to space each
     * button from each other.
     */
    var renderChildren = function renderChildren() {
      return React.Children.map(_this.props.children, function (child, index, arr) {
        return React.cloneElement(child);
      });
    };

    if (this.props.type == "dialog") {
      PageFooterStyles.containerStyle.height = 52;
    } else {
      PageFooterStyles.containerStyle.height = 64;
    }

    return React.createElement("div", {
      style: PageFooterStyles.containerStyle
    }, renderChildren());
  } // lifecycle event handlers

});
/**
 * The container component for the left side buttons.
 */

PageFooter.LeftPane = React.createClass({
  displayName: "LeftPane",
  render: function render() {
    var _this2 = this;

    var renderButtons = function renderButtons() {
      return React.Children.map(_this2.props.children, function (child) {
        if (child) {
          return React.createElement("div", {
            style: PageFooterStyles.leftPaneButtonContainerStyle
          }, React.cloneElement(child));
        }
      });
    };

    return React.createElement("div", {
      style: PageFooterStyles.leftPaneContainerStyle
    }, renderButtons());
  }
});
/**
 * The container component for the right side buttons.
 */

PageFooter.RightPane = React.createClass({
  displayName: "RightPane",
  render: function render() {
    var _this3 = this;

    var renderButtons = function renderButtons() {
      return React.Children.map(_this3.props.children, function (child) {
        if (child) {
          return React.createElement("div", {
            style: PageFooterStyles.rightPaneButtonContainerStyle
          }, React.cloneElement(child));
        }
      });
    };

    return React.createElement("div", {
      style: PageFooterStyles.rightPaneContainerStyle
    }, renderButtons());
  }
});
module.exports = PageFooter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var _ = __webpack_require__(1);
/**
 * Component to display text like a label. Used inside tables and forms.
 * TODO: Future update is to add a format prop for formatting of the entered value for text.
 */


var Label = React.createClass({
  displayName: "Label",
  // styles
  // styles
  // life cycle event handlers
  propTypes: {
    /**
     * The text to display in the label
     */
    text: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * If true the text is bold else normal. Default is true.
     */
    bold: React.PropTypes.bool,

    /**
     * If the value is string, the text is left aligned. If it is number,
     * it is right aligned. Default is string.
     */
    type: React.PropTypes.oneOf(['string', 'number']),

    /**
     * The number of decimals to display. This only applies if the type is 'number'
     * and the type of value assigned to the text prop is of type number.
     */
    numberOfDecimals: React.PropTypes.number,

    /**
     * The width of the label in pixels
     */
    width: React.PropTypes.number,

    /**
     * If the align property is provided the only values it will accept are 'left' and 'right'
     */
    align: React.PropTypes.string,

    /**
     * If set to true add the CSS property "word-break:break-all" to break up the text if required.
     */
    wrap: React.PropTypes.bool
  },
  mixins: [StyleMixins],
  render: function render() {
    var labelStyle = {
      fontFamily: "Verdana",
      fontSize: 12,
      color: "#333333",
      fontWeight: "bold",
      display: "inline-block",
      textAlign: "left"
    };
    var bold = true;

    if (typeof this.props.bold == "boolean") {
      bold = this.props.bold;
    }

    var type = "string";

    if (this.props.type === "string" || this.props.type === "number") {
      type = this.props.type;
    }

    if (type === "number") {
      labelStyle.textAlign = "right";
    }

    var numberOfDecimals = 0; // ensure numberOfDecimals is integer and greater than zero

    if (this.props.numberOfDecimals % 1 === 0 && this.props.numberOfDecimals >= 0) {
      numberOfDecimals = this.props.numberOfDecimals;
    }

    var isNaN = _.isNaN(parseFloat(this.props.text));

    var displayText = this.props.text;

    if (this.props.type === "number" && isNaN === false) {
      var value = parseFloat(this.props.text);
      displayText = value.toFixed(numberOfDecimals);
    }

    var labelStyle = labelStyle;

    if (bold == false) {
      labelStyle.fontWeight = "normal";
    }

    if (typeof this.props.width == "number" && this.props.width > 0) {
      labelStyle.width = this.props.width;
    }

    if (this.props.align && (this.props.align == "left" || this.props.align == "right")) {
      labelStyle.textAlign = this.props.align;
    }

    var wrap = false;

    if (typeof this.props.wrap == "boolean") {
      wrap = this.props.wrap;
    }

    if (wrap == true) {
      labelStyle.wordBreak = "break-all";
    }

    var id = this.props.id || _.uniqueId("label_");

    return React.createElement("span", {
      id: id,
      style: labelStyle
    }, displayText);
  } // life cycle event handlers

});
module.exports = Label;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(8);

var _ = __webpack_require__(1);
/**
 * Component that renders a drop down.
**/


var DropDown = React.createClass({
  displayName: "DropDown",
  // custom styles
  selectStyle: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    paddingLeft: 8,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    height: 28,
    fontFamily: "verdana",
    fontSize: 12,
    outline: "none"
  },
  optionStyle: {
    fontFamily: "verdana",
    fontSize: 12,
    color: "#333333"
  },
  // custom styles
  // custom methods
  handleChange: function handleChange(event) {
    this.setState({
      value: event.target.value
    });

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(event.target.value, event);
    }
  },

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    this.setState({
      isFocused: true
    });
  },
  // When the text box loses focus this function is called. It calls
  // the validator prop function if one is provided.
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });

    if (typeof this.props.validator == "function") {
      // create a new function from validator with the 'value' as an additional parameter.
      var validator = this.props.validator.bind(null, event.target.value);
      validator();
    }

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component. If the prop value is not supplied a unique identifier is added.
     */
    id: React.PropTypes.string,

    /**
     * An array of items that form the options inside the select. (passing a disabled property with value true will disable that option)
     */
    data: React.PropTypes.array.isRequired,

    /**
     * The name of the prop in the object that is associated with the value of the option.
     */
    valuePropName: React.PropTypes.string.isRequired,

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     * A function can also be passed in as the value of the prop in which case the function
     * will be called when rendering the text and the data item associated with the dropDown_
     * option will be passed in as an argument to the function. This is helpful when the value
     * to be displayed needs to be computed.
     */
    textPropName: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]).isRequired,

    /**
     * The value for the option that should be initially selected.
     */
    initialSelectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * The text that is added an another option to the top of the option list. Example, if the caption is "Select", then it will be the first item in the list and have an empty value.
     */
    caption: React.PropTypes.string,

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * Property to enable or disable the radio button. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Set this property value to true if you want the text box to receive automatic focus
     * when the component loads. For this to work, the id needs to be defined.
     */
    autoFocus: React.PropTypes.bool,

    /**
     * Size of the drop down component.
     * condition - use when the options in the drop down are 'if', 'and', 'or'
     * extasmall - use when the options in the drop down are 'after', 'before'
     * small - standard size of the drop down.
     * operator - use when the options in the drop down are 'equal to', 'not equal to' etc.
     * medium - larger size of the drop down component.
     */
    size: React.PropTypes.oneOf(["condition", "small", "extrasmall", "operator", "medium", "large"]),

    /**
     * Function called when the selected value of the drop down changes. The first parameter
     * is the value of the new selected item.
     */
    changeHandler: React.PropTypes.func
  },
  componentDidMount: function componentDidMount() {
    if (typeof this.props.autoFocus == "boolean" && this.props.autoFocus == true) {
      if (this.refs && this.refs[this.props.id]) {
        ReactDOM.findDOMNode(this.refs[this.props.id]).focus();
      }
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var triggerValidation = false;

    if (typeof newProps.triggerValidation == "boolean") {
      triggerValidation = newProps.triggerValidation;
    }

    if (triggerValidation == true && this.state.triggerValidationHappened == false) {
      if (typeof this.props.validator == "function") {
        // create a new function from validator with the 'initialSelectedValue' as an additional parameter.
        // this is done to accomodate composed components like the InputTableDropDownColumn
        // that append their own parameters to the validator function.
        this.props.validator.call(null, newProps.initialSelectedValue);
        this.setState({
          triggerValidationHappened: true
        });
      }
    }

    this.setState({
      value: newProps.initialSelectedValue
    });
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.initialSelectedValue,
      isFocused: false,
      triggerValidationHappened: false
    };
  },
  render: function render() {
    var _this = this;

    var disabled = false;

    if (typeof this.props.disabled == "boolean") {
      disabled = this.props.disabled;
    }

    var value = this.state ? this.state.value : this.props.initialSelectedValue;

    var id = this.props.id || _.uniqueId("dropDown_");

    var addCaption = function addCaption() {
      if (_this.props.caption && _this.props.caption.length > 0) {
        return React.createElement("option", {
          key: id + "_key_caption",
          value: "",
          style: _this.optionStyle
        }, _this.props.caption);
      } else {
        return null;
      }
    };

    var getOptions = function getOptions() {
      var options = [];

      if (_this.props.data && _this.props.valuePropName && _this.props.textPropName) {
        var caption = addCaption();

        if (caption) {
          options.push(caption);
        }

        if (_this.props.type == "sidebar") {
          _this.optionStyle.fontWeight = "normal";
          _this.optionStyle.color = "#346F8F";
        } else {
          _this.optionStyle.fontWeight = "normal";
          _this.optionStyle.color = "#333333";
        }

        options = options.concat(_this.props.data.map(function (dataItem, index, arr) {
          var text = null;

          if (typeof _this.props.textPropName == "function") {
            text = _this.props.textPropName(dataItem);
          } else if (typeof _this.props.textPropName == "string") {
            text = dataItem[_this.props.textPropName];
          }

          return React.createElement("option", {
            key: id + "_key_" + index,
            value: dataItem[_this.props.valuePropName],
            title: dataItem[_this.props.tooltipPropName],
            style: _this.optionStyle,
            disabled: dataItem.disabled ? "disabled" : ""
          }, text);
        }));
      }

      return options;
    };

    var selectStyle = this.selectStyle; // backgroundColor

    if (disabled == true) {
      selectStyle.backgroundColor = "#F3F3F3";
      selectStyle.backgroundImage = "none";
    } else {
      selectStyle.backgroundColor = "none";
      selectStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
    } // border


    selectStyle.boxShadow = "none";

    if (disabled == true) {
      if (this.props.required == true) {
        selectStyle.borderTop = "solid 1px #E3E3E3";
        selectStyle.borderRight = "solid 1px #E3E3E3";
        selectStyle.borderBottom = "solid 1px #E3E3E3";
        selectStyle.borderLeft = "solid 3px #F7901E";
      } else {
        selectStyle.borderTop = "solid 1px #E3E3E3";
        selectStyle.borderRight = "solid 1px #E3E3E3";
        selectStyle.borderBottom = "solid 1px #E3E3E3";
        selectStyle.borderLeft = "solid 1px #E3E3E3";
      }
    } else if (this.state.isFocused == true) {
      selectStyle.borderTop = "1px solid #64ADC2";
      selectStyle.borderRight = "1px solid #64ADC2";
      selectStyle.borderBottom = "1px solid #64ADC2";

      if (this.props.required == true) {
        selectStyle.borderLeft = "3px solid #F7901e";
      } else {
        selectStyle.borderLeft = "1px solid #64ADC2";
      }

      selectStyle.boxShadow = "0 0 4px #64ADC2";
    } else {
      if (this.props.required == true) {
        //if error message is there make the border orange
        if (this.props.validationMessage) {
          selectStyle.borderTop = "solid 1px #F76321";
          selectStyle.borderRight = "solid 1px #F76321";
          selectStyle.borderBottom = "solid 1px #F76321";
          selectStyle.borderLeft = "solid 3px #F7901E";
        } else {
          selectStyle.borderTop = "solid 1px #E3E3E3";
          selectStyle.borderRight = "solid 1px #E3E3E3";
          selectStyle.borderBottom = "solid 1px #E3E3E3";
          selectStyle.borderLeft = "solid 3px #F7901E";
        }
      } else {
        if (this.props.validationMessage) {
          selectStyle.borderTop = "solid 1px #F76321";
          selectStyle.borderRight = "solid 1px #F76321";
          selectStyle.borderBottom = "solid 1px #F76321";
          selectStyle.borderLeft = "solid 1px #F7901E";
        } else {
          selectStyle.borderTop = "solid 1px #E3E3E3";
          selectStyle.borderRight = "solid 1px #E3E3E3";
          selectStyle.borderBottom = "solid 1px #E3E3E3";
          selectStyle.borderLeft = "solid 1px #E3E3E3";
        }
      }
    }

    selectStyle.height = 28;
    selectStyle.fontWeight = "normal";
    selectStyle.color = "#333333";
    selectStyle.paddingLeft = 8;

    if (this.props.type == "sidebar") {
      selectStyle.height = 32;
      selectStyle.borderTop = "1px solid #64ADC2";
      selectStyle.borderRight = "1px solid #64ADC2";
      selectStyle.borderBottom = "1px solid #64ADC2";
      selectStyle.borderLeft = "1px solid #64ADC2";
      selectStyle.backgroundColor = "#F3F3F3";
      selectStyle.color = "#346F8F";
      selectStyle.fontSize = 12;
      selectStyle.fontWeight = "bold";
      selectStyle.fontFamily = "Verdana";
      selectStyle.paddingLeft = 12;
    } // size


    var width = 200; // default size - medium

    switch (this.props.size) {
      case "condition":
        width = 72;
        break;

      case "extrasmall":
        width = 100;
        break;

      case "small":
        width = 150;
        break;

      case "operator":
        width = 150;
        break;

      case "medium":
        width = 200;
        break;

      case "mediumToLarge":
        width = 400;
        break;

      case "large":
        width = 600;
        break;
    }

    if (this.props.type == "sidebar") {
      width = 200;
    }

    selectStyle.width = width;
    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var validationMessageStyle = {
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      marginTop: 4,
      height: 16,
      position: "absolute"
    };

    var getValidationMessageComponent = function getValidationMessageComponent() {
      if (_this.props.validationMessage != null && _this.props.validationMessage != undefined && _this.props.validationMessage.length > 0) {
        return React.createElement("span", {
          style: validationMessageStyle
        }, _this.props.validationMessage);
      } else {
        return null;
      }
    };

    return React.createElement("div", null, React.createElement("select", {
      id: id,
      ref: id,
      value: value,
      disabled: disabled,
      onChange: this.handleChange,
      tabIndex: tabIndex,
      style: selectStyle,
      onBlur: this.handleLostFocus,
      onFocus: this.handleFocus
    }, getOptions()), getValidationMessageComponent());
  } // lifecycle event handlers

});
module.exports = DropDown;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var PrimaryButton = __webpack_require__(10);

var PageFooter = __webpack_require__(21);
/**
 * Overlay component for showing confirmation dialog.
 */


var ConfirmationDialog = React.createClass({
  displayName: "ConfirmationDialog",
  dialogBackdrop: {
    backgroundColor: "#555",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1040,
    opacity: 0.8,
    display: "block"
  },
  modal: {
    backgroundColor: "#fff",
    fontSize: "12px",
    width: 610,
    position: "fixed",
    left: "calc(50% - 305px)",
    top: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 1050,
    border: "1px solid #CFCFCF",
    outline: "none"
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    height: 60,
    alignItems: "center"
  },
  headerTitle: {
    fontFamily: "verdana",
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333",
    width: "100%"
  },
  headerClose: {
    color: "#CACBCA",
    fontSize: 18,
    top: 2,
    position: "relative",
    cursor: "pointer",
    marginLeft: 20
  },
  body: {
    borderTop: "1px solid #E1E1E1"
  },
  messageStyle: {
    padding: "28px 20px 28px 20px",
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333333"
  },
  // styles
  // properties
  // properties
  // lifecycle event handlers
  propTypes: {
    /**
     * Toggle to show or hide the overlay. False by default.
     */
    show: React.PropTypes.bool.isRequired,

    /**
     * The type of overlay to show. Only behavior of type 'info' is currently implemented. When type is set to info the secondary button - cancel is hidden.
     * For all other types both the primary and secondary button are shown.
     * confirm: The behavior for confirm is not implemented yet.
     * save: The behavior for save is not implemented yet.
     * delete: The behavior for save is not implemented yet.
     * info: The secondary button (usually cancel) is hidden and only the primary button is displayed.
     */
    type: React.PropTypes.oneOf(['confirm', 'save', 'delete', 'info']),

    /**
     * Title of the Overlay.
     */
    headerText: React.PropTypes.string,

    /**
     * The message in the overlay.
     */
    message: React.PropTypes.string,

    /**
     * The text for the Primary button.
     */
    primaryButtonText: React.PropTypes.string,

    /**
     * The text for the cancel button.
     */
    cancelButtonText: React.PropTypes.string,

    /**
     * The id of the primary button on the confirmation dialog. If not provided a unique id will be used.
     */
    primaryButtonId: React.PropTypes.string,

    /**
     * The id of the cancel button on the confirmation dialog. If not provided a unique id will be used.
     */
    cancelButtonId: React.PropTypes.string,

    /**
     * Handler to be passed into the component. It is called when the confirm button is clicked.
     */
    confirmClickHandler: React.PropTypes.func,

    /**
     * Handler called when the cancel button is clicked.
     */
    cancelClickHandler: React.PropTypes.func,

    /**
     * Boolean that enables or disables the primary button.
     */
    primaryButtonEnabled: React.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      type: "confirm"
    };
  },
  getInitialState: function getInitialState() {
    var showOverlay = false;

    if (typeof this.props.show == "boolean") {
      showOverlay = this.props.show;
    }

    return {
      show: showOverlay
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (typeof newProps.show == "boolean") {
      this.setState({
        show: newProps.show
      });
    }
  },
  render: function render() {
    var _this = this;

    var confirmClickHandler = function confirmClickHandler(event) {
      if (typeof _this.props.confirmClickHandler == "function") {
        _this.props.confirmClickHandler();
      }

      event.stopPropagation();
    };

    var cancelClickHandler = function cancelClickHandler(event) {
      _this.setState({
        show: false
      }, function () {
        if (typeof _this.props.cancelClickHandler == "function") {
          _this.props.cancelClickHandler();
        }
      });

      event.stopPropagation();
    };

    var primaryButtonText = this.props.primaryButtonText || "[Ok]";

    var primaryButtonId = this.props.primaryButtonId || _.uniqueId("confirmationDialogPrimaryButton_");

    var cancelButtonId = this.props.cancelButtonId || _.uniqueId("confirmationDialogCancelButton_");

    var id = this.props.id || _.uniqueId("confirmationDialog_");
    /**
     * Function to render the body of the dialog. We are going to overload this dialog to either
     * display a confirmation message or display the children of the dialog - which can be a form like behavior.
     */


    var renderBody = function renderBody() {
      if (_this.props.message && _this.props.message.length > 0) {
        return React.createElement("div", {
          style: _this.messageStyle
        }, _this.props.message);
      } else {
        return React.createElement("div", null, _this.props.children);
      }
    };

    if (this.state.show == false) {
      return null;
    } else {
      return React.createElement("div", {
        id: id
      }, React.createElement("div", {
        style: this.dialogBackdrop
      }), React.createElement("div", {
        style: this.modal
      }, React.createElement("div", {
        style: this.header
      }, React.createElement("div", {
        style: this.headerTitle
      }, this.props.headerText), React.createElement("i", {
        className: "fa fa-times",
        style: this.headerClose,
        onClick: cancelClickHandler
      })), React.createElement("div", {
        style: this.body
      }, renderBody()), React.createElement(PageFooter, {
        type: "dialog"
      }, React.createElement(PageFooter.RightPane, null, this.props.type == 'info' ? null : React.createElement(SecondaryButton, {
        id: cancelButtonId,
        text: this.props.cancelButtonText || "[Cancel]",
        icon: "fa fa-times-circle-o",
        clickHandler: cancelClickHandler
      }), React.createElement(PrimaryButton, {
        id: primaryButtonId,
        inline: true,
        enabled: this.props.primaryButtonEnabled,
        text: primaryButtonText,
        clickHandler: confirmClickHandler
      })))));
    }
  } // lifecycle event handlers

});
module.exports = ConfirmationDialog;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Mixin components - helper functions used by React components
var React = __webpack_require__(0);

var HelperActionsMixins = {
  /**
   * Function that determines if the argument passed in an integer
   * @param {String} value The value that we want to check if it is an integer
   */
  isInteger: function isInteger(value) {
    return typeof value === "number" && value % 1 === 0;
  },

  /**
   * truncate the text to the length denoted by the maxLength
   * Optionally pass in a buffer length to truncate aggressively
   * e.g. if the maxLength is 30, buffer is 5 and the string length is 31, then we want to truncate after 25
   * characters to prevent scenario where we truncated just 1 character.
   * @param {String} text The string that needs to be truncated
   * @param {Number} maxLength The integer that is the max length after which truncation occurs
   * @param {Number} buffer Buffer that decides how agressive the truncation algorithm is
   */
  truncate: function truncate(text, maxLength, buffer) {
    var truncatedText = text;
    var minusMaxLength = 5;

    if (truncatedText && truncatedText.length > 0 && this.isInteger(maxLength) && truncatedText.length > maxLength) {
      if (!buffer || typeof buffer !== 'number') {
        buffer = 0;
      }

      var rangeStart = maxLength,
          rangeEnd = maxLength + buffer;

      if (truncatedText.length < rangeEnd) {
        truncatedText = truncatedText.substr(0, rangeStart - minusMaxLength) + "...";
      } else {
        truncatedText = truncatedText.substr(0, rangeStart) + "...";
      }
    }

    return truncatedText;
  }
};
module.exports = HelperActionsMixins;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);
/**
 * Component that renders a standard radio button
 */


var RadioButton = React.createClass({
  displayName: "RadioButton",
  // styles
  inputStyle: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 8,
    height: 12,
    width: 12,
    verticalAlign: "middle",
    outline: 'none'
  },
  enabledLabelStyle: {
    fontWeight: "normal",
    cursor: "pointer",
    fontFamily: "verdana",
    fontSize: 12,
    display: "inline"
  },
  disabledLabelStyle: {
    fontWeight: "normal",
    cursor: "not-allowed",
    fontFamily: "verdana",
    fontSize: 12,
    display: "inline"
  },
  // styles
  // custom methods
  handleChange: function handleChange(event) {
    this.setState({
      isChecked: event.target.checked == true ? true : null
    });

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(event.target.checked, this.props.value, event);
    }
  },
  // custom methods
  // lifecycle event handlers
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      isChecked: newProps.checked
    });
  },
  getInitialState: function getInitialState() {
    var isChecked = false;

    if (typeof this.props.checked == "boolean") {
      isChecked = this.props.checked;
    }

    return {
      isChecked: isChecked
    };
  },
  propTypes: {
    /**
     * Text to display next to the radio button.
     */
    text: React.PropTypes.string,

    /**
     * ID for the component.
     */
    id: React.PropTypes.string,

    /**
     * Property to enable or disable the radio button.
     */
    disabled: React.PropTypes.bool,

    /**
     * The value associated with the radio button.
     */
    value: React.PropTypes.string,

    /**
     * Handler for the change event. The arguments passed into the handlers
     * are a boolean indicating whether the radio button was selected, a string
     * that represents the value of the radio button and the event object.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Tooltip to show on the radio button.
     */
    tooltip: React.PropTypes.string,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.number
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("radioButton_");

    var style = {
      display: "block",
      paddingBottom: 4
    };

    if (this.props.type == "inputTableRadioButtonColumn") {
      style = {
        marginRight: 28,
        display: "block",
        paddingBottom: 4,
        paddingTop: 5
      };
    } else {
      style = {
        display: "block",
        paddingBottom: 4
      };
    }

    var labelStyle = function labelStyle() {
      if (_this.props.disabled == true) {
        return _this.disabledLabelStyle;
      }

      return _this.enabledLabelStyle;
    };

    var addLabel = function addLabel() {
      if (_this.props.text != null && _this.props.text != undefined && _this.props.text.length > 0) {
        return React.createElement("label", {
          style: labelStyle(),
          title: _this.props.tooltip,
          htmlFor: id
        }, _this.props.text);
      } else {
        return null;
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    return React.createElement("span", {
      style: this.props.layout == 'horizontal' ? {
        marginRight: 28
      } : {
        display: "block",
        paddingBottom: 4
      }
    }, React.createElement("input", {
      id: id,
      style: this.inputStyle,
      tabIndex: tabIndex,
      name: this.props.groupName,
      type: "radio",
      disabled: this.props.disabled,
      title: this.props.tooltip,
      value: this.props.value,
      checked: this.state.isChecked,
      onChange: this.handleChange
    }), addLabel());
  } // lifecycle event handlers

});
module.exports = RadioButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);
/**
 * Component for displaying a button on a table row when the user hovers over the row. This component is a child of the ActionButtons component.
 */


var ActionButton = React.createClass({
  displayName: "ActionButton",
  // styles
  // styles
  // custom methods
  clickHandler: function clickHandler(event) {
    if (typeof this.props.clickHandler == "function") {
      this.props.clickHandler(this.props.rowData, event);
    }

    event.stopPropagation();
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Function handler for the button click event.
     * The row data item is passed in as the first argument and the click event object as the second argument to the handler. 
     */
    clickHandler: React.PropTypes.func,

    /**
     * CSS class for icon. Example "fa fa-database" for the font-awesome icon.
     */
    icon: React.PropTypes.string,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Sets whether the button is enabled or not. This takes precedence over the enabledPropName prop.
     */
    enabled: React.PropTypes.bool,

    /**
     * The name of the prop in the data object that denotes the enabled status of the button. The prop value should be boolean.
     */
    enabledPropName: React.PropTypes.string,

    /**
     * Sets whether the button is visible or not. This takes precedence over the visiblePropName prop. Default is true.
     */
    visible: React.PropTypes.bool,

    /**
     * The name of the prop in the data object that decides whether the button is visible or not. The prop value will be evaluated to the conditions specified
     *   in the field visiblePropCondition below.
     */
    visiblePropName: React.PropTypes.string,

    /**
     * The condition to be applie to the visiblePropName field above to determine whether the action buttons is visible or not.
     */
    visiblePropCondition: React.PropTypes.string
  },
  render: function render() {
    var id = this.props.id || _.uniqueId("actionButton_");

    var name = null;
    var isEnabled = true;

    if (typeof this.props.enabled == "boolean") {
      isEnabled = this.props.enabled;
    } else if (this.props.rowData && this.props.enabledPropName) {
      isEnabled = this.props.rowData[this.props.enabledPropName];
    }

    var isVisible = true;

    if (typeof this.props.visible == "boolean") {
      isVisible = this.props.visible;
    } else if (this.props.rowData && this.props.visiblePropName && this.props.visiblePropCondition) {
      isVisible = eval("this.props.rowData[this.props.visiblePropName]" + this.props.visiblePropCondition);
    }

    if (isVisible == true) {
      return React.createElement(SecondaryButton, {
        name: name,
        id: id,
        icon: this.props.icon,
        text: this.props.text,
        type: "actionButton",
        clickHandler: this.clickHandler,
        enabled: isEnabled
      });
    } else {
      return null;
    }
  } // lifecycle event handlers

});
module.exports = ActionButton;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var ReactTooltip = __webpack_require__(48);

__webpack_require__(109);
/**
 * The HelpDialog component is used to display help information as a flyout
 * from a 'i' icon.
 */


var HelpDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HelpDialog, _React$Component);

  function HelpDialog(props) {
    _classCallCheck(this, HelpDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelpDialog).call(this, props));
  }

  _createClass(HelpDialog, [{
    key: "render",
    value: function render() {
      var _this = this;

      var id = _.uniqueId("helpDialog_");

      var getToolTipBody = function getToolTipBody() {
        if (_this.props.children) {
          return _this.props.children;
        } else {
          return "Please insert the required display info here";
        }
      };

      return React.createElement("div", {
        className: "helpDialogContainerStyle"
      }, React.createElement("a", {
        className: "icon"
      }, React.createElement("i", {
        "data-tip": true,
        "data-for": id,
        className: "fa fa-info-circle"
      })), React.createElement(ReactTooltip, {
        id: id,
        class: "tooltipTheme",
        effect: this.props.effect,
        type: this.props.type,
        place: this.props.place
      }, getToolTipBody()));
    }
  }]);

  return HelpDialog;
}(React.Component);

HelpDialog.propTypes = {
  /**
   * position where the tip has to be shown
   */
  place: React.PropTypes.oneOf(["top", "bottom", "right", "left"]),

  /**
   * String that shown at the top left corner
   */
  type: React.PropTypes.oneOf(["dark", "success", "warning", "error", "info", "light"]),

  /**
   * String that shown at the top left corner
   */
  effect: React.PropTypes.oneOf(["solid", "float"])
};
module.exports = HelpDialog;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Solution form this blog: http://geniuscarrier.com/how-to-style-a-html-file-upload-button-in-pure-css/
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var FileUploadStyles = __webpack_require__(4).fileUpload;

var TextBox = __webpack_require__(5);
/**
 * Component for file upload.
 */


var FileUpload = React.createClass({
  displayName: "FileUpload",
  // styles
  primaryButtonStyle: function primaryButtonStyle() {
    return _.extend({
      cursor: "default",
      color: "#CFCFCF",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, FileUploadStyles.buttonBaseStyle);
  },
  primaryButtonEnabledStyle: function primaryButtonEnabledStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#285C7E",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, FileUploadStyles.buttonBaseStyle);
  },
  primaryButtonEnabledHoverStyle: function primaryButtonEnabledHoverStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#203a4a",
      border: "1px solid #c9c9c9",
      background: "linear-gradient(180deg, #E3E3E3, #CDDDE6)"
    }, FileUploadStyles.buttonBaseStyle);
  },
  // styles
  changeHandler: function changeHandler(event) {
    this.setState({
      fileName: event.target.files[0].name
    });

    if (typeof this.props.changeEventHandler == "function") {
      this.props.changeEventHandler(event.target.files, event);
    }
  },
  propTypes: {
    /**
     * The id of the component.
     */
    id: React.PropTypes.string,

    /**
     * The text to display on the button.
     */
    buttonText: React.PropTypes.string,

    /**
     * The text to display in the input box as a placeholder.
     */
    placeholder: React.PropTypes.string,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Set this prop value to a string of comma delimited allowed extensions and file types.
     * e.g. .csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
     */
    acceptParams: React.PropTypes.string,

    /**
     * When a file is selected and the function assigned to this prop is called.
     * The parameters are the list of files and the event object.
     */
    changeEventHandler: React.PropTypes.func
  },

  /**
   * We need to set the enabled state when the enabled props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var enabled = newProps.enabled == false ? false : true;

    if (enabled != this.state.enabled) {
      this.setState({
        enabled: enabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var enabled = this.props.enabled == false ? false : true;
    return {
      enabled: enabled,
      // value set by prop because it is the default value
      showHover: false,
      fileName: null
    };
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("fileUpload_");

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.enabled == false) {
        buttonStyle = _this.primaryButtonStyle();
      } else {
        if (_this.state.showHover == true) {
          buttonStyle = _this.primaryButtonEnabledHoverStyle();
        } else {
          buttonStyle = _this.primaryButtonEnabledStyle();
        }
      }

      return buttonStyle;
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }
    /**
     * Function called when the mouse enters the button
     */


    var showHover = function showHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: true
        });
      }
    };
    /**
     * Function called when the mouse leaves the button
     */


    var hideHover = function hideHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: false
        });
      }
    };

    var clickHandler = function clickHandler(event) {
      if (_this.state.enabled == true) {
        event.preventDefault();
      }
    };
    /**
     * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
     * The value of the textbox along with the keyPress event is passed to the function.
     */


    var handleEnterPress = function handleEnterPress(event) {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        _this.refs.fileToUpload.click();
      }
    };

    return React.createElement("div", {
      style: FileUploadStyles.fileUploadContainerStyle
    }, React.createElement(TextBox, {
      id: "fileDisplay",
      placeholder: this.props.placeholder,
      disabled: true,
      hideValidation: true,
      width: 200,
      value: this.state.fileName
    }), React.createElement("div", {
      style: currentStyle(),
      onMouseEnter: showHover,
      onMouseLeave: hideHover,
      onKeyDown: handleEnterPress
    }, React.createElement("span", {
      style: FileUploadStyles.textStyle
    }, this.props.buttonText), React.createElement("input", {
      type: "file",
      id: id,
      ref: "fileToUpload",
      onChange: this.changeHandler,
      style: FileUploadStyles.inputFileStyle,
      accept: this.props.acceptParams
    })));
  }
});
module.exports = FileUpload;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component for a list view layout. Contains a title section, left nav and content section
 * The title section has a title and optional buttons section that is used on overlays
 * The left nav can contain filter or search sections
 * The content section contains a list
 * @param {Boolean} hideFrame When set to true it removes the margin, shadow and the border radius so that it can be used inside a layover. Default false
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var ListPage = React.createClass({
  displayName: "ListPage",
  // styles
  pageContainerStyle: {
    position: "relative",
    minWidth: 825,
    height: "100%",
    display: "table",
    width: "100%",
    overflow: "hidden"
  },
  pageContainerStyleWithFrame: {
    margin: 0,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    position: "relative",
    minWidth: 925,
    border: "1px solid #DAE0E3"
  },
  // styles
  // lifecycle event handlers
  render: function render() {
    var listPageStyle = this.pageContainerStyleWithFrame;

    if (this.props.hideFrame === true) {
      listPageStyle = this.pageContainerStyle;
    }

    var id = this.props.id || _.uniqueId("listPage_");

    return React.createElement("div", {
      id: id,
      style: listPageStyle
    }, this.props.children);
  } // lifecycle event handlers

});
module.exports = ListPage;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component container for a list. Goes inside the PageBody component
 */
var React = __webpack_require__(0);

var ListPane = React.createClass({
  displayName: "ListPane",
  // styles
  listPaneContainerStyle: {
    display: "table-cell",
    width: "100%",
    verticalAlign: "top",
    backgroundColor: "#FFF",
    paddingLeft: 25,
    paddingTop: 36,
    paddingRight: 25,
    paddingBottom: 25
  },
  listPaneContainerStyle_alt: {
    display: "table-cell",
    width: "100%",
    verticalAlign: "top",
    backgroundColor: "#FFF",
    paddingLeft: 25,
    paddingTop: 17,
    paddingRight: 25,
    paddingBottom: 0
  },
  // styles
  // lifecycle event handlers
  render: function render() {
    var listPaneStyle = this.listPaneContainerStyle;

    if (this.props.alternateHeight === true) {
      listPaneStyle = this.listPaneContainerStyle_alt;
    }

    var id = this.props.id || "listPane";
    return React.createElement("div", {
      id: id,
      style: listPaneStyle
    }, this.props.children);
  } // lifecycle event handlers

});
module.exports = ListPane;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Wrapper for the React-modal library component. Wrapper will allow us to swap the underlying 3rd party component in the future
 * without changing any of the clients using the component. The overlay closes when the escape key is pressed.
 * It does not close when the user clicks anywhere outside the overlay except for the top menu.
 * Uses: https://www.npmjs.com/package/react-modal
 * @param {Boolean} modalIsOpen Determines if the modal dialog is open or close
 */
var React = __webpack_require__(0);

var Modal = __webpack_require__(130);

var _ = __webpack_require__(1);

var ModalDialog = React.createClass({
  displayName: "ModalDialog",
  // styles
  modalStyle: {
    overlay: {
      backgroundColor: "rgba(85, 85, 85, 0.8)"
    },
    content: {
      margin: "0px auto 0px auto",
      height: 528,
      width: 948,
      padding: 0,
      borderRadius: "0px 0px 8px 8px",
      overflowY: "hidden",
      overflowX: "auto"
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The size of the component.
     */
    size: React.PropTypes.oneOf(["small", "large"])
  },
  getDefaultProps: function getDefaultProps() {
    return {
      size: "small"
    };
  },
  getInitialState: function getInitialState() {
    var showDialog = false;

    if (typeof this.props.modalIsOpen == "boolean") {
      showDialog = this.props.modalIsOpen;
    }

    return {
      modalIsOpen: showDialog
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      modalIsOpen: newProps.modalIsOpen
    });
  },
  render: function render() {
    // check if zIndex is set.
    var zIndex = null;

    if (typeof this.props.zIndex == "number") {
      zIndex = this.props.zIndex;
    }

    if (zIndex != null) {
      this.modalStyle.overlay.zIndex = zIndex;
    } // check if size prop is large.


    if (this.props.size == "large") {
      this.modalStyle.content.height = "90%";
      this.modalStyle.content.width = "90%";
    } else {
      this.modalStyle.content.height = 528;
      this.modalStyle.content.width = 948;
    }

    return React.createElement(Modal, {
      isOpen: this.state.modalIsOpen,
      shouldCloseOnOverlayClick: false,
      style: this.modalStyle,
      contentLabel: "Modal"
    }, this.props.children);
  } // lifecycle event handlers

});
module.exports = ModalDialog;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component for displaying the header for the list page and form page
 * Contains the title to the left and a container for buttons to the right
 * The buttons are used on overlays
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var PageHeader = React.createClass({
  displayName: "PageHeader",
  // styles
  pageHeaderStyle: {
    padding: "0px 20px 0px 20px",
    backgroundColor: "#eef3f6",
    height: 64,
    borderBottom: "1px solid #E1E1E1"
  },
  titleStyle: {
    float: "left",
    fontFamily: "verdana",
    fontSize: 26,
    fontWeight: "normal",
    color: "#333333",
    display: "flex",
    alignItems: "center",
    height: 64
  },
  buttonStyle: {
    display: "flex",
    alignItems: "center"
  },
  clearStyle: {
    float: "clear"
  },

  /**
   * The style applied to the button wrapper
   */
  buttonContainerStyle: {
    paddingLeft: 16
  },
  // styles
  render: function render() {
    var _this = this;

    if (this.props.isMenu != undefined && this.props.isMenu == true) {
      this.buttonStyle.float = 'none';
      this.buttonStyle.height = 77;
    } else {
      this.buttonStyle.float = 'right';
      this.buttonStyle.height = 68;
    }

    var id = this.props.id || _.uniqueId("pageHeader_");
    /**
     * Add the button container only if there are buttons to render.
     */


    var renderButtonContainer = function renderButtonContainer() {
      if (React.Children.count(_this.props.children) > 0) {
        return React.createElement("div", {
          style: _this.buttonStyle
        }, renderButtons());
      } else {
        return null;
      }
    };
    /**
     * Wrap each button into a div with a bottom left to space each
     * button from each other.
     */


    var renderButtons = function renderButtons() {
      return React.Children.map(_this.props.children, function (child) {
        if (child) {
          return React.createElement("div", {
            style: _this.buttonContainerStyle
          }, React.cloneElement(child));
        }
      });
    };

    return React.createElement("div", {
      id: id,
      style: this.pageHeaderStyle
    }, React.createElement("div", {
      "data-component-name": "PageHeaderTitle",
      "data-component-type": "Label",
      style: this.titleStyle
    }, this.props.title), renderButtonContainer(), React.createElement("div", {
      style: this.clearStyle
    }));
  }
});
module.exports = PageHeader;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component for the body of the list page. This is a container that
 * can contain a side bar and a list
 */
var React = __webpack_require__(0);

var pageBodyContainerStyle = {
  backgroundColor: "#fff",
  display: "table",
  width: "100%"
};
var PageBody = React.createClass({
  displayName: "PageBody",
  render: function render() {
    var id = this.props.id || "pageBody";
    return React.createElement("div", {
      id: id,
      style: pageBodyContainerStyle
    }, this.props.children);
  }
});
module.exports = PageBody;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component that groups radio buttons together so that only one option can be selected at a time.
 * Also offers a helper change handler that triggers when the selection changes.
 * @param {String} groupName The name attribute for each child radio button. This ensures that only
 *                           radio button can be selected at a time
 * @param {Function} changeHandler Function that is triggered when any of the child radio buttons
 *                                 selection changes. The selected radio button value is passed to
 *                                 the function as a parameter
 * @param {String} initialSelectedValue Set this prop to the value of the radio button you want selected by default
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * The radio button group will typically be found in a sidebar of a List Page or Modal Dialog that has a list. Radio buttons are used to filter the items shown in the list.
 */


var RadioButtonGroup = React.createClass({
  displayName: "RadioButtonGroup",
  // custom methods
  handleChange: function handleChange(checked, value, event) {
    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(value, event);
    }

    this.setState({
      selectedValue: value
    });
  },
  // custom methods
  // lifecycle event handlers
  getInitialState: function getInitialState() {
    return {
      selectedValue: this.props.initialSelectedValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      selectedValue: nextProps.initialSelectedValue
    });
  },
  render: function render() {
    var _this = this;

    var getRadioButtonArray = function getRadioButtonArray() {
      var groupName = _this.props.groupName || _.uniqueId("radioButtonGroupName_");

      var radioButtonArray = React.Children.map(_this.props.children, function (child) {
        var isChecked = false;
        var childValue = child.props.value;

        if (childValue == _this.state.selectedValue || !!childValue && !!_this.state.selectedValue && childValue.toString() == _this.state.selectedValue.toString()) {
          isChecked = true;
        }

        return React.cloneElement(child, {
          changeHandler: _this.handleChange,
          groupName: groupName,
          checked: isChecked
        });
      }, _this);
      return radioButtonArray;
    };

    var id = this.props.id || _.uniqueId("radioButtonGroup_");

    return React.createElement("div", {
      id: id
    }, getRadioButtonArray());
  }
});
module.exports = RadioButtonGroup;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Row that acts as the 'details' row which is invisible by default. The corresponding 'master' row
 * controls the visibility of this row with the click on the master row.
 * @param {Boolean} visible If true the row is visible, else invisible
 * @param {Object} rowData The data item bound to this row
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TableRow = __webpack_require__(20);

var TableDetailRow = React.createClass({
  displayName: "TableDetailRow",
  render: function render() {
    var id = _.uniqueId("tableDetailRowId_");

    if (typeof this.props.dataIndex == "number" && typeof this.props.dataRowIndex == "number") {
      id = "tableDetailRow" + this.props.dataRowIndex + "." + this.props.dataIndex;
    }

    return React.createElement(TableRow, {
      id: id,
      rowData: this.props.rowData,
      type: "detail",
      visible: this.props.visible,
      isExpanded: this.props.isExpanded,
      dataIndex: this.props.dataIndex,
      rowClickHandler: this.props.rowClickHandler,
      rowSelectionEnabled: this.props.rowSelectionEnabled
    }, this.props.children);
  }
});
module.exports = TableDetailRow;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ActionButton = __webpack_require__(27);

__webpack_require__(96);
/**
 * Shows the specified buttons (ActionButton children) on the row when the mouse is moved over the row. Children are of type ActionButton.
 */


var ActionButtons = React.createClass({
  displayName: "ActionButtons",
  // styles
  actionButtonsContainerStyle: {
    backgroundColor: "#EDF3F5",
    border: "1px solid #ddd",
    borderRadius: 5,
    boxShadow: "2px 2px 2px #bbb",
    position: "absolute",
    right: 2,
    top: 1,
    whiteSpace: "nowrap"
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The data item object assigned to the row.
     */
    rowData: React.PropTypes.object,
    children: React.PropTypes.arrayOf(React.PropTypes.element)
  },

  /**
   * We need to nest multiple divs inside a td, because a td will not honor the style
   * position: relative. So we have to place a div inside the td, set its style
   * position to relative and then insert another div inside with position set to
   * absolute so that the hover buttons can float on top of the row.
   */
  render: function render() {
    var _this = this;

    var firstActionButtonContainerStyle = {
      display: "inline-block",
      borderLeft: 0,
      paddingLeft: 6,
      paddingRight: 6,
      height: 24
    };
    var restActionButtonContainerStyle = {
      display: "inline-block",
      borderLeft: "1px solid #DDD",
      paddingLeft: 6,
      paddingRight: 6,
      height: 24
    };

    var renderChildren = function renderChildren() {
      return React.Children.map(_this.props.children, function (child, index, arr) {
        var isVisible = true;

        if (typeof child.props.visible == "boolean") {
          isVisible = child.props.visible;
        } else if (_this.props.rowData && child.props.visiblePropName && child.props.visiblePropCondition) {
          isVisible = eval("this.props.rowData[child.props.visiblePropName]" + child.props.visiblePropCondition);
        }

        if (isVisible) {
          var actionButtonContainerStyle = firstActionButtonContainerStyle;

          if (index > 0) {
            actionButtonContainerStyle = restActionButtonContainerStyle;
          }

          return React.createElement("div", {
            style: actionButtonContainerStyle
          }, React.cloneElement(child, {
            rowData: _this.props.rowData
          }));
        }
      }, _this);
    };

    var actionButtonContainer = function actionButtonContainer() {
      var isVisible = true;

      if (typeof _this.props.visible === 'boolean') {
        isVisible = _this.props.visible;
      }

      var actionButtonsStyle = "ActionButtons_hide";

      if (isVisible === true) {
        actionButtonsStyle = "ActionButtons_show";
      }

      return React.createElement("div", {
        style: {
          position: "relative"
        }
      }, React.createElement("div", {
        style: _this.actionButtonsContainerStyle,
        className: actionButtonsStyle
      }, renderChildren()));
    };

    var containerStyle = {
      position: 'absolute'
    };
    return React.createElement("td", {
      style: containerStyle
    }, actionButtonContainer());
  } // lifecycle event handlers

});
module.exports = ActionButtons;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    border: 2px solid #E1E1E1;\n    border-radius: 5px;\n    padding-top: 8px;\n    padding-bottom: 6px;\n    position: relative;\n    background: white;\n\n    &:after, &:before {\n\t    border-left: 8px solid transparent;\n\t    border-right: 8px solid transparent;\n\t    border-bottom: 8px solid white;\n\t    top: -8px;\n\t    content: '';\n\t    margin-left: ", ";\n\t    position: absolute;\n  \t}\n\n\t&:before {\n\t    border-left: 11px solid transparent;\n\t    border-right: 11px solid transparent;\n\t    border-bottom: 11px solid;\n\t    border-bottom-color: #E1E1E1; \n\t    top: -11px;\n\t    margin-left: ", ";\n\t}  \t\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// A Balloon styled component (with an up arrow) that takes in a size and an arrowLocation properties
var React = __webpack_require__(0);

var PropTypes = __webpack_require__(101);

var styled = __webpack_require__(28).default;

var Balloon = styled.div(_templateObject(), function (props) {
  return props.size + "px";
}, function (props) {
  if (props.arrowLocation == "left") return "30px";else if (props.arrowLocation == "center") return props.size / 2 - 5 + "px";else if (props.arrowLocation == "right") return props.size - 32 + "px";else if (props.arrowLocation >= 0) return props.arrowLocation + "px";else return props.size + props.arrowLocation + "px";
}, function (props) {
  if (props.arrowLocation == "left") return "28px";else if (props.arrowLocation == "center") return props.size / 2 - 7 + "px";else if (props.arrowLocation == "right") return props.size - 34 + "px";else if (props.arrowLocation >= 0) return props.arrowLocation - 2 + "px";else return props.size + props.arrowLocation - 2 + "px";
});

var BalloonContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BalloonContainer, _React$Component);

  function BalloonContainer() {
    _classCallCheck(this, BalloonContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BalloonContainer).apply(this, arguments));
  }

  _createClass(BalloonContainer, [{
    key: "render",
    value: function render() {
      if (this.props.show) return React.createElement(Balloon, {
        id: this.props.id,
        size: this.props.size || 200,
        arrowLocation: this.props.arrowLocation || "center"
      }, this.props.children);else return null;
    }
  }]);

  return BalloonContainer;
}(React.Component);

BalloonContainer.propTypes = {
  /**
   * id
   */
  id: PropTypes.string,

  /**
   * Width of the container
   */
  size: PropTypes.number,

  /**
   * Where to place the arrowhead? Can be one the 3 pre-defined locations or a number:
   * a positive number denotes the number of pixels from the left edge of the container, while a negative number denotes the number of pixels from the right edge of the container
   */
  arrowLocation: PropTypes.oneOfType([PropTypes.oneOf(['left', 'center', 'right']), PropTypes.number])
};
module.exports = BalloonContainer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var CheckBox = __webpack_require__(9);
/**
 * Component where several CheckBox components can be grouped together.
 */


var CheckBoxGroup = React.createClass({
  displayName: "CheckBoxGroup",
  // custom properties
  checkBoxArray: [],
  // custom methods
  handleChange: function handleChange(checked, value, event) {
    if (checked == true) {
      this.state.checkedValues.push(value);
    } else {
      this.state.checkedValues.splice(this.state.checkedValues.indexOf(value), 1);
    }

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(this.state.checkedValues, event);
    }
  },
  handlePropsUpdateChange: function handlePropsUpdateChange(checked, value) {
    if (checked && this.state.checkedValues.indexOf(value) === -1) {
      this.state.checkedValues.push(value);
    } else if (!checked && this.state.checkedValues.indexOf(value) !== -1) {
      this.state.checkedValues.splice(this.state.checkedValues.indexOf(value), 1);
    }
  },
  // custom methods
  // lifecycle event handlers
  getInitialState: function getInitialState() {
    var checkedValues = [];
    React.Children.map(this.props.children, function (child) {
      if (child.props.defaultChecked == true) {
        checkedValues.push(child.props.value);
      }
    }, this);
    return {
      checkedValues: checkedValues
    };
  },

  /* This validation generates a warning from React about not using CheckBox directly, instead
   * use factory or JSX. One option could be to just check for the displayName inside a custom
   * validation function
   */
  propTypes: {
    /**
     * Function that is triggered when any of the child checkbox items state is changed. 
     * The function is passed an array of checked values
     */
    changeHandler: React.PropTypes.func
  },
  render: function render() {
    var _this = this;

    var getCheckBoxArray = function getCheckBoxArray() {
      return React.Children.map(_this.props.children, function (child) {
        return React.cloneElement(child, {
          changeHandler: _this.handleChange,
          propsUpdateHandler: _this.handlePropsUpdateChange
        });
      });
    };

    var id = this.props.id || _.uniqueId("checkBoxGroup_");

    return React.createElement("div", {
      id: id
    }, getCheckBoxArray());
  } // lifecycle event handlers

});
module.exports = CheckBoxGroup;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var DatePicker = __webpack_require__(102);

var moment = __webpack_require__(29);

var DateControlInput = __webpack_require__(45);

var SearchBoxStyles = __webpack_require__(4).searchBox;

__webpack_require__(104);

var DATE_FORMAT = "YYYY-MM-DD";
var DateControl = React.createClass({
  propTypes: {
    /**
     * The date that should be preselected. The date should be in YYYYMMDD format.
     */
    selectedDate: React.PropTypes.string,

    /**
     * The start boundary of the date control. A user cannot select a date before the minDate.
     * Date format is "YYYYMMDD".
     */
    minDate: React.PropTypes.string,

    /**
     * The end boundary of the date control. A user cannot select a date after the maxDate.
     * Date format is "YYYYMMDD".
     */
    maxDate: React.PropTypes.string,

    /**
     * The format of the date that will be displayed.
     */
    dateFormat: React.PropTypes.string,

    /**
     * Show the dropdown for the month picker. Default is true.
     */
    showMonthDropdown: React.PropTypes.bool,

    /**
     * Show the dropdown for the year picker. Default is true.
     */
    showYearDropdown: React.PropTypes.bool,

    /**
     * Hide the text part of the Date Control. Only shows the calendar icon.
     */
    hideDateDisplay: React.PropTypes.bool,

    /**
     * When set to true, the button that lets the user clear the date is hidden. Useful when the user should be forced to select a date.
     */
    hideClearButton: React.PropTypes.bool,

    /**
     * When set to true and selectedDate is null, the initial date will be set to none; otherwise it will be set to today's date
     */
    initialEmpty: React.PropTypes.bool,

    /**
     * Property to enable or disable the date control. Default is false.
     */
    disabled: React.PropTypes.bool,

    /**
     * Property that disables the user input for the date control. Default is false.
     */
    inputDisabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selected date.
     */
    validator: React.PropTypes.func,

    /**
     * Function called when the date is changed. The function parameter is the date string in the YYYYMMDD format.
     */
    dateChangedHandler: React.PropTypes.func,

    /**
     * user provided validation message style
     */
    validationMessageStyle: React.PropTypes.object
  },
  displayName: 'DateControl',
  getDefaultProps: function getDefaultProps() {
    return {
      dateFormat: "YYYY-MM-DD",
      minDate: "1970-01-01",
      maxDate: "2035-12-31"
    };
  },
  getInitialState: function getInitialState() {
    console.log('in version 1.0.8');
    startDate = null;

    if (!this.props.initialEmpty || this.props.selectedDate) {
      // try to create a moment from the selectedDate props
      var startDate = moment(); // todays date

      var selectedDateMoment = moment(this.props.selectedDate, DATE_FORMAT);

      if (selectedDateMoment.isValid() == true) {
        startDate = selectedDateMoment;
      }
    }

    return {
      startDate: startDate,
      validationMessage: null
    };
  },
  handleChange: function handleChange(date) {
    var _this = this;

    this.setState({
      startDate: date
    }, function () {
      if (typeof _this.props.dateChangedHandler == "function") {
        var startDateString = null;

        if (_this.state.startDate) {
          // Could be null if date is cleared
          startDateString = _this.state.startDate.format(DATE_FORMAT);
        }

        _this.props.dateChangedHandler(startDateString);
      }
    });
  },

  /**
   * Handler called when the value in the date control input is changed.
   */
  dateInputHandler: function dateInputHandler(value) {
    var _this2 = this;

    if (value && value.length == DATE_FORMAT.length) {
      var inputDate = moment(value, DATE_FORMAT);

      if (inputDate.isValid() == true) {
        this.setState({
          startDate: inputDate
        }, function () {
          _this2.handleChange(_this2.state.startDate);
        });
      }
    }
  },
  // When the date control loses focus this function is called. It calls
  // the validator prop function if one is provided.
  validator: function validator(value) {
    // we need to do the validation because now the user can enter a date manually.
    var dateToValidate = moment(value, DATE_FORMAT);
    var sotDate = "1970-01-01";
    var eotDate = "2035-12-31";
    var sot = moment(sotDate, DATE_FORMAT);
    var eot = moment(eotDate, DATE_FORMAT);
    var minDateMoment = sot;
    var maxDateMoment = eot;

    if (this.props.minDate && moment(this.props.minDate).isValid() == true) {
      minDateMoment = moment(this.props.minDate);
    }

    if (this.props.maxDate && moment(this.props.maxDate).isValid() == true) {
      maxDateMoment = moment(this.props.maxDate);
    }

    if (!(minDateMoment.isSameOrAfter(sot, "days") && maxDateMoment.isSameOrBefore(eot, "days") && minDateMoment.isSameOrBefore(maxDateMoment, "days"))) {
      minDateMoment = sot;
      maxDateMoment = eot;
    }

    if (dateToValidate.isBefore(minDateMoment) || dateToValidate.isAfter(maxDateMoment)) {
      this.setState({
        validationMessage: "Entered date not in range"
      });
    } else {
      this.setState({
        validationMessage: null
      });
    }

    if (typeof this.props.validator == "function") {
      // create a new function from validator with the 'value' as an additional parameter.
      var validator = this.props.validator.bind(null, value);
      var validationMessage = validator();
      this.setState({
        validationMessage: validationMessage
      });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // selected date might be changed after component is rendered
    startDate = null;

    if (!newProps.initialEmpty || newProps.selectedDate) {
      var startDate = moment(); //todays date

      var selectedDateMoment = moment(newProps.selectedDate, DATE_FORMAT);

      if (selectedDateMoment.isValid() == true) {
        startDate = selectedDateMoment;
      }
    }

    ;
    this.setState({
      startDate: startDate
    });
  },
  render: function render() {
    var _this3 = this;

    var id = this.props.id || _.uniqueId("dateControl_");

    var sotDate = "1970-01-01";
    var eotDate = "2035-12-31";
    var sot = moment(sotDate, DATE_FORMAT);
    var eot = moment(eotDate, DATE_FORMAT);
    var minDateMoment = sot;
    var maxDateMoment = eot;

    if (this.props.minDate && moment(this.props.minDate).isValid() == true) {
      minDateMoment = moment(this.props.minDate);
    }

    if (this.props.maxDate && moment(this.props.maxDate).isValid() == true) {
      maxDateMoment = moment(this.props.maxDate);
    }

    if (!(minDateMoment.isSameOrAfter(sot, "days") && maxDateMoment.isSameOrBefore(eot, "days") && minDateMoment.isSameOrBefore(maxDateMoment, "days"))) {
      minDateMoment = sot;
      maxDateMoment = eot;
    }

    var showMonthDropdown = true;

    if (typeof this.props.showMonthDropdown == "boolean") {
      showMonthDropdown = this.props.showMonthDropdown;
    }

    var showYearDropdown = true;

    if (typeof this.props.showYearDropdown == "boolean") {
      showYearDropdown = this.props.showYearDropdown;
    }

    var hideDateDisplay = false;

    if (typeof this.props.hideDateDisplay == "boolean") {
      hideDateDisplay = this.props.hideDateDisplay;
    }

    var hideClearButton = false;

    if (typeof this.props.hideClearButton == "boolean") {
      hideClearButton = this.props.hideClearButton;
    }

    var isClearableButtonVisible = function isClearableButtonVisible() {
      if (hideDateDisplay == true) {
        return false;
      } else if (hideClearButton == true) {
        return false;
      } else if (_this3.props.disabled) {
        return false;
      } else {
        return true;
      }
    };

    var validationMessageStyle = {
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      marginTop: 32,
      height: 16,
      position: "absolute"
    };

    var getValidationMessageComponent = function getValidationMessageComponent() {
      if (_this3.state.validationMessage != null && _this3.state.validationMessage != undefined && _this3.state.validationMessage.length > 0) {
        return React.createElement("span", {
          style: _this3.props.validationMessageStyle || validationMessageStyle
        }, _this3.state.validationMessage);
      } else {
        if (_this3.props.validationMessage != null && _this3.props.validationMessage != undefined && _this3.props.validationMessage.length > 0) {
          return React.createElement("span", {
            style: _this3.props.validationMessageStyle || validationMessageStyle
          }, _this3.props.validationMessage);
        } else {
          return null;
        }
      }
    };

    var isInputDisabled = this.props.inputDisabled;
    var isRequired = this.props.required;
    /**
     * popoverTargetOffset changes the location of the calendar popup in relation to the icon.
     */

    var getDatePicker = function getDatePicker() {
      if (hideDateDisplay == true) {
        return React.createElement(DatePicker, {
          peekNextMonth: true,
          showMonthDropdown: showMonthDropdown,
          showYearDropdown: showYearDropdown,
          dropdownMode: "select",
          isClearable: isClearableButtonVisible(),
          minDate: minDateMoment,
          maxDate: maxDateMoment,
          customInput: React.createElement(DateControlInput, {
            hideTextBox: hideDateDisplay,
            id: id,
            isRequired: isRequired
          }),
          dateFormat: _this3.props.dateFormat,
          selected: _this3.state.startDate,
          onChange: _this3.handleChange,
          disabled: _this3.props.disabled,
          popoverTargetOffset: "10px -36px"
        });
      } else {
        return React.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, React.createElement(DatePicker, {
          id: id,
          peekNextMonth: true,
          showMonthDropdown: showMonthDropdown,
          showYearDropdown: showYearDropdown,
          dropdownMode: "select",
          isClearable: isClearableButtonVisible(),
          minDate: minDateMoment,
          maxDate: maxDateMoment,
          customInput: React.createElement(DateControlInput, {
            hideTextBox: hideDateDisplay,
            validator: _this3.validator,
            inputDisabled: isInputDisabled,
            dateInputHandler: _this3.dateInputHandler,
            tabIndexx: _this3.props.tabIndex,
            isRequired: isRequired
          }),
          dateFormat: _this3.props.dateFormat,
          selected: _this3.state.startDate,
          onChange: _this3.handleChange,
          disabled: _this3.props.disabled
        }), getValidationMessageComponent());
      }
    };

    return getDatePicker();
  }
});
module.exports = DateControl;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var SearchBoxStyles = __webpack_require__(4).searchBox;

var TextBox = __webpack_require__(5);

var DateControlInput = React.createClass({
  displayName: 'DateControlInput',
  propTypes: {
    onClick: React.PropTypes.func,
    value: React.PropTypes.string
  },
  render: function render() {
    var _this = this;

    var hideTextBox = true;

    if (typeof this.props.hideTextBox == "boolean") {
      hideTextBox = this.props.hideTextBox;
    }

    var getTextBox = function getTextBox() {
      if (hideTextBox == true) {
        return null;
      } else {
        var readOnlyDateContainerStyle = {};

        if (_this.props.inputDisabled === true) {
          var readOnlyDateContainerStyle = {
            alignItems: "center",
            backgroundColor: "#fff",
            backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)",
            border: "solid 1px #E3E3E3",
            borderRadius: "2px 0px 0px 2px",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "flex",
            float: "left",
            fontFamily: "verdana",
            fontSize: 12,
            height: 28,
            MozBoxSizing: "border-box",
            padding: "0px 8px 0px 8px",
            position: "relative",
            width: 172
          };

          if (_this.props.isRequired === true) {
            readOnlyDateContainerStyle.borderLeft = "solid 3px #F7901E";
          }

          return React.createElement("div", {
            style: readOnlyDateContainerStyle
          }, _this.props.value);
        } else {
          var dateContainerStyle = SearchBoxStyles.inputContainerStyle;

          if (_this.props.isRequired === true) {
            dateContainerStyle = Object.assign({}, dateContainerStyle, {
              borderLeft: "solid 3px #F7901E"
            });
          }

          return React.createElement("div", {
            style: dateContainerStyle
          }, React.createElement(TextBox, {
            id: "textbox_" + id,
            disabled: _this.props.disabled,
            changeHandler: _this.props.dateInputHandler,
            value: _this.props.value,
            validator: _this.props.validator,
            tabIndex: _this.props.tabIndexx,
            standalone: false,
            type: "dateControl"
          }));
        }
      }
    };

    var getIconStyle = function getIconStyle() {
      var iconStyle = SearchBoxStyles.searchButtonContainerStyle;

      if (hideTextBox == true) {
        iconStyle = SearchBoxStyles.searchButtonStandaloneContainerStyle;
      }

      if (_this.props.disabled === true) {
        iconStyle.backgroundColor = "#F3F3F3";
        iconStyle.backgroundImage = "none";
        iconStyle.cursor = "default";
      } else {
        iconStyle.backgroundColor = "none";
        iconStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
        iconStyle.cursor = "pointer";
      }

      return iconStyle;
    };

    var id = this.props.id || _.uniqueId("dateControlInput_");

    return React.createElement("div", {
      id: id,
      onClick: this.props.onClick
    }, getTextBox(), React.createElement("div", {
      id: "button_" + id,
      style: getIconStyle()
    }, React.createElement("i", {
      className: "fa fa-calendar"
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    }));
  }
});
module.exports = DateControlInput;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./TextStyles.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./TextStyles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("keymirror");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Constants used by the stores and the dispatcher to denote the type of
 * action being taken
 */
var keyMirror = __webpack_require__(47);

module.exports = {
  FilterType: keyMirror({
    DROP_DOWN: null,
    CHECK_BOX: null,
    RADIO_BUTTON: null,
    SELECT_BOX: null,
    TEXT_BOX: null
  }),
  SideBarButtonType: keyMirror({
    CREATE: null,
    DOWNLOAD: null,
    UPLOAD: null,
    BUTTON_MENU: null
  }),
  ActionButtonType: keyMirror({
    VIEW: null,
    EDIT: null,
    DELETE: null,
    ADD: null,
    COPY: null,
    DOWNLOAD: null,
    RECALL: null
  }),

  /**
   * Enumerations used in the ListPageBuilder component to set the type of selection.
   */
  SelectType: keyMirror({
    NO_SELECT: null,
    SINGLE_SELECT: null,
    MULTI_SELECT: null
  })
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Container for the form elements
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var FormStyles = __webpack_require__(4).form;

var Form = React.createClass({
  displayName: "Form",
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    var id = this.props.id || _.unique("form_");

    var errorMessage = this.props.formValidationMessage || "[Error Message Here]";

    var toggleValidationErrorMessage = function toggleValidationErrorMessage() {
      if (typeof _this.props.showValidationMessage == "boolean") {
        if (_this.props.showValidationMessage == true) {
          return React.createElement("div", {
            style: FormStyles.errorMessageContainerStyle
          }, React.createElement("div", {
            style: FormStyles.errorMessageWrapperStyle
          }, React.createElement("span", {
            "data-component-type": "PageValidationMessage",
            className: "fa fa-exclamation-circle",
            style: FormStyles.errorMessageIconStyle
          }), React.createElement("span", {
            style: FormStyles.errorMessageStyle,
            dangerouslySetInnerHTML: {
              __html: errorMessage
            }
          })));
        } else {
          return null;
        }
      }
    };

    if (this.props.type == "dialog") {
      FormStyles.containerStyle.paddingBottom = 8;
    } else {
      FormStyles.containerStyle.paddingBottom = 32;
    }

    return React.createElement("div", {
      id: id,
      style: FormStyles.containerStyle
    }, toggleValidationErrorMessage(), this.props.children);
  } // lifecycle event handlers

});
module.exports = Form;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component that displays a row of the form. Allows the user to specify a label which is
 * displayed on the left hand side and insert a component which is displayed on the right hand
 * side of a colon
 * @param {String} label The text to display on the left hand side of the row.
 * @param {Boolean} optional When set to true displays the 'optional' text under the label
 * @param {String} description Secondary help text displayed above the component
 */
var React = __webpack_require__(0);

var Label = __webpack_require__(22);

var _ = __webpack_require__(1);

var FormRow = React.createClass({
  displayName: "FormRow",
  // styles
  containerStyle: {
    width: "100%",
    marginBottom: 24,
    display: "flex",
    // allows for vertical aligning
    alignItems: "flex-start" // align at the top

  },
  labelContainerStyle: {
    display: "flex",
    justifyContent: "flex-end",
    // right
    alignItems: "flex-start",
    // top
    width: 160,
    paddingRight: 16
  },
  descriptionContainerStyle: {
    fontFamily: "Verdana",
    fontSize: 12,
    color: "#333333",
    marginBottom: 8,
    whiteSpace: "pre"
  },
  componentContainerStyle: {
    display: "inline-block",
    textAlign: "left"
  },
  // styles
  // life cycle event handlers
  propTypes: {
    label: React.PropTypes.string,
    description: React.PropTypes.string,
    type: React.PropTypes.string
  },
  render: function render() {
    var _this = this;

    var getDescription = function getDescription() {
      // Use dangerouslySetInnerHTML so we can have breaks <br> in description
      if (_this.props.description && _this.props.description.length > 0) {
        return React.createElement("div", {
          style: _this.descriptionContainerStyle
        }, React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: _this.props.description
          }
        }));
      } else {
        return null;
      }
    };

    var renderLabel = function renderLabel() {
      var labelContainerStyle = Object.assign({}, _this.labelContainerStyle); // check the type prop to see if the value is dialog then the width is 100px

      if (_this.props.type == "dialog") {
        labelContainerStyle.width = 100;
      } else {
        labelContainerStyle.width = 160;
      }

      if (!_this.props.description) {
        labelContainerStyle.marginTop = 5;
      }

      if (_this.props.label && _this.props.label.length > 0) {
        var labelText = _this.props.label + ":";
        return React.createElement("div", {
          "data-component-type": "Label",
          style: labelContainerStyle
        }, React.createElement(Label, {
          text: labelText,
          align: "right"
        }));
      } else {
        if (_this.props.noLabel === true) {
          return React.createElement("div", {
            "data-component-type": "noLabel",
            style: labelContainerStyle
          });
        } else {
          return null;
        }
      }
    };

    var componentContainerStyle = _.extend(this.componentContainerStyle, {
      width: this.props.width
    });

    return React.createElement("div", {
      style: this.containerStyle
    }, renderLabel(), React.createElement("div", {
      style: componentContainerStyle
    }, getDescription(), this.props.children));
  } // life cycle event handlers

});
module.exports = FormRow;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(8);

var _ = __webpack_require__(1);

__webpack_require__(46);
/**
 * The text box is used for entering multiple lines. This is typically found on a Form Page and used as the input box for Description.
 */


var TextArea = React.createClass({
  displayName: "TextArea",
  // custom methods
  handleChange: function handleChange(event) {
    this.setState({
      value: event.target.value
    });

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(event.target.value, event);
    }
  },
  getValue: function getValue() {
    return this.state.value;
  },

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    this.setState({
      isFocused: true
    });
  },
  // When the text box loses focus this function is called. It will called
  // the validator prop function if one is provided.
  focusLostEventHandler: function focusLostEventHandler(event) {
    this.setState({
      isFocused: false
    });
    var value = event.target.value;

    if (typeof this.props.validator == "function") {
      this.props.validator(value);
    }

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component. If the prop value is not supplied a unique identifier is added.
     */
    id: React.PropTypes.string,

    /**
     * The text for the text box component.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Visually adds an orange vertical bar to the left side of the box.
     */
    required: React.PropTypes.bool,

    /**
     * Toggles the ability to resize the text area. Defaults to true.
     */
    allowResize: React.PropTypes.bool,

    /**
     * The width of the control in pixels.
     */
    width: React.PropTypes.number,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     * The width prop will override the size prop.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The height of the control in pixels.
     */
    height: React.PropTypes.number,

    /**
     * The maximum number of characters that can be entered in the control.
     */
    maxLength: React.PropTypes.number,

    /**
     * Placeholder text to show in the text area.
     */
    placeholder: React.PropTypes.string,

    /**
     * Control will be disabled when this value is true.
     */
    disabled: React.PropTypes.bool,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Set this property value to true if you want the text box to receive automatic focus
     * when the component loads. For this to work, the id needs to be defined.
     */
    autoFocus: React.PropTypes.bool,

    /**
     * Users of the control can pass in an event handler to get notified when the value changes. 
     * The handler is passed in the changed value and the event object.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     */
    validator: React.PropTypes.func,

    /**
     * Set this prop value to the message you want to show if validation fails, otherwise set its value to null to hide.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Set this prop value to a function that is called when the component loses focus.
     */
    focusLostHandler: React.PropTypes.func
  },
  componentDidMount: function componentDidMount() {
    if (typeof this.props.autoFocus == "boolean" && this.props.autoFocus == true) {
      ReactDOM.findDOMNode(this.refs[this.props.id]).focus();
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var value = newProps.value == null || newProps.value == undefined ? "" : newProps.value;
    this.setState({
      disabled: newProps.disabled,
      value: value,
      required: newProps.required
    });
  },
  getInitialState: function getInitialState() {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      isRequired = this.props.required;
    }

    return {
      // although these are anti-patterns as per React documentation, in some cases
      // like this setting initial state with props is allowed if explicitly done
      // for initialization
      value: this.props.value == null || this.props.value == undefined ? "" : this.props.value,
      // cannot be null for controlled components,
      disabled: isDisabled,
      required: isRequired,
      validationFailed: false,
      isFocused: false
    };
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("textArea_");

    var height = typeof this.props.height == "number" ? this.props.height : 120;
    var width = typeof this.props.width == "number" ? this.props.width : 500;
    var resize = this.props.allowResize == false ? "none" : "vertical";

    var getTextAreaStyle = function getTextAreaStyle() {
      var style = {
        borderRadius: 2,
        boxSizing: "border-box",
        font: "12px verdana",
        height: height,
        marginBottom: 0,
        outline: "none",
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        resize: resize,
        verticalAlign: "top",
        width: width // size

      };

      if (!_this.props.width) {
        // use the size param only if width is not defined
        switch (_this.props.size) {
          case "large":
            style.width = 600;
            break;

          case "medium":
            style.width = 400;
            break;

          default:
            style.width = 200;
            break;
        }
      } // background


      if (_this.props.validationMessage != null) {
        style.backgroundColor = "rgba(247, 99, 33, 0.05)";
      } else if (_this.state.disabled == true) {
        style.backgroundColor = "#F3F3F3";
      } else {
        style.backgroundColor = "#FFFFFF";
      } // border and box shadow


      if (_this.state.isFocused == true) {
        style.borderTop = "1px solid #64ADC2";
        style.borderRight = "1px solid #64ADC2";
        style.borderBottom = "1px solid #64ADC2";

        if (_this.state.required == true) {
          if (_this.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
          } else {
            style.borderLeft = "3px solid #F7901e";
          }
        } else {
          if (_this.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
          } else {
            style.borderLeft = "1px solid #64ADC2";
          }
        }

        style.boxShadow = "inset 0 0 3px #346F8F";
      } else if (_this.state.disabled == true) {
        style.border = "solid 1px #E3E3E3";
      } else {
        style.boxShadow = "none";

        if (_this.state.required == true) {
          style.borderLeft = "3px solid #F7901e";

          if (_this.props.validationMessage != null) {
            style.borderTop = "1px solid #F76321";
            style.borderRight = "1px solid #F76321";
            style.borderBottom = "1px solid #F76321";
          } else {
            style.borderTop = "1px solid #E3E3E3";
            style.borderRight = "1px solid #E3E3E3";
            style.borderBottom = "1px solid #E3E3E3";
          }
        } else {
          if (_this.props.validationMessage != null) {
            style.borderLeft = "3px solid #F76321";
            style.borderTop = "1px solid #F76321";
            style.borderRight = "1px solid #F76321";
            style.borderBottom = "1px solid #F76321";
          } else {
            style.borderLeft = "1px solid #E3E3E3";
            style.borderTop = "1px solid #E3E3E3";
            style.borderRight = "1px solid #E3E3E3";
            style.borderBottom = "1px solid #E3E3E3";
          }
        }
      } // change the styling when Placeholder is displayed


      if (_this.state.value === null || _this.state.value.length == 0) {
        style.fontStyle = "italic";
      } else {
        style.fontStyle = "normal";
      }

      return style;
    };

    var validationMessageStyle = {
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      visibility: "hidden",
      position: "absolute"
    };

    if (this.props.validationMessage != null) {
      validationMessageStyle.visibility = "visible";
    }

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var getCursorStyle = function getCursorStyle() {
      // we need to use an external CSS file because React does not support !important in inline TextStyles
      // I have to use !important because this component is used in Incent which also loads the bootstrap
      // and they have a bad habit of adding styles to element definitions e.g input[type='text'] { cursor: not-allowed }
      if (_this.state.disabled === true) {
        return "textCursorDisabled";
      }

      return "textCursor";
    };

    return React.createElement("div", {
      style: {
        display: "inline-block",
        position: "relative"
      }
    }, React.createElement("textarea", {
      ref: id,
      id: id,
      value: this.state.value,
      tabIndex: tabIndex,
      disabled: this.state.disabled,
      maxLength: this.props.maxLength,
      placeholder: this.props.placeholder,
      onChange: this.handleChange,
      style: getTextAreaStyle(),
      onBlur: this.focusLostEventHandler,
      onFocus: this.handleFocus,
      className: getCursorStyle()
    }), React.createElement("span", {
      style: validationMessageStyle
    }, this.props.validationMessage));
  } // lifecycle event handlers

});
module.exports = TextArea;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

__webpack_require__(115);
/**
 * The container for the tabs. Individual tabs can be added declaratively.
 * Each tab can have sections, each section will have rows which will display
 * name-value pairs. A user can also add their own content inside the tab.
 */


var Tabs = React.createClass({
  displayName: "Tabs",
  setCurrentTab: function setCurrentTab(tabId, tabIndex, event) {
    var _this = this;

    var doSetCurrentTab = function doSetCurrentTab(canSetTab) {
      if (canSetTab) {
        _this.setState({
          selectedTabId: tabId,
          selectedTabIndex: tabIndex
        }, function () {
          if (typeof _this.props.tabClickHandler == "function") {
            _this.props.tabClickHandler(tabId, tabIndex, event);
          }
        });
      }

      ;
    }; // If a preAddEditTabEventHandler is found, call to see if we should switch tab


    if (typeof this.props.preAddEditTabEventHandler == "function") {
      this.props.preAddEditTabEventHandler(tabId, this.state.selectedTabIndex, doSetCurrentTab, event); // otherwise just switch
    } else {
      doSetCurrentTab(true);
    }
  },
  getInitialState: function getInitialState() {
    return {
      selectedTabId: null,
      selectedTabIndex: this.props.initialTabIndex
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.state.selectedTabIndex != nextProps.initialTabIndex) {
      this.setState({
        selectedTabIndex: nextProps.initialTabIndex
      });
    }

    ;
  },
  propTypes: {
    /**
     * The initial tab that is selected when the component loads. By default the first tab is shown.
     */
    initialTabIndex: React.PropTypes.number,

    /**
     * Function handler called when a tab is clicked. The arguments passed are the tab id, tab index and the click event. 
     */
    tabClickHandler: React.PropTypes.func
  },
  render: function render() {
    var _this2 = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this2.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          selectedTabId: _this2.state.selectedTabId,
          selectedTabIndex: _this2.state.selectedTabIndex,
          tabClickHandler: _this2.setCurrentTab,
          rowData: _this2.props.rowData,
          rowIndex: _this2.props.rowIndex || 0
        });
      });
    };

    return React.createElement("div", {
      id: "tabs",
      className: "tabs_rootContainer"
    }, renderChildren());
  }
});
Tabs.Headers = React.createClass({
  displayName: "Headers",
  propTypes: {
    /**
     * If set to true, increase the width so the truncation kicks in later
     */
    noTruncate: React.PropTypes.bool
  },
  render: function render() {
    var _this3 = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this3.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          selectedTabId: _this3.props.selectedTabId,
          selectedTabIndex: _this3.props.selectedTabIndex,
          tabClickHandler: _this3.props.tabClickHandler,
          noTruncate: _this3.props.noTruncate,
          tabIndex: index,
          // Headers tab has the Header components which are the tabs
          rowData: _this3.props.rowData,
          rowIndex: _this3.props.rowIndex
        });
      });
    };

    return React.createElement("div", {
      id: "headers",
      className: "tabs_headers"
    }, React.createElement("div", {
      id: "indentHeader",
      className: "tabs_indentHeader"
    }), renderChildren(), React.createElement("div", {
      id: "spaceHeader",
      className: "tabs_spaceHeader"
    }));
  }
});
Tabs.Header = React.createClass({
  displayName: "Header",
  getInitialState: function getInitialState() {
    return {
      marked: this.props.marked
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.state.marked != nextProps.marked) {
      this.setState({
        marked: nextProps.marked
      });
    }

    ;
  },
  propTypes: {
    /**
     * The id for the tab. If an id is not provided a computed id is used instead.
     */
    id: React.PropTypes.string,

    /**
     * The title for the tab.
     */
    title: React.PropTypes.string,

    /**
     * Give an indicator to highlight the tab header
     */
    marked: React.PropTypes.bool,

    /**
     * Truncate the header or not
     */
    noTruncate: React.PropTypes.bool
  },
  render: function render() {
    var _this4 = this;

    var id = this.props.id || _.uniqueId("tabHeader_");

    var tabClickHandler = function tabClickHandler(event) {
      if (typeof _this4.props.tabClickHandler == "function") {
        _this4.props.tabClickHandler(id, _this4.props.tabIndex, event);
      }
    };

    var tabStyle = null;

    if (this.props.tabIndex == this.props.selectedTabIndex) {
      tabStyle = "tabs_headerSelected";

      if (this.props.emptyHeader) {
        tabStyle += " tabs_headerEmpty";
      }
    } else {
      tabStyle = "tabs_header";

      if (id == "addTab") {
        tabStyle += " tabs_addTab";
      } else if (id == "moreTabs") {
        tabStyle += " tabs_moreTabs";
      }
    }

    if (this.state.marked) {
      tabStyle += " tabs_marked";
    }

    var headerTitle = React.createElement("span", {
      title: this.props.title
    }, this.props.title);

    if (id == "addTab") {
      headerTitle = React.createElement("span", {
        className: "fa fa-plus-circle"
      });
    } else if (id == "moreTabs") {
      headerTitle = React.createElement("span", {
        className: "fa fa-angle-double-right"
      });
    }

    ;
    return React.createElement("div", {
      id: id,
      ref: "title",
      className: tabStyle,
      onClick: tabClickHandler
    }, React.createElement("div", {
      className: this.props.noTruncate ? "tabs_noTruncate" : "tabs_truncate"
    }, headerTitle));
  }
});
/**
 * Parent element for the container component of each tab.
 */

Tabs.Containers = React.createClass({
  displayName: "Containers",
  render: function render() {
    var _this5 = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this5.props.children, function (child, index, arr) {
        var isVisible = false;

        if (index == _this5.props.selectedTabIndex) {
          isVisible = true;
        }

        return React.cloneElement(child, {
          visible: isVisible,
          tabIndex: index,
          rowData: _this5.props.rowData,
          rowIndex: _this5.props.rowIndex
        });
      });
    };

    return React.createElement("div", {
      id: "containers",
      className: "tabs_containers"
    }, renderChildren());
  }
});
Tabs.Container = React.createClass({
  displayName: "Container",
  render: function render() {
    var _this6 = this;

    var id = this.props.id || _.uniqueId("container_");

    var isVisible = false;

    if (typeof this.props.visible == "boolean") {
      isVisible = this.props.visible;
    }

    if (isVisible == true) {
      var renderChildren = function renderChildren() {
        return React.Children.map(_this6.props.children, function (child, index, arr) {
          return React.cloneElement(child, {
            tabIndex: _this6.props.tabIndex,
            rowData: _this6.props.rowData,
            rowIndex: _this6.props.rowIndex
          });
        });
      };

      return React.createElement("div", {
        id: id,
        className: "tabs_container"
      }, renderChildren());
    } else {
      return null;
    }
  }
});
Tabs.Sections = React.createClass({
  displayName: "Sections",
  render: function render() {
    var _this7 = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this7.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          tabIndex: _this7.props.tabIndex,
          rowData: _this7.props.rowData,
          rowIndex: _this7.props.rowIndex,
          sectionIndex: index
        });
      });
    };

    return React.createElement("div", null, renderChildren());
  }
});
Tabs.Section = React.createClass({
  displayName: "Section",
  propTypes: {
    /**
     * The section title.
     */
    title: React.PropTypes.string
  },
  render: function render() {
    var _this8 = this;

    var renderSectionItem = function renderSectionItem(sectionItem) {
      var sectionName = "";

      if (sectionItem && typeof sectionItem.props.name == "string" && sectionItem.props.name.length > 0) {
        sectionName = sectionItem.props.name + ":";
      }

      if (sectionItem) {
        return React.createElement(Tabs.SectionItem, {
          sectionName: sectionName
        }, sectionItem.props.children);
      }
    };

    var renderSectionItems = function renderSectionItems() {
      var sectionItems = [];
      var sectionItemsArray = React.Children.toArray(_this8.props.children);
      var index = 0;

      while (index < sectionItemsArray.length) {
        sectionItems.push(React.createElement("tr", {
          key: "section" + index
        }, React.createElement("td", {
          className: "tabs_sectionItemContainer"
        }, renderSectionItem(sectionItemsArray[index])), React.createElement("td", {
          className: "tabs_sectionItemContainer"
        }, renderSectionItem(sectionItemsArray[index + 1]))));
        index = index + 2;
      }

      ;
      return React.createElement("tbody", null, sectionItems);
    };

    var renderSectionHeader = function renderSectionHeader() {
      if (_this8.props.title && _this8.props.title.length > 0) {
        return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
          colSpan: 2,
          className: "tabs_sectionTitle"
        }, _this8.props.title)));
      } else {
        return null;
      }
    };

    var renderChildren = function renderChildren() {
      var id = _this8.props.id || "row" + _this8.props.rowIndex + "Section" + _this8.props.sectionIndex;
      return React.createElement("table", {
        id: id,
        className: "tabs_sectionContainer"
      }, renderSectionHeader(), renderSectionItems());
    };

    return React.createElement("div", null, renderChildren());
  }
});
Tabs.SectionItem = React.createClass({
  displayName: "SectionItem",
  propTypes: {
    /**
     * The label for the section item.
     */
    name: React.PropTypes.string
  },
  render: function render() {
    var _this9 = this;

    var renderSectionItemLabel = function renderSectionItemLabel() {
      if (_this9.props.sectionName && _this9.props.sectionName.length > 0) {
        return React.createElement("div", {
          className: "tabs_sectionItemLabel"
        }, _this9.props.sectionName);
      } else {
        return null;
      }
    };

    return React.createElement("div", null, renderSectionItemLabel(), React.createElement("div", {
      className: "tabs_sectionItemContent"
    }, React.createElement("div", {
      className: "tabs_sectionItemContent_div"
    }, this.props.children)));
  }
});
module.exports = Tabs;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var TextBox = __webpack_require__(5);

var SecondaryButton = __webpack_require__(2);

var SearchBoxStyles = __webpack_require__(4).searchBox;
/**
 * The Single Select box component is a variation of the select box. Only one item can be selected and displayed.
 * The selection of items happens primarily through a layover list that is triggered by the '...' button on the select box.
 * The component will accept a change handler that will be triggered whenever an item is added or removed
 * from the selection.
 */
// var inputWidth = 160;


var EditableSelectBox = React.createClass({
  displayName: "EditableSelectBox",
  // styles
  selectBoxContainerStyle: {
    boxSizing: "border-box",
    display: "flex",
    position: "relative"
  },
  searchButtonContainerStyle: {
    alignItems: "center",
    backgroundColor: "#eeeeee",
    borderRight: "1px solid #E3E3E3",
    borderTop: "1px solid #E3E3E3",
    borderBottom: "1px solid #E3E3E3",
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    boxSizing: "border-box",
    color: "#333",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    height: 28,
    fontSize: 14,
    minWidth: 28,
    textShadow: "0 1px 0 #ffffff"
  },
  // styles
  // custom properties
  // custom properties
  // custom methods

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    /* This code is used for focusing in the textbox when tabbed into the 
     * component. It is not finished.
    if (this.props.editMode == true) {
        console.log("called again and again");
        // set focus on the textbox
        this.textBox.setFocus();
    } else {
        this.setState({
            isFocused: true
        });
    }
    */
    this.setState({
      isFocused: true
    });
  },
  // When the text box loses focus this function is called. It calls
  // the validator prop function if one is provided.
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
    /* validator is already called by the inner-component (TextBox), so calling it again would result in a dupliate call
    if (typeof this.props.validator == "function") {
        // create a new function from validator with the 'value' as an additional parameter.
        var validator = this.props.validator.bind(null, event.target.value);
        validator();
    }
    */

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },

  /**
   * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
   * The value of the textbox along with the keyPress event is passed to the function.
   */
  handleEnterPress: function handleEnterPress(event) {
    if (this.state.disabled == true) {
      event.preventDefault();
    } else {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        if (typeof this.props.selectHandler == "function") {
          this.props.selectHandler(event);
        }
      }
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the control. If the prop is not supplied a unique identifier is created.
     */
    id: React.PropTypes.string,

    /**
     * Function called when the ellipsis button of the SelectBox component is clicked.
     */
    selectHandler: React.PropTypes.func,

    /**
     * The placeholder search text for the component.
     */
    placeholder: React.PropTypes.string,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The prop value is used to set the value prop of the textbox.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]),

    /**
     * Set this prop value to either string or number to force the textbox to honor the text alignment.
     * Strings are left aligned and numbers are right aligned.
     */
    valueType: React.PropTypes.oneOf(["string", "number"]),

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * Control will be disabled when this value is true. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Event handler called when the lost focus event is triggered.
     */
    focusLostHandler: React.PropTypes.func,

    /**
     * Event handler called when the text in the box changes. The changed value and the
     * event are passed in as arguments.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Adds the tabIndex attribute to the component.
     */
    tabIndex: React.PropTypes.number,

    /**
     * Shows the tooltip for the text in the component.
     */
    title: React.PropTypes.string,

    /**
     * If true sets the component in edit mode where the value is displayed as text.
     * If false, the value is displayed as a label.
     */
    editMode: React.PropTypes.bool,

    /**
     * Function called when the remove button is clicked on the label. The value is displayed as a label
     * when the component is not in edit mode. The removed item is passed in as a parameter to the function.
     */
    removeItemEventHandler: React.PropTypes.func
  },
  mixins: [StyleMixins],
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // 
    if (this.state.disabled !== newProps.disabled) {
      this.setState({
        disabled: newProps.disabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    return {
      disabled: isDisabled,
      isFocused: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Internal helper function triggered when the ellipsis button is clicked.
     * It calls the passed in handler function to the selectHandler prop
     */
    var ellipsesButtonHandler = function ellipsesButtonHandler(event) {
      if (_this.state.disabled == true) {
        event.preventDefault();
      } else if (typeof _this.props.selectHandler == "function") {
        _this.props.selectHandler();
      }
    };

    var textboxChangeHandler = function textboxChangeHandler(value, event) {
      if (typeof _this.props.changeHandler == "function") {
        _this.props.changeHandler(value, event);
      }
    };

    var id = this.props.id || _.uniqueId("selectBox_");

    var type = this.props.type || "editableSelectBox";
    /**
     * Gets the container that shows the list of items that have been created.
     */

    var getTextBoxContainer = function getTextBoxContainer() {
      var size = "small";

      if (_this.props.size == "small" || _this.props.size == "medium" || _this.props.size == "large") {
        size = _this.props.size;
      }

      var triggerValidation = false;

      if (typeof _this.props.triggerValidation == "boolean") {
        triggerValidation = _this.props.triggerValidation;
      }

      if (!_this.props.size && _this.props.type === 'inputTableEditableSelectBoxColumn') {
        var _React$createElement;

        return React.createElement("div", {
          style: SearchBoxStyles.inputContainerStyle
        }, React.createElement(TextBox, (_React$createElement = {
          id: "textbox_" + id,
          maxLength: _this.props.maxLength,
          disabled: _this.state.disabled,
          changeHandler: textboxChangeHandler,
          type: "inputTableEditableSelectBoxColumn",
          value: _this.props.value
        }, _defineProperty(_React$createElement, "type", type), _defineProperty(_React$createElement, "standalone", false), _defineProperty(_React$createElement, "required", _this.props.required), _defineProperty(_React$createElement, "placeholder", _this.props.placeholder), _defineProperty(_React$createElement, "validationMessage", _this.props.validationMessage), _defineProperty(_React$createElement, "validator", _this.props.validator), _defineProperty(_React$createElement, "title", _this.props.title), _defineProperty(_React$createElement, "tabIndex", _this.props.tabIndex), _defineProperty(_React$createElement, "triggerValidation", triggerValidation), _defineProperty(_React$createElement, "ref", function ref(input) {
          _this.textBox = input;
        }), _defineProperty(_React$createElement, "valueType", _this.props.valueType), _React$createElement)));
      }

      return React.createElement("div", {
        style: SearchBoxStyles.inputContainerStyle
      }, React.createElement(TextBox, {
        id: "textbox_" + id,
        maxLength: _this.props.maxLength,
        disabled: _this.state.disabled,
        changeHandler: textboxChangeHandler,
        size: size,
        value: _this.props.value,
        type: type,
        standalone: false,
        required: _this.props.required,
        placeholder: _this.props.placeholder,
        validationMessage: _this.props.validationMessage,
        validator: _this.props.validator,
        title: _this.props.title,
        tabIndex: _this.props.tabIndex,
        triggerValidation: triggerValidation,
        ref: function ref(input) {
          _this.textBox = input;
        },
        valueType: _this.props.valueType
      }));
    };

    var getLabel = function getLabel() {
      return React.createElement(EditableSelectBox.DisplayItem, {
        value: _this.props.value,
        type: type,
        required: _this.props.required,
        removeItemEventHandler: _this.props.removeItemEventHandler,
        size: _this.props.size,
        disabled: _this.state.disabled,
        hideClearButton: _this.props.hideClearButton
      });
    };

    var getContent = function getContent() {
      var editMode = typeof _this.props.editMode == "boolean" ? _this.props.editMode : true;

      if (editMode == true) {
        return getTextBoxContainer();
      } else {
        return getLabel();
      }
    };
    /*
    var tabIndex = -1;
    if (typeof this.props.tabIndex == "number") {
        if (isNaN(parseInt(this.props.tabIndex)) == false) {
            tabIndex = parseInt(this.props.tabIndex);
        }
    }
    */
    // focused style


    this.selectBoxContainerStyle.boxShadow = "none";
    this.selectBoxContainerStyle.outline = "none";

    if (this.state.isFocused == true) {
      this.selectBoxContainerStyle.borderRadius = 2;
      this.selectBoxContainerStyle.boxShadow = "0 0 4px #64ADC2";
    } // disabled vs non disabled state for elipsed button


    if (this.props.disabled === true) {
      this.searchButtonContainerStyle.cursor = "default";
      this.searchButtonContainerStyle.backgroundImage = "none";
      this.searchButtonContainerStyle.backgroundColor = "#F3F3F3";
    } else {
      this.searchButtonContainerStyle.cursor = "pointer";
      this.searchButtonContainerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
      this.searchButtonContainerStyle.backgroundColor = "none";
    } // size


    if (this.props.size === "large") {
      this.selectBoxContainerStyle.width = 600;
    } else if (this.props.size === 'medium') {
      this.selectBoxContainerStyle.width = 400;
    } else {
      this.selectBoxContainerStyle.width = 200;
    } // if size prop is not specified and if the type is specified
    // then there is a custom width.


    if (!this.props.size && this.props.type === 'inputTableEditableSelectBoxColumn') {
      this.selectBoxContainerStyle.width = 120;
    }

    return React.createElement("div", null, React.createElement("div", {
      id: id,
      style: this.selectBoxContainerStyle,
      onFocus: this.handleFocus,
      onBlur: this.handleLostFocus,
      onKeyDown: this.handleEnterPress,
      "data-component-name": "EditableSelectBox",
      "data-component-type": "SingleSelect"
    }, getContent(), React.createElement("div", {
      id: "button_" + id,
      style: this.searchButtonContainerStyle,
      onClick: ellipsesButtonHandler,
      "data-component-type": "Button"
    }, React.createElement("i", {
      className: "fa fa-ellipsis-h"
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    })));
  } // lifecycle event handlers

});
/**
 * The component that displays the selected item
 */

EditableSelectBox.DisplayItem = React.createClass({
  displayName: "DisplayItem",
  clickEventHandler: function clickEventHandler(evt) {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    if (isDisabled == false) {
      if (typeof this.props.removeItemEventHandler == "function") {
        if (this.props.value && this.props.value.length > 0) {
          this.props.removeItemEventHandler(this.props.value, evt);
        } else {
          this.props.removeItemEventHandler(this.props.selectedItem, evt);
        }
      }
    }

    evt.stopPropagation();
  },
  getInitialState: function getInitialState() {
    return {
      showHover: false
    };
  },
  render: function render() {
    var _this2 = this;

    var displayItemStyle = {
      alignItems: "center",
      backgroundColor: "#F3F3F3",
      boxSizing: "border-box",
      display: "flex",
      fontSize: 11,
      height: 20,
      marginRight: 4,
      marginTop: 2,
      paddingLeft: 4,
      paddingRight: 4,
      maxWidth: "100%"
    };
    var textStyle = {
      maxWidth: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#666666"
    };

    var buttonEnabledStyle = function buttonEnabledStyle() {
      return {
        cursor: "pointer",
        color: "#CCCCCC",
        fontSize: 15,
        marginLeft: 4
      };
    };

    var buttonEnabledHoverStyle = function buttonEnabledHoverStyle() {
      return {
        cursor: "pointer",
        color: "#999999",
        fontSize: 15,
        marginLeft: 4
      };
    };

    var innerLayerStyle = {
      display: "flex",
      // use this style so that we can vertically middle align the content in the button
      alignItems: "center",
      fontSize: 10
    };
    var selectedItemContainerStyle = {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      border: "solid 1px #E3E3E3",
      borderBottomLeftRadius: 2,
      borderTopLeftRadius: 2,
      boxSizing: "border-box",
      cursor: "default",
      display: "flex",
      flexWrap: "wrap",
      float: "left",
      fontFamily: "verdana",
      fontSize: 12,
      marginBottom: 0,
      maxHeight: 62,
      minHeight: 24,
      overflowX: "auto",
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 0,
      paddingBottom: 3,
      width: "100%"
    };
    /**
     * Handler function for MouseEnter event
     * @param {Object} The event object from the MouseEnter event
     */

    var showHover = function showHover(event) {
      _this2.setState({
        showHover: true
      });

      event.stopPropagation();
    };
    /**
     * Handler function for MouseLeave event
     * @param {Object} The event object from the MouseLeave event
     */


    var hideHover = function hideHover(event) {
      _this2.setState({
        showHover: false
      });

      event.stopPropagation();
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this2.props.disabled == true) {
        return buttonEnabledStyle();
      }

      if (_this2.state.showHover == true) {
        buttonStyle = buttonEnabledHoverStyle();
      } else {
        buttonStyle = buttonEnabledStyle();
      }

      return buttonStyle;
    };

    var getDisplayValue = function getDisplayValue() {
      if (_this2.props.value && _this2.props.value.length > 0) {
        return _this2.props.value;
      } else {
        if (_this2.props.selectedItem) {
          return _this2.props.selectedItem[_this2.props.itemDisplayPropName];
        } else {
          return null;
        }
      }
    };
    /**
     * Gets the container that shows the list of items that have been created.
     */


    var getSelectedItemContainer = function getSelectedItemContainer() {
      // special width for a special component
      if (_this2.props.type == "inputTableTextBoxColumn") {
        width = 120;
        width = width - 16 - 2; // remove padding and border width from either side

        selectedItemContainerStyle.width = width;
        displayItemStyle.maxWidth = width - 24;
        textStyle.maxWidth = width - 32;
      }

      if (_this2.props.required) {
        selectedItemContainerStyle = Object.assign({}, selectedItemContainerStyle, {
          borderLeft: "3px solid #f7901e"
        });
      }

      return React.createElement("div", {
        style: selectedItemContainerStyle
      }, React.createElement("div", {
        "data-component-type": "SelectedItem",
        style: displayItemStyle
      }, React.createElement("span", {
        style: textStyle,
        title: getDisplayValue()
      }, getDisplayValue()), _this2.props.hideClearButton ? null : React.createElement("div", {
        style: currentStyle(),
        onClick: _this2.clickEventHandler,
        onMouseEnter: showHover,
        onMouseLeave: hideHover
      }, React.createElement("div", {
        style: innerLayerStyle
      }, React.createElement("span", {
        className: "fa fa-times"
      })))));
    };

    return getSelectedItemContainer();
  }
});
module.exports = EditableSelectBox;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var Label = __webpack_require__(22);
/**
 * Sub component of InputTable that displays a label column inside a data row.
 */


var InputTableLabelColumn = React.createClass({
  displayName: "InputTableLabelColumn",
  // styles
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The text for the label. If specified the value of this prop takes precedence over the textPropertyName prop value.
     */
    text: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     *  The name of the property/attribute in the bound data row that is used to get the text to display.
     */
    textPropertyName: React.PropTypes.string,

    /**
     * If true the text is bold else normal. Default is true.
     */
    bold: React.PropTypes.bool,

    /**
     * If the value is string, the text is left aligned. If it is number,
     * it is right aligned. Default is string.
     */
    type: React.PropTypes.oneOf(['string', 'number']),

    /**
     * The number of decimals to display. This only applies if the type is 'number'
     * and the type of value assigned to the text prop is of type number.
     */
    numberOfDecimals: React.PropTypes.number,

    /**
     * The width of the label in pixels
     */
    width: React.PropTypes.number
  },
  mixins: [StyleMixins],
  render: function render() {
    var labelText = null;

    if (this.props.text) {
      // text prop takes precedence over the textPropertyName prop
      labelText = this.props.text;
    } else if (this.props.textPropertyName) {
      labelText = this.props.data[this.props.textPropertyName];
    } else {
      labelText = "";
    }

    return React.createElement("td", {
      style: this.IncentStyles.inputTableLabelColumnStyle
    }, React.createElement(Label, {
      text: labelText,
      bold: this.props.bold,
      align: "right",
      type: this.props.type,
      numberOfDecimals: this.props.numberOfDecimals,
      width: this.props.width
    }));
  } // lifecycle event handlers

});
module.exports = InputTableLabelColumn;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var RemoveRowButton = __webpack_require__(57);
/**
 * Sub component of InputTable that displays a remove row button inside the column of a data row.
 */


var InputTableRemoveRowButtonColumn = React.createClass({
  displayName: "InputTableRemoveRowButtonColumn",
  // styles
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Event handler function when provided as a prop is called when the remove row button is clicked.
     * The row index is passed in as a parameter along with the event parameter.
     */
    removeRowButtonClickHandler: React.PropTypes.func
  },
  mixins: [StyleMixins],
  render: function render() {
    var _this = this;

    /**
     * Function called when the secondary button is clicked
     */
    var clickEventHandler = function clickEventHandler(event) {
      if (typeof _this.props.removeRowButtonClickHandler == "function") {
        _this.props.removeRowButtonClickHandler(_this.props.dataIndex, event);
      }
    };

    var removeRowButtonId = this.props.id ? this.props.id + "_removeRowButton" : null;
    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(RemoveRowButton, {
      id: removeRowButtonId,
      clickHandler: clickEventHandler
    }));
  } // lifecycle event handlers

});
module.exports = InputTableRemoveRowButtonColumn;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * Button used in the input table, search box components that is used for remove/cancel actions.
 */


var RemoveRowButton = React.createClass({
  displayName: "RemoveRowButton",
  // custom properties
  buttonEnabledStyle: function buttonEnabledStyle() {
    return {
      cursor: "default",
      color: "#CCCCCC",
      fontSize: 15
    };
  },
  buttonEnabledHoverStyle: function buttonEnabledHoverStyle() {
    return {
      cursor: "default",
      color: "#999999",
      fontSize: 15
    };
  },
  innerLayerStyle: {
    display: "table-cell",
    // use this style so that we can vertically middle align the content in the button
    verticalAlign: "middle",
    height: 22,
    cursor: 'pointer'
  },
  // custome properties
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the button, if not provided a unique id is added.
     */
    id: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      showHover: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Handler function for MouseEnter event
     * @param {Object} The event object from the MouseEnter event
     */
    var showHover = function showHover(event) {
      _this.setState({
        showHover: true
      });

      event.stopPropagation();
    };
    /**
     * Handler function for MouseLeave event
     * @param {Object} The event object from the MouseLeave event
     */


    var hideHover = function hideHover(event) {
      _this.setState({
        showHover: false
      });

      event.stopPropagation();
    };

    var clickHandler = function clickHandler(event) {
      if (typeof _this.props.clickHandler == "function") {
        _this.props.clickHandler(_this.props.id);
      }
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.showHover == true) {
        buttonStyle = _this.buttonEnabledHoverStyle();
      } else {
        buttonStyle = _this.buttonEnabledStyle();
      }

      return buttonStyle;
    };

    var id = this.props.id || _.uniqueId("removeRowButton_");

    return React.createElement("div", {
      id: id,
      style: currentStyle(),
      onMouseEnter: showHover,
      onMouseLeave: hideHover
    }, React.createElement("div", {
      style: this.innerLayerStyle,
      onClick: clickHandler
    }, React.createElement("span", {
      className: "fa fa-times-circle"
    })));
  } // lifecycle event handlers

});
module.exports = RemoveRowButton;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Sub component in the InputTable to display the column name
 */
var React = __webpack_require__(0);

var InputTableHeadColumn = React.createClass({
  displayName: "InputTableHeadColumn",
  // styles
  columnStyle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#333333",
    verticalAlign: "bottom",
    textAlign: "left",
    whiteSpace: "normal",
    paddingTop: 8,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    height: 20,
    width: 128,
    wordWrap: "break-word"
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  render: function render() {
    if (this.props.width) {
      this.columnStyle.width = this.props.width;
    } else {
      this.columnStyle.width = 128;
    }

    return React.createElement("th", {
      style: this.columnStyle
    }, React.createElement("span", null, this.props.columnName));
  } // lifecycle event handlers

});
module.exports = InputTableHeadColumn;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var TextBox = __webpack_require__(5);

var SecondaryButton = __webpack_require__(2);

var SearchBoxStyles = __webpack_require__(4).searchBox;
/**
 * The Single Select box component is a variation of the select box. Only one item can be selected and displayed.
 * The selection of items happens primarily through a layover list that is triggered by the '...' button on the select box.
 * The component will accept a change handler that will be triggered whenever an item is added or removed
 * from the selection.
 */


var SingleSelectBox = React.createClass({
  displayName: "SingleSelectBox",
  // styles
  placeholderStyle: {
    fontFamily: "verdana",
    fontSize: 12,
    fontStyle: "italic",
    color: "#666666"
  },
  selectBoxContainerStyle: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex"
  },
  searchButtonContainerStyle: {
    alignItems: "center",
    borderBottom: "1px solid #E3E3E3",
    borderRight: "1px solid #E3E3E3",
    borderTop: "1px solid #E3E3E3",
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    boxSizing: "border-box",
    color: "#333333",
    cursor: "pointer",
    display: "flex",
    fontSize: 14,
    height: 28,
    justifyContent: "center",
    textShadow: "0 1px 0 #ffffff",
    minWidth: 28
  },
  selectedItemContainerStyle: {
    alignItems: "center",
    border: "solid 1px #E3E3E3",
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    boxSizing: "border-box",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    float: "left",
    fontFamily: "verdana",
    fontSize: 12,
    marginBottom: 0,
    height: 28,
    overflowX: "auto",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 3,
    width: "100%"
  },
  displayTextContainerStyle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingRight: 4,
    cursor: "default",
    width: "calc(100% - 20px)"
  },
  // styles
  // custom properties
  // custom properties
  // custom methods

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    this.setState({
      isFocused: true
    });
  },
  // When the text box loses focus this function is called. It calls
  // the validator prop function if one is provided.
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });

    if (typeof this.props.validator == "function") {
      // create a new function from validator with the 'value' as an additional parameter.
      var validator = this.props.validator.bind(null, this.state.selectedItem);
      validator();
    }

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },

  /**
   * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
   * The value of the textbox along with the keyPress event is passed to the function.
   */
  handleEnterPress: function handleEnterPress(event) {
    if (this.state.disabled == true) {
      event.preventDefault();
    } else {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        if (typeof this.props.selectHandler == "function") {
          this.props.selectHandler(event);
        }
      }
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the control. If the prop is not supplied a unique identifier is created.
     */
    id: React.PropTypes.string,

    /**
     * Item that has been selected in the associated overlay.
     */
    selectedItem: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),

    /**
     * Function called when the ellipsis button of the SelectBox component is clicked.
     */
    selectHandler: React.PropTypes.func,

    /**
     * The name of the property of the selected object to be used for display in the tooltip and the large type of the component.
     * If this prop is not declared then the component will check if the selected item is a string or a number and display that else it will not be displayed.
     */
    itemDisplayPropName: React.PropTypes.string,

    /**
     * The placeholder search text for the component.
     */
    placeholder: React.PropTypes.string,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     * The width prop will override the size prop.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The width of the component (text box part) in pixels.
     */
    width: React.PropTypes.number,

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * Control will be disabled when this value is true. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Event handler called when the lost focus event is triggered.
     */
    focusLostHandler: React.PropTypes.func,

    /**
     * Event handler called when the selected item is removed. The removed item and the event are
     * passed in as arguments.
     */
    selectedItemRemovedHandler: React.PropTypes.func,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.number
  },
  mixins: [StyleMixins],
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var newValue = newProps.value == null || newProps.value == undefined ? "" : newProps.value; // cannot be null for controlled components

    var triggerValidation = false;

    if (typeof newProps.triggerValidation == "boolean") {
      triggerValidation = newProps.triggerValidation;
    }

    if (triggerValidation == true && this.state.triggerValidationHappened == false) {
      if (typeof this.props.validator == "function") {
        // create a new function from validator with the 'value' as an additional parameter.
        // this is done to accomodate composed components like the InputTableTextBoxColumn
        // that append their own parameters to the validator function.
        this.props.validator.call(null, newValue);
        this.setState({
          triggerValidationHappened: true
        });
      }
    } else {
      this.setState({
        validationMessage: newProps.validationMessage
      });
    }

    this.setState({
      disabled: newProps.disabled,
      required: newProps.required,
      selectedItem: newProps.selectedItem
    });
  },
  getInitialState: function getInitialState() {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      isRequired = this.props.required;
    }

    return {
      disabled: isDisabled,
      required: isRequired,
      selectedItem: this.props.selectedItem || null,
      triggerValidationHappened: false,
      isCancelable: false,
      isFocused: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Internal helper function triggered when the ellipsis button is clicked.
     * It calls the passed in handler function to the selectHandler prop
     */
    var ellipsesButtonHandler = function ellipsesButtonHandler(event) {
      if (_this.state.disabled == true) {
        event.preventDefault();
      } else if (typeof _this.props.selectHandler == "function") {
        _this.props.selectHandler(event);
      }
    };

    var removeItem = function removeItem(event) {
      var removedItem = _this.state.selectedItem;

      _this.setState({
        selectedItem: null
      }, function () {
        if (typeof _this.props.selectedItemRemovedHandler == "function") {
          _this.props.selectedItemRemovedHandler(removedItem, event);
        }
      });
    };

    var cancelButton = function cancelButton() {
      if (_this.state.selectedItem != null && !_this.state.disabled) {
        var containerStyle = _.extend({}, SearchBoxStyles.cancelIconOuterContainerStyle, {
          right: 28
        });

        return React.createElement("div", {
          style: containerStyle
        }, React.createElement("div", {
          style: SearchBoxStyles.cancelIconContainerStyle,
          onClick: removeItem
        }, React.createElement("i", {
          style: SearchBoxStyles.cancelIconStyle,
          className: "fa fa-times-circle"
        })));
      } else {
        return null;
      }
    };

    var id = this.props.id || _.uniqueId("selectBox_");

    var tooltip = null;

    if (this.state.selectedItem) {
      if (this.props.itemDisplayPropName && this.props.itemDisplayPropName.length > 0) {
        tooltip = this.state.selectedItem[this.props.itemDisplayPropName];
      } else if (typeof this.state.selectedItem == "string" || typeof this.state.selectedItem == "number") {
        tooltip = this.state.selectedItem;
      } else {
        tooltip = null;
      }
    }
    /**
     * Gets the container that shows the list of items that have been created.
     */


    var getSelectedItemContainer = function getSelectedItemContainer() {
      if (_this.props.size == "large") {
        _this.selectBoxContainerStyle.width = 600;
      } else if (_this.props.size === 'medium') {
        _this.selectBoxContainerStyle.width = 400;
      } else {
        _this.selectBoxContainerStyle.width = 200;
      } // if size prop is not specified and if the type is specified
      // then there is a custom width.


      if (!_this.props.size && _this.props.type === 'inputTableSingleSelectBoxColumn') {
        _this.selectBoxContainerStyle.width = 248;
      }

      var selectedItemContainerStyle = _this.selectedItemContainerStyle;

      if (_this.state.required) {
        selectedItemContainerStyle = Object.assign({}, _this.selectedItemContainerStyle, {
          borderLeft: "3px solid #f7901e"
        });
      } else {
        selectedItemContainerStyle.borderLeft = "solid 1px #E3E3E3";
      }

      var displayText = null;

      if (_this.state.selectedItem) {
        if (_this.props.itemDisplayPropName && _this.props.itemDisplayPropName.length > 0) {
          displayText = _this.state.selectedItem[_this.props.itemDisplayPropName];
        } else if (typeof _this.state.selectedItem == "string" || typeof _this.state.selectedItem == "number") {
          displayText = _this.state.selectedItem;
        } else {
          displayText = null;
        }
      } else if (_this.props.value && _this.props.value.length > 0) {
        displayText = _this.props.value;
      } // disabled vs non disabled state


      if (_this.props.disabled === true) {
        selectedItemContainerStyle.cursor = "default";
        selectedItemContainerStyle.backgroundImage = "none";
        selectedItemContainerStyle.backgroundColor = "#F3F3F3";
      } else {
        selectedItemContainerStyle.cursor = "pointer";
        selectedItemContainerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
        selectedItemContainerStyle.backgroundColor = "none";
      } // When there are no items remove the bottom padding, when
      // there are items add a 2px padding at the bottom, so that there is a gap
      // between the items and the bottom of the parent.


      if (displayText === null) {
        selectedItemContainerStyle.paddingTop = 1;
        selectedItemContainerStyle.paddingBottom = 1;
      } else {
        selectedItemContainerStyle.paddingTop = 0;
        selectedItemContainerStyle.paddingBottom = 2;
      }

      if (displayText === null) {
        return React.createElement("div", {
          style: selectedItemContainerStyle,
          onClick: ellipsesButtonHandler
        }, React.createElement("span", {
          style: _this.placeholderStyle
        }, _this.props.placeholder));
      } else {
        return React.createElement("div", {
          "data-component-type": "SelectedItem",
          style: selectedItemContainerStyle
        }, React.createElement("span", {
          style: _this.displayTextContainerStyle,
          title: displayText
        }, displayText), cancelButton());
      }
    };

    var validationMessageStyle = {
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      marginTop: 4,
      height: 16,
      position: "absolute"
    };

    var getValidationMessageComponent = function getValidationMessageComponent() {
      if (_this.props.validationMessage != null && _this.props.validationMessage != undefined && _this.props.validationMessage.length > 0) {
        return React.createElement("span", {
          style: validationMessageStyle
        }, _this.props.validationMessage);
      } else {
        return null;
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    } // focused style


    this.selectBoxContainerStyle.boxShadow = "none";
    this.selectBoxContainerStyle.outline = "none";

    if (this.state.isFocused == true && this.props.disabled === false) {
      this.selectBoxContainerStyle.borderRadius = 2;
      this.selectBoxContainerStyle.boxShadow = "0 0 4px #64ADC2";
    } // disabled vs non disabled state for elipsed button


    if (this.props.disabled === true) {
      this.searchButtonContainerStyle.cursor = "default";
      this.searchButtonContainerStyle.backgroundImage = "none";
      this.searchButtonContainerStyle.backgroundColor = "#F3F3F3";
    } else {
      this.searchButtonContainerStyle.cursor = "pointer";
      this.searchButtonContainerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
      this.searchButtonContainerStyle.backgroundColor = "none";
    }

    var getValidationType = function getValidationType() {
      if (_this.state.required === true) {
        return 'Required';
      }

      return null;
    };

    return React.createElement("div", {
      "data-validation-type": getValidationType()
    }, React.createElement("div", {
      id: id,
      style: this.selectBoxContainerStyle,
      tabIndex: tabIndex,
      onFocus: this.handleFocus,
      onBlur: this.handleLostFocus,
      onKeyDown: this.handleEnterPress,
      "data-component-name": "SelectBox",
      "data-component-type": "SingleSelect"
    }, getSelectedItemContainer(), React.createElement("div", {
      id: "button_" + id,
      style: this.searchButtonContainerStyle,
      onClick: ellipsesButtonHandler,
      "data-component-type": "Button"
    }, React.createElement("i", {
      className: "fa fa-ellipsis-h"
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    })), getValidationMessageComponent());
  } // lifecycle event handlers

});
module.exports = SingleSelectBox;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component that renders a Multi Select Container.
 */
var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(8);

var _ = __webpack_require__(1);

var TextBox = __webpack_require__(5);

var SearchBoxStyles = __webpack_require__(4).searchBox;

__webpack_require__(131);
/**
 * Component for displaying the select box with an ability to selet multiple options.
 * It contains the title on the top.
 * Multiple options can be selected.
 * Search also re-binds matched values to container and re-renders.
**/


var MultiSelect = React.createClass({
  displayName: "MultiSelect",
  // custom methods

  /**
   * Function called when there is a change in the selection in the select box.
   * For all the selected items find the matching items from the bound data and
   * call the changeHandler function with the matching items as the parameter to the function.
   */
  handleChange: function handleChange(event) {
    var _this = this;

    var selectedOptions = [];

    for (var i = 0; i < event.target.options.length; i++) {
      var option = event.target.options[i];

      if (option.selected == true) {
        var matchingObject = _.find(this.state.data, function (dataItem) {
          return dataItem[_this.props.valuePropName].toString() == option.value.toString();
        });

        selectedOptions.push(matchingObject);
      }
    }

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(selectedOptions, event);
    }
  },

  /**
   * Handle the scroll event so that we can add a shadow under the search box container
   * when the items are scrolled.
   */
  handleScroll: function handleScroll(evt) {
    if (evt && evt.currentTarget) {
      var isScrolling = evt.currentTarget.scrollTop > 0 ? true : false;

      if (this.state.isScrolling != isScrolling) {
        this.setState({
          isScrolling: isScrolling
        });
      }
    }

    evt.stopPropagation();
  },

  /**
   * General function for searching multi-select picker.
   */
  search: function search(value) {
    var searchValue = value.toLowerCase();
    var originalResult = this.state.originalData;
    var searchResult = [];

    if (value.length) {
      _.each(originalResult, function (item) {
        if (item[this.props.textPropName].toLowerCase().includes(searchValue)) {
          searchResult.push(item);
        }
      }, this);
    } else {
      searchResult = [];
    }

    this.value = value;

    if (searchResult.length || value.length && !searchResult.length) {
      this.setState({
        searchValue: value,
        data: searchResult
      });
    } else {
      this.setState({
        searchValue: value,
        data: this.state.originalData
      });
    }
  },

  /**
   * Double click handler for an item in the list.
   * Calls the doubleClickHandler prop function with the selected item.
   */
  itemDoubleClicked: function itemDoubleClicked(evt) {
    var _this2 = this;

    if (typeof this.props.doubleClickHandler === 'function') {
      var selectedOptions = [];
      var value = evt.target.value;

      var matchingObject = _.find(this.state.data, function (dataItem) {
        return dataItem[_this2.props.valuePropName].toString() == value.toString();
      });

      selectedOptions.push(matchingObject);
      this.props.doubleClickHandler(selectedOptions, evt);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component. If the prop value is not supplied a unique identifier is added.
     */
    id: React.PropTypes.string,

    /**
     * An array of items that form the options inside the select.
     */
    data: React.PropTypes.array.isRequired,

    /**
     * The name of the prop in the object that is associated with the value of the option.
     */
    valuePropName: React.PropTypes.string.isRequired,

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     * A function can also be passed in as the value of the prop in which case the function
     * will be called when rendering the text and the data item associated with the dropDown_
     * option will be passed in as an argument to the function. This is helpful when the value
     * to be displayed needs to be computed.
     */
    textPropName: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]).isRequired,

    /**
     * The value for the option that should be initially selected.
     */
    initialSelectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Property to enable or disable the radio button. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    size: React.PropTypes.oneOf(["condition", "small", "operator", "medium"]),

    /**
     * Function called when the selected value of the drop down changes. The first parameter
     * is the value of the new selected item.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Function called when an item in the list is double clicked. The selected item is
     * passed into the handler.
     */
    doubleClickHandler: React.PropTypes.func
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (_.isEqual(this.state.data, newProps.data) == false) {
      this.setState({
        searchValue: null,
        data: newProps.data,
        originalData: _.clone(newProps.data)
      });
    }
  },
  getInitialState: function getInitialState() {
    return {
      searchValue: null,
      data: this.props.data,
      originalData: _.clone(this.props.data),
      value: this.props.initialSelectedValue,
      isScrolling: false
    };
  },
  render: function render() {
    var _this3 = this;

    var disabled = false;

    if (typeof this.props.disabled == "boolean") {
      disabled = this.props.disabled;
    }

    var value = this.state ? this.state.value : this.props.initialSelectedValue;

    var id = this.props.id || _.uniqueId("dropDown_");

    var getOptions = function getOptions() {
      var options = [];

      if (_this3.state.data && _this3.props.valuePropName && _this3.props.textPropName) {
        options = options.concat(_this3.state.data.map(function (dataItem, index, arr) {
          var text = null;

          if (typeof _this3.props.textPropName == "function") {
            text = _this3.props.textPropName(dataItem);
          } else if (typeof _this3.props.textPropName == "string") {
            text = dataItem[_this3.props.textPropName];
          }

          return React.createElement("option", {
            key: id + "_key_" + index,
            value: dataItem[_this3.props.valuePropName],
            title: dataItem[_this3.props.tooltipPropName],
            className: "multiSelect-optionStyle",
            onDoubleClick: _this3.itemDoubleClicked
          }, text);
        }));
      }

      return options;
    };

    var id = this.props.id || _.uniqueId("searchBox_");

    var handleEnterPress = function handleEnterPress(value, event) {
      search(event);
    };

    var handleSearchChange = function handleSearchChange(value, event) {
      _this3.search(value);
    };

    var searchContainer = function searchContainer() {
      var getScrollStyle = function getScrollStyle() {
        if (_this3.state.isScrolling == true) {
          return {
            boxShadow: "0px 2px 4px 0 #BBBBBB"
          };
        } else {
          return null;
        }
      };

      if (_this3.state.data.length || _this3.state.searchValue) {
        return React.createElement("div", null, React.createElement("div", {
          id: "button_" + id,
          className: "multiSelect-searchButtonContainerStyle"
        }, React.createElement("i", {
          className: "fa fa-search"
        })), React.createElement("div", {
          className: "multiSelect-inputContainerStyle",
          style: getScrollStyle()
        }, React.createElement(TextBox, _defineProperty({
          id: "textbox_" + id,
          maxLength: _this3.props.maxLength,
          disabled: _this3.props.disabled,
          type: "multiSelect",
          changeHandler: handleSearchChange,
          enterPressHandler: handleEnterPress,
          value: _this3.value,
          standalone: false
        }, "type", "multiSelect"))));
      } else {
        return null;
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    }

    var getValidationMessageComponent = function getValidationMessageComponent() {
      if (_this3.props.validationMessage != null && _this3.props.validationMessage != undefined && _this3.props.validationMessage.length > 0) {
        return React.createElement("span", {
          className: "multiSelect-validationMessageStyle"
        }, _this3.props.validationMessage);
      } else {
        return null;
      }
    };

    var getTitle = function getTitle() {
      if (_this3.props.title) {
        var title = _this3.props.title + ' (' + _this3.state.data.length + ')';
        return React.createElement("div", {
          id: titleId,
          className: "multiSelect-titleStyle"
        }, title);
      } else {
        return null;
      }
    };

    var id = this.props.id || _.unique("multiSelect_");

    var titleId = this.props.titleId || _.unique("multiSelectTitle_");

    return React.createElement("div", {
      className: "multiSelect-selectStyle"
    }, getTitle(), React.createElement("div", null, searchContainer()), React.createElement("div", {
      className: "multiSelect-selContainer"
    }, React.createElement("select", {
      id: id,
      className: "multiSelect-selStyle",
      multiple: true,
      onChange: this.handleChange,
      onScroll: this.handleScroll
    }, getOptions())), getValidationMessageComponent());
  } // lifecycle event handlers

});
module.exports = MultiSelect;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _sideBarContainerStyl;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component for the side bar in a list page. This is a container that
 * can contain buttons, filter and search sections
 */
var React = __webpack_require__(0);

var sideBarContainerStyle = (_sideBarContainerStyl = {
  display: "table-cell",
  padding: "32px 8px 32px 0px",
  width: 248,
  verticalAlign: "top",
  borderRight: "1px solid #E1E1E1",
  backgroundImage: "linear-gradient(-180deg, #fff 9%, #ebf1f5 100%)"
}, _defineProperty(_sideBarContainerStyl, "backgroundImage", "-moz-linear-gradient(center top , #fff, #ebf1f5) repeat scroll 0% 0% transparent"), _defineProperty(_sideBarContainerStyl, "backgroundImage", "-ms-linear-gradient(top, #fff, #ebf1f5)"), _defineProperty(_sideBarContainerStyl, "backgroundImage", "-webkit-linear-gradient(top, #fff, #ebf1f5)"), _defineProperty(_sideBarContainerStyl, "filter", "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#FFFFFF, endColorstr=#EBF1F5)"), _sideBarContainerStyl); // Required due to the sizing of display type 'table-cell' elements

var sideBarSpacerStyle = {
  width: 248
};
var SideBar = React.createClass({
  displayName: "SideBar",
  render: function render() {
    var id = this.props.id || "sideBar";
    return React.createElement("div", {
      id: id,
      style: sideBarContainerStyle,
      "data-component-name": "SideBar"
    }, React.createElement("div", {
      style: sideBarSpacerStyle
    }), this.props.children);
  }
});
module.exports = SideBar;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * Container for buttons in the side bar. Provides the necessary padding
 * and other styling so that developers can just add the container and
 * put buttons inside 
 */


var SideBarButtonContainer = React.createClass({
  displayName: "SideBarButtonContainer",
  // styles
  sideBarButtonContainerStyle: {
    verticalAlign: "top",
    marginLeft: 20,
    paddingBottom: 12
  },

  /**
   * The style applied to the button wrapper
   */
  buttonContainerStyle: {
    paddingBottom: 16
  },
  // styles
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component.
     */
    id: React.PropTypes.string,

    /**
     * The buttons in the container.
     */
    children: React.PropTypes.array
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("sideBarButtonContainer_");
    /**
     * Wrap each button into a div with a bottom padding to space each
     * button from each other.
     */


    var renderChildren = function renderChildren() {
      return React.Children.map(_this.props.children, function (child) {
        return React.createElement("div", {
          style: _this.buttonContainerStyle
        }, React.cloneElement(child));
      });
    };

    return React.createElement("div", {
      id: id,
      style: this.sideBarButtonContainerStyle
    }, renderChildren());
  } // lifecycle event handlers

});
module.exports = SideBarButtonContainer;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(1);

var React = __webpack_require__(0);

var PrimaryButton = __webpack_require__(10);
/**
 * This button is found in the sidebar and is generally the main action listed that will be used in that area. One exception is when there is a highlighted filter in the sidebar that will then take visual prominence over this button.
 *The Primary Button - Sidebar looks very similar to the Primary Button that can be found in forms, modal dialogs, and other areas where there is a major call to action. The notable differences are the set width of the button and the spacing above and below the button when in the sidebar.
 */


var SideBarPrimaryButton = React.createClass({
  displayName: "SideBarPrimaryButton",
  // custom properties
  primaryButtonBaseStyle: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: "verdana",
    width: 200,
    fontSize: 12,
    lineHeight: "normal",
    fontWeight: "bold",
    textShadow: "0 0 0 rgba(0,0,0,0.3)",
    height: 32,
    borderRadius: 20,
    WebkitBorderRadius: 20,
    boxShadow: "0 1px 1px 1px rgba(0,0,0,0.1)",
    outline: "none"
  },
  primaryButtonStyle: function primaryButtonStyle() {
    return _.extend({
      cursor: "default",
      color: "#CFCFCF",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledStyle: function primaryButtonEnabledStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#285C7E",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledHoverStyle: function primaryButtonEnabledHoverStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#203a4a",
      border: "1px solid #c9c9c9",
      background: "linear-gradient(180deg, #e3e3e3, #cddde6)"
    }, this.primaryButtonBaseStyle);
  },
  innerLayerStyle: {
    display: "flex",
    alignItems: "center",
    height: 20
  },
  textContainerStyle: {
    paddingLeft: 6,
    paddingRight: 16,
    width: 140,
    // the following two styles are required to make the text-overflow work.
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block"
  },
  buttonContainerStyle: {
    display: "flex",
    alignItems: "center"
  },
  // custome properties
  // custom methods
  handleFocus: function handleFocus(event) {
    this.setState({
      isFocused: true
    });
  },
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
  },
  // custom methods
  // lifecycle event handlers

  /**
   * We need to set the enabled state when the enabled props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var enabled = newProps.enabled == false ? false : true;

    if (enabled != this.state.enabled) {
      this.setState({
        enabled: enabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var enabled = this.props.enabled == false ? false : true;
    return {
      enabled: enabled,
      // value set by prop because it is the default value
      showHover: false,
      isFocused: false
    };
  },
  propTypes: {
    /**
     * Id for the button
     */
    id: React.PropTypes.string,

    /**
     * Text to display on the button
     */
    text: React.PropTypes.string,

    /**
     * Enables or disables the button. Default is true-enabled.
     */
    enabled: React.PropTypes.bool,

    /**
     * The type of button. This decides the type of icon that is used.
     * The only option right now is "create". 
     */
    type: React.PropTypes.oneOf(["create"]),

    /**
     * Font-Awesome CSS class for icon. Example "fa fa-car"
     */
    icon: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func,

    /**
     * Show the help icon and render the children of the button as the help overlay.
     */
    showHelpIcon: React.PropTypes.bool
  },
  render: function render() {
    var _this = this;

    var clickHandler = function clickHandler() {
      if (_this.state.enabled == true) {
        return _this.props.clickHandler;
      } else {
        return null;
      }
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.enabled == false) {
        buttonStyle = _this.primaryButtonStyle();
      } else {
        if (_this.state.showHover == true) {
          buttonStyle = _this.primaryButtonEnabledHoverStyle();
        } else {
          buttonStyle = _this.primaryButtonEnabledStyle();
        }
      }

      if (_this.props.inline == true) {
        buttonStyle.display = "inline-flex";
      }

      if (_this.props.overrideStyle) {
        buttonStyle = _.extend(buttonStyle, _this.props.overrideStyle);
      } // focus


      if (_this.state.enabled == true && _this.state.isFocused == true) {
        buttonStyle.background = "linear-gradient(180deg, #FFFFFF, #EBF1F5)";
        buttonStyle.borderRadius = 100;
        buttonStyle.boxShadow = "0 0 4px #64ADC2";
        buttonStyle.outline = "none";
      }

      return buttonStyle;
    };

    var icon = function icon() {
      if (_this.props.type == "create") {
        return React.createElement("span", {
          style: {
            marginLeft: 14
          },
          className: "fa-stack"
        }, React.createElement("i", {
          style: {
            color: "#346F8F"
          },
          className: "fa fa-circle fa-stack-2x"
        }), React.createElement("i", {
          style: {
            color: "#CDE2EC",
            fontSize: 21
          },
          className: "fa fa-plus-circle fa-stack-1x"
        }));
      } else if (_this.props.icon) {
        return React.createElement("span", {
          style: {
            marginLeft: 16,
            fontSize: 16
          },
          className: _this.props.icon
        });
      } else {
        return null;
      }
    };
    /**
     * Function called when the mouse enters the button
     */


    var showHover = function showHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: true
        });
      }
    };
    /**
     * Function called when the mouse leaves the button
     */


    var hideHover = function hideHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: false
        });
      }
    }; // used for getting the enabled/disabled state of the button component used by UI automation


    var getComponentState = function getComponentState() {
      if (_this.state.enabled === true) {
        return 'enabled';
      }

      return 'disabled';
    };

    var id = this.props.id || _.uniqueId("sideBarPrimaryButton_");
    /**
     * Function that renders the button.
     */


    var renderButton = function renderButton() {
      return React.createElement("div", {
        id: id,
        "data-component-type": "Button",
        "data-component-name": "SideBarPrimaryButton",
        style: currentStyle(),
        onClick: clickHandler(),
        onMouseEnter: showHover,
        onMouseLeave: hideHover,
        onFocus: _this.handleFocus,
        onBlur: _this.handleLostFocus,
        "data-component-state": getComponentState()
      }, React.createElement("div", {
        style: _this.innerLayerStyle
      }, icon(), React.createElement("span", {
        style: _this.textContainerStyle,
        title: _this.props.text,
        "data-component-type": "Label"
      }, _this.props.text)));
    };

    if (this.props.showHelpIcon == true) {
      return React.createElement("div", {
        style: this.buttonContainerStyle
      }, renderButton(), this.props.children);
    } else {
      return renderButton();
    }
  } // lifecycle event handlers

});
module.exports = SideBarPrimaryButton;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var onClickOutside = __webpack_require__(65).default;

__webpack_require__(135);
/**
 * This is basically a SideBarPrimaryButton with a popup menu
 * This button is found in the sidebar and is generally the main action listed that will be used in that area. One exception is when there is a highlighted filter in the sidebar that will then take visual prominence over this button.
 *The Primary Button - Sidebar looks very similar to the Primary Button that can be found in forms, modal dialogs, and other areas where there is a major call to action. The notable differences are the set width of the button and the spacing above and below the button when in the sidebar.
 */


var SideBarPrimaryButtonMenu = React.createClass({
  displayName: "SideBarPrimaryButtonMenu",
  // custom properties
  primaryButtonBaseStyle: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: "verdana",
    width: 200,
    fontSize: 12,
    lineHeight: "normal",
    fontWeight: "bold",
    textShadow: "0 0 0 rgba(0,0,0,0.3)",
    height: 32,
    borderRadius: 20,
    WebkitBorderRadius: 20,
    boxShadow: "0 1px 1px 1px rgba(0,0,0,0.1)",
    outline: "none"
  },
  primaryButtonStyle: function primaryButtonStyle() {
    return _.extend({
      cursor: "default",
      color: "#CFCFCF",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledStyle: function primaryButtonEnabledStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#285C7E",
      border: "1px solid #D1DCE4",
      background: "linear-gradient(180deg, #FFFFFF, #EBF1F5)"
    }, this.primaryButtonBaseStyle);
  },
  primaryButtonEnabledHoverStyle: function primaryButtonEnabledHoverStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#203a4a",
      border: "1px solid #c9c9c9",
      background: "linear-gradient(180deg, #e3e3e3, #cddde6)"
    }, this.primaryButtonBaseStyle);
  },
  innerLayerStyle: {
    display: "flex",
    alignItems: "center",
    height: 20
  },
  textContainerStyle: {
    paddingLeft: 6,
    paddingRight: 16,
    width: 140,
    // the following two styles are required to make the text-overflow work.
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block"
  },
  buttonContainerStyle: {
    display: "flex",
    alignItems: "center"
  },
  // custome properties
  // custom methods
  handleFocus: function handleFocus(event) {
    this.setState({
      isFocused: true
    });
  },
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });
  },
  // custom methods
  // lifecycle event handlers

  /**
   * We need to set the enabled state when the enabled props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var enabled = newProps.enabled == false ? false : true;

    if (enabled != this.state.enabled) {
      this.setState({
        enabled: enabled
      });
    }
  },
  getInitialState: function getInitialState() {
    var enabled = this.props.enabled == false ? false : true;
    return {
      enabled: enabled,
      // value set by prop because it is the default value
      showHover: false,
      isFocused: false,
      showPopupMenu: false
    };
  },
  propTypes: {
    /**
     * Id for the button
     */
    id: React.PropTypes.string,

    /**
     * Text to display on the button
     */
    text: React.PropTypes.string,

    /**
     * Enables or disables the button. Default is true-enabled.
     */
    enabled: React.PropTypes.bool,

    /**
     * Font-Awesome CSS class for icon. Example "fa fa-car"
     */
    icon: React.PropTypes.string,

    /**
     * Handler for the click event of the menu button, which is then passed to the handler.
     */
    primaryClickHandler: React.PropTypes.func,

    /**
     * Handler for the click event of a menu item, which is then passed to the handler.
     */
    clickHandler: React.PropTypes.func,

    /**
     * Show the help icon and render the children of the button as the help overlay.
     */
    showHelpIcon: React.PropTypes.bool,

    /**
     * An array of items that form the selections inside the popup.
     */
    menuItems: React.PropTypes.array.isRequired,

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     */
    textPropName: React.PropTypes.string.isRequired,

    /**
     * The name of the prop in the object that is associated with the value of the option.
     */
    valuePropName: React.PropTypes.string.isRequired
  },
  // If a mouse click is detected anywhere but the component itself, we will be notified here.
  // This is a required method for the react-onclickoutside module.
  handleClickOutside: function handleClickOutside() {
    this.setState({
      showPopupMenu: false
    });
  },
  render: function render() {
    var _this = this;

    var togglePopupMenu = function togglePopupMenu() {
      if (_this.state.enabled == true) _this.setState({
        showPopupMenu: !_this.state.showPopupMenu
      }); // Call parent click handler if popup will be shown

      if (!_this.state.showPopupMenu && _this.props.primaryClickHandler) _this.props.primaryClickHandler();
    };

    var clickHandler = function clickHandler(menuItem) {
      _this.setState({
        showPopupMenu: false
      });

      if (_this.state.enabled == true) {
        if (!menuItem.disabled) _this.props.clickHandler(menuItem);
      } else {
        return null;
      }
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this.state.enabled == false) {
        buttonStyle = _this.primaryButtonStyle();
      } else {
        if (_this.state.showHover == true) {
          buttonStyle = _this.primaryButtonEnabledHoverStyle();
        } else {
          buttonStyle = _this.primaryButtonEnabledStyle();
        }
      }

      if (_this.props.inline == true) {
        buttonStyle.display = "inline-flex";
      }

      if (_this.props.overrideStyle) {
        buttonStyle = _.extend(buttonStyle, _this.props.overrideStyle);
      } // focus


      if (_this.state.enabled == true && _this.state.isFocused == true) {
        buttonStyle.background = "linear-gradient(180deg, #FFFFFF, #EBF1F5)";
        buttonStyle.borderRadius = 100;
        buttonStyle.boxShadow = "0 0 4px #64ADC2";
        buttonStyle.outline = "none";
      }

      return buttonStyle;
    };

    var icon = function icon() {
      if (_this.props.icon) {
        return React.createElement("span", {
          style: {
            marginLeft: 16,
            fontSize: 16
          },
          className: _this.props.icon
        });
      } else {
        return null;
      }
    };

    var dropdownIcon = function dropdownIcon() {
      return React.createElement("span", {
        style: {
          marginLeft: -18,
          fontSize: 16
        },
        className: "fa fa-caret-down"
      });
    };
    /**
     * Function called when the mouse enters the button
     */


    var showHover = function showHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: true
        });
      }
    };
    /**
     * Function called when the mouse leaves the button
     */


    var hideHover = function hideHover(event) {
      if (_this.state.enabled == true) {
        _this.setState({
          showHover: false
        });
      }
    }; // used for getting the enabled/disabled state of the button component used by UI automation


    var getComponentState = function getComponentState() {
      if (_this.state.enabled === true) {
        return 'enabled';
      }

      return 'disabled';
    };

    var id = this.props.id || _.uniqueId("sideBarPrimaryButtonMenu_");
    /**
     * Function that renders the button.
     */


    var renderButton = function renderButton() {
      return React.createElement("div", {
        style: {
          position: "relative"
        }
      }, React.createElement("div", {
        id: id,
        "data-component-type": "Button",
        "data-component-name": "SideBarPrimaryButton",
        style: currentStyle(),
        onClick: togglePopupMenu,
        onMouseEnter: showHover,
        onMouseLeave: hideHover,
        onFocus: _this.handleFocus,
        onBlur: _this.handleLostFocus,
        "data-component-state": getComponentState()
      }, React.createElement("div", {
        style: _this.innerLayerStyle
      }, icon(), React.createElement("span", {
        style: _this.textContainerStyle,
        title: _this.props.text,
        "data-component-type": "Label"
      }, _this.props.text), dropdownIcon())), React.createElement("div", {
        className: "popupMenuContainer",
        style: {
          display: _this.state.showPopupMenu ? "block" : "none"
        }
      }, _this.props.menuItems.map(function (menuItem) {
        return React.createElement("div", {
          key: menuItem[_this.props.textPropName],
          className: "link menuItem"
        }, React.createElement("span", {
          title: menuItem[_this.props.textPropName],
          style: menuItem.disabled ? {
            color: "#C0C0C0",
            cursor: "default"
          } : {},
          onClick: clickHandler.bind(_this, menuItem)
        }, menuItem[_this.props.textPropName]));
      })));
    };

    if (this.props.showHelpIcon == true) {
      return React.createElement("div", {
        style: this.buttonContainerStyle
      }, renderButton(), this.props.children);
    } else {
      return renderButton();
    }
  } // lifecycle event handlers

}); //module.exports = typeof onClickOutside === 'function' ? onClickOutside(SideBarPrimaryButtonMenu) : require('react-click-outside')(SideBarPrimaryButtonMenu);

module.exports = onClickOutside(SideBarPrimaryButtonMenu);

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-onclickoutside");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Secondary button for the side bar. Visually the secondary button does not have a border or background
 * @param {String} id Id for the button
 * @param {event} onClick Handler for the click event of the button
 * @param {String} text Text to display on the button
 * @param {bool} enabled Boolean that enables or disables the button
 * @param {String} icon CSS class for icon. Example "fa fa-database" if using font-awesome
 */
var React = __webpack_require__(0);

var SecondaryButton = __webpack_require__(2);

var SideBarSecondaryButton = React.createClass({
  displayName: "SideBarSecondaryButton",
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the button, if not provided a unique id is added.
     */
    id: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Boolean that enables or disables the button. Defaults to true.
     */
    enabled: React.PropTypes.bool,

    /**
     * CSS class for icon. Example "fa fa-database" if using font-awesome icons.
     */
    icon: React.PropTypes.string
  },
  render: function render() {
    var overrideStyle = {
      height: 31,
      width: 207
    };
    return React.createElement(SecondaryButton, {
      id: this.props.id,
      icon: this.props.icon,
      enabled: this.props.enabled,
      clickHandler: this.props.clickHandler,
      type: "sidebar",
      text: this.props.text
    });
  }
});
module.exports = SideBarSecondaryButton;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\tcursor: ", ";\n\t\t\tcolor: ", ";\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: normal;\n\t\t\tdisplay: block;\n\t\t\tpadding: 4px 8px;\n\t\t    &:hover {\n\t\t\t\tbackground-color: ", ";\n\t\t    }\n\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\tpadding-left: 6px;\n\t\t\tpadding-right: 6px;\n\t\t\tpadding-bottom: 3px;\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Secondary button with popup menu for the side bar. Visually the secondary button does not have a border or background
 */
var React = __webpack_require__(0);

var onClickOutside = __webpack_require__(65).default;

var BalloonContainer = __webpack_require__(42);

var styled = __webpack_require__(28).default;

var SecondaryButton = __webpack_require__(2);

var SideBarSecondaryButtonMenu = React.createClass({
  displayName: "SideBarSecondaryButtonMenu",
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the button, if not provided a unique id is added.
     */
    id: React.PropTypes.string,

    /**
     * Handler for the click event of the button.
     */
    clickHandler: React.PropTypes.func,

    /**
     *  Handler for the click event of a menu item, which is then passed to the handler.
     */
    menuItemClickHandler: React.PropTypes.func,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Boolean that enables or disables the button. Defaults to true.
     */
    enabled: React.PropTypes.bool,

    /**
     * An array of items that form the selections inside the popup. {textPropName: ..., valuePropName:..., disabled:..., others...}
     */
    menuItems: React.PropTypes.array.isRequired,

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     */
    textPropName: React.PropTypes.string.isRequired,

    /**
     * The name of the prop in the object that is associated with the value of the option.
     */
    valuePropName: React.PropTypes.string.isRequired,

    /**
     * CSS class for icon. Example "fa fa-database" if using font-awesome icons.
     */
    icon: React.PropTypes.string
  },
  getInitialState: function getInitialState() {
    return {
      enabled: this.props.enabled,
      showPopupMenu: false
    };
  },
  // If a mouse clicked is detected anywhere but the component itself, we will be notified here.
  // This is a required method for the react-onclickoutside module.
  handleClickOutside: function handleClickOutside() {
    this.setState({
      showPopupMenu: false
    });
  },
  render: function render() {
    var _this = this;

    var popupStyle = {
      position: "absolute",
      top: 35,
      right: 12,
      zIndex: 100,
      fontSize: 11
    };
    var Link = styled.div(_templateObject());
    var MenuItem = styled.span(_templateObject2(), function (props) {
      return props.disabled ? "default" : "pointer";
    }, function (props) {
      return props.disabled ? "#C0C0C0" : "#346f8f";
    }, function (props) {
      return props.disabled ? "white" : "#EAF0F4";
    }); // The main button is clicked

    var clickHandler = function clickHandler() {
      // Toggle the popup menu
      if (_this.state.enabled == true) _this.setState({
        showPopupMenu: !_this.state.showPopupMenu
      }); // Call parent click handler if popup will be shown

      if (!_this.state.showPopupMenu && _this.props.clickHandler) _this.props.clickHandler();
    }; // A menu item is clicked


    var menuItemClickHandler = function menuItemClickHandler(menuItem) {
      if (!menuItem.disabled) {
        _this.setState({
          showPopupMenu: false
        });

        if (_this.props.menuItemClickHandler) _this.props.menuItemClickHandler(menuItem);
      }
    };

    return React.createElement("div", {
      id: this.props.id,
      style: {
        position: "relative"
      }
    }, React.createElement(SecondaryButton, {
      icon: this.props.icon,
      enabled: this.props.enabled,
      clickHandler: clickHandler,
      type: "sidebar",
      text: this.props.text,
      noFocus: true
    }), React.createElement("div", {
      style: _objectSpread({}, popupStyle)
    }, React.createElement(BalloonContainer, {
      size: 210,
      arrowLocation: 50,
      show: this.state.showPopupMenu
    }, this.props.menuItems.map(function (menuItem) {
      return React.createElement(Link, {
        key: menuItem[_this.props.textPropName]
      }, React.createElement(MenuItem, {
        title: menuItem[_this.props.textPropName],
        onClick: menuItemClickHandler.bind(_this, menuItem),
        disabled: menuItem.disabled
      }, menuItem[_this.props.textPropName]));
    }))));
  }
}); //module.exports = typeof onClickOutside === 'function' ? onClickOutside(SideBarSecondaryButtonMenu) : require('react-click-outside')(SideBarSecondaryButtonMenu);

module.exports = onClickOutside(SideBarSecondaryButtonMenu);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Container component for filters in the side bar. This same component can also be used as a search container
 * @param {String} id The id for the component
 * @param {String} title The title for the container
 * @param {Func} clearHandler Shows a clickable "Clear" link and calls the callback when clicked. It is totally up to the caller to determine what to do with that.
 * @param {String} clearText The text to show for the "Clear" link
 * @param {Array} children The items in the container
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SideBarFilterContainer = React.createClass({
  displayName: "SideBarFilterContainer",
  // styles
  sideBarFilterContainerStyle: {
    verticalAlign: "top",
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 16,
    marginBottom: 16,
    background: "#FFFFFF",
    border: "1px solid #E1E1E1",
    borderLeft: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    color: "#285c7e",
    fontSize: 12,
    fontWeight: "normal"
  },
  sideBarFilterContainerTitleStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 20,
    marginBottom: 12,
    fontFamily: "verdana"
  },
  // styles
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("sideBarFilterContainer_");

    var getTitle = function getTitle() {
      if (_this.props.title) {
        return React.createElement("div", {
          style: _this.sideBarFilterContainerTitleStyle
        }, React.createElement("span", {
          "data-component-name": "SideBarFilterContainer",
          "data-component-type": "Label"
        }, _this.props.title), typeof _this.props.clearHandler == "function" && React.createElement("span", {
          onClick: _this.props.clearHandler,
          style: {
            float: "right",
            fontSize: 13,
            color: "rgb(40, 92, 126)",
            lineHeight: "18px",
            cursor: "pointer"
          }
        }, _this.props.clearText));
      }
    };

    return React.createElement("div", {
      id: id,
      style: this.sideBarFilterContainerStyle,
      "data-component-name": "SideBarFilterContainer",
      "data-component-type": "Container"
    }, getTitle(), this.props.children);
  }
});
module.exports = SideBarFilterContainer;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Container component for filters in the side bar. This same component can also be used as a search container
 * @param {String} id The id for the component
 * @param {String} title The title for the container
 * @param {Array} children The items in the container
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var SideBarFilterSubContainer = React.createClass({
  displayName: "SideBarFilterSubContainer",
  // styles
  sideBarFilterSubContainerStyle: {
    verticalAlign: "top",
    marginBottom: 20,
    fontFamily: "verdana",
    fontSize: 12
  },
  sideBarFilterSubContainerTitleStyle: {
    color: "#666666",
    fontWeight: "bold",
    marginBottom: 12,
    width: '50%',
    float: 'left',
    lineHeight: '21px'
  },
  sideBarFilterSubContainerButtonContainerStyle: {
    marginBottom: 12,
    width: '50%',
    float: 'right',
    textAlign: 'right'
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("sideBarFilterSubContainer_"); // Width adjustment for title and button container


    if (this.props.clearButtonText && !this.props.title) {
      this.sideBarFilterSubContainerButtonContainerStyle.width = '100%';
      this.sideBarFilterSubContainerTitleStyle.width = '0%';
    } else if (!this.props.clearButtonText && this.props.title) {
      this.sideBarFilterSubContainerButtonContainerStyle.width = '0%';
      this.sideBarFilterSubContainerTitleStyle.width = '100%';
    } else {
      this.sideBarFilterSubContainerButtonContainerStyle.width = '40%';
      this.sideBarFilterSubContainerTitleStyle.width = '60%';
    }

    var handleClick = function handleClick(evt) {
      if (typeof _this.props.clearButtonClickHandler === 'function') {
        _this.props.clearButtonClickHandler(evt);
      }
    };

    var getButtonContainer = function getButtonContainer() {
      if (_this.props.clearButtonText && _this.props.clearButtonText.length > 0) {
        return React.createElement("div", {
          style: _this.sideBarFilterSubContainerButtonContainerStyle
        }, React.createElement(SecondaryButton, {
          id: "clearButton",
          text: _this.props.clearButtonText,
          clickHandler: handleClick
        }));
      }
    };

    var getTitle = function getTitle() {
      if (_this.props.title) {
        return React.createElement("div", {
          style: _this.sideBarFilterSubContainerTitleStyle,
          "data-component-name": "SideBarFilterSubContainer",
          "data-component-type": "Label"
        }, _this.props.title);
      }

      return null;
    };

    return React.createElement("div", {
      id: id,
      style: this.sideBarFilterSubContainerStyle,
      "data-component-name": "SideBarFilterSubContainer",
      "data-component-type": "Container"
    }, React.createElement("div", null, getTitle(), getButtonContainer(), React.createElement("div", {
      style: {
        clear: 'both'
      }
    })), this.props.children);
  }
});
module.exports = SideBarFilterSubContainer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var TextBox = __webpack_require__(5);

var SearchBoxStyles = __webpack_require__(4).searchBox;
/**
 * The Search input field is typically found on List Pages and modal dialogs that have a list. It includes both an input text field and a search icon button to the right. There is a X button that will appear once the user types to clear the search input field.
The search functionality allows the user to search the list and return a list of values that meet the search criteria. The action of executing a search on the list will result in a "Results Counter" to appear above the list and be updated with the number of results there are.
 */


var SearchBox = React.createClass({
  displayName: "SearchBox",
  // custom properties
  value: "",
  // custom properties
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the button. If not provided a unique value is assigned as id.
     */
    id: React.PropTypes.string,

    /**
     * Handler to be passed into the component that is called when the user clicks the 'x' icon to clear the search.
     */
    cancelSearchHandler: React.PropTypes.func,

    /**
     * Handler to be passed into the component. It is called when the search icon is clicked. The handler is passed in the search term.
     */
    searchHandler: React.PropTypes.func,

    /**
     * The maximum length of the search string allowed.
     */
    maxLength: React.PropTypes.number,

    /**
     * Control will be disabled when this value is true. Default is false.
     */
    disabled: React.PropTypes.bool
  },
  mixins: [StyleMixins],
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      disabled: newProps.disabled
    });
  },
  getInitialState: function getInitialState() {
    this.value = this.props.initialSearch || "";
    return {
      isCancelable: this.value != ""
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Internal helper function triggered when the cancel button is clicked
     * that sets the editable set to textbox and calls cancel search handler function prop
     */
    var cancelSearch = function cancelSearch(event) {
      _this.setState({
        isCancelable: false
      });

      _this.value = "";

      if (_this.props.cancelSearchHandler) {
        _this.props.cancelSearchHandler(event);
      }
    };
    /**
     * Internal helper function triggered when the search button is clicked.
     * It calls the passed in search function handler prop
     */


    var search = function search(event) {
      if (_this.state.disabled == true) {
        event.preventDefault();
      } else if (_this.props.searchHandler) {
        var flag = _this.value !== null && _this.value !== undefined && typeof _this.value === "string";

        if (flag) {
          _this.props.searchHandler(_this.value, event); // set isCancelable to true, since now the search can be cleared


          _this.setState({
            isCancelable: _this.value.length > 0
          });
        }
      }
    };

    var handleChange = function handleChange(value, event) {
      _this.value = value;
    };

    var handleEnterPress = function handleEnterPress(value, event) {
      search(event);
    };

    var id = this.props.id || _.uniqueId("searchBox_");

    var cancelButton = function cancelButton() {
      if (_this.state.isCancelable == true) {
        var containerStyle = _.extend({}, SearchBoxStyles.cancelIconOuterContainerStyle, {
          right: 0
        });

        return React.createElement("div", {
          style: containerStyle
        }, React.createElement("div", {
          id: 'clearSearch_' + id,
          style: SearchBoxStyles.cancelIconContainerStyle,
          onClick: cancelSearch
        }, React.createElement("i", {
          style: SearchBoxStyles.cancelIconStyle,
          className: "fa fa-times-circle"
        })));
      } else {
        return null;
      }
    };

    var textPart = function textPart() {
      return React.createElement("div", {
        style: SearchBoxStyles.inputContainerStyle
      }, React.createElement(TextBox, {
        id: "textbox_" + id,
        maxLength: _this.props.maxLength,
        disabled: _this.props.disabled,
        changeHandler: handleChange,
        size: "small",
        enterPressHandler: handleEnterPress,
        value: _this.value,
        standalone: false,
        type: "search"
      }), cancelButton());
    };

    var containerStyle = SearchBoxStyles.searchButtonContainerStyle;

    if (this.props.disabled === true) {
      containerStyle.backgroundColor = "#F3F3F3";
      containerStyle.backgroundImage = "none";
      containerStyle.cursor = "default";
    } else {
      containerStyle.backgroundColor = "none";
      containerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
      containerStyle.cursor = "pointer";
    }

    return React.createElement("div", {
      id: id
    }, textPart(), React.createElement("div", {
      id: "button_" + id,
      style: containerStyle,
      onClick: search
    }, React.createElement("i", {
      className: "fa fa-search"
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    }));
  } // lifecycle event handlers

});
module.exports = SearchBox;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var DropDown = __webpack_require__(23);
/**
 * Component that renders a drop down specific to the sidebar.
 */


var SideBarDropDown = React.createClass({
  displayName: "SideBarDropDown",
  // lifecycle event handlers
  propTypes: {
    /**
     * The id for the component. If the prop value is not supplied a unique identifier is added.
     */
    id: React.PropTypes.string,

    /**
     * An array of items that form the options inside the select.
     */
    data: React.PropTypes.array.isRequired,

    /**
     * The name of the prop in the object that is associated with the value of the option.
     */
    valuePropName: React.PropTypes.string.isRequired,

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     * A function can also be passed in as the value of the prop in which case the function
     * will be called when rendering the text and the data item associated with the dropDown_
     * option will be passed in as an argument to the function. This is helpful when the value
     * to be displayed needs to be computed.
     */
    textPropName: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]).isRequired,

    /**
     * The value for the option that should be initially selected.
     */
    initialSelectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * The text that is added an another option to the top of the option list. Example, if the caption is "Select", then it will be the first item in the list and have an empty value.
     */
    caption: React.PropTypes.string,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Set this property value to true if you want the text box to receive automatic focus
     * when the component loads. For this to work, the id needs to be defined.
     */
    autoFocus: React.PropTypes.bool,

    /**
     * Function called when the selected value of the drop down changes. The first parameter
     * is the value of the new selected item.
     */
    changeHandler: React.PropTypes.func
  },
  render: function render() {
    var overrideStyle = {
      height: 31,
      width: 207
    };
    return React.createElement(DropDown, {
      id: this.props.id,
      type: "sidebar",
      data: this.props.data,
      initialSelectedValue: this.props.initialSelectedValue,
      valuePropName: this.props.valuePropName,
      textPropName: this.props.textPropName,
      tabIndex: 23,
      caption: this.props.caption,
      autoFocus: this.props.autoFocus,
      changeHandler: this.props.changeHandler
    });
  }
});
module.exports = SideBarDropDown;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var TextBox = __webpack_require__(5);

var SecondaryButton = __webpack_require__(2);
/**
 * Select box component that is primarily used to select multiple items. It can be used inside a form or the side navigation bar.
 * The selection of items happens primarily through a layover list that is triggered by the '...' button on the select box.
 * Another input is type ahead, where the user types characters in the text box and the component displays matching items that the user can select
 * one at a time. The text box part of the component also displays the items. When in the side bar (small) state, the component
 * only displays how many items have been selected. When in form (large) state the component displays up to two items and then displays the
 * count of additionally selected items. The component will accept a change handler that will be triggered whenever an item is added or removed
 * from the selection.
 */


var SelectBox = React.createClass({
  displayName: "SelectBox",
  // styles
  selectBoxContainerStyle: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex"
  },
  placeholderStyle: {
    fontFamily: "verdana",
    fontSize: 12,
    fontStyle: "italic",
    color: "#666666"
  },
  searchButtonContainerStyle: {
    alignItems: "center",
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderRight: "1px solid #E3E3E3",
    borderTop: "1px solid #E3E3E3",
    borderBottom: "1px solid #E3E3E3",
    boxSizing: "border-box",
    color: "#333333",
    display: "flex",
    fontSize: 14,
    justifyContent: "center",
    minHeight: 28,
    minWidth: 28,
    textShadow: "0 1px 0 #ffffff"
  },
  selectedItemContainerStyle: {
    boxSizing: "border-box",
    fontFamily: "verdana",
    fontSize: 12,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    marginBottom: 0,
    minHeight: 28,
    maxHeight: 70,
    overflowX: "auto",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    border: "solid 1px #E3E3E3",
    float: "left",
    width: "100%"
  },
  // styles
  // custom properties
  value: "",
  // custom properties
  // custom methods

  /**
   * Used for changing the focus border color and box shadow change
   */
  handleFocus: function handleFocus() {
    this.setState({
      isFocused: true
    });
  },
  // When the text box loses focus this function is called. It calls
  // the validator prop function if one is provided.
  handleLostFocus: function handleLostFocus(event) {
    this.setState({
      isFocused: false
    });

    if (typeof this.props.validator == "function") {
      // create a new function from validator with the 'selectedItems' as an additional parameter.
      var validator = this.props.validator.bind(null, this.state.selectedItems);
      validator();
    }

    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(event);
    }
  },

  /**
   * Method called when the enter key is pressed. It calls the function assigned to the enterPressHandler prop.
   * The value of the textbox along with the keyPress event is passed to the function.
   */
  handleEnterPress: function handleEnterPress(event) {
    if (this.state.disabled == true) {
      event.preventDefault();
    } else {
      var ENTER_KEY_CODE = 13;

      if (event.keyCode == ENTER_KEY_CODE) {
        if (typeof this.props.selectHandler == "function") {
          this.props.selectHandler(event);
        }
      }
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the control. If the prop is not supplied a unique identifier is created.
     */
    id: React.PropTypes.string,

    /**
     * Array of items that have been selected in the associated overlay. This array is also passed
     * to the overlay to pre-select the selected items in the overlay.
     */
    selectedItems: React.PropTypes.array,

    /**
     * Function called when the ellipsis button of the SelectBox component is clicked.
     * The parameters for the function include:
     * - the array of selected items
     * - a callback function
     * - the event object.
     */
    selectHandler: React.PropTypes.func,

    /**
     * Function called when the list of selected items changes.
     * The function parameter is an array of the selected items.
     */
    selectionChangedHandler: React.PropTypes.func,

    /**
     * Function called when the user inputs a search string in the textbox.
     * The function is passed in value of the search string, the callback function to call with the results and the event.
     */
    typeAheadChangeHandler: React.PropTypes.func,

    /**
     * Used to enable type ahead functionality. If enabled, the typeAheadChangeHandler prop needs to be assigned a callback function.
     */
    enableTypeAhead: React.PropTypes.bool,

    /**
     * The name of the property of the selected object to be used for display in the type ahead list of items.
     * If this prop is not declared then the component will check if the selected item is a string or a number and display that else it will not be displayed.
     */
    typeAheadItemDisplayPropName: React.PropTypes.string,

    /**
     * The name of the property of the selected object to be used for display in the tooltip and the large type of the component.
     * If this prop is not declared then the component will check if the selected item is a string or a number and display that else it will not be displayed.
     */
    itemDisplayPropName: React.PropTypes.string,

    /**
     * The name of the property of the selected object used to determine whether to highlight the item or not
     * If the property exists and evalutes to true then show it in the color of the validation message.
     * This is used primarily to mark the item as invalid if the underling id no longer points to a valid object.
     */
    itemHighlightPropName: React.PropTypes.string,

    /**
     * The maximum length of the search string allowed.
     */
    maxLength: React.PropTypes.number,

    /**
     * The placeholder search text for the component.
     */
    placeholder: React.PropTypes.string,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     * The width prop will override the size prop.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The width of the component (text box part) in pixels.
     */
    width: React.PropTypes.number,

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * If prop value is true hide the clear button
     * Defaults to false.
     */
    hideClearButton: React.PropTypes.bool,

    /**
     * Control will be disabled when this value is true. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.number,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Event handler called when the lost focus event is triggered.
     */
    focusLostHandler: React.PropTypes.func
  },
  mixins: [StyleMixins],
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      disabled: newProps.disabled,
      required: newProps.required,
      selectedItems: newProps.selectedItems || []
    });
  },
  getInitialState: function getInitialState() {
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      isRequired = this.props.required;
    }

    return {
      disabled: isDisabled,
      required: isRequired,
      showTypeAheadPanel: false,
      typeAheadResults: [],
      typeAheadValue: "",
      selectedItems: this.props.selectedItems || [],
      isFocused: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Internal helper function triggered when the ellipsis button is clicked.
     * It calls the passed in handler function to the selectHandler prop
     */
    var ellipsesButtonHandler = function ellipsesButtonHandler(event) {
      if (_this.state.disabled == true) {
        event.preventDefault();
      } else if (typeof _this.props.selectHandler == "function") {
        _this.props.selectHandler(event);
      }
    };
    /**
     * Click handler for the selected item box, it handles the click only
     * when no item is selected.
     */


    var selectedItemContainerClickHandler = function selectedItemContainerClickHandler(e) {
      if (Array.isArray(_this.state.selectedItems) == true && _this.state.selectedItems.length > 0) {
        // selected items are present - discard the click
        e.stopPropagation();
      } else {
        // selected items not present - click enabled
        ellipsesButtonHandler(e);
      }
    };
    /**
     * Callback function to be called by the code that populates the
     * results of the type ahead query.
     */


    var typeAheadSearchResults = function typeAheadSearchResults(results) {
      if (results && results.length > 0) {
        _this.setState({
          showTypeAheadPanel: true,
          typeAheadResults: results
        });
      } else {
        _this.setState({
          showTypeAheadPanel: false,
          typeAheadResults: []
        });
      }
    };
    /**
     * Handler function called when the text box text changes. Used when type ahead is enabled.
     * This function calls the typeAheadChangeHandler callback function and passes it the updated value
     * along with the callback function to pass in the results.
     */


    var textBoxChangeHandler = function textBoxChangeHandler(event) {
      if (_this.props.enableTypeAhead == true) {
        var that = _this;
        var value = event.target.value.trim(); // call the type ahead change handler (the function that will search for the items that match the entered text)
        // only if the user enters text

        if (value.length > 0) {
          _this.setState({
            typeAheadValue: value
          }, function () {
            if (typeof that.props.typeAheadChangeHandler == "function") {
              that.props.typeAheadChangeHandler(that.state.typeAheadValue, typeAheadSearchResults, event);
            }
          });
        } else {
          _this.setState({
            typeAheadValue: value,
            showTypeAheadPanel: false
          });
        }

        _this.setState({
          typeAheadValue: value
        }, function () {
          // call the type ahead change handler (the function that will search for the items that match the entered text)
          // only if the user enters text
          if (typeof that.props.typeAheadChangeHandler == "function" && value.length > 0) {
            that.props.typeAheadChangeHandler(that.state.typeAheadValue, typeAheadSearchResults, event);
          }
        });
      } else {
        event.stopPropagation();
      }
    };
    /**
     * Function handler for the click event on a type ahead result item
     * The selected item is added to the list of selected items and the selection
     * changed handler is called.
     */


    var typeAheadItemClickHandler = function typeAheadItemClickHandler(selectedItem) {
      var selectedItems = _this.state.selectedItems;
      selectedItems = selectedItems.concat(selectedItem);

      _this.setState({
        selectedItems: selectedItems,
        showTypeAheadPanel: false,
        typeAheadResults: [],
        typeAheadValue: ""
      }, function () {
        if (typeof this.props.selectionChangedHandler == "function") {
          this.props.selectionChangedHandler(this.state.selectedItems);
        }
      });
    };
    /**
     * Get the items to be displayed in the selectedItemsContainer
     */


    var getDisplayItems = function getDisplayItems() {
      var selectedItems = _this.state.selectedItems;

      if (Array.isArray(_this.state.selectedItems) == true && _this.state.selectedItems.length > 0) {
        return selectedItems.map(function (selectedItem, index, arr) {
          if (selectedItem) {
            return React.createElement(SelectBox.DisplayItem, {
              key: index,
              selectedItem: selectedItem,
              itemDisplayPropName: _this.props.itemDisplayPropName,
              itemHighlightPropName: _this.props.itemHighlightPropName,
              removeItemEventHandler: _this.props.removeItemEventHandler,
              size: _this.props.size,
              disabled: _this.state.disabled,
              hideClearButton: _this.props.hideClearButton
            });
          }
        });
      } else {
        return React.createElement("span", {
          style: _this.placeholderStyle
        }, _this.props.placeholder);
      }
    };
    /**
     * Gets the container that shows the list of items that have been created.
     */


    var getSelectedItemContainer = function getSelectedItemContainer() {
      if (_this.props.size === "large") {
        _this.selectBoxContainerStyle.width = 600;
      } else if (_this.props.size === 'medium') {
        _this.selectBoxContainerStyle.width = 410;
      } else {
        _this.selectBoxContainerStyle.width = 200;
      }

      if (_this.state.required) {
        _this.selectedItemContainerStyle = Object.assign({}, _this.selectedItemContainerStyle, {
          borderLeft: "3px solid #f7901e"
        });
      } else {
        _this.selectedItemContainerStyle = Object.assign({}, _this.selectedItemContainerStyle, {
          borderLeft: "1px solid #E3E3E3"
        });
      } // disabled vs non disabled state


      if (_this.props.disabled === true) {
        _this.selectedItemContainerStyle.cursor = "default";
        _this.selectedItemContainerStyle.backgroundImage = "none";

        if (Array.isArray(_this.state.selectedItems) == true && _this.state.selectedItems.length > 0) {
          // selected items are present
          // This is a temporary background color until design settles on
          // a disabled background color - tracked by PMTEAM-1295
          _this.selectedItemContainerStyle.backgroundColor = "#FFFFFF";
        } else {
          // selected items not present
          _this.selectedItemContainerStyle.backgroundColor = "#F3F3F3";
        }
      } else {
        if (Array.isArray(_this.state.selectedItems) == true && _this.state.selectedItems.length > 0) {
          // selected items are present
          _this.selectedItemContainerStyle.cursor = "default";
          _this.selectedItemContainerStyle.backgroundImage = "none";
          _this.selectedItemContainerStyle.backgroundColor = "#FFFFFF";
        } else {
          // selected items not present
          _this.selectedItemContainerStyle.cursor = "pointer";
          _this.selectedItemContainerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
          _this.selectedItemContainerStyle.backgroundColor = "none";
        }
      } // When there are no items remove the bottom padding, when
      // there are items add a 2px padding at the bottom, so that there is a gap
      // between the items and the bottom of the parent.


      if (Array.isArray(_this.state.selectedItems) == true && _this.state.selectedItems.length > 0) {
        _this.selectedItemContainerStyle.paddingTop = 0;
        _this.selectedItemContainerStyle.paddingBottom = 2;
      } else {
        _this.selectedItemContainerStyle.paddingTop = 1;
        _this.selectedItemContainerStyle.paddingBottom = 1;
      }

      return React.createElement("div", {
        style: _this.selectedItemContainerStyle,
        onClick: selectedItemContainerClickHandler
      }, getDisplayItems());
    };

    var validationMessageStyle = {
      fontFamily: "verdana",
      fontStyle: "italic",
      fontSize: 10,
      color: "#F76321",
      display: "block",
      marginTop: 4,
      height: 16,
      position: "absolute"
    };

    var getValidationMessageComponent = function getValidationMessageComponent() {
      if (_this.props.validationMessage != null && _this.props.validationMessage != undefined && _this.props.validationMessage.length > 0) {
        return React.createElement("span", {
          style: validationMessageStyle
        }, _this.props.validationMessage);
      } else {
        return null;
      }
    };

    var tabIndex = -1;

    if (typeof this.props.tabIndex == "number") {
      if (isNaN(parseInt(this.props.tabIndex)) == false) {
        tabIndex = parseInt(this.props.tabIndex);
      }
    } // focused style


    this.selectBoxContainerStyle.boxShadow = "none";
    this.selectBoxContainerStyle.outline = "none";

    if (this.state.isFocused == true && this.props.disabled === false) {
      this.selectBoxContainerStyle.borderRadius = 2;
      this.selectBoxContainerStyle.boxShadow = "0 0 4px #64ADC2";
    } // disabled vs non disabled state for elipsed button


    if (this.props.disabled === true) {
      this.searchButtonContainerStyle.cursor = "default";
      this.searchButtonContainerStyle.backgroundImage = "none";
      this.searchButtonContainerStyle.backgroundColor = "#F3F3F3";
    } else {
      this.searchButtonContainerStyle.cursor = "pointer";
      this.searchButtonContainerStyle.backgroundImage = "linear-gradient(-180deg, #FFFFFF 0%, #F3F3F3 100%)";
      this.searchButtonContainerStyle.backgroundColor = "none";
    }

    var id = this.props.id || _.uniqueId("selectBox_");

    return React.createElement("div", null, React.createElement("div", {
      id: id,
      style: this.selectBoxContainerStyle,
      tabIndex: tabIndex,
      onFocus: this.handleFocus,
      onBlur: this.handleLostFocus,
      onKeyDown: this.handleEnterPress,
      "data-component-name": "SelectBox",
      "data-component-type": "MultiSelect"
    }, getSelectedItemContainer(), React.createElement("div", {
      id: "button_" + id,
      style: this.searchButtonContainerStyle,
      onClick: ellipsesButtonHandler,
      "data-component-type": "Button"
    }, React.createElement("i", {
      className: "fa fa-ellipsis-h"
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    })), getValidationMessageComponent());
  } // lifecycle event handlers

});
/**
 * The component that displays the selected item
 */

SelectBox.DisplayItem = React.createClass({
  displayName: "DisplayItem",
  clickEventHandler: function clickEventHandler(evt) {
    // since we have a click event on the parent select box component
    // we dont want to trigger it when the chip remove is clicked.
    evt.stopPropagation();
    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      isDisabled = this.props.disabled;
    }

    if (isDisabled == false) {
      if (typeof this.props.removeItemEventHandler == "function") {
        return this.props.removeItemEventHandler(this.props.selectedItem);
      } else {
        return null;
      }
    } else {
      return null;
    }
  },
  getInitialState: function getInitialState() {
    return {
      showHover: false
    };
  },
  render: function render() {
    var _this2 = this;

    var displayItemStyle = {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#F3F3F3",
      height: 20,
      marginRight: 4,
      marginTop: 2,
      paddingLeft: 4,
      paddingRight: 4,
      fontSize: 11,
      width: "auto",
      maxWidth: "100%"
    };
    var textStyle = {
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#666666",
      width: "auto",
      maxWidth: "100%"
    };

    var buttonEnabledStyle = function buttonEnabledStyle() {
      return {
        cursor: "default",
        color: "#CCCCCC",
        fontSize: 15,
        marginLeft: 4
      };
    };

    var buttonEnabledHoverStyle = function buttonEnabledHoverStyle() {
      return {
        cursor: "pointer",
        color: "#999999",
        fontSize: 15,
        marginLeft: 4
      };
    };

    var innerLayerStyle = {
      display: "flex",
      // use this style so that we can vertically middle align the content in the button
      alignItems: "center",
      fontSize: 10
    };
    /**
     * Handler function for MouseEnter event
     * @param {Object} The event object from the MouseEnter event
     */

    var showHover = function showHover(event) {
      _this2.setState({
        showHover: true
      });

      event.stopPropagation();
    };
    /**
     * Handler function for MouseLeave event
     * @param {Object} The event object from the MouseLeave event
     */


    var hideHover = function hideHover(event) {
      _this2.setState({
        showHover: false
      });

      event.stopPropagation();
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = {};

      if (_this2.props.disabled == true) {
        return buttonEnabledStyle();
      }

      if (_this2.state.showHover == true) {
        buttonStyle = buttonEnabledHoverStyle();
      } else {
        buttonStyle = buttonEnabledStyle();
      }

      return buttonStyle;
    };

    if (this.props.itemHighlightPropName && this.props.selectedItem[this.props.itemHighlightPropName]) {
      textStyle.color = "#F76321";
    }

    return React.createElement("div", {
      "data-component-name": "Chip",
      style: displayItemStyle
    }, React.createElement("span", {
      style: textStyle,
      title: this.props.selectedItem[this.props.itemDisplayPropName]
    }, this.props.selectedItem[this.props.itemDisplayPropName]), this.props.hideClearButton || this.props.disabled === true ? null : React.createElement("div", {
      style: currentStyle(),
      onClick: this.clickEventHandler,
      onMouseEnter: showHover,
      onMouseLeave: hideHover
    }, React.createElement("div", {
      style: innerLayerStyle
    }, React.createElement("span", {
      "data-component-name": "Chip-Remove",
      className: "fa fa-times"
    }))));
  }
});
module.exports = SelectBox;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Row that acts as the 'master' which is visible. The corresponding 'details' rows visiblity 
 * is controlled by this row. Use this row component along with the SimpleTableDetailRow component
 * to get a master-detail type functionality
 * @param {Boolean} alwaysExpanded When the prop value is set to true expanded/collapsed state will not be tracked
 *                  and the handleMasterClick handler will not be called when the master row is clicked.
 * @param {Function} handleMasterClick Function handler passed into the component and called when the alwaysExpanded prop
 *                   value is false and the master row is clicked. 
 */
var React = __webpack_require__(0);

var TableRow = __webpack_require__(20);

var _require = __webpack_require__(11),
    ActionTypes = _require.ActionTypes;

var _ = __webpack_require__(1);

var TableMasterRow = React.createClass({
  displayName: "TableMasterRow",
  expandedRowClickHandler: function expandedRowClickHandler(rowData, rowIndex, clickEvent) {
    var _this = this;

    var isExpanded = this.state.isExpanded;
    this.setState({
      isExpanded: !isExpanded
    }, function () {
      _this.props.rowClickHandler(rowData, rowIndex, clickEvent);
    });
  },
  setRowColumnCount: function setRowColumnCount(count) {
    this.setState({
      rowColumnCount: count
    });
  },
  getInitialState: function getInitialState() {
    return {
      isExpanded: false,
      rowColumnCount: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // if the row data changes i.e. we are displaying a different record
    // then reset the expanded state of the row, this will collapse the
    // the expansion so that we dont show the data from the older record.
    if (_.isEqual(newProps.rowData, this.props.rowData) === false) {
      this.setState({
        isExpanded: false
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var rowData = this.props.rowData;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this2.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          rowData: _this2.props.rowData,
          dataIndex: _this2.props.dataIndex,
          isExpanded: _this2.state.isExpanded,
          rowClickHandler: _this2.expandedRowClickHandler,
          visible: _this2.props.visible,
          rowColumnCount: _this2.state.rowColumnCount,
          setRowColumnCount: _this2.setRowColumnCount,
          type: "master",
          rowSelectionEnabled: _this2.props.rowSelectionEnabled
        });
      });
    };

    if (rowData && rowData != "headerOnly") {
      return React.createElement("tbody", null, renderChildren());
    } else {
      return null;
    }
  }
});
module.exports = TableMasterRow;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component that displays a checkbox in a table column
 * @param {String} label Text that shows next to the checkbox
 * @param {String} labelPropertyName The name of the property we want to use to get the value
 *                 of the label attribute for the checkbox control from the row data object.
 * @param {Boolean} checked Denotes whether the component is checked (true) or unchecked (false)
 * @param {String} checkedPropertyName The name of the property we want to use to get the value
 *                 of the checked attribute for the checkbox control from the row data object.
 * @param {String} id Identifier for the checkbox. Will be rendered as id attribute.
 *                 The id prop takes precedence over the idPropertyName attribute when computing the id.
 * @param {String} idPropertyName Identifier for the checkbox. Will be rendered as id attribute. 
 *                 The name of the property we want to use to get the value of the id attribute
 *                 for the checkbox control from the row data object.
 * @param {String} value The value to associate with the checkbox. This value is returned to the change handler.
 *                 The value prop takes precedence over the valuePropertyName prop
 * @param {String} valuePropertyName The name of the property we want to use to get the value.
 * @param {Boolean} stopClickPropagation Set this property to true to stop the bubbling of the click event to the ancestors of the checkbox. 
 *                  Default is false.
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var AbstractTableColumn = __webpack_require__(15);

var Dispatcher = __webpack_require__(17);

var _require = __webpack_require__(11),
    ActionTypes = _require.ActionTypes;

var CheckBox = __webpack_require__(9);

var TableCheckboxColumn = React.createClass({
  displayName: "TableCheckboxColumn",
  // custom methods
  id: null,
  handleChange: function handleChange(isChecked, value, evt) {
    if (this.props.checkedPropertyName && this.props.checkedPropertyName.length > 0) {
      if (this.props.rowData) {
        this.props.rowData[this.props.checkedPropertyName] = isChecked;
      }
    }

    if (typeof this.props.clickHandler == "function") {
      // non-flux route
      this.props.clickHandler(isChecked, value, evt, this.props.rowIndex);
    }

    Dispatcher.dispatch({
      type: ActionTypes.TABLE_CHECKBOX_COLUMN_CHANGED,
      id: this.id,
      checked: isChecked,
      value: value
    });
  },
  // custom methods
  // lifecycle event handlers
  render: function render() {
    // add id attribute
    if (this.props.id && this.props.id.length > 0) {
      this.id = this.props.id;
    } else if (this.props.idPropertyName && this.props.idPropertyName.length > 0) {
      this.id = this.props.rowData[this.props.idPropertyName];
    } else {
      this.id = _.uniqueId("tableCheckbox_");
    } // get the label (text, tooltip) prop


    var label = null;

    if (this.props.label && this.props.label.length > 0) {
      label = this.props.label;
    } else if (this.props.labelPropertyName && this.props.labelPropertyName.length > 0) {
      label = this.props.rowData[this.props.labelPropertyName];
    } // compute the default checked prop value


    var checked = false;

    if (this.props.checked != undefined && this.props.checked != null) {
      checked = this.props.checked;
    } else if (this.props.checkedPropertyName && this.props.checkedPropertyName.length > 0) {
      checked = this.props.rowData[this.props.checkedPropertyName];
    } // // toggle the checked prop based on selected prop
    // if (this.props.selected == true) {
    //     checked = !checked;
    // }
    // compute the value prop


    var value = null;

    if (this.props.value && this.props.value.length > 0) {
      value = this.props.value;
    } else if (this.props.valuePropertyName && this.props.valuePropertyName.length > 0) {
      value = this.props.rowData[this.props.valuePropertyName];
    }

    return React.createElement(AbstractTableColumn, {
      isExpanded: this.props.isExpanded
    }, React.createElement(CheckBox, {
      id: this.id,
      text: label,
      tooltip: label,
      defaultChecked: checked,
      value: value,
      customMarginHeight: 0,
      changeHandler: this.handleChange,
      stopClickPropagation: this.props.stopClickPropagation
    }));
  } // lifecycle event handlers

});
module.exports = TableCheckboxColumn;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A component for displaying a collection of detail rows.
 * @param {Object} rowData The data item bound to this row
 * @param {String} detailRowsArrayPropertyName The name of the property that points to the
 *                 array of objects that should be bound to the child rows
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TableDetailRow = __webpack_require__(40);

var TableDetailRows = React.createClass({
  displayName: "TableDetailRows",

  /**
   * Function called when the Detail row is clicked. It toggles the expanded state
   * and calls the assigned handler.
   */
  expandedRowClickHandler: function expandedRowClickHandler(rowData, rowIndex, clickEvent) {
    var _this = this;

    var expandedStateObject = this.state.expandedStateObject;
    expandedStateObject[rowIndex] = !expandedStateObject[rowIndex];
    this.setState({
      expandedStateObject: expandedStateObject,
      clickedRowIndex: rowIndex
    }, function () {
      _this.props.rowClickHandler(rowData, rowIndex, clickEvent);
    });
  },

  /**
   * Function called by the TableDetailRow component to set the number of columns
   * in the detail row. This is passed on to the Expanded Row Content component
   * so that it can colspan correctly.
   */
  setRowColumnCount: function setRowColumnCount(count) {
    if (this.state.rowColumnCount == null) {
      this.setState({
        rowColumnCount: count
      });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (_.isEqual(this.props.rowData, newProps.rowData) == false) {
      var expandedStateObject = null;

      if (newProps.rowData && this.props.detailRowsArrayPropertyName && Array.isArray(newProps.rowData[this.props.detailRowsArrayPropertyName]) == true && newProps.rowData[this.props.detailRowsArrayPropertyName].length > 0) {
        expandedStateObject = [];

        for (var index = 0; index < newProps.rowData[this.props.detailRowsArrayPropertyName].length; index++) {
          expandedStateObject.push(false);
        }

        this.setState({
          expandedStateObject: expandedStateObject
        });
      }
    }
  },
  getInitialState: function getInitialState() {
    var expandedStateObject = null;

    if (this.props.rowData && this.props.detailRowsArrayPropertyName && Array.isArray(this.props.rowData[this.props.detailRowsArrayPropertyName]) == true && this.props.rowData[this.props.detailRowsArrayPropertyName].length > 0) {
      expandedStateObject = [];

      for (var index = 0; index < this.props.rowData[this.props.detailRowsArrayPropertyName].length; index++) {
        expandedStateObject.push(false);
      }
    }

    return {
      isExpanded: false,
      expandedStateObject: expandedStateObject,
      clickedRowIndex: null,
      rowColumnCount: null
    };
  },
  render: function render() {
    var _this2 = this;

    var rowData = this.props.rowData; // this is the data item bound to the row

    if (rowData && rowData != "headerOnly") {
      var detailRowsArrayPropertyName = this.props.detailRowsArrayPropertyName;
      var childData = null;

      if (rowData && typeof detailRowsArrayPropertyName == "string" && detailRowsArrayPropertyName.length > 0) {
        childData = rowData[detailRowsArrayPropertyName]; // this will be an array of items
      }

      var childRows = function childRows() {
        return childData.map(function (childDataItem, index, arr) {
          var dataIndex = index;

          var key = _.uniqueId("tableDetailRow_");

          return React.Children.map(_this2.props.children, function (child, childIndex, arr) {
            return React.cloneElement(child, {
              rowData: childDataItem,
              rowIndex: childIndex,
              dataRowIndex: _this2.props.dataIndex,
              dataIndex: dataIndex,
              visible: true,
              key: key,
              rowClickHandler: _this2.expandedRowClickHandler,
              rowColumnCount: _this2.state.rowColumnCount,
              setRowColumnCount: _this2.setRowColumnCount,
              isExpanded: _this2.state.expandedStateObject[dataIndex],
              clickedRowIndex: _this2.state.clickedRowIndex,
              rowSelectionEnabled: _this2.props.rowSelectionEnabled
            });
          });
        });
      }; // returns the container <tbody> along with the <tr> rows


      var container = function container() {
        if (childData) {
          return React.createElement("tbody", null, childRows());
        } else {
          return null;
        }
      };

      return container();
    } else {
      return null;
    }
  }
});
module.exports = TableDetailRows;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var TableRow = __webpack_require__(20);
/**
 * A table row that contains all the columns displayed in the row. Use this inside the <TableExpandableRow> component.
 * Children are any of the Table*Column components.
 */


var TableRowColumns = React.createClass({
  displayName: "TableRowColumns",

  /**
   * Using ComponentWillMount to send the parent (TableExpandableRow) the column count
   * so that it can be communicated to the TableExpandableRowContent component to specify the colSpan
   * This method is called only once.
   */
  componentWillMount: function componentWillMount() {
    if (typeof this.props.setRowColumnCount == "function") {
      this.props.setRowColumnCount(React.Children.count(this.props.children));
    }
  },
  render: function render() {
    var id = this.props.dataIndex != null && this.props.dataIndex != undefined ? "tableRow" + this.props.dataIndex : null;
    return React.createElement(TableRow, {
      id: id,
      rowData: this.props.rowData,
      type: this.props.type,
      isExpanded: this.props.isExpanded,
      dataIndex: this.props.dataIndex,
      rowClickHandler: this.props.rowClickHandler,
      rowSelectionEnabled: this.props.rowSelectionEnabled,
      conditionalBold: this.props.conditionalBold
    }, this.props.children);
  }
});
module.exports = TableRowColumns;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var TableDetailRow = __webpack_require__(40);
/**
 * A table row that contains all the columns displayed in the row. Use this inside the <TableExpandableRow> component.
 * Children are any of the Table*Column components.
 */


var TableDetailRowColumns = React.createClass({
  displayName: "TableDetailRowColumns",

  /**
   * Using ComponentWillMount to send the parent (TableExpandableRow) the column count
   * so that it can be communicated to the TableExpandableRowContent component to specify the colSpan
   * This method is called only once.
   */
  componentWillMount: function componentWillMount() {
    if (typeof this.props.setRowColumnCount == "function") {
      this.props.setRowColumnCount(React.Children.count(this.props.children));
    }
  },
  render: function render() {
    return React.createElement(TableDetailRow, {
      rowData: this.props.rowData,
      rowIndex: this.props.rowIndex,
      dataIndex: this.props.dataIndex,
      dataRowIndex: this.props.dataRowIndex,
      visible: this.props.visible,
      key: this.props.key,
      isExpanded: this.props.isExpanded,
      rowClickHandler: this.props.rowClickHandler,
      rowSelectionEnabled: this.props.rowSelectionEnabled
    }, this.props.children);
  }
});
module.exports = TableDetailRowColumns;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var TableRow = __webpack_require__(20);
/**
 * A table row that expands to show child content when clicked.
 */


var TableExpandableRow = React.createClass({
  displayName: "TableExpandableRow",
  // custom methods
  expandedRowClickHandler: function expandedRowClickHandler(rowData, rowIndex, clickEvent) {
    this.props.rowClickHandler(rowData, rowIndex, clickEvent);
  },
  setRowColumnCount: function setRowColumnCount(count) {
    this.setState({
      rowColumnCount: count
    });
  },
  // custom methods
  // lifecycle event handler
  getInitialState: function getInitialState() {
    return {
      rowColumnCount: null
    };
  },
  render: function render() {
    var _this = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          rowData: _this.props.rowData,
          dataIndex: _this.props.dataIndex,
          isExpanded: _this.props.rowData.isExpanded,
          rowClickHandler: _this.expandedRowClickHandler,
          visible: _this.props.visible,
          rowColumnCount: _this.state.rowColumnCount,
          setRowColumnCount: _this.setRowColumnCount,
          conditionalBold: _this.props.conditionalBold,
          rowSelectionEnabled: _this.props.rowSelectionEnabled
        });
      });
    };

    if (this.props.rowData && this.props.rowData != "headerOnly") {
      return React.createElement("tbody", null, renderChildren());
    } else {
      return null;
    }
  } // lifecycle event handler

});
module.exports = TableExpandableRow;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var TableRow = __webpack_require__(20);

var TabStyles = __webpack_require__(4).tabs;
/**
 * A container component for the content of the expandable row. When the row is clicked the content is visible,
 * when clicked again it collapsed.
 */


var TableExpandableRowContent = React.createClass({
  displayName: "TableExpandableRowContent",
  render: function render() {
    var _this = this;

    var renderChildren = function renderChildren() {
      return React.Children.map(_this.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          rowData: _this.props.rowData,
          rowIndex: _this.props.rowIndex
        });
      });
    };

    if (this.props.isExpanded == true) {
      var id = this.props.rowIndex ? "tableExpandableRowContent" + this.props.rowIndex : _.uniqueId("tableExpandableRowContentId_");
      return React.createElement(TableRow, {
        id: id,
        rowData: this.props.rowData,
        rowIndex: this.props.rowIndex
      }, React.createElement("td", {
        style: TabStyles.expandedRowContainer,
        colSpan: this.props.rowColumnCount
      }, renderChildren()));
    } else {
      return null;
    }
  }
});
module.exports = TableExpandableRowContent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component that displays the results counter and the pagination component for lists
 * @param {String} resultsId The id for the results counter
 * @param {String} resultsText The custom text to display on the results counter. Default is "All Results"
 * @param {Number} resultsCount the number to display for the number of records.
 * @param {Number} totalPages Set the total number of pages
 * @param {Number} maxDisplayPages The maximum number of page numbers that are displayed without ellipses.
 *                 If maxDisplayPages is set to 6 and the total number of pages is 5, then all 5 page numbers will be displayed.
 *                 Default maxDisplayPages value is 6. 
 * @param {Number} currentPage The current page that is displayed
 * @param {Boolean} hideResults If true do not show the results and count on the pagination row
 * @param {Function} pageClickHandler Function handler called when a page number is clicked, the function is passed the page number being clicked
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var ResultsCounter = __webpack_require__(81);

var Pagination = __webpack_require__(82);

var ResultsPaginationHeader = React.createClass({
  displayName: "ResultsPaginationHeader",
  // styles
  resultsCounterContainerStyle: {
    float: "left",
    paddingLeft: 3,
    paddingTop: 0,
    paddingBottom: 28,
    paddingRight: 3
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  render: function render() {
    var id = this.props.id || _.uniqueId("resultsCounter_");

    return React.createElement("div", {
      id: id,
      style: {
        width: "100%"
      }
    }, React.createElement("div", {
      style: this.resultsCounterContainerStyle
    }, !this.props.hideResults && React.createElement(ResultsCounter, {
      id: this.props.resultsId,
      text: this.props.resultsText,
      count: this.props.resultsCount
    })), React.createElement("div", {
      style: {
        float: "right"
      }
    }, React.createElement(Pagination, {
      totalPages: this.props.totalPages,
      maxDisplayPages: this.props.maxDisplayPages,
      currentPage: this.props.currentPage,
      clickHandler: this.props.pageClickHandler
    })), React.createElement("div", {
      style: {
        clear: "both"
      }
    }));
  } // lifecycle event handlers

});
module.exports = ResultsPaginationHeader;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component to display the count of results for a list. Example "All Results (10)"
 * @param {String} text The text to display. Default is "All Results"
 * @param {Number} count The number that displays the total number of records. The number is automatically wrapped in parenthesis.
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var ResultsCounter = React.createClass({
  displayName: "ResultsCounter",
  // styles
  resultsStyle: {
    fontFamily: "Verdana",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333"
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  render: function render() {
    var defaultResultsText = "All Results";
    var resultsText = defaultResultsText;

    if (typeof this.props.text == "string" && this.props.text.length > 0) {
      resultsText = this.props.text;
    }

    if (typeof this.props.count == "number") {
      resultsText = resultsText + " (" + this.props.count.toString() + ")";
    }

    var id = this.props.id || _.uniqueId("resultsCounter_");

    return React.createElement("div", {
      id: id
    }, React.createElement("span", {
      "data-component-type": "Label",
      "data-component-name": "ListResults",
      style: this.resultsStyle
    }, resultsText));
  } // lifecycle event handlers

});
module.exports = ResultsCounter;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Pagination component
 * @param {Number} totalPages Set the total number of pages
 * @param {Number} maxDisplayPages The maximum number of page numbers that are displayed without ellipses.
 *                 If maxDisplayPages is set to 6 and the total number of pages is 5, then all 5 page numbers will be displayed.
 *                 Default maxDisplayPages value is 6. 
 * @param {Number} currentPage The current page that is displayed
 * @param {Function} clickHandler Function handler called when a page number is clicked, the function is passed the page number being clicked
 */
var React = __webpack_require__(0);

var Pagination = React.createClass({
  displayName: "Pagination",
  // styles
  paginationContainerStyle: {
    textAlign: "right",
    color: "#285c7e",
    fontSize: 12,
    fontFamily: "Verdana"
  },
  pageLinkStyle: {
    marginRight: 7,
    cursor: "pointer"
  },
  pageLastLinkStyle: {
    cursor: "pointer"
  },
  dottedLinkStyle: {
    marginRight: 7
  },
  currentPageStyle: {
    fontWeight: "bold",
    borderBottom: "2px solid #f7901e",
    marginRight: 7
  },
  // styles
  // custom methods
  clickHandler: function clickHandler(event, pageNumber) {
    if (typeof this.props.clickHandler == "function") {
      this.props.clickHandler(pageNumber);
    } else {
      event.stopPropagation();
    }
  },
  // custom methods
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    if (!this.props.totalPages || this.props.totalPages && this.props.totalPages < 2) {
      return null;
    }

    var maxDisplayPages = typeof this.props.maxDisplayPages == "number" ? this.props.maxDisplayPages : 6;
    var totalPages = this.props.totalPages;
    var currentPage = this.props.currentPage;
    var self = this,
        pageList = Array.apply(null, Array(totalPages)).map(function (i, idx) {
      return idx + 1;
    }),
        pageMargin = Math.floor(maxDisplayPages / 2),
        pagesToShow,
        navLink;

    if (totalPages <= maxDisplayPages) {
      // show them all,
      pagesToShow = pageList;
    } else {
      // totalPages > maxDisplayPages, display page numbers minmum of (maxDisplayPages/2) left and right followed by -1.
      // -1 will be replaced by ellipses in the next section.
      // Below are the sample list.
      // totalPages is 8 and current page is 3   ->  [1, 2, 3, 4, 5, 6, -1, 8]
      // totalPages is 10 and current page is 2  ->  [1, 2, 3, 4, 5, -1, 10]
      // totalPages is 13 and current page is 3  -> [1, 2, 3, 4, 5, 6, -1, 13]  
      // totalPages is 15 and current page is 9  -> [1, -1, 6, 7, 8, 9, 10, 11, 12, -1, 15]
      // totalPages is 15 and current page is 15 -> [1, -1, 12, 13, 14, 15]
      // totalPages is 15 and current page is 5  -> [1, 2, 3, 4, 5, 6, 7, 8, -1, 15]
      // totalPages is 15 and current page is 1  -> [1, 2, 3, 4, 5, 6, 7, 8, -1, 15] 
      pagesToShow = [];
      pageList.forEach(function (pageNumber) {
        if (pageNumber == currentPage || pageNumber == 1 || pageNumber == totalPages) {
          pagesToShow.push(pageNumber);
        } else if (pageNumber >= currentPage - pageMargin && pageNumber <= currentPage + pageMargin) {
          pagesToShow.push(pageNumber);
        } else if (pagesToShow[pagesToShow.length - 1] != -1) {
          pagesToShow.push(-1);
        }
      });
    }

    var getPages = function getPages() {
      var that = _this;
      return pagesToShow.map(function (pageNumber, index) {
        if (pageNumber == -1) {
          return React.createElement("span", {
            key: index,
            style: that.dottedLinkStyle
          }, "...");
        } else if (pageNumber == currentPage) {
          return React.createElement("span", {
            style: that.currentPageStyle,
            key: index
          }, pageNumber);
        } else {
          if (index === pagesToShow.length - 1) {
            return React.createElement("span", {
              style: that.pageLastLinkStyle,
              key: index,
              onClick: function onClick(e) {
                return self.clickHandler(e, pageNumber);
              }
            }, pageNumber);
          } else {
            return React.createElement("span", {
              style: that.pageLinkStyle,
              key: index,
              onClick: function onClick(e) {
                return self.clickHandler(e, pageNumber);
              }
            }, pageNumber);
          }
        }
      });
    };

    return React.createElement("div", {
      id: "pagination",
      style: this.paginationContainerStyle
    }, getPages());
  } // lifecycle event handlers

});
module.exports = Pagination;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var tableHeaderRowStyle = {
  border: '1px solid #E1E1E1',
  borderCollapse: 'collapse',
  padding: 5,
  fontWeight: 'bold',
  fontSize: 12,
  color: '#333333',
  verticalAlign: 'middle',
  borderBottom: '1px solid #E1E1E1',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  paddingTop: 8,
  paddingRight: 5,
  paddingBottom: 8,
  paddingLeft: 5,
  height: 20
};
var RateTableHeader = React.createClass({
  displayName: "RateTableHeader",
  render: function render() {
    var headers = this.props.headers;
    return React.createElement("thead", null, React.createElement("tr", null, headers.map(function (result) {
      var tableHeaderKey = _.uniqueId("rateTableHeader_");

      return React.createElement("th", {
        key: tableHeaderKey,
        style: tableHeaderRowStyle
      }, result);
    })));
  }
});
module.exports = RateTableHeader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $) {/**
 * Row in the Rate table component
 */
var React = __webpack_require__(0);

var TextBox = __webpack_require__(5);

var SecondaryButton = __webpack_require__(2);

var tableHeaderRowStyle = {
  border: '1px solid #E1E1E1',
  borderCollapse: 'collapse'
};
var showDeleteRowStyle = {
  float: 'right',
  margin: 6
};
var hideDeleteRowStyle = {
  display: 'none'
};
var deleteButtonStyle = {
  color: "#CCCCCC",
  cursor: "pointer",
  'fontSize': '12px'
};
var RateTableRow = React.createClass({
  displayName: "RateTableRow",
  // custom methods
  // lifecycle event handlers

  /**
   * We need to change rows when the rows props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var rows = newProps.rows;
    this.setState({
      rows: rows
    });
  },
  getInitialState: function getInitialState() {
    var rows = this.props.rows;
    return {
      rows: rows // value set by prop because it is the default value

    };
  },
  handleChange: function handleChange(index, count) {
    this.props.rows.splice(index, count);
    this.props.onDeleteRow(this.props.rows);
  },
  render: function render() {
    var _this = this;

    var self = this;
    var results = this.props.rows;
    var validate = this.props.onValueChange;
    var requiredRows = this.props.requiredRows || 1; // 1 row is always required unless set to 0

    var index = -1;

    var callback = function callback(results) {
      _this.props.updateState(results);
    };

    var handleRows = function handleRows(results, index) {
      return results.map(function (result) {
        index += 1;

        var tableRowKey = _.uniqueId("rateTableRow_");

        var keys = Object.keys(result);
        var keysLength = keys.length;
        var keyIndex = -1;

        var handleColumns = function handleColumns(result) {
          return keys.map(function (key) {
            var tableRowTDKey = _.uniqueId("rateTableRowTD_");

            var tableRowTBKey = _.uniqueId("rateTableTBRow_");

            var tableRowDBKey = _.uniqueId("rateTableDBRow_");

            keyIndex += 1;

            var deleteButton = function deleteButton(keyIndex) {
              return keyIndex === keysLength - 1 ? React.createElement("div", {
                key: tableRowDBKey,
                "data-index": index,
                style: index < requiredRows ? hideDeleteRowStyle : showDeleteRowStyle
              }, React.createElement(SecondaryButton, {
                icon: "fa fa-fw fa-times-circle-o",
                clickHandler: function clickHandler(event, index) {
                  self.handleChange($(event.currentTarget.parentElement).data('index'), 1);
                }
              })) : '';
            };

            return React.createElement("td", {
              key: tableRowTDKey,
              "data-rangeindex": index,
              style: tableHeaderRowStyle
            }, React.createElement(TextBox, {
              key: tableRowTBKey,
              disabled: false,
              width: 145,
              value: result[key],
              focusLostHandler: function focusLostHandler(event) {
                validate(event.target.value, event, key, result, results, callback);
              }
            }), deleteButton(keyIndex));
          });
        };

        return React.createElement("tr", {
          key: tableRowKey,
          className: "rangeRow"
        }, handleColumns(result));
      });
    };

    return React.createElement("tbody", {
      id: "rangeList"
    }, handleRows(results, index));
  }
});
module.exports = RateTableRow;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(32)))

/***/ }),
/* 85 */
/***/ (function(module, exports) {

tinymce.addI18n('de', {
  "Cut": "Ausschneiden",
  "Heading 5": "\xDCberschrift 5",
  "Header 2": "\xDCberschrift 2",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Ihr Browser unterst\xFCtzt leider keinen direkten Zugriff auf die Zwischenablage. Bitte benutzen Sie die Strg + X / C / V Tastenkombinationen.",
  "Heading 4": "\xDCberschrift 4",
  "Div": "Textblock",
  "Heading 2": "\xDCberschrift 2",
  "Paste": "Einf\xFCgen",
  "Close": "Schlie\xDFen",
  "Font Family": "Schriftart",
  "Pre": "Vorformatierter Text",
  "Align right": "Rechtsb\xFCndig ausrichten",
  "New document": "Neues Dokument",
  "Blockquote": "Zitat",
  "Numbered list": "Nummerierte Liste",
  "Heading 1": "\xDCberschrift 1",
  "Headings": "\xDCberschriften",
  "Increase indent": "Einzug vergr\xF6\xDFern",
  "Formats": "Formate",
  "Headers": "\xDCberschriften",
  "Select all": "Alles ausw\xE4hlen",
  "Header 3": "\xDCberschrift 3",
  "Blocks": "Absatzformate",
  "Undo": "R\xFCckg\xE4ngig",
  "Strikethrough": "Durchgestrichen",
  "Bullet list": "Aufz\xE4hlung",
  "Header 1": "\xDCberschrift 1",
  "Superscript": "Hochgestellt",
  "Clear formatting": "Formatierung entfernen",
  "Font Sizes": "Schriftgr\xF6\xDFe",
  "Subscript": "Tiefgestellt",
  "Header 6": "\xDCberschrift 6",
  "Redo": "Wiederholen",
  "Paragraph": "Absatz",
  "Ok": "Ok",
  "Bold": "Fett",
  "Code": "Quelltext",
  "Italic": "Kursiv",
  "Align center": "Zentriert ausrichten",
  "Header 5": "\xDCberschrift 5",
  "Heading 6": "\xDCberschrift 6",
  "Heading 3": "\xDCberschrift 3",
  "Decrease indent": "Einzug verkleinern",
  "Header 4": "\xDCberschrift 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Einf\xFCgen ist nun im einfachen Textmodus. Inhalte werden ab jetzt als unformatierter Text eingef\xFCgt, bis Sie diese Einstellung wieder ausschalten!",
  "Underline": "Unterstrichen",
  "Cancel": "Abbrechen",
  "Justify": "Blocksatz",
  "Inline": "Zeichenformate",
  "Copy": "Kopieren",
  "Align left": "Linksb\xFCndig ausrichten",
  "Visual aids": "Visuelle Hilfen",
  "Lower Greek": "Griechische Kleinbuchstaben",
  "Square": "Quadrat",
  "Default": "Standard",
  "Lower Alpha": "Kleinbuchstaben",
  "Circle": "Kreis",
  "Disc": "Punkt",
  "Upper Alpha": "Gro\xDFbuchstaben",
  "Upper Roman": "R\xF6mische Zahlen (Gro\xDFbuchstaben)",
  "Lower Roman": "R\xF6mische Zahlen (Kleinbuchstaben)",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "Die Kennung sollte mit einem Buchstaben anfangen. Nachfolgend nur Buchstaben, Zahlen, Striche (Minus), Punkte, Kommas und Unterstriche.",
  "Name": "Name",
  "Anchor": "Textmarke",
  "Id": "Kennung",
  "You have unsaved changes are you sure you want to navigate away?": "Die \xC4nderungen wurden noch nicht gespeichert, sind Sie sicher, dass Sie diese Seite verlassen wollen?",
  "Restore last draft": "Letzten Entwurf wiederherstellen",
  "Special character": "Sonderzeichen",
  "Source code": "Quelltext",
  "Language": "Sprache",
  "Insert\/Edit code sample": "Codebeispiel einf\xFCgen/bearbeiten",
  "B": "B",
  "R": "R",
  "G": "G",
  "Color": "Farbe",
  "Right to left": "Von rechts nach links",
  "Left to right": "Von links nach rechts",
  "Emoticons": "Emoticons",
  "Robots": "Robots",
  "Document properties": "Dokumenteigenschaften",
  "Title": "Titel",
  "Keywords": "Sch\xFCsselw\xF6rter",
  "Encoding": "Zeichenkodierung",
  "Description": "Beschreibung",
  "Author": "Verfasser",
  "Fullscreen": "Vollbild",
  "Horizontal line": "Horizontale Linie",
  "Horizontal space": "Horizontaler Abstand",
  "Insert\/edit image": "Bild einf\xFCgen/bearbeiten",
  "General": "Allgemein",
  "Advanced": "Erweitert",
  "Source": "Quelle",
  "Border": "Rahmen",
  "Constrain proportions": "Seitenverh\xE4ltnis beibehalten",
  "Vertical space": "Vertikaler Abstand",
  "Image description": "Bildbeschreibung",
  "Style": "Stil",
  "Dimensions": "Abmessungen",
  "Insert image": "Bild einf\xFCgen",
  "Image": "Bild",
  "Zoom in": "Ansicht vergr\xF6\xDFern",
  "Contrast": "Kontrast",
  "Back": "Zur\xFCck",
  "Gamma": "Gamma",
  "Flip horizontally": "Horizontal spiegeln",
  "Resize": "Skalieren",
  "Sharpen": "Sch\xE4rfen",
  "Zoom out": "Ansicht verkleinern",
  "Image options": "Bildeigenschaften",
  "Apply": "Anwenden",
  "Brightness": "Helligkeit",
  "Rotate clockwise": "Im Uhrzeigersinn drehen",
  "Rotate counterclockwise": "Gegen den Uhrzeigersinn drehen",
  "Edit image": "Bild bearbeiten",
  "Color levels": "Farbwerte",
  "Crop": "Bescheiden",
  "Orientation": "Ausrichtung",
  "Flip vertically": "Vertikal spiegeln",
  "Invert": "Invertieren",
  "Date\/time": "Datum\/Uhrzeit",
  "Insert date\/time": "Datum/Uhrzeit einf\xFCgen ",
  "Remove link": "Link entfernen",
  "Url": "URL",
  "Text to display": "Anzuzeigender Text",
  "Anchors": "Textmarken",
  "Insert link": "Link einf\xFCgen",
  "Link": "Link",
  "New window": "Neues Fenster",
  "None": "Keine",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "Diese Adresse scheint ein externer Link zu sein. M\xF6chten Sie das dazu ben\xF6tigte \"http://\" voranstellen?",
  "Paste or type a link": "Link einf\xFCgen oder eintippen",
  "Target": "Ziel",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "Diese Adresse scheint eine E-Mail-Adresse zu sein. M\xF6chten Sie das dazu ben\xF6tigte \"mailto:\" voranstellen?",
  "Insert\/edit link": "Link einf\xFCgen/bearbeiten",
  "Insert\/edit video": "Video einf\xFCgen/bearbeiten",
  "Media": "Medium",
  "Alternative source": "Alternative Quelle",
  "Paste your embed code below:": "F\xFCgen Sie Ihren Einbettungscode hier ein:",
  "Insert video": "Video einf\xFCgen",
  "Poster": "Poster",
  "Insert\/edit media": "Medien einf\xFCgen/bearbeiten",
  "Embed": "Einbetten",
  "Nonbreaking space": "Gesch\xFCtztes Leerzeichen",
  "Page break": "Seitenumbruch",
  "Paste as text": "Als Text einf\xFCgen",
  "Preview": "Vorschau",
  "Print": "Drucken",
  "Save": "Speichern",
  "Could not find the specified string.": "Die Zeichenfolge wurde nicht gefunden.",
  "Replace": "Ersetzen",
  "Next": "Weiter",
  "Whole words": "Nur ganze W\xF6rter",
  "Find and replace": "Suchen und ersetzen",
  "Replace with": "Ersetzen durch",
  "Find": "Suchen",
  "Replace all": "Alles ersetzen",
  "Match case": "Gro\xDF-/Kleinschreibung beachten",
  "Prev": "Zur\xFCck",
  "Spellcheck": "Rechtschreibpr\xFCfung",
  "Finish": "Ende",
  "Ignore all": "Alles Ignorieren",
  "Ignore": "Ignorieren",
  "Add to Dictionary": "Zum W\xF6rterbuch hinzuf\xFCgen",
  "Insert row before": "Neue Zeile davor einf\xFCgen ",
  "Rows": "Zeilen",
  "Height": "H\xF6he",
  "Paste row after": "Zeile danach einf\xFCgen",
  "Alignment": "Ausrichtung",
  "Border color": "Rahmenfarbe",
  "Column group": "Spaltengruppe",
  "Row": "Zeile",
  "Insert column before": "Neue Spalte davor einf\xFCgen",
  "Split cell": "Zelle aufteilen",
  "Cell padding": "Zelleninnenabstand",
  "Cell spacing": "Zellenabstand",
  "Row type": "Zeilentyp",
  "Insert table": "Tabelle einf\xFCgen",
  "Body": "Inhalt",
  "Caption": "Beschriftung",
  "Footer": "Fu\xDFzeile",
  "Delete row": "Zeile l\xF6schen",
  "Paste row before": "Zeile davor einf\xFCgen",
  "Scope": "G\xFCltigkeitsbereich",
  "Delete table": "Tabelle l\xF6schen",
  "H Align": "Horizontale Ausrichtung",
  "Top": "Oben",
  "Header cell": "Kopfzelle",
  "Column": "Spalte",
  "Row group": "Zeilengruppe",
  "Cell": "Zelle",
  "Middle": "Mitte",
  "Cell type": "Zellentyp",
  "Copy row": "Zeile kopieren",
  "Row properties": "Zeileneigenschaften",
  "Table properties": "Tabelleneigenschaften",
  "Bottom": "Unten",
  "V Align": "Vertikale Ausrichtung",
  "Header": "Kopfzeile",
  "Right": "Rechtsb\xFCndig",
  "Insert column after": "Neue Spalte danach einf\xFCgen",
  "Cols": "Spalten",
  "Insert row after": "Neue Zeile danach einf\xFCgen",
  "Width": "Breite",
  "Cell properties": "Zelleneigenschaften",
  "Left": "Linksb\xFCndig",
  "Cut row": "Zeile ausschneiden",
  "Delete column": "Spalte l\xF6schen",
  "Center": "Zentriert",
  "Merge cells": "Zellen verbinden",
  "Insert template": "Vorlage einf\xFCgen ",
  "Templates": "Vorlagen",
  "Background color": "Hintergrundfarbe",
  "Custom...": "Benutzerdefiniert...",
  "Custom color": "Benutzerdefinierte Farbe",
  "No color": "Keine Farbe",
  "Text color": "Textfarbe",
  "Table of Contents": "Inhaltsverzeichnis",
  "Show blocks": " Bl\xF6cke anzeigen",
  "Show invisible characters": "Unsichtbare Zeichen anzeigen",
  "Words: {0}": "W\xF6rter: {0}",
  "Insert": "Einf\xFCgen",
  "File": "Datei",
  "Edit": "Bearbeiten",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Rich-Text- Area. Dr\xFCcken Sie ALT-F9 f\xFCr das Men\xFC. Dr\xFCcken Sie ALT-F10 f\xFCr Symbolleiste. Dr\xFCcken Sie ALT-0 f\xFCr Hilfe",
  "Tools": "Werkzeuge",
  "View": "Ansicht",
  "Table": "Tabelle",
  "Format": "Format"
});

/***/ }),
/* 86 */
/***/ (function(module, exports) {

tinymce.addI18n('es', {
  "Cut": "Cortar",
  "Heading 5": "Encabezado 5",
  "Header 2": "Encabezado 2 ",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Tu navegador no soporta acceso directo al portapapeles. Por favor usa las teclas Crtl+X\/C\/V de tu teclado",
  "Heading 4": "Encabezado 4",
  "Div": "Capa",
  "Heading 2": "Encabezado 2",
  "Paste": "Pegar",
  "Close": "Cerrar",
  "Font Family": "Familia de fuentes",
  "Pre": "Pre",
  "Align right": "Alinear a la derecha",
  "New document": "Nuevo documento",
  "Blockquote": "Bloque de cita",
  "Numbered list": "Lista numerada",
  "Heading 1": "Encabezado 1",
  "Headings": "Encabezados",
  "Increase indent": "Incrementar sangr\xEDa",
  "Formats": "Formatos",
  "Headers": "Encabezados",
  "Select all": "Seleccionar todo",
  "Header 3": "Encabezado 3",
  "Blocks": "Bloques",
  "Undo": "Deshacer",
  "Strikethrough": "Tachado",
  "Bullet list": "Lista de vi\xF1etas",
  "Header 1": "Encabezado 1",
  "Superscript": "Super\xEDndice",
  "Clear formatting": "Limpiar formato",
  "Font Sizes": "Tama\xF1os de fuente",
  "Subscript": "Sub\xEDndice",
  "Header 6": "Encabezado 6",
  "Redo": "Rehacer",
  "Paragraph": "P\xE1rrafo",
  "Ok": "Ok",
  "Bold": "Negrita",
  "Code": "C\xF3digo",
  "Italic": "It\xE1lica",
  "Align center": "Alinear al centro",
  "Header 5": "Encabezado 5 ",
  "Heading 6": "Encabezado 6",
  "Heading 3": "Encabezado 3",
  "Decrease indent": "Disminuir sangr\xEDa",
  "Header 4": "Encabezado 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Pegar est\xE1 ahora en modo de texto plano. El contenido se pegar\xE1 como texto plano hasta que desactive esta opci\xF3n.",
  "Underline": "Subrayado",
  "Cancel": "Cancelar",
  "Justify": "Justificar",
  "Inline": "en l\xEDnea",
  "Copy": "Copiar",
  "Align left": "Alinear a la izquierda",
  "Visual aids": "Ayudas visuales",
  "Lower Greek": "Inferior Griega",
  "Square": "Cuadrado",
  "Default": "Por defecto",
  "Lower Alpha": "Inferior Alfa",
  "Circle": "C\xEDrculo",
  "Disc": "Disco",
  "Upper Alpha": "Superior Alfa",
  "Upper Roman": "Superior Romana",
  "Lower Roman": "Inferior Romana",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "Deber\xEDa comenzar por una letra, seguida solo de letras, n\xFAmeros, guiones, puntos, dos puntos o guiones bajos.",
  "Name": "Nombre",
  "Anchor": "Ancla",
  "Id": "Id",
  "You have unsaved changes are you sure you want to navigate away?": "Tiene cambios sin guardar. \xBFEst\xE1 seguro de que quiere salir?",
  "Restore last draft": "Restaurar el \xFAltimo borrador",
  "Special character": "Car\xE1cter especial",
  "Source code": "C\xF3digo fuente",
  "Language": "Idioma",
  "Insert\/Edit code sample": "Insertar/editar c\xF3digo de prueba",
  "B": "A",
  "R": "R",
  "G": "V",
  "Color": "Color",
  "Right to left": "De derecha a izquierda",
  "Left to right": "De izquierda a derecha",
  "Emoticons": "Emoticonos",
  "Robots": "Robots",
  "Document properties": "Propiedades del documento",
  "Title": "T\xEDtulo",
  "Keywords": "Palabras clave",
  "Encoding": "Codificaci\xF3n",
  "Description": "Descripci\xF3n",
  "Author": "Autor",
  "Fullscreen": "Pantalla completa",
  "Horizontal line": "L\xEDnea horizontal",
  "Horizontal space": "Espacio horizontal",
  "Insert\/edit image": "Insertar\/editar imagen",
  "General": "General",
  "Advanced": "Avanzado",
  "Source": "Enlace",
  "Border": "Borde",
  "Constrain proportions": "Restringir proporciones",
  "Vertical space": "Espacio vertical",
  "Image description": "Descripci\xF3n de la imagen",
  "Style": "Estilo",
  "Dimensions": "Dimensiones",
  "Insert image": "Insertar imagen",
  "Image": "Imagen",
  "Zoom in": "Acercar",
  "Contrast": "Contraste",
  "Back": "Atr\xE1s",
  "Gamma": "Gamma",
  "Flip horizontally": "Invertir horizontalmente",
  "Resize": "Redimensionar",
  "Sharpen": "Forma",
  "Zoom out": "Alejar",
  "Image options": "Opciones de imagen",
  "Apply": "Aplicar",
  "Brightness": "Brillo",
  "Rotate clockwise": "Girar a la derecha",
  "Rotate counterclockwise": "Girar a la izquierda",
  "Edit image": "Editar imagen",
  "Color levels": "Niveles de color",
  "Crop": "Recortar",
  "Orientation": "Orientaci\xF3n",
  "Flip vertically": "Invertir verticalmente",
  "Invert": "Invertir",
  "Date\/time": "Fecha\/hora",
  "Insert date\/time": "Insertar fecha\/hora",
  "Remove link": "Quitar enlace",
  "Url": "URL",
  "Text to display": "Texto para mostrar",
  "Anchors": "Anclas",
  "Insert link": "Insertar enlace",
  "Link": "Enlace",
  "New window": "Nueva ventana",
  "None": "Ninguno",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "El enlace que has introducido no parece ser una enlace externo. Quieres a\xF1adir el prefijo necesario http:// ?",
  "Paste or type a link": "Pega o introduce un enlace",
  "Target": "Destino",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "El enlace que has introducido no parece ser una direcci\xF3n de correo electr\xF3nico. Quieres a\xF1adir el prefijo necesario mailto: ?",
  "Insert\/edit link": "Insertar\/editar enlace",
  "Insert\/edit video": "Insertar\/editar video",
  "Media": "Media",
  "Alternative source": "Enlace alternativo",
  "Paste your embed code below:": "Pega tu c\xF3digo embebido debajo",
  "Insert video": "Insertar video",
  "Poster": "Miniatura",
  "Insert\/edit media": "Insertar\/editar medio",
  "Embed": "Incrustado",
  "Nonbreaking space": "Espacio fijo",
  "Page break": "Salto de p\xE1gina",
  "Paste as text": "Pegar como texto",
  "Preview": "Previsualizar",
  "Print": "Imprimir",
  "Save": "Guardar",
  "Could not find the specified string.": "No se encuentra la cadena de texto especificada",
  "Replace": "Reemplazar",
  "Next": "Siguiente",
  "Whole words": "Palabras completas",
  "Find and replace": "Buscar y reemplazar",
  "Replace with": "Reemplazar con",
  "Find": "Buscar",
  "Replace all": "Reemplazar todo",
  "Match case": "Coincidencia exacta",
  "Prev": "Anterior",
  "Spellcheck": "Corrector ortogr\xE1fico",
  "Finish": "Finalizar",
  "Ignore all": "Ignorar todos",
  "Ignore": "Ignorar",
  "Add to Dictionary": "A\xF1adir al Diccionario",
  "Insert row before": "Insertar fila antes",
  "Rows": "Filas",
  "Height": "Alto",
  "Paste row after": "Pegar la fila despu\xE9s",
  "Alignment": "Alineaci\xF3n",
  "Border color": "Color del borde",
  "Column group": "Grupo de columnas",
  "Row": "Fila",
  "Insert column before": "Insertar columna antes",
  "Split cell": "Dividir celdas",
  "Cell padding": "Relleno de celda",
  "Cell spacing": "Espacio entre celdas",
  "Row type": "Tipo de fila",
  "Insert table": "Insertar tabla",
  "Body": "Cuerpo",
  "Caption": "Subt\xEDtulo",
  "Footer": "Pie de p\xE1gina",
  "Delete row": "Eliminar fila",
  "Paste row before": "Pegar la fila antes",
  "Scope": "\xC1mbito",
  "Delete table": "Eliminar tabla",
  "H Align": "Alineamiento Horizontal",
  "Top": "Arriba",
  "Header cell": "Celda de la cebecera",
  "Column": "Columna",
  "Row group": "Grupo de filas",
  "Cell": "Celda",
  "Middle": "Centro",
  "Cell type": "Tipo de celda",
  "Copy row": "Copiar fila",
  "Row properties": "Propiedades de la fila",
  "Table properties": "Propiedades de la tabla",
  "Bottom": "Abajo",
  "V Align": "Alineamiento Vertical",
  "Header": "Cabecera",
  "Right": "Derecha",
  "Insert column after": "Insertar columna despu\xE9s",
  "Cols": "Columnas",
  "Insert row after": "Insertar fila despu\xE9s ",
  "Width": "Ancho",
  "Cell properties": "Propiedades de la celda",
  "Left": "Izquierda",
  "Cut row": "Cortar fila",
  "Delete column": "Eliminar columna",
  "Center": "Centrado",
  "Merge cells": "Combinar celdas",
  "Insert template": "Insertar plantilla",
  "Templates": "Plantillas",
  "Background color": "Color de fondo",
  "Custom...": "Personalizar...",
  "Custom color": "Color personalizado",
  "No color": "Sin color",
  "Text color": "Color del texto",
  "Table of Contents": "Tabla de contenidos",
  "Show blocks": "Mostrar bloques",
  "Show invisible characters": "Mostrar caracteres invisibles",
  "Words: {0}": "Palabras: {0}",
  "Insert": "Insertar",
  "File": "Archivo",
  "Edit": "Editar",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "\xC1rea de texto enriquecido. Pulse ALT-F9 para el menu. Pulse ALT-F10 para la barra de herramientas. Pulse ALT-0 para ayuda",
  "Tools": "Herramientas",
  "View": "Ver",
  "Table": "Tabla",
  "Format": "Formato"
});

/***/ }),
/* 87 */
/***/ (function(module, exports) {

tinymce.addI18n('fr_FR', {
  "Cut": "Couper",
  "Heading 5": "En-t\xEAte 5",
  "Header 2": "Titre 2",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Votre navigateur ne supporte pas la copie directe. Merci d'utiliser les touches Ctrl+X\/C\/V.",
  "Heading 4": "En-t\xEAte 4",
  "Div": "Div",
  "Heading 2": "En-t\xEAte 2",
  "Paste": "Coller",
  "Close": "Fermer",
  "Font Family": "Police",
  "Pre": "Pre",
  "Align right": "Aligner \xE0 droite",
  "New document": "Nouveau document",
  "Blockquote": "Citation",
  "Numbered list": "Num\xE9rotation",
  "Heading 1": "En-t\xEAte 1",
  "Headings": "En-t\xEAtes",
  "Increase indent": "Augmenter le retrait",
  "Formats": "Formats",
  "Headers": "Titres",
  "Select all": "Tout s\xE9lectionner",
  "Header 3": "Titre 3",
  "Blocks": "Blocs",
  "Undo": "Annuler",
  "Strikethrough": "Barr\xE9",
  "Bullet list": "Puces",
  "Header 1": "Titre 1",
  "Superscript": "Exposant",
  "Clear formatting": "Effacer la mise en forme",
  "Font Sizes": "Taille de police",
  "Subscript": "Indice",
  "Header 6": "Titre 6",
  "Redo": "R\xE9tablir",
  "Paragraph": "Paragraphe",
  "Ok": "Ok",
  "Bold": "Gras",
  "Code": "Code",
  "Italic": "Italique",
  "Align center": "Centrer",
  "Header 5": "Titre 5",
  "Heading 6": "En-t\xEAte 6",
  "Heading 3": "En-t\xEAte 3",
  "Decrease indent": "Diminuer le retrait",
  "Header 4": "Titre 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Le presse-papiers est maintenant en mode \"texte plein\". Les contenus seront coll\xE9s sans retenir les formatages jusqu'\xE0 ce que vous d\xE9sactiviez cette option.",
  "Underline": "Soulign\xE9",
  "Cancel": "Annuler",
  "Justify": "Justifier",
  "Inline": "En ligne",
  "Copy": "Copier",
  "Align left": "Aligner \xE0 gauche",
  "Visual aids": "Aides visuelle",
  "Lower Greek": "Grec minuscule",
  "Square": "Carr\xE9",
  "Default": "Par d\xE9faut",
  "Lower Alpha": "Alpha minuscule",
  "Circle": "Cercle",
  "Disc": "Disque",
  "Upper Alpha": "Alpha majuscule",
  "Upper Roman": "Romain majuscule",
  "Lower Roman": "Romain minuscule",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "L'Id doit commencer par une lettre suivi par des lettres, nombres, tirets, points, deux-points ou underscores",
  "Name": "Nom",
  "Anchor": "Ancre",
  "Id": "Id",
  "You have unsaved changes are you sure you want to navigate away?": "Vous avez des modifications non enregistr\xE9es, \xEAtes-vous s\xFBr de quitter la page?",
  "Restore last draft": "Restaurer le dernier brouillon",
  "Special character": "Caract\xE8res sp\xE9ciaux",
  "Source code": "Code source",
  "Language": "Langue",
  "Insert\/Edit code sample": "Ins\xE9rer / modifier une exemple de code",
  "B": "B",
  "R": "R",
  "G": "V",
  "Color": "Couleur",
  "Right to left": "Droite \xE0 gauche",
  "Left to right": "Gauche \xE0 droite",
  "Emoticons": "Emotic\xF4nes",
  "Robots": "Robots",
  "Document properties": "Propri\xE9t\xE9 du document",
  "Title": "Titre",
  "Keywords": "Mots-cl\xE9s",
  "Encoding": "Encodage",
  "Description": "Description",
  "Author": "Auteur",
  "Fullscreen": "Plein \xE9cran",
  "Horizontal line": "Ligne horizontale",
  "Horizontal space": "Espacement horizontal",
  "Insert\/edit image": "Ins\xE9rer/modifier une image",
  "General": "G\xE9n\xE9ral",
  "Advanced": "Avanc\xE9",
  "Source": "Source",
  "Border": "Bordure",
  "Constrain proportions": "Conserver les proportions",
  "Vertical space": "Espacement vertical",
  "Image description": "Description de l'image",
  "Style": "Style",
  "Dimensions": "Dimensions",
  "Insert image": "Ins\xE9rer une image",
  "Image": "Image",
  "Zoom in": "Zoomer",
  "Contrast": "Contraste",
  "Back": "Retour",
  "Gamma": "Gamma",
  "Flip horizontally": "Retournement horizontal",
  "Resize": "Redimensionner",
  "Sharpen": "Affiner",
  "Zoom out": "D\xE9zoomer",
  "Image options": "Options de l'image",
  "Apply": "Appliquer",
  "Brightness": "Luminosit\xE9",
  "Rotate clockwise": "Rotation horaire",
  "Rotate counterclockwise": "Rotation anti-horaire",
  "Edit image": "Modifier l'image",
  "Color levels": "Niveaux de couleur",
  "Crop": "Rogner",
  "Orientation": "Orientation",
  "Flip vertically": "Retournement vertical",
  "Invert": "Inverser",
  "Date\/time": "Date\/heure",
  "Insert date\/time": "Ins\xE9rer date/heure",
  "Remove link": "Enlever le lien",
  "Url": "Url",
  "Text to display": "Texte \xE0 afficher",
  "Anchors": "Ancres",
  "Insert link": "Ins\xE9rer un lien",
  "Link": "Lien",
  "New window": "Nouvelle fen\xEAtre",
  "None": "n\/a",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "L'URL que vous avez entr\xE9e semble \xEAtre un lien externe. Voulez-vous ajouter le pr\xE9fixe http:// n\xE9cessaire?",
  "Paste or type a link": "Coller ou taper un lien",
  "Target": "Cible",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "L'URL que vous avez entr\xE9e semble \xEAtre une adresse e-mail. Voulez-vous ajouter le pr\xE9fixe mailto: n\xE9cessaire?",
  "Insert\/edit link": "Ins\xE9rer/modifier un lien",
  "Insert\/edit video": "Ins\xE9rer/modifier une vid\xE9o",
  "Media": "M\xE9dia",
  "Alternative source": "Source alternative",
  "Paste your embed code below:": "Collez votre code d'int\xE9gration ci-dessous :",
  "Insert video": "Ins\xE9rer une vid\xE9o",
  "Poster": "Publier",
  "Insert\/edit media": "Ins\xE9rer/modifier un m\xE9dia",
  "Embed": "Int\xE9grer",
  "Nonbreaking space": "Espace ins\xE9cable",
  "Page break": "Saut de page",
  "Paste as text": "Coller comme texte",
  "Preview": "Pr\xE9visualiser",
  "Print": "Imprimer",
  "Save": "Enregistrer",
  "Could not find the specified string.": "Impossible de trouver la cha\xEEne sp\xE9cifi\xE9e.",
  "Replace": "Remplacer",
  "Next": "Suiv",
  "Whole words": "Mots entiers",
  "Find and replace": "Trouver et remplacer",
  "Replace with": "Remplacer par",
  "Find": "Chercher",
  "Replace all": "Tout remplacer",
  "Match case": "Respecter la casse",
  "Prev": "Pr\xE9c ",
  "Spellcheck": "V\xE9rification orthographique",
  "Finish": "Finie",
  "Ignore all": "Tout ignorer",
  "Ignore": "Ignorer",
  "Add to Dictionary": "Ajouter au dictionnaire",
  "Insert row before": "Ins\xE9rer une ligne avant",
  "Rows": "Lignes",
  "Height": "Hauteur",
  "Paste row after": "Coller la ligne apr\xE8s",
  "Alignment": "Alignement",
  "Border color": "Couleur de la bordure",
  "Column group": "Groupe de colonnes",
  "Row": "Ligne",
  "Insert column before": "Ins\xE9rer une colonne avant",
  "Split cell": "Diviser la cellule",
  "Cell padding": "Espacement interne cellule",
  "Cell spacing": "Espacement inter-cellulles",
  "Row type": "Type de ligne",
  "Insert table": "Ins\xE9rer un tableau",
  "Body": "Corps",
  "Caption": "Titre",
  "Footer": "Pied",
  "Delete row": "Effacer la ligne",
  "Paste row before": "Coller la ligne avant",
  "Scope": "Etendue",
  "Delete table": "Supprimer le tableau",
  "H Align": "Alignement H",
  "Top": "Haut",
  "Header cell": "Cellule d'en-t\xEAte",
  "Column": "Colonne",
  "Row group": "Groupe de lignes",
  "Cell": "Cellule",
  "Middle": "Milieu",
  "Cell type": "Type de cellule",
  "Copy row": "Copier la ligne",
  "Row properties": "Propri\xE9t\xE9s de la ligne",
  "Table properties": "Propri\xE9t\xE9s du tableau",
  "Bottom": "Bas",
  "V Align": "Alignement V",
  "Header": "En-t\xEAte",
  "Right": "Droite",
  "Insert column after": "Ins\xE9rer une colonne apr\xE8s",
  "Cols": "Colonnes",
  "Insert row after": "Ins\xE9rer une ligne apr\xE8s",
  "Width": "Largeur",
  "Cell properties": "Propri\xE9t\xE9s de la cellule",
  "Left": "Gauche",
  "Cut row": "Couper la ligne",
  "Delete column": "Effacer la colonne",
  "Center": "Centr\xE9",
  "Merge cells": "Fusionner les cellules",
  "Insert template": "Ajouter un th\xE8me",
  "Templates": "Th\xE8mes",
  "Background color": "Couleur d'arri\xE8re-plan",
  "Custom...": "Personnalis\xE9...",
  "Custom color": "Couleur personnalis\xE9e",
  "No color": "Aucune couleur",
  "Text color": "Couleur du texte",
  "Table of Contents": "Table des mati\xE8res",
  "Show blocks": "Afficher les blocs",
  "Show invisible characters": "Afficher les caract\xE8res invisibles",
  "Words: {0}": "Mots : {0}",
  "Insert": "Ins\xE9rer",
  "File": "Fichier",
  "Edit": "Editer",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Zone Texte Riche. Appuyer sur ALT-F9 pour le menu. Appuyer sur ALT-F10 pour la barre d'outils. Appuyer sur ALT-0 pour de l'aide.",
  "Tools": "Outils",
  "View": "Voir",
  "Table": "Tableau",
  "Format": "Format"
});

/***/ }),
/* 88 */
/***/ (function(module, exports) {

tinymce.addI18n('nb_NO', {
  "Cut": "Klipp ut",
  "Heading 5": "Overskrift 5",
  "Header 2": "Overskrift 2",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Nettleseren din st\xF8tter ikke direkte tilgang til utklippsboken. Bruk istedet tastatur-snarveiene Ctrl+X/C/V, eller Cmd+X/C/V p\xE5 Mac.",
  "Heading 4": "Overskrift 4",
  "Div": "Delblokk <div>",
  "Heading 2": "Overskrift 2",
  "Paste": "Lim inn",
  "Close": "Lukk",
  "Font Family": "Skriftsnitt",
  "Pre": "Definert <pre>",
  "Align right": "H\xF8yrejustert",
  "New document": "Nytt dokument",
  "Blockquote": "Sitatblokk <blockquote>",
  "Numbered list": "Nummerliste",
  "Heading 1": "Overskrift 1",
  "Headings": "Overskrifter",
  "Increase indent": "\xD8k innrykk",
  "Formats": "Stiler",
  "Headers": "Overskrifter",
  "Select all": "Marker alt",
  "Header 3": "Overskrift 3",
  "Blocks": "Blokker",
  "Undo": "Angre",
  "Strikethrough": "Gjennomstreket",
  "Bullet list": "Punktliste",
  "Header 1": "Overskrift 1",
  "Superscript": "Hevet skrift",
  "Clear formatting": "Fjern formateringer",
  "Font Sizes": "St\xF8rrelse",
  "Subscript": "Senket skrift",
  "Header 6": "Overskrift 6",
  "Redo": "Utf\xF8r likevel",
  "Paragraph": "Avsnitt <p>",
  "Ok": "OK",
  "Bold": "Halvfet",
  "Code": "Kode <code>",
  "Italic": "Kursiv",
  "Align center": "Midtstilt",
  "Header 5": "Overskrift 5",
  "Heading 6": "Overskrift 6",
  "Heading 3": "Overskrift 3",
  "Decrease indent": "Reduser innrykk",
  "Header 4": "Overskrift 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Lim inn er n\xE5 i ren-tekst modus. Kopiert innhold vil bli limt inn som ren tekst inntil du sl\xE5r av dette valget.",
  "Underline": "Understreket",
  "Cancel": "Avbryt",
  "Justify": "Juster alle linjer",
  "Inline": "Innkapslet <span>",
  "Copy": "Kopier",
  "Align left": "Venstrejustert",
  "Visual aids": "Visuelle hjelpemidler",
  "Lower Greek": "Greske minuskler",
  "Square": "Fylt firkant",
  "Default": "Normal",
  "Lower Alpha": "Minuskler",
  "Circle": "\xC5pen sirkel",
  "Disc": "Fylt sirkel",
  "Upper Alpha": "Versaler",
  "Upper Roman": "Romerske versaler",
  "Lower Roman": "Romerske minuskler",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "Id burde starte med en bokstav, bare fulgt av bokstaver, nummer, streker, punktum, koloner eller understreker.",
  "Name": "Navn",
  "Anchor": "Anker",
  "Id": "Id",
  "You have unsaved changes are you sure you want to navigate away?": "Du har ikke arkivert endringene. Vil du fortsette uten \xE5 arkivere?",
  "Restore last draft": "Gjenopprett siste utkast",
  "Special character": "Spesialtegn",
  "Source code": "Kildekode",
  "Language": "Spr\xE5k",
  "Insert\/Edit code sample": "Sett inn\/endre kodeeksempel",
  "B": "B",
  "R": "R",
  "G": "G",
  "Color": "Farge",
  "Right to left": "H\xF8yre til venstre",
  "Left to right": "Venstre til h\xF8yre",
  "Emoticons": "Hum\xF8rfjes",
  "Robots": "Roboter",
  "Document properties": "Dokumentegenskaper",
  "Title": "Tittel",
  "Keywords": "N\xF8kkelord",
  "Encoding": "Tegnkoding",
  "Description": "Beskrivelse",
  "Author": "Forfatter",
  "Fullscreen": "Fullskjerm",
  "Horizontal line": "Horisontal linje",
  "Horizontal space": "Horisontal marg",
  "Insert\/edit image": "Sett inn\/endre bilde",
  "General": "Generelt",
  "Advanced": "Avansert",
  "Source": "Bildelenke",
  "Border": "Ramme",
  "Constrain proportions": "Behold proporsjoner",
  "Vertical space": "Vertikal marg",
  "Image description": "Bildebeskrivelse",
  "Style": "Stil",
  "Dimensions": "Dimensjoner",
  "Insert image": "Sett inn bilde",
  "Image": "Bilde",
  "Zoom in": "Zoom inn",
  "Contrast": "Kontrast",
  "Back": "Tilbake",
  "Gamma": "Gamma",
  "Flip horizontally": "Speilvend horisontalt",
  "Resize": "Skaler",
  "Sharpen": "Skarphet",
  "Zoom out": "Zoom ut",
  "Image options": "Bilde innstillinger",
  "Apply": "Utf\xF8r",
  "Brightness": "Lysstyrke",
  "Rotate clockwise": "Roter mot h\xF8yre",
  "Rotate counterclockwise": "Roter mot venstre",
  "Edit image": "Rediger bilde",
  "Color levels": "Fargeniv\xE5",
  "Crop": "Beskj\xE6r",
  "Orientation": "Orientering",
  "Flip vertically": "Speilvend vertikalt",
  "Invert": "Inverter",
  "Date\/time": "Dato\/tid",
  "Insert date\/time": "Sett inn dato\/tid",
  "Remove link": "Fjern lenke",
  "Url": "Url",
  "Text to display": "Tekst som skal vises",
  "Anchors": "Anker",
  "Insert link": "Sett inn lenke",
  "Link": "Lenke",
  "New window": "Nytt vindu",
  "None": "Ingen",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "Oppgitt URL ser ut til \xE5 v\xE6re en e-postadresse. \xD8nsker du \xE5 sette inn p\xE5krevd mailto:-prefiks foran e-postadressen?",
  "Paste or type a link": "Lim inn eller skriv en lenke",
  "Target": "M\xE5l",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "Oppgitte URL ser ut til \xE5 v\xE6re en epost-adresse. \xD8nsker du \xE5 sette inn p\xE5krevet mailto: prefiks forran epost-adressen?",
  "Insert\/edit link": "Sett inn\/endre lenke",
  "Insert\/edit video": "Sett inn\/rediger video",
  "Media": "Media",
  "Alternative source": "Alternativ kilde",
  "Paste your embed code below:": "Lim inn  inkluderings-koden nedenfor",
  "Insert video": "Sett inn video",
  "Poster": "Plakatbilde",
  "Insert\/edit media": "Sett inn\/endre media",
  "Embed": "Inkluder",
  "Nonbreaking space": "Hardt mellomrom",
  "Page break": "Sideskifte",
  "Paste as text": "Lim inn som tekst",
  "Preview": "Forh\xE5ndsvisning",
  "Print": "Skriv ut",
  "Save": "Arkiver",
  "Could not find the specified string.": "Kunne ikke finne den spesifiserte teksten",
  "Replace": "Erstatt",
  "Next": "Neste",
  "Whole words": "Hele ord",
  "Find and replace": "Finn og erstatt",
  "Replace with": "Erstatt med",
  "Find": "Finn",
  "Replace all": "Erstatt alle",
  "Match case": "Match store og sm\xE5 bokstaver",
  "Prev": "Forrige",
  "Spellcheck": "Stavekontroll",
  "Finish": "Avslutt",
  "Ignore all": "Ignorer alle",
  "Ignore": "Ignorer",
  "Add to Dictionary": "Legg til i ordliste",
  "Insert row before": "Sett inn rad f\xF8r",
  "Rows": "Rader",
  "Height": "H\xF8yde",
  "Paste row after": "Lim inn rad etter",
  "Alignment": "Justering",
  "Border color": "Rammefarge",
  "Column group": "Kolonnegruppe",
  "Row": "Rad",
  "Insert column before": "Sett inn kolonne f\xF8r",
  "Split cell": "Splitt celle",
  "Cell padding": "Cellemarg",
  "Cell spacing": "Celleavstand",
  "Row type": "Rad-type",
  "Insert table": "Sett inn tabell",
  "Body": "Br\xF8dtekst",
  "Caption": "Tittel",
  "Footer": "Bunntekst",
  "Delete row": "Slett rad",
  "Paste row before": "Lim inn rad f\xF8r",
  "Scope": "Omfang",
  "Delete table": "Slett tabell",
  "H Align": "H Justering",
  "Top": "Topp",
  "Header cell": "Topptekst-celle",
  "Column": "Kolonne",
  "Row group": "Radgruppe",
  "Cell": "Celle",
  "Middle": "Midten",
  "Cell type": "Celletype",
  "Copy row": "Kopier rad",
  "Row properties": "Rad egenskaper",
  "Table properties": "Tabell egenskaper",
  "Bottom": "Bunn",
  "V Align": "V Justering",
  "Header": "Topptekst",
  "Right": "H\xF8yre",
  "Insert column after": "Sett inn kolonne etter",
  "Cols": "Kolonner",
  "Insert row after": "Sett in rad etter",
  "Width": "Bredde",
  "Cell properties": "Celle egenskaper",
  "Left": "Venstre",
  "Cut row": "Klipp ut rad",
  "Delete column": "Slett kolonne",
  "Center": "Midtstilt",
  "Merge cells": "Sl\xE5 sammen celler",
  "Insert template": "Sett inn mal",
  "Templates": "Maler",
  "Background color": "Bakgrunnsfarge",
  "Custom...": "Tilpass...",
  "Custom color": "Tilpasset farge",
  "No color": "Ingen farge",
  "Text color": "Tekstfarge",
  "Table of Contents": "Innholdsfortegnelse",
  "Show blocks": "Vis blokker",
  "Show invisible characters": "Vis skjulte tegn",
  "Words: {0}": "Antall ord: {0}",
  "Insert": "Sett inn",
  "File": "Arkiv",
  "Edit": "Rediger",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Tekstredigering. Tast ALT-F9 for meny. Tast ALT-F10 for verkt\xF8ys-rader. Tast ALT-0 for hjelp.",
  "Tools": "Verkt\xF8y",
  "View": "Vis",
  "Table": "Tabell",
  "Format": "Format"
});

/***/ }),
/* 89 */
/***/ (function(module, exports) {

tinymce.addI18n('nl', {
  "Cut": "Knippen",
  "Heading 5": "Kop 5",
  "Header 2": "Kop 2",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Uw browser ondersteunt geen toegang tot het clipboard. Gelieve ctrl+X\/C\/V sneltoetsen te gebruiken.",
  "Heading 4": "Kop 4",
  "Div": "Div",
  "Heading 2": "Kop 2",
  "Paste": "Plakken",
  "Close": "Sluiten",
  "Font Family": "Lettertype",
  "Pre": "Pre",
  "Align right": "Rechts uitlijnen",
  "New document": "Nieuw document",
  "Blockquote": "Quote",
  "Numbered list": "Nummering",
  "Heading 1": "Kop 1",
  "Headings": "Koppen",
  "Increase indent": "Inspringen vergroten",
  "Formats": "Opmaak",
  "Headers": "Kopteksten",
  "Select all": "Alles selecteren",
  "Header 3": "Kop 3",
  "Blocks": "Blok",
  "Undo": "Ongedaan maken",
  "Strikethrough": "Doorhalen",
  "Bullet list": "Opsommingsteken",
  "Header 1": "Kop 1",
  "Superscript": "Superscript",
  "Clear formatting": "Opmaak verwijderen",
  "Font Sizes": "Tekengrootte",
  "Subscript": "Subscript",
  "Header 6": "Kop 6",
  "Redo": "Opnieuw",
  "Paragraph": "Paragraaf",
  "Ok": "Ok\xE9",
  "Bold": "Vet",
  "Code": "Code",
  "Italic": "Cursief",
  "Align center": "Centreren",
  "Header 5": "Kop 5",
  "Heading 6": "Kop 6",
  "Heading 3": "Kop 3",
  "Decrease indent": "Inspringen verkleinen",
  "Header 4": "Kop 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Plakken gebeurt nu als platte tekst. Tekst wordt nu ingevoegd zonder opmaak tot deze optie uitgeschakeld wordt.",
  "Underline": "Onderstreept",
  "Cancel": "Annuleren",
  "Justify": "Uitlijnen",
  "Inline": "Inlijn",
  "Copy": "Kopi\xEBren",
  "Align left": "Links uitlijnen",
  "Visual aids": "Hulpmiddelen",
  "Lower Greek": "Griekse letters",
  "Square": "Vierkant",
  "Default": "Standaard",
  "Lower Alpha": "Kleine letters",
  "Circle": "Cirkel",
  "Disc": "Bolletje",
  "Upper Alpha": "Hoofdletters",
  "Upper Roman": "Romeinse cijfers groot",
  "Lower Roman": "Romeinse cijfers klein",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "ID moet beginnen met een letter, gevolgd door letters, nummers, streepjes, punten, dubbele punten of underscores.",
  "Name": "Naam",
  "Anchor": "Anker",
  "Id": "ID",
  "You have unsaved changes are you sure you want to navigate away?": "U hebt niet alles opgeslagen bent u zeker dat u de pagina wenst te verlaten?",
  "Restore last draft": "Herstel het laatste concept",
  "Special character": "Speciale karakters",
  "Source code": "Broncode",
  "Language": "Programmeertaal",
  "Insert\/Edit code sample": "Broncode invoegen\/bewerken",
  "B": "Blauw",
  "R": "Rood",
  "G": "Groen",
  "Color": "Kleur",
  "Right to left": "Rechts naar links",
  "Left to right": "Links naar rechts",
  "Emoticons": "Emoticons",
  "Robots": "Robots",
  "Document properties": "Document eigenschappen",
  "Title": "Titel",
  "Keywords": "Sleutelwoorden",
  "Encoding": "Codering",
  "Description": "Omschrijving",
  "Author": "Auteur",
  "Fullscreen": "Volledig scherm",
  "Horizontal line": "Horizontale lijn",
  "Horizontal space": "Horizontale ruimte",
  "Insert\/edit image": "Afbeelding invoegen\/bewerken",
  "General": "Algemeen",
  "Advanced": "Geavanceerd",
  "Source": "Bron",
  "Border": "Rand",
  "Constrain proportions": "Verhoudingen behouden",
  "Vertical space": "Verticale ruimte",
  "Image description": "Afbeelding omschrijving",
  "Style": "Stijl",
  "Dimensions": "Afmetingen",
  "Insert image": "Afbeelding invoegen",
  "Image": "Afbeelding",
  "Zoom in": "Inzoomen",
  "Contrast": "Contrast",
  "Back": "Terug",
  "Gamma": "Gamma",
  "Flip horizontally": "Horizontaal spiegelen",
  "Resize": "Formaat aanpassen",
  "Sharpen": "Scherpte",
  "Zoom out": "Uitzoomen",
  "Image options": "Afbeelding opties",
  "Apply": "Toepassen",
  "Brightness": "Helderheid",
  "Rotate clockwise": "Rechtsom draaien",
  "Rotate counterclockwise": "Linksom draaien",
  "Edit image": "Bewerk afbeelding",
  "Color levels": "Kleurniveau's",
  "Crop": "Uitsnijden",
  "Orientation": "Orientatie",
  "Flip vertically": "Verticaal spiegelen",
  "Invert": "Omkeren",
  "Date\/time": "Datum\/tijd",
  "Insert date\/time": "Voeg datum\/tijd in",
  "Remove link": "Link verwijderen",
  "Url": "Url",
  "Text to display": "Linktekst",
  "Anchors": "Anker",
  "Insert link": "Hyperlink invoegen",
  "Link": "Link",
  "New window": "Nieuw venster",
  "None": "Geen",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "De ingegeven URL verwijst naar een extern adres. Wil je er \"http:\/\/\" aan toevoegen?",
  "Paste or type a link": "Plak of typ een link",
  "Target": "Doel",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "De ingegeven URL lijkt op een e-mailadres. Wil je er \"mailto:\" aan toevoegen?",
  "Insert\/edit link": "Hyperlink invoegen\/bewerken",
  "Insert\/edit video": "Video invoegen\/bewerken",
  "Media": "Media",
  "Alternative source": "Alternatieve bron",
  "Paste your embed code below:": "Plak u in te sluiten code hieronder:",
  "Insert video": "Video invoegen",
  "Poster": "Poster",
  "Insert\/edit media": "Media invoegen\/bewerken",
  "Embed": "Insluiten",
  "Nonbreaking space": "Vaste spatie invoegen",
  "Page break": "Pagina einde",
  "Paste as text": "Plakken als tekst",
  "Preview": "Voorbeeld",
  "Print": "Print",
  "Save": "Opslaan",
  "Could not find the specified string.": "Geen resultaten gevonden",
  "Replace": "Vervangen",
  "Next": "Volgende",
  "Whole words": "Alleen hele woorden",
  "Find and replace": "Zoek en vervang",
  "Replace with": "Vervangen door",
  "Find": "Zoeken",
  "Replace all": "Alles vervangen",
  "Match case": "Identieke hoofd\/kleine letters",
  "Prev": "Vorige",
  "Spellcheck": "Spellingscontrole",
  "Finish": "Einde",
  "Ignore all": "Alles negeren",
  "Ignore": "Negeren",
  "Add to Dictionary": "Toevoegen aan woordenlijst",
  "Insert row before": "Voeg rij boven toe",
  "Rows": "Rijen",
  "Height": "Hoogte",
  "Paste row after": "Plak rij onder",
  "Alignment": "Uitlijning",
  "Border color": "Randkleur",
  "Column group": "Kolomgroep",
  "Row": "Rij",
  "Insert column before": "Voeg kolom in voor",
  "Split cell": "Cel splitsen",
  "Cell padding": "Ruimte binnen cel",
  "Cell spacing": "Celruimte",
  "Row type": "Rijtype",
  "Insert table": "Tabel invoegen",
  "Body": "Body",
  "Caption": "Onderschrift",
  "Footer": "Voettekst",
  "Delete row": "Verwijder rij",
  "Paste row before": "Plak rij boven",
  "Scope": "Bereik",
  "Delete table": "Verwijder tabel",
  "H Align": "Links uitlijnen",
  "Top": "Bovenaan",
  "Header cell": "Kopcel",
  "Column": "Kolom",
  "Row group": "Rijgroep",
  "Cell": "Cel",
  "Middle": "Centreren",
  "Cell type": "Celtype",
  "Copy row": "Kopieer rij",
  "Row properties": "Rij eigenschappen",
  "Table properties": "Tabel eigenschappen",
  "Bottom": "Onderaan",
  "V Align": "Boven uitlijnen",
  "Header": "Koptekst",
  "Right": "Rechts",
  "Insert column after": "Voeg kolom in na",
  "Cols": "Kolommen",
  "Insert row after": "Voeg rij onder toe",
  "Width": "Breedte",
  "Cell properties": "Cel eigenschappen",
  "Left": "Links",
  "Cut row": "Knip rij",
  "Delete column": "Verwijder kolom",
  "Center": "Midden",
  "Merge cells": "Cellen samenvoegen",
  "Insert template": "Sjabloon invoegen",
  "Templates": "Sjablonen",
  "Background color": "Achtergrondkleur",
  "Custom...": "Eigen...",
  "Custom color": "Eigen kleur",
  "No color": "Geen kleur",
  "Text color": "Tekstkleur",
  "Table of Contents": "Inhoudsopgave",
  "Show blocks": "Blokken tonen",
  "Show invisible characters": "Onzichtbare karakters tonen",
  "Words: {0}": "Woorden: {0}",
  "Insert": "Invoegen",
  "File": "Bestand",
  "Edit": "Bewerken",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Rich Text Area. Druk ALT-F9 voor het menu. Druk ALT-F10 voor de toolbar. Druk ALT-0 voor help.",
  "Tools": "Gereedschap",
  "View": "Beeld",
  "Table": "Tabel",
  "Format": "Opmaak"
});

/***/ }),
/* 90 */
/***/ (function(module, exports) {

tinymce.addI18n('sv_SE', {
  "Cut": "Klipp ut",
  "Heading 5": "Rubrik 5",
  "Header 2": "Rubrik 2",
  "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X\/C\/V keyboard shortcuts instead.": "Din browser st\xF6djer inte direkt \xE5tkomst till klippboken. V\xE4nligen anv\xE4nd kortkommandona Ctrl+X/C/V i st\xE4llet.",
  "Heading 4": "Rubrik 4",
  "Div": "Div",
  "Heading 2": "Rubrik 2",
  "Paste": "Klistra in",
  "Close": "St\xE4ng",
  "Font Family": "Teckensnitt",
  "Pre": "F\xF6rformaterad",
  "Align right": "H\xF6gerst\xE4ll",
  "New document": "Nytt dokument",
  "Blockquote": "Blockcitat",
  "Numbered list": "Nummerlista",
  "Heading 1": "Rubrik 1",
  "Headings": "Rubriker",
  "Increase indent": "\xD6ka indrag",
  "Formats": "Format",
  "Headers": "Rubriker",
  "Select all": "Markera allt",
  "Header 3": "Rubrik 3",
  "Blocks": "Block",
  "Undo": "\xC5ngra",
  "Strikethrough": "Genomstruken",
  "Bullet list": "Punktlista",
  "Header 1": "Rubrik 1",
  "Superscript": "Upph\xF6jd text",
  "Clear formatting": "Avformatera",
  "Font Sizes": "Storlek",
  "Subscript": "Neds\xE4nkt text",
  "Header 6": "Rubrik 6",
  "Redo": "G\xF6r om",
  "Paragraph": "Br\xF6dtext",
  "Ok": "Ok",
  "Bold": "Fetstil",
  "Code": "Kod",
  "Italic": "Kursiv stil",
  "Align center": "Centrera",
  "Header 5": "Rubrik 5",
  "Heading 6": "Rubrik 6",
  "Heading 3": "Rubrik 3",
  "Decrease indent": "Minska indrag",
  "Header 4": "Rubrik 4",
  "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": "Klistra in \xE4r nu i textl\xE4ge. Inneh\xE5ll kommer att konverteras till text tills du sl\xE5r av detta l\xE4ge.",
  "Underline": "Understruken",
  "Cancel": "Avbryt",
  "Justify": "Justera",
  "Inline": "Inline",
  "Copy": "Kopiera",
  "Align left": "V\xE4nsterst\xE4ll",
  "Visual aids": "Visuella hj\xE4lpmedel",
  "Lower Greek": "Grekiska gemener",
  "Square": "Fyrkant",
  "Default": "Original",
  "Lower Alpha": "Gemener",
  "Circle": "Cirkel",
  "Disc": "Disk",
  "Upper Alpha": "Versaler",
  "Upper Roman": "Romerska versaler",
  "Lower Roman": "Romerska gemener",
  "Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.": "Id skall b\xF6rja med en bokstav och f\xF6ljande tecken ska vara bokst\xE4ver, nummer, punkter, understr\xE4ck eller kolon.",
  "Name": "Namn",
  "Anchor": "Ankare",
  "Id": "Id",
  "You have unsaved changes are you sure you want to navigate away?": "Du har f\xF6r\xE4ndringar som du inte har sparat. \xC4r du s\xE4ker p\xE5 att du vill navigera vidare?",
  "Restore last draft": "\xC5terst\xE4ll senaste utkast",
  "Special character": "Specialtecken",
  "Source code": "K\xE4llkod",
  "Language": "Spr\xE5k",
  "Insert\/Edit code sample": "Infoga/Redigera k\xE5d exempel",
  "B": "B",
  "R": "R",
  "G": "G",
  "Color": "F\xE4rg",
  "Right to left": "H\xF6ger till v\xE4nster",
  "Left to right": "V\xE4nster till h\xF6ger",
  "Emoticons": "Emoticons",
  "Robots": "Robotar",
  "Document properties": "Dokumentegenskaper",
  "Title": "Titel",
  "Keywords": "Nyckelord",
  "Encoding": "Encoding",
  "Description": "Beskrivning",
  "Author": "F\xF6rfattare",
  "Fullscreen": "Fullsk\xE4rm",
  "Horizontal line": "Horisontell linje",
  "Horizontal space": "Horisontellt utrymme",
  "Insert\/edit image": "Infoga\/redigera bild",
  "General": "Generella",
  "Advanced": "Avancerat",
  "Source": "K\xE4lla",
  "Border": "Ram",
  "Constrain proportions": "Begr\xE4nsa proportioner",
  "Vertical space": "Vertikaltutrymme",
  "Image description": "Bildbeskrivning",
  "Style": "Stil",
  "Dimensions": "Dimensioner",
  "Insert image": "Infoga bild",
  "Image": "Bild",
  "Zoom in": "Zooma in",
  "Contrast": "Kontrast",
  "Back": "Tillbaka",
  "Gamma": "Gamma",
  "Flip horizontally": "Spegelv\xE4nd horisontellt",
  "Resize": "Skala om",
  "Sharpen": "Sk\xE4rpa",
  "Zoom out": "Zooma ut",
  "Image options": "Bild inst\xE4llningar",
  "Apply": "Applicera",
  "Brightness": "Ljusstyrka",
  "Rotate clockwise": "Rotera medurs",
  "Rotate counterclockwise": "Rotera moturs",
  "Edit image": "Redigera bild",
  "Color levels": "F\xE4rgniv\xE5er",
  "Crop": "Besk\xE4r",
  "Orientation": "Orientera",
  "Flip vertically": "Spegelv\xE4nd vertikalt",
  "Invert": "Invertera",
  "Date\/time": "Datum\/tid",
  "Insert date\/time": "Infoga datum\/tid",
  "Remove link": "Ta bort l\xE4nk",
  "Url": "Url",
  "Text to display": "Text att visa",
  "Anchors": "Bokm\xE4rken",
  "Insert link": "Infoga l\xE4nk",
  "Link": "L\xE4nk",
  "New window": "Nytt f\xF6nster",
  "None": "Ingen",
  "The URL you entered seems to be an external link. Do you want to add the required http:\/\/ prefix?": "Urlen du angav verkar vara en extern l\xE4nk. Vill du l\xE4gga till http:// prefixet?",
  "Paste or type a link": "Klistra in eller skriv en l\xE4nk",
  "Target": "M\xE5l",
  "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "Urlen du angav verkar vara en epost adress. Vill du l\xE4gga till ett mailto: prefix?",
  "Insert\/edit link": "Infoga/redigera l\xE4nk",
  "Insert\/edit video": "Infoga\/redigera video",
  "Media": "Media",
  "Alternative source": "Alternativ k\xE4lla",
  "Paste your embed code below:": "Klistra in din inb\xE4ddningskod nedan:",
  "Insert video": "Infoga video",
  "Poster": "Affish",
  "Insert\/edit media": "Infoga\/redigera media",
  "Embed": "Inb\xE4ddning",
  "Nonbreaking space": "Avbrottsfritt mellanrum",
  "Page break": "Sydbrytning",
  "Paste as text": "Klistra in som text",
  "Preview": "F\xF6rhandsgranska",
  "Print": "Skriv ut",
  "Save": "Spara",
  "Could not find the specified string.": "Kunde inte hitta den specifierade st\xE4ngen.",
  "Replace": "Ers\xE4tt",
  "Next": "N\xE4sta",
  "Whole words": "Hela ord",
  "Find and replace": "S\xF6k och ers\xE4tt",
  "Replace with": "Ers\xE4tt med",
  "Find": "S\xF6k",
  "Replace all": "Ers\xE4tt alla",
  "Match case": "Matcha gemener\/versaler",
  "Prev": "F\xF6reg\xE5ende",
  "Spellcheck": "R\xE4ttstava",
  "Finish": "Avsluta",
  "Ignore all": "Ignorera alla",
  "Ignore": "Ignorera",
  "Add to Dictionary": "L\xE4gg till i ordlista",
  "Insert row before": "Infoga rad f\xF6re",
  "Rows": "Rader",
  "Height": "H\xF6jd",
  "Paste row after": "Klistra in rad efter",
  "Alignment": "Justering",
  "Border color": "Ramf\xE4rg",
  "Column group": "Kolumngrupp",
  "Row": "Rad",
  "Insert column before": "Infoga kolumn f\xF6re",
  "Split cell": "Bryt is\xE4r celler",
  "Cell padding": "Cellpaddning",
  "Cell spacing": "Cellmellanrum",
  "Row type": "Radtyp",
  "Insert table": "Infoga tabell",
  "Body": "Kropp",
  "Caption": "Rubrik",
  "Footer": "Fot",
  "Delete row": "Radera rad",
  "Paste row before": "Klista in rad f\xF6re",
  "Scope": "Omf\xE5ng",
  "Delete table": "Radera tabell",
  "H Align": "H-justering",
  "Top": "Toppen",
  "Header cell": "Huvudcell",
  "Column": "Kolumn",
  "Row group": "Radgrupp",
  "Cell": "Cell",
  "Middle": "Mitten",
  "Cell type": "Celltyp",
  "Copy row": "Kopiera rad",
  "Row properties": "Radegenskaper",
  "Table properties": "Tabellegenskaper",
  "Bottom": "Botten",
  "V Align": "V-justering",
  "Header": "Huvud",
  "Right": "H\xF6ger",
  "Insert column after": "Infoga kolumn efter",
  "Cols": "Kolumner",
  "Insert row after": "Infoga rad efter",
  "Width": "Bredd",
  "Cell properties": "Cellegenskaper",
  "Left": "V\xE4nster",
  "Cut row": "Klipp ut rad",
  "Delete column": "Radera kolumn",
  "Center": "Centrum",
  "Merge cells": "Sammanfoga celler",
  "Insert template": "Infoga mall",
  "Templates": "Mallar",
  "Background color": "Bakgrundsf\xE4rg",
  "Custom...": "Anpassad...",
  "Custom color": "Anpassad f\xE4rg",
  "No color": "Ingen f\xE4rg",
  "Text color": "Textf\xE4rg",
  "Table of Contents": "Inneh\xE5llsf\xF6rteckning",
  "Show blocks": "Visa block",
  "Show invisible characters": "Visa onsynliga tecken",
  "Words: {0}": "Ord: {0}",
  "Insert": "Infoga",
  "File": "Fil",
  "Edit": "Redigera",
  "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "Textredigerare. Tryck ALT-F9 f\xF6r menyn. Tryck ALT-F10 f\xF6r verktygsrader. Tryck ALT-0 f\xF6r hj\xE4lp.",
  "Tools": "Verktyg",
  "View": "Visa",
  "Table": "Tabell",
  "Format": "Format"
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TertiaryMenuButton = __webpack_require__(92);
/**
 * Component for displaying a button on a table row when the user hovers over the row. This component is a child of the ActionButtons component.
 */


var TertiaryMenu = React.createClass({
  displayName: "TertiaryMenu",
  // styles
  // styles
  // custom methods
  clickHandler: function clickHandler(event) {
    if (typeof this.props.clickHandler == "function") {
      this.props.clickHandler(this.props.data, event);
    } else {
      event.stopPropagation();
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Function handler for the button click event.
     * The row data item is passed in as the first argument and the click event object as the second argument to the handler.
     */
    clickHandler: React.PropTypes.func,

    /**
     * CSS class for icon. Example "fa fa-database" for the font-awesome icon.
     */
    icon: React.PropTypes.string,

    /**
     * Text to display on the button.
     */
    text: React.PropTypes.string,

    /**
     * Sets whether the button is active or not. This takes precedence over the activePropName prop.
     */
    active: React.PropTypes.bool,

    /**
     * Sets whether the button is visible or not. This takes precedence over the visiblePropName prop. Default is true.
     */
    visible: React.PropTypes.bool,

    /**
     * The name of the prop in the data object that decides whether the button is visible or not. The prop value should be boolean.
     */
    visiblePropName: React.PropTypes.string
  },
  render: function render() {
    var listStyle = {
      listStyle: 'none',
      display: 'inline'
    };

    var id = this.props.id || _.uniqueId("tertiaryMenu_");

    var name = null;
    var isActive = true;

    if (typeof this.props.active == "boolean") {
      isActive = this.props.active;
    }

    var isVisible = true;

    if (typeof this.props.visible == "boolean") {
      isVisible = this.props.visible;
    }

    if (isVisible == true) {
      return React.createElement("li", {
        style: listStyle
      }, React.createElement(TertiaryMenuButton, {
        name: name,
        id: id,
        text: this.props.text,
        clickHandler: this.clickHandler,
        active: isActive
      }));
    } else {
      return null;
    }
  } // lifecycle event handlers

});
module.exports = TertiaryMenu;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Button that denotes a tertiary action. Visually it does not have a border or background
 * @param {String} id Id for the button
 * @param {Function} clickHandler Handler for the click event of the button
 * @param {String} text Text to display on the button
 * @param {bool} active Boolean that enables or disables the button
 * @param {String} icon CSS class for icon. Example "fa fa-database" if using font-awesome
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var TertiaryMenuButton = React.createClass({
  displayName: "TertiaryMenuButton",
  // custom properties
  tertiaryMenuButtonBaseStyle: {
    display: "inline",
    // use this style so that we get a block element, more explanation below for vertical align
    textAlign: "left",
    fontSize: 14,
    lineHeight: "normal",
    height: 20,
    paddingBottom: "5px",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  tertiaryMenuButtonActiveStyle: function tertiaryMenuButtonActiveStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#333333"
    }, this.tertiaryMenuButtonBaseStyle);
  },
  tertiaryMenuButtonInActiveStyle: function tertiaryMenuButtonInActiveStyle() {
    return _.extend({
      cursor: "pointer",
      color: "#346F8F" // color: "#285C7E",

    }, this.tertiaryMenuButtonBaseStyle);
  },
  innerLayerStyle: {
    display: "table-cell",
    // use this style so that we can vertically middle align the content in the button
    verticalAlign: "middle"
  },
  textContainerStyle: {
    paddingLeft: 3,
    paddingRight: 3,
    position: "relative",
    // borderBottom: "2px solid rgb(247, 144, 30)",
    paddingBottom: 3
  },
  // custome properties
  // custom methods
  // custom methods
  // lifecycle event handlers

  /**
   * We need to set the active state when the active props change
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var active = newProps.active == false ? false : true;

    if (active != this.state.active) {
      this.setState({
        active: active
      });
    }
  },
  getInitialState: function getInitialState() {
    var active = this.props.active == false ? false : true;
    return {
      active: active,
      // value set by prop because it is the default value
      showHover: false
    };
  },
  render: function render() {
    var _this = this;

    /**
     * Handler function for MouseEnter event
     * @param {Object} The event object from the MouseEnter event
     */
    var showHover = function showHover(event) {
      if (_this.state.active == true) {
        _this.setState({
          showHover: true
        });
      }

      event.stopPropagation();
    };
    /**
     * Handler function for MouseLeave event
     * @param {Object} The event object from the MouseLeave event
     */


    var hideHover = function hideHover(event) {
      if (_this.state.active == true) {
        _this.setState({
          showHover: false
        });
      }

      event.stopPropagation();
    };

    var clickHandler = function clickHandler() {
      //this.setState({ active: true });
      return _this.props.clickHandler;
    };

    var currentStyle = function currentStyle() {
      var buttonStyle = _this.tertiaryMenuButtonActiveStyle(); //this.tertiaryMenuButtonActiveStyle();


      if (_this.state.active == false) {
        buttonStyle = _this.tertiaryMenuButtonInActiveStyle();
        _this.textContainerStyle.borderBottom = "none";

        if (_this.state.showHover == true) {
          buttonStyle.color = "#2C4F61"; // =  this.tertiaryMenuButtonActiveHoverInActiveStyle();
        } else if (_this.state.showHover == false) {
          buttonStyle.color = "#346F8F"; // buttonStyle = this.tertiaryMenuButtonInActiveHoverInActiveStyle();
        }
      } else {
        _this.textContainerStyle.borderBottom = "2px solid #F7901E";
      } // if (this.state.showHover == true) {
      //     buttonStyle.color = "#2C4F61"; // =  this.tertiaryMenuButtonActiveHoverInActiveStyle();
      // } else if (this.state.showHover == false) {
      //     buttonStyle.color = "#346F8F";
      //     // buttonStyle = this.tertiaryMenuButtonInActiveHoverInActiveStyle();
      // }


      if (_this.props.overrideStyle) {
        buttonStyle = _.extend(buttonStyle, _this.props.overrideStyle);
      }

      return buttonStyle;
    };

    var icon = function icon() {
      if (_this.props.icon) {
        return React.createElement("span", {
          style: {
            marginLeft: 10
          },
          className: _this.props.icon
        });
      } else {
        return null;
      }
    };

    var id = this.props.id || _.uniqueId("tertiaryMenuButton_");

    return React.createElement("div", {
      id: id,
      style: currentStyle(),
      onClick: clickHandler(),
      onMouseEnter: showHover,
      onMouseLeave: hideHover
    }, React.createElement("div", {
      style: this.innerLayerStyle
    }, icon(), React.createElement("span", {
      style: this.textContainerStyle
    }, this.props.text)));
  } // lifecycle event handlers

});
module.exports = TertiaryMenuButton;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/**
 * Component to render a step in the upload dialog.
 */


var UploadDialogStep = React.createClass({
  displayName: "UploadDialogStep",
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    var stepNumberStyle = {
      fontFamily: "verdana",
      fontSize: 14,
      color: "#333",
      fontWeight: "bold",
      border: "solid 2px #333",
      borderRadius: "50%",
      width: 20,
      height: 20,
      textAlign: "center",
      lineHeight: "20px"
    };
    var stepContainerStyle = {
      marginLeft: 20,
      marginBottom: 20,
      fontFamily: "verdana",
      fontSize: 14,
      color: "#333",
      display: "flex"
    };
    var stepChildrenContainerStyle = {
      paddingTop: 4,
      fontWeight: "normal",
      marginLeft: 12,
      fontFamily: "verdana",
      fontSize: 12
    };

    var stepChildrenContainer = function stepChildrenContainer() {
      return React.createElement("div", {
        style: stepChildrenContainerStyle
      }, _this.props.children);
    };

    var id = this.props.id || _.uniqueId("uploadDialogStep_");

    var renderStepNumber = function renderStepNumber() {
      return React.createElement("div", {
        style: stepNumberStyle
      }, _this.props.childIndex + 1);
    };

    if (this.props.childIndex === this.props.totalSteps - 1) {
      // last step then the margin bottom is 12px
      stepContainerStyle.marginBottom = 12;
    } //adding a class name for adding css in mdlt 


    var stepClass = 'stepClass' + (this.props.childIndex + 1);
    return React.createElement("div", {
      id: id,
      className: stepClass,
      style: stepContainerStyle
    }, renderStepNumber(), stepChildrenContainer());
  } // lifecycle event handlers

});
module.exports = UploadDialogStep;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_AbstractTableColumn__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_AbstractTableColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_AbstractTableColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ActionButtons__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ActionButtons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ActionButtons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ActionButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ActionButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ActionButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_AreaChart__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_AreaChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_AreaChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_AuditTable__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_AuditTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_AuditTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_BalloonContainer__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_BalloonContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_BalloonContainer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_CheckBox__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_CheckBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_CheckBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_CheckBoxGroup__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_CheckBoxGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_CheckBoxGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ConfirmationDialog__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ConfirmationDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ConfirmationDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_DateControl__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_DateControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_DateControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_DateControlInput__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_DateControlInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_DateControlInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_DateVersionControl__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_DateVersionControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_DateVersionControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_DeleteCommentsDialog__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_DeleteCommentsDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_DeleteCommentsDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Dispatcher__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Dispatcher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_Dispatcher__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_DropDown__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_DropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_DropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_DynaTabs__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_DynaTabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_DynaTabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_EditableSelectBox__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_EditableSelectBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_EditableSelectBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_FileUpload__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_FileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_FileUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Form__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_FormPage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_FormPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_FormPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_FormRow__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_FormRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_FormRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_HelpDialog__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_HelpDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_HelpDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_HelperActionsMixins__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_HelperActionsMixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_HelperActionsMixins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_InputTable__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_InputTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_InputTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_InputTableCheckboxColumn__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_InputTableCheckboxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_InputTableCheckboxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_InputTableDataRow__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_InputTableDataRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_InputTableDataRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_InputTableDropDownColumn__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_InputTableDropDownColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_InputTableDropDownColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_InputTableHeadColumn__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_InputTableHeadColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_InputTableHeadColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_InputTableEditableSelectBoxColumn__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_InputTableEditableSelectBoxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_InputTableEditableSelectBoxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_InputTableHeadRow__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_InputTableHeadRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_InputTableHeadRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_InputTableLabelColumn__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_InputTableLabelColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_InputTableLabelColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_InputTableRadioButtonColumn__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_InputTableRadioButtonColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_InputTableRadioButtonColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_InputTableRemoveRowButtonColumn__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_InputTableRemoveRowButtonColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_InputTableRemoveRowButtonColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_InputTableSecondaryButtonColumn__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_InputTableSecondaryButtonColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_InputTableSecondaryButtonColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_InputTableShowHideCheckBoxColumn__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_InputTableShowHideCheckBoxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_InputTableShowHideCheckBoxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_InputTableSingleSelectBoxColumn__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_InputTableSingleSelectBoxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_InputTableSingleSelectBoxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_InputTableTextBoxColumn__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_InputTableTextBoxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_InputTableTextBoxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_LineChart__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_LineChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_LineChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_Label__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ListPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ListPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ListPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ListPane__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ListPane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_ListPane__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ModalDialog__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ModalDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ModalDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_MultiSelect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_MultiSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_MultiSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ListPageBuilder__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ListPageBuilder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ListPageBuilder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_MultiSelectPicker__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_MultiSelectPicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_MultiSelectPicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_Overlay__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_PageFooter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_PageFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_PageFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_PageBody__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_PageBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_PageBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_PageHeader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_PageHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_PageHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_PanelButton__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_PanelButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_PanelButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_Pagination__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_PrimaryButton__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_PrimaryButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_PrimaryButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_RadioButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_RadioButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_RadioButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_RadioButtonGroup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_RadioButtonGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_RadioButtonGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_RateTable__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_RateTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54_RateTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_RateTableHeader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_RateTableHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55_RateTableHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_RateTableRow__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_RateTableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_RateTableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_RemoveRowButton__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_RemoveRowButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_57_RemoveRowButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ResultsCounter__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ResultsCounter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58_ResultsCounter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_RichTextEditor__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_SampleControl__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_SampleControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60_SampleControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_SearchBox__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_SearchBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61_SearchBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ResultsPaginationHeader__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ResultsPaginationHeader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62_ResultsPaginationHeader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_SecondaryButton__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_SecondaryButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_63_SecondaryButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_SelectBox__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_SelectBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_SelectBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_SideBar__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_SideBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65_SideBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_SideBarButtonContainer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_SideBarButtonContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_66_SideBarButtonContainer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_SideBarDropDown__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_SideBarDropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_67_SideBarDropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_SideBarFilterContainer__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_SideBarFilterContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_68_SideBarFilterContainer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_SideBarFilterSubContainer__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_SideBarFilterSubContainer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_69_SideBarFilterSubContainer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_SideBarPrimaryButton__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_SideBarPrimaryButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_70_SideBarPrimaryButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_SideBarPrimaryButtonMenu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_SideBarPrimaryButtonMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_71_SideBarPrimaryButtonMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_SideBarSecondaryButton__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_SideBarSecondaryButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_72_SideBarSecondaryButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_SideBarSecondaryButtonMenu__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_SideBarSecondaryButtonMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_73_SideBarSecondaryButtonMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_SingleSelectBox__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74_SingleSelectBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_74_SingleSelectBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_Table__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_75_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76_TableBody__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_76_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77_TableCheckboxColumn__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77_TableCheckboxColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_77_TableCheckboxColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_TableContainerColumn__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78_TableContainerColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_78_TableContainerColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_TableDetailRow__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_TableDetailRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_79_TableDetailRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80_TableDetailRowColumns__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80_TableDetailRowColumns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_80_TableDetailRowColumns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81_TableDetailRows__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81_TableDetailRows___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_81_TableDetailRows__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82_TableEditableTextColumn__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82_TableEditableTextColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_82_TableEditableTextColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83_TableExpandableRow__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83_TableExpandableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_83_TableExpandableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84_TableExpandableRowContent__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84_TableExpandableRowContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_84_TableExpandableRowContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85_TableHead__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_85_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_TableHeadColumn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_TableHeadColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_86_TableHeadColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87_TableHeadRow__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87_TableHeadRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_87_TableHeadRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88_TableMasterRow__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88_TableMasterRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_88_TableMasterRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_TableNormalRow__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_TableNormalRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_89_TableNormalRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90_TableRow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_90_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91_TableRowColumns__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91_TableRowColumns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_91_TableRowColumns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92_TableStatusColumn__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92_TableStatusColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_92_TableStatusColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93_TableTextColumn__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93_TableTextColumn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_93_TableTextColumn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94_TagDisplay__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94_TagDisplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_94_TagDisplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95_Tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_95_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96_TertiaryMenu__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96_TertiaryMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_96_TertiaryMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97_TertiaryMenuButton__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97_TertiaryMenuButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_97_TertiaryMenuButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98_TertiaryMenuList__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98_TertiaryMenuList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_98_TertiaryMenuList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99_TextArea__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99_TextArea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_99_TextArea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100_Tooltip__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_100_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101_TextBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101_TextBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_101_TextBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102_UploadAssignmentsDialog__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102_UploadAssignmentsDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_102_UploadAssignmentsDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103_UploadDialog__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103_UploadDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_103_UploadDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104_UploadDialogStep__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104_UploadDialogStep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_104_UploadDialogStep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105_VersionControl__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105_VersionControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_105_VersionControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106_WorkflowStep__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106_WorkflowStep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_106_WorkflowStep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107_XScatterChart__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107_XScatterChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_107_XScatterChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108_introduction__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108_introduction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_108_introduction__);













































































































/* harmony default export */ __webpack_exports__["default"] = ({
  AbstractTableColumn: __WEBPACK_IMPORTED_MODULE_0_AbstractTableColumn___default.a,
  introduction: __WEBPACK_IMPORTED_MODULE_108_introduction___default.a,
  XScatterChart: __WEBPACK_IMPORTED_MODULE_107_XScatterChart___default.a
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./ActionButtons.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./ActionButtons.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".ActionButtons_show {\n    visibility: visible;\n    opacity: 1;\n    transition: 500ms 300ms;\n}\n.ActionButtons_hide {\n    visibility: hidden;\n    opacity: 0;\n    transition: 500ms;\n}", ""]);

// exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var AreaChart = __webpack_require__(99).AreaChart;
/**
 * XScatterChart component will display data in a chart fashion.This chart will have data 
 in X and Y axis.Component will form Scatter chart joining by a line, using intersecting point. 
*/


var XAreaChart = React.createClass({
  displayName: "XAreaChart",
  chartParentStyle: {
    position: "relative",
    fontFamily: 'Verdana',
    fontSize: 10
  },
  xAxisStyle: {
    position: 'absolute',
    left: 147,
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 12
  },
  yAxisStyle: {
    transform: 'rotate(270deg)',
    transformOrigin: '-10px top 0',
    display: 'block',
    bottom: 0,
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666'
  },
  disabledCellStyle: {
    backgroundColor: "#F9F9F9",
    border: "solid 1px #E3E3E3"
  },
  propTypes: {
    /**
     * data is an Object that contain the 
     * dataset for the chart
     */
    data: React.PropTypes.array.isRequired,

    /**
     * xAxisField is a String, provide field name which you want to keep in the x-axis
     */
    xAxisField: React.PropTypes.string.isRequired,

    /**
     * yAxisField is a String, provide field name which you want to keep in the y-axis
     */
    yAxisField: React.PropTypes.string.isRequired,

    /**
     * dimensions is an Object that provides margin, 
     * height and width for the chart
     */
    dimensions: React.PropTypes.object,

    /**
     * xLabel String will provide the label for the x axis
     */
    xLabel: React.PropTypes.string,

    /**
     * yLabel String will provide the label for the x axis
     */
    yLabel: React.PropTypes.string,

    /**
     * tooltipXLabel is a string, label for x-axis data in tooltip 
     */
    tooltipXLabel: React.PropTypes.string,

    /**
     * tooltipYLabel is a string, label for y-axis data in tooltip 
     */
    tooltipYLabel: React.PropTypes.string,

    /**
     * The minimum range for the X and Y axes. When the domain data goes beyond the minimum range, it will be extended.
     */
    minimumRange: React.PropTypes.number,

    /**
     * Disables the chart - does not show the chart. Instead a blank square is shown.
     */
    disabled: React.PropTypes.bool,

    /**
     * Message to display on the blank square if the chart is disabled.
     */
    disabledMessage: React.PropTypes.string
  },
  render: function render() {
    var _this = this;

    var dimensions, color;

    if (typeof this.props.dimensions === "undefined") {
      dimensions = {
        width: 400,
        height: 400,
        margins: {
          top: 20,
          right: 80,
          bottom: 20,
          left: 20
        }
      };
    } else {
      dimensions = this.props.dimensions;
    } // adjust the labels based on the chart dimensions
    // yAxis label


    this.yAxisStyle.bottom = dimensions.width / 2 - 80; // xAxis label

    this.xAxisStyle.left = dimensions.width / 2 - 30;
    this.xAxisStyle.top = dimensions.height;
    var self = this;
    /**
     * Returns the maximum range value for the x and y axes. Defaults to 200.
     * Computes max from the x axis domain range.
    */

    var getMaxRange = function getMaxRange(axisField) {
      var maxRange = 200; // default max range

      if (_this.props.minimumRange % 1 === 0 && _this.props.minimumRange > 0) {
        maxRange = _this.props.minimumRange;
      }

      var dataArray = getData();
      var data = dataArray[0]; //first series

      if (data.length > 0) {
        // for the axis field get all the points, sort and then compute the maxRange
        var axisFields = _.pluck(data, axisField);

        axisFields.sort(function (a, b) {
          return a - b;
        });
        var lastValue = axisFields[axisFields.length - 1];

        if (lastValue > maxRange) {
          maxRange = lastValue;
        }
      } // round the max range to the nearest 100


      var nextQuotient = Math.ceil(maxRange / 100);
      maxRange = nextQuotient * 100;
      return maxRange;
    };

    var getData = function getData() {
      /**
       * Soring data, order by X-axis values in ascending order
       */
      var dataArray = [];
      var data = _this.props.data || [];
      data.sort(function (a, b) {
        return a[self.props.xAxisField] - b[self.props.xAxisField];
      });
      dataArray.push(data); // the chart needs the x Axis field to be 'x' key and y Axis field to be 'y' key

      var chartDataArray = [],
          chartData = [];
      data.forEach(function (item, index, arr) {
        var newItem = {
          x: item[_this.props.xAxisField],
          y: item[_this.props.yAxisField]
        };
        chartData.push(newItem);
      });
      chartDataArray.push(chartData);
      return chartDataArray;
    };

    var getChart = function getChart() {
      if (_this.props.disabled == true) {
        var tableWidth = dimensions.width - 20;
        var tableHeight = dimensions.width - 20;
        return React.createElement("div", {
          style: {
            position: "relative"
          }
        }, React.createElement("table", {
          style: {
            width: tableWidth,
            height: tableHeight,
            marginLeft: 28
          }
        }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
          style: _this.disabledCellStyle
        }), React.createElement("td", {
          style: _this.disabledCellStyle
        })), React.createElement("tr", null, React.createElement("td", {
          style: _this.disabledCellStyle
        }), React.createElement("td", {
          style: _this.disabledCellStyle
        })))), React.createElement("div", {
          style: {
            position: "absolute",
            width: tableWidth,
            textAlign: "center",
            left: 28,
            top: tableHeight / 2 - 20,
            fontSize: 12
          }
        }, _this.props.disabledMessage));
      } else {
        return React.createElement(AreaChart, {
          data: getData(),
          width: dimensions.width,
          height: dimensions.height,
          axes: true,
          margin: dimensions.margin,
          grid: true,
          verticalGrid: true,
          dataPoints: true,
          xTicks: 5,
          yTicks: 5,
          areaColors: ["#64ADC2"],
          noAreaGradient: false,
          xDomainRange: [0, getMaxRange('x')],
          yDomainRange: [0, getMaxRange('y')]
        });
      }
    };

    return React.createElement("div", {
      style: this.chartParentStyle
    }, React.createElement("label", {
      style: this.yAxisStyle
    }, this.props.yLabel), getChart(), React.createElement("label", {
      style: this.xAxisStyle
    }, this.props.xLabel));
  }
});
module.exports = XAreaChart;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-easy-chart");

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var AuditTableStyles = function () {
  var _auditTable = {
    titleStyle: {
      color: '#333333',
      fontSize: '12px',
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      position: 'absolute',
      left: '35px'
    },
    tableStyle: {
      width: '100%',
      border: '1px solid #64ADC2',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    },
    auditHeaderRowStyle: {
      height: '36px',
      backgroundColor: '#F0F5F8',
      borderBottom: '1px solid #64ADC2',
      textAlign: "center"
    },
    auditHeaderRowCellStyle: {
      minWidth: '180px',
      borderRight: '1px dashed #64ADC2',
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      fontSize: '11px',
      verticalAlign: 'middle'
    },
    auditRowCellStyle: {
      borderRight: '1px dashed #64ADC2',
      padding: '0px 12px 0px 12px',
      fontFamily: 'Verdana',
      fontSize: '12px',
      verticalAlign: 'middle',
      wordWrap: 'break-word'
    },
    auditOddRowStyle: {
      height: '36px'
    },
    auditEvenRowStyle: {
      height: '36px',
      backgroundColor: '#FAFAFA'
    }
  };
  return _auditTable;
}();

var AuditTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AuditTable, _React$Component);

  function AuditTable(props) {
    var _this;

    _classCallCheck(this, AuditTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuditTable).call(this, props));
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
    return _this;
  } //click handler when the download button is clicked


  _createClass(AuditTable, [{
    key: "clickHandler",
    value: function clickHandler(event) {
      if (typeof this.props.downloadClickHandler == "function") {
        this.props.downloadClickHandler();
      }

      event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = this.props.id || _.uniqueId("Audittable_");

      var data = this.props.data || [];
      var maxRows = this.props.maxrows || 20;
      data = data.slice(0, maxRows);
      var clonedData = [];

      if (data.length > 0) {
        data.forEach(function (dataItem, index, arr) {
          var clonedItem = _.clone(dataItem);

          clonedData.push(clonedItem);
        });
      } // push a fake record to the data if it is empty. This will allow us to render the header
      // if there is no data, we will ignore this entry for data rows.


      if (clonedData.length == 0) {
        clonedData.push("headerOnly");
      }

      var getRows = function getRows() {
        return clonedData.map(function (item, index, arr) {
          return React.Children.map(_this2.props.children, function (rowTemplate) {
            if (rowTemplate) {
              return React.cloneElement(rowTemplate, {
                rowData: item,
                key: index,
                dataIndex: index,
                itemId: item.id,
                tableId: id
              });
            }
          });
        });
      };

      return React.createElement("div", null, React.createElement(AuditTable.MainHeading, {
        clickHandler: this.clickHandler,
        heading: this.props.heading,
        downloadLabel: this.props.downloadLabel
      }), React.createElement("table", {
        id: id,
        style: AuditTableStyles.tableStyle,
        cellSpacing: "0"
      }, getRows()));
    }
  }]);

  return AuditTable;
}(React.Component);

AuditTable.propTypes = {
  /**
   * Assign a React Component to this prop if you want to have control over the rendering of the cells in the column.
   * The React component is passed in the textPropertyName and rowData as props.
   * Use these props to change the styling of the cells in the column.
   */
  customCellRenderer: React.PropTypes.object,

  /**
   * Shown at the top left corner
   */
  heading: React.PropTypes.string,

  /**
   * Gets invoked when the download button is clicked
   */
  downloadClickHandler: React.PropTypes.func,

  /**
   * Data for rendering input to the audit table
   */
  data: React.PropTypes.array,

  /**
   * maximum no of rows that should be displayed.
   */
  maxrows: React.PropTypes.number,

  /**
   * Shown at the top right corner
   */
  downloadLabel: React.PropTypes.string
};

AuditTable.MainHeading =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MainHeading, _React$Component2);

  function MainHeading() {
    _classCallCheck(this, MainHeading);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainHeading).apply(this, arguments));
  }

  _createClass(MainHeading, [{
    key: "render",
    value: function render() {
      var stickyStyle;
      stickyStyle = {
        position: 'absolute',
        right: 35
      };

      if (this.props.heading && this.props.heading.length > 0 || this.props.downloadLabel && this.props.downloadLabel.length > 0) {
        return React.createElement("div", {
          style: {
            paddingBottom: 30
          }
        }, React.createElement("span", {
          style: AuditTableStyles.titleStyle
        }, this.props.heading), React.createElement("span", {
          style: stickyStyle
        }, React.createElement(SecondaryButton, {
          name: 'downloadButton',
          id: 'id',
          icon: 'fa fa-download',
          text: this.props.downloadLabel,
          type: "actionButton",
          clickHandler: this.props.clickHandler
        })));
      } else {
        return null;
      }
    }
  }]);

  return MainHeading;
}(React.Component);

AuditTable.HeadRow =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Header, _React$Component3);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var getHeadColumns = function getHeadColumns() {
        return React.Children.map(_this3.props.children, function (headColumnTemplate) {
          if (headColumnTemplate) {
            return React.cloneElement(headColumnTemplate, {
              tableId: _this3.props.tableId
            });
          }
        });
      };

      var getHeadRow = function getHeadRow() {
        if (_this3.props.dataIndex == 0) {
          return React.createElement("thead", null, React.createElement("tr", {
            style: AuditTableStyles.auditHeaderRowStyle
          }, getHeadColumns()));
        } else {
          return null;
        }
      };

      return getHeadRow();
    }
  }]);

  return Header;
}(React.Component);

AuditTable.HeaderColumn =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(HeaderColumn, _React$Component4);

  function HeaderColumn() {
    _classCallCheck(this, HeaderColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderColumn).apply(this, arguments));
  }

  _createClass(HeaderColumn, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var getColumnHeader = function getColumnHeader() {
        return React.createElement("th", {
          style: AuditTableStyles.auditHeaderRowCellStyle
        }, React.createElement("span", null, _this4.props.columnName));
      };

      return getColumnHeader();
    }
  }]);

  return HeaderColumn;
}(React.Component); // AuditTable.TableBody = class TableBody extends React.Component{
//     render () {
//         if (this.props.rowData && this.props.rowData != "headerOnly") {
//             var id = ((this.props.dataIndex != null && this.props.dataIndex != undefined) ? "auditTableRow" + this.props.dataIndex : _.uniqueId("auditTableRowId_"));
//             return (
//                 <tbody>
//                     <AuditTable.Row id={id} rowData={this.props.rowData}>
//                         {this.props.children}
//                     </AuditTable.Row>
//                 </tbody>
//             );
//         } else {
//             return null;
//         }
//     }
// };


AuditTable.Row =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Row, _React$Component5);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var id = this.props.id || _.uniqueId("tableRow_");

      var handleChildren = function handleChildren() {
        return React.Children.map(_this5.props.children, function (child) {
          if (child) {
            return React.cloneElement(child, {
              rowData: _this5.props.rowData,
              dataIndex: _this5.props.dataIndex
            });
          }
        });
      };

      var oddEvenStyle = this.props.dataIndex % 2 === 0 ? AuditTableStyles.auditOddRowStyle : AuditTableStyles.auditEvenRowStyle;

      var getRow = function getRow() {
        return React.createElement("tr", {
          id: id,
          style: oddEvenStyle
        }, handleChildren());
      };

      return getRow();
    }
  }]);

  return Row;
}(React.Component);

AuditTable.Cell =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Cell, _React$Component6);

  function Cell(props) {
    var _this6;

    _classCallCheck(this, Cell);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Cell).call(this, props));
    _this6.getContent = _this6.getContent.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var text = "";
      var propName = this.props.textPropertyName;

      if (propName && typeof propName === 'string' && this.props.rowData) {
        text = this.props.rowData[propName];
      }

      return React.createElement("td", {
        title: this.props.title,
        style: AuditTableStyles.auditRowCellStyle
      }, this.getContent(text));
    }
    /**
     * Function that returns the custom renderer or the plain text.
     * @param {string} text The text for the cell. 
     */

  }, {
    key: "getContent",
    value: function getContent(text) {
      if (this.props.customCellRenderer) {
        return React.cloneElement(this.props.customCellRenderer, {
          textPropertyName: this.props.textPropertyName,
          rowData: this.props.rowData
        });
      } else {
        return text;
      }
    }
  }]);

  return Cell;
}(React.Component);

module.exports = AuditTable;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".textCursor {\n    cursor: auto;\n}\n\n.textCursorDisabled {\n    cursor: default !important;\n}\n\ninput[id*=\"textbox_\"]::-ms-clear {\n    display: none;\n}", ""]);

// exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./DateControl.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./DateControl.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".react-datepicker__year-select {\n  width: auto;\n  color: #333333;\n  border: none;\n  font-family: Verdana;\n  font-size: 12px;\n  /*font-weight: bold;*/\n}\n.react-datepicker__month-select {\n  width: auto;\n  color: #333333;\n  border: '1px solid grey';\n  font-family: Verdana;\n  font-size: 12px;\n  /*font-weight: bold;*/\n}\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle, .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle, .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before, .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle::before, .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle, .react-datepicker__tether-element-attached-top .react-datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #ffffff;\n}\n.react-datepicker__tether-element-attached-top .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker__tether-element-attached-bottom .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.react-datepicker__tether-element-attached-bottom .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow, .react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.react-datepicker__tether-element-attached-bottom .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker {\n  font-family: Verdana, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  background-color: #fff;\n  color: #333333;\n  border: 1px solid #cccccc;\n  border-radius: 6px;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker__tether-element-attached-bottom.react-datepicker__tether-element {\n  margin-top: -20px;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #ffffff;\n  /*border-bottom: 1px solid #aeaeae;*/\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-top: 12px;\n  position: relative;\n}\n\n.react-datepicker__header__dropdown--select {\n  margin-top: -16px;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n.react-datepicker__current-month--hasYearDropdown {\n  margin-bottom: 16px;\n  visibility: hidden;\n  height: 0px;\n}\n\n.react-datepicker__navigation {\n  line-height: 1.7rem;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 12px;\n  width: 0;\n  border: 0.45rem solid transparent;\n}\n.react-datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #999999;\n}\n.react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n.react-datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #999999;\n}\n.react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n.react-datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n.react-datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n\n.react-datepicker__day-names {\n  margin-top: 12px;\n}\n\n.react-datepicker__day-name {\n  color: #999999;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n  font-size: 12px;\n}\n.react-datepicker__day {\n  color: #333333;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n  font-size: 12px;\n}\n\n.react-datepicker__day {\n  cursor: pointer;\n}\n.react-datepicker__day:hover {\n  border-radius: 4px;\n  background-color: #e7e7e7;\n  color: #333333;\n}\n.react-datepicker__day--today {\n  font-weight: bold;\n  color: #346F8F;\n}\n.react-datepicker__day--highlighted {\n  border-radius: 4px;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n.react-datepicker__day--highlighted:hover {\n  background-color: #32be3f;\n}\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n  border-radius: 4px;\n  background-color: #346F8F;\n  color: #fff;\n}\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n  background-color: #f0f0f0;\n  color: #000;\n}\n.react-datepicker__day--disabled {\n  cursor: default;\n  color: #999999;\n}\n.react-datepicker__day--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  /*display: inline-block;*/\n  float: left;\n}\n\n.react-datepicker__year-read-view {\n  width: 50%;\n  left: 25%;\n  position: absolute;\n  bottom: 25px;\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n}\n.react-datepicker__year-read-view:hover {\n  cursor: pointer;\n}\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-read-view--down-arrow {\n  border-top-color: #ccc;\n  margin-bottom: 3px;\n  left: 5px;\n  top: 9px;\n  position: relative;\n  border-width: 0.45rem;\n}\n.react-datepicker__year-read-view--selected-year {\n  right: 0.45rem;\n  position: relative;\n}\n\n.react-datepicker__year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n.react-datepicker__year-dropdown:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:hover {\n  background-color: #ccc;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-option--selected {\n  position: absolute;\n  left: 30px;\n}\n\n.react-datepicker__close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  height: 0;\n  outline: 0;\n  padding: 0;\n  position: absolute;\n  top: 14px;\n  right: 20px;\n}\n.react-datepicker__close-icon::after {\n  background-color: #cccccc;\n  border-radius: 50%;\n  bottom: 0;\n  box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 8px;\n  font-weight: bold;\n  height: 10px;\n  width: 10px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 0px 1px 0px 1px;\n  position: absolute;\n  right: 15px;\n  text-align: center;\n  top: 4px;\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n}\n\n.react-datepicker__tether-element {\n  z-index: 2147483647;\n}\n", ""]);

// exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var _ = __webpack_require__(30);

var SecondaryButton = __webpack_require__(2);

var TextBox = __webpack_require__(5);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableTextColumn = __webpack_require__(13);

var DateControl = __webpack_require__(44);

var Label = __webpack_require__(22);

var VersionsWrapper = __webpack_require__(111);

var Dispatcher = __webpack_require__(17);

var ActionTypes = __webpack_require__(11).ActionTypes;

var moment = __webpack_require__(29);

var ConfirmationDialog = __webpack_require__(24);

var FormStyles = __webpack_require__(4).form;
/**
 * Helper function that creates the map of translated labels.
 * Default values are used if a translated value is not provided by the user.
 */


function createTranslatedLabelsMap(userTranslatedLabelsMap) {
  var keyMap = {
    addVersionButtonText: "[Add Version]",
    addHideVersionDetailsButtonText: "[Hide Version Details]",
    addShowVersionDetailsButtonText: "[Show Version Details]",
    masterVersionTitleText: "[Master Version]",
    effectiveStartLabelText: "[Effective Start]",
    effectiveEndLabelText: "[Effective End]",
    versionNotesLabelText: "[Version Notes]",
    deleteButtonText: "[Delete]",
    sotLabelText: "[Start of Time]",
    eotLabelText: "[End of Time]",
    versionValidationMessage: "[Fix the version validation errors]",
    versionText: "[Version]"
  };

  if (userTranslatedLabelsMap) {
    keyMap.addVersionButtonText = userTranslatedLabelsMap.addVersionButtonText || "[Add Version]";
    keyMap.addHideVersionDetailsButtonText = userTranslatedLabelsMap.addHideVersionDetailsButtonText || "[Hide Version Details]";
    keyMap.addShowVersionDetailsButtonText = userTranslatedLabelsMap.addShowVersionDetailsButtonText || "[Show Version Details]";
    keyMap.masterVersionTitleText = userTranslatedLabelsMap.masterVersionTitleText || "[Master Version]";
    keyMap.effectiveStartLabelText = userTranslatedLabelsMap.effectiveStartLabelText || "[Effective Start]";
    keyMap.effectiveEndLabelText = userTranslatedLabelsMap.effectiveEndLabelText || "[Effective End]";
    keyMap.versionNotesLabelText = userTranslatedLabelsMap.versionNotesLabelText || "[Version Notes]";
    keyMap.deleteButtonText = userTranslatedLabelsMap.deleteButtonText || "[Delete]";
    keyMap.sotLabelText = userTranslatedLabelsMap.sotLabelText || "[Start of Time]";
    keyMap.eotLabelText = userTranslatedLabelsMap.eotLabelText || "[End of Time]";
    keyMap.versionValidationMessage = userTranslatedLabelsMap.versionValidationMessage || "[Fix the version validation errors]";
    keyMap.versionText = userTranslatedLabelsMap.versionText || "[Version]";
  }

  return keyMap;
}

;
var sotDate = "1970-01-01";
var eotDate = "2035-12-31";
var DATE_FORMAT = "YYYY-MM-DD";
/**
 * Version control component based on date. Uses a date picker to pick the date.
 * The user can pick a start date using a date picker.
 */

var DateVersionControl = React.createClass({
  displayName: "DateVersionControl",
  // styles
  // styles
  // custom properties
  tableId: "dateVersionTable",
  dispatchToken: null,
  // custom properties
  // custom methods
  // custom methods
  // lifecycle event handlers
  mixins: [StyleMixins],
  propTypes: {
    /**
     * The id for the component.
     */
    id: React.PropTypes.string,

    /**
     * Each key represents the translated label for the component.
     */
    translationLabelMap: React.PropTypes.shape({
      addVersionButtonText: React.PropTypes.string,
      addHideVersionDetailsButtonText: React.PropTypes.string,
      addShowVersionDetailsButtonText: React.PropTypes.string,
      masterVersionTitleText: React.PropTypes.string,
      effectiveStartLabelText: React.PropTypes.string,
      effectiveEndLabelText: React.PropTypes.string,
      versionNotesLabelText: React.PropTypes.string,
      deleteButtonText: React.PropTypes.string,
      sotLabelText: React.PropTypes.string,
      eotLabelText: React.PropTypes.string,
      versionValidationMessage: React.PropTypes.string,
      versionText: React.PropTypes.string
    }).isRequired,

    /**
     * The version data for the pay curve that is bound to the version table.
     */
    versionData: React.PropTypes.array,

    /**
     * The map for the version object keys. The user of the component can provide the
     * names of the properties of the version object, so that they can be custom.
     */
    versionKeyMap: React.PropTypes.shape({
      versionIdKey: React.PropTypes.string,
      startDateKey: React.PropTypes.string,
      endDateKey: React.PropTypes.string,
      descriptionKey: React.PropTypes.string
    }),

    /**
     * If the initial version needs to be set when the component is loaded, pass the version id in as a prop.
     */
    initialSelectedVersionId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Function called whenever a new version is added, or an existing version is deleted or an existing
     * version is changed. The function should be passed in a as prop value. The function is passed in
     * the list of versions, the selected version, the selected version index and the action on the versions
     * like add, edit or delete.
     */
    versionsChangedEventHandler: React.PropTypes.func,

    /**
     * Indicates that the control should be in read only mode. The Add and Delete version buttons will be disabled.
     */
    readOnly: React.PropTypes.bool,

    /**
     * The format of the date that will be displayed.
     */
    dateFormat: React.PropTypes.string,

    /**
     * Event that is triggered when the selected version changes. When a function handler is assigned to this prop
     * it is called when the event is triggered. The function is passed in the selected version, the selected
     * version index and the action like add, edit and delete.
     */
    selectedVersionChangedEventHandler: React.PropTypes.func,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     */
    validator: React.PropTypes.func,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Function called before a new version is added. Gives the user the ability to perform pre-add-version validation.
     * The function should return a boolean value. True indicates that a new version can be added, false indicates
     * a new version will not be added.
     */
    preAddVersionEventHandler: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      dateFormat: "YYYY-MM-DD"
    };
  },
  getInitialState: function getInitialState() {
    return {
      versionDetailsVisible: false,
      versionData: null,
      selectedVersion: null,
      selectedVersionIndex: null,
      isFirstVersion: false,
      mode: null,
      newVersionSaved: null,
      deleteVersionConfirmationDialogIsOpen: false,
      showVersionValidationMessage: false
    };
  },

  /**
   * The logic in this lifecycle event handler is similar to the logic in the componentWillReceiveProps
   * lifecycle event handler because the component could have props declared in which case
   * this initialization would be used but if the props are set dynamically then the componentWillReceiveProps
   * initialization is used.
   */
  componentWillMount: function componentWillMount() {
    var _this = this;

    var isFirstVersion = this.state.isFirstVersion;

    if (typeof this.props.isFirstVersion == "boolean") {
      isFirstVersion = this.props.isFirstVersion;
    }

    var versionsWrapper = VersionsWrapper();
    versionsWrapper.setKeyMap(this.props.versionObjectKeyMap); // sort the version data in descending order before sending it to the wrapper

    if (Array.isArray(this.props.versionData) == true) {
      var start = 0,
          end = this.props.versionData.length - 1;

      while (start < end) {
        var temp = this.props.versionData[start];
        this.props.versionData[start] = this.props.versionData[end];
        this.props.versionData[end] = temp;
        start++;
        end--;
      }
    }

    versionsWrapper.create(this.props.versionData, "desc", this.props.selectedVersionChangedEventHandler, this.props.initialSelectedVersionId);
    this.dispatchToken = Dispatcher.register(function (action) {
      switch (action.type) {
        case ActionTypes.SORT_DATA_CHANGED:
          if (action.tableId == _this.tableId) {
            versionsWrapper.sort(action.newSortOrder);

            _this.setState({
              versionsWrapper: versionsWrapper
            });
          }

          break;
      }
    });
    this.setState({
      isFirstVersion: isFirstVersion,
      versionsWrapper: versionsWrapper,
      newVersionSaved: true // this is set to false only when the user clicks the add version button.

    });
  },

  /**
   * The logic for versions is in this lifecycle event because
   * the versionData props are set after the componentWillMount
   * lifecycle event handler is executed.
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    //
    var isFirstVersion = this.state.isFirstVersion;

    if (typeof newProps.isFirstVersion == "boolean") {
      isFirstVersion = newProps.isFirstVersion;
    }

    var versionsWrapper = this.state.versionsWrapper;
    versionsWrapper.setKeyMap(newProps.versionObjectKeyMap);
    versionsWrapper.create(newProps.versionData, "asc", newProps.selectedVersionChangedEventHandler, newProps.initialSelectedVersionId);
    this.setState({
      isFirstVersion: isFirstVersion,
      versionsWrapper: versionsWrapper
    });
    /*
    if (typeof newProps.isFirstVersion == "boolean" && this.props.isFirstVersion != newProps.isFirstVersion) {
        this.setState({
            isFirstVersion: newProps.isFirstVersion
        });
    }
    if (this.props.versionData == null) {
        var versionsWrapper = this.state.versionsWrapper;
        versionsWrapper.setKeyMap(newProps.versionObjectKeyMap);
        // sort the version data in descending order before sending it to the wrapper
        if (Array.isArray(newProps.versionData) == true) {
            var start = 0, end = newProps.versionData.length - 1;
            while (start < end) {
                var temp = newProps.versionData[start];
                newProps.versionData[start] = newProps.versionData[end];
                newProps.versionData[end] = temp;
                start++;
                end--;
            }
        }
        versionsWrapper.create(newProps.versionData, "desc", newProps.selectedVersionChangedEventHandler, newProps.initialSelectedVersionId);
        this.setState({
            versionsWrapper: versionsWrapper
        });
    }
    this.setState({
        newVersionSaved: true   // reset when a new rule is loaded
    });
    */
  },
  render: function render() {
    var _this2 = this;

    var styles = this.IncentStyles.versionControlStyles;

    var id = this.props.id || _.uniqueId("versionControl_");

    var translatedLabelsMap = createTranslatedLabelsMap(this.props.translationLabelMap);
    var versionDetailsVisible = this.state.versionDetailsVisible;
    /**
     * Function called when the "Show/Hide Version Details" button is clicked.
     * It updates the versionDetailsVisible state to show or hide the version details.
     */

    var toggleVersionDetails = function toggleVersionDetails(event) {
      _this2.setState({
        versionDetailsVisible: !versionDetailsVisible
      });
    };
    /**
     * Function called when the add version button is clicked.
     * - Call the PreAddVersionEventHandler to check if the version should be added.
     * - Disable the Add Version button.
     * - Enable delete button.
     */


    var addVersion = function addVersion(event) {
      var doAddVersion = function doAddVersion(result) {
        var canAddVersion = true;

        if (typeof result == "boolean") {
          canAddVersion = result;
        }

        if (canAddVersion == false) {
          _this2.setState({
            showVersionValidationMessage: true,
            versionDetailsVisible: true
          });

          event.stopPropagation();
          return;
        } else {
          _this2.setState({
            showVersionValidationMessage: false,
            versionDetailsVisible: true
          });
        }

        var versionsWrapper = _this2.state.versionsWrapper;
        versionsWrapper.addVersion();

        _this2.setState({
          isFirstVersion: false,
          versionsWrapper: versionsWrapper,
          newVersionSaved: false,
          mode: "add"
        });

        event.stopPropagation();
      };

      if (typeof _this2.props.preAddVersionEventHandler == "function") {
        _this2.props.preAddVersionEventHandler(doAddVersion);
      }

      ;
    };
    /**
     * Function handler called when the effective start date control value is changed.
     * - For the selected version the start date is the selected date.
     * - For the prior version the end date is the day before the selected date.
     */


    var startDateSelectionChanged = function startDateSelectionChanged(newValue) {
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().setStartDate(newValue);

      _this2.setState({
        versionsWrapper: versionsWrapper
      });
    };
    /**
     * Function called when the cancel button on the delete version dialog is clicked.
     */


    var cancelDeleteVersion = function cancelDeleteVersion() {
      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: false // hide the dialog

      });
    };
    /**
     * Function called when the delete version button is clicked.
     */


    var deleteVersionClickHandler = function deleteVersionClickHandler(event) {
      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: true
      });
    };
    /**
     * Returns the delete version confirmation dialog message.
     */


    var getDeleteMessage = function getDeleteMessage() {
      return _this2.props.translationLabelMap.versionDeleteConfirmationMessage;
    };
    /**
     * Function called when the delete version button is clicked.
     */


    var deleteVersion = function deleteVersion(event) {
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().deleteVersion();

      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: false,
        versionsWrapper: versionsWrapper,
        mode: "delete"
      });
    };
    /**
     * Function called when the version table row is clicked, this is the edit version action. Logic below:
     * - Perform a check to make sure current version does not have validation errors.
     * - Cannot edit the first version. The start date should not show the date picker, it should be a label.
     * - End date for any version can never be edited, it should always be a label.
     * - The following two steps are executed in the start date control change handler.
     *      - Edited version takes the selected date as the start date.
     *      - Previous version takes the day before the selected date as the end date.
     */


    var editVersion = function editVersion(rowData, rowIndex, event) {
      var doEditVersion = function doEditVersion(result) {
        var canChangeVersion = true;

        if (typeof result == "boolean") {
          canChangeVersion = result;
        }

        if (canChangeVersion == false) {
          _this2.setState({
            showVersionValidationMessage: true
          });

          return;
        } else {
          _this2.setState({
            showVersionValidationMessage: false
          });
        }

        var versionsWrapper = _this2.state.versionsWrapper;
        var selectedVersion = versionsWrapper.getSelectedVersion();
        var versionsKeyMap = versionsWrapper.getKeyMap(); // if the selected row is clicked ignore the event

        if (rowData[versionsKeyMap.versionIdKey] == selectedVersion[versionsKeyMap.versionIdKey]) {
          event.stopPropagation();
          return;
        } // set selected version


        versionsWrapper.setSelectedVersion(rowData, "edit");

        _this2.setState({
          versionsWrapper: versionsWrapper,
          mode: "edit"
        });
      };

      if (typeof _this2.props.preAddVersionEventHandler == "function") {
        _this2.props.preAddVersionEventHandler(doEditVersion, rowIndex);
      }
    };
    /**
     * Function that determines if the add version button is enabled or not.
     */


    var isAddVersionButtonEnabled = function isAddVersionButtonEnabled() {
      if (_this2.props.readOnly == true) {
        return false;
      } // if there is only one available date in the last version then we cannot create a new version,
      // disable the button


      var versionsWrapper = _this2.state.versionsWrapper;
      var lastVersion = versionsWrapper.getLastVersion();
      var dateRange = versionsWrapper.getDateRange(lastVersion);
      var minDateMoment = moment(dateRange.minDate, DATE_FORMAT);
      var maxDateMoment = moment(dateRange.maxDate, DATE_FORMAT);
      var rangeDiff = maxDateMoment.diff(minDateMoment, "days");

      if (rangeDiff < 2) {
        return false;
      } // if we are creating the first version of a new pay curve, then we cannot add a new version
      // until we save the first version.


      if (_this2.state.isFirstVersion == true) {
        return false;
      } // User created a new version by clicking the add version button but has not saved it yet.


      if (_this2.state.newVersionSaved == false) {
        return false;
      }

      return true;
    };
    /**
     * Function that determines if the delete version button is enabled or not.
     */


    var isDeleteVersionButtonEnabled = function isDeleteVersionButtonEnabled() {
      if (_this2.props.readOnly == true) {
        return false;
      } // if there is only one version we cannot delete


      if (_this2.state.isFirstVersion == true || _this2.state.versionData && _this2.state.versionData.length == 1) {
        return false;
      }

      var versionsWrapper = _this2.state.versionsWrapper;
      var versionCount = versionsWrapper.getCount();

      if (_this2.state.isFirstVersion == true || versionCount == 1) {
        return false;
      } // if the selected version is the first version then it cannot be deleted


      if (versionsWrapper.selectedVersion().isFirstVersion() == true) {
        return false;
      }

      return true;
    };
    /**
     * Returns the version start date to display.
     * @param {object} version The version object.
     */


    var getVersionStartDate = function getVersionStartDate(version) {
      var startDate = null;

      if (version) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var startDate = version[versionsKeyMap.startDateKey];

        if (startDate == sotDate) {
          startDate = translatedLabelsMap.sotLabelText;
        } else {
          var startDateMoment = moment(startDate, DATE_FORMAT);
          startDate = startDateMoment.format(_this2.props.dateFormat);
        }
      }

      return startDate;
    };
    /**
     * Returns the version end date to display.
     * @param {object} version The version object.
     */


    var getVersionEndDate = function getVersionEndDate(version) {
      var endDate = null;

      if (version) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var endDate = version[versionsKeyMap.endDateKey];

        if (endDate == eotDate) {
          endDate = translatedLabelsMap.eotLabelText;
        } else {
          var endDateMoment = moment(endDate, DATE_FORMAT);
          endDate = endDateMoment.format(_this2.props.dateFormat);
        }
      }

      return endDate;
    };
    /**
     * Returns the version Reason Code Header to display.
     */


    var renderReasonCodes = function renderReasonCodes() {
      if (_this2.props.translationLabelMap.versionReasonCodesLabelText) {
        return React.createElement(TableHeadColumn, {
          width: "30%",
          columnName: _this2.props.translationLabelMap.versionReasonCodesLabelText
        });
      } else {
        return null;
      }
    };
    /**
     * Returns the version Reason Code Value to display.
     */


    var renderReasonCodesText = function renderReasonCodesText() {
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();

      if (versionsKeyMap.reasonCodeKey) {
        return React.createElement(TableTextColumn, {
          textPropertyName: versionsKeyMap.reasonCodeKey
        });
      } else {
        return null;
      }
    };

    var renderDefaultColumns = function renderDefaultColumns() {
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();

      if (versionsKeyMap.reasonCodeKey) {
        return React.createElement(TableHeadRow, null, React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveStartLabelText,
          sortPropertyName: versionsKeyMap.startDateKey,
          defaultSort: true,
          defaultSortOrder: "DESC"
        }), React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveEndLabelText
        }), React.createElement(TableHeadColumn, {
          width: "30%",
          columnName: _this2.props.translationLabelMap.versionNotesLabelText
        }), renderReasonCodes());
      } else {
        return React.createElement(TableHeadRow, null, React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveStartLabelText,
          sortPropertyName: versionsKeyMap.startDateKey,
          defaultSort: true,
          defaultSortOrder: "DESC"
        }), React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveEndLabelText
        }), React.createElement(TableHeadColumn, {
          width: "60%",
          columnName: _this2.props.translationLabelMap.versionNotesLabelText
        }));
      }
    };
    /**
     * Returns the version table if the show version details button is clicked, else hides it.
     * The outer div is required to give padding under the versionTableContainer because adding
     * margin to the versionTableContainer does not work since it is removed and added into the
     * DOM dynamically.
     */


    var toggleVersionTableContainer = function toggleVersionTableContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var selectedRowIndex = versionsWrapper.selectedVersion().getIndex();
        return React.createElement("div", {
          style: {
            paddingBottom: 20
          }
        }, React.createElement("div", {
          id: "versionTableContainer",
          style: styles.versionTableContainerStyle
        }, React.createElement(Table, {
          id: _this2.tableId,
          data: versionsWrapper.getVersions(),
          rowClickHandler: editVersion,
          selectedRowIndex: selectedRowIndex
        }, renderDefaultColumns(), React.createElement(TableNormalRow, null, React.createElement(TableTextColumn, {
          textPropertyName: getVersionStartDate
        }), React.createElement(TableTextColumn, {
          textPropertyName: getVersionEndDate
        }), React.createElement(TableTextColumn, {
          textPropertyName: versionsKeyMap.descriptionKey
        }), renderReasonCodesText()))));
      } else {
        return null;
      }
    };

    var versionDetailsToggleContainer = function versionDetailsToggleContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionDetailsToggleContainer",
          style: styles.versionDetailsToggleContainerStyle,
          onClick: toggleVersionDetails
        }, React.createElement("span", {
          style: styles.versionDetailsToggleLabelStyle
        }, _this2.props.translationLabelMap.addHideVersionDetailsButtonText), React.createElement("i", {
          className: "fa fa-chevron-up",
          style: styles.versionDetailsToggleIconStyle
        }));
      } else {
        return React.createElement("div", {
          id: "versionDetailsToggleContainer",
          style: styles.versionDetailsToggleContainerStyle,
          onClick: toggleVersionDetails
        }, React.createElement("span", {
          style: styles.versionDetailsToggleLabelStyle
        }, _this2.props.translationLabelMap.addShowVersionDetailsButtonText), React.createElement("i", {
          className: "fa fa-chevron-down",
          style: styles.versionDetailsToggleIconStyle
        }));
      }
    };
    /**
     * Function that returns the Date picker or a label if the start date is SOT.
     */


    var getStartDateControl = function getStartDateControl() {
      var versionsWrapper = _this2.state.versionsWrapper; // if version is first version then show label.

      if (versionsWrapper.selectedVersion().isFirstVersion() == true) {
        return React.createElement(Label, {
          id: "startDateLabel",
          bold: false,
          text: _this2.props.translationLabelMap.sotLabelText
        });
      } else {
        var dateRange = versionsWrapper.selectedVersion().getDateRange();
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var selectedVersion = versionsWrapper.getSelectedVersion();
        var selectedVersionStartDate = selectedVersion[versionsKeyMap.startDateKey];
        return React.createElement(DateControl, {
          id: "startDateControl",
          hideClearButton: true,
          minDate: dateRange.minDate,
          maxDate: dateRange.maxDate,
          selectedDate: selectedVersionStartDate,
          disabled: _this2.props.readOnly,
          dateChangedHandler: startDateSelectionChanged,
          dateFormat: _this2.props.dateFormat
        });
      }
    };
    /**
     * Returns the component that should be displayed for the end date for a version.
     */


    var getEndDateControl = function getEndDateControl() {
      var versionsWrapper = _this2.state.versionsWrapper;
      return React.createElement(Label, {
        id: "endDateLabel",
        bold: false,
        text: getVersionEndDate(versionsWrapper.getSelectedVersion())
      });
    };
    /**
     * Function called when the version notes are changed. Update the selected version
     * and trigger the event that the versions changed.
     */


    var versionNotesChanged = function versionNotesChanged(newValue) {
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().setNotes(newValue);

      _this2.setState({
        versionsWrapper: versionsWrapper
      });
    };

    var getVersionNotes = function getVersionNotes() {
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();
      var selectedVersion = versionsWrapper.getSelectedVersion();

      if (selectedVersion) {
        return selectedVersion[versionsKeyMap.descriptionKey];
      }

      return null;
    };

    var toggleVersionValidationMessage = function toggleVersionValidationMessage() {
      if (_this2.state.showVersionValidationMessage === true) {
        var errorMessage = _this2.props.translationLabelMap.versionValidationMessage || "[Error Message Here]";
        return React.createElement("div", {
          style: FormStyles.errorMessageContainerStyle
        }, React.createElement("div", {
          style: FormStyles.errorMessageWrapperStyle
        }, React.createElement("span", {
          className: "fa fa-exclamation-circle",
          style: FormStyles.errorMessageIconStyle
        }), React.createElement("span", null, errorMessage)));
      } else {
        return null;
      }
    };

    var toggleVersionDetailsContainer = function toggleVersionDetailsContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionDetailsContainer",
          style: styles.versionDetailsContainerStyle
        }, toggleVersionValidationMessage(), React.createElement("div", {
          style: styles.versionDetailsRowOneLeftStyle
        }, React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.effectiveStartLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, getStartDateControl()), React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.effectiveEndLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, getEndDateControl())), React.createElement("div", {
          style: styles.versionDetailsRowRightStyle
        }, React.createElement(SecondaryButton, {
          id: "deleteVersionButton",
          text: _this2.props.translationLabelMap.deleteButtonText,
          clickHandler: deleteVersionClickHandler,
          enabled: isDeleteVersionButtonEnabled(),
          icon: "fa fa-trash"
        })), React.createElement("div", {
          style: styles.versionDetailsRowClearStyle
        }), React.createElement("div", {
          style: styles.versionDetailsRowTwoLeftStyle
        }, React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.versionNotesLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, React.createElement(TextBox, {
          id: "versionNotes",
          value: getVersionNotes(),
          changeHandler: versionNotesChanged,
          size: "large",
          disabled: _this2.props.readOnly,
          validator: _this2.props.validator,
          validationEventHandler: _this2.validationEventHandler,
          maxLength: 256
        }))), React.createElement("div", {
          style: styles.versionDetailsRowClearStyle
        }));
      } else {
        return null;
      }
    };
    /**
     * Function to render the children of the version control and show and hide them based on the toggle.
     */


    var toggleVersionChildContainer = function toggleVersionChildContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionChildrenContainer",
          style: styles.versionDetailsContainerStyle
        }, _this2.props.children);
      } else {
        return null;
      }
    };
    /**
     * Shows/Hides the add version button. Depends on whether we are creating new pay curve.
     */


    var toggleAddVersionButton = function toggleAddVersionButton() {
      if (_this2.state.isFirstVersion == true) {
        return null;
      } else {
        return React.createElement(SecondaryButton, {
          id: "addVersionButton",
          text: _this2.props.translationLabelMap.addVersionButtonText,
          clickHandler: addVersion,
          enabled: isAddVersionButtonEnabled(),
          icon: "fa fa-plus-circle"
        });
      }
    };
    /**
     * Function that returns the title for the version. If it is first version then display "master version" otherwise
     * display <start date> - <end date>
     */


    var getVersionTitle = function getVersionTitle() {
      var versionTitle = null;
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();
      var selectedVersion = versionsWrapper.getSelectedVersion();

      if (selectedVersion) {
        var startDate = selectedVersion[versionsKeyMap.startDateKey];

        if (startDate == sotDate) {
          versionTitle = translatedLabelsMap.versionText + ": " + _this2.props.translationLabelMap.sotLabelText;
        } else {
          // start date
          versionTitle = translatedLabelsMap.versionText + ": " + getVersionStartDate(selectedVersion);
        } // end date


        var endDate = selectedVersion[versionsKeyMap.endDateKey];

        if (endDate == eotDate) {
          versionTitle = versionTitle + " - " + _this2.props.translationLabelMap.eotLabelText;
        } else {
          versionTitle = versionTitle + " - " + getVersionEndDate(selectedVersion);
        }
      }

      return versionTitle;
    };

    var headerId = _.uniqueId("header_");

    return React.createElement("div", {
      id: id,
      style: styles.shellStyle
    }, React.createElement("div", {
      id: "versionContainer",
      style: styles.headerStyle
    }, React.createElement("div", {
      id: headerId,
      onClick: toggleVersionDetails,
      style: {
        cursor: "pointer"
      }
    }, React.createElement("div", {
      id: "versionLabelContainer",
      style: styles.versionLabelContainerStyle
    }, React.createElement("div", {
      style: styles.versionLabelStyle
    }, getVersionTitle()), toggleAddVersionButton()), versionDetailsToggleContainer(), React.createElement("div", {
      style: styles.versionLabelClearStyle
    })), toggleVersionTableContainer()), toggleVersionDetailsContainer(), React.createElement("div", {
      id: "versionChildrenContainer",
      style: styles.versionDetailsContainerStyle
    }, this.props.children), React.createElement(ConfirmationDialog, {
      show: this.state.deleteVersionConfirmationDialogIsOpen,
      type: "delete",
      cancelButtonId: "deleteVersionCancelButton",
      headerText: this.props.translationLabelMap.confirmDeleteText,
      message: getDeleteMessage(),
      primaryButtonId: "deleteVersionOkButton",
      primaryButtonText: this.props.translationLabelMap.okText,
      cancelButtonText: this.props.translationLabelMap.cancelText,
      confirmClickHandler: deleteVersion,
      cancelClickHandler: cancelDeleteVersion
    }));
  } // lifecycle event handlers

});
module.exports = DateVersionControl;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("flux");

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Store that contains the state of the table component. This currently includes the sort state.
 * Create returns a new TableStore object. 
 */
var Dispatcher = __webpack_require__(17);

var _require = __webpack_require__(11),
    SortOrder = _require.SortOrder,
    ActionTypes = _require.ActionTypes; // var currentSortColumn = null, currentSortOrder = null;


var TableStore = {
  /**
   * Returns a new TableStore object
   * @param {String} tableId The id of the table component using the TableStore.
  *                  It is sent back as a prop of the SORT_DATA_CHANGED event
   */
  create: function create(tableId, defaultSortColumn, defaultSortOrder) {
    var defaultSortColumn = defaultSortColumn || null;
    var defaultSortOrder = defaultSortOrder || null;
    return {
      currentSortColumn: defaultSortColumn,
      currentSortOrder: defaultSortOrder,
      tableId: tableId,
      setSortColumn: function setSortColumn(sortColumn) {
        if (sortColumn) {
          if (sortColumn == this.currentSortColumn) {
            if (this.currentSortOrder == null) {
              this.currentSortOrder = SortOrder.DEFAULT;
            } else {
              if (this.currentSortOrder == SortOrder.ASC) {
                this.currentSortOrder = SortOrder.DESC;
              } else {
                this.currentSortOrder = SortOrder.ASC;
              }
            }
          } else {
            this.currentSortOrder = SortOrder.DEFAULT;
          }
        }

        this.currentSortColumn = sortColumn;
        Dispatcher.dispatch({
          type: ActionTypes.SORT_DATA_CHANGED,
          tableId: this.tableId,
          newSortColumn: this.currentSortColumn,
          newSortOrder: this.currentSortOrder
        });
      },
      getCurrentSortColumn: function getCurrentSortColumn() {
        return this.currentSortColumn;
      },
      getCurrentSortOrder: function getCurrentSortOrder() {
        return this.currentSortOrder;
      }
    };
  }
};
module.exports = TableStore;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./HelpDialog.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./HelpDialog.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".icon {\n    color:#CCCCCC;\n}\n.icon:hover {\n    color:#346F8F;\n}\n.helpDialogContainerStyle {\n    display: inline;\n    margin-left: 6px;\n}\n.tooltipTheme {\n    color: #ffffff !important;\n    background-color: #346F8F !important;\n    font-family: Verdana;\n    font-size: 12px;\n    &.place-top {\n        &:after {\n            border-top-color: orange !important;\n            border-top-style: solid !important;\n            border-top-width: 6px !important;\n        }\n    }\n}\n", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(1);

var moment = __webpack_require__(29);
/**
 * A non visual component for performing actions on version data.
 */


var DateVersionsWrapper = function DateVersionsWrapper() {
  var sotDate = "1970-01-01";
  var eotDate = "2035-12-31";
  var DATE_FORMAT = "YYYY-MM-DD";

  function updateVersionObjectKeyMap(userVersionObjectKeyMap) {
    if (userVersionObjectKeyMap) {
      _keyMap.versionIdKey = userVersionObjectKeyMap.versionIdKey || "versionId";
      _keyMap.startDateKey = userVersionObjectKeyMap.startDateKey || "effectiveStartDate";
      _keyMap.endDateKey = userVersionObjectKeyMap.endDateKey || "effectiveEndDate";
      _keyMap.descriptionKey = userVersionObjectKeyMap.descriptionKey || "description";
      _keyMap.reasonCodeKey = userVersionObjectKeyMap.reasonCodeKey || null;
    }
  }

  ;

  function getDefaultKeyMap() {
    return {
      versionIdKey: "versionId",
      startDateKey: "effectiveStartDate",
      endDateKey: "effectiveEndDate",
      descriptionKey: "description"
    };
  }

  ;

  function getVersionIndex(versionId, _versionData) {
    var versionIndex = null;

    if (versionId != null && versionId != undefined && Array.isArray(_versionData) == true) {
      for (var index = 0; index < _versionData.length; index++) {
        var version = _versionData[index];

        if (versionId == version[_keyMap.versionIdKey]) {
          versionIndex = index;
          break;
        }
      }
    }

    return versionIndex;
  }

  ;
  var SORT_DIRECTION = {
    ASC: "ASC",
    DESC: "DESC"
  };

  var _keyMap = getDefaultKeyMap();

  var that = {
    _versionData: null,
    _selectedVersionId: null,
    _currentSortDirection: SORT_DIRECTION.ASC,
    _selectedVersionChangedEventHandler: null
  };

  that.create = function (versionData, sortDirection, selectedVersionChangedEventHandler, initialSelectedVersionId) {
    if (Array.isArray(versionData) == true) {
      that._versionData = versionData; // console.log("create: _versionData = " + JSON.stringify(that._versionData));

      if (that.selectedVersionChangedEventHandler == null) {
        that._selectedVersionChangedEventHandler = selectedVersionChangedEventHandler;
      }

      if (sortDirection && sortDirection.toLowerCase() == "desc") {
        that._currentSortDirection = SORT_DIRECTION.DESC;
      }

      if (initialSelectedVersionId) {
        that._selectedVersionId = initialSelectedVersionId;
      } // set the 0th version as the selected version only if it is null (initialization)
      // that.setSelectedVersion(that._versionData[0], "edit");

    }
  };

  that.getCurrentSortDirection = function () {
    return that._currentSortDirection;
  };

  that.getVersions = function () {
    return that._versionData;
  };

  that.getCount = function () {
    if (that._versionData && Array.isArray(that._versionData)) {
      return that._versionData.length;
    }

    return null;
  };

  that.setKeyMap = function (keyMap) {
    updateVersionObjectKeyMap(keyMap);
  };

  that.getKeyMap = function () {
    return _keyMap;
  };

  that.resetKeyMap = function () {
    _keyMap = getDefaultKeyMap();
  };

  that.setSelectedVersion = function (version, action) {
    if (version) {
      // console.log("setSelectedVersion: _selectedVersionId = " + that._selectedVersionId + ", version[_keyMap.versionIdKey] = " + version[_keyMap.versionIdKey]);
      // set the state and trigger the change handler only if the new version id is different
      if (that._selectedVersionId != version[_keyMap.versionIdKey]) {
        that._selectedVersionId = version[_keyMap.versionIdKey];

        if (typeof that._selectedVersionChangedEventHandler == "function") {
          that._selectedVersionChangedEventHandler(that.getSelectedVersion(), action, that._currentSortDirection);
        }
      }
    }
  };

  that.getSelectedVersion = function () {
    var selectedVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._selectedVersionId) {
        selectedVersion = _.find(that._versionData, function (item, index, arr) {
          return that._selectedVersionId == item[_keyMap.versionIdKey];
        });

        if (!selectedVersion) {
          // could not find selectedVersion for _selectedVersionId, make the first version the selected version
          selectedVersion = that._versionData[0]; // console.log("getSelectedVersion: selectedVersion is null for _selectedVersionId = " + that._selectedVersionId);
          // console.log("getSelectedVersion: _versionData = " + JSON.stringify(that._versionData));
        }
      } else {
        // no selectedVersionId is set, so make the first version as the selected version
        selectedVersion = that._versionData[0];
      }
    }

    return selectedVersion;
  };

  that.selectedVersion = function () {
    return that;
  };

  that.isFirstVersion = function () {
    var isFirstVersion = false; // if the selected version start date is sot, then it is the first version

    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion) {
      var startDate = selectedVersion[_keyMap.startDateKey];

      if (startDate == sotDate) {
        isFirstVersion = true;
      }
    }

    return isFirstVersion;
  };

  that.isLastVersion = function () {
    var isLastVersion = false; // if the selected version end date is eot, then it is the last version

    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion) {
      var endDate = selectedVersion[_keyMap.endDateKey];

      if (endDate == eotDate) {
        isLastVersion = true;
      }
    }

    return isLastVersion;
  };
  /**
   * Function to change the start date of the selected version.
   * - For the selected version the start date is the selected date.
   * - For the prior version the end date is the date before the selected date.
   */


  that.setStartDate = function (startDate) {
    var selectedVersion = that.getSelectedVersion();
    selectedVersion[_keyMap.startDateKey] = startDate;
    var previousVersion = that.selectedVersion().getPreviousVersion();
    var previousDateMoment = moment(startDate, DATE_FORMAT).add(-1, "days");
    previousVersion[_keyMap.endDateKey] = previousDateMoment.format(DATE_FORMAT);
  };
  /**
   * Function to get the previous version of a passed in version.
   * If the version parameter is absent the selected version is used.
   */


  that.getPreviousVersion = function (version) {
    var previousVersion = null;
    var _version = version;

    if (!version) {
      _version = that.getSelectedVersion();
    }

    var _versionIndex = getVersionIndex(_version[_keyMap.versionIdKey], that._versionData);

    if (that._currentSortDirection == SORT_DIRECTION.ASC) {
      if (_versionIndex > 0) {
        previousVersion = that._versionData[_versionIndex - 1];
      }
    } else {
      if (_versionIndex < that._versionData.length - 1) {
        previousVersion = that._versionData[_versionIndex + 1];
      }
    }

    return previousVersion;
  };
  /**
   * Function to get the next version of a passed in version.
   * If the version parameter is absent the selected version is used.
   */


  that.getNextVersion = function (version) {
    var nextVersion = null;
    var _version = version;

    if (!version) {
      _version = that.getSelectedVersion();
    }

    var _versionIndex = getVersionIndex(_version[_keyMap.versionIdKey], that._versionData);

    if (that._currentSortDirection == SORT_DIRECTION.ASC) {
      if (_versionIndex < that._versionData.length - 1) {
        nextVersion = that._versionData[_versionIndex + 1];
      }
    } else {
      if (_versionIndex > 0) {
        nextVersion = that._versionData[_versionIndex - 1];
      }
    }

    return nextVersion;
  };

  that.setNotes = function (note) {
    var selectedVersion = that.getSelectedVersion();
    selectedVersion[_keyMap.descriptionKey] = note;
  };
  /**
   * Returns the index of the selected version
   */


  that.getIndex = function () {
    var index = -1;
    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion) {
      index = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);
    }

    return index;
  };
  /**
   * Function to delete the selected version. Logic:
   * - First version cannot be deleted.
   * - When version is deleted only the next version is affected because we can only change the start date.
   * - Special case when last version is deleted the pervious version should take EOT as the end date.
   * - When version is deleted next versions start date takes the deleted versions start date.
   */


  that.deleteVersion = function () {
    // cannot delete the first version
    if (Array.isArray(that._versionData) == true && that.selectedVersion().isFirstVersion() == false) {
      var selectedVersion = that.getSelectedVersion();
      var selectedVersionIndex = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);
      var selectedVersionEndDate = selectedVersion[_keyMap.endDateKey];
      var previousVersion = that.selectedVersion().getPreviousVersion();
      previousVersion[_keyMap.endDateKey] = selectedVersionEndDate;
      that.setSelectedVersion(previousVersion, "delete"); // remove the selected version and make the previous version as the selected version

      that._versionData.splice(selectedVersionIndex, 1);
    }
  };
  /**
   * Returns the date range for the version parameter pass in.
   * If the version parameter is absent then use the selected version.
   * The range start date is the previous version start date + 1 and the range
   * end date is the end date of the selected version.
   */


  that.getDateRange = function (version) {
    var dateRange = null;
    var _version = version;

    if (!version) {
      _version = that.getSelectedVersion();
    }

    if (Array.isArray(that._versionData) == true) {
      var _versionStartDate = _version[_keyMap.startDateKey];
      var _versionEndDate = _version[_keyMap.endDateKey];
      var previousVersion = that.getPreviousVersion(_version);

      if (previousVersion) {
        var previousVersionStartDate = previousVersion[_keyMap.startDateKey];
        _versionStartDate = moment(previousVersionStartDate, DATE_FORMAT).add(1, "days").format(DATE_FORMAT);
      }

      dateRange = {
        minDate: _versionStartDate,
        maxDate: _versionEndDate
      };
    }

    return dateRange;
  };

  that.sort = function (sortDirection) {
    var _sortDirection = null;

    if (sortDirection) {
      if (sortDirection.toUpperCase() == "ASC") {
        _sortDirection = SORT_DIRECTION.ASC;
      }

      if (sortDirection.toUpperCase() == "DESC") {
        _sortDirection = SORT_DIRECTION.DESC;
      }
    }

    if (_sortDirection != that._currentSortDirection) {
      if (Array.isArray(that._versionData) == true) {
        // do an in place sort because the _versionData is a pointer to the data passed in from the parent
        // we want to maintain that link to the parent because when versions are added, edited or deleted
        // we want the parent data to change.
        var start = 0,
            end = that._versionData.length - 1;

        while (start < end) {
          var temp = that._versionData[start];
          that._versionData[start] = that._versionData[end];
          that._versionData[end] = temp;
          start++;
          end--;
        }

        if (that._currentSortDirection == SORT_DIRECTION.ASC) {
          that._currentSortDirection = SORT_DIRECTION.DESC;
        } else {
          that._currentSortDirection = SORT_DIRECTION.ASC;
        }
      }
    }
  };

  that.getLastVersion = function () {
    var lastVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        lastVersion = that._versionData[that._versionData.length - 1];
      } else {
        lastVersion = that._versionData[0];
      }
    }

    return lastVersion;
  };

  that.getFirstVersion = function () {
    var firstVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        firstVersion = that._versionData[0];
      } else {
        firstVersion = that._versionData[that._versionData.length - 1];
      }
    }

    return firstVersion;
  };
  /**
   * Function to add a new version. Logic below:
   * - A new version can only be added to the end.
   * - Get the last version. This version will be split.
   * - Date range is the last version start date + 1 till the eotDate.
   */


  that.addVersion = function () {
    var lastVersion = that.getLastVersion();
    var lastVersionStartDate = lastVersion[_keyMap.startDateKey];
    var lastVersionEndDate = lastVersion[_keyMap.endDateKey];
    var minDateMoment = moment(lastVersionStartDate, DATE_FORMAT);
    var maxDateMoment = moment(lastVersionEndDate, DATE_FORMAT);
    var dateDiff = maxDateMoment.diff(minDateMoment, "days");

    if (dateDiff > 0) {
      // default start date for the new version is today's date
      var newVersionStartDateMoment = moment(); // unless the previous version's start date is greater than or equals to today's date, then we use that date + 1

      if (newVersionStartDateMoment.diff(minDateMoment, "days") <= 0) {
        newVersionStartDateMoment = minDateMoment.add(1, "days");
      }

      var newVersionStartDate = newVersionStartDateMoment.format(DATE_FORMAT);
      var newVersionEndDate = eotDate; // EOT
      // last version end date goes one day behind the new version start date

      var lastVersionEndDate = newVersionStartDateMoment.add(-1, "days").format(DATE_FORMAT);
      lastVersion[_keyMap.endDateKey] = lastVersionEndDate; // create the new version

      var newVersion = {}; // loop through the version object key map to assign properties to the new version object

      Object.keys(_keyMap).forEach(function (key, index, arr) {
        newVersion[_keyMap[key]] = null;
      }); // assign a temporary version id since we use that to track selected version

      newVersion[_keyMap.versionIdKey] = _.uniqueId("newVersion_"); // assign the start and end dates to the new version

      newVersion[_keyMap.startDateKey] = newVersionStartDate;
      newVersion[_keyMap.endDateKey] = newVersionEndDate;

      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        // add new version to the end of the array
        that._versionData.push(newVersion);
      } else {
        // add new version to the top of the array
        that._versionData.splice(0, 0, newVersion);
      } // also make this the selected version


      that.setSelectedVersion(newVersion, "add");
    }
  };

  return that;
};

module.exports = DateVersionsWrapper;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A dialog allowing user to input comments for deletion
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var i18n = __webpack_require__(113);

var Form = __webpack_require__(50);

var FormRow = __webpack_require__(51);

var TextArea = __webpack_require__(52);

var SecondaryButton = __webpack_require__(2);

var PrimaryButton = __webpack_require__(10);

var PageFooter = __webpack_require__(21);

var labels = ["enterDeleteComments", "reason", "delete", "cancel", "maxCharacterText", "requiredText", "deleteCommentsValidationMessage"];
/**
 * Overlay component for showing confirmation dialog.
 */

var DeleteCommentsDialog = React.createClass({
  displayName: "DeleteCommentsDialog",
  dialogBackdrop: {
    backgroundColor: "#555",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1040,
    opacity: 0.8,
    display: "block"
  },
  modal: {
    backgroundColor: "#fff",
    fontSize: "12px",
    width: 610,
    position: "fixed",
    left: "calc(50% - 305px)",
    top: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 1050,
    border: "1px solid #CFCFCF",
    outline: "none"
  },
  header: {
    padding: "21px 20px",
    lineHeight: "22px"
  },
  headerTitle: {
    fontFamily: "verdana",
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333"
  },
  headerClose: {
    float: "right",
    color: "#CACBCA",
    fontSize: 18,
    top: 2,
    position: "relative",
    cursor: "pointer"
  },
  body: {
    borderTop: "1px solid #E1E1E1",
    borderBottom: "1px solid #E1E1E1",
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333333",
    paddingRight: 20
  },
  // styles
  // properties
  // properties
  // lifecycle event handlers
  propTypes: {
    /**
     * Toggle to show or hide the overlay. False by default.
     */
    show: React.PropTypes.bool.isRequired,

    /**
     * Title of the Overlay.
     */
    headerText: React.PropTypes.string,

    /**
     * The message in the overlay.
     */
    message: React.PropTypes.string,

    /**
     * The text for the Primary button.
     */
    primaryButtonText: React.PropTypes.string,

    /**
     * The text for the cancel button.
     */
    cancelButtonText: React.PropTypes.string,

    /**
     * The id of the primary button on the confirmation dialog. If not provided a unique id will be used.
     */
    primaryButtonId: React.PropTypes.string,

    /**
     * The id of the cancel button on the confirmation dialog. If not provided a unique id will be used.
     */
    cancelButtonId: React.PropTypes.string,

    /**
     * Handler to be passed into the component. It is called when the confirm button is clicked.
     */
    confirmClickHandler: React.PropTypes.func,

    /**
     * Handler called when the cancel button is clicked.
     */
    cancelClickHandler: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      comments: null,
      show: false,
      showFormValidationMessage: false,
      commentsValid: false
    };
  },
  componentWillMount: function componentWillMount() {
    i18n.getAll(this.props.namespace, labels);
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (typeof newProps.show == "boolean") {
      this.setState({
        comments: null,
        show: newProps.show,
        showFormValidationMessage: false,
        commentsValid: false
      });
    }
  },
  // Function called when the comments textarea value is changed
  changeHandler: function changeHandler(comments, event) {
    this.setState({
      comments: comments
    });
  },
  render: function render() {
    var _this = this;

    var confirmClickHandler = function confirmClickHandler() {
      if (!_this.state.commentsValid) {
        _this.setState({
          showFormValidationMessage: true
        });

        return;
      }

      if (typeof _this.props.confirmClickHandler == "function") {
        _this.props.confirmClickHandler(_this.state.comments);
      }
    };

    var cancelClickHandler = function cancelClickHandler() {
      _this.setState({
        show: false
      }, function () {
        if (typeof _this.props.cancelClickHandler == "function") {
          _this.props.cancelClickHandler();
        }
      });
    };

    var descriptionValidator = function descriptionValidator(value) {
      var validationMessage = null; // required

      if (!value || value.length == 0) {
        validationMessage = labels.requiredText;
      } // max length


      if (value && value.length > 1500) {
        // max 1500 characters
        validationMessage = "1500 " + lables.maxCharacterText;
      }

      _this.setState({
        commentsValid: validationMessage == null // set according to whether a message was generated (indicating a failure)

      });

      return validationMessage;
    };

    var headerText = this.props.headerText || labels.enterDeleteComments;
    var message = this.props.message || "";
    var primaryButtonText = this.props.primaryButtonText || labels.delete;

    var primaryButtonId = this.props.primaryButtonId || _.uniqueId("confirmationDialogPrimaryButton_");

    var cancelButtonId = this.props.cancelButtonId || _.uniqueId("confirmationDialogCancelButton_");

    var id = this.props.id || _.uniqueId("confirmationDialog_");

    if (this.state.show == false) {
      return null;
    } else {
      return React.createElement("div", {
        id: id
      }, React.createElement("div", {
        style: this.dialogBackdrop
      }), React.createElement("div", {
        style: this.modal
      }, React.createElement("div", {
        style: this.header
      }, React.createElement("i", {
        className: "fa fa-times",
        style: this.headerClose,
        onClick: cancelClickHandler
      }), React.createElement("div", {
        style: this.headerTitle
      }, headerText)), React.createElement("div", {
        style: this.body
      }, React.createElement(Form, {
        type: "dialog",
        showValidationMessage: this.state.showFormValidationMessage,
        formValidationMessage: labels.deleteCommentsValidationMessage
      }, message && React.createElement("div", {
        style: {
          paddingLeft: 20,
          paddingBottom: 20
        }
      }, message), React.createElement(FormRow, {
        label: labels.reason
      }, React.createElement(TextArea, {
        id: "comments",
        maxLength: 1500,
        width: 400,
        height: 70,
        size: "medium",
        value: this.state.comments,
        required: true,
        tabIndex: 1,
        changeHandler: this.changeHandler,
        validator: descriptionValidator,
        validationEventHandler: null,
        autoFocus: true
      })))), React.createElement(PageFooter, null, React.createElement(PageFooter.RightPane, null, this.props.type == 'info' ? null : React.createElement(SecondaryButton, {
        id: cancelButtonId,
        text: this.props.cancelButtonText || labels.cancel,
        icon: "fa fa-times-circle-o",
        clickHandler: cancelClickHandler,
        tabIndex: 3
      }), React.createElement(PrimaryButton, {
        id: primaryButtonId,
        inline: true,
        text: primaryButtonText,
        clickHandler: confirmClickHandler,
        tabIndex: 2
      })))));
    }
  } // lifecycle event handlers

});
module.exports = DeleteCommentsDialog;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("i18n");

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(30);

var $ = __webpack_require__(32); // for styleguide


var Tabs = __webpack_require__(53);

var SecondaryButton = __webpack_require__(2);

var ConfirmationDialog = __webpack_require__(24);

var FormStyles = __webpack_require__(4).form;
/**
 * A dynamic tab component that allows users to dynamically add/delete tabs with user-supplied contents and rendered by a user-define React component.
 * There's no limit to the number of tabs that can be added.  If the total tab titles width exceeds the width of the component, a dropdown menu with selections 
 *   for the tabs that could not be displayed will be provided.
 */


var DynaTabs = React.createClass({
  displayName: "DynaTabs",
  tabIdForValidationMsg: null,
  // need to keep track so we can show appropriate validation message when necessary
  propTypes: {
    /**
     * If only a single tab is needed, then no add or delete functionality is provided
     */
    singleTabOnly: React.PropTypes.bool,

    /**
     * Control is read only when this value is true, which means no add or deletion of tabs.
     */
    readOnly: React.PropTypes.bool,

    /**
     * Each element (an object) in this array will be passed along to the child component as 'data' property, which the child component will use to render.
     */
    tabsData: React.PropTypes.array.isRequired,

    /**
     * A boolean array indicating whether we should mark the tabs for special purpose (e.g., invalid content)
     */
    tabsMarked: React.PropTypes.array,

    /**
     * The tab that should be selected initially. Default is the first tab.
     */
    initialTabIndex: React.PropTypes.number,

    /**
     * The tab that should be sticky initially. Default is the first tab.
     */
    stickyTabIndex: React.PropTypes.number,

    /**
     * The field name in element object that will be used as the tab title.  If the field is an editable input, the tab title will update automatically as user edits the field.
     */
    nameField: React.PropTypes.string.isRequired,

    /**
     * Each key represents the translated label for the component.
     */
    translationLabels: React.PropTypes.shape({
      delete: React.PropTypes.string,
      cancel: React.PropTypes.string,
      emptyTabTitle: React.PropTypes.string,
      confirmDeleteText: React.PropTypes.string,
      duplicateTitleValidationMessage: React.PropTypes.string,
      deleteTabConfirmationMessage: React.PropTypes.string,
      addTabValidationMessage: React.PropTypes.string,
      switchTabValidationMessage: React.PropTypes.string
    }).isRequired,

    /**
     * Event handler called when a tab is selected, the selected tabIndex is passed, offering the parent a chance to cache it for later use.
     */
    tabClickHandler: React.PropTypes.func,

    /**
     * Event handler called when ths sticky tab has changed (e.g., a hidden tab selected from the menu), offering the parent a chance to cache it for later use.
     */
    stickyTabHandler: React.PropTypes.func,

    /**
     * Event handler called before user adds a new tab or nagvigates to another tab. The function should return true if the operation is allowed or false otherwise.
     */
    preAddEditTabValidator: React.PropTypes.func,

    /**
     * Event handler called when the add tab icon is clicked and the data was validated.
     */
    addTabEventHandler: React.PropTypes.func,

    /**
     * Event handler called when the delete tab icon is clicked and user confirms.
     */
    deleteTabEventHandler: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {
      // Keep tracks of which tabs are visible at any given time
      //tabsIsVisible: Array(this.props.tabsData.length).fill(true),  // not supported in IE
      tabsIsVisible: _.fill(Array(this.props.tabsData.length), true),
      // Should we mark the tab for any special purpose (e.g., invalid content); default is false if prop not passed in   
      tabsMarked: this.props.tabsMarked ? _.clone(this.props.tabsMarked) : _.fill(Array(this.props.tabsData.length), false),
      // selected all tab index
      activeTabIndex: this.props.initialTabIndex || 0,
      // The rightmost tab's all tab index, we want to make sure it is always visible (could be selected from the menu)
      stickyTabIndex: this.props.stickyTabIndex || 0,
      showMoreTabsMenu: false,
      deleteTabConfirmationDialogOpen: false,
      showValidationMessage: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      tabsIsVisible: _.fill(Array(nextProps.tabsData.length), true),
      activeTabIndex: nextProps.initialTabIndex || 0,
      stickyTabIndex: nextProps.stickyTabIndex || 0
    });
    if (nextProps.tabsMarked) this.setState({
      tabsMarked: nextProps.tabsMarked
    });
  },
  componentDidMount: function componentDidMount() {
    this.containerHeight = $(this.refs.tabsComp).outerHeight(); // Save this for later

    this.autoLayout();
    document.addEventListener('click', this.closeMoreTabsMenu); // Catch to close the moreTabs dropdown, if it's open

    window.addEventListener('resize', this.windowResized);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('click', this.closeMoreTabsMenu);
    window.removeEventListener('resize', this.windowResized);
  },
  componentDidUpdate: function componentDidUpdate() {
    this.autoLayout();
  },
  // Browser is resized, re-layout the tabs
  windowResized: function windowResized() {
    this.setState({
      showMoreTabsMenu: false,
      // Hide menu if it's open
      tabsIsVisible: _.fill(this.state.tabsIsVisible, true) // Rerender all tabs so new widths can be calculated

    });
  },
  // This is first called after the initial rendering or after the component receives new props (in response to adding/deleteing of tabs) 
  // The initial rendering will render all tabs (we set the tabsIsVisible array to all true), so now we have the DOM measurement of each tabs available,
  //   and we can proceed to calculate how many tabs we can really fit in (the rest will go inside the dropdown).
  // It will then be called a 2nd time if we've set a new tabsIsVisible state, but then it will calcuates out to be the same, so a new state will not be set and we are done
  autoLayout: function autoLayout() {
    // The newly selected hidden tab may not be rendered yet, just skip it
    if (!this.refs["tab_".concat(this.state.activeTabIndex)] || !this.refs["tab_".concat(this.state.stickyTabIndex)]) return;
    var totalHeaderWidth = 0;
    var containerWidth = $(this.refs.tabsComp).outerWidth();
    $(this.refs.tabsComp).outerHeight(this.containerHeight); // set the height so the current sccroll position will be retained

    var tabsIsVisible = _.fill(Array(this.state.tabsIsVisible.length), false); // make a copy first; mark all as invisible to start with
    // Add indent title width
    //totalHeaderWidth += $(this.refs.tabHeaders.refs.indentHeader).outerWidth();  


    totalHeaderWidth += 4; // Add addIcon/moreTabs title widths
    //let addTabWidth = $(this.addTab.refs.title).outerWidth();

    var addTabWidth = 31; // hard code it since we don't have the measurement in readOnly mode

    totalHeaderWidth += addTabWidth; // just assume moreTab is always there to make things easier

    if (this.addTab) {
      // readonly mode doesn't have addTab
      totalHeaderWidth += addTabWidth;
    } // Add the active and sticky tabs width first, since these 2 tabs has priority


    totalHeaderWidth += this.tabHeaderWidth(this.state.activeTabIndex);
    tabsIsVisible[this.state.activeTabIndex] = true; // this tab is always visible

    if (this.state.stickyTabIndex != this.state.activeTabIndex) {
      totalHeaderWidth += this.tabHeaderWidth(this.state.stickyTabIndex);
      tabsIsVisible[this.state.stickyTabIndex] = true; // this tab is always visible
    }

    ; // Add up the title widths of the rest of the tabs and for those tabs that will fit, mark them as visible

    var index = 0;

    while (index < this.state.tabsIsVisible.length) {
      if (index == this.state.activeTabIndex || index == this.state.stickyTabIndex) {// Do nothing for activeTab/StickTab
      } else if (this.state.tabsIsVisible[index] && totalHeaderWidth + this.tabHeaderWidth(index) <= containerWidth) {
        // Space still available
        tabsIsVisible[index] = true;
        totalHeaderWidth += this.tabHeaderWidth(index);
      } else break; // if we exceed the width, get out so the remaining tabs will hide inside the dropdown


      index++;
    }

    ; // re-render only if there's any changes

    if (!_.isEqual(tabsIsVisible, this.state.tabsIsVisible)) {
      this.setState({
        tabsIsVisible: tabsIsVisible
      });
    }

    ;
    this.layoutMoreTabsMenu();
  },
  // Returns the width of the tab header 
  tabHeaderWidth: function tabHeaderWidth(index) {
    return $(this.refs["tab_".concat(index)].refs.title).outerWidth();
  },
  // Position the hidden tabs menu right below the more tabs icon
  layoutMoreTabsMenu: function layoutMoreTabsMenu() {
    if (this.moreTabs && this.state.showMoreTabsMenu) {
      var $moreTabs = $(this.moreTabs.refs.title);
      var rightAnchor = $moreTabs.offset().left + $moreTabs.outerWidth();
      var topAnchor = $moreTabs.offset().top + $moreTabs.outerHeight();
      var widthTabsMenu = $(this.refs.tabsMenuDiv).outerWidth();
      $(this.refs.tabsMenuDiv).offset({
        left: rightAnchor - widthTabsMenu,
        top: topAnchor
      });
    }

    ;
  },
  // Called to set the focus to the child component's designated element after Add/Edit/Delete tab
  setInitialFocus: function setInitialFocus() {
    if (this.refs['tabData_' + this.state.activeTabIndex] && typeof this.refs['tabData_' + this.state.activeTabIndex].setInitialFocus == 'function') this.refs['tabData_' + this.state.activeTabIndex].setInitialFocus();
  },
  // Get the visible tab index for Tabs component
  getVisbileTabIndex: function getVisbileTabIndex() {
    var index = 0;

    for (var i = 0; i <= this.state.activeTabIndex; i++) {
      if (this.state.tabsIsVisible[i]) index++;
    }

    ;
    return --index;
  },
  // Get the tabIndex for all tabs given a visible tab index
  getAllTabIndex: function getAllTabIndex(visibleIndex) {
    var visibleCount = 0;
    var i;

    for (i = 0; i < this.state.tabsIsVisible.length; i++) {
      if (this.state.tabsIsVisible[i]) {
        visibleCount++;
        if (visibleCount == visibleIndex + 1) break;
      }

      ;
    }

    ;
    return i;
  },
  // Return references to all tabs. This is useful if the calling component need to access it directly for validation, and so forth.
  getAllTabComps: function getAllTabComps() {
    var _this = this;

    return this.props.tabsData.map(function (tabData, index) {
      return _this.refs['tabData_' + index];
    });
  },
  // Return a reference to the current tab child component. This is useful if the calling component need to access it directly for validation, and so forth.
  getSelectedTabComp: function getSelectedTabComp() {
    return this.refs['tabData_' + this.state.activeTabIndex];
  },
  // Hide the hidden tabs menu
  closeMoreTabsMenu: function closeMoreTabsMenu(event) {
    var showMoreTabsMenu = !this.state.showMoreTabsMenu;

    if (!this.isMoreTabsClicked(event)) {
      showMoreTabsMenu = false;
    }

    ;
    if (showMoreTabsMenu != this.state.showMoreTabsMenu) this.setState({
      showMoreTabsMenu: showMoreTabsMenu
    });
  },
  // Is the click event triggered by moreTabs header?
  isMoreTabsClicked: function isMoreTabsClicked(event) {
    return $(event.target).is("#moreTabs") || $(event.target).parents("#moreTabs").length == 1;
  },
  // Record new tab index bacause a new tab was clicked, a tab was selected from the menu, or a tab was deleted.
  setActiveTabIndex: function setActiveTabIndex(tabIndex) {
    var _this2 = this;

    this.setState({
      activeTabIndex: tabIndex
    }, function () {
      _this2.setInitialFocus();
    }); // also notify the parent of the tabIndex we are switching to.

    if (typeof this.props.tabClickHandler == "function") {
      this.props.tabClickHandler(tabIndex);
    }
  },
  // Record new tab index bacause a tab was selected from the menu
  setStickyTabIndex: function setStickyTabIndex(tabIndex) {
    this.setState({
      stickyTabIndex: tabIndex
    }); // also notify the parent 

    if (typeof this.props.stickyTabHandler == "function") {
      this.props.stickyTabHandler(tabIndex);
    }
  },
  render: function render() {
    var _this3 = this;

    // User cancelled the deletion, remove dialog from screen
    var cancelDeleteTab = function cancelDeleteTab() {
      _this3.setState({
        deleteTabConfirmationDialogOpen: false // hide the dialog

      });
    }; // Delete tab icon is clicked


    var deleteTabEventHandler = function deleteTabEventHandler() {
      _this3.setState({
        deleteTabConfirmationDialogOpen: true
      });
    }; // User confirmed the deletion, go ahead and delete the tab


    var deleteTab = function deleteTab(event) {
      _this3.setState({
        deleteTabConfirmationDialogOpen: false,
        showValidationMessage: false // remove any validation message, if any, for the deleted tab

      });

      if (typeof _this3.props.deleteTabEventHandler == "function") {
        _this3.props.deleteTabEventHandler(_this3.state.activeTabIndex);
      }

      ; // If we are not deleting the sticky tab and if sticky tab has not been selected yet, set the sticky tab index back by 1

      if (_this3.state.activeTabIndex != _this3.state.stickyTabIndex && _this3.state.stickyTabIndex != 0) {
        _this3.setStickyTabIndex(_this3.state.stickyTabIndex - 1);
      } // If we are deleting the last tab, set the active/sticky index back by 1
      else if (_this3.state.activeTabIndex == _this3.props.tabsData.length - 1) {
          _this3.setStickyTabIndex(_this3.state.activeTabIndex - 1);

          _this3.setActiveTabIndex(_this3.state.activeTabIndex - 1);
        }

      ;
    }; // When navigating to or add a new tab, make sure current tab does not have validation errors.


    var preAddEditTabEventHandler = function preAddEditTabEventHandler(tabId, visibleTabIndex, addEditTabCallBack) {
      // iF moreTab icon is clicked, show the hidden tabs in the dropdown and tell Tabs not to switch tab (there's nothing to switch to)
      if (tabId == "moreTabs") {
        addEditTabCallBack(false); // don't switch
      } else {
        if (typeof _this3.props.preAddEditTabValidator == "function" && !_this3.props.readOnly) {
          _this3.tabIdForValidationMsg = tabId; // which validatio message to show, if necessary
          // Create a jquery deferred object for validator
          // We are passing a deferred object to the validator in case the validator needs to do a async request to the server side for additional information
          // The deferred object should be resolved by the validator (valid or not) when the information is available.  If no async request is needed,
          //   simply resolve the deferred object and return.

          var dataValidDeferred = $.Deferred();

          _this3.props.preAddEditTabValidator(dataValidDeferred, _this3.getAllTabIndex(visibleTabIndex));

          $.when(dataValidDeferred).done(function (dataValid) {
            // Show validation error if any
            _this3.setState({
              showValidationMessage: !dataValid
            }); // Call Tabs component callback so it can resume normal processing (i.e., switching tabs)


            addEditTabCallBack(dataValid);
          });
        } else {
          // If no validator is provided or if readonly, just go ahead
          addEditTabCallBack(true);
        }

        ;
      }

      ;
    }; // A tab header is clicked and we are told everything is ok so go ahead switching tab or adding a new tab


    var tabClickEventHandler = function tabClickEventHandler(tabId, tabIndex, event) {
      var allTabIndex = _this3.getAllTabIndex(tabIndex);

      _this3.setActiveTabIndex(allTabIndex); // If a new tab is added, notify the parent and make the tab sticky


      if (tabId == "addTab") {
        _this3.setStickyTabIndex(allTabIndex);

        if (typeof _this3.props.addTabEventHandler == "function") {
          _this3.props.addTabEventHandler();
        }
      }
    }; // Build the hidden tab menu


    var buildHiddenTabsMenu = function buildHiddenTabsMenu() {
      // A hidden tab is selected
      var menuItemClicked = function menuItemClicked(event) {
        var tabIndex = parseInt(event.currentTarget.getAttribute("tabIndex"));

        var doSwitchTab = function doSwitchTab(canSwitchTab) {
          if (canSwitchTab) {
            _this3.setActiveTabIndex(tabIndex);

            _this3.setStickyTabIndex(tabIndex);

            _this3.setState({
              tabsIsVisible: _.fill(_this3.state.tabsIsVisible, true) // Rerender all tabs so new widths can be calculated

            }, function () {
              _this3.setInitialFocus();
            });
          }

          ;
        }; // Validate the current tab first before we can swtich to the new tab, set tabId (1st param) to null since we will use the regualr warning message


        var visibleTabIndex = _this3.getVisbileTabIndex();

        preAddEditTabEventHandler(null, visibleTabIndex, doSwitchTab);
      }; // Build individual menu items (React functional component)


      var MenuItem = function MenuItem(props) {
        return React.createElement("div", {
          className: props.style,
          tabIndex: props.tabIndex,
          title: props.label,
          onClick: props.disabled ? null : menuItemClicked
        }, props.label || "".concat(_this3.props.translationLabels.emptyTabTitle, " ").concat(props.tabIndex + 1));
      }; // Starting from the first hidden tab, build a menu item entry for each tab till the end of all tabs.  
      // Grey out the tab currently selected if it's preceded by one or more hidden tabs


      var items = [];

      if (_this3.state.showMoreTabsMenu) {
        // Find the first hidden tab 
        var hiddenTabStartIndex = _.findIndex(_this3.state.tabsIsVisible, function (state) {
          return state === false;
        });

        if (hiddenTabStartIndex != -1) {
          var index = hiddenTabStartIndex;
          var item = {};

          for (var i = hiddenTabStartIndex; i < _this3.state.tabsIsVisible.length; i++) {
            // Build menu item entry
            item = {
              label: _this3.props.tabsData[i][_this3.props.nameField],
              tabIndex: i,
              key: i,
              disabled: false,
              style: "tabs_menuItem"
            }; // If a visible tab is here, that's because it is newly added or currently selected.  Let's show and mark it as disabled so use knows its position in the tabs

            if (_this3.state.tabsIsVisible[i]) {
              item.disabled = true;
              item.style += " tabs_menuItem_disabled";
            }

            ;

            if (_this3.state.tabsMarked[i]) {
              item.style += " tabs_menuItem_marked";
            }

            ;
            items.push(React.createElement(MenuItem, item));
          }

          ;
        }

        ;
        var maxHeight = $(_this3.refs.tabsComp).height() - 40;
        return React.createElement("div", {
          ref: "tabsMenuDiv",
          style: {
            maxHeight: maxHeight
          },
          className: "tabs_menuContainer"
        }, items);
      } else {
        return React.createElement("div", null);
      }

      ;
    }; // Build moreTabs tab header


    var getMoreTabsHeader = function getMoreTabsHeader() {
      // If there are any hidden tabs, then let's show the moreTabs tab
      if (_this3.state.tabsIsVisible.length != _.compact(_this3.state.tabsIsVisible).length) {
        return React.createElement(Tabs.Header, {
          id: "moreTabs",
          key: "moreTabs",
          ref: function ref(moreTabs) {
            return _this3.moreTabs = moreTabs;
          }
        });
      } else return null;
    }; // Build addTab tab header


    var getAddTabHeader = function getAddTabHeader() {
      if (!_this3.props.readOnly) return React.createElement(Tabs.Header, {
        id: "addTab",
        key: "addTab",
        ref: function ref(addTab) {
          return _this3.addTab = addTab;
        }
      });
    }; // Build tab headers


    var buildTabsHeader = function buildTabsHeader() {
      var tabsHeader = [];

      for (var i = 0; i < _this3.props.tabsData.length; i++) {
        if (_this3.state.tabsIsVisible[i]) {
          // maybe hidden in the dropdown menu
          var tabData = _this3.props.tabsData[i]; // Show data name as tab title; shows greyed-out "data Name" if data name field is empty

          tabsHeader.push(React.createElement(Tabs.Header, {
            id: tabData[_this3.props.nameField],
            ref: "tab_".concat(i),
            key: "tab_".concat(i),
            marked: _this3.state.tabsMarked[i],
            title: tabData[_this3.props.nameField] || "".concat(_this3.props.translationLabels.emptyTabTitle, " ").concat(i + 1),
            emptyHeader: !tabData[_this3.props.nameField]
          }));
        }

        ;
      }

      ;

      if (!_this3.props.singleTabOnly) {
        var moreTabsHeader = getMoreTabsHeader();
        if (moreTabsHeader) tabsHeader.push(moreTabsHeader);
        var addTabHeader = getAddTabHeader();
        if (addTabHeader) tabsHeader.push(addTabHeader);
      }

      ;
      return tabsHeader;
    }; // Build tabs contents using the only child component as the template and passing tab data to the template component to build each tab


    var buildTabsContent = function buildTabsContent() {
      var tabsContent = [];

      _this3.props.tabsData.forEach(function (tabData, index) {
        if (_this3.state.tabsIsVisible[index]) {
          // maybe hidden in the dropdown menu
          // If this tab has validation error, build it
          var validationMsg = React.createElement("div", null);

          var validationContainerStyle = _.clone(FormStyles.errorMessageContainerStyle);

          validationContainerStyle.marginBottom = 0;

          if (_this3.state.activeTabIndex == index && _this3.state.showValidationMessage) {
            var msg = _this3.tabIdForValidationMsg == "addTab" ? _this3.props.translationLabels.addTabValidationMessage : _this3.props.translationLabels.switchTabValidationMessage;
            validationMsg = React.createElement("div", {
              style: validationContainerStyle
            }, React.createElement("div", {
              style: FormStyles.errorMessageWrapperStyle
            }, React.createElement("span", {
              className: "fa fa-exclamation-circle",
              style: FormStyles.errorMessageIconStyle
            }), React.createElement("span", null, msg)));
          }

          ; // Build tab content

          var tabContent = React.cloneElement(React.Children.only(_this3.props.children), {
            ref: "tabData_" + index,
            data: tabData,
            childTabIndex: index
          });
          tabContent = React.createElement("div", {
            style: {
              width: "96%"
            }
          }, validationMsg, tabContent);
          var deleteButton = React.createElement("div", null);

          if (!_this3.props.singleTabOnly && !_this3.props.readOnly) {
            deleteButton = React.createElement("div", {
              style: {
                position: "absolute",
                top: "40px",
                right: "10px"
              }
            }, React.createElement(SecondaryButton, {
              id: "deleteButton",
              icon: "fa fa-trash",
              enabled: _this3.props.tabsData.length > 1,
              text: _this3.props.translationLabels.delete,
              clickHandler: deleteTabEventHandler
            }));
          }

          ;
          tabsContent.push(React.createElement(Tabs.Container, {
            key: index
          }, tabContent, deleteButton));
        }

        ;
      });

      return tabsContent;
    };

    return React.createElement("div", {
      ref: "tabsComp",
      style: {
        position: "relative"
      }
    }, React.createElement(Tabs, {
      initialTabIndex: this.getVisbileTabIndex(),
      preAddEditTabEventHandler: preAddEditTabEventHandler,
      tabClickHandler: tabClickEventHandler,
      containerHeight: "auto"
    }, React.createElement(Tabs.Headers, {
      ref: "tabHeaders"
    }, buildTabsHeader()), React.createElement(Tabs.Containers, null, buildTabsContent())), buildHiddenTabsMenu(), React.createElement(ConfirmationDialog, {
      show: this.state.deleteTabConfirmationDialogOpen,
      type: "delete",
      cancelButtonId: "deleteTabCancelButton",
      headerText: this.props.translationLabels.confirmDeleteText,
      message: this.props.translationLabels.deleteTabConfirmationMessage,
      primaryButtonId: "deleteTabOkButton",
      primaryButtonText: this.props.translationLabels.delete,
      cancelButtonText: this.props.translationLabels.cancel,
      confirmClickHandler: deleteTab,
      cancelClickHandler: cancelDeleteTab
    }));
  }
});
module.exports = DynaTabs;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./Tabs.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./Tabs.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".tabs_rootContainer {\n    width: 100%;\n    font-family: verdana;\n    font-size: 12px;\n}\n.tabs_headers {\n    width: 100%;\n    font-family: verdana;\n    font-size: 14px;\n    height: 28px;\n    display: table;\n}\n.tabs_indentHeader {\n    height: 28px;\n    width: 4px;\n    display: table-cell;\n    border-bottom: solid 1px #64ADC2;\n}\n.tabs_spaceHeader {\n    height: 28px;\n    width: 396px;\n    display: table-cell;\n    border-bottom: solid 1px #64ADC2;\n}\n.tabs_header {\n    height: 28px;\n    width: 1%;\n    border: solid 1px #64ADC2;\n    border-bottom: solid 1px #64ADC2;\n    display: table-cell;\n    cursor: pointer;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    vertical-align: middle;\n    text-align: center;\n    background-color: #F8FAFA;\n    font-size: 12px;\n    color: #346F8F;\n    font-weight: bold;\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.tabs_headerSelected {\n    height: 28px;\n    width: 1%;\n    border: solid 1px #64ADC2;\n    display: table-cell;\n    cursor: pointer;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    vertical-align: middle;\n    text-align: center;\n    background-color: #FFFFFF;\n    border-bottom: solid 1px #FFFFFF;\n    font-size: 12px;\n    color: #333333;\n    font-weight: bold;\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.tabs_headerEmpty {\n    color: #AAAAAA;\n}\n.tabs_title {\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.tabs_addTab {\n    padding-left: 9px;\n    padding-right: 9px;\n}\n.tabs_moreTabs {\n    padding-left: 11px;\n    padding-right: 11px;\n}\n.tabs_marked {\n    border-top: 3px solid #F7901e;\n}\n.tabs_addTab:hover, .tabs_moreTabs:hover {\n    color: white !important;\n    background-color: #346F8F !important;\n}\n.tabs_containers {\n    width: calc(100% - 2px);\n    height: auto;\n    border-left: solid 1px #64ADC2;\n    border-bottom: solid 1px #64ADC2;\n    border-right: solid 1px #64ADC2;\n    vertical-align: top;\n    overflow-y: auto;\n    overflow-x: auto;\n    background-color: #FFFFFF;\n}\n.tabs_container {\n    width: calc(100% - 42px);\n    border: none;\n    vertical-align: top;\n    background-color: #FFFFFF;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.tabs_sectionContainer {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n.tabs_sectionTitle {\n    height: 20px;\n    text-align: center;\n    vertical-align: middle;\n    font-weight: bold;\n    color: #666666;\n    background-color: #EBF0F3;\n    border: solid 1px #E1E1E1;\n}\n.tabs_sectionItemContainer {\n    width: 50%;\n}\n.tabs_sectionItemLabel {\n    display: inline-block;\n    width: 36%;\n    text-align: right;\n    vertical-align: top;\n    padding: 16px 0px 0px 0px;\n    font-weight: bold;\n}\n.tabs_sectionItemContent {\n    display: inline-block;\n    width: 64%;\n    text-align: left;\n    vertical-align: top;\n    padding: 16px 0px 0px 0px;\n}\n.tabs_sectionItemContent_div {\n    padding: 0px 8px 0px 8px;\n}\n.tabs_truncate {\n    max-width: 222px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.tabs_noTruncate {\n    max-width: 300px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.tabs_menuContainer {\n    position: absolute;\n    border: 1px solid #CCC;\n    background-color: white;\n    padding: 4px 4px;\n    width: 200px;\n    overflow: auto;\n}\n.tabs_menuItem {\n    cursor: pointer;\n    font-size: 12px;\n    padding: 4px 4px;\n    color: #346F8F;\n    background-color: white;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;               \n}\n.tabs_menuItem:hover {\n    background-color: #EAF0F4;\n    color: #346F8F\n}\n.tabs_menuItem_disabled {\n    cursor: default;\n    color: #C9C9C9;\n}\n.tabs_menuItem_disabled:hover {\n    background-color: white;\n    color: #C9C9C9;\n}\n.tabs_menuItem_marked {\n    border-left: 3px solid #F7901e;;\n}\n", ""]);

// exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Frame for Form Pages
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var FormPage = React.createClass({
  displayName: "FormPage",
  // styles
  formPageContainerStyle: {
    margin: 0,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    position: "relative",
    border: "1px solid #DAE0E3",
    minWidth: 1200
  },
  // styles
  // lifecycle event handlers
  render: function render() {
    return React.createElement("div", {
      style: this.formPageContainerStyle
    }, this.props.children);
  } // lifecycle event handlers

});
module.exports = FormPage;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var SecondaryButton = __webpack_require__(2);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);
/**
 * Component used for displaying a rudimentary spreadsheet like table where users can input data
 */


var InputTable = React.createClass({
  displayName: "InputTable",
  // styles
  tableStyle: {
    width: '100%',
    paddingBottom: 8,
    marginBottom: 16,
    display: 'inline-block',
    fontFamily: "verdana",
    fontSize: 12,
    borderBottom: "solid 1px #E1E1E1"
  },
  totalTableStyle: {
    width: '60%',
    marginBottom: 8,
    display: 'inline-block',
    fontFamily: "verdana",
    fontSize: 12,
    borderBottom: "solid 4px #E1E1E1",
    borderBottomStyle: "double",
    paddingLeft: 5
  },
  divStyle: {
    display: 'inline-block'
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The number of top rows where the delete row button is hidden.
     */
    requiredRows: React.PropTypes.number,

    /**
     * The maximum number of rows that can be added before the 'add row' button is disabled.
     */
    maximumRows: React.PropTypes.number,

    /**
     * The array of objects bound to the Input table.
     */
    data: React.PropTypes.array,

    /**
     * A function that is provided by the user of the component and is called when the Add Row button is clicked.
     * The expectation is that the user of the component will add an "empty" object to the bound data array which will in turn add another row to the table.
     */
    addRowEventHandler: React.PropTypes.func,

    /**
     * A function that is provided by the user of the component and is called when the delete button on a row is clicked.
     * The function is passed the row index, so that it can be removed from the bound data.
     */
    deleteRowEventHandler: React.PropTypes.func,

    /**
     * A function provided by the consumer of the component if they want to react to changes in the input columns.
     * The function is called by the component anytime a change is made in one of the input columns.
     * The function is passed in the row index, property name bound to the column and the updated value along with the original event.
     */
    changeEventHandler: React.PropTypes.func,

    /**
     * Set the prop value to an object that contains validation information about the input table individual inputs
     */
    validationOject: React.PropTypes.object
  },
  getInitialState: function getInitialState() {
    return {
      addRowCalled: false
    };
  },
  render: function render() {
    var _this = this;

    var data = this.props.data;

    var id = this.props.id || _.uniqueId("inputTable_");

    var addRowButtonText = this.props.addRowButtonText || "Add Row";
    /**
     * Function called when the delete row button is clicked.
     */

    var deleteRow = function deleteRow(rowIndex, event) {
      if (typeof _this.props.deleteRowEventHandler == "function") {
        _this.props.deleteRowEventHandler(rowIndex, event);
      }
    };

    var changeHandler = function changeHandler(dataIndex, propertyName, value, event) {
      if (typeof _this.props.changeEventHandler == "function") {
        _this.props.changeEventHandler(dataIndex, propertyName, value, event);
      }
    };

    var initialTabIndex = 0;

    if (isNaN(parseInt(this.props.tabIndex)) == false) {
      initialTabIndex = parseInt(this.props.tabIndex);
    }

    var counter = CounterStore.createNewCounter(id + "Counter", initialTabIndex); // loop over the rows in the rangeList and for each row
    // loop over the children of the RateTable component passing the data for each
    // row in the rangeList to each child component.

    var getRows = function getRows() {
      return data.map(function (item, index, arr) {
        var rowValidationObject = null;

        if (_this.props.validationOject) {
          rowValidationObject = _this.props.validationOject[index] || null;
        }

        return React.Children.map(_this.props.children, function (rowTemplate) {
          return React.cloneElement(rowTemplate, {
            data: item,
            key: index,
            dataIndex: index,
            tableId: id,
            requiredRows: _this.props.requiredRows,
            changeHandler: changeHandler,
            deleteRowEventHandler: deleteRow,
            counterName: id + "Counter",
            totalDataItems: data.length,
            addRowCalled: _this.state.addRowCalled,
            triggerValidation: _this.props.triggerValidation,
            rowValidationObject: rowValidationObject,
            noDataIndexThreshold: _this.props.noDataIndexThreshold
          });
        });
      });
    };

    var getTotalsColumns = function getTotalsColumns() {
      var tdStyle = {
        color: 'rgb(51, 51, 51)',
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
        paddingRight: '16px',
        paddingBottom: '10px',
        width: 112
      };
      var divStyle = {
        display: 'inline-block',
        position: 'relative'
      };
      var totalStyle = {
        fontWeight: 'bold'
      };
      var totalsText = _this.props.totalsText;

      var totalLabelColumnStyle = _.extend({}, tdStyle, {
        textAlign: 'left'
      });

      var otherColumnStyle = _.extend({}, tdStyle, {
        textAlign: 'right'
      });

      return _this.props.totalsData.map(function (item, index, arr) {
        var totalValue = item[_this.props.totalValuePropertyName];

        if (index == 0) {
          return React.createElement("td", {
            style: totalLabelColumnStyle
          }, React.createElement("div", {
            style: divStyle
          }, React.createElement("span", {
            style: totalStyle
          }, totalsText)));
        }

        if (item.showTotal) {
          return React.createElement("td", {
            style: otherColumnStyle
          }, React.createElement("div", {
            style: divStyle
          }, React.createElement("span", {
            style: totalStyle
          }, totalValue)));
        } else {
          return React.createElement("td", {
            style: otherColumnStyle
          }, React.createElement("div", {
            style: divStyle
          }));
        }
      });
    };

    var showTotals = function showTotals() {
      if (_this.props.showTotals) {
        var totalsId = _.unique("totalsTable_");

        return React.createElement("table", {
          id: totalsId,
          style: _this.totalTableStyle
        }, React.createElement("tr", null, getTotalsColumns()));
      } else {
        return null;
      }
    };
    /**
     * Function called when the Add Row button is clicked.
     */


    var addRow = function addRow(event) {
      _this.setState({
        addRowCalled: true
      }, function () {
        if (typeof _this.props.addRowEventHandler == "function") {
          _this.props.addRowEventHandler();
        }
      });
    };
    /**
     * Function that computes if the add row button is enabled or not.
     * Checks that the maximum rows allowed is more than the rows in the bound data
     * for the button to be enabled.
     */


    var isAddRowButtonEnabled = function isAddRowButtonEnabled() {
      var maximumAllowedRows = null;

      if (typeof _this.props.maximumRows == "number" && _this.props.maximumRows % 1 === 0 && _this.props.maximumRows > 0) {
        maximumAllowedRows = _this.props.maximumRows;
      }

      var dataRowCount = 0;

      if (Object.prototype.toString.call(_this.props.data) === "[object Array]") {
        dataRowCount = _this.props.data.length;
      }

      if (maximumAllowedRows != null && maximumAllowedRows > dataRowCount) {
        return true;
      }

      return false;
    };

    var getAddRowTabIndex = function getAddRowTabIndex() {
      if (isAddRowButtonEnabled() == true) {
        return initialTabIndex + 31; // 10 tiers is 31 tabs
      } else {
        return null;
      }
    };

    if (data) {
      var addRowStyle = {
        width: 126
      }; //Only in Quota Relationship case, Add Quota button should not be right aligned

      if (this.props.showTotals) {
        this.tableStyle.width = "60%";
        this.tableStyle.marginBottom = "8";
      } else {
        addRowStyle.textAlign = "right";
      }

      return React.createElement("div", {
        style: this.divStyle
      }, React.createElement("table", {
        id: id,
        style: this.tableStyle
      }, getRows()), showTotals(), React.createElement("div", {
        style: addRowStyle
      }, React.createElement(SecondaryButton, {
        id: "addRowButton",
        icon: "fa fa-plus-circle",
        enabled: isAddRowButtonEnabled(),
        text: addRowButtonText,
        clickHandler: addRow,
        tabIndex: getAddRowTabIndex()
      })));
    } else {
      return null;
    }
  } // lifecycle event handlers

});
module.exports = InputTable;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var CheckBox = __webpack_require__(9);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);

var ReactDOM = __webpack_require__(8);
/**
 * Sub component of InputTable that displays a text box inside the column of a data row.
 */


var InputTableCheckBoxColumn = React.createClass({
  displayName: "InputTableCheckBoxColumn",
  // styles
  // styles
  // custom methods
  handleChange: function handleChange(value, event) {
    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(this.props.dataIndex, this.props.valuePropertyName, value, event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The prop value is used to set the value prop of the CheckBox.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]),

    /**
     * The name of the property/attribute in the bound object used to get the value that is used to set the value prop of the CheckBox.
     */
    valuePropertyName: React.PropTypes.string,

    /**
     * Visually adds an orange vertical bar to the left side of the box. If the
     * required prop is present and has a value boolean value then it takes precedence
     * over the requiredPropertyName prop.
     */
    required: React.PropTypes.bool,

    /**
     * Visually adds an orange vertical bar to the left side of the box
     * based on the value returned by the requiredPropertyName of the bound object.
     */
    requiredPropertyName: React.PropTypes.string,

    /**
     * Disables the input CheckBox component. If the disabled
     * prop is present and has a boolean value then it takes precedence
     * over the disabledPropertyName prop.
     * A function that returns a boolean value can also be assigned to this prop.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
      */
    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),

    /**
     * Disables the input CheckBox component
     * based on the value returned by the disabledPropertyName of the bound object.
     */
    disabledPropertyName: React.PropTypes.string,

    /**
     * The maximum number of characters that can be entered in the control.
     */
    maxLength: React.PropTypes.number,

    /**
     * The width of the control in pixels.
     */
    width: React.PropTypes.number,

    /**
     *  Placeholder text to show in the text box.
     */
    placeholder: React.PropTypes.string,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
     */
    validator: React.PropTypes.func,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Property when set to true triggers the validation if the CheckBox has not had focus yet. This can be used
     * by a form to trigger a validation on the CheckBox without the CheckBox ever getting focus.
     */
    triggerValidation: React.PropTypes.bool,

    /**
     * Function called when there is a change in the value entered in the text box.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Name of the property that points to the function that validates the input.
     * It should return the message to display if the validation failed.
     */
    validatorPropertyName: React.PropTypes.string
  },
  mixins: [StyleMixins],
  render: function render() {
    var value = null;
    var isChecked = false;
    var autoFocus = false;

    if (this.props.value) {
      // value prop takes precedence over the valuePropertyName prop
      value = this.props.value;
    } else if (this.props.valuePropertyName) {
      value = this.props.data[this.props.valuePropertyName];
      isChecked = value;
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      // required prop takes precedence over the requiredPropertyName prop
      isRequired = this.props.required;
    } else if (this.props.requiredPropertyName) {
      isRequired = this.props.data[this.props.requiredPropertyName];
    }

    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (typeof this.props.disabled == "function") {
      isDisabled = this.props.disabled(this.props.dataIndex, this.props.valuePropertyName, this.props.value);
    } else if (this.props.disabledPropertyName) {
      isDisabled = this.props.data[this.props.disabledPropertyName];
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropertyName) {
      validator = this.props.data[this.props.validatorPropertyName];
    }

    if (validator) {
      // bind the dataIndex (row index) and valuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, this.props.valuePropertyName);
    }

    var id = this.props.id || _.uniqueId("inputTableCheckBoxColumn_");

    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (this.props.addRowCalled == true) {
      if (this.props.dataIndex == this.props.totalDataItems - 1) {
        // last row
        if (this.props.columnIndex == 1) {
          // first column
          autoFocus = true;
        }
      }
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[this.props.valuePropertyName] || null;
    }

    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(CheckBox, {
      id: id,
      defaultChecked: isChecked,
      value: value,
      tooltip: value,
      disabled: isDisabled,
      changeHandler: this.handleChange,
      type: "inputTableCheckBoxColumn",
      tabIndex: tabIndex
    }));
  } // lifecycle event handlers

});
module.exports = InputTableCheckBoxColumn;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Sub component inside the InputTable that displays a row of data
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var InputTableLabelColumn = __webpack_require__(55);

var InputTableRemoveRowButtonColumn = __webpack_require__(56);

var InputTableDataRow = React.createClass({
  displayName: "InputTableDataRow",
  // styles
  rowStyle: {
    backgroundColor: "#FFF"
  },
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    var requiredRows = 1; // default number of required rows

    if (typeof this.props.requiredRows == "number" && this.props.requiredRows > 1) {
      requiredRows = this.props.requiredRows;
    }

    var id = typeof this.props.dataIndex == "number" ? "inputTableDataRow" + this.props.dataIndex : _.uniqueId("inputTableDataRowId_");
    var data = this.props.data;
    var totalRows = this.props.totalDataItems;
    var totalTierRows = totalRows - 1; // minus threshold row

    var requiredTierRows = requiredRows - 1; // minus threshold row

    var renderColumns = function renderColumns() {
      // use the index to add a unique key to each element in the map, otherwise
      // react throws a warning about missing unique 'key' prop for each child
      // in an array or iterator
      var index = -1;
      var renderedColumns = React.Children.map(_this.props.children, function (child, childIndex, arr) {
        index++;
        return React.cloneElement(child, {
          id: "inputTableDataColumn" + _this.props.dataIndex.toString() + index.toString(),
          data: data,
          key: "inputTableDataColumn" + index.toString(),
          columnIndex: index,
          changeHandler: _this.props.changeHandler,
          dataIndex: _this.props.dataIndex,
          counterName: _this.props.counterName,
          addRowCalled: _this.props.addRowCalled,
          totalDataItems: _this.props.totalDataItems,
          triggerValidation: _this.props.triggerValidation,
          rowValidationObject: _this.props.rowValidationObject
        });
      }); // add column for "delete" button

      index++;

      if (_this.props.dataIndex == 0 && !_this.props.noDataIndexThreshold) {
        // threshold row does not get the delete row button
        renderedColumns.push(React.createElement(InputTableLabelColumn, {
          key: "inputTableDataColumn" + index.toString(),
          text: ""
        }));
      } else {
        if (totalTierRows <= requiredTierRows) {
          // rows cannot be deleted because they are required now
          renderedColumns.push(React.createElement(InputTableLabelColumn, {
            key: "inputTableDataColumn" + index.toString(),
            text: ""
          }));
        } else if (!_this.props.data['hideDeleteButton']) {
          renderedColumns.push(React.createElement(InputTableRemoveRowButtonColumn, {
            key: "inputTableDataColumn" + index.toString(),
            dataIndex: _this.props.dataIndex,
            removeRowButtonClickHandler: _this.props.deleteRowEventHandler
          }));
        }
      }

      return renderedColumns;
    };

    return React.createElement("tbody", null, React.createElement("tr", {
      id: id,
      style: this.rowStyle
    }, renderColumns()));
  } // lifecycle event handlers

});
module.exports = InputTableDataRow;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var DropDown = __webpack_require__(23);

var StyleMixins = __webpack_require__(3);

var CounterStore = __webpack_require__(14);
/**
 * DropDown component used in the column of the InputTable component.
 */


var InputTableDropDownColumn = React.createClass({
  displayName: "InputTableDropDownColumn",
  changeHandler: function changeHandler(value, event) {
    if (typeof this.props.changeHandler == "function") {
      // the propertyName attribute will be the dataPropName prop value
      this.props.changeHandler(this.props.dataIndex, this.props.dataPropName, value, event);
    }
  },
  propTypes: {
    /**
     * The text that is added an another option to the top of the option list. Example, if the caption is "Select", then it will be the first item in the list and have an empty value.
     */
    caption: React.PropTypes.string,

    /**
     * The name of the prop in the bound object whose value should be the caption.
     */
    captionPropName: React.PropTypes.string,

    /**
     * Property to enable or disable the radio button. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * Name of the property in the object whose value should be used for setting
     * the disabled state.
     */
    disabledPropName: React.PropTypes.string,

    /**
     * An array of objects that are bound to the drop down component.
     */
    dropDownData: React.PropTypes.array,

    /**
     * Name of the column in the object of the array bound to the InputTable
     * whose value is used to populate the drop down options.
     */
    dataPropName: React.PropTypes.string,

    /**
     * An array of objects to bind to the drop down options.
     */
    options: React.PropTypes.array,

    /**
     * The name of the prop from the bound data that points to the objects for the options.
     */
    optionsPropName: React.PropTypes.string,

    /**
     * Id of the component, if not specified a generated string is used.
     */
    id: React.PropTypes.string,

    /**
     * The name of the property in an object whose value is bound to the selectedValue prop.
     */
    selectedValuePropName: React.PropTypes.string,

    /**
     * The value that should be the selected option.
     */
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * The name of the property in the object whose value should be used for setting
     * the required state.
     */
    requiredPropName: React.PropTypes.string,

    /**
     * Size of the drop down component.
     * condition - use when the options in the drop down are 'if', 'and', 'or'
     * small - standard size of the drop down.
     * operator - use when the options in the drop down are 'equal to', 'not equal to' etc.
     * medium - larger size of the drop down component.
     */
    size: React.PropTypes.oneOf(["condition", "small", "operator", "medium"]),

    /**
     * The name of the prop in the object that will be displayed as the text for the option.
     * A function can also be passed in as the value of the prop in which case the function
     * will be called when rendering the text and the data item associated with the drop down
     * option will be passed in as an argument to the function. This is helpful when the string
     * to be displayed needs to be computed.
     */
    textPropName: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),

    /**
     * Pass in a function to this prop that validates the selected value.
     * The function is passed the selected item object as the argument.
     */
    validator: React.PropTypes.func,

    /**
     * The name of the property in the object whose value is used to bind to the value 
     * of the option in the drop down.
     */
    valuePropName: React.PropTypes.string
  },
  mixins: [StyleMixins],
  render: function render() {
    var id = this.props.id || _.uniqueId("inputTableDropDownColumn_");

    var size = this.props.size || "medium";
    /**
     * There are two ways to bind data to this component. The simpler way is to use the options
     * prop and pass in an array of 'options' - name value pairs that are bound to the list of options
     * in the dropdown. The other way is to pass in an object that contains all the props bound to the
     * object. See example below. The *propName props are used to get values out of this object.
     * {
            caption: "Select Make",
            initialSelectedValue: -1,
            options: this.getMakeOptions(),
            required: true,
            disabled: false
        }
     */

    var boundData = {},
        options = [];

    if (Array.isArray(this.props.options) === true) {
      options = this.props.options;
    } else if (typeof this.props.dataPropName === 'string') {
      boundData = this.props.data[this.props.dataPropName];
      options = boundData[this.props.optionsPropName];
    }

    var initialSelectedValue = null;

    if (this.props.selectedValue != null || this.props.selectedValue != undefined) {
      initialSelectedValue = this.props.selectedValue;
    } else if (typeof this.props.selectedValuePropName === 'string') {
      initialSelectedValue = boundData[this.props.selectedValuePropName];
    } // var initialSelectedValuePropertyName = this.props.initialSelectedValuePropertyName;
    // // check if initialSelectedValuePropertyName is a function, if it is execute it to get the property name string
    // if (typeof this.props.initialSelectedValuePropertyName == "function") {
    //     initialSelectedValuePropertyName = this.props.initialSelectedValuePropertyName(this.props.data);
    // }
    // if (this.props.initialSelectedValue) {
    //     // initialSelectedValue prop takes precedence over the initialSelectedValuePropertyName prop
    //     initialSelectedValue = this.props.initialSelectedValue;
    // } else {
    //     initialSelectedValue = this.props.data[initialSelectedValuePropertyName];
    // }


    var isDisabled = false;

    if (typeof this.props.disabled === 'boolean') {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (this.props.disabledPropName) {
      isDisabled = boundData[this.props.disabledPropName];
    }

    var isRequired = false;

    if (typeof this.props.required === 'boolean') {
      // required prop takes precedence over the requiredPropertyName prop
      isRequired = this.props.required;
    } else if (this.props.requiredPropName) {
      isRequired = boundData[this.props.requiredPropName];
    }

    var caption = null;

    if (typeof this.props.caption === 'string') {
      caption = this.props.caption;
    } else if (typeof this.props.captionPropName === 'string') {
      caption = boundData[this.props.captionPropName];
    }

    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (isDisabled == true) {
      tabIndex = null;
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropName) {
      validator = boundData[this.props.validatorPropName];
    }

    if (validator) {
      // bind the dataIndex (row index) and initialSelectedValuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, this.props.valuePropertyName);
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[this.props.valuePropertyName] || null;
    }

    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(DropDown, {
      id: id,
      disabled: isDisabled,
      size: size,
      required: isRequired,
      tabIndex: tabIndex,
      initialSelectedValue: initialSelectedValue,
      caption: caption,
      valuePropName: this.props.valuePropName,
      textPropName: this.props.textPropName,
      validationMessage: validationMessage,
      triggerValidation: triggerValidation,
      data: options,
      changeHandler: this.changeHandler,
      validator: validator
    }));
  }
});
module.exports = InputTableDropDownColumn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var EditableSelectBox = __webpack_require__(54);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);

var ReactDOM = __webpack_require__(8);
/**
 * Sub component of InputTable that displays an editable select box inside the column of a data row.
 */


var InputTableEditableSelectBoxColumn = React.createClass({
  displayName: "InputTableEditableSelectBoxColumn",
  // styles
  // styles
  // custom methods
  handleChange: function handleChange(value, event) {
    if (typeof this.props.changeHandler == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.changeHandler(this.props.dataIndex, propertyName, value, event);
    }
  },

  /**
   * Function called when the item selected from the overlay is removed.
   * Since the item is removed pass in null as the value
   */
  removeItem: function removeItem(item, evt) {
    if (typeof this.props.changeHandler == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.changeHandler(this.props.dataIndex, propertyName, null, evt);
    } // when the item is removed it should trigger validation


    if (typeof this.props.validator == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.validator(this.props.dataIndex, propertyName, null);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The prop value is used to set the value prop of the textbox.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]),

    /**
     * Set this prop value to either string or number to force the textbox to honor the text alignment.
     * Strings are left aligned and numbers are right aligned.
     */
    valueType: React.PropTypes.oneOf(["string", "number"]),

    /**
     * The name of the property/attribute in the bound object used to get the value that is used to set the value prop of the textbox.
     */
    valuePropertyName: React.PropTypes.string,

    /**
     * Visually adds an orange vertical bar to the left side of the box. If the 
     * required prop is present and has a value boolean value then it takes precedence
     * over the requiredPropertyName prop.
     */
    required: React.PropTypes.bool,

    /**
     * Visually adds an orange vertical bar to the left side of the box
     * based on the value returned by the requiredPropertyName of the bound object.
     */
    requiredPropertyName: React.PropTypes.string,

    /**
     * Disables the input textbox component. If the disabled
     * prop is present and has a boolean value then it takes precedence
     * over the disabledPropertyName prop.
     * A function that returns a boolean value can also be assigned to this prop.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
       */
    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),

    /**
     * Disables the input textbox component
     * based on the value returned by the disabledPropertyName of the bound object.
     */
    disabledPropertyName: React.PropTypes.string,

    /**
     * The maximum number of characters that can be entered in the control.
     */
    maxLength: React.PropTypes.number,

    /**
     * The width of the control in pixels.
     */
    width: React.PropTypes.number,

    /**
     *  Placeholder text to show in the text box.
     */
    placeholder: React.PropTypes.string,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
     */
    validator: React.PropTypes.func,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Property when set to true triggers the validation if the textbox has not had focus yet. This can be used 
     * by a form to trigger a validation on the textbox without the textbox ever getting focus.
     */
    triggerValidation: React.PropTypes.bool,

    /**
     * Function called when there is a change in the value entered in the text box.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Name of the property that points to the function that validates the input.
     * It should return the message to display if the validation failed.
     */
    validatorPropertyName: React.PropTypes.string,

    /**
     * The size of the component.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"])
  },
  mixins: [StyleMixins],
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    // get the new value prop value
    var newValuePropertyName = newProps.valuePropertyName;
    var newValue = null; // check if the value property name is a function, if it is execute it to get the property name string

    if (typeof newProps.valuePropertyName == "function") {
      newValuePropertyName = newProps.valuePropertyName(newProps.data);
    }

    if (newProps.value) {
      // value prop takes precedence over the valuePropertyName prop
      newValue = newProps.value;
    } else {
      newValue = newProps.data[newValuePropertyName];
    }

    if (this.state.value != newValue) {
      this.setState({
        value: newValue
      }, function () {
        _this.props.validator(_this.props.dataIndex, newValuePropertyName, newValue);
      });
    }
  },
  render: function render() {
    var value = null;
    var autoFocus = false;
    var valuePropertyName = this.props.valuePropertyName; // check if the value property name is a function, if it is execute it to get the property name string

    if (typeof this.props.valuePropertyName == "function") {
      valuePropertyName = this.props.valuePropertyName(this.props.data);
    }

    if (this.props.value) {
      // value prop takes precedence over the valuePropertyName prop
      value = this.props.value;
    } else {
      value = this.props.data[valuePropertyName];
    } // get edit mode


    var editMode = true;

    if (typeof this.props.editMode == "function") {
      editMode = this.props.editMode(this.props.data);
    } else {
      if (typeof this.props.editMode == "boolean") {
        editMode = this.props.editMode;
      }
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      // required prop takes precedence over the requiredPropertyName prop
      isRequired = this.props.required;
    } else if (this.props.requiredPropertyName) {
      isRequired = this.props.data[this.props.requiredPropertyName];
    }

    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (typeof this.props.disabled == "function") {
      isDisabled = this.props.disabled(this.props.dataIndex, this.props.valuePropertyName, this.props.value);
    } else if (this.props.disabledPropertyName) {
      isDisabled = this.props.data[this.props.disabledPropertyName];
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropertyName) {
      validator = this.props.data[this.props.validatorPropertyName];
    }

    if (validator) {
      // bind the dataIndex (row index) and valuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, valuePropertyName);
    }

    var id = this.props.id || _.uniqueId("inputTableEditableSelectBoxColumn_");

    var placeholder = this.props.placeholder || null;
    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (isDisabled == true) {
      tabIndex = null;
    }

    if (this.props.addRowCalled == true) {
      if (this.props.dataIndex == this.props.totalDataItems - 1) {
        // last row
        if (this.props.columnIndex == 1) {
          // first column
          autoFocus = true;
        }
      }
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[valuePropertyName] || null;
    }

    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(EditableSelectBox, {
      id: id,
      placeholder: placeholder,
      disabled: isDisabled,
      required: isRequired,
      tabIndex: tabIndex,
      value: value,
      type: "inputTableEditableSelectBoxColumn",
      selectHandler: this.props.selectHandler.bind(null, this.props.dataIndex),
      changeHandler: this.handleChange,
      editMode: editMode,
      validator: validator,
      validationMessage: validationMessage,
      title: value,
      valueType: this.props.valueType,
      triggerValidation: triggerValidation,
      removeItemEventHandler: this.removeItem,
      size: this.props.size
    }));
  } // lifecycle event handlers

});
module.exports = InputTableEditableSelectBoxColumn;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Represents the head row that shows column names in the InputTable component
 */
var React = __webpack_require__(0);

var TableHeadRow = __webpack_require__(12);

var InputTableHeadColumn = __webpack_require__(58);

var InputTableHeadRow = React.createClass({
  displayName: "InputTableHeadRow",
  // lifecycle event handlers
  render: function render() {
    var _this = this;

    var renderColumns = function renderColumns() {
      // use the index to add a unique key to each element in the map, otherwise
      // react throws a warning about missing unique 'key' prop for each child
      // in an array or iterator
      var index = -1;
      var renderedColumns = React.Children.map(_this.props.children, function (child) {
        index++;
        return React.cloneElement(child, {
          key: "inputTableHeadColumn" + index.toString()
        });
      }); // add another column for the "delete" button

      index++;
      renderedColumns.push(React.createElement(InputTableHeadColumn, {
        key: "inputTableHeadColumn" + index.toString(),
        columnName: ""
      }));
      return renderedColumns;
    };

    return React.createElement(TableHeadRow, {
      tableId: this.props.tableId,
      dataIndex: this.props.dataIndex
    }, renderColumns());
  } // lifecycle event handlers

});
module.exports = InputTableHeadRow;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var RadioButton = __webpack_require__(26);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);

var ReactDOM = __webpack_require__(8);
/**
 * Sub component of InputTable that displays a text box inside the column of a data row.
 */


var InputTableRadioButtonColumn = React.createClass({
  displayName: "InputTableRadioButtonColumn",
  // styles
  // styles
  // custom methods
  handleChange: function handleChange(value, event) {
    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(this.props.dataIndex, this.props.valuePropertyName, value, event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Text to display next to the radio button.
     */
    text: React.PropTypes.string,

    /**
     * ID for the component.
     */
    id: React.PropTypes.string,

    /**
     * Property to enable or disable the radio button.
     */
    disabled: React.PropTypes.bool,

    /**
     * The value associated with the radio button.
     */
    value: React.PropTypes.string,

    /**
     * Handler for the change event. The arguments passed into the handlers
     * are a boolean indicating whether the radio button was selected, a string
     * that represents the value of the radio button and the event object.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Tooltip to show on the radio button.
     */
    tooltip: React.PropTypes.string,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.number
  },
  mixins: [StyleMixins],
  render: function render() {
    var value = null;
    var isChecked = false;

    if (this.props.value) {
      // value prop takes precedence over the valuePropertyName prop
      value = this.props.value;
    } else if (this.props.valuePropertyName) {
      value = this.props.data[this.props.valuePropertyName];
      isChecked = value;
    } // var isRequired = false;
    // if (typeof this.props.required == "boolean") {
    //     // required prop takes precedence over the requiredPropertyName prop
    //     isRequired = this.props.required;
    // } else if (this.props.requiredPropertyName) {
    //     isRequired = this.props.data[this.props.requiredPropertyName];
    // }


    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (typeof this.props.disabled == "function") {
      isDisabled = this.props.disabled(this.props.dataIndex, this.props.valuePropertyName, this.props.value);
    } else if (this.props.disabledPropertyName) {
      isDisabled = this.props.data[this.props.disabledPropertyName];
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropertyName) {
      validator = this.props.data[this.props.validatorPropertyName];
    }

    if (validator) {
      // bind the dataIndex (row index) and valuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, this.props.valuePropertyName);
    }

    var id = this.props.id || _.uniqueId("inputTableRadioButtonColumn_");

    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (this.props.addRowCalled == true) {
      if (this.props.dataIndex == this.props.totalDataItems - 1) {
        // last row
        if (this.props.columnIndex == 1) {
          // first column
          autoFocus = true;
        }
      }
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[this.props.valuePropertyName] || null;
    }

    this.IncentStyles.inputTableDataColumnStyle.paddingLeft = 8;
    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(RadioButton, {
      id: id,
      value: value,
      checked: isChecked,
      tooltip: value,
      disabled: isDisabled,
      changeHandler: this.handleChange,
      type: "inputTableRadioButtonColumn",
      tabIndex: tabIndex,
      groupName: this.props.groupName
    }));
  } // lifecycle event handlers

});
module.exports = InputTableRadioButtonColumn;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Sub component of InputTable that displays a button inside the column of a data row.
 * @param {String} text Text to display on the button
 * @param {String} icon CSS class for icon. Example "fa fa-database" if using font-awesome
 * @param {Function} secondaryButtonEventHandler Event handler function when provided as a prop is called when the
 *                   secondary button is clicked. The row index is passed in as a parameter along with the event parameter.
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var StyleMixins = __webpack_require__(3);

var SecondaryButton = __webpack_require__(2);

var InputTableSecondaryButtonColumn = React.createClass({
  displayName: "InputTableSecondaryButtonColumn",
  // styles
  // styles
  // custom methods
  // custom methods
  // lifecycle event handlers
  mixins: [StyleMixins],
  render: function render() {
    var _this = this;

    /**
     * Function called when the secondary button is clicked
     */
    var clickEventHandler = function clickEventHandler(event) {
      if (typeof _this.props.secondaryButtonEventHandler == "function") {
        _this.props.secondaryButtonEventHandler(_this.props.dataIndex, event);
      }
    };

    var secondaryButtonId = this.props.id ? this.props.id + "_secondaryButton" : _.uniqueId("secondaryButton_");
    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(SecondaryButton, {
      id: secondaryButtonId,
      icon: this.props.icon,
      text: this.props.text,
      clickHandler: clickEventHandler
    }));
  } // lifecycle event handlers

});
module.exports = InputTableSecondaryButtonColumn;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var CheckBox = __webpack_require__(9);

var StyleMixins = __webpack_require__(3);

var CounterStore = __webpack_require__(14);

var _ = __webpack_require__(1);
/**
 * CheckBox component used in the column of the InputTable component.
 */


var InputTableShowHideCheckBoxColumn = React.createClass({
  displayName: "InputTableShowHideCheckBoxColumn",
  changeHandler: function changeHandler(value, event) {
    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(this.props.dataIndex, this.props.dataPropName, value, event);
    }
  },
  propTypes: {
    /**
     * ID for the component.
     */
    id: React.PropTypes.string,

    /**
     * Property to enable or disable the Checkbox button. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * Name of the property in the object whose value should be used for setting
     * the disabled state.
     */
    disabledPropName: React.PropTypes.string,

    /**
     * Property to show or hide the checkbox in a row. Defaults to false i.e checkbox will be hide.
     */
    showCheckBox: React.PropTypes.bool,

    /**
     * Name of the property in the object whose value should be used for setting
     * the show/hide state.
     */
    showPropName: React.PropTypes.string,

    /**
     * The text that will be associate with the checkbox.
     */
    caption: React.PropTypes.string,

    /**
     * The name of the prop in the bound object whose value should be the caption.
     */
    captionPropName: React.PropTypes.string,

    /**
     * Tooltip to show on the checkbox.Default to caption value.
     */
    tooltip: React.PropTypes.string,

    /**
     * The value to associate with the checkbox.
     */
    value: React.PropTypes.string,

    /**
     * The name of the prop in the bound object whose value should be the value of checkbox.
     */
    selectedValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * Handler for the change event. The handler is passed in a boolean argument indicating whether the checkbox was checked or unchecked.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Name of the column in the object of the array bound to the InputTable
     * whose value is used to populate the drop down options.
     */
    dataPropName: React.PropTypes.string,

    /**
     * The name of the property in the object whose value is used to bind to the value 
     * of the option in the drop down.
    */
    valuePropName: React.PropTypes.string
  },
  mixins: [StyleMixins],
  render: function render() {
    var id = this.props.id || _.uniqueId("inputTableCheckBoxColumn_");

    var boundData = {},
        value;

    if (typeof this.props.value === 'string') {
      value = this.props.value;
    } else if (typeof this.props.dataPropName === 'string') {
      boundData = this.props.data[this.props.dataPropName];
      value = boundData[this.props.valuePropName];
    }

    var isDisabled = false;

    if (typeof this.props.disabled === 'boolean') {
      // disabled prop takes precedence over the disabledPropName prop
      isDisabled = this.props.disabled;
    } else if (this.props.disabledPropName) {
      isDisabled = boundData[this.props.disabledPropName];
    }

    var showCheckBox = true;

    if (typeof this.props.showCheckBox === 'boolean') {
      // showCheckBox prop takes precedence over the showPropName prop
      showCheckBox = this.props.showCheckBox;
    } else if (this.props.showPropName) {
      showCheckBox = boundData[this.props.showPropName];
    }

    var caption = null;

    if (typeof this.props.caption === 'string') {
      caption = this.props.caption;
    } else if (typeof this.props.captionPropName === 'string') {
      caption = boundData[this.props.captionPropName];
    }

    var initialSelectedValue = false;

    if (this.props.selectedValue != null || this.props.selectedValue != undefined) {
      initialSelectedValue = this.props.selectedValue;
    } else if (typeof this.props.selectedValuePropName === 'string') {
      initialSelectedValue = boundData[this.props.selectedValuePropName];
    }

    var tooltip = caption;

    if (typeof this.props.tooltip === 'string') {
      tooltip = this.props.tooltip;
    } //show checkbox in a row as per the showCheckBox true / false


    if (showCheckBox) {
      //Make Checkbox centrally aligned with padding top
      var checkBoxStyle = _.clone(this.IncentStyles.inputTableDataColumnStyle);

      checkBoxStyle.paddingTop = 4;
      return React.createElement("td", {
        style: checkBoxStyle
      }, React.createElement(CheckBox, {
        id: id,
        disabled: isDisabled,
        text: caption,
        value: value,
        defaultChecked: initialSelectedValue,
        tooltip: tooltip,
        changeHandler: this.changeHandler
      }));
    } else {
      return null;
    }
  }
});
module.exports = InputTableShowHideCheckBoxColumn;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var SingleSelectBox = __webpack_require__(59);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);

var ReactDOM = __webpack_require__(8);
/**
 * Sub component of InputTable that displays a select box inside the column of a data row.
 */


var InputTableSingleSelectBoxColumn = React.createClass({
  displayName: "InputTableSingleSelectBoxColumn",
  // styles
  // styles
  // custom methods
  handleChange: function handleChange(value, event) {
    if (typeof this.props.changeHandler == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.changeHandler(this.props.dataIndex, propertyName, value, event);
    }
  },

  /**
   * Function called when the item selected from the overlay is removed.
   * Since the item is removed pass in null as the value
   */
  removeItem: function removeItem(item, evt) {
    if (typeof this.props.changeHandler == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.changeHandler(this.props.dataIndex, propertyName, null, evt);
    } // when the item is removed it should trigger validation


    if (typeof this.props.validator == "function") {
      // check if the valuePropertyName is a function, if it is then execute it to get the property name string
      var propertyName = this.props.valuePropertyName;

      if (typeof this.props.valuePropertyName == "function") {
        propertyName = this.props.valuePropertyName(this.props.data);
      }

      this.props.validator(this.props.dataIndex, propertyName, null);
    }
  },
  // selectHandler () {
  //     if (typeof this.props.selectHandler == "function") {
  //         this.props.selectHandler(event);
  //     }
  // },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * Id for the control. If the prop is not supplied a unique identifier is created.
     */
    id: React.PropTypes.string,

    /**
     * Item that has been selected in the associated overlay.
     */
    selectedItem: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),

    /**
     * Function called when the ellipsis button of the SelectBox component is clicked.
     */
    selectHandler: React.PropTypes.func,

    /**
     * The name of the property of the selected object to be used for display in the tooltip and the large type of the component.
     * If this prop is not declared then the component will check if the selected item is a string or a number and display that else it will not be displayed.
     */
    itemDisplayPropName: React.PropTypes.string,

    /**
     * The placeholder search text for the component.
     */
    placeholder: React.PropTypes.string,

    /**
     * The size of the component. The value 'small' is used for placement inside the side bar and the value 'large' is used for a form.
     * The width prop will override the size prop.
     */
    size: React.PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * The width of the component (text box part) in pixels.
     */
    width: React.PropTypes.number,

    /**
     * If prop value is true gives a visual indicator indicating to the user that this is a required field.
     * Defaults to false.
     */
    required: React.PropTypes.bool,

    /**
     * Control will be disabled when this value is true. Defaults to false.
     */
    disabled: React.PropTypes.bool,

    /**
     * The validation message to show under the component.
     */
    validationMessage: React.PropTypes.string,

    /**
     * Function called when the component loses focus. The function is passed in the selectedItem argument.
     */
    validator: React.PropTypes.func,

    /**
     * Event handler called when the lost focus event is triggered.
     */
    focusLostHandler: React.PropTypes.func,

    /**
     * Event handler called when the selected item is removed. The removed item and the event are
     * passed in as arguments.
     */
    selectedItemRemovedHandler: React.PropTypes.func,

    /**
     * Determines the focusable order of the element in the navigation.
     */
    tabIndex: React.PropTypes.number
  },
  mixins: [StyleMixins],
  getInitialState: function getInitialState() {
    return {
      value: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    // get the new value prop value
    var newValuePropertyName = newProps.valuePropertyName;
    var newValue = null; // check if the value property name is a function, if it is execute it to get the property name string

    if (typeof newProps.valuePropertyName == "function") {
      newValuePropertyName = newProps.valuePropertyName(newProps.data);
    }

    if (newProps.value) {
      // value prop takes precedence over the valuePropertyName prop
      newValue = newProps.value;
    } else {
      newValue = newProps.data[newValuePropertyName];
    }

    if (this.state.value != newValue) {
      this.setState({
        value: newValue
      }, function () {
        _this.props.validator(_this.props.dataIndex, newValuePropertyName, newValue);
      });
    }
  },
  render: function render() {
    var value = null;
    var autoFocus = false;
    var valuePropertyName = this.props.valuePropertyName; // check if the value property name is a function, if it is execute it to get the property name string

    if (typeof this.props.valuePropertyName == "function") {
      valuePropertyName = this.props.valuePropertyName(this.props.data);
    }

    if (this.props.value) {
      // value prop takes precedence over the valuePropertyName prop
      value = this.props.value;
    } else {
      value = this.props.data[valuePropertyName];
    } // get edit mode


    var editMode = true;

    if (typeof this.props.editMode == "function") {
      editMode = this.props.editMode(this.props.data);
    } else {
      if (typeof this.props.editMode == "boolean") {
        editMode = this.props.editMode;
      }
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      // required prop takes precedence over the requiredPropertyName prop
      isRequired = this.props.required;
    } else if (this.props.requiredPropertyName) {
      isRequired = this.props.data[this.props.requiredPropertyName];
    }

    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (typeof this.props.disabled == "function") {
      isDisabled = this.props.disabled(this.props.dataIndex, this.props.valuePropertyName, this.props.value);
    } else if (this.props.disabledPropertyName) {
      isDisabled = this.props.data[this.props.disabledPropertyName];
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropertyName) {
      validator = this.props.data[this.props.validatorPropertyName];
    }

    if (validator) {
      // bind the dataIndex (row index) and valuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, valuePropertyName);
    }

    var id = this.props.id || _.uniqueId("inputTableSelectBoxColumn_");

    var placeholder = this.props.placeholder || null;
    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (isDisabled == true) {
      tabIndex = null;
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[valuePropertyName] || null;
    } // var removeItem = (event) => {
    //     var removedItem = this.state.selectedItem;
    //     this.setState({
    //         selectedItem: null
    //     }, () => {
    //         if (typeof this.props.selectedItemRemovedHandler == "function") {
    //             this.props.selectedItemRemovedHandler(removedItem, event);
    //         }
    //     });
    // };


    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(SingleSelectBox, {
      id: id,
      placeholder: placeholder,
      disabled: isDisabled,
      required: isRequired,
      tabIndex: tabIndex,
      value: value,
      size: this.props.size,
      type: "inputTableSingleSelectBoxColumn",
      selectHandler: this.props.selectHandler.bind(null, this.props.dataIndex),
      validator: validator,
      validationMessage: validationMessage,
      title: value,
      valueType: this.props.valueType,
      selectedItemRemovedHandler: this.removedItem,
      triggerValidation: triggerValidation
    }));
  } // lifecycle event handlers

});
module.exports = InputTableSingleSelectBoxColumn;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var TextBox = __webpack_require__(5);

var _ = __webpack_require__(1);

var CounterStore = __webpack_require__(14);

var ReactDOM = __webpack_require__(8);
/**
 * Sub component of InputTable that displays a text box inside the column of a data row.
 */


var InputTableTextBoxColumn = React.createClass({
  displayName: "InputTableTextBoxColumn",
  // styles
  // styles
  // custom methods
  handleChange: function handleChange(value, event) {
    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(this.props.dataIndex, this.props.valuePropertyName, value, event);
    }
  },
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The prop value is used to set the value prop of the textbox.
     */
    value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]),

    /**
     * The name of the property/attribute in the bound object used to get the value that is used to set the value prop of the textbox.
     */
    valuePropertyName: React.PropTypes.string,

    /**
     * Visually adds an orange vertical bar to the left side of the box. If the
     * required prop is present and has a value boolean value then it takes precedence
     * over the requiredPropertyName prop.
     */
    required: React.PropTypes.bool,

    /**
     * Visually adds an orange vertical bar to the left side of the box
     * based on the value returned by the requiredPropertyName of the bound object.
     */
    requiredPropertyName: React.PropTypes.string,

    /**
     * Disables the input textbox component. If the disabled
     * prop is present and has a boolean value then it takes precedence
     * over the disabledPropertyName prop.
     * A function that returns a boolean value can also be assigned to this prop.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
      */
    disabled: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.func]),

    /**
     * Disables the input textbox component
     * based on the value returned by the disabledPropertyName of the bound object.
     */
    disabledPropertyName: React.PropTypes.string,

    /**
     * The maximum number of characters that can be entered in the control.
     */
    maxLength: React.PropTypes.number,

    /**
     * The width of the control in pixels.
     */
    width: React.PropTypes.number,

    /**
     *  Placeholder text to show in the text box.
     */
    placeholder: React.PropTypes.string,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     * Parameters:
     * rowIndex - number - The index of the row in which the value changed.
     * valuePropertyName - string - The name of the key in the object whose value is bound to the text box.
     * value - string - The value entered in the text box.
     */
    validator: React.PropTypes.func,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Property when set to true triggers the validation if the textbox has not had focus yet. This can be used
     * by a form to trigger a validation on the textbox without the textbox ever getting focus.
     */
    triggerValidation: React.PropTypes.bool,

    /**
     * Function called when there is a change in the value entered in the text box.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Name of the property that points to the function that validates the input.
     * It should return the message to display if the validation failed.
     */
    validatorPropertyName: React.PropTypes.string
  },
  mixins: [StyleMixins],
  render: function render() {
    var value = null;
    var autoFocus = false;

    if (this.props.value) {
      // value prop takes precedence over the valuePropertyName prop
      value = this.props.value;
    } else if (this.props.valuePropertyName) {
      value = this.props.data[this.props.valuePropertyName];
    }

    var isRequired = false;

    if (typeof this.props.required == "boolean") {
      // required prop takes precedence over the requiredPropertyName prop
      isRequired = this.props.required;
    } else if (this.props.requiredPropertyName) {
      isRequired = this.props.data[this.props.requiredPropertyName];
    }

    var isDisabled = false;

    if (typeof this.props.disabled == "boolean") {
      // disabled prop takes precedence over the disabledPropertyName prop
      isDisabled = this.props.disabled;
    } else if (typeof this.props.disabled == "function") {
      isDisabled = this.props.disabled(this.props.dataIndex, this.props.valuePropertyName, this.props.value);
    } else if (this.props.disabledPropertyName) {
      isDisabled = this.props.data[this.props.disabledPropertyName];
    }

    var validator = null;

    if (this.props.validator) {
      // validator prop takes precedence over the validatorPropertyName prop
      validator = this.props.validator;
    } else if (this.props.validatorPropertyName) {
      validator = this.props.data[this.props.validatorPropertyName];
    }

    if (validator) {
      // bind the dataIndex (row index) and valuePropertyName prop value to the validator function.
      // This is useful if the validation function needs to know which key value it is validating.
      validator = validator.bind(null, this.props.dataIndex, this.props.valuePropertyName);
    }

    var id = this.props.id || _.uniqueId("inputTableTextBoxColumn_");

    var tabIndex = 0;
    var counter = CounterStore.getCounterByName(this.props.counterName);

    if (counter) {
      tabIndex = counter.getNextValue();
    }

    if (this.props.addRowCalled == true) {
      if (this.props.dataIndex == this.props.totalDataItems - 1) {
        // last row
        if (this.props.columnIndex == 1) {
          // first column
          autoFocus = true;
        }
      }
    }

    var triggerValidation = false;

    if (typeof this.props.triggerValidation == "boolean") {
      triggerValidation = this.props.triggerValidation;
    }

    var validationMessage = null;

    if (this.props.rowValidationObject) {
      validationMessage = this.props.rowValidationObject[this.props.valuePropertyName] || null;
    }

    var valueType = this.props.valueType ? this.props.valueType : "number";
    return React.createElement("td", {
      style: this.IncentStyles.inputTableDataColumnStyle
    }, React.createElement(TextBox, {
      id: id,
      value: value,
      placeholder: this.props.placeholder,
      autoFocus: autoFocus,
      valueType: valueType,
      required: isRequired,
      maxLength: this.props.maxLength,
      size: "small",
      triggerValidation: triggerValidation,
      disabled: isDisabled,
      changeHandler: this.handleChange,
      type: "inputTableTextBoxColumn",
      tabIndex: tabIndex,
      validator: validator,
      validationEventHandler: this.props.validationEventHandler,
      validationMessage: validationMessage
    }));
  } // lifecycle event handlers

});
module.exports = InputTableTextBoxColumn;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * The line chart component displays a line graph.
 * @param {Number} height
 * @param {Number} width
 * @param {Array} data
 * @param {String} xAxisValuePropertyName
 * @param {String} yAxisValuePropertyName
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var LineChart = React.createClass({
  displayName: "LineChart",
  // styles
  containerStyle: {
    width: 200,
    height: 200,
    border: "1px solid #ccc" // remove this when the component is done

  },
  // styles
  // custom properties
  // custom properties
  // custom methods
  // custom methods
  // lifecycle event handlers
  render: function render() {
    return null;
  } // lifecycle event handlers

});
module.exports = LineChart;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./MultiSelect.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./MultiSelect.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".multiSelect-selectStyle {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n    margin-bottom: 0px;\n    height: 290px;\n    font-family: verdana;\n    font-size: 12px;\n    outline: none;\n    box-shadow: none;\n    width: 508px;\n    border: 1px solid #E1E1E1;\n}\n\n.multiSelect-optionStyle {\n    font-family: verdana;\n    font-size: 11px;\n    color: #333333;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/*\nThe following classes work for changing the background-color of the selected option\nbut it does not change the font color of the selected option. It stays white.\nhttps://www.speich.net/articles/en/2014/01/23/css-trick-setting-background-color-of-a-selected-html-option-element/\nhttp://www.patternify.com/\n\n.multiSelect-optionStyle:checked {\n    color: #333333;\n    font-weight: bold;\n    background: #E9F2F5 repeat url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAYSURBVBhXY3z56et/BjTABKVRAEWCDAwAiMQD2dbjnaUAAAAASUVORK5CYII=');\n}\n\n.multiSelect-optionStyle:hover {\n    color: #333333;\n    background: #E9F2F5 repeat url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAYSURBVBhXY3z56et/BjTABKVRAEWCDAwAiMQD2dbjnaUAAAAASUVORK5CYII=');\n}\n*/\n\n.multiSelect-selectedOptionStyle {\n    font-family: verdana;\n    font-size: 11px;\n    color: #333333;\n    font-weight: bold;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.multiSelect-validationMessageStyle {\n    font-family: verdana;\n    font-style: italic;\n    font-size: 10px;\n    color: #F76321;\n    display: block;\n    margin-top: 4px;\n    height: 16px;\n    position: absolute\n}\n\n.multiSelect-titleStyle {\n    font-size: 12px;\n    font-weight: bold;\n    color: #333333;\n    background-color: #EEF3F6;\n    border-bottom: 1px solid #E1E1E1;\n    height: 28px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.multiSelect-selStyle {\n    background-color: white;\n    border: none;\n    width: 100%;\n    padding-top: 8px;\n    overflow-y: auto;\n    height: calc(100% - 50px) !important;\n    outline: none !important;\n}\n\n.multiSelect-selContainer {\n    background-color: white;\n    border: none;\n    width: 100%;\n    height: calc(100% - 29px) !important;\n}\n\n.multiSelect-searchButtonContainerStyle {\n    width: 28px;\n    height: 26px;\n    font-size: 14px;\n    text-shadow: rgb(255, 255, 255) 0px 1px 0px;\n    color: #E7E7E7;\n    cursor: pointer;\n    border-radius: 2px 2px 2px 2px;\n    position: absolute;\n    z-index: 1;\n    padding-left: 15px;\n    padding-top: 13px;\n};\n\n.multiSelect-selectionButtonsContainer {\n    padding-left: 18px;\n    padding-right: 18px;\n    height: 290px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.multiSelect-selectButtonContainer {\n    padding-top: 3px;\n    padding-bottom: 3px;\n}\n\n.multiSelect-inputContainerStyle {\n    height: auto;\n    width: 100%;\n    background-color: rgb(255, 255, 255);\n    float: left;\n    position: relative;\n}\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tpadding-bottom: 12px !important;\n\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This is a component that renders a standard list page with sidebar and search results table, given a set of configuration data.  It includes all the rendering and processing logic, including
 *   searching, filtering, pagination, sorting, auto-generated select popups and assoicated logic, multi-select for popups, row expansion, and master/detail row support.
 *
 *
 * For a select box popup list page, you need to include inherited properties in addtion to the normal configuration properties like this:
 *      <ListPageBuilder {...yourPageConfig} {...this.props} />
 *   so any additional custom properties can be propogated to the builder.
 *
 */
var _ = __webpack_require__(30);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(8);

var update = __webpack_require__(134);

var styled = __webpack_require__(28).default;

var ListPage = __webpack_require__(34);

var PageHeader = __webpack_require__(37);

var PageBody = __webpack_require__(38);

var SideBar = __webpack_require__(61);

var ListPane = __webpack_require__(35);

var PrimaryButton = __webpack_require__(10);

var SecondaryButton = __webpack_require__(2);

var SideBarButtonContainer = __webpack_require__(62);

var SideBarPrimaryButton = __webpack_require__(63);

var SideBarPrimaryButtonMenu = __webpack_require__(64);

var SideBarSecondaryButton = __webpack_require__(66);

var SideBarSecondaryButtonMenu = __webpack_require__(67);

var SideBarFilterContainer = __webpack_require__(68);

var SideBarFilterSubContainer = __webpack_require__(69);

var SearchBox = __webpack_require__(70);

var CheckBox = __webpack_require__(9);

var CheckBoxGroup = __webpack_require__(43);

var RadioButton = __webpack_require__(26);

var RadioButtonGroup = __webpack_require__(39);

var DropDown = __webpack_require__(23);

var SideBarDropDown = __webpack_require__(71); //const DropDown = require("xactly-core-components/dist/commonjs/components/DropDown/index").default;
//const ButtonMenu = require("xactly-core-components").ButtonMenu;


var SelectBox = __webpack_require__(72);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableMasterRow = __webpack_require__(73);

var TableTextColumn = __webpack_require__(13);

var TableCheckboxColumn = __webpack_require__(74);

var TableDetailRows = __webpack_require__(75);

var TableRowColumns = __webpack_require__(76);

var TableDetailRowColumns = __webpack_require__(77);

var TableExpandableRow = __webpack_require__(78);

var TableExpandableRowContent = __webpack_require__(79);

var AbstractTableColumn = __webpack_require__(15);

var _require = __webpack_require__(11),
    SortOrder = _require.SortOrder;

var _require2 = __webpack_require__(49),
    SideBarButtonType = _require2.SideBarButtonType,
    ActionButtonType = _require2.ActionButtonType,
    FilterType = _require2.FilterType,
    SelectType = _require2.SelectType;

var ActionButtons = __webpack_require__(41);

var ActionButton = __webpack_require__(27);

var ResultsPaginationHeader = __webpack_require__(80);

var ModalDialog = __webpack_require__(36);

var HelpDialog = __webpack_require__(31);

var SideBarButtonIcons = new Array();
SideBarButtonIcons[SideBarButtonType.CREATE] = 'fa fa-plus-circle fa-lg'; // This gets overwritten in SideBarPrimaryButton

SideBarButtonIcons[SideBarButtonType.DOWNLOAD] = 'fa fa-download fa-lg';
SideBarButtonIcons[SideBarButtonType.UPLOAD] = 'fa fa-upload fa-lg';
SideBarButtonIcons[SideBarButtonType.BUTTON_MENU] = 'fa fa-caret-down';
var ActionButtonIcons = new Array();
ActionButtonIcons[ActionButtonType.VIEW] = 'fa fa-eye';
ActionButtonIcons[ActionButtonType.EDIT] = 'fa fa-pencil-square-o';
ActionButtonIcons[ActionButtonType.DELETE] = 'fa fa-trash-o';
ActionButtonIcons[ActionButtonType.ADD] = 'fa fa-plus-square-o';
ActionButtonIcons[ActionButtonType.COPY] = 'fa fa-copy';
ActionButtonIcons[ActionButtonType.DOWNLOAD] = 'fa fa-download';
ActionButtonIcons[ActionButtonType.RECALL] = 'fa fa-arrow-left';
var ActionButtonLabels = new Array();
ActionButtonLabels[ActionButtonType.VIEW] = 'view';
ActionButtonLabels[ActionButtonType.EDIT] = 'edit';
ActionButtonLabels[ActionButtonType.DELETE] = 'delete';
ActionButtonLabels[ActionButtonType.ADD] = 'add';
ActionButtonLabels[ActionButtonType.COPY] = 'copy';
ActionButtonLabels[ActionButtonType.DOWNLOAD] = 'download';
ActionButtonLabels[ActionButtonType.RECALL] = 'recall'; // Default labels if caller does not pass in the label function

var labels = new Array();
labels.cancel = "Cancel";
labels.apply = "Apply";
labels.search = "Search";
labels.clear = "Clear";
labels.filters = "Filters";
labels.select = "Select";
labels.allResults = "All Results";
labels.view = "View";
labels.edit = "Edit";
labels.delete = "Delete";
labels.add = "Add";
labels.copy = "Copy";
labels.download = "Download";
labels.upload = "Upload";
labels.searchBoxPlaceholderText = "Enter Search Text";
var ListPageBuilder = React.createClass({
  displayName: "ListPageBuilder",
  propTypes: {
    /**
     * i18n title of this list page
     */
    title: React.PropTypes.string.isRequired,

    /**
     * If title of results requires to get toggled then
     * this flag can be used, flag is currently swithcing between 
     * allResults to searchResults only
     */
    showSearchTitle: React.PropTypes.bool,

    /**
     * Providing unique id for pagination header
     */
    containerId: React.PropTypes.string,

    /**
     * Providing unique id for search box
     */
    searchBoxId: React.PropTypes.string,

    /**
     * If an object is supplied, then a member function called "get" (e.g. in i18n.get) will be called with (namespace, key), which will returns a localized label for key.
     * If an array is supplied, then it is assumed to be an associative array with an entry defined for each localizable label.
     */
    labelModule: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),

    /**
     * i18n name space for label translation
     */
    namespace: React.PropTypes.string,

    /**
     * Are we read only?, default: false
     */
    readonly: React.PropTypes.bool,

    /**
     * Show this list page or not. Useful for managing multiple tabs of list pages. default: true
     */
    show: React.PropTypes.bool,

    /*
    * Render a banner component on the top of the list to draw attention upon landing
    */
    banner: React.PropTypes.element,

    /**
     * If true then the calling component will provide the page header.  This can be used to provide tertiary menu support.
     */
    useExternalPageHeader: React.PropTypes.bool,

    /**
     * If false then no side bar will be shown. Default is true.
     */
    hasSideBar: React.PropTypes.bool,

    /**
     * If true the listPane height will be adjusted. Default is false.
     */
    hasPageFooter: React.PropTypes.bool,

    /**
     * If true do not show the results and count on the pagination row
     */
    hideResults: React.PropTypes.bool,

    /**
     * If supplied, will override the side bar filters component
     */
    externalFilters: React.PropTypes.element,

    /**
     * Is this a popup for the select box? (will be set for you if used as a select box popup inside the builder), default: false
     */
    isPopup: React.PropTypes.bool,

    /**
     * i18n text for the apply button if this is a popup, default is 'select'
     */
    applyText: React.PropTypes.string,

    /**
     * Sets the selection type for the lists in a popup.
     * Default is SINGLE_SELECT.
     */
    selectType: React.PropTypes.oneOf(["NO_SELECT", "SINGLE_SELECT", "MULTI_SELECT"]),

    /**
     * Show All/Selected radio buttons? (you'll normally set this only for a popup filter with multi-select), default: false
     */
    showSelectedFilter: React.PropTypes.bool,

    /**
     * The pre-selected items for a multi-select list
     */
    selectedItems: React.PropTypes.array,

    /**
     * For multi-select list, the handler to call if selections has changed
     */
    selectedItemsChangeHandler: React.PropTypes.func,

    /**
     * Show/hide the cancel button for popups, default: false
     */
    hideCancel: React.PropTypes.bool,

    /**
     * A callback that the builder will call when the list API cannot be completed due to a server error
     * Will not be called if loadItemListMethod is passed in.
     */
    errorHandler: React.PropTypes.func,

    /**
     * A callback that the builder will call when the cancel button is clicked (required for popup)
     */
    cancelDialogHandler: React.PropTypes.func,

    /**
     * A callback that the builder will call when the apply button is clicked, the selected items will be pass back as an array (required for popup)
     */
    applyDialogHandler: React.PropTypes.func,

    /**
     *  If is string, then it is considered to be a rest api entry point url where the builder will call to retrieve the list whenever it needs to refresh itselves;
     *     to utilized this feature, your api needs to adhere to the following criteria:
     *     1) the 5 pre-defined properties are accepted as parameters
     *        offset,
     *        limit,
     *        sortBy,
     *        sortOrder,
     *        searchText
     *     2) any additional parameters are accepted as filterName=filterValue pairs
     *     3) the returned json structures should include
     *        a) items: array of rows to be displayed
     *        b) totalCount: count of all rows that meets the current filter criteria (not just the current row)
     *  If is function then a callback you provide that is called with 2 paramsters:
     *     1) params: an object that contains all the current values of all filters present in the page, including the following 5 pre-defined properties
     *        offset,
     *        limit,
     *        sortBy,
     *        sortOrder
     *        filters.searchText,
     *        and user-supplied filters in {name, value} format. In case of a multi-select popup or checkbox, value will be an array of selected Ids, or null is nothing is selected.
     *     2) successResultFunc: a builder callback for you to return the list of items and total item count. (most likely after calling a web API)
     */
    loadItemListMethod: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),

    /** Set to your rest api entry point if your api needs a seperate call to get the total count and it has slighly different parameter names as follows
     *     offset,
     *     limit,
     *     sortfield
     *     order,
     *     searchtext,
     *     searchfield
     *  For count, the builder will make a seperate call to the the url {webcontext}/api/loadItemListMethod_v2}/count (pagination and sorting params will not be passed)
     */
    loadItemListMethod_v2: React.PropTypes.string,

    /**
     * Primary button (e.g. Create) for this list page
     */
    primaryButton: React.PropTypes.shape({
      /**
       * id for the button
       */
      id: React.PropTypes.string,

      /**
       * One of the pre-defined types from SideBarButtonType
       */
      type: React.PropTypes.string,

      /**
       * If true, a popup menu shows when button is clicked. Used when multiple choices are available when clicking on the button , e.g., download to differnt formats.
       */
      hasPopupMenu: React.PropTypes.bool,

      /**
       * An array defining the line items in the popup menu
       */
      menuItems: React.PropTypes.array,

      /**
       *  Name of the i18n text key in the data array
       */
      textPropName: React.PropTypes.string,

      /**
       *  Name of the value key in the data array
       */
      valuePropName: React.PropTypes.string,

      /**
       * Font Awesome icon name; will be set for you if you supply one of the SideBarButtonType for the type field above
       */
      icon: React.PropTypes.string,

      /**
       * i18n label for the button
       */
      text: React.PropTypes.string.isRequired,

      /**
       * Help text for the button (to be displayed when help icon is hovered-over)
       */
      helpText: React.PropTypes.string,

      /**
       * Default is true; set to false if read only
       */
      enabled: React.PropTypes.bool,

      /**
       * Function to call when user clicks
       */
      clickHandler: React.PropTypes.func
    }),

    /**
     * Secondary buttons (e.g. uplaod, download) for this list page
     */
    secondaryButtons: React.PropTypes.arrayOf(React.PropTypes.shape({
      /**
       * id for the button
       */
      id: React.PropTypes.string,

      /**
       * Proviude a name to aid in testing and QA automation
       */
      name: React.PropTypes.string,

      /**
       * One of the pre-defined types from SideBarButtonType
       */
      type: React.PropTypes.string,

      /**
       * If true, a popup menu shows when button is clicked. Used when multiple choices are available when clicking on the button.
       */
      hasPopupMenu: React.PropTypes.bool,

      /**
       * An array defining the line items in the popup menu
       */
      menuItems: React.PropTypes.array,

      /**
       *  Name of the i18n text key in the data array
       */
      textPropName: React.PropTypes.string,

      /**
       *  Name of the value key in the data array
       */
      valuePropName: React.PropTypes.string,

      /**
       * Font Awesome icon name; will be set for you if you supply one of the SideBarButtonType for the type field above
       */
      icon: React.PropTypes.string,

      /**
       * i18n label for the button
       */
      text: React.PropTypes.string.isRequired,

      /**
       * Default is true; set to false if read only
       */
      enabled: React.PropTypes.bool,

      /**
       * Function to call when user clicks,
       */
      clickHandler: React.PropTypes.func
    })),

    /**
     * Enable sticky search if not null. The passed ID should uniquely identify this list page for the current app.
     */
    stickySearchId: React.PropTypes.string,

    /**
     * Is search available? default: true
     */
    hasSearch: React.PropTypes.bool,

    /**
     * For v2 type search API, use the passed in value for searchfield; default is "name".
     */
    searchName: React.PropTypes.string,

    /**
     * Filters (on the sidebar)
     */
    filters: React.PropTypes.arrayOf(React.PropTypes.shape({
      /**
       *
       */
      type: React.PropTypes.oneOf(["DROP_DOWN", "CHECK_BOX", "RADIO_BUTTON", "SELECT_BOX"]),
      // type of filter

      /**
       * i18n header for the filter, null if no header
       */
      caption: React.PropTypes.string,

      /**
       * Name that will be passed back to the loadItemListMethod method as part of the filters array
       */
      name: React.PropTypes.string.isRequired,
      //

      /**
       * For filter types DROP_DOWN, RADIO_BUTTON, and CHECK_BOX
       * {Array of {name, value} pairs} object that contains the options; and for dropdowns, you can optionally pass in a callback that will return the data,
       *   which is most likely for dynamically filled dropdowns such as periods, unit types, and so forth.
       */
      data: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.func]),

      /**
       * For filter types DROP_DOWN, RADIO_BUTTON, and CHECK_BOX
       *  name of the i18n text key in the data array
       */
      textPropName: React.PropTypes.string,

      /**
       * For filter types DROP_DOWN, RADIO_BUTTON, and CHECK_BOX
       *   name of the value key in the data array
       */
      valuePropName: React.PropTypes.string,

      /**
       * The initial value
       */
      initialSelectedValue: React.PropTypes.string,

      /**
       * For filter types SELECT_BOX
       *   for multi-select popup. After selections are made in the overlay, the property name of the selected rows whose value will be used to display in the select box. */
      displayPropName: React.PropTypes.string,

      /**
       * For filter types SELECT_BOX
       *   for multi-select popup. After selections are made in the overlay, the id property name of the selected rows */
      idPropName: React.PropTypes.string,

      /**
       * For filter types SELECT_BOX
       *   The list page component that shows in the popup when select box is clicked
       */
      listPageComp: React.PropTypes.element
    })),

    /**
     *  For filters that are not user selectable but are preset for the API (e.g. we want only currency to return when searching unit types)
     *  Examples: presetFilters={{formulaType: 1}}, or presetFilters={{formulaType: [0, 2, 3]}}
     */
    presetFilters: React.PropTypes.object,

    /**
     *  For filters that are not user selectable but are preset for the API (different between this and the presetFilters above is that this prop will be visible and will contribute to the results text)
     *  Examples: trackSavedSearchId in Docs->Track
     */
    initialFilters: React.PropTypes.object,

    /**
     * Define the table structure for this list page
     */
    table: React.PropTypes.shape({
      /**
       * Id to aid in QA automation
       */
      tableId: React.PropTypes.string,

      /**
       * Pagination size; default is 50
       */
      pageSize: React.PropTypes.number,

      /**
       * The fieldname of the row data that determines whether the row should have bold text or not.  
       * The value of the field should be a boolean, and if the fieldname is prepended with a '!' sign, then the value will be negated.
       * Currently for expandable row only. See Docs-Track (TrackListPendingMyActions) for example.
       */
      conditionalBold: React.PropTypes.string,

      /**
       * Row definition; for table with master/detail rows configuration, this will define the master row
       */
      row: React.PropTypes.shape({
        /**
         * The columns may not have a one-to-one match to the json row object from the returned API if this is for the master row.
         *   but we still need it for the header and sorting purposes. Think of it as a definition for both the header and the row itselves.
         */
        columns: React.PropTypes.arrayOf(React.PropTypes.shape({
          /**
           * Property of the json row object whose value we will display
           */
          name: React.PropTypes.string,

          /**
           * If the value returned needs some sort of transformation before being displayed, provide a callback here; the row object will be passed
           */
          nameFunc: React.PropTypes.func,

          /**
           * i18n label for the column, if omitted, 'name' field will be used
           */
          label: React.PropTypes.string,

          /**
           * Help text label for the column header (to be displayed when help icon is hovered-over)
           */
          helpText: React.PropTypes.string,

          /**
           * Is column sortable? not sortable if false or missing
           */
          sortable: React.PropTypes.bool,

          /**
           * Is this the default sort field? if more than one column has this enabled, we will use the first column encountered.  If no column is designated, use the first column.
           */
          defaultSort: React.PropTypes.bool,

          /**
           * The initial sort order.  Can be either 'ASC' or 'DESC'.  Default is 'ASC'.
           */
          sortOrder: React.PropTypes.string,

          /**
           * Width for the column, if a string is passed, it should be a percentage (e.g., 30%)
           */
          width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),

          /**
           * If true, use this column to show a star for showing favorite. The textPropertyName should denote a field that has a true/false value.
           *   see Docs->Track->Saved Search for example.
           */
          isFavorite: React.PropTypes.bool,

          /**
           * If present, will call the handler if column is clicked
           */
          clickHandler: React.PropTypes.func
        })).isRequired,

        /**
         * If specified, function to call when user clicks. The prop expandedContent below will be ignored if this prop is present.
         */
        clickHandler: React.PropTypes.func,

        /**
         * If specified, table rows will become expandable and this will provide the content for it; the component will be passed the selected row data.  (for normal row or master row)
         */
        expandedContent: React.PropTypes.element,

        /**
         * Define the action buttons available when mousing over a row
         */
        actionButtons: React.PropTypes.arrayOf(React.PropTypes.shape({
          /**
           * If using one of the pre-defined types from ActionButtonType, then the proper icon and label will be supplied automatically; otherwiase, parent component needs to
           *   supply icon and label. 
           */
          type: React.PropTypes.string,

          /**
           * Font Awesome icon name; see 'type' above
           */
          icon: React.PropTypes.string,

          /**
           * i18n label for the button; see 'type' above
           */
          label: React.PropTypes.string,

          /**
           * The name of the prop in the data object that decides whether the button is visible or not. The prop value should be boolean.
           * If the fieldname is prepended with a '!' sign, then the value will be negated (e.g. pass in "!canDeleteFlag").
           */
          visiblePropName: React.PropTypes.string,

          /**
          * The condition to be applie to the visiblePropName field above to determine whether the action buttons is visible or not.
           */
          visiblePropCondition: React.PropTypes.string,

          /**
           * Function to call when user clicks
           */
          clickHandler: React.PropTypes.func
        })),

        /**
         * This is the action buttons to use when the readonly flag (see earlier) is set to true
         */
        actionButtons_readonly: React.PropTypes.arrayOf(React.PropTypes.shape({
          type: React.PropTypes.string,
          icon: React.PropTypes.string,
          label: React.PropTypes.string,
          clickHandler: React.PropTypes.func
        }))
      }).isRequired,

      /**
       * If you have sub-rows (like assignments for Draws and Paycurves), define it here.
       */
      detailRow: React.PropTypes.shape({
        /**
         *
         */
        arrayPropertyName: React.PropTypes.string,
        columns: React.PropTypes.arrayOf(React.PropTypes.shape({
          /**
           * Property of the json row object whose value we will display; for columns that are for the master row only, set the value to null.
           */
          name: React.PropTypes.string,
          nameFunc: React.PropTypes.func
        })).isRequired,

        /**
         * If specified, detail rows will become expandable and this will provide the content for it; the component will be passed the selected detail row data.
         */
        expandedContent: React.PropTypes.element,

        /**
         * Usage is identical to the one defined for the master row.
         */
        actionButtons: React.PropTypes.arrayOf(React.PropTypes.shape({
          type: React.PropTypes.string,
          icon: React.PropTypes.string,
          label: React.PropTypes.string,
          clickHandler: React.PropTypes.func
        })),

        /**
         *
         */
        actionButtons_readonly: React.PropTypes.arrayOf(React.PropTypes.shape({
          type: React.PropTypes.string,
          icon: React.PropTypes.string,
          label: React.PropTypes.string,
          clickHandler: React.PropTypes.func
        }))
      })
    }),

    /**
     * Injecting search callback to notify parent component about search operation
     */
    propogateCurrentSearchData: React.PropTypes.func,

    /**
     * Since TagList component rendered internally so to control its search title toggle 
     * behavior we need to pass this property 
     */
    controlTagListSearch: React.PropTypes.bool
  },
  propogateCurrentSearchData: function propogateCurrentSearchData(params) {
    var flag = false;
    var propNames = Object.getOwnPropertyNames(params);

    if (propNames.length > 0) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var propName = _step.value;

          if (Array.isArray(params[propName])) {
            flag = params[propName].length > 0 && !params[propName].includes("all") && !params[propName].includes("awaiting you") && params[propName].toString() !== "0,1";
          } else if (_typeof(params[propName]) === _typeof({})) {
            var innerObject = params[propName];
            var innerProps = Object.getOwnPropertyNames(innerObject ? innerObject : {});
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = innerProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var innerPropName = _step2.value;

                if (!!innerObject[innerPropName]) {
                  flag = true;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            if (propName.toLowerCase().includes("all") || propName.toLowerCase().includes("showassignment") && params[propName].toLowerCase() === "y") flag = !params[propName];else if (!!params[propName] && typeof params[propName] === "string" && !params[propName].toLowerCase().includes("all")) flag = true;else if (typeof params[propName] === "number") flag = true;
          }

          if (flag) break;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({
        applySearchText: flag
      });
    }
  },
  // Return the value of a session item given the key
  getObjectSessionStorage: function getObjectSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key));
  },
  // Get the cached params expcept for select boxes
  getCachedSearchParams: function getCachedSearchParams(key, params) {
    params = params || {
      filters: {}
    };
    var cachedParams = this.getObjectSessionStorage(key);

    if (cachedParams) {
      return {
        offset: cachedParams.searchParams.offset,
        sortBy: cachedParams.searchParams.sortBy,
        sortOrder: cachedParams.searchParams.sortOrder,
        filters: cachedParams.searchParams.filters
      };
    } // Returns original if nothing is cached


    return params;
  },
  // Initialize select boxes
  initializeSelectBoxes: function initializeSelectBoxes() {
    var selectBoxFilters = _.filter(this.props.filters, {
      'type': FilterType.SELECT_BOX
    });

    var selectBoxes = {};

    _.forEach(selectBoxFilters, function (filter) {
      selectBoxes[filter.name] = {
        modalDialogIsOpen: false,
        selectedItems: [],
        displayPropName: filter.displayPropName,
        idPropName: filter.idPropName
      };
    });

    return selectBoxes;
  },
  getInitialState: function getInitialState() {
    var selectBoxes = this.initializeSelectBoxes(); // Get the default sort column

    var sortColumn = _.find(this.props.table.row.columns, function (headColumn) {
      return headColumn.defaultSort;
    }); // If no column is designated, use the first column


    if (!sortColumn) sortColumn = this.props.table.row.columns[0];
    var pageSize = this.props.table.pageSize || 50; // keep pageSize in state since defaultProps doesn't allow deep copy
    // Setup default params

    var params = {
      offset: 0,
      sortBy: sortColumn.name,
      sortOrder: sortColumn.sortOrder || 'asc'
    }; // Override default params if they were cached

    if (this.props.stickySearchId) {
      params = this.getCachedSearchParams(this.props.stickySearchId, params);
    }

    ;
    return {
      show: this.props.show,
      items: [],
      // rows to display in the current page
      showAllItems: true,
      // are we showing all rows or just those that are selected
      dropDownFiltersData: {},
      sortBy: params.sortBy,
      sortOrder: params.sortOrder,
      totalCount: 0,
      totalPages: 0,
      currentPage: params.offset / pageSize + 1,
      pageSize: pageSize,
      selectBoxes: selectBoxes,
      filters: {},
      // need this to handle the 'Clear button' for check boxes
      isPrimaryButtonEnabled: this.props.selectType == SelectType.NO_SELECT,
      currentSelectedIndex: -1,
      valuePropertyName: this.props.valuePropertyName,
      applyTagSearchText: false,
      applySearchText: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      namespace: "icmadvanced.default",
      show: true,
      readonly: false,
      isPopup: false,
      applyText: "select",
      selectType: SelectType.SINGLE_SELECT,
      showSelectedFilter: false,
      hideCancel: false,
      hasSideBar: true,
      hasSearch: true,
      hasPageFooter: false,
      filters: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.initializeFilters(nextProps);
    if (nextProps.show != this.props.show) this.setState({
      show: nextProps.show
    });
    if (this.props.externalList) this.receiveItemList(nextProps.externalList);
  },
  componentWillMount: function componentWillMount() {
    this._filterParams = {}; // declare this as a member variable or outside of the class definition will result in it being shared by all instances.

    this._selectedItems = (this.props.selectedItems || []).slice(), // (popup) this is the currently selected rows across all pages (id only)
    this._allItemsCurPage = []; // Store All items for the current page.  The items field in the state may change under multi-select.

    this.initializeFilters(this.props); // if selectedItems is not empty then the primary button should be enabled

    if (this._selectedItems.length > 0) {
      this.setState({
        isPrimaryButtonEnabled: true
      });
    }
  },
  componentWillUnmount: function componentWillUnmount() {},
  componentDidMount: function componentDidMount() {
    this.loadItemListPaging();
  },
  // All localization of labels comes here
  translate: function translate(key) {
    var label = "";

    if (this.props.labelModule) {
      if (typeof this.props.labelModule.get == "function") label = this.props.labelModule.get(this.props.namespace, key);else if (Array.isArray(this.props.labelModule)) label = this.props.labelModule[key];
    }

    return label || labels[key] || "[" + key + "]";
  },
  // The filters will be passed to the loadItemListMethod callback, which will extract and construct the actual API parameters.
  initializeFilters: function initializeFilters(_ref) {
    var _this = this;

    var filters = _ref.filters,
        presetFilters = _ref.presetFilters,
        initialFilters = _ref.initialFilters;

    // Create an entry in the filterParams object for each filter, initialized to initialSelectedValue or null.
    // For drop-downs, store the selections in the state for rendering. Call the callback to retrive the selections if necessary.
    if (filters) {
      var dropDownFiltersData = [];
      filters.forEach(function (filter) {
        var value = null;

        if (filter.type == FilterType.DROP_DOWN || filter.type == FilterType.RADIO_BUTTON) {
          value = filter.initialSelectedValue || null;
        } else if (filter.type == FilterType.CHECK_BOX) {
          value = filter.initialSelectedValues || null;
          if (Array.isArray(value) && value.length == 0) value = null;

          _this.setState({
            filters: update(_this.state.filters, _defineProperty({}, filter.name, {
              $set: value
            }))
          }, function () {
            _this.propogateCurrentSearchData(_this.state.filters);
          });
        }

        _this._filterParams[filter.name] = value; //  The data field for dropdown can either be data or a callback function for the builder to retrive the data.

        if (filter.type == FilterType.DROP_DOWN) {
          var filterCallback = function filterCallback(data) {
            dropDownFiltersData[filter.name] = data;
          };

          if (filter.data instanceof Function) {
            dropDownFiltersData[filter.name] = []; // Initialize to avoid warning message from the dropdown comnponent

            filter.data(filterCallback); // Call callback to retrive selections.
          } else {
            dropDownFiltersData[filter.name] = filter.data;
          }

          _this.setState({
            dropDownFiltersData: dropDownFiltersData
          });
        }
      });
    }

    ;
    this._filterParams.searchText = null; // Now override with sticky search info only if this is not the first time 

    if (this.props.stickySearchId) {
      // Handle sorting, pagination, and search first
      var cacheInfo = this.getCachedSearchParams(this.props.stickySearchId); // override the filters only if this is not the first time page is visited in the session so filter initialSelectedValues (if present) will not be lost

      if (cacheInfo.offset !== undefined) this._filterParams = cacheInfo.filters; // Handle select boxes

      var stickyInfo = this.getObjectSessionStorage(this.props.stickySearchId);
      this.setState({
        selectBoxes: stickyInfo && stickyInfo.selectBoxes || this.initializeSelectBoxes(),
        filters: cacheInfo.filters
      });
    } // If there are preset filters, put them in _filterParams


    if (presetFilters) {
      _.forOwn(presetFilters, function (value, name) {
        _this._filterParams[name] = value;
      });
    }

    ; // If there are initial filters, put them in _filterParams

    if (initialFilters) {
      _.forOwn(initialFilters, function (value, name) {
        _this._filterParams[name] = value;
      });
    }

    ;
  },
  callCountRestAPI_v2: function callCountRestAPI_v2(params) {
    return this.callRestAPI_v2(Object.assign({}, params, {
      getCount: true
    }));
  },
  callRestAPI_v2: function callRestAPI_v2(params) {
    var queryString = params.getCount ? "/count?" : "?";

    if (!params.getCount) {
      queryString += "&offset=" + params.offset;
      queryString += "&limit=" + params.limit;
      queryString += "&sortfield=" + params.sortBy;
      queryString += "&order=" + params.sortOrder;
    }

    if (params.filters.searchText) {
      queryString += "&searchtext=" + params.filters.searchText;
      queryString += "&searchfield=" + (this.props.searchName ? this.props.searchName : "name");
    }

    var filters = _.omit(params.filters, ['searchText']);

    for (filter in filters) {
      if (filters[filter] !== null && filters[filter] !== "") {
        queryString += "&" + filter + "=" + filters[filter];
      }

      ;
    }

    ;
    return $.ajax({
      //url: config.appContext + "/api/" + this.props.loadItemListMethod_v2 + queryString,
      url: this.props.loadItemListMethod_v2 + queryString,
      dataType: "json"
    });
  },
  callRestAPI: function callRestAPI(params) {
    var queryString = "offset=" + params.offset;
    queryString += "&limit=" + params.limit;
    queryString += "&sortBy=" + params.sortBy;
    queryString += "&sortOrder=" + params.sortOrder;

    if (params.filters.searchText) {
      queryString += "&searchText=" + params.filters.searchText;
    }

    var filters = _.omit(params.filters, ['searchText']);

    for (filter in filters) {
      if (filters[filter] !== null && filters[filter] !== "") {
        if (Array.isArray(filters[filter])) {
          _.forEach(filters[filter], function (element) {
            queryString += "&".concat(filter, "=").concat(element); // For multi-select filters (CHECK_BOX and multi-select SELECT_BOX), sending the selections like tagId=...&tagId=...
          });
        } else {
          queryString += "&" + filter + "=" + filters[filter];
        }
      }

      ;
    }

    ;
    return $.ajax({
      //url: config.appContext + "/api/" + this.props.loadItemListMethod + "?" + queryString,
      url: this.props.loadItemListMethod + "?" + queryString,
      dataType: "json"
    });
  },
  // For search and filter changes, reload the list, starting from offset 0.
  loadItemList: function loadItemList() {
    var _this2 = this;

    this.setState({
      currentPage: 1
    }, function () {
      _this2.loadItemListPaging();
    });
  },
  // Convenient method for the outside code to reload the list page with the current filters/paging infos
  reload: function reload() {
    this.loadItemListPaging();
  },
  // Call the caller's method to get a list of items to dislay in the table; successResultFunc will be called with the returned list.
  loadItemListPaging: function loadItemListPaging(keepList) {
    var _this3 = this;

    // Clear all selected items from the state when any call to the backend is made, for (single-select) popup only
    if (this.props.selectType == SelectType.SINGLE_SELECT) {
      this.clearSelectedItems();
    }

    var params = {};
    params.offset = (this.state.currentPage - 1) * this.state.pageSize;
    params.limit = this.state.pageSize;
    params.sortBy = this.state.sortBy;
    params.sortOrder = this.state.sortOrder;
    params.filters = JSON.parse(JSON.stringify(this._filterParams)); // if we don't clone, _filterParams will be overwritten later (3 lines below)
    // Cache search params to handle sticky search

    if (this.props.stickySearchId) {
      sessionStorage.setItem(this.props.stickySearchId, JSON.stringify({
        searchParams: params,
        selectBoxes: this.state.selectBoxes
      }));
    }

    params.filters.searchText = params.filters.searchText && encodeURIComponent(params.filters.searchText); // Clear out existing list first to prepare for loading of new results count and items if not from pagination or sorting

    if (!keepList) this.setState({
      totalCount: 0,
      totalPages: 0,
      items: []
    });

    if (typeof this.props.loadItemListMethod == "function") {
      this.props.loadItemListMethod(params, this.receiveItemList); // call user-provided API
    } else if (this.props.loadItemListMethod_v2) {
      // let's call the rest API ourselves, using the v2 syntax where count is returned in a seperate api
      $.when(this.callRestAPI_v2(params), this.callCountRestAPI_v2(params)).done(function (respList, respCount) {
        _this3.receiveItemList({
          items: respList[0],
          totalCount: respCount[0].count
        });
      }).fail(function (jqXHR, textStatus, errorThrown) {
        if (_this3.props.errorHandler) _this3.props.errorHandler(jqXHR, textStatus, errorThrown);
      });
    } else {
      // let's call the rest API ourselves, using the newer syntax
      this.callRestAPI(params).done(function (resp) {
        return _this3.receiveItemList(resp);
      }).fail(function (jqXHR, textStatus, errorThrown) {
        if (_this3.props.errorHandler) _this3.props.errorHandler(jqXHR, textStatus, errorThrown);
      });
    }
  },
  // Convenient method for the outside code to retrieve all the selected items (e.g. docs->track)
  getSelectedItems: function getSelectedItems() {
    return this._selectedItems;
  },
  // Clear all selection items
  clearSelectedItems: function clearSelectedItems() {
    var _this4 = this;

    this._selectedItems = []; // reset the button state to disabled since there is no selection.

    if (this.props.selectType != SelectType.NO_SELECT) {
      this.setState({
        isPrimaryButtonEnabled: false
      }, function () {
        if (_this4.propogateCurrentSearchData) {
          if (!!_this4.state.selectBoxes && !!_this4.state.selectBoxes.tags && !!_this4.state.selectBoxes.tags.selectedItems && _this4.state.selectBoxes.tags.selectedItems.length > 0) _this4.propogateCurrentSearchData(Object.assign({}, _this4.state.filters, {
            selectedItems: _this4.state.selectBoxes.tags.selectedItems
          }));else _this4.propogateCurrentSearchData(_this4.state.filters);
        }
      });
    }
  },
  // Server API returns data here
  // The API should normally returns totalCount and items; however, as an exception, the ruleCell api returns data in selectionCount and selectionList.
  receiveItemList: function receiveItemList(itemList) {
    var totalCount = typeof itemList.totalCount == "undefined" ? itemList.selectionCount : itemList.totalCount;
    this._allItemsCurPage = typeof itemList.items == "undefined" ? itemList.selectionList : itemList.items;
    this.setState({
      totalCount: totalCount,
      totalPages: this.getTotalPages(totalCount)
    });
    this.refreshItemList();
  },
  // What items should we display?
  refreshItemList: function refreshItemList() {
    var _this5 = this;

    var boundItems = []; // items that are selected, for the current page
    // if show all items then just mark the selected prop and add the item to the bound list
    // else if show only selected items then only add the selected items to the bound list

    this._allItemsCurPage.forEach(function (item, index, arr) {
      // check if the item is in the list of selected items
      var valuePropertyName = _this5.state.valuePropertyName ? _this5.state.valuePropertyName : "id";

      var indexOf = _.findIndex(_this5._selectedItems, {
        id: item[valuePropertyName]
      });

      if (indexOf > -1) {
        // found item in _selectedItems array, mark it and refresh the corresponding entry in _selectedItems with the new item content in case 
        //  anything has changed (e.g. a status field); this can be useful for the parent component (e.g. docs->track: mass recall).
        Object.assign(_this5._selectedItems[indexOf], item);
        item.selected = true;
      } else {
        item.selected = false;
      }

      if (_this5.state.showAllItems == true) {
        boundItems.push(item);
      } else {
        if (indexOf > -1) {
          boundItems.push(item);
        }
      }
    });

    this.setState({
      items: boundItems
    });
  },
  // Calculate the total number of pages for the list
  getTotalPages: function getTotalPages(totalCount) {
    return Math.ceil(totalCount / this.state.pageSize);
  },
  // When search icon is clicked
  searchHandler: function searchHandler(searchTerm, event) {
    var _this6 = this;

    this._filterParams.searchText = searchTerm;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        searchText: searchTerm
      })
    }, function () {
      if (_this6.propogateCurrentSearchData) _this6.propogateCurrentSearchData(_this6.state.filters);
    });
    this.loadItemList();
  },
  // When cancel search icon is clicked
  cancelSearchHandler: function cancelSearchHandler(event) {
    var _this7 = this;

    this._filterParams.searchText = null;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        searchText: null
      })
    }, function () {
      if (_this7.propogateCurrentSearchData) _this7.propogateCurrentSearchData(_this7.state.filters);
    });
    this.loadItemList();
  },
  // When a column sort icon is clicked
  columnSortHandler: function columnSortHandler(sortBy, sortOrder, event) {
    var _this8 = this;

    this.setState({
      sortBy: sortBy,
      sortOrder: sortOrder
    }, function () {
      _this8.loadItemListPaging(true);
    });
  },
  // When a filter (radio/checkbox) is clicked
  filterClickHandler: function filterClickHandler(value, event) {
    var _this9 = this;

    var filterName = event.currentTarget.parentNode.parentNode.id;

    if (filterName == 'XACTLY_showSelectedFilter') {
      this.setState({
        showAllItems: value,
        filters: Object.assign({}, this.state.filters, {
          showAllItems: value
        })
      }, function () {
        _this9.refreshItemList();

        if (_this9.propogateCurrentSearchData) _this9.propogateCurrentSearchData(_this9.state.filters);
      });
    } else {
      if (Array.isArray(value) && value.length == 0) value = null;
      this._filterParams[filterName] = value; // Set it in the state too, although radio boxes are saved too, we only uses the checkboxes part

      this.setState({
        filters: update(this.state.filters, _defineProperty({}, filterName, {
          $set: value
        }))
      }, function () {
        _this9.loadItemList();

        if (_this9.propogateCurrentSearchData) _this9.propogateCurrentSearchData(_this9.state.filters);
      });
    }

    ;
  },
  // When a filter (dropdown) is selected
  filterChangeHandler: function filterChangeHandler(value, event) {
    var idProp = this.state.valuePropertyName ? this.state.valuePropertyName : "id";
    var targetId = event.currentTarget.id;
    var filterValue = value.length > 0 ? value : null;
    this._filterParams[targetId] = filterValue;
    if (this.propogateCurrentSearchData) this.propogateCurrentSearchData(this._filterParams);
    this.loadItemList();
  },
  // For multi-select table, when a checkbox column is toggled, sunil
  checkBoxColumnHandler: function checkBoxColumnHandler(isChecked, itemId, evt) {
    var idProp = this.state.valuePropertyName ? this.state.valuePropertyName : "id";
    var boundItems = this.state.items; // get the item from bound items list

    var itemToAddRemove = _.find(boundItems, function (item, index, arr) {
      return itemId == item[idProp];
    });

    if (isChecked) {
      // The checkbox click is being called twice and the row click
      // is also triggering the checkbox click. So to avoid adding the
      // item twice we need to check if it is already added.
      var foundItem = _.find(this._selectedItems, function (item, index, arr) {
        return itemToAddRemove[idProp] == item[idProp];
      });

      if (!foundItem && itemToAddRemove) {
        itemToAddRemove.selected = true;

        if (this.state.valuePropertyName) {
          itemToAddRemove.id = itemToAddRemove[idProp]; // add an id property if the original id prop is something else; useful for the calling component
        }

        this._selectedItems.push(itemToAddRemove);

        this.setState({
          isPrimaryButtonEnabled: true
        });
      }
    } else {
      if (itemToAddRemove) {
        itemToAddRemove.selected = false;
      }

      this._selectedItems = _.reject(this._selectedItems, function (item, index, arr) {
        return itemId == item[idProp];
      });

      if (this._selectedItems.length == 0) {
        this.setState({
          isPrimaryButtonEnabled: false
        });
      } else {
        // since we are not setting state when there are still selected
        // items, we need to force the render for the updated checkbox state.
        this.forceUpdate();
      }
    }

    if (this.props.selectedItemsChangeHandler) this.props.selectedItemsChangeHandler(this._selectedItems);
  },
  // The "Select all" checkbox is clicked, if checked then select all items that are current visible (if "Selected" is selected in showSelectedFilter == true); otherwise deselect all items
  onSelectAllClicked: function onSelectAllClicked(isChecked) {
    var _this10 = this;

    var idProp = this.state.valuePropertyName ? this.state.valuePropertyName : "id";
    this.state.items.forEach(function (item, index) {
      if (isChecked) {
        // is it already selected?
        var foundItem = _.find(_this10._selectedItems, function (selectedItem) {
          return item[idProp] == selectedItem[idProp];
        }); // if not, add it to the selectedItems list


        if (!foundItem) {
          item.selected = true;

          if (_this10.state.valuePropertyName) {
            item.id = item[idProp];
          }

          _this10._selectedItems.push(item);
        }
      } else {
        item.selected = false;
        _this10._selectedItems = _.reject(_this10._selectedItems, function (selectedItem) {
          return item.id == selectedItem[idProp];
        });
      }
    });
    this.setState({
      isPrimaryButtonEnabled: this._selectedItems.length > 0
    }, function () {
      if (_this10.propogateCurrentSearchData) _this10.propogateCurrentSearchData(_this10.state.filters);
    });
    if (this.props.selectedItemsChangeHandler) this.props.selectedItemsChangeHandler(this._selectedItems);
  },
  // When a page number is clicked
  pageClickHandler: function pageClickHandler(pageNumber) {
    var _this11 = this;

    this.setState({
      currentPage: pageNumber
    }, function () {
      return _this11.loadItemListPaging(true);
    });
  },
  // Click handler for the cancel button (popup only).
  cancelDialogHandler: function cancelDialogHandler(event) {
    this.props.cancelDialogHandler();
  },
  // Click handler for the appy button (popup only).
  applyDialogHandler: function applyDialogHandler(event) {
    this.props.applyDialogHandler(this._selectedItems);
  },
  // When a row is clicked, save the selected row. most likely used in a single-selection popup; process expandable row here too
  rowSelected: function rowSelected(row, rowIndex, evt) {
    if (this.props.isPopup && this.props.selectType == SelectType.SINGLE_SELECT) {
      this._selectedItems = [row];
      this.setState({
        isPrimaryButtonEnabled: true,
        currentSelectedIndex: rowIndex
      });
    }

    ;

    if (typeof this.props.table.row.clickHandler == "function") {
      this.props.table.row.clickHandler(row);
    } else // For table with expanded row and no details row
      if (this.props.table.row.expandedContent && !this.props.table.detailRow) {
        if (this.props.expandedRowClickHandler) {
          // if there's an external handler, then let it handle it (list is maintained outside)
          this.props.expandedRowClickHandler(row, rowIndex);
        } else {
          this.setState({
            items: update(this.state.items, _defineProperty({}, rowIndex, {
              isExpanded: {
                $set: !this.state.items[rowIndex].isExpanded
              } // toggle the expanded flag

            }))
          });
        }
      }

    ;
    var selectedRow = row.id || row.ruleId || row.assignmentId; // toggling record selection based on click event

    if (this.props.isPopup && selectedRow && row.hasOwnProperty('selected')) this.checkBoxColumnHandler(!row.selected, selectedRow, evt);
  },
  // When a row is double clicked, if this is a popup and a single select
  // then apply the row and close the dialog.
  rowDoubleClickHandler: function rowDoubleClickHandler(row, rowIndex, event) {
    if (this.props.isPopup && this.props.selectType == SelectType.SINGLE_SELECT) {
      // when a row is double clicked, call the apply button functionality
      this.props.applyDialogHandler([row]);
    }
  },
  render: function render() {
    var _this12 = this;

    var SpacerVeritcal = function SpacerVeritcal(props) {
      var style = {
        height: props.height
      };
      return React.createElement("div", {
        style: style
      });
    }; // Render page header


    var renderPageHeader = function renderPageHeader() {
      if (_this12.props.useExternalPageHeader) {
        return null;
      } else {
        if (_this12.props.isPopup) return React.createElement(PageHeader, {
          title: _this12.translate(_this12.props.title)
        }, _this12.props.hideCancel ? null : React.createElement(SecondaryButton, {
          text: _this12.translate("cancel"),
          icon: "fa fa-times-circle-o",
          id: "cancelButton",
          clickHandler: _this12.cancelDialogHandler
        }), React.createElement(PrimaryButton, {
          text: _this12.translate(_this12.props.applyText),
          id: "applyButton",
          enabled: _this12.state.isPrimaryButtonEnabled,
          clickHandler: _this12.applyDialogHandler,
          inline: true,
          type: "primaryButton_overlay_header"
        }));else return React.createElement(PageHeader, {
          title: _this12.translate(_this12.props.title)
        });
      }
    }; // Render side bar buttons


    var renderSidebarButtons = function renderSidebarButtons() {
      /**
       *  Render primary and secondary buttons
       */
      var renderPrimaryButton = function renderPrimaryButton() {
        var primaryButton = _this12.props.primaryButton;

        if (primaryButton) {
          var icon = primaryButton.icon || SideBarButtonIcons[primaryButton.type];
          var type = primaryButton.type == SideBarButtonType.CREATE ? "create" : "";
          var enabled = primaryButton.enabled; // if there are no results, then override the enabled if the button type if DOWNLOAD

          if (_this12.state.totalPages === 0 && primaryButton.type == SideBarButtonType.DOWNLOAD) {
            enabled = false;
          }

          var id = primaryButton.id && primaryButton.id.length > 0 ? primaryButton.id : null;

          if (primaryButton.hasPopupMenu) {
            return React.createElement(SideBarPrimaryButtonMenu, {
              id: id,
              icon: icon,
              text: _this12.translate(primaryButton.text),
              enabled: enabled,
              showHelpIcon: true,
              menuItems: primaryButton.menuItems,
              textPropName: primaryButton.textPropName,
              valuePropName: primaryButton.valuePropName,
              clickHandler: primaryButton.clickHandler,
              primaryClickHandler: primaryButton.primaryClickHandler
            }, primaryButton.helpText ? React.createElement(HelpDialog, {
              effect: "solid",
              type: "info",
              place: "right"
            }, React.createElement("div", null, _this12.translate(primaryButton.helpText))) : null);
          } else {
            return React.createElement(SideBarPrimaryButton, {
              id: id,
              icon: icon,
              type: type,
              text: _this12.translate(primaryButton.text),
              enabled: enabled,
              showHelpIcon: true,
              clickHandler: primaryButton.clickHandler
            }, primaryButton.helpText ? React.createElement(HelpDialog, {
              effect: "solid",
              type: "info",
              place: "right"
            }, React.createElement("div", null, _this12.translate(primaryButton.helpText))) : null);
          }
        } else return React.createElement("div", null);
      };

      var renderSecondaryButtons = function renderSecondaryButtons() {
        if (_this12.props.secondaryButtons && _this12.props.secondaryButtons.length != 0) {
          return _this12.props.secondaryButtons.map(function (button) {
            if (button.hasPopupMenu) {
              var icon = button.icon || SideBarButtonIcons[button.type];
              var id = button.id && button.id.length > 0 ? button.id : null;
              return React.createElement(SideBarSecondaryButtonMenu, {
                id: id,
                key: button.name,
                icon: icon,
                text: _this12.translate(button.text),
                enabled: button.enabled,
                menuItems: button.menuItems,
                textPropName: button.textPropName,
                valuePropName: button.valuePropName,
                menuItemClickHandler: button.menuItemClickHandler,
                clickHandler: button.clickHandler
              });
            } else {
              var _icon = button.icon || SideBarButtonIcons[button.type];

              var _id = button.id && button.id.length > 0 ? button.id : null;

              return React.createElement(SideBarSecondaryButton, {
                id: _id,
                key: button.name,
                icon: _icon,
                text: _this12.translate(button.text),
                enabled: button.enabled,
                clickHandler: button.clickHandler
              });
            }
          });
        } else return React.createElement("div", null);
      };

      if (_this12.props.primaryButton || _this12.props.secondaryButtons) return React.createElement(SideBarButtonContainer, null, renderPrimaryButton(), renderSecondaryButtons());
    }; // Render search box


    var renderSearch = function renderSearch() {
      return _this12.props.hasSearch ? React.createElement(SideBarFilterContainer, {
        title: _this12.translate("search")
      }, React.createElement(SearchBox, {
        id: _this12.props.searchBoxId ? _this12.props.searchBoxId : "mySearchBox",
        initialSearch: _this12._filterParams.searchText,
        cancelSearchHandler: _this12.cancelSearchHandler,
        searchHandler: _this12.searchHandler,
        placeholder: _this12.translate("searchBoxPlaceholderText")
      })) : null;
    }; // Render filters


    var renderFilters = function renderFilters() {
      var StyledRadioButton = styled(RadioButton)(_templateObject());

      var handleClearButton = function handleClearButton(filterName, event) {
        _this12._filterParams[filterName] = null;

        _this12.setState({
          filters: update(_this12.state.filters, _defineProperty({}, filterName, {
            $set: []
          }))
        }, function () {
          _this12.loadItemList();

          if (_this12.propogateCurrentSearchData) _this12.propogateCurrentSearchData(_this12.state.filters);
        });
      };

      if (_this12.props.externalFilters) {
        return React.createElement("div", null, _this12.props.externalFilters);
      } else {
        var propsFilters = getShowSelectedFilter().concat(_this12.props.filters);
        var filters = [];

        if (propsFilters.length > 0) {
          propsFilters.map(function (filter) {
            var index = 0;
            var title = filter.caption ? _this12.translate(filter.caption) : null;

            switch (filter.type) {
              case FilterType.DROP_DOWN:
                filters.push(React.createElement(SideBarFilterSubContainer, {
                  key: filter.name,
                  title: title
                }, React.createElement(DropDown, {
                  id: filter.name,
                  data: _this12.state.dropDownFiltersData[filter.name],
                  selectedValue: filter.initialSelectedValue,
                  size: "medium",
                  multiselect: false,
                  searchBox: true,
                  valuePropName: filter.valuePropName,
                  textPropName: filter.textPropName,
                  caption: _this12.translate("select"),
                  changeHandler: _this12.filterChangeHandler,
                  initialSelectedValue: _this12._filterParams.periods
                })));
                break;

              case FilterType.RADIO_BUTTON:
                // Need to process our speical filter for multi-select popup differently since it uses a state variable
                var value = filter.name == "XACTLY_showSelectedFilter" ? _this12.state.showAllItems : _this12._filterParams[filter.name];
                filters.push(React.createElement(SideBarFilterSubContainer, {
                  key: filter.name,
                  title: title
                }, React.createElement(RadioButtonGroup, {
                  id: filter.name,
                  groupName: filter.name,
                  initialSelectedValue: value,
                  changeHandler: _this12.filterClickHandler
                }, filter.data.map(function (entry) {
                  return React.createElement(StyledRadioButton, {
                    id: "".concat(filter.name, "_").concat(index++),
                    key: entry[filter.textPropName],
                    text: _this12.translate(entry[filter.textPropName]),
                    value: entry[filter.valuePropName],
                    tooltip: ""
                  });
                }))));
                break;

              case FilterType.CHECK_BOX:
                filters.push(React.createElement(SideBarFilterSubContainer, {
                  key: filter.name,
                  title: title,
                  clearButtonText: labels.clear,
                  clearButtonClickHandler: handleClearButton.bind(_this12, filter.name)
                }, React.createElement(CheckBoxGroup, {
                  id: filter.name,
                  groupName: filter.name,
                  changeHandler: _this12.filterClickHandler
                }, filter.data.map(function (entry) {
                  var checked = _.find(_this12.state.filters[filter.name], function (value) {
                    return value == entry[filter.valuePropName];
                  }) != null;
                  return React.createElement(CheckBox, {
                    id: "".concat(filter.name, "_").concat(index++),
                    key: entry[filter.textPropName],
                    text: _this12.translate(entry[filter.textPropName]),
                    value: entry[filter.valuePropName],
                    defaultChecked: checked,
                    customMarginHeight: 12,
                    tooltip: ""
                  });
                }))));
                break;

              case FilterType.SELECT_BOX:
                // Create a new handler for each select box
                var showSelectBoxDialog = function showSelectBoxDialog(selectedItems) {
                  var selectBoxes = _this12.state.selectBoxes;
                  selectBoxes[filter.name].modalDialogIsOpen = true;

                  _this12.setState({
                    selectBoxes: selectBoxes
                  });
                }; // Remove icon is clicked for the item; remove item from the select box (by updating the state) and reload list


                var removeItemHandler = function removeItemHandler(removedItem) {
                  var selectBoxes = _this12.state.selectBoxes;
                  var idPropName = selectBoxes[filter.name].idPropName || "id";

                  _.remove(selectBoxes[filter.name].selectedItems, function (selectedItem) {
                    return selectedItem[idPropName] == removedItem[idPropName];
                  });

                  _this12._filterParams[filter.name] = selectBoxes[filter.name].selectedItems.length == 0 ? null : selectBoxes[filter.name].selectedItems.map(function (item) {
                    return item[idPropName];
                  });

                  _this12.setState({
                    selectBoxes: selectBoxes
                  }, function () {
                    _this12.loadItemList();
                  });
                };

                filters.push(React.createElement(SideBarFilterSubContainer, {
                  key: filter.name,
                  title: title
                }, React.createElement(SelectBox, {
                  id: filter.name,
                  size: "small",
                  selectHandler: showSelectBoxDialog,
                  selectedItems: _this12.state.selectBoxes[filter.name].selectedItems,
                  itemDisplayPropName: _this12.state.selectBoxes[filter.name].displayPropName,
                  placeholder: "".concat(_this12.translate("select"), " ").concat(filter.caption),
                  removeItemEventHandler: removeItemHandler
                })));
                break;

              default:
                break;
            }
          });
          return React.createElement(SideBarFilterContainer, {
            title: "Filters"
          }, filters);
        }
      }

      ;
    }; // Get All/Selected filter for multi-select list page


    var getShowSelectedFilter = function getShowSelectedFilter() {
      var filters = [];

      if (_this12.props.selectType == "MULTI_SELECT" && _this12.props.showSelectedFilter) {
        filters.push({
          type: FilterType.RADIO_BUTTON,
          caption: "selectType",
          name: "XACTLY_showSelectedFilter",
          // name starts with XACTLY_ is reserved
          data: [{
            text: "all",
            value: true
          }, {
            text: "selected",
            value: false
          }],
          textPropName: "text",
          valuePropName: "value",
          initialSelectedValue: _this12.state.showAllItems
        });
      }

      ;
      return filters;
    }; // Render all select dialog boxes, hidden initially


    var renderSelectBoxDialogs = function renderSelectBoxDialogs() {
      var selectBoxComps = [];

      var selectBoxes = _.filter(_this12.props.filters, {
        'type': FilterType.SELECT_BOX
      });

      var valuePropertyName = _this12.state.valuePropertyName ? _this12.state.valuePropertyName : "id";

      _.forEach(selectBoxes, function (selectBox) {
        // Create a new handler for each dialog
        var applyDialogHandler = function applyDialogHandler(selectedItems) {
          var selectBoxes = Object.assign({}, _this12.state.selectBoxes);
          selectBoxes[selectBox.name].modalDialogIsOpen = false;
          selectBoxes[selectBox.name].selectedItems = selectedItems || [];
          var idPropName = selectBoxes[selectBox.name].idPropName || "id";
          _this12._filterParams[selectBox.name] = selectedItems.length == 0 ? null : selectedItems.map(function (item) {
            return item[idPropName];
          });

          _this12.setState({
            selectBoxes: selectBoxes
          }, function () {
            _this12.loadItemList();
          });
        };

        var cancelDialogHandler = function cancelDialogHandler() {
          var selectBoxes = _this12.state.selectBoxes;
          selectBoxes[selectBox.name].modalDialogIsOpen = false;

          _this12.setState({
            selectBoxes: selectBoxes
          });
        };

        var config = {
          isPopup: true,
          applyDialogHandler: applyDialogHandler,
          cancelDialogHandler: cancelDialogHandler,
          selectedItems: _.clone(_this12.state.selectBoxes[selectBox.name].selectedItems)
        };
        selectBoxComps.push(React.createElement(ModalDialog, {
          modalIsOpen: _this12.state.selectBoxes[selectBox.name].modalDialogIsOpen,
          key: selectBox.name
        }, React.cloneElement(selectBox.listPageComp, config)));
      });

      return selectBoxComps;
    };

    var renderPaginationHeader = function renderPaginationHeader() {
      // Are filters applied? (excluding preset filters)
      filtersApplied = function filtersApplied() {
        var found = false;

        for (var _filter in _this12._filterParams) {
          if (_this12._filterParams.hasOwnProperty(_filter)) {
            // ignore preset filters because user is oblivious to this
            if (!_this12.props.presetFilters || !_this12.props.presetFilters.hasOwnProperty(_filter)) if (_this12._filterParams[_filter] !== null && _this12._filterParams[_filter] !== "") found = true;
          }
        }

        return found;
      }; // use allResults (instead of searchResults) even when filters are applied


      return React.createElement(ResultsPaginationHeader, {
        id: "myResultsPaginationHeader",
        resultsId: "myResultsCounter",
        resultsCount: _this12.state.totalCount,
        resultsText: _this12.translate(_this12.state.applySearchText ? "searchResults" : "allResults"),
        totalPages: _this12.state.totalPages,
        currentPage: _this12.state.currentPage,
        pageClickHandler: _this12.pageClickHandler,
        hideResults: _this12.props.hideResults
      });
    }; // Render table contents


    var renderTable = function renderTable() {
      var renderHeaderRow = function renderHeaderRow() {
        // find out if all items on the page are selected
        var areAllItemsSelected = function areAllItemsSelected() {
          var itemFound = _this12.state.items.find(function (item) {
            return !item.selected;
          }); // is there any item unselected?


          return _this12.state.items.length != 0 && !itemFound;
        };

        return React.createElement(TableHeadRow, null, _this12.props.selectType == SelectType.MULTI_SELECT ? React.createElement(AbstractTableColumn, {
          width: 40
        }, React.createElement(CheckBox, {
          id: "selectAll",
          tooltip: _this12.translate("selectAll"),
          defaultChecked: areAllItemsSelected(),
          value: "something",
          customMarginHeight: 0,
          changeHandler: _this12.onSelectAllClicked,
          stopClickPropagation: true
        })) : React.createElement(TableHeadColumn, {
          key: "dummyHeader1",
          columnName: "",
          width: 0
        }), _this12.props.table.row.columns.map(function (column, index) {
          return React.createElement(TableHeadColumn, {
            key: index,
            columnName: _this12.translate(column.label || column.name),
            sortPropertyName: column.sortable ? column.name : null,
            defaultSort: column.name == _this12.state.sortBy,
            defaultSortOrder: _this12.state.sortOrder,
            helpText: column.helpText ? _this12.translate(column.helpText) : null,
            clickHandler: _this12.columnSortHandler,
            width: column.width
          });
        }), React.createElement(TableHeadColumn, {
          key: "dummyHeader2",
          columnName: "",
          width: 0
        }));
      };

      var renderActionButtons = function renderActionButtons(actionButtons) {
        // Create action buttons
        var actionButtonsRendered = actionButtons ? React.createElement(ActionButtons, null, actionButtons.map(function (actionButton, index) {
          var clickHandler = function clickHandler(data, event) {
            event.stopPropagation(); // prevent row expanding (if expaneded row) from happening

            actionButton.clickHandler(data);
          };

          var icon = actionButton.icon || ActionButtonIcons[actionButton.type];

          var label = (actionButton.label ? _this12.translate(actionButton.label) : "") || _this12.translate(ActionButtonLabels[actionButton.type]);

          return React.createElement(ActionButton, {
            id: "button_".concat(actionButton.type),
            key: index,
            clickHandler: clickHandler,
            icon: icon,
            text: label,
            visiblePropName: actionButton.visiblePropName,
            visiblePropCondition: actionButton.visiblePropCondition
          });
        })) : null;
        return actionButtonsRendered;
      };

      var renderNormalRow = function renderNormalRow() {
        // If there is a row definition but not a detail row definition, then we will have a normal row
        if (_this12.props.table.row && !_this12.props.table.detailRow) {
          var valuePropertyName = _this12.state.valuePropertyName ? _this12.state.valuePropertyName : "id";
          return React.createElement(TableNormalRow, {
            rowDoubleClickHandler: _this12.rowDoubleClickHandler
          }, _this12.props.selectType == SelectType.MULTI_SELECT ? React.createElement(TableCheckboxColumn, {
            idPropertyName: valuePropertyName,
            valuePropertyName: valuePropertyName,
            checkedPropertyName: "selected",
            clickHandler: _this12.checkBoxColumnHandler,
            stopClickPropagation: true
          }) : React.createElement("td", null), _this12.props.table.row.columns.map(function (column, index) {
            return React.createElement(TableTextColumn, {
              key: index,
              textPropertyName: column.nameFunc || column.name,
              width: column.width,
              isFavorite: column.isFavorite,
              clickHandler: column.clickHandler,
              isCaretColumn: _this12.props.treeList && index == 0,
              treeNodeClickHandler: _this12.props.treeNodeClickHandler
            });
          }), renderActionButtons(_this12.props.readonly ? _this12.props.table.row.actionButtons_readonly : _this12.props.table.row.actionButtons));
        }

        ;
      };

      var renderNormalRowExpandable = function renderNormalRowExpandable() {
        // If there is a row definition but not a detail row definition, then we will have a normal row
        if (_this12.props.table.row && !_this12.props.table.detailRow) {
          var valuePropertyName = _this12.state.valuePropertyName ? _this12.state.valuePropertyName : "id";
          return React.createElement(TableExpandableRow, null, React.createElement(TableRowColumns, null, _this12.props.selectType == SelectType.MULTI_SELECT ? React.createElement(TableCheckboxColumn, {
            idPropertyName: valuePropertyName,
            valuePropertyName: valuePropertyName,
            checkedPropertyName: "selected",
            clickHandler: _this12.checkBoxColumnHandler,
            stopClickPropagation: true
          }) : React.createElement("td", null), _this12.props.table.row.columns.map(function (column, index) {
            return React.createElement(TableTextColumn, {
              key: index,
              textPropertyName: column.nameFunc || column.name,
              width: column.width,
              isFavorite: column.isFavorite,
              clickHandler: column.clickHandler,
              isCaretColumn: _this12.props.treeList && index == 0,
              treeNodeClickHandler: _this12.props.treeNodeClickHandler
            });
          }), renderActionButtons(_this12.props.readonly ? _this12.props.table.row.actionButtons_readonly : _this12.props.table.row.actionButtons)), React.createElement(TableExpandableRowContent, null, React.cloneElement(_this12.props.table.row.expandedContent, {
            rowData: _this12.props.table.row
          })));
        }

        ;
      };

      var renderMasterRow = function renderMasterRow() {
        // If there is a detail row definition, then we will have master row as well
        if (_this12.props.table.detailRow) {
          var valuePropertyName = _this12.state.valuePropertyName ? _this12.state.valuePropertyName : "id";
          return React.createElement(TableMasterRow, {
            alwaysExpanded: true
          }, React.createElement(TableRowColumns, null, _this12.props.selectType == SelectType.MULTI_SELECT ? React.createElement(TableCheckboxColumn, {
            idPropertyName: valuePropertyName,
            valuePropertyName: valuePropertyName,
            checkedPropertyName: "selected",
            clickHandler: _this12.checkBoxColumnHandler,
            stopClickPropagation: true
          }) : React.createElement("td", null), _this12.props.table.row.columns.map(function (column, index) {
            return React.createElement(TableTextColumn, {
              key: index,
              textPropertyName: column.nameFunc || column.name,
              width: column.width,
              isFavorite: column.isFavorite
            });
          }), renderActionButtons(_this12.props.readonly ? _this12.props.table.row.actionButtons_readonly : _this12.props.table.row.actionButtons)), _this12.props.table.row.expandedContent ? React.createElement(TableExpandableRowContent, null, React.cloneElement(_this12.props.table.row.expandedContent, {
            rowData: _this12.props.table.row
          })) : React.createElement("div", null));
        }

        ;
      };

      var renderDetailRow = function renderDetailRow() {
        if (_this12.props.table.detailRow) {
          var valuePropertyName = _this12.state.valuePropertyName ? _this12.state.valuePropertyName : "id";
          return React.createElement(TableDetailRows, {
            detailRowsArrayPropertyName: _this12.props.table.detailRow.arrayPropertyName
          }, React.createElement(TableDetailRowColumns, null, _this12.props.selectType == SelectType.MULTI_SELECT ? React.createElement(TableCheckboxColumn, {
            idPropertyName: valuePropertyName,
            valuePropertyName: valuePropertyName,
            checkedPropertyName: "selected",
            clickHandler: _this12.checkBoxColumnHandler,
            stopClickPropagation: true
          }) : React.createElement("td", null), _this12.props.table.detailRow.columns.map(function (column, index) {
            return React.createElement(TableTextColumn, {
              key: index,
              textPropertyName: column.nameFunc || column.name,
              width: column.width,
              isFavorite: column.isFavorite
            });
          }), renderActionButtons(_this12.props.readonly ? _this12.props.table.detailRow.actionButtons_readonly : _this12.props.table.detailRow.actionButtons)), _this12.props.table.detailRow.expandedContent ? React.createElement(TableExpandableRowContent, null, React.cloneElement(_this12.props.table.detailRow.expandedContent, {
            rowData: _this12.props.table.detailRow
          })) : React.createElement("div", null));
        }

        ;
      };

      var getTableHeight = function getTableHeight() {
        if (_this12.props.isPopup == true) {
          // magic number kingdom
          // height of modal - height of header - list padding top - height of pagination - list padding bottom
          return 528 - 65 - 36 - 50 - 25;
        } else {
          return null;
        }
      };

      var rowSelectionEnabled = true;

      if (typeof _this12.props.table.rowSelectionEnabled === 'boolean') {
        rowSelectionEnabled = _this12.props.table.rowSelectionEnabled;
      }

      return React.createElement(Table, {
        id: _this12.props.table.tableId,
        data: _this12.state.items,
        rowClickHandler: _this12.rowSelected,
        rowSelectionEnabled: rowSelectionEnabled,
        selectedRowIndex: _this12.state.currentSelectedIndex,
        tableHeight: getTableHeight(),
        selectType: _this12.props.selectType,
        conditionalBold: _this12.props.table.conditionalBold
      }, renderHeaderRow(), _this12.props.table.row.expandedContent ? renderNormalRowExpandable() : renderNormalRow(), renderMasterRow(), renderDetailRow());
    };
    /**
     * Gets the name of the component for the data-component-name prop.
     */


    var getComponentName = function getComponentName() {
      if (_this12.props.isPopup == true) {
        return "Overlay";
      } else {
        return "List";
      }
    };
    /**
     * Gets the type of the component for the data-component-type prop.
     */


    var getComponentType = function getComponentType() {
      var componentType = "SingleSelect";

      switch (_this12.props.selectType) {
        case SelectType.NO_SELECT:
          componentType = "NoSelect";
          break;

        case SelectType.SINGLE_SELECT:
          componentType = "SingleSelect";
          break;

        case SelectType.MULTI_SELECT:
          componentType = "MultiSelect";
          break;

        default:
          componentType = "SingleSelect";
          break;
      }

      return componentType;
    };
    /*
    * Render a message component on the top of the list to draw attention upon landing
    */


    var renderBanner = function renderBanner() {
      var style = {
        textAlign: "center",
        marginBottom: 5
      };
      return _this12.props.banner && React.createElement("div", {
        id: "banner",
        style: style
      }, _this12.props.banner);
    }; // Render of component starts here


    return this.props.show && React.createElement("div", {
      style: this.props.isPopup ? {
        height: '100%'
      } : {
        margin: 30
      },
      "data-component-type": getComponentType(),
      "data-component-name": getComponentName()
    }, React.createElement(ListPage, {
      hideFrame: this.props.isPopup
    }, renderPageHeader(), React.createElement(PageBody, null, this.props.hasSideBar && React.createElement(SideBar, null, renderSidebarButtons(), renderSearch(), renderFilters()), React.createElement(ListPane, {
      alternateHeight: this.props.hasPageFooter
    }, React.createElement("div", null, renderBanner(), renderPaginationHeader(), renderTable(), renderSelectBoxDialogs())))));
  }
});
module.exports = ListPageBuilder;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./SideBarPrimaryButtonMenu.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./SideBarPrimaryButtonMenu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".popupMenuContainer {\n\twidth: 192px;\n\tborder: 2px solid #EAEAEA;\n\tborder-radius: 6px;\n\ttop: 38px;\n\tposition: absolute;\n\tright: 4px;\n\tbackground-color: white;\n\tz-index: 100;\n\tfont-size: 12px;\n}\n\n.popupMenuContainer .menuItem {\n\tpadding: 4px 10px;\n}\n\n.popupMenuContainer .menuItem:hover {\n\tbackground-color: #EAF0F4;\n}\n\n.popupMenuContainer .menuItem span {\n\tcursor: pointer;\n\tcolor: #346f8f;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: normal;\n\tdisplay: block;\n\tpadding: 4px 8px;\t\n}\n\n", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var MultiSelect = __webpack_require__(60);

var PrimaryButton = __webpack_require__(10);

__webpack_require__(138);

var MultiSelectPicker = React.createClass({
  displayName: "MultiSelectPicker",
  pickedAvailableItems: [],
  pickedSelectedItems: [],
  propTypes: {
    /**
     * An object with the following key value pairs for configuration of the available MultiSelect component.
     */
    availableListConfig: React.PropTypes.shape({
      /**
       * Each object will contain the value bound to the item and the text displayed in the item. If the assigned object is null, then it will be initialized to an empty array.
       */
      items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

      /**
       * The name of the key in the object bound to the item whose value will be bound to the value prop of the item. The value is assigned to the value attribute of the <option> element.
       */
      valuePropName: React.PropTypes.string,

      /**
       * The name of the key in the object bound to the item whose value is displayed as text of the item. The text is assigned as the inner text of the <option> element.
       */
      textPropName: React.PropTypes.string,

      /**
       * A function should be assigned as the value of this prop. The function will be called whenever the items in the list changes. The function will be passed the list of items in the list.
       */
      changeHandler: React.PropTypes.func,

      /**
       * The title prop value is displayed in the header of the component.
       */
      title: React.PropTypes.string
    }),

    /**
     * An object with the following key value pairs for configuration of the selected MultiSelect component.
     */
    selectedListConfig: React.PropTypes.shape({
      /**
       * Each object will contain the value bound to the item and the text displayed in the item. If the assigned object is null, then it will be initialized to an empty array.
       */
      items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

      /**
       * The name of the key in the object bound to the item whose value will be bound to the value prop of the item. The value is assigned to the value attribute of the <option> element.
       */
      valuePropName: React.PropTypes.string,

      /**
       * The name of the key in the object bound to the item whose value is displayed as text of the item. The text is assigned as the inner text of the <option> element.
       */
      textPropName: React.PropTypes.string,

      /**
       * A function should be assigned as the value of this prop. The function will be called whenever the items in the list changes. The function will be passed the list of items in the list.
       */
      changeHandler: React.PropTypes.func,

      /**
       * The title prop value is displayed in the header of the component.
       */
      title: React.PropTypes.string
    }),

    /**
     * Sets the tab index for the inner components. Each input component inside will be assigned an incremental tab index.
     */
    tabIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

    /**
     * If the id prop value is not set a id value is generated for the component.
     */
    id: React.PropTypes.string
  },
  getInitialState: function getInitialState() {
    var availableItems = [],
        selectedItems = [];

    if (this.props.availableListConfig && Array.isArray(this.props.availableListConfig.items) == true) {
      availableItems = _.clone(this.props.availableListConfig.items);
    }

    if (this.props.selectedListConfig && Array.isArray(this.props.selectedListConfig.items) == true) {
      selectedItems = _.clone(this.props.selectedListConfig.items);
    }

    return {
      availableItems: availableItems,
      selectedItems: selectedItems
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var availableItems = this.state.availableItems,
        selectedItems = this.state.selectedItems;

    if (newProps.availableListConfig && Array.isArray(newProps.availableListConfig.items) == true && _.isEqual(this.state.availableItems, newProps.availableListConfig.items) == false) {
      availableItems = _.clone(newProps.availableListConfig.items);
    }

    if (newProps.selectedListConfig && Array.isArray(newProps.selectedListConfig.items) == true && _.isEqual(this.state.selectedItems, newProps.selectedListConfig.items) == false) {
      selectedItems = _.clone(newProps.selectedListConfig.items);
    }

    this.setState({
      availableItems: availableItems,
      selectedItems: selectedItems
    });
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("multiSelectPicker");

    var tabIndex = null;

    if (typeof this.props.tabIndex == "number") {
      tabIndex = this.props.tabIndex - 1; // we want the first multiselect component to get the same tabIndex as the prop, but we increment inside the getTabIndex function, so to compensate we reduce 1.
    }

    var getTabIndex = function getTabIndex() {
      if (tabIndex == null) {
        return null;
      } else {
        return tabIndex++;
      }
    };

    var selectAllButtonClickHandler = function selectAllButtonClickHandler(event) {
      // copy items from available to selected
      // delete items from available & picked available.
      var selectedItems = _this.state.selectedItems;
      var availableItems = _this.state.availableItems;

      if (availableItems.length > 0) {
        var mergedItems = selectedItems.concat(availableItems);

        _this.setState({
          selectedItems: mergedItems,
          availableItems: []
        }, function () {
          if (typeof _this.props.availableListConfig.changeHandler == "function") {
            _this.props.availableListConfig.changeHandler([]);
          }

          if (typeof _this.props.selectedListConfig.changeHandler == "function") {
            _this.props.selectedListConfig.changeHandler(mergedItems);
          } // reset the search if any on the available multi select picker


          _this.availableMultiSelectPicker.search("");

          _this.pickedAvailableItems = [];
        });
      }
    };

    var deSelectSpecificButtonClickHandler = function deSelectSpecificButtonClickHandler(event) {
      // copy picked items from selected to available
      // remove the picked items from selected.
      var selectedItems = _this.state.selectedItems;
      var availableItems = _this.state.availableItems;
      var pickedSelectedItems = _this.pickedSelectedItems;

      if (pickedSelectedItems.length > 0) {
        var mergedItems = availableItems.concat(pickedSelectedItems);

        var remainingSelectedItems = _.difference(selectedItems, pickedSelectedItems);
        /**
         * Setting the state of the selectedItems (the items that moved to available)
         * to empty to avoid the state where the next item is focused but not selected.
         * In this state, you cannot select the focused (grey background) to move it, you
         * have to select another item and then select back the previous item that you want
         * to move to move it. Setting the list to empty removes any selection that the <select>
         * component has, and then we set it back to the actual list, so that nothing is selected.
         */


        _this.pickedSelectedItems = [];

        _this.setState({
          selectedItems: [],
          availableItems: mergedItems
        }, function () {
          _this.setState({
            selectedItems: remainingSelectedItems
          }, function () {
            if (typeof _this.props.availableListConfig.changeHandler == "function") {
              _this.props.availableListConfig.changeHandler(mergedItems);
            }

            if (typeof _this.props.selectedListConfig.changeHandler == "function") {
              _this.props.selectedListConfig.changeHandler(remainingSelectedItems);
            } // reset the search if any on the selected multi select picker


            _this.selectedMultiSelectPicker.search("");
          });
        });
      }
    };

    var selectSpecificButtonClickHandler = function selectSpecificButtonClickHandler(event) {
      // copy picked items from available to selected
      // remove the picked items from available.
      var selectedItems = _this.state.selectedItems;
      var availableItems = _this.state.availableItems;
      var pickedAvailableItems = _this.pickedAvailableItems;

      if (pickedAvailableItems.length > 0) {
        var mergedItems = selectedItems.concat(pickedAvailableItems);

        var remainingAvailableItems = _.difference(availableItems, pickedAvailableItems);
        /**
         * Setting the state of the availableItems (the items that moved to selected)
         * to empty to avoid the state where the next item is focused but not selected.
         * In this state, you cannot select the focused (grey background) to move it, you
         * have to select another item and then select back the previous item that you want
         * to move to move it. Setting the list to empty removes any selection that the <select>
         * component has, and then we set it back to the actual list, so that nothing is selected.
         */


        _this.pickedAvailableItems = [];

        _this.setState({
          availableItems: [],
          selectedItems: mergedItems
        }, function () {
          _this.setState({
            availableItems: remainingAvailableItems
          }, function () {
            if (typeof _this.props.availableListConfig.changeHandler == "function") {
              _this.props.availableListConfig.changeHandler(remainingAvailableItems);
            }

            if (typeof _this.props.selectedListConfig.changeHandler == "function") {
              _this.props.selectedListConfig.changeHandler(mergedItems);
            } // reset the search if any on the available multi select picker


            _this.availableMultiSelectPicker.search("");
          });
        });
      }
    };

    var deSelectAllButtonClickHandler = function deSelectAllButtonClickHandler(event) {
      // copy items from selected to available
      // delete items from selected & picked selected.
      var selectedItems = _this.state.selectedItems;
      var availableItems = _this.state.availableItems;

      if (selectedItems.length > 0) {
        var mergedItems = availableItems.concat(selectedItems);

        _this.setState({
          selectedItems: [],
          availableItems: mergedItems
        }, function () {
          if (typeof _this.props.availableListConfig.changeHandler == "function") {
            _this.props.availableListConfig.changeHandler(mergedItems);
          }

          if (typeof _this.props.selectedListConfig.changeHandler == "function") {
            _this.props.selectedListConfig.changeHandler([]);
          } // reset the search if any on the available multi select picker


          _this.selectedMultiSelectPicker.search("");

          _this.pickedSelectedItems = [];
        });
      }
    };

    var availableMultiSelectPickerChangeHandler = function availableMultiSelectPickerChangeHandler(pickedItems) {
      _this.pickedAvailableItems = pickedItems;
    };

    var selectedMultiSelectPickerChangeHandler = function selectedMultiSelectPickerChangeHandler(pickedItems) {
      _this.pickedSelectedItems = pickedItems;
    };

    var availableMultiSelectPickerDoubleClickHandler = function availableMultiSelectPickerDoubleClickHandler(pickedItems, evt) {
      _this.pickedAvailableItems = pickedItems;
      selectSpecificButtonClickHandler(evt);
    };

    var selectedMultiSelectPickerDoubleClickHandler = function selectedMultiSelectPickerDoubleClickHandler(pickedItems, evt) {
      _this.pickedSelectedItems = pickedItems;
      deSelectSpecificButtonClickHandler(evt);
    };

    return React.createElement("div", {
      id: id,
      className: "multiSelectPicker-container"
    }, React.createElement("div", {
      id: "availableMultiSelectPickerContainer"
    }, React.createElement(MultiSelect, {
      id: "availableMultiSelectPicker",
      data: this.state.availableItems,
      tabIndex: getTabIndex(),
      valuePropName: this.props.availableListConfig.valuePropName,
      textPropName: this.props.availableListConfig.textPropName,
      changeHandler: availableMultiSelectPickerChangeHandler,
      title: this.props.availableListConfig.title,
      ref: function ref(multiSelect) {
        _this.availableMultiSelectPicker = multiSelect;
      },
      doubleClickHandler: availableMultiSelectPickerDoubleClickHandler
    })), React.createElement("div", {
      id: "selectionButtonsContainer",
      className: "multiSelectPicker-selectionButtonsContainer"
    }, React.createElement("div", {
      id: "selectAllButtonContainer",
      className: "multiSelectPicker-selectButtonContainer"
    }, React.createElement(PrimaryButton, {
      id: "selectAllButton",
      icon: "fa fa-angle-double-right",
      tabIndex: getTabIndex(),
      clickHandler: selectAllButtonClickHandler
    })), React.createElement("div", {
      id: "selectSpecificButtonContainer",
      className: "multiSelectPicker-selectButtonContainer"
    }, React.createElement(PrimaryButton, {
      id: "selectSpecificButton",
      icon: "fa fa-angle-right",
      tabIndex: getTabIndex(),
      clickHandler: selectSpecificButtonClickHandler
    })), React.createElement("div", {
      id: "deSelectSpecificButtonContainer",
      className: "multiSelectPicker-selectButtonContainer"
    }, React.createElement(PrimaryButton, {
      id: "deSelectSpecificButton",
      icon: "fa fa-angle-left",
      tabIndex: getTabIndex(),
      clickHandler: deSelectSpecificButtonClickHandler
    })), React.createElement("div", {
      id: "deSelectAllButtonContainer",
      className: "multiSelectPicker-selectButtonContainer"
    }, React.createElement(PrimaryButton, {
      id: "deSelectAllButton",
      icon: "fa fa-angle-double-left",
      tabIndex: getTabIndex(),
      clickHandler: deSelectAllButtonClickHandler
    }))), React.createElement("div", {
      id: "selectedMultiSelectPickerContainer"
    }, React.createElement(MultiSelect, {
      id: "selectedMultiSelectPicker",
      data: this.state.selectedItems,
      tabIndex: getTabIndex(),
      valuePropName: this.props.selectedListConfig.valuePropName,
      textPropName: this.props.selectedListConfig.textPropName,
      changeHandler: selectedMultiSelectPickerChangeHandler,
      title: this.props.selectedListConfig.title,
      ref: function ref(multiSelect) {
        _this.selectedMultiSelectPicker = multiSelect;
      },
      doubleClickHandler: selectedMultiSelectPickerDoubleClickHandler
    })));
  }
});
module.exports = MultiSelectPicker;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./MultiSelectPicker.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./MultiSelectPicker.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".multiSelectPicker-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.multiSelectPicker-selectionButtonsContainer {\n    padding-left: 18px;\n    padding-right: 18px;\n    height: 290px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.multiSelectPicker-selectButtonContainer {\n    padding-top: 3px;\n    padding-bottom: 3px;\n}", ""]);

// exports


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Overlay component.
 * @param {Boolean} show display propertye, false by detault.
 * @param {String} type Type of the overlay it supports types confirm, save and delete. "confirm" type is the default one. 
 * @param {String} headerText Title of the Overlay.
 * @param {String} bodyText Body text.
 * @param {String} footerButtonText Footer button text.
 * @param {String} footerSecondayButtonText Secondary footer button text in case of "save" type.
 * @param {Function} confirmClickHandler Handler to be passed into the component. It is called when the cofirm button is clicked.
 * @param {Function} cancelClickHandler Handler to be passed into the component that is called when the user clicks the 'x' icon or cancel link to close the overlay.
 * @param {Function} secondaryButtonClickHandler Handler to be passed into the component. It is called when the secondary footer button is clicked.
 */


var Overlay =
/*#__PURE__*/
function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overlay).call(this, props));
    _this.confirmClickHandler = _this.confirmClickHandler.bind(_assertThisInitialized(_this));
    _this.cancelClickHandler = _this.cancelClickHandler.bind(_assertThisInitialized(_this));
    _this.secondaryButtonClickHandler = _this.secondaryButtonClickHandler.bind(_assertThisInitialized(_this)); //style

    _this.dialogBackdrop = {
      backgroundColor: "#555",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1040,
      opacity: 0.8,
      display: "block"
    };
    _this.modal = {
      backgroundColor: "#fff",
      fontSize: "12px",
      width: 610,
      position: "fixed",
      left: "calc(50% - 305px)",
      top: "10%",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: 1050,
      border: "1px solid #CFCFCF",
      outline: "none"
    };
    _this.header = {
      padding: "21px 20px",
      lineHeight: "22px"
    };
    _this.headerTitle = {
      fontFamily: "verdana",
      fontWeight: "bold",
      fontSize: 18,
      color: "#333333"
    };
    _this.headerClose = {
      float: "right",
      color: "#CACBCA",
      fontSize: 18,
      top: 2,
      position: "relative",
      cursor: "pointer"
    };
    _this.body = {
      borderTop: "1px solid #E1E1E1",
      borderBottom: "1px solid #E1E1E1",
      padding: "28px 40px",
      fontFamily: "verdana",
      fontSize: 14,
      color: "#333333"
    };
    _this.footer = {
      padding: "16px 20px",
      backgroundColor: "#f5f5f5",
      textAlign: "right"
    };
    _this.footerButton = {
      borderRadius: 15,
      border: "1px solid #D3D4D6",
      background: "linear-gradient(top, #fff, #ebf1f5); background: -webkit-linear-gradient(top, #fff, #ebf1f5); background: -moz-linear-gradient(top, #fff, #ebf1f5); background: -ms-linear-gradient(top, #fff, #ebf1f5); background: linear-gradient(top, #fff, #ebf1f5)",
      color: "#285c7e",
      textShadow: "0px 0px 0 rgba(0,0,0,0.3)",
      boxShadow: "#9DA1A4 0 1px 2px",
      fontFamily: "Verdana",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 12,
      padding: "5px 20px",
      outline: "none"
    };
    _this.footerButtonSecondary = Object.assign({}, _this.footerButton);
    _this.footerButtonSecondary.float = "left";
    _this.footerCancelButton = {
      background: "transparent",
      border: "none",
      fontFamily: "Verdana",
      color: "#346f8f",
      marginRight: 10,
      marginTop: 6,
      fontSize: 12,
      outline: "none"
    };
    _this.footerCancelIcon = {
      cursor: "pointer",
      paddingRight: 3 //Default Text defintions.

    };
    _this.headerText = props.headerText || (props.type === "confirm" ? "Confirm" : props.type === "save" ? "Save" : "Error");
    _this.bodyText = props.bodyText || (props.type === "confirm" ? "Do you want to delete?" : props.type === "save" ? "Your changes will be lost if you don't save them" : 'Error Meessage');
    _this.footerButtonText = props.footerButtonText || (props.type === "confirm" ? "Ok" : props.type === "save" ? "Save" : "Ok");
    _this.footerSecondayButtonText = props.footerSecondayButtonText || "Don't Save";
    return _this;
  } //custom methods


  _createClass(Overlay, [{
    key: "confirmClickHandler",
    value: function confirmClickHandler() {
      console.log("confirmClickHandler:");

      if (typeof this.props.confirmClickHandler == "function") {
        this.props.confirmClickHandler();
      } else {
        event.stopPropagation();
      }
    }
  }, {
    key: "cancelClickHandler",
    value: function cancelClickHandler() {
      console.log("cancelClickHandler:");

      if (typeof this.props.cancelClickHandler == "function") {
        this.props.cancelClickHandler();
      } else {
        event.stopPropagation();
      }
    }
  }, {
    key: "secondaryButtonClickHandler",
    value: function secondaryButtonClickHandler() {
      console.log("secondaryButtonClickHandler:");

      if (typeof this.props.secondaryButtonClickHandler == "function") {
        this.props.secondaryButtonClickHandler();
      } else {
        event.stopPropagation();
      }
    }
  }, {
    key: "renderFooterSecondaryButton",
    value: function renderFooterSecondaryButton() {
      if (this.props.type === "save") {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          style: this.footerButtonSecondary,
          onClick: this.secondaryButtonClickHandler
        }, this.footerSecondayButtonText, " ");
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.show) {
        return null;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.dialogBackdrop
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.modal
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.header
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-times",
        style: this.headerClose,
        onClick: this.cancelClickHandler
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.headerTitle
      }, this.headerText)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.body
      }, this.bodyText), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: this.footer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: this.footerCancelButton,
        onClick: this.cancelClickHandler
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-times-circle-o",
        style: this.footerCancelIcon
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Cancel1234")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        style: this.footerButton,
        onClick: this.confirmClickHandler
      }, this.footerButtonText, " "), this.renderFooterSecondaryButton())));
    }
  }]);

  return Overlay;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


Overlay.propTypes = {
  show: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOf(['confirm', 'save', 'delete']),
  headerText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  bodyText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  footerButtonText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  footerSecondayButtonText: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};
Overlay.defaultProps = {
  show: false,
  type: "confirm"
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);
/*
* This control is used as an icon with a purpose (member/action type etc),
* which has details explained in terms of props - headerText and title(showing action items related information)
* It can be found on Dashbord or in group of icons representing memebers/action types etc on a Panel
*/


var PanelButton = React.createClass({
  displayName: "PanelButton",
  getInitialState: function getInitialState() {
    return {
      headerText: this.props.headerText || '',
      title: this.props.title || '',
      icon: this.props.icon,
      overlayIcon: this.props.overlayIcon,
      fileURL: this.props.fileURL,
      data: this.props.data,
      type: this.props.type
    };
  },
  // custom methods
  clickHandler: function clickHandler(event) {
    if (typeof this.props.clickHandler == "function") {
      this.props.clickHandler(this.state.data, event);
    }

    event.stopPropagation();
  },
  // custom methods
  showActions: function showActions() {
    if (typeof this.props.showActions == "function") {
      this.props.showActions(this.state.data);
    }
  },
  // custom methods
  hideActions: function hideActions() {
    if (typeof this.props.hideActions == "function") {
      this.props.hideActions(this.state.data);
    }
  },
  // lifecycle event handlers
  propTypes: {
    /**
     * Function handler for the button click event.
     * The row data item is passed in as the first argument and the click event object as the second argument to the handler.
     */
    clickHandler: React.PropTypes.func,

    /**
     * CSS class for icon. Example "fa fa-database" for the font-awesome icon.
     */
    icon: React.PropTypes.string,

    /**
        * CSS class for overlayIcon. Example "fa fa-database" for the font-awesome icon. This icon is overlapping on first icon
        */
    overlayIcon: React.PropTypes.string,

    /**
     * Text to display on the button.
     */
    headerText: React.PropTypes.string,

    /**
     * Sets whether the button is enabled or not. This takes precedence over the enabledPropName prop.
     */
    enabled: React.PropTypes.bool,

    /**
     * To determine the style and implementation of this component behaviour and rendering
    * Default is Dashboard type
    * dashboard type - it has different style and it is displayed on dashboard (big icon)
    * panel type - it has different style and it is displayed on panel along with other group of icons (small icon)
     */
    type: React.PropTypes.oneOf(["dashboard", "panel"]),
    iconType: React.PropTypes.oneOf(["PEA", "bonusPool"])
  },
  descriptionStyle: {
    wordWrap: 'break-word',
    textAlign: 'center'
  },
  headerTextStyle: {
    wordWrap: 'break-word',
    textAlign: 'center',
    color: '#346f8f'
  },
  titleStyle: {
    position: 'absolute',
    textAlign: 'center'
  },
  buttonStyle: {
    width: 140,
    height: 115,
    padding: '10px'
  },
  iconStyle: {
    color: "#346484",
    width: 50
  },
  imgStyle: {
    position: 'absolute',
    top: 52,
    left: 60,
    opacity: 0.33,
    height: 36
  },
  getDefaultProps: function getDefaultProps() {
    return {
      type: 'dashboard',
      iconType: 'PEA'
    };
  },
  render: function render() {
    var _this = this;

    if (this.props.type === 'panel') {
      if (this.props.iconType == 'bonusPool') {
        this.headerTextStyle.position = 'relative';
        this.headerTextStyle.fontSize = 10;
        this.headerTextStyle.width = 88;
        this.buttonStyle.padding = 0;
        this.buttonStyle.paddingTop = 10;
        this.titleStyle.position = 'relative';
        this.titleStyle.top = 50;
        this.titleStyle.width = 80;
        this.titleStyle.padding = '1px 4px';
        this.titleStyle.height = 20;
        this.titleStyle.whiteSpace = 'nowrap';
        this.titleStyle.overflow = 'hidden';
        this.titleStyle.textOverflow = 'ellipsis';
      } else {
        this.headerTextStyle.position = 'absolute';
        this.headerTextStyle.left = 0;
        this.headerTextStyle.fontSize = 10;
        this.headerTextStyle.width = 88;
        this.buttonStyle.padding = 10;
        this.titleStyle.position = 'absolute';
        this.titleStyle.top = 88;
        this.titleStyle.width = 80;
        this.titleStyle.padding = '0px 4px';
      }

      this.descriptionStyle.position = 'absolute';
      this.descriptionStyle.top = 10;
      this.descriptionStyle.left = 0;
      this.buttonStyle.width = 65;
      this.buttonStyle.height = 103;
      this.titleStyle.right = 0;
      this.titleStyle.left = 0;
    } else {
      this.headerTextStyle.position = 'relative';
      this.headerTextStyle.paddingTop = 5;
      this.headerTextStyle.fontSize = 14;
      this.headerTextStyle.fontWeight = 'bold';
      this.headerTextStyle.width = 140;
      this.descriptionStyle.position = 'relative';
      this.descriptionStyle.top = 12;
      this.descriptionStyle.left = 16;
      this.buttonStyle.width = 140;
      this.buttonStyle.height = 115;
      this.titleStyle.left = 15;
      this.titleStyle.top = 112;
      this.titleStyle.right = 0;
      this.titleStyle.bottom = 0;
      this.titleStyle.width = 126;
      this.titleStyle.whiteSpace = 'nowrap';
      this.titleStyle.overflow = 'hidden';
      this.titleStyle.textOverflow = 'ellipsis';
      this.titleStyle.fontSize = 10;
    }

    var overlayIconStyle = {
      color: "#346484",
      fontSize: 15,
      position: 'absolute',
      paddingTop: 42,
      paddingLeft: 86
    };

    if (this.props.type == "panel") {
      this.iconStyle.paddingTop = 35;
      this.iconStyle.paddingLeft = 18;
      this.iconStyle.width = 35;
      this.iconStyle.opacity = 1;

      if (this.props.iconType == 'bonusPool') {
        this.iconStyle.position = "relative";
        this.iconStyle.marginTop = -10;
        this.iconStyle.paddingTop = 0;
        this.iconStyle.paddingLeft = 28;
      }

      overlayIconStyle.fontSize = 15;
      overlayIconStyle.paddingTop = 50;
      overlayIconStyle.paddingLeft = 42;
    } else {
      this.iconStyle.position = "absolute";
      this.iconStyle.paddingTop = 7;
      this.iconStyle.paddingLeft = 50;
      this.iconStyle.width = 50;
    }

    var renderPrimaryIcon = function renderPrimaryIcon() {
      if (_this.props.icon) {
        if (_this.state.enabled == false) {
          _this.iconStyle.color = "#999999";
        } else {
          _this.iconStyle.color = "#346484";
        }

        return React.createElement("img", {
          style: _this.iconStyle,
          src: _this.state.fileURL
        });
      } else {
        return null;
      }
    };

    var renderOverlayIcon = function renderOverlayIcon() {
      if (_this.props.overlayIcon) {
        if (_this.state.enabled == false) {
          overlayIconStyle.color = "#999999";
        } else {
          overlayIconStyle.color = "#346484";
        }

        return React.createElement("span", {
          style: overlayIconStyle,
          className: _this.props.overlayIcon
        });
      } else {
        return null;
      }
    };

    var renderStatusBar = function renderStatusBar() {
      if (_this.props.type == 'dashboard' && _this.props.iconType == 'bonusPool') {
        return React.createElement("div", {
          className: "statusBar"
        }, React.createElement("button", {
          className: "statusButton hide x-button-small"
        }, React.createElement("i", {
          className: "fa fa-lg fa-plus-circle dashboard-create",
          "aria-hidden": "true"
        }), React.createElement("span", null, _this.props.statusTitle)));
      } else {
        return null;
      }
    };

    return React.createElement("div", {
      style: this.buttonStyle,
      onClick: this.clickHandler,
      onMouseOver: this.showActions,
      onMouseOut: this.hideActions
    }, React.createElement("div", {
      style: this.headerTextStyle
    }, this.state.headerText), React.createElement("div", {
      style: this.titleStyle,
      title: this.state.title
    }, this.state.title), renderPrimaryIcon(), renderStatusBar());
  }
});
module.exports = PanelButton;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var RateTableHeader = __webpack_require__(83);

var RateTableRow = __webpack_require__(84);

var SecondaryButton = __webpack_require__(2);

var _ = __webpack_require__(1);

var tableStyle = {
  width: '100%',
  margin: '0',
  display: 'inline-block'
};
var divStyle = {
  display: 'inline-block',
  verticalAlign: 'top'
};
var secondaryButtonStyle = {
  'margin-top': '5px'
};
var RateTable = React.createClass({
  displayName: "RateTable",
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var rangeList = newProps.rangeList;
    this.setState({
      rangeList: rangeList
    });
  },
  getInitialState: function getInitialState() {
    var rangeList = this.props.rangeList;
    return {
      rangeList: rangeList // value set by prop because it is the default value

    };
  },
  handleClick: function handleClick() {
    var rangeList = this.state.rangeList || [];
    rangeList.push({
      rangeLow: 0,
      rangeHigh: 0,
      rangeValue: 0
    });
    this.setState({
      rangeList: rangeList
    });
  },
  updateState: function updateState(newState) {
    this.setState({
      rangeList: newState
    });
    this.props.updateRowStyle();
  },
  render: function render() {
    var key = _.uniqueId("rateTable_");

    var results = this.state.rangeList;
    var headers = this.props.headers;
    var addRow = this.props.addRow;

    var id = this.props.id || _.uniqueId("rateTable_");

    return React.createElement("div", {
      style: divStyle
    }, React.createElement("table", {
      style: tableStyle,
      id: id,
      key: key
    }, React.createElement(RateTableHeader, {
      headers: headers
    }), React.createElement(RateTableRow, {
      rows: results,
      updateState: this.updateState,
      onDeleteRow: this.updateState,
      onValueChange: this.props.validate
    })), React.createElement(SecondaryButton, {
      style: secondaryButtonStyle,
      icon: "fa fa-plus-circle",
      text: addRow,
      clickHandler: this.handleClick
    }));
  }
});
module.exports = RateTable;

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_tinymce__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_tinymce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_tinymce__);
var React = __webpack_require__(0);

var PrimaryButton = __webpack_require__(10);

var SecondaryButton = __webpack_require__(2);

var ModalDialog = __webpack_require__(36);

var ListPage = __webpack_require__(34);

var PageBody = __webpack_require__(38);

var PageHeader = __webpack_require__(37);

var PageFooter = __webpack_require__(21);

var ListPane = __webpack_require__(35);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableTextColumn = __webpack_require__(13);

var _ = __webpack_require__(1);


var RichTextEditor = React.createClass({
  displayName: "RichTextEditor",
  getInitialState: function getInitialState() {
    return {
      content: this.props.data,
      showModalDialog: false,
      selectedRowIndex: 0,
      currentRng: null,
      disabled: this.props.disabled,
      editorId: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    this.setState({
      content: newProps.data,
      disabled: newProps.disabled
    });
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {
    tinymce.EditorManager.execCommand('mceRemoveEditor', true, this.props.id);
  },
  handleEditorChange: function handleEditorChange(event) {
    var content = this.getCurrentEditor().getContent();
    this.state.content = content; // if (!this.state.showModalDialog && typeof this.props.changeHandler == "function") {

    if (typeof this.props.changeHandler == "function") {
      this.props.changeHandler(content, event);
    }
  },
  handleKeyPress: function handleKeyPress(event) {
    var keyCode = event.keyCode;
  },
  handleKeyDown: function handleKeyDown(event) {
    if (typeof this.props.keyDownHandler == "function") {
      this.props.keyDownHandler(this.getCurrentEditor(), event);
    }
  },
  handleFocusOut: function handleFocusOut(event) {
    if (typeof this.props.focusLostHandler == "function") {
      this.props.focusLostHandler(this.getCurrentEditor(), event);
    }
  },
  handleClick: function handleClick(event) {
    var target = event.target;

    if (target.className.indexOf('dynamicVar') !== -1) {
      this.state.selectedRowIndex = parseInt(target.getAttribute("data-selectedrowindex"));
      this.contentBeforeEditCancel = this.getCurrentEditor().getContent();
      this.handleSelection();
      this.setState({
        showModalDialog: true
      });
    }
  },
  handleSelection: function handleSelection() {
    var sel = this.getCurrentEditor().selection;
    sel.setContent('<span id="_dynamic_var">&nbsp;</span>');
    this.updatedContent = this.getCurrentEditor().getContent();
  },
  setModalDialogState: function setModalDialogState() {
    this.setState({
      showModalDialog: true
    });
  },
  hideModalDialog: function hideModalDialog() {
    this.state.content = this.contentBeforeEditCancel;
    this.setState({
      showModalDialog: false
    });
  },
  selectVariable: function selectVariable(rowData, selectedRowIndex) {
    var id = _.uniqueId(rowData.value + '_');

    var html = '<span data-selectedRowIndex="' + selectedRowIndex + '" id="' + id + '" class="' + id + ' dynamicVar mceNonEditable" style="margin:0 5px;">' + rowData.value + '</span>';
    this.getCurrentEditor().setContent(this.updatedContent);
    var editor = this.getCurrentEditor();
    var marker = editor.dom.get('_dynamic_var');
    editor.selection.select(marker, false);
    editor.selection.setContent(html);
    this.focusNode = this.getCurrentEditor().contentDocument.getSelection().focusNode;
    editor.insertContent("");
    this.state.selectedRowIndex = selectedRowIndex;
    this.contentBeforeEditCancel = editor.getContent();
    this.setState({
      showModalDialog: false
    });
  },
  getCurrentEditor: function getCurrentEditor() {
    var currentEditor = tinymce.activeEditor;

    if (this.state.editorId && tinymce.get(this.state.editorId)) {
      currentEditor = tinymce.get(this.state.editorId);
    }

    return currentEditor;
  },
  propTypes: {
    /**
     * The id for the component.
     */
    id: React.PropTypes.string,

    /**
     * Control will be disabled when this value is true.
     */
    disabled: React.PropTypes.bool,

    /**
     * Users of the control can pass in an event handler to get notified when the value changes.
     * The handler is passed in the changed value and the event object.
     */
    changeHandler: React.PropTypes.func,

    /**
     * Editor will have the dynamic vairables support,  if this value is set to true.
     */
    loadDynamicVariables: React.PropTypes.bool,

    /**
     * Set this prop value to a function that is called when the editor loses focus.
     */
    focusLostHandler: React.PropTypes.func,

    /**
     * Set this prop value to load the editor utils in specific language.
     */
    languageCode: React.PropTypes.string,

    /**
     * Editor will have menubar if this value is set to true.
     */
    loadMenubar: React.PropTypes.bool,

    /**
     * Editor will have basic toolbar with all control utilities like cut, copy, paste, insert etc., if this value is set to true.
     */
    loadBasicToolbar: React.PropTypes.bool,

    /**
     * Editor will have the rich text toolbar with the utilities like print, preview, color etc.,  if this value is set to true.
     */
    loadRichTextToolbar: React.PropTypes.bool,

    /**
     * Editor will have statusbar if this value is set to true.
     */
    loadStatusbar: React.PropTypes.bool,

    /**
     * The height of the editor in pixels.
     */
    height: React.PropTypes.number,

    /**
     * The width of the editor in pixels.
     */
    width: React.PropTypes.number,

    /**
     * The type of the editor - simple/extended.
     */
    type: React.PropTypes.string,

    /**
     * Label for variables list button.
     */
    variablesButtonLabel: React.PropTypes.string,

    /**
     * Editor will have plugins if this value is set to true.
     */
    loadBasicPlugins: React.PropTypes.bool,

    /**
     * Pressing enter key wiil de disabled if this value is set to true.
     */
    enterKeyDisabled: React.PropTypes.bool,

    /**
     * Set this prop value to a function that is called on keydown event.
     */
    keyDownHandler: React.PropTypes.func
  },
  render: function render() {
    var self = this;
    var dynamicVariablesPlugin = this.props.loadDynamicVariables ? 'variables' : '';
    var plugins = [];
    if (this.props.loadBasicPlugins) plugins.push('nonbreaking noneditable');else plugins.push('advlist autolink lists link image charmap print preview hr anchor pagebreak autoresize', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu noneditable directionality', 'emoticons template paste textcolor colorpicker textpattern imagetools');
    var toolbar = [];
    if (this.props.loadBasicToolbar) toolbar.push('undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | ' + dynamicVariablesPlugin);
    if (this.props.loadRichTextToolbar) toolbar.push('print preview media | forecolor backcolor emoticons |');
    if (this.props.loadDynamicVariables && !this.props.loadBasicToolbar) toolbar.push('variables');
    if (toolbar.length == 0) toolbar = false;
    var contentStyle = this.props.type === "simple" ? "#" + this.props.id + " {padding: 1px !important; overflow-y: hidden !important;} #" + this.props.id + " p {margin: 5px 0px}" : "";
    contentStyle += ".dynamicVar {border:1px solid #cfe6f7;background-color:#ecf4f6;cursor:pointer;} .mce-content-body table{width:80% !important; margin: 5px !important; border: none !important;} .mce-content-body table td, .mce-content-body table td p{vertical-align: top !important;}" + ".mce-content-body table td p{margin:0 !important} .mce-content-body p {margin: 5px !important;}";
    return React.createElement("div", null, React.createElement(__WEBPACK_IMPORTED_MODULE_0_react_tinymce___default.a, {
      content: this.state.content,
      config: {
        selector: 'textarea',
        theme: 'modern',
        height: this.props.height || 200,
        width: this.props.width || 800,
        inline: false,
        autoresize_min_height: this.props.height || 200,
        autoresize_max_height: this.props.type === "simple" ? this.props.height : 400,
        max_height: this.props.type === "simple" ? this.props.height : 400,
        body_id: this.props.id,
        resize: true,
        menubar: this.props.loadMenubar,
        langugage_url: this.props.languageCode && __webpack_require__(146)("./" + this.props.languageCode),
        readonly: this.state.disabled,
        extended_valid_elements: 'img[class=myclass|!src|border:0|alt|title|width|height|style]',
        plugins: plugins,
        toolbar: toolbar,
        statusbar: this.props.loadStatusbar,
        image_advtab: true,
        content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i', '//www.tinymce.com/css/codepen.min.css'],
        content_style: contentStyle,
        setup: function setup(editor) {
          editor.on('init', function (e) {
            self.state.editorId = editor.id;
            editor.focus();

            if (self.focusNode) {
              var className = self.focusNode.parentNode.className;
              editor.selection.select(editor.getBody().getElementsByClassName(className)[0], true);
              editor.selection.collapse(false); //editor.getBody().getElementsByClassName(className)[0].scrollIntoView(true);

              self.focusNode = null;
            } //For height less than 100, need to resize 


            if (self.props.type == "simple" && self.props.height <= 100) {
              editor.theme.resizeTo(editor.getWin().clientWidth, self.props.height);
            }
          });
          editor.addButton('variables', {
            type: 'button',
            text: self.props.variablesButtonLabel || 'Variables List',
            icon: true,
            onclick: function onclick(e) {
              self.state.selectedRowIndex = 0;
              self.handleSelection();
              self.setModalDialogState();
            }
          });
          editor.on('keydown', function (event) {
            if (self.props.enterKeyDisabled && event.keyCode === 13) {
              return false;
            }
          });
        }
      },
      onChange: this.handleEditorChange,
      onKeypress: this.handleKeyPress,
      onKeydown: this.handleKeyDown,
      onBlur: this.handleFocusOut,
      onClick: this.handleClick
    }), React.createElement("br", null), React.createElement(ModalDialog, {
      modalIsOpen: this.state.showModalDialog,
      zIndex: 1000,
      size: "small"
    }, React.createElement(ListPage, {
      hideFrame: true
    }, React.createElement(PageHeader, {
      title: "Variables"
    }, React.createElement(SecondaryButton, {
      text: "Cancel",
      icon: "fa fa-times-circle-o",
      clickHandler: this.hideModalDialog
    })), React.createElement(PageBody, {
      isPopup: true
    }, React.createElement(ListPane, null, React.createElement(Table, {
      id: "normalTable",
      data: this.props.variablesList,
      rowClickHandler: this.selectVariable,
      selectedRowIndex: this.state.selectedRowIndex
    }, React.createElement(TableNormalRow, null, React.createElement(TableTextColumn, {
      textPropertyName: this.props.textPropName
    }))))), React.createElement(PageFooter, null, React.createElement(PageFooter.RightPane, null, React.createElement(SecondaryButton, {
      text: "Cancel",
      icon: "fa fa-times-circle-o",
      clickHandler: this.hideModalDialog
    }))))));
  }
});
module.exports = RichTextEditor;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(144)(module)))

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("react-tinymce");

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": 85,
	"./de.js": 85,
	"./es": 86,
	"./es.js": 86,
	"./fr_FR": 87,
	"./fr_FR.js": 87,
	"./nb_NO": 88,
	"./nb_NO.js": 88,
	"./nl": 89,
	"./nl.js": 89,
	"./sv_SE": 90,
	"./sv_SE.js": 90
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 146;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var SampleControl = React.createClass({
  displayName: "SampleControl",
  render: function render() {
    return React.createElement("div", null, "Sample Control from XUICommon");
  }
});
module.exports = SampleControl;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Component that adds the <tbody> tag to the Table component
var React = __webpack_require__(0);

var TableBody = React.createClass({
  displayName: "TableBody",
  render: function render() {
    var _this = this;

    var rows = null;
    var data = this.props.data;

    if (data) {
      rows = data.map(function (item, index, arr) {
        return React.Children.map(_this.props.children, function (rowTemplate) {
          return React.cloneElement(rowTemplate, {
            rowData: item,
            key: index,
            dataIndex: index,
            itemId: item.id
          });
        });
      });
    }

    return React.createElement("tbody", null, rows);
  }
});
module.exports = TableBody;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// Sample column component that shows how to add custom HTML to a column
// in the Table component
var React = __webpack_require__(0);

var AbstractTableColumn = __webpack_require__(15);

var TableContainerColumn = React.createClass({
  displayName: "TableContainerColumn",
  render: function render() {
    var rowData = this.props.rowData;
    var content = React.createElement("table", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("img", {
      style: {
        width: 100,
        height: 100
      },
      src: rowData.pic
    })), React.createElement("td", null, React.createElement("span", null, rowData.fname + " " + rowData.lname))));
    return React.cloneElement(AbstractTableColumn, this.props, content);
  }
});
module.exports = TableContainerColumn;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {/**
 * Component to show text inside a column in the SimpleTable component which can be turned into a textbox with the enabled property
 * @param {Boolean} editable Value that decides whether the text is editable or not.
 * @param {String} editablePropertyName Name of the property whose value we want to use for the editable
 *                 prop. This property should be part of the row data object.
 * @param {String} id Identifier for the checkbox. Will be rendered as id attribute.
 *                 The id attribute takes precedence over the idPropertyName attribute when computing the id.
 * @param {String} idPropertyName Identifier for the checkbox. Will be rendered as id attribute. 
 *                 The name of the property we want to use to get the value of the id attribute
 *                 for the checkbox control from the row data object.
 * @param {String} textPropertyName Name of the property in the object bound to the row whose value we want to display
 * @param {String} tooltipPropertyName Name of the property in the object bound to the row whose value we want to display as a tooltip
 * @param {Number} length Length of the textbox
 * @param {Number} maxLength Max length after which we want to truncate the text displayed
 */
var React = __webpack_require__(0);

var AbstractTableColumn = __webpack_require__(15);

var TableTextColumn = __webpack_require__(13);

var HelperActionsMixins = __webpack_require__(25);

var textboxStyle = {
  width: 200,
  height: 10,
  marginBottom: 0,
  marginTop: 0
};
var TableEditableTextColumn = React.createClass({
  displayName: "TableEditableTextColumn",
  // custom properties
  id: null,
  // custom properties
  // custom methods

  /**
   * Helper function to set the state of the newValue and update the original dataset
   */
  setValue: function setValue(newValue) {
    this.setState({
      newValue: newValue
    });

    if (this.props.textPropertyName && this.props.textPropertyName.length > 0) {
      this.props.rowData[this.props.textPropertyName] = newValue;
    }
  },
  // custom methods
  // lifecycle event handlers
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // if the control is in editable state, then show text box else a label
    // we have set the state to the original value here when the component is not editable
    // because we are setting state here for 'newValue' and we cannot do that from render.
    var editable = false;

    if (this.props.editable != undefined && this.props.editable != null) {
      editable = this.props.editable;
    } else if (this.props.editablePropertyName && this.props.editablePropertyName.length > 0) {
      editable = this.props.rowData[this.props.editablePropertyName];
    }

    if (editable == false) {
      // reset the value to the original value if different from new value
      if (this.state.originalValue != this.state.newValue) {
        this.setValue(this.state.originalValue);
      }
    }
  },
  getInitialState: function getInitialState() {
    // store the original value. Initially the new value will be the same as the original value
    var originalValue = null,
        newValue = null;

    if (this.props.textPropertyName && this.props.textPropertyName.length > 0) {
      originalValue = this.props.rowData[this.props.textPropertyName];
      newValue = originalValue;
    }

    return {
      newValue: newValue,
      originalValue: originalValue
    };
  },
  mixins: [HelperActionsMixins],
  render: function render() {
    var _this = this;

    /**
     * Function called when the text box value changes. Sets the state of the value.
     */
    var handleChange = function handleChange(event) {
      _this.setValue(event.target.value);
    }; // add id attribute


    if (this.props.id && this.props.id.length > 0) {
      this.id = this.props.id;
    } else if (this.props.idPropertyName && this.props.idPropertyName.length > 0) {
      this.id = this.props.rowData[this.props.idPropertyName];
    } else {
      this.id = _.uniqueId("tableEditableTextbox_");
    } // if the control is in editable state, then show text box else a label


    var editable = false;

    if (this.props.editable != undefined && this.props.editable != null) {
      editable = this.props.editable;
    } else if (this.props.editablePropertyName && this.props.editablePropertyName.length > 0) {
      editable = this.props.rowData[this.props.editablePropertyName];
    }

    var newProps = {
      isExpanded: this.props.isExpanded
    };

    _.extend(newProps, this.props);

    if (editable == true) {
      // length of the textbox
      var maxLength = 1024;

      if (this.isInteger(this.props.length)) {
        maxLength = this.props.length;
      }

      var editableTextbox = React.createElement("input", {
        id: this.id,
        type: "text",
        style: textboxStyle,
        maxLength: maxLength,
        value: this.state.newValue,
        onChange: handleChange
      });
      return React.cloneElement(AbstractTableColumn, newProps, editableTextbox);
    } else {
      return React.cloneElement(TableTextColumn, newProps, null);
    }
  } // lifecycle event handlers

});
module.exports = TableEditableTextColumn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// Represents the header part of the table
var React = __webpack_require__(0);

var TableHead = React.createClass({
  displayName: "TableHead",
  render: function render() {
    return React.createElement("thead", null, this.props.children);
  }
});
module.exports = TableHead;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Sample component that highlights how to show an icon
var React = __webpack_require__(0);

var AbstractTableColumn = __webpack_require__(15);

var TableStatusColumn = React.createClass({
  displayName: "TableStatusColumn",
  render: function render() {
    var rowData = this.props.rowData;
    var propertyName = this.props.statusPropertyName;

    var getStatus = function getStatus() {
      var status = null;

      switch (rowData[propertyName]) {
        case "inprogress":
          status = React.createElement("span", {
            className: "fa fa-spinner fa-spin",
            style: {
              color: "#333",
              fontSize: 12
            }
          });
          break;

        case "paused":
          status = React.createElement("span", {
            className: "fa-stack fa-1x",
            style: {
              top: -8,
              left: -5
            }
          }, React.createElement("i", {
            className: "fa fa-circle fa-stack-1x",
            style: {
              color: "#3E6D91",
              fontSize: 14
            }
          }), React.createElement("i", {
            className: "fa fa-pause fa-stack-1x",
            style: {
              color: "#fff",
              fontSize: 6
            }
          }));
          break;

        case "failed":
        case "FAILED":
          status = React.createElement("span", {
            className: "fa fa-exclamation-circle",
            style: {
              color: "#F79024",
              fontSize: 14
            }
          });
          break;
      }

      return status;
    };

    return React.createElement(AbstractTableColumn, {
      isExpanded: this.props.isExpanded
    }, getStatus()); // return (
    //     React.cloneElement(AbstractTableColumn, this.props, status)
    // );
  }
});
module.exports = TableStatusColumn;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

__webpack_require__(154);

var TagDisplay = React.createClass({
  displayName: "TagDisplay",
  propTypes: {
    /**
     * If the id prop value is not set a id value is generated for the component.
     */
    id: React.PropTypes.string,

    /**
     * The list of tags to display. The tag can be an object or a string literal. If its an object then providing the textPropName prop is required.
     */
    tags: React.PropTypes.array,

    /**
     * The key in the tag object that has the text to display.
     */
    textPropName: React.PropTypes.string,

    /**
     * Width of the container. The tags wrap inside the container when they exceed the width. Default width is 160px.
     */
    width: React.PropTypes.number
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("tagDisplay");

    var renderTagItems = function renderTagItems(tags) {
      return tags.map(function (tag, index, arr) {
        var getText = function getText() {
          if (_this.props.textPropName && tag[_this.props.textPropName]) {
            return tag[_this.props.textPropName];
          } else {
            return tag;
          }
        };

        return React.createElement("div", {
          key: "tag" + index,
          className: "displayItemStyle"
        }, React.createElement("span", {
          className: "textStyle",
          title: getText()
        }, getText()));
      });
    };

    if (Array.isArray(this.props.tags) == true) {
      var width = 160;

      if (typeof this.props.width == "number" && this.props.width > 0) {
        width = parseInt(this.props.width);
      }

      return React.createElement("div", {
        id: id,
        style: {
          width: width
        },
        className: "tagContainerStyle"
      }, renderTagItems(this.props.tags));
    } else {
      return null;
    }
  }
});
module.exports = TagDisplay;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./TagDisplay.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./TagDisplay.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".tagContainerStyle {\n    font-family: verdana;\n    font-size: 12px;\n    min-height: 24px;\n    max-height: 62px;\n    overflow-x: auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #FFFFFF;\n}\n.displayItemStyle {\n    display: flex;\n    align-items: center;\n    background-color: #F3F3F3;\n    height: 20px;\n    margin-right: 4px;\n    margin-top: 2px;\n    padding-left: 4px;\n    padding-right: 4px;\n    font-size: 11px;\n    max-width: 136px;\n}\n.textStyle {\n    max-width: 128px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}", ""]);

// exports


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_) {var React = __webpack_require__(0);

var TertiaryMenu = __webpack_require__(91);
/**
 * Shows the specified buttons (TertiaryMenu children) on the row when the mouse is moved over the row. Children are of type TertiaryMenu.
 */


var TertiaryMenuList = React.createClass({
  displayName: "TertiaryMenuList",
  // styles
  t1ertiaryMenuListContainerStyle: {
    backgroundColor: "#EDF3F5",
    border: "1px solid #ddd",
    borderRadius: 5,
    boxShadow: "2px 2px 2px #bbb",
    position: "absolute",
    right: 2,
    top: 1,
    padding: "2px 5px 2px 5px",
    margin: "2px 0px 0px 0px",
    whiteSpace: "nowrap"
  },
  tertiaryMenuDividerStyle: {
    borderLeft: 0,
    display: "inline"
  },
  // styles
  itemIndex: -1,
  // custom methods
  // custom methods
  // lifecycle event handlers
  propTypes: {
    /**
     * The data item object assigned to the row.
     */
    data: React.PropTypes.object
  },

  /**
   * We need to nest multiple divs inside a td, because a td will not honor the style
   * position: relative. So we have to place a div inside the td, set its style
   * position to relative and then insert another div inside with position set to
   * absolute so that the hover buttons can float on top of the row.
   */
  render: function render() {
    var _this = this;

    var containerStyle = {
      paddingLeft: '84px'
    };
    var menuContainerStyle = {
      float: 'none'
    };

    var renderTertiaryMenu = function renderTertiaryMenu(child) {
      return React.cloneElement(child, {
        data: _this.props.data
      });
    };

    var renderChildren = function renderChildren() {
      // var isFirstItem = true;
      _this.itemIndex = -1;
      return React.Children.map(_this.props.children, function (child) {
        var tertiaryMenuDividerStyle = _.clone(_this.tertiaryMenuDividerStyle);

        _this.itemIndex++;

        if (_this.itemIndex > 0 && child.props.visible) {
          tertiaryMenuDividerStyle.borderLeft = "1px solid #DDD";
        } else {
          tertiaryMenuDividerStyle.borderLeft = 0;
        }

        return React.createElement("div", {
          style: tertiaryMenuDividerStyle
        }, renderTertiaryMenu(child));
      }, _this);
    };

    var tertiaryMenuContainer = function tertiaryMenuContainer() {
      return React.createElement("div", {
        style: containerStyle
      }, React.createElement("div", {
        style: _this.tertiaryMenuListContainerStyle
      }, renderChildren()));
    };

    return React.createElement("ul", {
      style: menuContainerStyle
    }, tertiaryMenuContainer());
  } // lifecycle event handlers

});
module.exports = TertiaryMenuList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var ReactTooltip = __webpack_require__(48);

__webpack_require__(158);
/**
 * The tooltip component displays a 'blurb' of information in response to a mouse
 * event like click or hover on an element to which the tooltip is assigned to.
 */


var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this = this;

      var id = this.props.id || _.uniqueId("tooltip_");

      var getToolTipBody = function getToolTipBody() {
        if (_this.props.children) {
          return _this.props.children;
        } else {
          return "Tooltip body";
        }
      };

      var className = "tooltipTheme-tooltip";

      if (this.props.type === "information") {
        className = "tooltipTheme-information";
      }

      return React.createElement(ReactTooltip, {
        id: id,
        class: className,
        effect: this.props.effect,
        type: this.props.type,
        place: this.props.place
      }, getToolTipBody());
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  /**
   * The position where the tooltip will be shown.
   */
  place: React.PropTypes.oneOf(["top", "bottom", "right", "left"]),

  /**
   * The theme for the tooltip.
   */
  type: React.PropTypes.oneOf(["tooltip", "information"]),

  /**
   * Setting the effect to float moves the tooltip with the mouse, setting it to 'solid'
   * keeps it stationary.
   */
  effect: React.PropTypes.oneOf(["solid", "float"]),

  /**
   * Changes the event when the tooltip is visible. Defaults to hover.
   */
  display: React.PropTypes.oneOf(["hover", "click"])
};
module.exports = Tooltip;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./TooltipTheme.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./TooltipTheme.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".tooltipTheme-tooltip {\n    color: #ffffff !important;\n    background-color: #333333 !important;\n    font-family: Helvetica Neue !important;\n    font-size: 12px !important;\n    line-height: 14px !important;\n    max-width: 240px !important;\n    opacity: 0.9 !important;\n    padding: 8px !important;\n    border-radius: 4px !important;\n}\n.tooltipTheme-tooltip.place-top:after {\n    border-top-color: #333333 !important;\n    border-top-style: solid !important;\n    border-top-width: 6px !important;\n}\n.tooltipTheme-information {\n    color: #ffffff !important;\n    background-color: pink !important;\n    font-family: Helvetica Neue !important;\n    font-size: 12px !important;\n    line-height: 14px !important;\n    max-width: 240px !important;\n    opacity: 0.9 !important;\n    padding: 8px !important;\n    border-radius: 4px !important;\n}\n.tooltipTheme-information.place-top:after {\n    border-top-color: pink !important;\n    border-top-style: solid !important;\n    border-top-width: 6px !important;\n}", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var PrimaryButton = __webpack_require__(10);

var CheckBox = __webpack_require__(9);

var RadioButton = __webpack_require__(26);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableTextColumn = __webpack_require__(13);

var PageFooter = __webpack_require__(21);

var FileUpload = __webpack_require__(33);

var UploadDialogStep = __webpack_require__(93);

var RadioButtonGroup = __webpack_require__(39);

__webpack_require__(161);
/**
 * Dialog used for uploading assignments. 
 */


var UploadAssignmentsDialog = React.createClass({
  displayName: "UploadAssignmentsDialog",
  // properties
  // properties
  // lifecycle event handlers
  propTypes: {
    /**
     * The id of the primary button on the confirmation dialog. If not provided a unique id will be used.
     */
    primaryButtonId: React.PropTypes.string,

    /**
     * The id of the cancel button on the confirmation dialog. If not provided a unique id will be used.
     */
    cancelButtonId: React.PropTypes.string,

    /**
     * Toggle to show or hide the overlay. False by default.
     */
    show: React.PropTypes.bool.isRequired,
    labels: React.PropTypes.shape({
      /**
       * Label for the first step about browsing and selecting a file for upload.
       */
      browseSelectFileStepLabel: React.PropTypes.string,

      /**
       * Label for the file upload button.
       */
      fileUploadButtonText: React.PropTypes.string,

      /**
       * Label for the file upload placeholder.
       */
      fileUploadPlaceholderText: React.PropTypes.string,

      /**
       * Label for the second step about effective dating parameters handling.
       */
      effectiveDatingParametersStepLabel: React.PropTypes.string,

      /**
       * Label for radio button for create new versions.
       */
      newVersionsRadioButtonText: React.PropTypes.string,

      /**
       * Label for radio button for update existing versions.
       */
      existingVersionsRadioButtonText: React.PropTypes.string,

      /**
       * Label for radio button for create new and update existing versions.
       */
      newExistingVersionsRadioButtonText: React.PropTypes.string,

      /**
       * Label for checkbox for aligning to start period.
       */
      alignToStartPeriodCheckBoxText: React.PropTypes.string,

      /**
       * Label for cancel button.
       */
      cancelButtonText: React.PropTypes.string,

      /**
       * Label for the upload button.
       */
      uploadButtonText: React.PropTypes.string,

      /**
       * Label for the error section title.
       */
      errorSectionTitle: React.PropTypes.string,

      /**
       * Download error log hyperlink text.
       */
      downloadErrorLogText: React.PropTypes.string,

      /**
       * Title of the upload dialog.
       */
      fileUploadTitle: React.PropTypes.string
    }),

    /**
     * This should be set to the error response returned by the upload service
     * from XDM when there is an error uploading the file.
     * The format of the errors array JSON should match the following:
     * [
            {
                "rowIndex": 2,
                "fieldName": "T1: QA",
                "errorMessage": "Required field T1: QA. Enter a value."
            },
            {
                "rowIndex": 2,
                "fieldName": "T1: PT",
                "errorMessage": "Required field T1: PT. Enter a value."
            }
        ]
     */
    errors: React.PropTypes.array,

    /**
     * Value used to set the radio button. Has to be one of CREATE/UPDATE/CREATE_AND_UPDATE.
     */
    effectiveDatingValue: React.PropTypes.string,

    /**
     * Value used to set the checkbox for align to start period. Has to be true|false.
     */
    alignToStartPeriodValue: React.PropTypes.bool,

    /**
     * Assigned function is called when there is a change in the effective dating selection.
     * Default is CREATE. Other values are UPDATE and CREATE_AND_UPDATE.
     * Arguments passed to the function are the value (CREATE/UPDATE/CREATE_AND_UPDATE) and the event object.
     */
    effectiveDatingChangeHandler: React.PropTypes.func,

    /**
     * Assigned function is called when there is a change in the state of the align to start period checkbox.
     * Default is false.
     * Argument passed to the function is a boolean - true or false.
     */
    alignToStartPeriodChangeHandler: React.PropTypes.func,

    /**
     * Handler to be passed into the component. It is called when the upload button is clicked.
     */
    uploadClickHandler: React.PropTypes.func.isRequired,

    /**
     * Handler called when the upload dialog cancel button is clicked.
     */
    cancelClickHandler: React.PropTypes.func,

    /**
     * Function to assign to the prop for downloading the error log file.
     */
    downloadErrorLogClickHandler: React.PropTypes.func.isRequired,

    /**
     * Pass false to hide the checkbox option saying Allow mid period dates and align to period start date
     */
    isCheckboxDisplayed: React.PropTypes.bool,

    /**
     * Pass false to hide effective dating parameters radio options in the upload dialog
     */
    isRadioDisplayed: React.PropTypes.bool,

    /**
     * Pass false to hide create and delete radio options in the upload dialog
     */
    isDeleteAndReCreateOptionEnable: React.PropTypes.bool
  },
  getInitialState: function getInitialState() {
    var showOverlay = false;

    if (typeof this.props.show == "boolean") {
      showOverlay = this.props.show;
    }

    return {
      show: showOverlay,
      files: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (typeof newProps.show == "boolean") {
      this.setState({
        show: newProps.show
      });
    }
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("uploadAssignmentsDialog_");

    var primaryButtonId = this.props.primaryButtonId || _.uniqueId("confirmationDialogPrimaryButton_");

    var cancelButtonId = this.props.cancelButtonId || _.uniqueId("confirmationDialogCancelButton_");

    var isCheckboxDisplayed = this.props.isCheckboxDisplayed === false ? false : true; // var title = this.props.title || "[Title]";
    // var errorSectionTitle = this.props.errorSectionTitle || "[Error Uploading File]";
    // var downloadErrorLogText = this.props.downloadErrorLogText || "[Download error log]";
    // var fileUploadButtonText = this.props.fileUploadButtonText || "[Browse...]";
    // var fileUploadPlaceholderText = this.props.fileUploadPlaceholderText || "[Select A File]";

    var isDeleteAndReCreateOptionEnable = this.props.isDeleteAndReCreateOptionEnable === true ? true : false;

    var renderSteps = function renderSteps() {
      var totalSteps = React.Children.count(_this.props.children);
      return React.Children.map(_this.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          childIndex: index,
          totalSteps: totalSteps
        });
      });
    };
    /**
     * Function called when the download error log button is clicked.
     * It will call the passed in prop function 'downloadErrorLogClickHandler'
     */


    var downloadErrorLog = function downloadErrorLog(event) {
      if (typeof _this.props.downloadErrorLogClickHandler == "function") {
        _this.props.downloadErrorLogClickHandler();
      }
    };

    var renderErrorInformation = function renderErrorInformation() {
      if (_this.props.errors && _this.props.errors.length > 0) {
        return React.createElement("div", {
          className: "uploadAssignmentsDialogErrorSectionContainerStyle"
        }, React.createElement("div", {
          style: {
            width: "100%"
          }
        }, React.createElement("div", {
          className: "uploadAssignmentsDialogErrorHeadingStyle"
        }, getLabels().errorSectionTitle), React.createElement("div", {
          className: "uploadAssignmentsDialogErrorLogFileLinkStyle",
          onClick: downloadErrorLog
        }, getLabels().downloadErrorLogText), React.createElement("div", {
          style: {
            clear: "both"
          }
        })), React.createElement("div", {
          className: "uploadAssignmentsDialogErrorTableContainerStyle"
        }, React.createElement(Table, {
          id: "errorTable",
          data: _this.props.errors,
          showRowBorder: false,
          rowSelectionEnabled: false
        }, React.createElement(TableHeadRow, null, React.createElement(TableHeadColumn, {
          columnName: "Row Index"
        }), React.createElement(TableHeadColumn, {
          columnName: "Field"
        }), React.createElement(TableHeadColumn, {
          columnName: "Message"
        })), React.createElement(TableNormalRow, null, React.createElement(TableTextColumn, {
          textPropertyName: "rowIndex"
        }), React.createElement(TableTextColumn, {
          textPropertyName: "fieldName"
        }), React.createElement(TableTextColumn, {
          textPropertyName: "errorMessage"
        })))));
      } else {
        return null;
      }
    };

    var fileChanged = function fileChanged(files, event) {
      _this.setState({
        files: files
      });
    };

    var getUploadButtonEnabledState = function getUploadButtonEnabledState() {
      if (_this.state.files && _this.state.files.length > 0) {
        return true;
      } else {
        return false;
      }
    };

    var renderFileInput = function renderFileInput() {
      return React.createElement("div", {
        className: "uploadAssignmentsDialogInputFileContainerStyle"
      }, React.createElement(FileUpload, {
        id: _this.props.id,
        buttonText: fileUploadButtonText,
        placeholder: fileUploadPlaceholderText,
        acceptParams: ".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        changeEventHandler: fileChanged,
        tabIndex: 2
      }));
    };

    var cancelClickHandler = function cancelClickHandler() {
      _this.setState({
        show: false,
        files: null
      }, function () {
        if (typeof _this.props.cancelClickHandler == "function") {
          _this.props.cancelClickHandler();
        }
      });

      event.stopPropagation();
    };

    var uploadClickHandler = function uploadClickHandler() {
      if (typeof _this.props.uploadClickHandler == "function") {
        _this.props.uploadClickHandler(_this.state.files);
      }

      event.stopPropagation();
    };

    var renderParagraphs = function renderParagraphs() {
      return React.Children.map(_this.props.children, function (child) {
        if (child) {
          return React.cloneElement(child, null);
        }
      });
    };

    var getLabels = function getLabels() {
      var labels = {
        browseSelectFileStepLabel: "[Browse and select the template file to upload.]",
        fileUploadButtonText: "[Browse...]",
        fileUploadPlaceholderText: "[Select A File]",
        effectiveDatingParametersStepLabel: "[Select the effective dating parameters for upload.]",
        newVersionsRadioButtonText: "[Allow creation of new versions]",
        existingVersionsRadioButtonText: "[Allow updates to existing versions]",
        newExistingVersionsRadioButtonText: "[Allow updates and new creation]",
        alignToStartPeriodCheckBoxText: "[Allow mid period dates and align to period start date]",
        cancelButtonText: "[Cancel]",
        uploadButtonText: "[Upload]",
        errorSectionTitle: "[Error Uploading File]",
        downloadErrorLogText: "[Download error log]",
        fileUploadTitle: "[Upload {{Object}} Assignments]",
        deleteCreateVersionsRadioButtonText: "[Allow deletes to all existing rows and create new rows]"
      };

      if (_this.props.labels) {
        if (_this.props.labels.browseSelectFileStepLabel) {
          labels.browseSelectFileStepLabel = _this.props.labels.browseSelectFileStepLabel;
        }

        if (_this.props.labels.fileUploadButtonText) {
          labels.fileUploadButtonText = _this.props.labels.fileUploadButtonText;
        }

        if (_this.props.labels.fileUploadPlaceholderText) {
          labels.fileUploadPlaceholderText = _this.props.labels.fileUploadPlaceholderText;
        }

        if (_this.props.labels.effectiveDatingParametersStepLabel) {
          labels.effectiveDatingParametersStepLabel = _this.props.labels.effectiveDatingParametersStepLabel;
        }

        if (_this.props.labels.newVersionsRadioButtonText) {
          labels.newVersionsRadioButtonText = _this.props.labels.newVersionsRadioButtonText;
        }

        if (_this.props.labels.existingVersionsRadioButtonText) {
          labels.existingVersionsRadioButtonText = _this.props.labels.existingVersionsRadioButtonText;
        }

        if (_this.props.labels.newExistingVersionsRadioButtonText) {
          labels.newExistingVersionsRadioButtonText = _this.props.labels.newExistingVersionsRadioButtonText;
        }

        if (_this.props.labels.alignToStartPeriodCheckBoxText) {
          labels.alignToStartPeriodCheckBoxText = _this.props.labels.alignToStartPeriodCheckBoxText;
        }

        if (_this.props.labels.cancelButtonText) {
          labels.cancelButtonText = _this.props.labels.cancelButtonText;
        }

        if (_this.props.labels.uploadButtonText) {
          labels.uploadButtonText = _this.props.labels.uploadButtonText;
        }

        if (_this.props.labels.errorSectionTitle) {
          labels.errorSectionTitle = _this.props.labels.errorSectionTitle;
        }

        if (_this.props.labels.downloadErrorLogText) {
          labels.downloadErrorLogText = _this.props.labels.downloadErrorLogText;
        }

        if (_this.props.labels.fileUploadTitle) {
          labels.fileUploadTitle = _this.props.labels.fileUploadTitle;
        }

        if (_this.props.labels.deleteCreateVersionsRadioButtonText) {
          labels.deleteCreateVersionsRadioButtonText = _this.props.labels.deleteCreateVersionsRadioButtonText;
        }
      }

      return labels;
    };

    var getTitle = function getTitle() {
      return React.createElement("div", {
        className: "uploadAssignmentsDialogHeaderTitle"
      }, getLabels().fileUploadTitle);
    };

    var handleEffectiveDatingChange = function handleEffectiveDatingChange(value, event) {
      if (typeof _this.props.effectiveDatingChangeHandler == "function") {
        _this.props.effectiveDatingChangeHandler(value, event);
      }
    };

    var handleAlignToStartPeriodChange = function handleAlignToStartPeriodChange(checked) {
      if (typeof _this.props.alignToStartPeriodChangeHandler == "function") {
        _this.props.alignToStartPeriodChangeHandler(checked);
      }
    };

    var renderCheckBoxStep = function renderCheckBoxStep() {
      if (_this.props.isCheckboxDisplayed === false) {
        return null;
      } else {
        return React.createElement("div", {
          style: {
            marginTop: 8
          }
        }, React.createElement(CheckBox, {
          id: "alignToStartPeriodCheckBox",
          disabled: false,
          text: getLabels().alignToStartPeriodCheckBoxText,
          value: "alignToStart",
          defaultChecked: _this.props.alignToStartPeriodValue || false,
          tooltip: getLabels().alignToStartPeriodCheckBoxText,
          changeHandler: handleAlignToStartPeriodChange
        }));
      }
    };

    var renderRadioOption = function renderRadioOption() {
      if (isDeleteAndReCreateOptionEnable) {
        return React.createElement(RadioButtonGroup, {
          id: "effectiveDatingParametersRadioButtonGroup",
          changeHandler: handleEffectiveDatingChange,
          groupName: "effectiveDatingParametersGroup",
          initialSelectedValue: _this.props.effectiveDatingValue || "CREATE"
        }, React.createElement(RadioButton, {
          id: "newVersionsRadioButton",
          text: getLabels().newVersionsRadioButtonText,
          value: "CREATE"
        }), React.createElement(RadioButton, {
          id: "existingVersionsRadioButton",
          text: getLabels().existingVersionsRadioButtonText,
          value: "UPDATE"
        }), React.createElement(RadioButton, {
          id: "newExistingVersionsRadioButton",
          text: getLabels().newExistingVersionsRadioButtonText,
          value: "CREATE_AND_UPDATE"
        }), React.createElement(RadioButton, {
          id: "deleteCreateVersionsRadioButton",
          text: getLabels().deleteCreateVersionsRadioButtonText,
          value: "DELETE_AND_CREATE"
        }));
      } else {
        return React.createElement(RadioButtonGroup, {
          id: "effectiveDatingParametersRadioButtonGroup",
          changeHandler: handleEffectiveDatingChange,
          groupName: "effectiveDatingParametersGroup",
          initialSelectedValue: _this.props.effectiveDatingValue || "CREATE"
        }, React.createElement(RadioButton, {
          id: "newVersionsRadioButton",
          text: getLabels().newVersionsRadioButtonText,
          value: "CREATE"
        }), React.createElement(RadioButton, {
          id: "existingVersionsRadioButton",
          text: getLabels().existingVersionsRadioButtonText,
          value: "UPDATE"
        }), React.createElement(RadioButton, {
          id: "newExistingVersionsRadioButton",
          text: getLabels().newExistingVersionsRadioButtonText,
          value: "CREATE_AND_UPDATE"
        }));
      }
    };

    var renderSteps = function renderSteps() {
      if (_this.props.isRadioDisplayed === false) {
        return React.createElement(UploadAssignmentsDialog.Steps, null, React.createElement(UploadDialogStep, null, getLabels().browseSelectFileStepLabel, React.createElement("div", {
          style: {
            marginTop: 8
          }
        }, React.createElement(FileUpload, {
          id: "myFileUpload",
          buttonText: getLabels().fileUploadButtonText,
          placeholder: getLabels().fileUploadPlaceholderText,
          acceptParams: ".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          changeEventHandler: fileChanged
        }))));
      } else {
        return React.createElement(UploadAssignmentsDialog.Steps, null, React.createElement(UploadDialogStep, null, getLabels().browseSelectFileStepLabel, React.createElement("div", {
          style: {
            marginTop: 8
          }
        }, React.createElement(FileUpload, {
          id: "myFileUpload",
          buttonText: getLabels().fileUploadButtonText,
          placeholder: getLabels().fileUploadPlaceholderText,
          acceptParams: ".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          changeEventHandler: fileChanged
        }))), React.createElement(UploadDialogStep, null, getLabels().effectiveDatingParametersStepLabel, React.createElement("div", {
          style: {
            marginTop: 8
          }
        }, renderRadioOption()), renderCheckBoxStep()));
      }
    };

    if (this.state.show == false) {
      return null;
    } else {
      return React.createElement("div", {
        id: id
      }, React.createElement("div", {
        className: "uploadAssignmentsDialogDialogBackdrop"
      }), React.createElement("div", {
        className: "uploadAssignmentsDialogModal"
      }, React.createElement("div", {
        className: "uploadAssignmentsDialogHeader"
      }, React.createElement("i", {
        className: "fa fa-times uploadAssignmentsDialogHeaderClose",
        onClick: cancelClickHandler
      }), getTitle()), React.createElement("div", {
        className: "uploadAssignmentsDialogBody"
      }, renderParagraphs(), renderSteps(), renderErrorInformation()), React.createElement(PageFooter, {
        type: "dialog"
      }, React.createElement(PageFooter.RightPane, null, React.createElement(SecondaryButton, {
        id: cancelButtonId,
        text: getLabels().cancelButtonText,
        icon: "fa fa-times-circle-o",
        clickHandler: cancelClickHandler
      }), React.createElement(PrimaryButton, {
        id: primaryButtonId,
        inline: true,
        enabled: getUploadButtonEnabledState(),
        text: getLabels().uploadButtonText,
        clickHandler: uploadClickHandler
      })))));
    }
  } // lifecycle event handlers

});
UploadAssignmentsDialog.Paragraph = React.createClass({
  displayName: "Paragraph",
  render: function render() {
    return React.createElement("div", {
      className: "uploadAssignmentsDialogParagraphStyle"
    }, this.props.children);
  }
});
UploadAssignmentsDialog.Steps = React.createClass({
  displayName: "Steps",
  render: function render() {
    var _this2 = this;

    var renderSteps = function renderSteps() {
      var totalSteps = React.Children.count(_this2.props.children);
      return React.Children.map(_this2.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          childIndex: index,
          totalSteps: totalSteps
        });
      });
    };

    return React.createElement("div", null, renderSteps());
  }
});
module.exports = UploadAssignmentsDialog;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./UploadAssignmentsDialog.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./UploadAssignmentsDialog.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".uploadAssignmentsDialogDialogBackdrop {\n    background-color: #555555;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    opacity: 0.8;\n    display: block;\n}\n.uploadAssignmentsDialogModal {\n    background-color: #ffffff;\n    font-size: 12px;\n    width: 940px;\n    position: fixed;\n    left: 50%; /*need this to center*/\n    top: 5%;\n    margin-left: -470px; /* half the width, to center the div */\n    margin-right: auto;\n    z-index: 1050;    \n    border: 1px solid #CFCFCF;\n    outline: none;\n}\n.uploadAssignmentsDialogHeader {\n    padding: 15px 20px;\n    line-height: 22px;\n}\n.uploadAssignmentsDialogHeaderTitle {\n    font-family: verdana;\n    font-weight: bold;\n    font-size: 18px;\n    color: #333333;\n}\n.uploadAssignmentsDialogHeaderClose {\n    float: right;\n    color: #CACBCA;\n    font-size: 18px;\n    top: 2px;\n    position: relative;   \n    cursor: pointer;\n}\n.uploadAssignmentsDialogBody {\n    border-top: 1px solid #E1E1E1;\n    padding: 28px 20px 28px 20px;   \n    font-family: verdana;\n    font-size: 14px;\n    overflow-y: auto;\n    max-height: 320px;\n    min-height: 320px;\n    height: 100%;\n    color: #333333;\n}\n.uploadAssignmentsDialogFooter {\n    padding: 16px 20px;\n    background-color: #f5f5f5;\n    text-align: right;\n}\n.uploadAssignmentsDialogSubTitleContainerStyle {\n    margin-bottom: 24px;\n    font-family: verdana;\n    font-size: 14px;\n    color: #333333;\n}\n.uploadAssignmentsDialogOverwriteMessageContainerStyle {\n    margin-bottom: 24px;\n    font-family: verdana;\n    font-size: 14px;\n    color: #333333;\n    margin-left: 20px;\n}\n.uploadAssignmentsDialogImportantMessageContainerStyle {\n    font-style: italic;\n    font-family: verdana;\n    font-size: 4px;\n    color: #333333;\n    margin-left: 20px;\n}\n.uploadAssignmentsDialogImportantLabelStyle {\n    font-weight: bold;\n}\n.uploadAssignmentsDialogInputFileStyle {\n    font-family: verdana;\n    font-size: 14px;\n    color: #333333;\n    line-height: normal;\n}\n.uploadAssignmentsDialogInputFileContainerStyle {\n    margin-bottom: 24px;\n    margin-left: 55px;\n}\n.uploadAssignmentsDialogErrorSectionContainerStyle {\n    margin-top: 20px;\n}\n.uploadAssignmentsDialogErrorHeadingStyle {\n    font-family: verdana;\n    font-size: 14px;\n    color: #333333;\n    font-weight: bold;\n    float: left;\n}\n.uploadAssignmentsDialogErrorLogFileLinkStyle {\n    font-family: verdana;\n    font-size: 12px;\n    color: #346F8F;\n    float: right;\n    cursor: pointer;\n}\n.uploadAssignmentsDialogErrorTableContainerStyle {\n    height: 128px;\n    overflow-x: auto;\n    margin-top: 12px;\n    border: solid 1px #E3E3E3;\n}\n.uploadAssignmentsDialogParagraphStyle {\n    font-family: Verdana;\n    font-size: 12px;\n    padding-bottom: 20px;\n}", ""]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var PrimaryButton = __webpack_require__(10);

var CheckBox = __webpack_require__(9);

var CheckBox = __webpack_require__(9);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableTextColumn = __webpack_require__(13);

var PageFooter = __webpack_require__(21);

var FileUpload = __webpack_require__(33);
/**
 * Dialog used for uploading files. 
 */


var UploadDialog = React.createClass({
  displayName: "UploadDialog",
  containerStyle: {
    backgroundColor: "#ffffff"
  },
  dialogBackdrop: {
    backgroundColor: "#555",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1040,
    opacity: 0.8,
    display: "block"
  },
  modal: {
    backgroundColor: "#fff",
    fontSize: "12px",
    width: 940,
    position: "fixed",
    left: "50%",
    // need this to center
    top: "10%",
    marginLeft: -470,
    // half the width, to center the div
    marginRight: "auto",
    zIndex: 1050,
    border: "1px solid #CFCFCF",
    outline: "none"
  },
  header: {
    padding: "21px 20px",
    lineHeight: "22px"
  },
  headerTitle: {
    fontFamily: "verdana",
    fontWeight: "bold",
    fontSize: 18,
    color: "#333333"
  },
  headerClose: {
    float: "right",
    color: "#CACBCA",
    fontSize: 18,
    top: 2,
    position: "relative",
    cursor: "pointer"
  },
  body: {
    borderTop: "1px solid #E1E1E1",
    borderBottom: "1px solid #E1E1E1",
    padding: "32px 20px 32px 20px",
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333333"
  },
  footer: {
    padding: "16px 20px",
    backgroundColor: "#f5f5f5",
    textAlign: "right"
  },
  subTitleContainerStyle: {
    marginBottom: 24,
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333"
  },
  overwriteMessageContainerStyle: {
    marginBottom: 24,
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333",
    marginLeft: 20
  },
  importantMessageContainerStyle: {
    fontStyle: "italic",
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333",
    marginLeft: 20
  },
  importantLabelStyle: {
    fontWeight: "bold"
  },
  inputFileStyle: {
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333",
    lineHeight: "normal"
  },
  inputFileContainerStyle: {
    marginBottom: 24,
    marginLeft: 55
  },
  errorSectionContainerStyle: {
    marginTop: 32
  },
  errorHeadingStyle: {
    fontFamily: "verdana",
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    float: "left"
  },
  errorLogFileLinkStyle: {
    fontFamily: "verdana",
    fontSize: 14,
    color: "#346F8F",
    float: "right",
    cursor: "pointer"
  },
  errorTableContainerStyle: {
    height: 128,
    overflowX: "auto",
    marginTop: 12
  },
  // styles
  // properties
  // properties
  // lifecycle event handlers
  propTypes: {
    /**
     * Toggle to show or hide the overlay. False by default.
     */
    show: React.PropTypes.bool,

    /**
     * Determines if the dialog is modal. Defaults to true.
     */
    isModal: React.PropTypes.bool,

    /**
     * The text for the download error log button.
     */
    downloadErrorLogText: React.PropTypes.string,

    /**
     * The title for the error table.
     */
    errorSectionTitle: React.PropTypes.string,

    /**
     * The text for the Primary button.
     */
    primaryButtonText: React.PropTypes.string,

    /**
     * The text for the cancel button.
     */
    cancelButtonText: React.PropTypes.string,

    /**
     * Title of the Overlay.
     */
    title: React.PropTypes.string,

    /**
     * This should be set to the error response returned by the upload service
     * from XDM when there is an error uploading the file.
     * The format of the errors array JSON should match the following:
     * [
            {
                "rowIndex": 2,
                "fieldName": "T1: QA",
                "errorMessage": "Required field T1: QA. Enter a value."
            },
            {
                "rowIndex": 2,
                "fieldName": "T1: PT",
                "errorMessage": "Required field T1: PT. Enter a value."
            }
        ]
     */
    errors: React.PropTypes.array,

    /**
     * Handler to be passed into the component. It is called when the upload button is clicked.
     */
    uploadClickHandler: React.PropTypes.func,

    /**
     * Handler called when the upload dialog cancel button is clicked.
     */
    cancelClickHandler: React.PropTypes.func,

    /**
     * Function to assign to the prop for downloading the error log file.
     */
    downloadErrorLogClickHandler: React.PropTypes.func,

    /**
     * The text to display inside the dialog as the first sentence.
     */
    subTitle: React.PropTypes.string,

    /**
     * Message to display next to the checkbox for overwriting upload. If this text is not supplied
     * the checkbox is not displayed.
     */
    overwriteCheckboxMessage: React.PropTypes.string,

    /**
     * Message shown in italics preceded with the label "Important:" 
     */
    importantMessage: React.PropTypes.string,

    /**
     * The prop value for the word 'Important'. The ':' is added automatically.
     */
    importantLabelText: React.PropTypes.string,

    /**
     * The text to display on the file upload button.
     */
    fileUploadButtonText: React.PropTypes.string,

    /**
     * The text to display in the file upload input box as a placeholder.
     */
    fileUploadPlaceholderText: React.PropTypes.string,

    /**
     * The id of the primary button on the confirmation dialog. If not provided a unique id will be used.
     */
    primaryButtonId: React.PropTypes.string,

    /**
     * The id of the cancel button on the confirmation dialog. If not provided a unique id will be used.
     */
    cancelButtonId: React.PropTypes.string,

    /**
     * Handler to be passed in to get notified when the overwrite checkbox is checked or unchecked.
     */
    overwriteCheckboxChangeHandler: React.PropTypes.func,

    /**
     * Custom params to use intead of the default ones.
     */
    acceptParams: React.PropTypes.string
  },
  getInitialState: function getInitialState() {
    var showOverlay = false;

    if (typeof this.props.show == "boolean") {
      showOverlay = this.props.show;
    }

    return {
      show: showOverlay,
      uploadButtonEnabled: false,
      files: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (typeof newProps.show == "boolean") {
      this.setState({
        show: newProps.show
      });
    }
  },
  render: function render() {
    var _this = this;

    var id = this.props.id || _.uniqueId("uploadDialog_");

    var primaryButtonText = this.props.primaryButtonText || "[Ok]";

    var primaryButtonId = this.props.primaryButtonId || _.uniqueId("confirmationDialogPrimaryButton_");

    var cancelButtonId = this.props.cancelButtonId || _.uniqueId("confirmationDialogCancelButton_");

    var title = this.props.title || "[Title]";
    var errorSectionTitle = this.props.errorSectionTitle || "[Error Uploading File]";
    var downloadErrorLogText = this.props.downloadErrorLogText || "[Download error log]"; // var fileUploadButtonText = this.props.fileUploadButtonText || "[Browse...]";

    var fileUploadPlaceholderText = this.props.fileUploadPlaceholderText || "[Select A File]";

    var renderSubTitle = function renderSubTitle() {
      if (_this.props.subTitle && _this.props.subTitle.length > 0) {
        return React.createElement("div", {
          style: _this.subTitleContainerStyle
        }, _this.props.subTitle);
      } else {
        return null;
      }
    };

    var renderOverwriteCheckbox = function renderOverwriteCheckbox() {
      if (_this.props.overwriteCheckboxMessage && _this.props.overwriteCheckboxMessage.length > 0) {
        return React.createElement("div", {
          style: _this.overwriteMessageContainerStyle
        }, React.createElement(CheckBox, {
          id: "overwriteCheckBox",
          text: _this.props.overwriteCheckboxMessage,
          changeHandler: _this.props.overwriteCheckboxChangeHandler
        }));
      } else {
        return null;
      }
    };

    var renderSteps = function renderSteps() {
      var totalSteps = React.Children.count(_this.props.children);
      return React.Children.map(_this.props.children, function (child, index, arr) {
        return React.cloneElement(child, {
          childIndex: index,
          totalSteps: totalSteps
        });
      });
    };

    var renderImportantMessage = function renderImportantMessage() {
      if (_this.props.importantMessage && _this.props.importantMessage.length > 0) {
        var importantLabelText = (_this.props.importantLabelText || "[Important]") + ": ";
        return React.createElement("div", {
          style: _this.importantMessageContainerStyle
        }, React.createElement("span", {
          style: _this.importantLabelStyle
        }, importantLabelText), React.createElement("span", null, _this.props.importantMessage));
      } else {
        return null;
      }
    };
    /**
     * Function called when the download error log button is clicked.
     * It will call the passed in prop function 'downloadErrorLogClickHandler'
     */


    var downloadErrorLog = function downloadErrorLog(event) {
      if (typeof _this.props.downloadErrorLogClickHandler == "function") {
        _this.props.downloadErrorLogClickHandler();
      }
    };

    var renderErrorInformation = function renderErrorInformation() {
      if (_this.props.errors && _this.props.errors.length > 0) {
        return React.createElement("div", {
          style: _this.errorSectionContainerStyle
        }, React.createElement("div", {
          style: {
            width: "100%"
          }
        }, React.createElement("div", {
          style: _this.errorHeadingStyle
        }, errorSectionTitle), React.createElement("div", {
          style: _this.errorLogFileLinkStyle,
          onClick: downloadErrorLog
        }, downloadErrorLogText), React.createElement("div", {
          style: {
            clear: "both"
          }
        })), React.createElement("div", {
          style: _this.errorTableContainerStyle
        }, React.createElement(Table, {
          id: "errorTable",
          data: _this.props.errors
        }, React.createElement(TableHeadRow, null, React.createElement(TableHeadColumn, {
          columnName: "Row Index"
        }), React.createElement(TableHeadColumn, {
          columnName: "Field"
        }), React.createElement(TableHeadColumn, {
          columnName: "Message"
        })), React.createElement(TableNormalRow, null, React.createElement(TableTextColumn, {
          textPropertyName: "rowIndex"
        }), React.createElement(TableTextColumn, {
          textPropertyName: "fieldName"
        }), React.createElement(TableTextColumn, {
          textPropertyName: "errorMessage"
        })))));
      } else {
        return null;
      }
    };

    var fileChanged = function fileChanged(files, event) {
      _this.setState({
        uploadButtonEnabled: true,
        files: files
      });
    };

    var renderFileInput = function renderFileInput() {
      if (_this.props.fileUploadButtonText && _this.props.fileUploadButtonText.length > 0) {
        var acceptParams = _this.props.acceptParams || ".csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        return React.createElement("div", {
          style: _this.inputFileContainerStyle
        }, React.createElement(FileUpload, {
          id: _this.props.id,
          buttonText: _this.props.fileUploadButtonText,
          placeholder: fileUploadPlaceholderText,
          acceptParams: acceptParams,
          changeEventHandler: fileChanged,
          tabIndex: 2
        }));
      } else {
        return null;
      }
    };

    var cancelClickHandler = function cancelClickHandler() {
      _this.setState({
        show: false
      }, function () {
        if (typeof _this.props.cancelClickHandler == "function") {
          _this.props.cancelClickHandler();
        }
      });

      event.stopPropagation();
    };

    var uploadClickHandler = function uploadClickHandler() {
      if (typeof _this.props.uploadClickHandler == "function") {
        _this.props.uploadClickHandler(_this.state.files);
      }

      event.stopPropagation();
    };

    var renderDialogBackdrop = function renderDialogBackdrop() {
      if (_this.props.isModal == false) {
        return null;
      } else {
        return React.createElement("div", {
          style: _this.dialogBackdrop
        });
      }
    };

    var getModalStyle = function getModalStyle() {
      if (_this.props.isModal == false) {
        return null;
      } else {
        return _this.modal;
      }
    };

    var renderHeader = function renderHeader() {
      if (_this.props.isModal == false) {
        return null;
      } else {
        return React.createElement("div", {
          style: _this.header
        }, React.createElement("i", {
          className: "fa fa-times",
          style: _this.headerClose,
          onClick: cancelClickHandler
        }), React.createElement("div", {
          style: _this.headerTitle
        }, title));
      }
    };

    var renderFooter = function renderFooter() {
      if (_this.props.isModal == false) {
        return null;
      } else {
        return React.createElement(PageFooter, null, React.createElement(PageFooter.RightPane, null, React.createElement(SecondaryButton, {
          id: cancelButtonId,
          text: _this.props.cancelButtonText || "[Cancel]",
          icon: "fa fa-times-circle-o",
          clickHandler: cancelClickHandler
        }), React.createElement(PrimaryButton, {
          id: primaryButtonId,
          inline: true,
          enabled: _this.state.uploadButtonEnabled,
          text: primaryButtonText,
          clickHandler: uploadClickHandler
        })));
      }
    };

    if (this.state.show == false) {
      return null;
    } else {
      return React.createElement("div", {
        id: id,
        style: this.containerStyle
      }, renderDialogBackdrop(), React.createElement("div", {
        style: getModalStyle()
      }, renderHeader(), React.createElement("div", {
        style: this.body
      }, renderSubTitle(), renderSteps(), renderFileInput(), renderOverwriteCheckbox(), renderImportantMessage(), renderErrorInformation()), renderFooter()));
    }
  } // lifecycle event handlers

});
module.exports = UploadDialog;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var StyleMixins = __webpack_require__(3);

var _ = __webpack_require__(1);

var SecondaryButton = __webpack_require__(2);

var TextBox = __webpack_require__(5);

var Table = __webpack_require__(16);

var TableHeadRow = __webpack_require__(12);

var TableHeadColumn = __webpack_require__(18);

var TableNormalRow = __webpack_require__(19);

var TableTextColumn = __webpack_require__(13);

var DropDown = __webpack_require__(23);

var Label = __webpack_require__(22);

var PeriodsWrapper = __webpack_require__(165);

var VersionsWrapper = __webpack_require__(166);

var Dispatcher = __webpack_require__(17);

var ActionTypes = __webpack_require__(11).ActionTypes;

var ConfirmationDialog = __webpack_require__(24);

var FormStyles = __webpack_require__(4).form;
/**
 * Helper function that creates the map of translated labels.
 * Default values are used if a translated value is not provided by the user.
 */


function createTranslatedLabelsMap(userTranslatedLabelsMap) {
  var keyMap = {
    addVersionButtonText: "[Add Version]",
    addHideVersionDetailsButtonText: "[Hide Version Details]",
    addShowVersionDetailsButtonText: "[Show Version Details]",
    masterVersionTitleText: "[Master Version]",
    effectiveStartLabelText: "[Effective Start]",
    effectiveEndLabelText: "[Effective End]",
    versionNotesLabelText: "[Version Notes]",
    deleteButtonText: "[Delete]",
    sotPeriodLabelText: "[Start of Period]",
    eotPeriodLabelText: "[End of Period]",
    versionValidationMessage: "[Fix the version validation errors]",
    versionText: "[Version]"
  };

  if (userTranslatedLabelsMap) {
    keyMap.addVersionButtonText = userTranslatedLabelsMap.addVersionButtonText || "[Add Version]";
    keyMap.addHideVersionDetailsButtonText = userTranslatedLabelsMap.addHideVersionDetailsButtonText || "[Hide Version Details]";
    keyMap.addShowVersionDetailsButtonText = userTranslatedLabelsMap.addShowVersionDetailsButtonText || "[Show Version Details]";
    keyMap.masterVersionTitleText = userTranslatedLabelsMap.masterVersionTitleText || "[Master Version]";
    keyMap.effectiveStartLabelText = userTranslatedLabelsMap.effectiveStartLabelText || "[Effective Start]";
    keyMap.effectiveEndLabelText = userTranslatedLabelsMap.effectiveEndLabelText || "[Effective End]";
    keyMap.versionNotesLabelText = userTranslatedLabelsMap.versionNotesLabelText || "[Version Notes]";
    keyMap.deleteButtonText = userTranslatedLabelsMap.deleteButtonText || "[Delete]";
    keyMap.sotPeriodLabelText = userTranslatedLabelsMap.sotPeriodLabelText || "[Start of Period]";
    keyMap.eotPeriodLabelText = userTranslatedLabelsMap.eotPeriodLabelText || "[End of Period]";
    keyMap.versionValidationMessage = userTranslatedLabelsMap.versionValidationMessage || "[Fix the version validation errors]";
    keyMap.versionText = userTranslatedLabelsMap.versionText || "[Version]";
  }

  return keyMap;
}

;
/**
 * Version control component used on forms. This is a period based version control. The algorithms for ensuring
 * the user selects the appropriate period, the adjustment of the periods around a deleted period, or editing a period
 * are all built into the component.
 */

var VersionControl = React.createClass({
  displayName: "VersionControl",
  // styles
  // styles
  // custom properties
  tableId: "versionTable",
  dispatchToken: null,
  // custom properties
  // custom methods
  // custom methods
  // lifecycle event handlers
  mixins: [StyleMixins],
  propTypes: {
    /**
     * The id for the component.
     */
    id: React.PropTypes.string,

    /**
     * Each key represents the translated label for the component.
     */
    translationLabelMap: React.PropTypes.shape({
      addVersionButtonText: React.PropTypes.string,
      addHideVersionDetailsButtonText: React.PropTypes.string,
      addShowVersionDetailsButtonText: React.PropTypes.string,
      masterVersionTitleText: React.PropTypes.string,
      effectiveStartLabelText: React.PropTypes.string,
      effectiveEndLabelText: React.PropTypes.string,
      versionNotesLabelText: React.PropTypes.string,
      deleteButtonText: React.PropTypes.string,
      sotPeriodLabelText: React.PropTypes.string,
      eotPeriodLabelText: React.PropTypes.string,
      versionValidationMessage: React.PropTypes.string,
      versionText: React.PropTypes.string
    }).isRequired,

    /**
     * The version data for the pay curve that is bound to the version table. 
     */
    versionData: React.PropTypes.array,

    /**
     * The map for the version object keys. The user of the component can provide the
     * names of the properties of the version object, so that they can be custom.
     */
    versionKeyMap: React.PropTypes.shape({
      versionIdKey: React.PropTypes.string,
      startPeriodIdKey: React.PropTypes.string,
      endPeriodIdKey: React.PropTypes.string,
      descriptionKey: React.PropTypes.string,
      childData: React.PropTypes.object
    }),

    /**
     * The period data in the following form. This period list is of the leaf periods. So only
     * months are allowed to be selected.
     */
    periodData: React.PropTypes.array,

    /**
     * The map for the period object keys. The user of the component can provide the names of
     * the properties of the period object, so that they can be custom.
     */
    periodKeyMap: React.PropTypes.shape({
      periodIdKey: React.PropTypes.string,
      nameKey: React.PropTypes.string,
      labelKey: React.PropTypes.string,
      startDateKey: React.PropTypes.string,
      endDateKey: React.PropTypes.string
    }),

    /**
     * If the initial version needs to be set when the component is loaded, pass the version id in as a prop.
     */
    initialSelectedVersionId: React.PropTypes.string,

    /**
     * Function called whenever a new version is added, or an existing version is deleted or an existing
     * version is changed. The function should be passed in a as prop value. The function is passed in
     * the list of versions, the selected version, the selected version index and the action on the versions
     * like add, edit or delete.
     */
    versionsChangedEventHandler: React.PropTypes.func,

    /**
     * Indicates that the control should be in read only mode. The Add and Delete version buttons will be disabled.
     */
    readOnly: React.PropTypes.bool,

    /**
     * Event that is triggered when the selected version changes. When a function handler is assigned to this prop
     * it is called when the event is triggered. The function is passed in the selected version, the selected
     * version index and the action like add, edit and delete.
     */
    selectedVersionChangedEventHandler: React.PropTypes.func,

    /**
     * Function that validates the input. It should return the message to display if the validation failed.
     */
    validator: React.PropTypes.func,

    /**
     * Function that is called when validation takes place. A boolean parameter is passed into the function
     * to signal if validation is successful (true) or not (false).
     */
    validationEventHandler: React.PropTypes.func,

    /**
     * Function called before a new version is added. Gives the user the ability to perform pre-add-version validation.
     * The function should return a boolean value. True indicates that a new version can be added, false indicates
     * a new version will not be added.
     */
    preAddVersionEventHandler: React.PropTypes.func
  },
  getInitialState: function getInitialState() {
    return {
      versionDetailsVisible: false,
      versionData: null,
      isFirstVersion: false,
      mode: null,
      newVersionSaved: null,
      deleteVersionConfirmationDialogIsOpen: false,
      showVersionValidationMessage: false
    };
  },

  /**
   * The logic in this lifecycle event handler is similar to the logic in the componentWillReceiveProps
   * lifecycle event handler because the component could have props declared in which case
   * this initialization would be used but if the props are set dynamically then the componentWillReceiveProps
   * initialization is used.
   */
  componentWillMount: function componentWillMount() {
    var _this = this;

    var periodsWrapper = PeriodsWrapper;
    periodsWrapper.setKeyMap(this.props.periodObjectKeyMap);
    periodsWrapper.create(this.props.periodData || []); // set first version if required

    var isFirstVersion = this.state.isFirstVersion;

    if (typeof this.props.isFirstVersion == "boolean") {
      isFirstVersion = this.props.isFirstVersion;
    }

    var versionsWrapper = VersionsWrapper();
    versionsWrapper.setPeriodsWrapper(periodsWrapper);
    versionsWrapper.setKeyMap(this.props.versionObjectKeyMap); // sort the version data in descending order before sending it to the wrapper

    if (Array.isArray(this.props.versionData) == true) {
      var start = 0,
          end = this.props.versionData.length - 1;

      while (start < end) {
        var temp = this.props.versionData[start];
        this.props.versionData[start] = this.props.versionData[end];
        this.props.versionData[end] = temp;
        start++;
        end--;
      }
    }

    versionsWrapper.create(this.props.versionData, "desc", this.props.selectedVersionChangedEventHandler, this.props.initialSelectedVersionId);
    this.dispatchToken = Dispatcher.register(function (action) {
      switch (action.type) {
        case ActionTypes.SORT_DATA_CHANGED:
          if (action.tableId == _this.tableId) {
            versionsWrapper.sort(action.newSortOrder);

            _this.setState({
              versionsWrapper: versionsWrapper
            });
          }

          break;
      }
    });
    this.setState({
      isFirstVersion: isFirstVersion,
      periodsWrapper: periodsWrapper,
      versionsWrapper: versionsWrapper,
      newVersionSaved: true // this is set to false only when the user clicks the add version button.

    });
  },

  /**
   * The logic for periods and versions is in this lifecycle event because
   * the periodData and versionData props are set after the componentWillMount
   * lifecycle event handler is executed.
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    // change the props only if the newProps are different from the existing props
    if (this.props.periodData == null) {
      var periodsWrapper = this.state.periodsWrapper;
      periodsWrapper.setKeyMap(newProps.periodObjectKeyMap);
      periodsWrapper.create(newProps.periodData || []);
      this.setState({
        periodsWrapper: periodsWrapper
      });
    } // // set first version if required


    var isFirstVersion = this.state.isFirstVersion;

    if (typeof newProps.isFirstVersion == "boolean" && this.props.isFirstVersion != newProps.isFirstVersion) {
      isFirstVersion = newProps.isFirstVersion;
      this.setState({
        isFirstVersion: isFirstVersion
      });
    }

    var versionsWrapper = this.state.versionsWrapper;

    if (_.isEqual(this.props.versionData, newProps.versionData) === false) {
      var periodsWrapper = this.state.periodsWrapper;
      versionsWrapper.setPeriodsWrapper(periodsWrapper);
      versionsWrapper.setKeyMap(newProps.versionObjectKeyMap); // sort the version data in descending order before sending it to the wrapper

      if (Array.isArray(newProps.versionData) == true) {
        var start = 0,
            end = newProps.versionData.length - 1;

        while (start < end) {
          var temp = newProps.versionData[start];
          newProps.versionData[start] = newProps.versionData[end];
          newProps.versionData[end] = temp;
          start++;
          end--;
        }
      }

      versionsWrapper.create(newProps.versionData, "desc", this.props.selectedVersionChangedEventHandler, newProps.initialSelectedVersionId);
      this.setState({
        versionsWrapper: versionsWrapper
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var styles = this.IncentStyles.versionControlStyles;

    var id = this.props.id || _.uniqueId("versionControl_");

    var translatedLabelsMap = createTranslatedLabelsMap(this.props.translationLabelMap);
    /**
     * Function called when the "Show/Hide Version Details" button is clicked.
     * It updates the versionDetailsVisible state to show or hide the version details.
     */

    var toggleVersionDetails = function toggleVersionDetails(event) {
      var versionDetailsVisible = _this2.state.versionDetailsVisible;

      _this2.setState({
        versionDetailsVisible: !versionDetailsVisible
      });
    };
    /**
     * Function called when the add version button is clicked.
     * - Call the PreAddVersionEventHandler to check if the version can be added.
     * - Disable the Add Version button.
     * - Enable delete button.
     */


    var addVersion = function addVersion(event) {
      var canAddVersion = true;

      if (typeof _this2.props.preAddVersionEventHandler == "function") {
        var result = _this2.props.preAddVersionEventHandler();

        if (typeof result == "boolean") {
          canAddVersion = result;
        }
      }

      if (canAddVersion == false) {
        _this2.setState({
          showVersionValidationMessage: true,
          versionDetailsVisible: true
        });

        event.stopPropagation();
        return;
      } else {
        _this2.setState({
          showVersionValidationMessage: false,
          versionDetailsVisible: true
        });
      }

      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.addVersion();

      _this2.setState({
        isFirstVersion: false,
        versionsWrapper: versionsWrapper,
        newVersionSaved: false,
        mode: "add"
      });

      event.stopPropagation();
    };
    /**
     * Function handler called when the effective start drop down value is changed.
     * - For the selected version the start period is the selected period.
     * - For the prior version the end period is the period before the selected period in the available periods list.
     */


    var startPeriodSelectionChanged = function startPeriodSelectionChanged(newValue) {
      var selectedPeriodId = parseInt(newValue);
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().setStartPeriod(selectedPeriodId);

      _this2.setState({
        versionsWrapper: versionsWrapper
      });
    };
    /**
     * Function called when the cancel button on the delete version dialog is clicked.
     */


    var cancelDeleteVersion = function cancelDeleteVersion() {
      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: false // hide the dialog

      });
    };
    /**
     * Function called when the delete version button is clicked.
     */


    var deleteVersionClickHandler = function deleteVersionClickHandler(event) {
      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: true
      });
    };
    /**
     * Returns the delete version confirmation dialog message.
     */


    var getDeleteMessage = function getDeleteMessage() {
      return _this2.props.translationLabelMap.versionDeleteConfirmationMessage;
    };
    /**
     * Function to delete version called when the OK on the delete confirmation dialog is clicked.
     */


    var deleteVersion = function deleteVersion() {
      // show confirmation dialog
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().deleteVersion();

      _this2.setState({
        deleteVersionConfirmationDialogIsOpen: false,
        versionsWrapper: versionsWrapper,
        mode: "delete"
      });
    };
    /**
     * Function called when the version table row is clicked, this is the edit version action. Logic below:
     * - Perform a check to make sure current version does not have validation errors.
     * - Cannot edit the first version. The start period should not show a drop down, it should be a label.
     * - End period for any version can never be edited, it should always be a label.
     * - Available periods is the list of all periods in the version.
     * - Available periods never contains the SOT and EOT periods.
     * - The following two steps are executed in the start period drop down change handler.
     *      - Edited version takes the selected period as the start period.
     *      - Previous version takes the prior period of the selected period as the end period.
     */


    var editVersion = function editVersion(rowData, rowIndex, event) {
      var canChangeVersion = true;

      if (typeof _this2.props.preAddVersionEventHandler == "function") {
        var result = _this2.props.preAddVersionEventHandler();

        if (typeof result == "boolean") {
          canChangeVersion = result;
        }
      }

      if (canChangeVersion == false) {
        _this2.setState({
          showVersionValidationMessage: true
        });

        return;
      } else {
        _this2.setState({
          showVersionValidationMessage: false
        });
      }

      var versionsWrapper = _this2.state.versionsWrapper;
      var selectedVersion = versionsWrapper.getSelectedVersion();
      var versionsKeyMap = versionsWrapper.getKeyMap(); // if the selected row is clicked ignore the event

      if (rowData[versionsKeyMap.versionIdKey] == selectedVersion[versionsKeyMap.versionIdKey]) {
        event.stopPropagation();
        return;
      } // set selected version


      versionsWrapper.setSelectedVersion(rowData, "edit");

      _this2.setState({
        versionsWrapper: versionsWrapper,
        mode: "edit"
      });
    };
    /**
     * Function that determines if the add version button is enabled or not.
     */


    var isAddVersionButtonEnabled = function isAddVersionButtonEnabled() {
      if (_this2.props.readOnly == true) {
        return false;
      } // if there is only one available period in the last version then we cannot create a new version, disable the button


      var versionsWrapper = _this2.state.versionsWrapper;
      var lastVersion = versionsWrapper.getLastVersion();
      var lastVersionAvailablePeriods = versionsWrapper.getAvailablePeriods(lastVersion);

      if (lastVersionAvailablePeriods && lastVersionAvailablePeriods.length == 1) {
        return false;
      } // if we are creating the first version of a new pay curve, then we cannot add a new version
      // until we save the first version.


      if (_this2.state.isFirstVersion == true) {
        return false;
      } // User created a new version by clicking the add version button but has not saved it yet.


      if (_this2.state.newVersionSaved == false) {
        return false;
      }

      return true;
    };
    /**
     * Function that determines if the delete version button is enabled or not.
     */


    var isDeleteVersionButtonEnabled = function isDeleteVersionButtonEnabled() {
      if (_this2.props.readOnly == true) {
        return false;
      } // if there is only one version we cannot delete


      if (_this2.state.isFirstVersion == true || _this2.state.versionData && _this2.state.versionData.length == 1) {
        return false;
      }

      var versionsWrapper = _this2.state.versionsWrapper;
      var versionCount = versionsWrapper.getCount();

      if (_this2.state.isFirstVersion == true || versionCount == 1) {
        return false;
      } // if the selected version is the first version then it cannot be deleted


      if (versionsWrapper.selectedVersion().isFirstVersion() == true) {
        return false;
      }

      return true;
    };
    /**
     * Function that constructs the period name. It is a combination of the name or label
     * plus the start date display string.
     */


    var getStartPeriodLabel = function getStartPeriodLabel(period) {
      var label = null;

      if (period) {
        var periodsWrapper = _this2.state.periodsWrapper;
        var periodsKeyMap = periodsWrapper.getKeyMap();
        var name = period[periodsKeyMap.nameKey];

        if (period[periodsKeyMap.startDateKey] && period[periodsKeyMap.startDateKey].length > 0) {
          label = name + " (" + period[periodsKeyMap.startDateKey] + ")";
        }
      }

      return label;
    };
    /**
     * Returns the period label for the start period.
     * @param {object} version The version object.
     */


    var getVersionStartPeriodLabel = function getVersionStartPeriodLabel(version) {
      var label = null;

      if (version) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var periodId = version[versionsKeyMap.startPeriodIdKey];
        var periodsWrapper = _this2.state.periodsWrapper;

        if (periodsWrapper.isPeriodSOT(periodId) == true) {
          label = translatedLabelsMap.sotPeriodLabelText;
        } else {
          var period = periodsWrapper.getPeriod(periodId);

          if (period) {
            label = getStartPeriodLabel(period);
          }
        }
      }

      return label;
    };
    /**
     * Returns the period label for the end period.
     * @param {object} version The version object.
     */


    var getVersionEndPeriodLabel = function getVersionEndPeriodLabel(version) {
      var label = null;

      if (version) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var periodId = version[versionsKeyMap.endPeriodIdKey];
        var periodsWrapper = _this2.state.periodsWrapper;
        var periodsKeyMap = periodsWrapper.getKeyMap();

        if (periodsWrapper.isPeriodEOT(periodId) == true) {
          label = translatedLabelsMap.eotPeriodLabelText;
        } else {
          var period = periodsWrapper.getPeriod(periodId);

          if (period) {
            var name = period[periodsKeyMap.nameKey];

            if (period[periodsKeyMap.endDateKey] && period[periodsKeyMap.endDateKey].length > 0) {
              label = name + " (" + period[periodsKeyMap.endDateKey] + ")";
            }
          }
        }
      }

      return label;
    };
    /**
     * Returns the version table if the show version details button is clicked, else hides it.
     * The outer div is required to give padding under the versionTableContainer because adding
     * margin to the versionTableContainer does not work since it is removed and added into the
     * DOM dynamically.
     */


    var toggleVersionTableContainer = function toggleVersionTableContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        var versionsWrapper = _this2.state.versionsWrapper;
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var selectedRowIndex = versionsWrapper.selectedVersion().getIndex();
        return React.createElement("div", {
          style: {
            paddingBottom: 20
          }
        }, React.createElement("div", {
          id: "versionTableContainer",
          style: styles.versionTableContainerStyle
        }, React.createElement(Table, {
          id: _this2.tableId,
          data: versionsWrapper.getVersions(),
          rowClickHandler: editVersion,
          selectedRowIndex: selectedRowIndex
        }, React.createElement(TableHeadRow, null, React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveStartLabelText,
          defaultSort: true,
          defaultSortOrder: "DESC",
          sortPropertyName: versionsKeyMap.startPeriodIdKey
        }), React.createElement(TableHeadColumn, {
          width: "20%",
          columnName: _this2.props.translationLabelMap.effectiveEndLabelText
        }), React.createElement(TableHeadColumn, {
          width: "60%",
          columnName: _this2.props.translationLabelMap.versionNotesLabelText
        })), React.createElement(TableNormalRow, null, React.createElement(TableTextColumn, {
          textPropertyName: getVersionStartPeriodLabel
        }), React.createElement(TableTextColumn, {
          textPropertyName: getVersionEndPeriodLabel
        }), React.createElement(TableTextColumn, {
          textPropertyName: versionsKeyMap.descriptionKey
        })))));
      } else {
        return null;
      }
    };

    var versionDetailsToggleContainer = function versionDetailsToggleContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionDetailsToggleContainer",
          style: styles.versionDetailsToggleContainerStyle,
          onClick: toggleVersionDetails
        }, React.createElement("span", {
          style: styles.versionDetailsToggleLabelStyle
        }, _this2.props.translationLabelMap.addHideVersionDetailsButtonText), React.createElement("i", {
          className: "fa fa-chevron-up",
          style: styles.versionDetailsToggleIconStyle
        }));
      } else {
        return React.createElement("div", {
          id: "versionDetailsToggleContainer",
          style: styles.versionDetailsToggleContainerStyle,
          onClick: toggleVersionDetails
        }, React.createElement("span", {
          style: styles.versionDetailsToggleLabelStyle
        }, _this2.props.translationLabelMap.addShowVersionDetailsButtonText), React.createElement("i", {
          className: "fa fa-chevron-down",
          style: styles.versionDetailsToggleIconStyle
        }));
      }
    };
    /**
     * Function that returns a dropdown of possible start periods or a label if the start period is SOT.
     */


    var getStartPeriodControl = function getStartPeriodControl() {
      var versionsWrapper = _this2.state.versionsWrapper;
      var periodsWrapper = _this2.state.periodsWrapper;
      var periodsKeyMap = periodsWrapper.getKeyMap();

      var getStartPeriodData = function getStartPeriodData() {
        return versionsWrapper.selectedVersion().getAvailablePeriods();
      };

      var getSelectedValue = function getSelectedValue() {
        var versionsKeyMap = versionsWrapper.getKeyMap();
        var selectedVersion = versionsWrapper.getSelectedVersion();
        var selectedVersionStartPeriodId = selectedVersion[versionsKeyMap.startPeriodIdKey];
        return selectedVersionStartPeriodId;
      };

      if (versionsWrapper.selectedVersion().isFirstVersion() == true) {
        return React.createElement(Label, {
          id: "startPeriodLabel",
          bold: false,
          text: _this2.props.translationLabelMap.sotPeriodLabelText
        });
      } else {
        return React.createElement(DropDown, {
          id: "startPeriodDropDown",
          data: getStartPeriodData(),
          valuePropName: periodsKeyMap.periodIdKey,
          autoFocus: true,
          textPropName: getStartPeriodLabel,
          changeHandler: startPeriodSelectionChanged,
          initialSelectedValue: getSelectedValue()
        });
      }
    };
    /**
     * Returns the component that should be displayed for the end period for a version.
     */


    var getEndPeriodControl = function getEndPeriodControl() {
      var versionsWrapper = _this2.state.versionsWrapper;
      return React.createElement(Label, {
        id: "endPeriodLabel",
        bold: false,
        text: getVersionEndPeriodLabel(versionsWrapper.getSelectedVersion())
      });
    };
    /**
     * Function called when the version notes are changed. Update the selected version
     * and trigger the event that the versions changed.
     */


    var versionNotesChanged = function versionNotesChanged(newValue) {
      var versionsWrapper = _this2.state.versionsWrapper;
      versionsWrapper.selectedVersion().setNotes(newValue);

      _this2.setState({
        versionsWrapper: versionsWrapper
      });
    };

    var getVersionNotes = function getVersionNotes() {
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();
      var selectedVersion = versionsWrapper.getSelectedVersion();

      if (selectedVersion) {
        return selectedVersion[versionsKeyMap.descriptionKey];
      }

      return null;
    };

    var toggleVersionValidationMessage = function toggleVersionValidationMessage() {
      if (_this2.state.showVersionValidationMessage == true) {
        var errorMessage = _this2.props.translationLabelMap.versionValidationMessage || "[Error Message Here]";
        return React.createElement("div", {
          style: FormStyles.errorMessageContainerStyle
        }, React.createElement("div", {
          style: FormStyles.errorMessageWrapperStyle
        }, React.createElement("span", {
          className: "fa fa-exclamation-circle",
          style: FormStyles.errorMessageIconStyle
        }), React.createElement("span", null, errorMessage)));
      } else {
        return null;
      }
    };

    var toggleVersionDetailsContainer = function toggleVersionDetailsContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionDetailsContainer",
          style: styles.versionDetailsContainerStyle
        }, toggleVersionValidationMessage(), React.createElement("div", {
          style: styles.versionDetailsRowOneLeftStyle
        }, React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.effectiveStartLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, getStartPeriodControl()), React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.effectiveEndLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, getEndPeriodControl())), React.createElement("div", {
          style: styles.versionDetailsRowRightStyle
        }, React.createElement(SecondaryButton, {
          id: "deleteVersionButton",
          text: _this2.props.translationLabelMap.deleteButtonText,
          clickHandler: deleteVersionClickHandler,
          enabled: isDeleteVersionButtonEnabled(),
          icon: "fa fa-trash"
        })), React.createElement("div", {
          style: styles.versionDetailsRowClearStyle
        }), React.createElement("div", {
          style: styles.versionDetailsRowTwoLeftStyle
        }, React.createElement("div", {
          style: _this2.IncentStyles.labelContainerStyle
        }, React.createElement(Label, {
          text: _this2.props.translationLabelMap.versionNotesLabelText + ":"
        })), React.createElement("div", {
          style: _this2.IncentStyles.componentContainerStyle
        }, React.createElement(TextBox, {
          id: "versionNotes",
          value: getVersionNotes(),
          changeHandler: versionNotesChanged,
          size: "large",
          maxLength: 256,
          validator: _this2.props.validator,
          validationEventHandler: _this2.validationEventHandler,
          hideValidation: true
        }))), React.createElement("div", {
          style: styles.versionDetailsRowClearStyle
        }));
      } else {
        return null;
      }
    };
    /**
     * Function to render the children of the version control and show and hide them based on the toggle.
     */


    var toggleVersionChildContainer = function toggleVersionChildContainer() {
      if (_this2.state.versionDetailsVisible == true) {
        return React.createElement("div", {
          id: "versionChildrenContainer",
          style: styles.versionDetailsContainerStyle
        }, _this2.props.children);
      } else {
        return null;
      }
    };
    /**
     * Shows/Hides the add version button. Depends on whether we are creating new pay curve.
     */


    var toggleAddVersionButton = function toggleAddVersionButton() {
      if (_this2.state.isFirstVersion == true) {
        return null;
      } else {
        return React.createElement(SecondaryButton, {
          id: "addVersionButton",
          text: _this2.props.translationLabelMap.addVersionButtonText,
          clickHandler: addVersion,
          enabled: isAddVersionButtonEnabled(),
          icon: "fa fa-plus-circle"
        });
      }
    };
    /**
     * Function that returns the title for the version. If it is first version then display "master version" otherwise
     * display <start period label> - <end period label>
     */


    var getVersionTitle = function getVersionTitle() {
      var versionTitle = null;
      var versionsWrapper = _this2.state.versionsWrapper;
      var versionsKeyMap = versionsWrapper.getKeyMap();
      var periodsWrapper = _this2.state.periodsWrapper;
      var periodsKeyMap = periodsWrapper.getKeyMap();
      var selectedVersion = versionsWrapper.getSelectedVersion();

      if (selectedVersion) {
        var startPeriodId = selectedVersion[versionsKeyMap.startPeriodIdKey];
        var startPeriod = periodsWrapper.getPeriod(startPeriodId);

        if (startPeriod[periodsKeyMap.nameKey] && startPeriod[periodsKeyMap.nameKey].toLowerCase() == "sot") {
          versionTitle = translatedLabelsMap.versionText + ": " + _this2.props.translationLabelMap.sotPeriodLabelText;
        } else {
          // start period name
          versionTitle = translatedLabelsMap.versionText + ": " + startPeriod[periodsKeyMap.nameKey];
        } // end period name


        var endPeriodId = selectedVersion[versionsKeyMap.endPeriodIdKey];
        var endPeriod = periodsWrapper.getPeriod(endPeriodId);

        if (endPeriod[periodsKeyMap.nameKey] && endPeriod[periodsKeyMap.nameKey].toLowerCase() == "eot") {
          versionTitle = versionTitle + " - " + _this2.props.translationLabelMap.eotPeriodLabelText;
        } else if (endPeriod && endPeriod[periodsKeyMap.nameKey]) {
          versionTitle = versionTitle + " - " + endPeriod[periodsKeyMap.nameKey];
        }
      }

      return versionTitle;
    };

    return React.createElement("div", {
      id: id,
      style: styles.shellStyle
    }, React.createElement("div", {
      id: "versionContainer",
      style: styles.headerStyle
    }, React.createElement("div", {
      id: "header",
      onClick: toggleVersionDetails,
      style: {
        cursor: "pointer"
      }
    }, React.createElement("div", {
      id: "versionLabelContainer",
      style: styles.versionLabelContainerStyle
    }, React.createElement("div", {
      "data-component-name": "VersionHeaderTitle",
      "data-componenet-type": "Label",
      style: styles.versionLabelStyle
    }, getVersionTitle()), toggleAddVersionButton()), versionDetailsToggleContainer(), React.createElement("div", {
      style: styles.versionLabelClearStyle
    })), toggleVersionTableContainer()), toggleVersionDetailsContainer(), React.createElement("div", {
      id: "versionChildrenContainer",
      style: styles.versionDetailsContainerStyle
    }, this.props.children), React.createElement(ConfirmationDialog, {
      show: this.state.deleteVersionConfirmationDialogIsOpen,
      type: "delete",
      cancelButtonId: "deleteVersionCancelButton",
      headerText: this.props.translationLabelMap.confirmDeleteText,
      message: getDeleteMessage(),
      primaryButtonId: "deleteVersionOkButton",
      primaryButtonText: this.props.translationLabelMap.okText,
      cancelButtonText: this.props.translationLabelMap.cancelText,
      confirmClickHandler: deleteVersion,
      cancelClickHandler: cancelDeleteVersion
    }));
  } // lifecycle event handlers

});
module.exports = VersionControl;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(1);
/**
 * A non visual wrapper component that provides functionality on top of the period data
 * for querying and manipulating it.
 */


var PeriodsWrapper = function PeriodsWrapper() {
  function updatePeriodObjectKeyMap(userPeriodObjectKeyMap) {
    if (userPeriodObjectKeyMap) {
      _keyMap.periodIdKey = userPeriodObjectKeyMap.periodIdKey || "periodId";
      _keyMap.nameKey = userPeriodObjectKeyMap.nameKey || "name";
      _keyMap.labelKey = userPeriodObjectKeyMap.labelKey || "label";
      _keyMap.startDateKey = userPeriodObjectKeyMap.startDateKey || "startDate";
      _keyMap.endDateKey = userPeriodObjectKeyMap.endDateKey || "endDate";
    }
  }

  ;

  function getDefaultKeyMap() {
    return {
      periodIdKey: "periodId",
      nameKey: "name",
      labelKey: "label",
      startDateKey: "startDate",
      endDateKey: "endDate"
    };
  }

  var _keyMap = getDefaultKeyMap();

  var that = {
    _periodData: null
  };

  that.create = function (periodData) {
    that._periodData = periodData;
  };

  that.getPeriods = function () {
    return that._periodData;
  };

  that.getCount = function () {
    if (that._periodData && Array.isArray(that._periodData)) {
      return that._periodData.length;
    }

    return null;
  };

  that.setKeyMap = function (keyMap) {
    updatePeriodObjectKeyMap(keyMap);
  };

  that.getKeyMap = function () {
    return _keyMap;
  };

  that.resetKeyMap = function () {
    _keyMap = getDefaultKeyMap();
  };

  that.isPeriodSOT = function (periodId) {
    var isSOT = false;

    if (Array.isArray(that._periodData) == true) {
      var matchingPeriod = _.find(that._periodData, function (item, index, arr) {
        return periodId == item[_keyMap.periodIdKey];
      });

      if (matchingPeriod && matchingPeriod[_keyMap.nameKey] && matchingPeriod[_keyMap.nameKey].toLowerCase() == "sot") {
        isSOT = true;
      }
    }

    return isSOT;
  };

  that.isPeriodEOT = function (periodId) {
    var isEOT = false;

    if (Array.isArray(that._periodData) == true) {
      var matchingPeriod = _.find(that._periodData, function (item, index, arr) {
        return periodId == item[_keyMap.periodIdKey];
      });

      if (matchingPeriod && matchingPeriod[_keyMap.nameKey] && matchingPeriod[_keyMap.nameKey].toLowerCase() == "eot") {
        isEOT = true;
      }
    }

    return isEOT;
  };

  that.getPeriodIndex = function (periodId) {
    var periodIndex = -1;

    if (Array.isArray(that._periodData) == true) {
      for (var index = 0; index < that._periodData.length; index++) {
        var period = that._periodData[index];

        if (period[_keyMap.periodIdKey] == periodId) {
          periodIndex = index;
          break;
        }
      }
    }

    return periodIndex;
  };

  that.getPeriod = function (periodId) {
    var period = null;

    if (Array.isArray(that._periodData) == true) {
      var periodIndex = that.getPeriodIndex(periodId);

      if (periodIndex > -1) {
        period = that._periodData[periodIndex];
      }
    }

    return period;
  };

  that.getPreviousPeriod = function (periodId) {
    var previousPeriod = null;

    if (Array.isArray(that._periodData) == true && periodId != null && periodId != undefined) {
      var currentPeriodIndex = that.getPeriodIndex(periodId); // should not return the SOT period, as it cannot be used.

      if (currentPeriodIndex > 1) {
        previousPeriod = that._periodData[currentPeriodIndex - 1];
      }
    }

    return previousPeriod;
  };

  that.getAvailablePeriods = function (startPeriodId, includeStartPeriod, endPeriodId) {
    var _includeStartPeriod = true;

    if (typeof includeStartPeriod == "boolean") {
      _includeStartPeriod = includeStartPeriod;
    }

    var availablePeriods = null;
    var startPeriodIndex = that.getPeriodIndex(startPeriodId);

    if (Array.isArray(that._periodData) == true && startPeriodIndex > -1) {
      // -2 so that we never include the last period which should always be EOT
      var endPeriodIndex = that._periodData.length - 2;

      if (endPeriodId != null && endPeriodId != undefined) {
        endPeriodIndex = that.getPeriodIndex(endPeriodId);
      }

      if (_includeStartPeriod == true) {
        availablePeriods = _.filter(that._periodData, function (item, index, arr) {
          // pick only the start period and all periods until the end period but 
          // not the end period, first period, sot, eot
          // Also pick the period where the start period index and end period index are the same.
          if (index > 1 && index >= startPeriodIndex && index <= endPeriodIndex && index != arr.length - 1) {
            return true;
          }

          return false;
        });
      } else {
        availablePeriods = _.filter(that._periodData, function (item, index, arr) {
          // pick only the start period and all periods until the end period but 
          // not the end period, first period, sot, eot
          // Also pick the period where the start period index and end period index are the same.
          if (index > 1 && index > startPeriodIndex && index <= endPeriodIndex && index != arr.length - 1) {
            return true;
          }

          return false;
        });
      }
    }

    return availablePeriods;
  };

  return that;
};

module.exports = PeriodsWrapper();

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(1);
/**
 * A non visual component for performing actions on version data.
 */


var VersionsWrapper = function VersionsWrapper() {
  function updateVersionObjectKeyMap(userVersionObjectKeyMap) {
    if (userVersionObjectKeyMap) {
      _keyMap.versionIdKey = userVersionObjectKeyMap.versionIdKey || "versionId";
      _keyMap.startPeriodIdKey = userVersionObjectKeyMap.startPeriodIdKey || "startPeriodId";
      _keyMap.endPeriodIdKey = userVersionObjectKeyMap.endPeriodIdKey || "endPeriodId";
      _keyMap.descriptionKey = userVersionObjectKeyMap.descriptionKey || "description";
    }
  }

  ;

  function getDefaultKeyMap() {
    return {
      versionIdKey: "versionId",
      startPeriodIdKey: "startPeriodId",
      endPeriodIdKey: "endPeriodId",
      descriptionKey: "description"
    };
  }

  ;

  function getVersionIndex(versionId, _versionData) {
    var versionIndex = null;

    if (versionId != null && versionId != undefined && Array.isArray(_versionData) == true) {
      for (var index = 0; index < _versionData.length; index++) {
        var version = _versionData[index];

        if (versionId == version[_keyMap.versionIdKey]) {
          versionIndex = index;
          break;
        }
      }
    }

    return versionIndex;
  }

  ;
  var SORT_DIRECTION = {
    ASC: "ASC",
    DESC: "DESC"
  };

  var _keyMap = getDefaultKeyMap();

  var that = {
    _versionData: null,
    _periodsWrapper: null,
    _selectedVersionId: null,
    _currentSortDirection: SORT_DIRECTION.ASC,
    _selectedVersionChangedEventHandler: null
  };

  that.create = function (versionData, sortDirection, selectedVersionChangedEventHandler, initialSelectedVersionId) {
    if (Array.isArray(versionData) == true) {
      that._versionData = versionData; // console.log("create: _versionData = " + JSON.stringify(that._versionData));

      if (that.selectedVersionChangedEventHandler == null) {
        that._selectedVersionChangedEventHandler = selectedVersionChangedEventHandler;
      }

      if (sortDirection && sortDirection.toLowerCase() == "desc") {
        that._currentSortDirection = SORT_DIRECTION.DESC;
      }

      if (initialSelectedVersionId) {
        that._selectedVersionId = initialSelectedVersionId;
      } // set the 0th version as the selected version only if it is null (initialization)
      // that.setSelectedVersion(that._versionData[0], "edit");

    }
  };

  that.getCurrentSortDirection = function () {
    return that._currentSortDirection;
  };

  that.setPeriodsWrapper = function (periodsWrapper) {
    that._periodsWrapper = periodsWrapper;
  };

  that.getPeriodsWrapper = function () {
    return that._periodsWrapper;
  };

  that.getVersions = function () {
    return that._versionData;
  };

  that.getCount = function () {
    if (that._versionData && Array.isArray(that._versionData)) {
      return that._versionData.length;
    }

    return null;
  };

  that.setKeyMap = function (keyMap) {
    updateVersionObjectKeyMap(keyMap);
  };

  that.getKeyMap = function () {
    return _keyMap;
  };

  that.resetKeyMap = function () {
    _keyMap = getDefaultKeyMap();
  };

  that.setSelectedVersion = function (version, action) {
    if (version) {
      // console.log("setSelectedVersion: _selectedVersionId = " + that._selectedVersionId + ", version[_keyMap.versionIdKey] = " + version[_keyMap.versionIdKey]);
      // set the state and trigger the change handler only if the new version id is different
      if (that._selectedVersionId != version[_keyMap.versionIdKey]) {
        that._selectedVersionId = version[_keyMap.versionIdKey];

        if (typeof that._selectedVersionChangedEventHandler == "function") {
          that._selectedVersionChangedEventHandler(that.getSelectedVersion(), action, that._currentSortDirection);
        }
      }
    }
  };

  that.getSelectedVersion = function () {
    var selectedVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._selectedVersionId) {
        selectedVersion = _.find(that._versionData, function (item, index, arr) {
          return that._selectedVersionId == item[_keyMap.versionIdKey];
        });

        if (!selectedVersion) {
          // could not find selectedVersion for _selectedVersionId, make the first version the selected version
          // selectedVersion = that._versionData[0];
          // could not find selectedVersion for _selectedVersionId, make the lastest version the selected version
          selectedVersion = that._versionData[that._versionData.length - 1]; // console.log("getSelectedVersion: selectedVersion is null for _selectedVersionId = " + that._selectedVersionId);
          // console.log("getSelectedVersion: _versionData = " + JSON.stringify(that._versionData));  
        }
      } else {
        // no selectedVersionId is set, so make the first version as the selected version
        // selectedVersion = that._versionData[0];
        // no selectedVersionId is set, so make the latest version as the selected version
        selectedVersion = that._versionData[that._versionData.length - 1];
      }
    }

    if (selectedVersion && !selectedVersion.firstPeriodId) {
      selectedVersion.firstPeriodId = selectedVersion[_keyMap.startPeriodIdKey];
    }

    return selectedVersion;
  };

  that.selectedVersion = function () {
    return that;
  };

  that.isFirstVersion = function () {
    var isFirstVersion = false; // if the selected version start period name is sot, then it is the first version

    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion && that._periodsWrapper) {
      var startPeriodId = selectedVersion[_keyMap.startPeriodIdKey];
      isFirstVersion = that._periodsWrapper.isPeriodSOT(startPeriodId);
    }

    return isFirstVersion;
  };

  that.isLastVersion = function () {
    var isLastVersion = false; // if the selected version end period name is eot, then it is the last version

    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion && that._periodsWrapper) {
      var endPeriodId = selectedVersion[_keyMap.endPeriodIdKey];
      isLastVersion = that._periodsWrapper.isPeriodEOT(endPeriodId);
    }

    return isLastVersion;
  };
  /**
   * Function to change the start period of the selected period.
   * - For the selected version the start period is the selected period.
   * - For the prior version the end period is the period before the selected period in the available periods list.
   */


  that.setStartPeriod = function (startPeriodId) {
    var selectedVersion = that.getSelectedVersion();

    if (!selectedVersion.firstPeriodId) {
      var firstPeriodId = selectedVersion[_keyMap.startPeriodIdKey];
      selectedVersion.firstPeriodId = firstPeriodId;
    }

    selectedVersion[_keyMap.startPeriodIdKey] = startPeriodId;
    var previousVersion = that.selectedVersion().getPreviousVersion();

    var previousPeriod = that._periodsWrapper.getPreviousPeriod(startPeriodId);

    var periodsKeyMap = that._periodsWrapper.getKeyMap();

    previousVersion[_keyMap.endPeriodIdKey] = previousPeriod[periodsKeyMap.periodIdKey];
  };

  that.getPreviousVersion = function () {
    var previousVersion = null;
    var selectedVersion = that.getSelectedVersion();
    var selectedVersionIndex = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);

    if (that._currentSortDirection == SORT_DIRECTION.ASC) {
      if (selectedVersionIndex > 0) {
        previousVersion = that._versionData[selectedVersionIndex - 1];
      }
    } else {
      if (selectedVersionIndex < that._versionData.length - 1) {
        previousVersion = that._versionData[selectedVersionIndex + 1];
      }
    }

    return previousVersion;
  };

  that.getNextVersion = function () {
    var nextVersion = null;
    var selectedVersion = that.getSelectedVersion();
    var selectedVersionIndex = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);

    if (that._currentSortDirection == SORT_DIRECTION.ASC) {
      if (selectedVersionIndex < that._versionData.length - 1) {
        nextVersion = that._versionData[selectedVersionIndex + 1];
      }
    } else {
      if (selectedVersionIndex > 0) {
        nextVersion = that._versionData[selectedVersionIndex - 1];
      }
    }

    return nextVersion;
  };

  that.setNotes = function (note) {
    var selectedVersion = that.getSelectedVersion();
    selectedVersion[_keyMap.descriptionKey] = note;
  };
  /**
   * Returns the index of the selected version
   */


  that.getIndex = function () {
    var index = -1;
    var selectedVersion = that.getSelectedVersion();

    if (selectedVersion) {
      index = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);
    }

    return index;
  };
  /**
   * Function to delete the selected version. Logic:
   * - First version cannot be deleted.
   * - When version is deleted the previous version is affected.
   * - The previous version gets the deleted version's end date
   */


  that.deleteVersion = function () {
    // cannot delete the first version
    if (Array.isArray(that._versionData) == true && that.selectedVersion().isFirstVersion() == false) {
      var selectedVersion = that.getSelectedVersion();
      var selectedVersionIndex = getVersionIndex(selectedVersion[_keyMap.versionIdKey], that._versionData);
      var selectedVersionEndPeriodId = selectedVersion[_keyMap.endPeriodIdKey];
      var previousVersion = that.selectedVersion().getPreviousVersion();
      previousVersion[_keyMap.endPeriodIdKey] = selectedVersionEndPeriodId;
      that.setSelectedVersion(previousVersion, "delete"); // remove the selected period and make the previous version as the selected period

      that._versionData.splice(selectedVersionIndex, 1);
    }
  };
  /**
   * Returns the available periods for the version passed in. If the version parameter
   * is not passed in then the selected version is used.
   * Available periods are all the periods between and including the start and end periods for the version.
   */


  that.getAvailablePeriods = function (version) {
    var availablePeriods = null;
    var _version = version;

    if (!version) {
      _version = that.getSelectedVersion();
    }

    if (Array.isArray(that._versionData) == true) {
      var _versionStartPeriodId = _version[_keyMap.startPeriodIdKey];
      var _versionEndPeriodId = _version[_keyMap.endPeriodIdKey];
      availablePeriods = that._periodsWrapper.getAvailablePeriods(_version.firstPeriodId, true, _versionEndPeriodId);
    }

    return availablePeriods;
  };

  that.sort = function (sortDirection) {
    var _sortDirection = null;

    if (sortDirection) {
      if (sortDirection.toUpperCase() == "ASC") {
        _sortDirection = SORT_DIRECTION.ASC;
      }

      if (sortDirection.toUpperCase() == "DESC") {
        _sortDirection = SORT_DIRECTION.DESC;
      }
    }

    if (_sortDirection != that._currentSortDirection) {
      if (Array.isArray(that._versionData) == true) {
        // do an in place sort because the _versionData is a pointer to the data passed in from the parent
        // we want to maintain that link to the parent because when versions are added, edited or deleted
        // we want the parent data to change.
        var start = 0,
            end = that._versionData.length - 1;

        while (start < end) {
          var temp = that._versionData[start];
          that._versionData[start] = that._versionData[end];
          that._versionData[end] = temp;
          start++;
          end--;
        }

        if (that._currentSortDirection == SORT_DIRECTION.ASC) {
          that._currentSortDirection = SORT_DIRECTION.DESC;
        } else {
          that._currentSortDirection = SORT_DIRECTION.ASC;
        }
      }
    }
  };

  that.getLastVersion = function () {
    var lastVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        lastVersion = that._versionData[that._versionData.length - 1];
      } else {
        lastVersion = that._versionData[0];
      }
    }

    return lastVersion;
  };

  that.getFirstVersion = function () {
    var firstVersion = null;

    if (Array.isArray(that._versionData) == true) {
      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        firstVersion = that._versionData[0];
      } else {
        firstVersion = that._versionData[that._versionData.length - 1];
      }
    }

    return firstVersion;
  };
  /**
   * Function to add a new version. Logic below:
   * - A new version can only be added to the end.
   * - Get the last version. This version will be split.
   * - List of available periods is the last version start period + 1 till the last period.
   */


  that.addVersion = function () {
    var lastVersion = that.getLastVersion();
    var lastVersionStartPeriodId = lastVersion[_keyMap.startPeriodIdKey];
    var lastVersionEndPeriodId = lastVersion[_keyMap.endPeriodIdKey];

    var availablePeriods = that._periodsWrapper.getAvailablePeriods(lastVersionStartPeriodId, false);

    if (Array.isArray(availablePeriods) == true) {
      var periodsKeyMap = that._periodsWrapper.getKeyMap();

      var newVersionStartPeriodId = availablePeriods[0][periodsKeyMap.periodIdKey];
      var newVersionEndPeriodId = lastVersionEndPeriodId; // EOT
      // last version end period Id becomes the previous period of the new version start period

      var lastVersionEndPeriod = that._periodsWrapper.getPreviousPeriod(newVersionStartPeriodId);

      lastVersion[_keyMap.endPeriodIdKey] = lastVersionEndPeriod[periodsKeyMap.periodIdKey]; // create the new version

      var newVersion = {}; // loop through the version object key map to assign properties to the new version object

      Object.keys(_keyMap).forEach(function (key, index, arr) {
        newVersion[_keyMap[key]] = null;
      }); // assign a temporary version id since we use that to track selected version

      newVersion[_keyMap.versionIdKey] = _.uniqueId("newVersion_"); // assign the start and end periods to the new version

      newVersion[_keyMap.startPeriodIdKey] = newVersionStartPeriodId;
      newVersion[_keyMap.endPeriodIdKey] = newVersionEndPeriodId;

      if (that._currentSortDirection == SORT_DIRECTION.ASC) {
        // add new version to the end of the array
        that._versionData.push(newVersion);
      } else {
        // add new version to the top of the array
        that._versionData.splice(0, 0, newVersion);
      } // also make this the selected version


      that.setSelectedVersion(newVersion, "add");
    }
  };

  return that;
};

module.exports = VersionsWrapper;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Component for displaying the header for the list page and form page
 * Contains the title to the left and a container for buttons to the right
 * The buttons are used on overlays
 */
var React = __webpack_require__(0);

var _ = __webpack_require__(1);

var WorkflowStep = React.createClass({
  displayName: "WorkflowStep",
  // styles
  workflowStepStyle: {
    //padding: "0px 20px 0px 20px",
    // backgroundColor: "#eef3f6",
    border: "1px solid #E7E7E7",
    boxShadow: "0 0 2px 0 rgba(0,0,0,0.2)",
    width: "740px"
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    backgroundColor: "#EEF3F6",
    display: "flex",
    alignItems: "center",
    height: 39,
    paddingLeft: "10px",
    borderBottom: '1px solid #569241'
  },
  contentStyle: {
    display: "block",
    padding: "12px 20px 12px 20px",
    backgroundColor: "#FFFFFF"
  },
  clearStyle: {
    float: "clear"
  },
  // styles
  render: function render() {
    var id = this.props.id || _.uniqueId("workflowStep_");

    return React.createElement("div", {
      id: id,
      style: this.workflowStepStyle
    }, React.createElement("div", {
      style: this.titleStyle
    }, this.props.title), React.createElement("div", {
      style: this.contentStyle
    }, this.props.children), React.createElement("div", {
      style: this.clearStyle
    }));
  }
});
module.exports = WorkflowStep;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var _require = __webpack_require__(169),
    ScatterChart = _require.ScatterChart,
    Scatter = _require.Scatter,
    XAxis = _require.XAxis,
    YAxis = _require.YAxis,
    CartesianGrid = _require.CartesianGrid,
    Tooltip = _require.Tooltip;

var chartParentStyle = {
  position: "relative",
  padding: 20,
  fontFamily: 'Verdana',
  fontSize: 10
};
var xAxisStyle = {
  position: 'absolute',
  height: 20,
  width: 200,
  bottom: 82,
  left: 127,
  fontWeight: 'bold',
  color: '#666666',
  fontSize: 12,
  lineHeight: 15
};
var yAxisStyle = {
  transform: 'rotate(270deg)',
  transformOrigin: '-10px top 0',
  display: 'block',
  height: 20,
  width: 200,
  top: 224,
  left: -47,
  lineHeight: 15,
  position: 'absolute',
  fontSize: 12,
  fontWeight: 'bold',
  color: '#666666'
  /**
   * XScatterChart component will display data in a chart fashion.This chart will have data 
   in X and Y axis.Component will form Scatter chart joining by a line, using intersecting point. 
  */

};
var XScatterChart = React.createClass({
  displayName: "XScatterChart",
  propTypes: {
    /**
     * data is an Object that contain the 
     * dataset for the chart
     */
    data: React.PropTypes.array.isRequired,

    /**
     * xAxisField is a String, provide field name which you want to keep in the x-axis
     */
    xAxisField: React.PropTypes.string.isRequired,

    /**
     * yAxisField is a String, provide field name which you want to keep in the y-axis
     */
    yAxisField: React.PropTypes.string.isRequired,

    /**
     * dimensions is an Object that provides margin, 
     * height and width for the chart
     */
    dimensions: React.PropTypes.object,

    /**
     * xLabel String will provide the label for the x axis
     */
    xLabel: React.PropTypes.string,

    /**
     * yLabel String will provide the label for the x axis
     */
    yLabel: React.PropTypes.string,

    /**
     * unit is a string which attached to data in the tooltip
     */
    unit: React.PropTypes.string,

    /**
     * formatAxisData is a function which will customize x and y axis data
     */
    formatAxisData: React.PropTypes.func,

    /**
     * tooltipXLabel is a string, label for x-axis data in tooltip 
     */
    tooltipXLabel: React.PropTypes.string,

    /**
     * tooltipYLabel is a string, label for y-axis data in tooltip 
     */
    tooltipYLabel: React.PropTypes.string,

    /**
     * The minimum range for the X and Y axes. When the domain data goes beyond the minimum range, it will be extended.
     */
    minimumRange: React.PropTypes.number
  },
  render: function render() {
    var _this = this;

    var dimensions, unit, color;

    if (typeof this.props.dimensions === "undefined") {
      dimensions = {
        width: 400,
        height: 400,
        margins: {
          top: 20,
          right: 80,
          bottom: 20,
          left: 20
        }
      };
    } else {
      dimensions = this.props.dimensions;
    }

    var self = this;
    /**
     * Returns the maximum range value for the x and y axes. Defaults to 200.
     * Computes max from the x axis domain range.
    */

    var getMaxRange = function getMaxRange() {
      var maxRange = 200; // default max range

      if (_this.props.minimumRange % 1 === 0 && _this.props.minimumRange > 0) {
        maxRange = _this.props.minimumRange;
      }

      var data = getData();

      if (data.length > 0) {
        // data is sorted ascending so get the last record xAxisField value to get the maxRange
        var lastRecord = data[data.length - 1];

        if (lastRecord) {
          var xAxisValue = lastRecord[_this.props.xAxisField];

          if (xAxisValue > maxRange) {
            maxRange = xAxisValue + 100;
          }
        }
      }

      return maxRange;
    };

    var getData = function getData() {
      /**
       * Soring data, order by X-axis values in ascending order
       */
      var data = _this.props.data || [];
      data.sort(function (a, b) {
        return a[self.props.xAxisField] - b[self.props.xAxisField];
      });
      return data;
    };

    return React.createElement("div", {
      style: chartParentStyle
    }, React.createElement("label", {
      style: yAxisStyle
    }, this.props.yLabel), React.createElement(ScatterChart, {
      margins: dimensions.margins,
      width: dimensions.width,
      height: dimensions.height
    }, React.createElement(XAxis, {
      tickLine: false,
      domain: [0, getMaxRange()],
      tickFormatter: this.props.formatAxisData,
      dataKey: this.props.xAxisField,
      name: this.props.tooltipXLabel,
      unit: this.props.unit
    }), React.createElement(YAxis, {
      tickLine: false,
      domain: [0, getMaxRange()],
      tickFormatter: this.props.formatAxisData,
      dataKey: this.props.yAxisField,
      name: this.props.tooltipYLabel,
      unit: this.props.unit
    }), React.createElement(CartesianGrid, null), React.createElement(Tooltip, null), React.createElement(Scatter, {
      name: "Chart",
      data: getData(),
      fill: this.props.color,
      line: {
        strokeWidth: 2
      },
      shape: "circle"
    })), React.createElement("label", {
      style: xAxisStyle
    }, this.props.xLabel));
  }
});
module.exports = XScatterChart;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var Introduction = React.createClass({
  displayName: "Introduction",
  render: function render() {
    return null;
  }
});
module.exports = Introduction;

/***/ })
/******/ ]);
});
//# sourceMappingURL=xuicommon.js.map