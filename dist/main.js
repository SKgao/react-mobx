/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: Reaction, untracked, IDerivationState, createAtom, spy, comparer, isObservableObject, isBoxedObservable, isObservableArray, ObservableMap, isObservableMap, ObservableSet, isObservableSet, transaction, observable, computed, isObservable, isObservableProp, isComputed, isComputedProp, extendObservable, observe, intercept, autorun, reaction, when, action, isAction, runInAction, keys, values, entries, set, remove, has, get, decorate, configure, onBecomeObserved, onBecomeUnobserved, flow, toJS, trace, getDependencyTree, getObserverTree, _resetGlobalState, _getGlobalState, getDebugName, getAtom, _getAdministration, _allowStateChanges, _allowStateChangesInsideComputed, isArrayLike, $mobx, _isComputingDerivation, onReactionError, _interceptReads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads$$1; });
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);
function getNextId$$1() {
    return ++globalState$$1.mobxGuid;
}
function fail$$1(message) {
    invariant$$1(false, message);
    throw "X"; // unreachable
}
function invariant$$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated$$1(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once$$1(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop$$1 = function () { };
function unique$$1(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject$$1(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject$$1(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable$$1(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable$$1(object, prop) {
    if ( true && !isPropertyConfigurable$$1(object, prop))
        fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate$$1(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject$$1(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike$$1(x) {
    return Array.isArray(x) || isObservableArray$$1(x);
}
function isES6Map$$1(thing) {
    return thing instanceof Map;
}
function isES6Set$$1(thing) {
    return thing instanceof Set;
}
function getMapLikeKeys$$1(map) {
    if (isPlainObject$$1(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map$$1(map) || isObservableMap$$1(map))
        return Array.from(map.keys());
    return fail$$1("Cannot get keys from '" + map + "'");
}
function toPrimitive$$1(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");
var Atom$$1 = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom$$1(name) {
        if (name === void 0) { name = "Atom@" + getNextId$$1(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom$$1.prototype.reportObserved = function () {
        return reportObserved$$1(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom$$1.prototype.reportChanged = function () {
        startBatch$$1();
        propagateChanged$$1(this);
        endBatch$$1();
    };
    Atom$$1.prototype.toString = function () {
        return this.name;
    };
    return Atom$$1;
}());
var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);
function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop$$1; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop$$1; }
    var atom = new Atom$$1(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop$$1) {
        onBecomeObserved$$1(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop$$1) {
        onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual$$1(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer$$1 = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance$$1(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance$$1(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance$$1(target) {
    if (target[mobxDidRunLazyInitializersSymbol$$1] === true)
        return;
    var decorators = target[mobxPendingDecorators$$1];
    if (decorators) {
        addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate$$1(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator$$1(arguments))
                fail$$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
                var inheritedDecorators = target[mobxPendingDecorators$$1];
                addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators$$1][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator$$1(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY$$1;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator$$1(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer$$1(v, _, name) {
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name });
    return v;
}
function shallowEnhancer$$1(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v) || isObservableSet$$1(v))
        return v;
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name, deep: false });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name, deep: false });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name, deep: false });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name, deep: false });
    return fail$$1( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer$$1(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer$$1(v, oldValue, name) {
    if ( true && isObservable$$1(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual$$1(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
    invariant$$1(enhancer);
    var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions$$1 = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail$$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions$$1(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions$$1;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail$$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer$$1
            : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator$$1.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject$$1(v)
        ? observable$$1.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable$$1.array(v, arg2)
            : isES6Map$$1(v)
                ? observable$$1.map(v, arg2)
                : isES6Set$$1(v)
                    ? observable$$1.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$$1( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions$$1(options);
        return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableSet$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions$$1(options);
        if (o.proxy === false) {
            return extendObservable$$1({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
            var base = extendObservable$$1({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject$$1(base);
            extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator$$1,
    shallow: shallowDecorator,
    deep: deepDecorator$$1,
    struct: refStructDecorator
};
var observable$$1 = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable$$1[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get$$1 = descriptor.get, set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject$$1(instance).addComputedProp(instance, propertyName, __assign({ get: get$$1,
        set: set$$1, context: instance }, options));
});
var computedStructDecorator = computedDecorator$$1({ equals: comparer$$1.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed$$1 = function computed$$1(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator$$1.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator$$1.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue$$1(opts);
};
computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn, ref) {
    if (true) {
        invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction$$1(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction$$1(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    var shouldSupressReactionError = true;
    try {
        var res = fn.apply(scope, args);
        shouldSupressReactionError = false;
        return res;
    }
    finally {
        if (shouldSupressReactionError) {
            globalState$$1.suppressReactionErrors = shouldSupressReactionError;
            endAction(runInfo);
            globalState$$1.suppressReactionErrors = false;
        }
        else {
            endAction(runInfo);
        }
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled$$1() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart$$1({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart$$1();
    startBatch$$1();
    var prevAllowStateChanges = allowStateChangesStart$$1(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
    endBatch$$1();
    untrackedEnd$$1(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production")
        spyReportEnd$$1({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges$$1(allowStateChanges$$1, func) {
    var prev = allowStateChangesStart$$1(allowStateChanges$$1);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd$$1(prev);
    }
    return res;
}
function allowStateChangesStart$$1(allowStateChanges$$1) {
    var prev = globalState$$1.allowStateChanges;
    globalState$$1.allowStateChanges = allowStateChanges$$1;
    return prev;
}
function allowStateChangesEnd$$1(prev) {
    globalState$$1.allowStateChanges = prev;
}
function allowStateChangesInsideComputed$$1(func) {
    var prev = globalState$$1.computationDepth;
    globalState$$1.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState$$1.computationDepth = prev;
    }
    return res;
}

var ObservableValue$$1 = /** @class */ (function (_super) {
    __extends(ObservableValue$$1, _super);
    function ObservableValue$$1(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId$$1(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer$$1.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled$$1() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport$$1({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue$$1.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            if (notifySpy && "development" !== "production") {
                spyReportStart$$1({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed$$1(this);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState$$1.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState$$1.UNCHANGED : newValue;
    };
    ObservableValue$$1.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners$$1(this)) {
            notifyListeners$$1(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue$$1.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener$$1(this, listener);
    };
    ObservableValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue$$1.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue$$1;
}(Atom$$1));
var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue$$1 = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue$$1(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.value = new CaughtException$$1(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode$$1.NONE;
        if ( true && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId$$1();
        if (options.set)
            this.setter = createAction$$1(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer$$1.structural
                    : comparer$$1.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue$$1.prototype.onBecomeStale = function () {
        propagateMaybeChanged$$1(this);
    };
    ComputedValue$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue$$1.prototype.get = function () {
        if (this.isComputing)
            fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState$$1.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute$$1(this)) {
                this.warnAboutUntrackedRead();
                startBatch$$1(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch$$1();
            }
        }
        else {
            reportObserved$$1(this);
            if (shouldCompute$$1(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed$$1(this);
        }
        var result = this.value;
        if (isCaughtException$$1(result))
            throw result.cause;
        return result;
    };
    ComputedValue$$1.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException$$1(res))
            throw res.cause;
        return res;
    };
    ComputedValue$$1.prototype.set = function (value) {
        if (this.setter) {
            invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$$1(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue$$1.prototype.trackAndCompute = function () {
        if (isSpyEnabled$$1() && "development" !== "production") {
            spyReport$$1({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException$$1(oldValue) ||
            isCaughtException$$1(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue$$1.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState$$1.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction$$1(this, this.derivation, this.scope);
        }
        else {
            if (globalState$$1.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException$$1(e);
                }
            }
        }
        globalState$$1.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue$$1.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving$$1(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun$$1(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart$$1();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd$$1(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode$$1.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState$$1.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue$$1.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue$$1;
}());
var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);

var IDerivationState;
(function (IDerivationState$$1) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode$$1;
(function (TraceMode$$1) {
    TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
    TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
    TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));
var CaughtException$$1 = /** @class */ (function () {
    function CaughtException$$1(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException$$1;
}());
function isCaughtException$$1(e) {
    return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute$$1(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue$$1(obj)) {
                    if (globalState$$1.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd$$1(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd$$1(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0$$1(derivation);
            untrackedEnd$$1(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation$$1() {
    return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed$$1(atom) {
    var hasObservers$$1 = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState$$1.computationDepth > 0 && hasObservers$$1)
        fail$$1( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict"))
        fail$$1( true &&
            (globalState$$1.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction$$1(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0$$1(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState$$1.runId;
    var prevTracking = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = derivation;
    var result;
    if (globalState$$1.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException$$1(e);
        }
    }
    globalState$$1.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver$$1(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver$$1(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving$$1(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver$$1(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked$$1(action$$1) {
    var prev = untrackedStart$$1();
    try {
        return action$$1();
    }
    finally {
        untrackedEnd$$1(prev);
    }
}
function untrackedStart$$1() {
    var prev = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = null;
    return prev;
}
function untrackedEnd$$1(prev) {
    globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0$$1(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals$$1 = /** @class */ (function () {
    function MobXGlobals$$1() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals$$1;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState$$1 = (function () {
    var global = getGlobal$$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals$$1();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals$$1());
    }
})();
function isolateGlobalState$$1() {
    if (globalState$$1.pendingReactions.length ||
        globalState$$1.inBatch ||
        globalState$$1.isRunningReactions)
        fail$$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$$1().__mobxInstanceCount === 0)
            getGlobal$$1().__mobxGlobals = undefined;
        globalState$$1 = new MobXGlobals$$1();
    }
}
function getGlobalState$$1() {
    return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState$$1() {
    var defaultGlobals = new MobXGlobals$$1();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState$$1[key] = defaultGlobals[key];
    globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}
function getGlobal$$1() {
    return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
    return observable$$1.observers && observable$$1.observers.size > 0;
}
function getObservers$$1(observable$$1) {
    return observable$$1.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver$$1(observable$$1, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable$$1.observers.add(node);
    if (observable$$1.lowestObserverState > node.dependenciesState)
        observable$$1.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver$$1(observable$$1, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable$$1.observers.delete(node);
    if (observable$$1.observers.size === 0) {
        // deleting last observer
        queueForUnobservation$$1(observable$$1);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation$$1(observable$$1) {
    if (observable$$1.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable$$1.isPendingUnobservation = true;
        globalState$$1.pendingUnobservations.push(observable$$1);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch$$1() {
    globalState$$1.inBatch++;
}
function endBatch$$1() {
    if (--globalState$$1.inBatch === 0) {
        runReactions$$1();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState$$1.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable$$1 = list[i];
            observable$$1.isPendingUnobservation = false;
            if (observable$$1.observers.size === 0) {
                if (observable$$1.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable$$1.isBeingObserved = false;
                    observable$$1.onBecomeUnobserved();
                }
                if (observable$$1 instanceof ComputedValue$$1) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable$$1.suspend();
                }
            }
        }
        globalState$$1.pendingUnobservations = [];
    }
}
function reportObserved$$1(observable$$1) {
    var derivation = globalState$$1.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable$$1.lastAccessedBy) {
            observable$$1.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;
            if (!observable$$1.isBeingObserved) {
                observable$$1.isBeingObserved = true;
                observable$$1.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
        queueForUnobservation$$1(observable$$1);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged$$1(observable$$1) {
    // invariantLOS(observable, "changed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed$$1(observable$$1) {
    // invariantLOS(observable, "confirmed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged$$1(observable$$1) {
    // invariantLOS(observable, "maybe start");
    if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable$$1) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");
    if (derivation.isTracing === TraceMode$$1.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree$$1(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction$$1 = /** @class */ (function () {
    function Reaction$$1(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId$$1(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode$$1.NONE;
    }
    Reaction$$1.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction$$1.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState$$1.pendingReactions.push(this);
            runReactions$$1();
        }
    };
    Reaction$$1.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction$$1.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch$$1();
            this._isScheduled = false;
            if (shouldCompute$$1(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled$$1() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport$$1({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch$$1();
        }
    };
    Reaction$$1.prototype.track = function (fn) {
        if (this.isDisposed) {
            fail$$1("Reaction already disposed");
        }
        startBatch$$1();
        var notify = isSpyEnabled$$1();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart$$1({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction$$1(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving$$1(this);
        }
        if (isCaughtException$$1(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd$$1({
                time: Date.now() - startTime
            });
        }
        endBatch$$1();
    };
    Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState$$1.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState$$1.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled$$1()) {
            spyReport$$1({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState$$1.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction$$1.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch$$1();
                clearObserving$$1(this);
                endBatch$$1();
            }
        }
    };
    Reaction$$1.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx$$1] = this;
        return r;
    };
    Reaction$$1.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction$$1.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace$$1(this, enterBreakPoint);
    };
    return Reaction$$1;
}());
function onReactionError$$1(handler) {
    globalState$$1.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions$$1() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState$$1.isRunningReactions = true;
    var allReactions = globalState$$1.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState$$1.isRunningReactions = false;
}
var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);
function setReactionScheduler$$1(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled$$1() {
    return  true && !!globalState$$1.spyListeners.length;
}
function spyReport$$1(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState$$1.spyListeners.length)
        return;
    var listeners = globalState$$1.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart$$1(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport$$1(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd$$1(change) {
    if (false)
        {}
    if (change)
        spyReport$$1(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport$$1(END_EVENT);
}
function spy$$1(listener) {
    if (false) {}
    else {
        globalState$$1.spyListeners.push(listener);
        return once$$1(function () {
            globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$$1( true && "@action fields are not reassignable");
}
function namedActionDecorator$$1(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail$$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction$$1(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction$$1(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator$$1(name).apply(this, arguments);
    };
}
function actionFieldDecorator$$1(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$$1(this, prop, action$$1(name, value));
            }
        });
    };
}
function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction$$1(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction$$1(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction$$1(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction$$1(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator$$1(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator$$1(arg2).apply(null, arguments);
    }
};
action$$1.bound = boundActionDecorator$$1;
function runInAction$$1(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction$$1(actionName, fn, this, undefined);
}
function isAction$$1(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction$$1(target, propertyName, fn) {
    addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun$$1(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId$$1();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction$$1;
    if (runSync) {
        // normal autorun
        reaction$$1 = new Reaction$$1(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction$$1 = new Reaction$$1(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction$$1.isDisposed)
                        reaction$$1.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction$$1);
    }
    reaction$$1.schedule();
    return reaction$$1.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction$$1(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId$$1();
    var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer$$1.structural
        : opts.equals || comparer$$1.default;
    var r = new Reaction$$1(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$$1( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure$$1(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
    if (options.isolateGlobalState === true) {
        isolateGlobalState$$1();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState$$1.enforceActions = ea;
        globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler$$1(reactionScheduler);
    }
}

function decorate$$1(thing, decorators) {
     true &&
        invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant$$1(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
    if (true) {
        invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions$$1(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
    initializeInstance$$1(target); // Fixes #1740
    asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions$$1(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}
function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
    if (true) {
        invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    startBatch$$1();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed$$1(descriptor.value))
                    fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator$$1
                    : defaultDecorator;
            if ( true && typeof decorator !== "function")
                fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch$$1();
    }
}

function getDependencyTree$$1(thing, property) {
    return nodeToDependencyTree(getAtom$$1(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree$$1(thing, property) {
    return nodeToObserverTree(getAtom$$1(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers$$1(node))
        result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow$$1(generator) {
    if (arguments.length !== 1)
        fail$$1( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop$$1, noop$$1);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
        target = getAdministration$$1(thing);
    }
    else if (isObservableObject$$1(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$$1( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration$$1(thing, propOrHandler);
    }
    else {
        return fail$$1( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$$1( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept$$1(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration$$1(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject$$1(value) === false)
            return false;
        if (!value[$mobx$$1].values.has(property))
            return false;
        var atom = getAtom$$1(value, property);
        return isComputedValue$$1(atom);
    }
    return isComputedValue$$1(value);
}
function isComputed$$1(value) {
    if (arguments.length > 1)
        return fail$$1( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed$$1(value);
}
function isComputedProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true &&
            "isComputed expected a property name as second argument");
    return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap$$1(value) || isObservableArray$$1(value)))
            return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject$$1(value)) {
            return value[$mobx$$1].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject$$1(value) ||
        !!value[$mobx$$1] ||
        isAtom$$1(value) ||
        isReaction$$1(value) ||
        isComputedValue$$1(value));
}
function isObservable$$1(value) {
    if (arguments.length !== 1)
        fail$$1( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return obj[$mobx$$1].getKeys();
    }
    if (isObservableMap$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$$1( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray$$1(obj)) {
        return obj.slice();
    }
    return fail$$1( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$$1( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set$$1(obj, key, value) {
    if (arguments.length === 2) {
        startBatch$$1();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch$$1();
        }
        return;
    }
    if (isObservableObject$$1(obj)) {
        var adm = obj[$mobx$$1];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap$$1(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch$$1();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch$$1();
    }
    else {
        return fail$$1( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        
        obj[$mobx$$1].remove(key);
    }
    else if (isObservableMap$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$$1( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration$$1(obj);
        return adm.has(key);
    }
    else if (isObservableMap$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray$$1(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$$1( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get$$1(obj, key) {
    if (!has$$1(obj, key))
        return undefined;
    if (isObservableObject$$1(obj)) {
        return obj[key];
    }
    else if (isObservableMap$$1(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray$$1(obj)) {
        return obj[key];
    }
    else {
        return fail$$1( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration$$1(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable$$1(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue$$1(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable$$1(source))
        keys$$1(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray$$1(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet$$1(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap$$1(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS$$1(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$$1( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode$$1.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState$$1.trackingDerivation;
        case 1:
            return getAtom$$1(args[0]);
        case 2:
            return getAtom$$1(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction$$1(action$$1, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch$$1();
    try {
        return action$$1.apply(thisArg);
    }
    finally {
        endBatch$$1();
    }
}

function when$$1(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx$$1].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId$$1();
    var effectAction = createAction$$1(opts.name + "-effect", effect);
    var disposer = autorun$$1(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail$$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx$$1];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (typeof name === "string")
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return target[name];
        var adm = getAdm(target);
        var observable$$1 = adm.values.get(name);
        if (observable$$1 instanceof Atom$$1) {
            var result = observable$$1.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (typeof name === "string")
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (typeof name !== "string")
            return false;
        set$$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (typeof name !== "string")
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$$1("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject$$1(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx$$1].proxy = proxy;
    return proxy;
}

function hasInterceptors$$1(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor$$1(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once$$1(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange$$1(interceptable, change) {
    var prevU = untrackedStart$$1();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd$$1(prevU);
    }
}

function hasListeners$$1(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener$$1(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once$$1(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners$$1(listenable, change) {
    var prevU = untrackedStart$$1();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx$$1)
            return target[$mobx$$1];
        if (name === "length")
            return target[$mobx$$1].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx$$1].setArrayLength(value);
            return true;
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
            return true;
        }
        if (!isNaN(name)) {
            arrayExtensions.set.call(target, parseInt(name), value);
            return true;
        }
        return false;
    },
    preventExtensions: function (target) {
        fail$$1("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray$$1(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId$$1(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart$$1(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd$$1(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
        if (this.dehancer !== undefined && values$$1.length > 0)
            return values$$1.map(this.dehancer);
        return values$$1;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener$$1(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY$$1;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY$$1;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx$$1].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx$$1];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx$$1];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx$$1];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx$$1];
        var values$$1 = adm.values;
        if (index < values$$1.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed$$1(adm.atom);
            var oldValue = values$$1[index];
            if (hasInterceptors$$1(adm)) {
                var change = interceptChange$$1(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values$$1[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values$$1.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx$$1];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray$$1(thing) {
    return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap$$1 = /** @class */ (function () {
    function ObservableMap$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableMap@" + getNextId$$1(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom$$1(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap$$1.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap$$1.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap$$1.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap$$1.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            transaction$$1(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data.get(key);
                observable$$1.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + stringifyKey(key) + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap$$1.prototype._updateValue = function (key, newValue) {
        var observable$$1 = this._data.get(key);
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableMap$$1.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._keysAtom);
        transaction$$1(function () {
            var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable$$1);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
    };
    ObservableMap$$1.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap$$1.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap$$1.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys$$1.length
                    ? { value: self.get(keys$$1[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap$$1.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys$$1.length) {
                    var key = keys$$1[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap$$1.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (isPlainObject$$1(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map$$1(other)) {
                if (other.constructor !== Map)
                    fail$$1("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail$$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap$$1.prototype.replace = function (values$$1) {
        var _this = this;
        transaction$$1(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys$$1(values$$1);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values$$1);
        });
        return this;
    };
    Object.defineProperty(ObservableMap$$1.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap$$1.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap$$1.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap$$1.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap$$1.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener$$1(this, listener);
    };
    ObservableMap$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    return ObservableMap$$1;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
/* 'var' fixes small-build issue */
var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet$$1 = /** @class */ (function () {
    function ObservableSet$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableSet@" + getNextId$$1(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom$$1(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet$$1.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet$$1.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet$$1.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._atom);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction$$1(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(change);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
        return this;
    };
    ObservableSet$$1.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name }));
            transaction$$1(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableSet$$1.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet$$1.prototype.entries = function () {
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        var values$$1 = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values$$1.length
                    ? { value: [keys$$1[index], values$$1[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.keys = function () {
        return this.values();
    };
    ObservableSet$$1.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set$$1(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail$$1("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet$$1.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener$$1(this, listener);
    };
    ObservableSet$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableSet$$1.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet$$1.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet$$1.prototype[(_a$1 = $mobx$$1, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet$$1;
}());
var isObservableSet$$1 = createInstanceofPredicate$$1("ObservableSet", ObservableSet$$1);

var ObservableObjectAdministration$$1 = /** @class */ (function () {
    function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
        if (values$$1 === void 0) { values$$1 = new Map(); }
        this.target = target;
        this.values = values$$1;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom$$1(name + ".keys");
    }
    ObservableObjectAdministration$$1.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable$$1 = this.values.get(key);
        if (observable$$1 instanceof ComputedValue$$1) {
            observable$$1.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable$$1.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState$$1.UNCHANGED) {
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue$$1(exists, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable$$1(target, propName);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
        this.values.set(propName, observable$$1);
        newValue = observable$$1.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + propName;
        this.values.set(propName, new ComputedValue$$1(options));
        if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
    };
    ObservableObjectAdministration$$1.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch$$1();
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd$$1();
        }
        finally {
            endBatch$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener$$1(this, callback);
    };
    ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners$$1(this);
        var notifySpy = isSpyEnabled$$1();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd$$1();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration$$1.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue$$1)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration$$1;
}());
function asObservableObject$$1(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer$$1; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx$$1))
        return target[$mobx$$1];
     true &&
        invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject$$1(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
    if (!name)
        name = "ObservableObject@" + getNextId$$1();
    var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
    addHiddenProp$$1(target, $mobx$$1, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig$$1(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx$$1].read(propName);
            },
            set: function (v) {
                this[$mobx$$1].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx$$1];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance$$1(owner);
        return owner[$mobx$$1];
    }
    return adm;
}
function generateComputedPropConfig$$1(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: false,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);
function isObservableObject$$1(thing) {
    if (isObject$$1(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        return isObservableObjectAdministration(thing[$mobx$$1]);
    }
    return false;
}

function getAtom$$1(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray$$1(thing)) {
            if (property !== undefined)
                fail$$1( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx$$1].atom;
        }
        if (isObservableSet$$1(thing)) {
            return thing[$mobx$$1];
        }
        if (isObservableMap$$1(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        if (property && !thing[$mobx$$1])
            thing[property]; // See #1072
        if (isObservableObject$$1(thing)) {
            if (!property)
                return fail$$1( true && "please specify a property");
            var observable$$1 = thing[$mobx$$1].values.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction$$1(thing[$mobx$$1])) {
            // disposer function
            return thing[$mobx$$1];
        }
    }
    return fail$$1( true && "Cannot obtain atom from " + thing);
}
function getAdministration$$1(thing, property) {
    if (!thing)
        fail$$1("Expecting some object");
    if (property !== undefined)
        return getAdministration$$1(getAtom$$1(thing, property));
    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing))
        return thing;
    if (isObservableMap$$1(thing) || isObservableSet$$1(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    if (thing[$mobx$$1])
        return thing[$mobx$$1];
    fail$$1( true && "Cannot obtain administration from " + thing);
}
function getDebugName$$1(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom$$1(thing, property);
    else if (isObservableObject$$1(thing) || isObservableMap$$1(thing) || isObservableSet$$1(thing))
        named = getAdministration$$1(thing);
    else
        named = getAtom$$1(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual$$1(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a);
        var key = void 0;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray$$1(a))
        return a.slice();
    if (isES6Map$$1(a) || isObservableMap$$1(a))
        return Array.from(a.entries());
    if (isES6Set$$1(a) || isObservableSet$$1(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = self;
    return iterator;
}
function self() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        console.warn(
        // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
        "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy$$1,
        extras: {
            getDebugName: getDebugName$$1
        },
        $mobx: $mobx$$1
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/decorator.js":
/*!**************************!*\
  !*** ./src/decorator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function Animal() {
// }
// Object.defineProperties(Animal.prototype, {
//     name: {
//         value() {
//             return 'Animal~'
//         }
//     },
//     say: {
//         value() {
//             return `I'm ${this.name()}`
//         }
//     }
// })
// function Dog() {
// }
// Dog.prototype = Object.create(Animal.prototype, {
//     constructor: {
//         value: Dog,
//         enumerable: false
//     },
//     name: {
//         value() {
//             return 'Dog~'
//         }
//     }
// })
// console.log(new Dog().say())
// console.log(Dog.prototype.constructor)
var Animal =
/*#__PURE__*/
function () {
  function Animal() {
    _classCallCheck(this, Animal);
  }

  _createClass(Animal, [{
    key: "name",
    value: function name() {
      return 'Animal~';
    }
  }, {
    key: "say",
    value: function say() {
      return "I'm ".concat(this.name());
    }
  }]);

  return Animal;
}();

var Dog =
/*#__PURE__*/
function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.food = 'bone';
    return _this;
  }

  _createClass(Dog, [{
    key: "name",
    value: function name() {
      return 'Dog~';
    }
  }]);

  return Dog;
}(Animal); // console.log(new Dog() instanceof Animal)

/**
 * @param {class} target 被修饰的类
 */


function log(target) {
  // 类修饰属性
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop() {
    var key = _Object$keys[_i];

    if (key === 'constructor') {
      return "continue";
    }

    var func = desc[key].value;

    if (typeof func === 'function') {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log('befor called::', key);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var res = func.apply(this, args);
          console.log('after called::', key);
          return res;
        }
      });
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(desc); _i < _Object$keys.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
}
/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类属性成员名称
 * @param {object} descriptor 该类属性成员描述符
 */


function readonly(target, key, descriptor) {
  // console.log(target, key, descriptor)
  descriptor.writable = false;
}
/**
 *
 * @param {class} target 类实例对象
 * @param {string} key 类方法成员名称
 * @param {object} descriptor 该类方法成员描述符
 */


function validate(target, key, descriptor) {
  var func = descriptor.value;

  descriptor.value = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
      var _num = _args[_i2];

      if (typeof _num !== 'number') {
        throw new Error("".concat(_num, " is not a number!"));
      }
    }

    return func.apply(this, args);
  };
} // 类装饰器 transform-decorators-legacy


var Numberic = log(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Numberic, [{
    key: "add",
    // 类方法成员装饰器
    value: function add() {
      for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        nums[_key4] = arguments[_key4];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return Numberic;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.1415926;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "add", [validate], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class;

var num = new Numberic(); // num.add(1, 2, 3)
// num.add('1', '2')

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


var Store = (_dec = mobx__WEBPACK_IMPORTED_MODULE_0__["action"].bound, (_class = (_temp =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "array", _descriptor, this);

    _initializerDefineProperty(this, "obj", _descriptor2, this);

    _initializerDefineProperty(this, "map", _descriptor3, this);

    _initializerDefineProperty(this, "num", _descriptor4, this);

    _initializerDefineProperty(this, "str", _descriptor5, this);

    _initializerDefineProperty(this, "bool", _descriptor6, this);
  }

  _createClass(Store, [{
    key: "bar",
    // 对可观察数据的修改，只触发一次副作用
    value: function bar() {
      this.str = 'Zoro';
      this.array = [1, 2];
    } // 绑定上下文，可以将方法作为参数传递

  }, {
    key: "boundBar",
    value: function boundBar() {
      this.str = 'Zoro';
      this.array = [1, 0, 0];
    }
  }, {
    key: "mixed",
    // 计算属性
    get: function get() {
      return "".concat(this.str, "-").concat(this.num);
    }
  }]);

  return Store;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "array", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [1, 2, 3, 4];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "obj", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      a: 1
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "map", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Map();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "num", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 123;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "str", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'abc';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "bool", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class.prototype, "mixed", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "mixed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bar", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "bar"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "boundBar", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "boundBar"), _class.prototype)), _class)); // computed

var store = new Store();
var foo = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
  return "computed: ".concat(store.num, "-").concat(store.str);
}); // 坚挺数据变化
// foo.observe(change => console.log(change))

store.str = 'hi';
store.num = 100;
console.log(foo, foo.get()); // autorun 对计算属性或可观察数据，发生改变时作出响应
// autorun(() => console.log('autorun:', store.mixed))
// store.str = 'hi～'
// store.num = 200
// when 参数为两个函数, 第一个参数的返回值true, 第二个函数执行

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["when"])(function () {
  return !!store.bool;
}, function () {
  return "when: It's true!";
});
store.bool = false; // reaction 参数为两个函数, 第一个参数的返回值, 作为第二个函数执行参数

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () {
  return [store.array, store.str];
}, function (arr) {
  return console.log('reaction:', arr.join('::'));
}); // store.array = [1, 2, 3]
// store.str = 'zoro'

store.bar();
var boundBar = store.boundBar;
boundBar(); // 第一个自定义字符串参数可选，调用立即执行antion

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])('modify', function () {
  store.str = 'Zoroo';
  store.array = [1, 1, 1];
});

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./src/index.js ./src/decorator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gaosikang/Desktop/work/react/react-mobx/src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! /Users/gaosikang/Desktop/work/react/react-mobx/src/decorator.js */"./src/decorator.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBbmltYWwiLCJuYW1lIiwiRG9nIiwiZm9vZCIsImxvZyIsInRhcmdldCIsImRlc2MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicHJvdG90eXBlIiwia2V5IiwiZnVuYyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25zb2xlIiwiYXJncyIsInJlcyIsImFwcGx5Iiwia2V5cyIsInJlYWRvbmx5IiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwidmFsaWRhdGUiLCJudW0iLCJFcnJvciIsIk51bWJlcmljIiwibnVtcyIsInJlZHVjZSIsInAiLCJuIiwiU3RvcmUiLCJhY3Rpb24iLCJib3VuZCIsInN0ciIsImFycmF5Iiwib2JzZXJ2YWJsZSIsImEiLCJNYXAiLCJjb21wdXRlZCIsInN0b3JlIiwiZm9vIiwiZ2V0Iiwid2hlbiIsImJvb2wiLCJyZWFjdGlvbiIsImFyciIsImpvaW4iLCJiYXIiLCJib3VuZEJhciIsInJ1bkluQWN0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDL0UscUJBQXFCLHVEQUF1RDs7QUFFNUU7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0MsUUFBUSxFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsbUJBQW1CLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsbUJBQW1CLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw2Q0FBNkMsbUNBQW1DO0FBQ2hGLCtDQUErQyxxQ0FBcUM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBcUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQSxtREFBbUQsYUFBYTtBQUNoRTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQSxtREFBbUQsMEJBQTBCO0FBQzdFO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0QsbUJBQW1CLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscURBQXFELGFBQW9CO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDBEQUEwRCxFQUFFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsd0NBQXdDO0FBQ3hDLENBQUM7QUFDRCxvREFBb0QsaUNBQWlDO0FBQ3JGO0FBQ0EsMERBQTBELGFBQWEsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGFBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFvQjtBQUNqRCx5QkFBeUIsdUNBQXVDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUE0QztBQUMxRSxtQ0FBbUMsa0JBQWtCO0FBQ3JELGdDQUFnQyw4QkFBOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQW9CO0FBQ2xFO0FBQ0EsMEJBQTBCLCtEQUErRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2QkFBNkIsYUFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxtQkFBbUIsRUFBRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxtQkFBbUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxLQUFxQztBQUNqRCxZQUFZLEVBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSwyQkFBMkI7QUFDaks7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCO0FBQ2xELFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQSw0REFBNEQsU0FBUyxrQkFBa0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxRQUFRLGFBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRWl1RDs7Ozs7Ozs7Ozs7OztBQ3B5SWp1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtJQUVNQSxNOzs7Ozs7Ozs7MkJBQ0s7QUFDSCxhQUFPLFNBQVA7QUFDSDs7OzBCQUNLO0FBQ0YsMkJBQWMsS0FBS0MsSUFBTCxFQUFkO0FBQ0g7Ozs7OztJQUdDQyxHOzs7Ozs7Ozs7Ozs7Ozs7OztVQUVGQyxJLEdBQU8sTTs7Ozs7OzJCQUVBO0FBQ0gsYUFBTyxNQUFQO0FBQ0g7Ozs7RUFOYUgsTSxHQVFsQjs7QUFFQTs7Ozs7QUFHQSxTQUFTSSxHQUFULENBQWFDLE1BQWIsRUFBcUI7QUFDakI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MseUJBQVAsQ0FBaUNILE1BQU0sQ0FBQ0ksU0FBeEMsQ0FBYjs7QUFGaUI7QUFHWixRQUFJQyxHQUFHLG1CQUFQOztBQUNELFFBQUlBLEdBQUcsS0FBSyxhQUFaLEVBQTJCO0FBQ3ZCO0FBQ0g7O0FBQ0QsUUFBTUMsSUFBSSxHQUFHTCxJQUFJLENBQUNJLEdBQUQsQ0FBSixDQUFVRSxLQUF2Qjs7QUFDQSxRQUFJLE9BQU9ELElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDNUJKLFlBQU0sQ0FBQ00sY0FBUCxDQUFzQlIsTUFBTSxDQUFDSSxTQUE3QixFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDekNFLGFBRHlDLG1CQUMxQjtBQUNYRSxpQkFBTyxDQUFDVixHQUFSLENBQVksZ0JBQVosRUFBOEJNLEdBQTlCOztBQURXLDZDQUFOSyxJQUFNO0FBQU5BLGdCQUFNO0FBQUE7O0FBRVgsY0FBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBVyxJQUFYLEVBQWlCRixJQUFqQixDQUFaO0FBQ0FELGlCQUFPLENBQUNWLEdBQVIsQ0FBWSxnQkFBWixFQUE4Qk0sR0FBOUI7QUFDQSxpQkFBT00sR0FBUDtBQUNIO0FBTndDLE9BQTdDO0FBUUg7QUFqQlk7O0FBR2pCLGtDQUFnQlQsTUFBTSxDQUFDVyxJQUFQLENBQVlaLElBQVosQ0FBaEIsa0NBQW1DO0FBQUE7O0FBQUEsNkJBRTNCO0FBYVA7QUFDSjtBQUVEOzs7Ozs7OztBQU1BLFNBQVNhLFFBQVQsQ0FBa0JkLE1BQWxCLEVBQTBCSyxHQUExQixFQUErQlUsVUFBL0IsRUFBMkM7QUFDdkM7QUFDQUEsWUFBVSxDQUFDQyxRQUFYLEdBQXNCLEtBQXRCO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTQyxRQUFULENBQWtCakIsTUFBbEIsRUFBMEJLLEdBQTFCLEVBQStCVSxVQUEvQixFQUEyQztBQUN2QyxNQUFNVCxJQUFJLEdBQUdTLFVBQVUsQ0FBQ1IsS0FBeEI7O0FBQ0FRLFlBQVUsQ0FBQ1IsS0FBWCxHQUFtQixZQUFrQjtBQUFBLHVDQUFORyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDakMsOEJBQWdCQSxJQUFoQiw2QkFBc0I7QUFBakIsVUFBSVEsSUFBRyxhQUFQOztBQUNELFVBQUksT0FBT0EsSUFBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSUMsS0FBSixXQUFhRCxJQUFiLHVCQUFOO0FBQ0g7QUFDSjs7QUFDRCxXQUFPWixJQUFJLENBQUNNLEtBQUwsQ0FBVyxJQUFYLEVBQWlCRixJQUFqQixDQUFQO0FBQ0gsR0FQRDtBQVFILEMsQ0FFRDs7O0lBRU1VLFEsR0FETHJCLEc7Ozs7Ozs7Ozs7O0FBS0c7MEJBRWE7QUFBQSx5Q0FBTnNCLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNULGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLE9BQVosRUFBNkIsQ0FBN0IsQ0FBUDtBQUNIOzs7O2dGQU5BVixROzs7OztXQUFjLFM7O3lEQUdkRyxROztBQU1MLElBQU1DLEdBQUcsR0FBRyxJQUFJRSxRQUFKLEVBQVosQyxDQUNBO0FBQ0Esb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7SUFFTUssSyxXQXFCREMsMkNBQU0sQ0FBQ0MsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUFI7MEJBQ2M7QUFDVixXQUFLQyxHQUFMLEdBQVcsTUFBWDtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWI7QUFDSCxLLENBRUQ7Ozs7K0JBQ3lCO0FBQ3JCLFdBQUtELEdBQUwsR0FBVyxNQUFYO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWI7QUFDSDs7O0FBZkQ7d0JBQ3NCO0FBQ2xCLHVCQUFVLEtBQUtELEdBQWYsY0FBc0IsS0FBS1YsR0FBM0I7QUFDSDs7OztrRkFYQVksK0M7Ozs7O1dBQW1CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDOzt1RUFDbkJBLCtDOzs7OztXQUFpQjtBQUFDQyxPQUFDLEVBQUU7QUFBSixLOzt1RUFDakJELCtDOzs7OztXQUFpQixJQUFJRSxHQUFKLEU7O3VFQUVqQkYsK0M7Ozs7O1dBQWlCLEc7O3VFQUNqQkEsK0M7Ozs7O1dBQWlCLEs7O3dFQUNqQkEsK0M7Ozs7O1dBQWtCLEk7OzBEQUdsQkcsNkMsc0lBS0FQLDJDLDZPQVlMOztBQUNBLElBQU1RLEtBQUssR0FBRyxJQUFJVCxLQUFKLEVBQWQ7QUFDQSxJQUFNVSxHQUFHLEdBQUdGLHFEQUFRLENBQUM7QUFBQSw2QkFBbUJDLEtBQUssQ0FBQ2hCLEdBQXpCLGNBQWdDZ0IsS0FBSyxDQUFDTixHQUF0QztBQUFBLENBQUQsQ0FBcEIsQyxDQUNBO0FBQ0E7O0FBQ0FNLEtBQUssQ0FBQ04sR0FBTixHQUFZLElBQVo7QUFDQU0sS0FBSyxDQUFDaEIsR0FBTixHQUFZLEdBQVo7QUFDQVQsT0FBTyxDQUFDVixHQUFSLENBQVlvQyxHQUFaLEVBQWlCQSxHQUFHLENBQUNDLEdBQUosRUFBakIsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLGlEQUFJLENBQUM7QUFBQSxTQUFNLENBQUMsQ0FBQ0gsS0FBSyxDQUFDSSxJQUFkO0FBQUEsQ0FBRCxFQUFxQjtBQUFBO0FBQUEsQ0FBckIsQ0FBSjtBQUNBSixLQUFLLENBQUNJLElBQU4sR0FBYSxLQUFiLEMsQ0FFQTs7QUFDQUMscURBQVEsQ0FBQztBQUFBLFNBQU0sQ0FBQ0wsS0FBSyxDQUFDTCxLQUFQLEVBQWNLLEtBQUssQ0FBQ04sR0FBcEIsQ0FBTjtBQUFBLENBQUQsRUFBaUMsVUFBQVksR0FBRztBQUFBLFNBQUkvQixPQUFPLENBQUNWLEdBQVIsQ0FBWSxXQUFaLEVBQXlCeUMsR0FBRyxDQUFDQyxJQUFKLENBQVMsSUFBVCxDQUF6QixDQUFKO0FBQUEsQ0FBcEMsQ0FBUixDLENBQ0E7QUFDQTs7QUFDQVAsS0FBSyxDQUFDUSxHQUFOO0FBRUEsSUFBTUMsUUFBUSxHQUFHVCxLQUFLLENBQUNTLFFBQXZCO0FBQ0FBLFFBQVEsRyxDQUVSOztBQUNBQyx3REFBVyxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3hCVixPQUFLLENBQUNOLEdBQU4sR0FBWSxPQUFaO0FBQ0FNLE9BQUssQ0FBQ0wsS0FBTixHQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWQ7QUFDSCxDQUhVLENBQVgsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqIE1vYlggLSAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMTggLSBNSVQgTGljZW5zZWQgKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XG5cbnZhciBPQkZVU0NBVEVEX0VSUk9SJCQxID0gXCJBbiBpbnZhcmlhbnQgZmFpbGVkLCBob3dldmVyIHRoZSBlcnJvciBpcyBvYmZ1c2NhdGVkIGJlY2F1c2UgdGhpcyBpcyBhbiBwcm9kdWN0aW9uIGJ1aWxkLlwiO1xudmFyIEVNUFRZX0FSUkFZJCQxID0gW107XG5PYmplY3QuZnJlZXplKEVNUFRZX0FSUkFZJCQxKTtcbnZhciBFTVBUWV9PQkpFQ1QkJDEgPSB7fTtcbk9iamVjdC5mcmVlemUoRU1QVFlfT0JKRUNUJCQxKTtcbmZ1bmN0aW9uIGdldE5leHRJZCQkMSgpIHtcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZSQkMS5tb2J4R3VpZDtcbn1cbmZ1bmN0aW9uIGZhaWwkJDEobWVzc2FnZSkge1xuICAgIGludmFyaWFudCQkMShmYWxzZSwgbWVzc2FnZSk7XG4gICAgdGhyb3cgXCJYXCI7IC8vIHVucmVhY2hhYmxlXG59XG5mdW5jdGlvbiBpbnZhcmlhbnQkJDEoY2hlY2ssIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNoZWNrKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gXCIgKyAobWVzc2FnZSB8fCBPQkZVU0NBVEVEX0VSUk9SJCQxKSk7XG59XG4vKipcbiAqIFByaW50cyBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UsIGJ1dCBvbmx5IG9uZSB0aW1lLlxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZGVwcmVjYXRlZCBtZXNzYWdlIHdhcyBhbHJlYWR5IHByaW50ZWQgYmVmb3JlXG4gKi9cbnZhciBkZXByZWNhdGVkTWVzc2FnZXMgPSBbXTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZWQkJDEobXNnLCB0aGluZykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIGRlcHJlY2F0ZWQkJDEoXCInXCIgKyBtc2cgKyBcIicsIHVzZSAnXCIgKyB0aGluZyArIFwiJyBpbnN0ZWFkLlwiKTtcbiAgICB9XG4gICAgaWYgKGRlcHJlY2F0ZWRNZXNzYWdlcy5pbmRleE9mKG1zZykgIT09IC0xKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVwcmVjYXRlZE1lc3NhZ2VzLnB1c2gobXNnKTtcbiAgICBjb25zb2xlLmVycm9yKFwiW21vYnhdIERlcHJlY2F0ZWQ6IFwiICsgbXNnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSQkMShmdW5jKSB7XG4gICAgdmFyIGludm9rZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW52b2tlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW52b2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbnZhciBub29wJCQxID0gZnVuY3Rpb24gKCkgeyB9O1xuZnVuY3Rpb24gdW5pcXVlJCQxKGxpc3QpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpXG4gICAgICAgICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gaXNPYmplY3QkJDEodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufVxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCQkMSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIHJldHVybiBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYWRkSGlkZGVuUHJvcCQkMShvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEhpZGRlbkZpbmFsUHJvcCQkMShvYmplY3QsIHByb3BOYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc1Byb3BlcnR5Q29uZmlndXJhYmxlJCQxKG9iamVjdCwgcHJvcCkge1xuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgIHJldHVybiAhZGVzY3JpcHRvciB8fCAoZGVzY3JpcHRvci5jb25maWd1cmFibGUgIT09IGZhbHNlICYmIGRlc2NyaXB0b3Iud3JpdGFibGUgIT09IGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlJCQxKG9iamVjdCwgcHJvcCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzUHJvcGVydHlDb25maWd1cmFibGUkJDEob2JqZWN0LCBwcm9wKSlcbiAgICAgICAgZmFpbCQkMShcIkNhbm5vdCBtYWtlIHByb3BlcnR5ICdcIiArIHByb3AudG9TdHJpbmcoKSArIFwiJyBvYnNlcnZhYmxlLCBpdCBpcyBub3QgY29uZmlndXJhYmxlIGFuZCB3cml0YWJsZSBpbiB0aGUgdGFyZ2V0IG9iamVjdFwiKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEobmFtZSwgY2xhenopIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcbiAgICBjbGF6ei5wcm90b3R5cGVbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0JCQxKHgpICYmIHhbcHJvcE5hbWVdID09PSB0cnVlO1xuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXksIGRpc3JlZ2FyZGluZyBvYnNlcnZhYmlsaXR5LlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSQkMSh4KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgfHwgaXNPYnNlcnZhYmxlQXJyYXkkJDEoeCk7XG59XG5mdW5jdGlvbiBpc0VTNk1hcCQkMSh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzRVM2U2V0JCQxKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgU2V0O1xufVxuZnVuY3Rpb24gZ2V0TWFwTGlrZUtleXMkJDEobWFwKSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QkJDEobWFwKSlcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwKSlcbiAgICAgICAgcmV0dXJuIG1hcC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDEpLCBrZXkgPSBfYlswXTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuICAgIGlmIChpc0VTNk1hcCQkMShtYXApIHx8IGlzT2JzZXJ2YWJsZU1hcCQkMShtYXApKVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAua2V5cygpKTtcbiAgICByZXR1cm4gZmFpbCQkMShcIkNhbm5vdCBnZXQga2V5cyBmcm9tICdcIiArIG1hcCArIFwiJ1wiKTtcbn1cbmZ1bmN0aW9uIHRvUHJpbWl0aXZlJCQxKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xufVxuXG52YXIgJG1vYngkJDEgPSBTeW1ib2woXCJtb2J4IGFkbWluaXN0cmF0aW9uXCIpO1xudmFyIEF0b20kJDEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGF0b20uIEZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgaXQgaXMgcmVjb21tZW5kZWQgdG8gZ2l2ZSBpdCBhIG5hbWUuXG4gICAgICogVGhlIG9uQmVjb21lT2JzZXJ2ZWQgYW5kIG9uQmVjb21lVW5vYnNlcnZlZCBjYWxsYmFja3MgY2FuIGJlIHVzZWQgZm9yIHJlc291cmNlIG1hbmFnZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQXRvbSQkMShuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiQXRvbUBcIiArIGdldE5leHRJZCQkMSgpOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlOyAvLyBmb3IgZWZmZWN0aXZlIHVub2JzZXJ2aW5nLiBCYXNlQXRvbSBoYXMgdHJ1ZSwgZm9yIGV4dHJhIG9wdGltaXphdGlvbiwgc28gaXRzIG9uQmVjb21lVW5vYnNlcnZlZCBuZXZlciBnZXRzIGNhbGxlZCwgYmVjYXVzZSBpdCdzIG5vdCBuZWVkZWRcbiAgICAgICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xuICAgIH1cbiAgICBBdG9tJCQxLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBdG9tJCQxLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gbm90aWZ5IG1vYnggdGhhdCB5b3VyIGF0b20gaGFzIGJlZW4gdXNlZCBzb21laG93LlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBjdXJyZW50bHkgYSByZWFjdGl2ZSBjb250ZXh0LlxuICAgICAqL1xuICAgIEF0b20kJDEucHJvdG90eXBlLnJlcG9ydE9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVwb3J0T2JzZXJ2ZWQkJDEodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgX2FmdGVyXyB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZCB0byBzaWduYWwgbW9ieCB0aGF0IGFsbCBpdHMgb2JzZXJ2ZXJzIHNob3VsZCBpbnZhbGlkYXRlLlxuICAgICAqL1xuICAgIEF0b20kJDEucHJvdG90eXBlLnJlcG9ydENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgcHJvcGFnYXRlQ2hhbmdlZCQkMSh0aGlzKTtcbiAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICB9O1xuICAgIEF0b20kJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEF0b20kJDE7XG59KCkpO1xudmFyIGlzQXRvbSQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJBdG9tXCIsIEF0b20kJDEpO1xuZnVuY3Rpb24gY3JlYXRlQXRvbSQkMShuYW1lLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlciwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcikge1xuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcCQkMTsgfVxuICAgIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9IG5vb3AkJDE7IH1cbiAgICB2YXIgYXRvbSA9IG5ldyBBdG9tJCQxKG5hbWUpO1xuICAgIC8vIGRlZmF1bHQgYG5vb3BgIGxpc3RlbmVyIHdpbGwgbm90IGluaXRpYWxpemUgdGhlIGhvb2sgU2V0XG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wJCQxKSB7XG4gICAgICAgIG9uQmVjb21lT2JzZXJ2ZWQkJDEoYXRvbSwgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCQkMSkge1xuICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQkJDEoYXRvbSwgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBhdG9tO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eUNvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cbmZ1bmN0aW9uIHN0cnVjdHVyYWxDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbCQkMShhLCBiKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn1cbnZhciBjb21wYXJlciQkMSA9IHtcbiAgICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgICBzdHJ1Y3R1cmFsOiBzdHJ1Y3R1cmFsQ29tcGFyZXIsXG4gICAgZGVmYXVsdDogZGVmYXVsdENvbXBhcmVyXG59O1xuXG52YXIgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDEgPSBTeW1ib2woXCJtb2J4IGRpZCBydW4gbGF6eSBpbml0aWFsaXplcnNcIik7XG52YXIgbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxID0gU3ltYm9sKFwibW9ieCBwZW5kaW5nIGRlY29yYXRvcnNcIik7XG52YXIgZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xudmFyIG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5SW5pdGlhbGl6ZXJEZXNjcmlwdG9yKHByb3AsIGVudW1lcmFibGUpIHtcbiAgICB2YXIgY2FjaGUgPSBlbnVtZXJhYmxlID8gZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA6IG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGU7XG4gICAgcmV0dXJuIChjYWNoZVtwcm9wXSB8fFxuICAgICAgICAoY2FjaGVbcHJvcF0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUluc3RhbmNlJCQxKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXRbbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDFdID09PSB0cnVlKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGRlY29yYXRvcnMgPSB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxXTtcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICBhZGRIaWRkZW5Qcm9wJCQxKHRhcmdldCwgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wkJDEsIHRydWUpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVjb3JhdG9ycykge1xuICAgICAgICAgICAgdmFyIGQgPSBkZWNvcmF0b3JzW2tleV07XG4gICAgICAgICAgICBkLnByb3BlcnR5Q3JlYXRvcih0YXJnZXQsIGQucHJvcCwgZC5kZXNjcmlwdG9yLCBkLmRlY29yYXRvclRhcmdldCwgZC5kZWNvcmF0b3JBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvcERlY29yYXRvciQkMShwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUsIHByb3BlcnR5Q3JlYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3JGYWN0b3J5KCkge1xuICAgICAgICB2YXIgZGVjb3JhdG9yQXJndW1lbnRzO1xuICAgICAgICB2YXIgZGVjb3JhdG9yID0gZnVuY3Rpb24gZGVjb3JhdGUkJDEodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCBhcHBseUltbWVkaWF0ZWx5XG4gICAgICAgIC8vIFRoaXMgaXMgYSBzcGVjaWFsIHBhcmFtZXRlciB0byBzaWduYWwgdGhlIGRpcmVjdCBhcHBsaWNhdGlvbiBvZiBhIGRlY29yYXRvciwgYWxsb3cgZXh0ZW5kT2JzZXJ2YWJsZSB0byBza2lwIHRoZSBlbnRpcmUgdHlwZSBkZWNvcmF0aW9uIHBhcnQsXG4gICAgICAgIC8vIGFzIHRoZSBpbnN0YW5jZSB0byBhcHBseSB0aGUgZGVjb3JhdG9yIHRvIGVxdWFscyB0aGUgdGFyZ2V0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKGFwcGx5SW1tZWRpYXRlbHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCB0YXJnZXQsIGRlY29yYXRvckFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFxdWFja3NMaWtlQURlY29yYXRvciQkMShhcmd1bWVudHMpKVxuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgbW9ieFBlbmRpbmdEZWNvcmF0b3JzJCQxKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmhlcml0ZWREZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9ycyQkMV07XG4gICAgICAgICAgICAgICAgYWRkSGlkZGVuUHJvcCQkMSh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycyQkMSwgX19hc3NpZ24oe30sIGluaGVyaXRlZERlY29yYXRvcnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnMkJDFdW3Byb3BdID0ge1xuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yOiBwcm9wZXJ0eUNyZWF0b3IsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcixcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JUYXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHM6IGRlY29yYXRvckFyZ3VtZW50c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IkJDEoYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQGRlY29yYXRvclxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gRU1QVFlfQVJSQVkkJDE7XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAZGVjb3JhdG9yKGFyZ3MpXG4gICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvciQkMShhcmdzKSB7XG4gICAgcmV0dXJuICgoKGFyZ3MubGVuZ3RoID09PSAyIHx8IGFyZ3MubGVuZ3RoID09PSAzKSAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gXCJzdHJpbmdcIikgfHxcbiAgICAgICAgKGFyZ3MubGVuZ3RoID09PSA0ICYmIGFyZ3NbM10gPT09IHRydWUpKTtcbn1cblxuZnVuY3Rpb24gZGVlcEVuaGFuY2VyJCQxKHYsIF8sIG5hbWUpIHtcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlJCQxKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5hcnJheSh2LCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm9iamVjdCh2LCB1bmRlZmluZWQsIHsgbmFtZTogbmFtZSB9KTtcbiAgICBpZiAoaXNFUzZNYXAkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm1hcCh2LCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgaWYgKGlzRVM2U2V0JCQxKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5zZXQodiwgeyBuYW1lOiBuYW1lIH0pO1xuICAgIHJldHVybiB2O1xufVxuZnVuY3Rpb24gc2hhbGxvd0VuaGFuY2VyJCQxKHYsIF8sIG5hbWUpIHtcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpXG4gICAgICAgIHJldHVybiB2O1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodikgfHwgaXNPYnNlcnZhYmxlQXJyYXkkJDEodikgfHwgaXNPYnNlcnZhYmxlTWFwJCQxKHYpIHx8IGlzT2JzZXJ2YWJsZVNldCQkMSh2KSlcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLmFycmF5KHYsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLm9iamVjdCh2LCB1bmRlZmluZWQsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XG4gICAgaWYgKGlzRVM2TWFwJCQxKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5tYXAodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcbiAgICBpZiAoaXNFUzZTZXQkJDEodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlJCQxLnNldCh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICBcIlRoZSBzaGFsbG93IG1vZGlmaWVyIC8gZGVjb3JhdG9yIGNhbiBvbmx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBhcnJheXMsIG9iamVjdHMsIG1hcHMgYW5kIHNldHNcIik7XG59XG5mdW5jdGlvbiByZWZlcmVuY2VFbmhhbmNlciQkMShuZXdWYWx1ZSkge1xuICAgIC8vIG5ldmVyIHR1cm4gaW50byBhbiBvYnNlcnZhYmxlXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuZnVuY3Rpb24gcmVmU3RydWN0RW5oYW5jZXIkJDEodiwgb2xkVmFsdWUsIG5hbWUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzT2JzZXJ2YWJsZSQkMSh2KSlcbiAgICAgICAgdGhyb3cgXCJvYnNlcnZhYmxlLnN0cnVjdCBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBvYnNlcnZhYmxlIHZhbHVlc1wiO1xuICAgIGlmIChkZWVwRXF1YWwkJDEodiwgb2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyJCQxKGVuaGFuY2VyKSB7XG4gICAgaW52YXJpYW50JCQxKGVuaGFuY2VyKTtcbiAgICB2YXIgZGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvciQkMSh0cnVlLCBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIF9kZWNvcmF0b3JUYXJnZXQsIGRlY29yYXRvckFyZ3MpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgaW52YXJpYW50JCQxKCFkZXNjcmlwdG9yIHx8ICFkZXNjcmlwdG9yLmdldCwgXCJAb2JzZXJ2YWJsZSBjYW5ub3QgYmUgdXNlZCBvbiBnZXR0ZXIgKHByb3BlcnR5IFxcXCJcIiArIHByb3BlcnR5TmFtZSArIFwiXFxcIiksIHVzZSBAY29tcHV0ZWQgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IGRlc2NyaXB0b3JcbiAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplclxuICAgICAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKHRhcmdldClcbiAgICAgICAgICAgICAgICA6IGRlc2NyaXB0b3IudmFsdWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBhc09ic2VydmFibGVPYmplY3QkJDEodGFyZ2V0KS5hZGRPYnNlcnZhYmxlUHJvcChwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSwgZW5oYW5jZXIpO1xuICAgIH0pO1xuICAgIHZhciByZXMgPSBcbiAgICAvLyBFeHRyYSBwcm9jZXNzIGNoZWNrcywgYXMgdGhpcyBoYXBwZW5zIGR1cmluZyBtb2R1bGUgaW5pdGlhbGl6YXRpb25cbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyBmdW5jdGlvbiBvYnNlcnZhYmxlRGVjb3JhdG9yKCkge1xuICAgICAgICAgICAgLy8gVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGlzIGp1c3QgdG8gZGV0ZWN0IGlsbGVnYWwgZGVjb3JhdG9yIGludm9jYXRpb25zLCBkZXByZWNhdGUgaW4gYSBuZXh0IHZlcnNpb25cbiAgICAgICAgICAgIC8vIGFuZCBzaW1wbHkgcmV0dXJuIHRoZSBjcmVhdGVkIHByb3AgZGVjb3JhdG9yXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwkJDEoXCJJbmNvcnJlY3QgZGVjb3JhdG9yIGludm9jYXRpb24uIEBvYnNlcnZhYmxlIGRlY29yYXRvciBkb2Vzbid0IGV4cGVjdCBhbnkgYXJndW1lbnRzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIDogZGVjb3JhdG9yO1xuICAgIHJlcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFByZWRlZmluZWQgYmFncyBvZiBjcmVhdGUgb2JzZXJ2YWJsZSBvcHRpb25zLCB0byBhdm9pZCBhbGxvY2F0aW5nIHRlbXBvcmFyaWx5IG9wdGlvbiBvYmplY3RzXG4vLyBpbiB0aGUgbWFqb3JpdHkgb2YgY2FzZXNcbnZhciBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEgPSB7XG4gICAgZGVlcDogdHJ1ZSxcbiAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxuICAgIHByb3h5OiB0cnVlXG59O1xuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEpO1xuZnVuY3Rpb24gYXNzZXJ0VmFsaWRPcHRpb24oa2V5KSB7XG4gICAgaWYgKCEvXihkZWVwfG5hbWV8ZXF1YWxzfGRlZmF1bHREZWNvcmF0b3J8cHJveHkpJC8udGVzdChrZXkpKVxuICAgICAgICBmYWlsJCQxKFwiaW52YWxpZCBvcHRpb24gZm9yIChleHRlbmQpb2JzZXJ2YWJsZTogXCIgKyBrZXkpO1xufVxuZnVuY3Rpb24gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMSh0aGluZykge1xuICAgIGlmICh0aGluZyA9PT0gbnVsbCB8fCB0aGluZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zJCQxO1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRoaW5nLCBkZWVwOiB0cnVlLCBwcm94eTogdHJ1ZSB9O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGluZyAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKFwiZXhwZWN0ZWQgb3B0aW9ucyBvYmplY3RcIik7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGFzc2VydFZhbGlkT3B0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xufVxudmFyIGRlZXBEZWNvcmF0b3IkJDEgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlciQkMShkZWVwRW5oYW5jZXIkJDEpO1xudmFyIHNoYWxsb3dEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlciQkMShzaGFsbG93RW5oYW5jZXIkJDEpO1xudmFyIHJlZkRlY29yYXRvciQkMSA9IGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyJCQxKHJlZmVyZW5jZUVuaGFuY2VyJCQxKTtcbnZhciByZWZTdHJ1Y3REZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlciQkMShyZWZTdHJ1Y3RFbmhhbmNlciQkMSk7XG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yXG4gICAgICAgID8gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yLmVuaGFuY2VyXG4gICAgICAgIDogb3B0aW9ucy5kZWVwID09PSBmYWxzZVxuICAgICAgICAgICAgPyByZWZlcmVuY2VFbmhhbmNlciQkMVxuICAgICAgICAgICAgOiBkZWVwRW5oYW5jZXIkJDE7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUodiwgYXJnMiwgYXJnMykge1xuICAgIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBkZWVwRGVjb3JhdG9yJCQxLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUkJDEodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgdmFyIHJlcyA9IGlzUGxhaW5PYmplY3QkJDEodilcbiAgICAgICAgPyBvYnNlcnZhYmxlJCQxLm9iamVjdCh2LCBhcmcyLCBhcmczKVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkodilcbiAgICAgICAgICAgID8gb2JzZXJ2YWJsZSQkMS5hcnJheSh2LCBhcmcyKVxuICAgICAgICAgICAgOiBpc0VTNk1hcCQkMSh2KVxuICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZSQkMS5tYXAodiwgYXJnMilcbiAgICAgICAgICAgICAgICA6IGlzRVM2U2V0JCQxKHYpXG4gICAgICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZSQkMS5zZXQodiwgYXJnMilcbiAgICAgICAgICAgICAgICAgICAgOiB2O1xuICAgIC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxuICAgIGlmIChyZXMgIT09IHYpXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCBqdXN0IGJveCBpdFxuICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHByb3ZpZGVkIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhbiBvYnNlcnZhYmxlLiBJZiB5b3Ugd2FudCBqdXN0IGNyZWF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHVzZSAnb2JzZXJ2YWJsZS5ib3godmFsdWUpJ1wiKTtcbn1cbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xuICAgIGJveDogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYm94XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlJCQxKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUsIHRydWUsIG8uZXF1YWxzKTtcbiAgICB9LFxuICAgIGFycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImFycmF5XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkkJDEoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJtYXBcIik7XG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyQkMShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwJCQxKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2V0XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMkJDEob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldCQkMShpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICAgIH0sXG4gICAgb2JqZWN0OiBmdW5jdGlvbiAocHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm9iamVjdFwiKTtcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zJCQxKG9wdGlvbnMpO1xuICAgICAgICBpZiAoby5wcm94eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlJCQxKHt9LCBwcm9wcywgZGVjb3JhdG9ycywgbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyQkMShvKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gZXh0ZW5kT2JzZXJ2YWJsZSQkMSh7fSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG8pO1xuICAgICAgICAgICAgdmFyIHByb3h5ID0gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QkJDEoYmFzZSk7XG4gICAgICAgICAgICBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXMkJDEocHJveHksIHByb3BzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKTtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVmOiByZWZEZWNvcmF0b3IkJDEsXG4gICAgc2hhbGxvdzogc2hhbGxvd0RlY29yYXRvcixcbiAgICBkZWVwOiBkZWVwRGVjb3JhdG9yJCQxLFxuICAgIHN0cnVjdDogcmVmU3RydWN0RGVjb3JhdG9yXG59O1xudmFyIG9ic2VydmFibGUkJDEgPSBjcmVhdGVPYnNlcnZhYmxlO1xuLy8gd2VpcmQgdHJpY2sgdG8ga2VlcCBvdXIgdHlwaW5ncyBuaWNlbHkgd2l0aCBvdXIgZnVuY3MsIGFuZCBzdGlsbCBleHRlbmQgdGhlIG9ic2VydmFibGUgZnVuY3Rpb25cbk9iamVjdC5rZXlzKG9ic2VydmFibGVGYWN0b3JpZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIChvYnNlcnZhYmxlJCQxW25hbWVdID0gb2JzZXJ2YWJsZUZhY3Rvcmllc1tuYW1lXSk7IH0pO1xuZnVuY3Rpb24gaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IobWV0aG9kTmFtZSkge1xuICAgIGZhaWwkJDEoXG4gICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgXCJFeHBlY3RlZCBvbmUgb3IgdHdvIGFyZ3VtZW50cyB0byBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiLiBEaWQgeW91IGFjY2lkZW50YWxseSB0cnkgdG8gdXNlIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIgYXMgZGVjb3JhdG9yP1wiKTtcbn1cblxudmFyIGNvbXB1dGVkRGVjb3JhdG9yJCQxID0gY3JlYXRlUHJvcERlY29yYXRvciQkMShmYWxzZSwgZnVuY3Rpb24gKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGRlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xuICAgIHZhciBnZXQkJDEgPSBkZXNjcmlwdG9yLmdldCwgc2V0JCQxID0gZGVzY3JpcHRvci5zZXQ7IC8vIGluaXRpYWxWYWx1ZSBpcyB0aGUgZGVzY3JpcHRvciBmb3IgZ2V0IC8gc2V0IHByb3BzXG4gICAgLy8gT3B0aW1pemF0aW9uOiBmYXN0ZXIgb24gZGVjb3JhdG9yIHRhcmdldCBvciBpbnN0YW5jZT8gQXNzdW1pbmcgdGFyZ2V0XG4gICAgLy8gT3B0aW1pemF0aW9uOiBmaW5kIG91dCBpZiBkZWNsYXJpbmcgb24gaW5zdGFuY2UgaXNuJ3QganVzdCBmYXN0ZXIuIChhbHNvIG1ha2VzIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNpbXBsZXIpLiBCdXQsIG1vcmUgbWVtb3J5IHVzYWdlLi5cbiAgICAvLyBGb3JjaW5nIGluc3RhbmNlIG5vdywgZml4ZXMgaG90IHJlbG9hZGlnIGlzc3VlcyBvbiBSZWFjdCBOYXRpdmU6XG4gICAgdmFyIG9wdGlvbnMgPSBkZWNvcmF0b3JBcmdzWzBdIHx8IHt9O1xuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCQkMShpbnN0YW5jZSkuYWRkQ29tcHV0ZWRQcm9wKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIF9fYXNzaWduKHsgZ2V0OiBnZXQkJDEsXG4gICAgICAgIHNldDogc2V0JCQxLCBjb250ZXh0OiBpbnN0YW5jZSB9LCBvcHRpb25zKSk7XG59KTtcbnZhciBjb21wdXRlZFN0cnVjdERlY29yYXRvciA9IGNvbXB1dGVkRGVjb3JhdG9yJCQxKHsgZXF1YWxzOiBjb21wYXJlciQkMS5zdHJ1Y3R1cmFsIH0pO1xuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzIHByb3BlcnRpZXM6IEBjb21wdXRlZCBnZXQgdmFsdWUoKSB7IHJldHVybiBleHByOyB9LlxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xuICovXG52YXIgY29tcHV0ZWQkJDEgPSBmdW5jdGlvbiBjb21wdXRlZCQkMShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIEBjb21wdXRlZFxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IkJDEuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKGFyZzEgIT09IG51bGwgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvciQkMS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCQkMSh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xuICAgICAgICBpbnZhcmlhbnQkJDEoYXJndW1lbnRzLmxlbmd0aCA8IDMsIFwiQ29tcHV0ZWQgdGFrZXMgb25lIG9yIHR3byBhcmd1bWVudHMgaWYgdXNlZCBhcyBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIG9wdHMgPSB0eXBlb2YgYXJnMiA9PT0gXCJvYmplY3RcIiA/IGFyZzIgOiB7fTtcbiAgICBvcHRzLmdldCA9IGFyZzE7XG4gICAgb3B0cy5zZXQgPSB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiID8gYXJnMiA6IG9wdHMuc2V0O1xuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBhcmcxLm5hbWUgfHwgXCJcIjsgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlJCQxKG9wdHMpO1xufTtcbmNvbXB1dGVkJCQxLnN0cnVjdCA9IGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24kJDEoYWN0aW9uTmFtZSwgZm4sIHJlZikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50JCQxKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiLCBcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbk5hbWUgIT09IFwic3RyaW5nXCIgfHwgIWFjdGlvbk5hbWUpXG4gICAgICAgICAgICBmYWlsJCQxKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIH1cbiAgICB2YXIgcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbiQkMShhY3Rpb25OYW1lLCBmbiwgcmVmIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUFjdGlvbiQkMShhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgcnVuSW5mbyA9IHN0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGZuLCBzY29wZSwgYXJncyk7XG4gICAgdmFyIHNob3VsZFN1cHJlc3NSZWFjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcmVzID0gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpO1xuICAgICAgICBzaG91bGRTdXByZXNzUmVhY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHNob3VsZFN1cHJlc3NSZWFjdGlvbkVycm9yKSB7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSQkMS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gc2hvdWxkU3VwcmVzc1JlYWN0aW9uRXJyb3I7XG4gICAgICAgICAgICBlbmRBY3Rpb24ocnVuSW5mbyk7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSQkMS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmRBY3Rpb24ocnVuSW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydEFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkJCQxKCkgJiYgISFhY3Rpb25OYW1lO1xuICAgIHZhciBzdGFydFRpbWUgPSAwO1xuICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBsID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHx8IDA7XG4gICAgICAgIHZhciBmbGF0dGVuZEFyZ3MgPSBuZXcgQXJyYXkobCk7XG4gICAgICAgIGlmIChsID4gMClcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgICAgIGZsYXR0ZW5kQXJnc1tpXSA9IGFyZ3NbaV07XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0JCQxKHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICBuYW1lOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgb2JqZWN0OiBzY29wZSxcbiAgICAgICAgICAgIGFyZ3VtZW50czogZmxhdHRlbmRBcmdzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgcHJldkRlcml2YXRpb24gPSB1bnRyYWNrZWRTdGFydCQkMSgpO1xuICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICB2YXIgcHJldkFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCQkMSh0cnVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmV2RGVyaXZhdGlvbjogcHJldkRlcml2YXRpb24sXG4gICAgICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlczogcHJldkFsbG93U3RhdGVDaGFuZ2VzLFxuICAgICAgICBub3RpZnlTcHk6IG5vdGlmeVNweSxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWVcbiAgICB9O1xufVxuZnVuY3Rpb24gZW5kQWN0aW9uKHJ1bkluZm8pIHtcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZCQkMShydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlcyk7XG4gICAgZW5kQmF0Y2gkJDEoKTtcbiAgICB1bnRyYWNrZWRFbmQkJDEocnVuSW5mby5wcmV2RGVyaXZhdGlvbik7XG4gICAgaWYgKHJ1bkluZm8ubm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgc3B5UmVwb3J0RW5kJCQxKHsgdGltZTogRGF0ZS5ub3coKSAtIHJ1bkluZm8uc3RhcnRUaW1lIH0pO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXMkJDEoYWxsb3dTdGF0ZUNoYW5nZXMkJDEsIGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQkJDEoYWxsb3dTdGF0ZUNoYW5nZXMkJDEpO1xuICAgIHZhciByZXM7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0gZnVuYygpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQkJDEocHJldik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0JCQxKGFsbG93U3RhdGVDaGFuZ2VzJCQxKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZSQkMS5hbGxvd1N0YXRlQ2hhbmdlcztcbiAgICBnbG9iYWxTdGF0ZSQkMS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzJCQxO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQkJDEocHJldikge1xuICAgIGdsb2JhbFN0YXRlJCQxLmFsbG93U3RhdGVDaGFuZ2VzID0gcHJldjtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQkJDEoZnVuYykge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUkJDEuY29tcHV0YXRpb25EZXB0aDtcbiAgICBnbG9iYWxTdGF0ZSQkMS5jb21wdXRhdGlvbkRlcHRoID0gMDtcbiAgICB2YXIgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGZ1bmMoKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmNvbXB1dGF0aW9uRGVwdGggPSBwcmV2O1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG52YXIgT2JzZXJ2YWJsZVZhbHVlJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUkJDEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlJCQxKHZhbHVlLCBlbmhhbmNlciwgbmFtZSwgbm90aWZ5U3B5LCBlcXVhbHMpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlVmFsdWVAXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgICAgICBpZiAobm90aWZ5U3B5ID09PSB2b2lkIDApIHsgbm90aWZ5U3B5ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoZXF1YWxzID09PSB2b2lkIDApIHsgZXF1YWxzID0gY29tcGFyZXIkJDEuZGVmYXVsdDsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuZXF1YWxzID0gZXF1YWxzO1xuICAgICAgICBfdGhpcy5oYXNVbnJlcG9ydGVkQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnZhbHVlID0gZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCwgbmFtZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgaXNTcHlFbmFibGVkJCQxKCkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcbiAgICAgICAgICAgIHNweVJlcG9ydCQkMSh7IHR5cGU6IFwiY3JlYXRlXCIsIG5hbWU6IF90aGlzLm5hbWUsIG5ld1ZhbHVlOiBcIlwiICsgX3RoaXMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUkJDEucHJvdG90eXBlLnByZXBhcmVOZXdWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMSh0aGlzKTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQ7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhcHBseSBtb2RpZmllclxuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZW5oYW5jZXIobmV3VmFsdWUsIHRoaXMudmFsdWUsIHRoaXMubmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUuc2V0TmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlJCQxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlJCQxLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvciQkMSh0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyJCQxKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZSQkMS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlJCQxKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlJCQxLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVZhbHVlJCQxO1xufShBdG9tJCQxKSk7XG52YXIgaXNPYnNlcnZhYmxlVmFsdWUkJDEgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlJCQxKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSQkMSk7XG5cbi8qKlxuICogQSBub2RlIGluIHRoZSBzdGF0ZSBkZXBlbmRlbmN5IHJvb3QgdGhhdCBvYnNlcnZlcyBvdGhlciBub2RlcywgYW5kIGNhbiBiZSBvYnNlcnZlZCBpdHNlbGYuXG4gKlxuICogQ29tcHV0ZWRWYWx1ZSB3aWxsIHJlbWVtYmVyIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJhdGNoLCBvclxuICogd2hpbGUgYmVpbmcgb2JzZXJ2ZWQuXG4gKlxuICogRHVyaW5nIHRoaXMgdGltZSBpdCB3aWxsIHJlY29tcHV0ZSBvbmx5IHdoZW4gb25lIG9mIGl0cyBkaXJlY3QgZGVwZW5kZW5jaWVzIGNoYW5nZWQsXG4gKiBidXQgb25seSB3aGVuIGl0IGlzIGJlaW5nIGFjY2Vzc2VkIHdpdGggYENvbXB1dGVkVmFsdWUuZ2V0KClgLlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGRlc2NyaXB0aW9uOlxuICogMS4gRmlyc3QgdGltZSBpdCdzIGJlaW5nIGFjY2Vzc2VkIGl0IHdpbGwgY29tcHV0ZSBhbmQgcmVtZW1iZXIgcmVzdWx0XG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xuICogMi4gRmlyc3QgdGltZSBhbnkgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZSwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHdhaXQgZm9yIDMuXG4gKiAzLiBXaGVuIGl0J3MgYmVpbmcgYWNjZXNzZWQsIHJlY29tcHV0ZSBpZiBhbnkgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQuXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXG4gKiAgICBnbyB0byBzdGVwIDIuIGVpdGhlciB3YXlcbiAqXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cbiAqL1xudmFyIENvbXB1dGVkVmFsdWUkJDEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHZhbHVlIGJhc2VkIG9uIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXG4gICAgICpcbiAgICAgKiBUaGUgYGVxdWFsc2AgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBjb21wYXJlciBmdW5jdGlvbiB0byB1c2UgdG8gZGV0ZXJtaW5lIGlmIGEgbmV3bHkgcHJvZHVjZWRcbiAgICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcbiAgICAgKiBjb21wYXJlcyBiYXNlZCBvbiBpZGVudGl0eSBjb21wYXJpc29uICg9PT0pLCBhbmQgYHN0cnVjdHVhbENvbXBhcmVyYCBkZWVwbHkgY29tcGFyZXMgdGhlIHN0cnVjdHVyZS5cbiAgICAgKiBTdHJ1Y3R1cmFsIGNvbXBhcmlzb24gY2FuIGJlIGNvbnZlbmllbnQgaWYgeW91IGFsd2F5cyBwcm9kdWNlIGEgbmV3IGFnZ3JlZ2F0ZWQgb2JqZWN0IGFuZFxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHdvcmtpbmcgd2l0aCB2ZWN0b3JzLCBtb3VzZSBjb29yZGluYXRlcyBldGMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZSQkMShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdGhpcy5vYnNlcnZpbmcgPSBbXTsgLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnJ1bklkID0gMDtcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICAgICAgdGhpcy51bmJvdW5kRGVwc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fX21hcGlkID0gXCIjXCIgKyBnZXROZXh0SWQkJDEoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYXVnaHRFeGNlcHRpb24kJDEobnVsbCk7XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTsgLy8gdG8gY2hlY2sgZm9yIGN5Y2xlc1xuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHJhY2luZyA9IFRyYWNlTW9kZSQkMS5OT05FO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFvcHRpb25zLmdldClcbiAgICAgICAgICAgIHRocm93IFwiW21vYnhdIG1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCI7XG4gICAgICAgIHRoaXMuZGVyaXZhdGlvbiA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnNldClcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gY3JlYXRlQWN0aW9uJCQxKHRoaXMubmFtZSArIFwiLXNldHRlclwiLCBvcHRpb25zLnNldCk7XG4gICAgICAgIHRoaXMuZXF1YWxzID1cbiAgICAgICAgICAgIG9wdGlvbnMuZXF1YWxzIHx8XG4gICAgICAgICAgICAgICAgKG9wdGlvbnMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0aW9ucy5zdHJ1Y3RcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wYXJlciQkMS5zdHJ1Y3R1cmFsXG4gICAgICAgICAgICAgICAgICAgIDogY29tcGFyZXIkJDEuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9ICEhb3B0aW9ucy5yZXF1aXJlc1JlYWN0aW9uO1xuICAgICAgICB0aGlzLmtlZXBBbGl2ZSA9ICEhb3B0aW9ucy5rZWVwQWxpdmU7XG4gICAgfVxuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCQkMSh0aGlzKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLm9uQmVjb21lT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcyBjb21wdXRlZCB2YWx1ZS5cbiAgICAgKiBXaWxsIGV2YWx1YXRlIGl0cyBjb21wdXRhdGlvbiBmaXJzdCBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGluZylcbiAgICAgICAgICAgIGZhaWwkJDEoXCJDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiBcIiArIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMuZGVyaXZhdGlvbik7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZSQkMS5pbkJhdGNoID09PSAwICYmIHRoaXMub2JzZXJ2ZXJzLnNpemUgPT09IDAgJiYgIXRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSQkMSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybkFib3V0VW50cmFja2VkUmVhZCgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTsgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCQkMSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVwb3J0T2JzZXJ2ZWQkJDEodGhpcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSQkMSh0aGlzKSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFja0FuZENvbXB1dGUoKSlcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkJCQxKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24kJDEocmVzdWx0KSlcbiAgICAgICAgICAgIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbiQkMShyZXMpKVxuICAgICAgICAgICAgdGhyb3cgcmVzLmNhdXNlO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRlcikge1xuICAgICAgICAgICAgaW52YXJpYW50JCQxKCF0aGlzLmlzUnVubmluZ1NldHRlciwgXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJyBpcyB0cnlpbmcgdG8gdXBkYXRlIGl0c2VsZi4gRGlkIHlvdSBpbnRlbmQgdG8gdXBkYXRlIGFuIF9vYnNlcnZhYmxlXyB2YWx1ZSwgaW5zdGVhZCBvZiB0aGUgY29tcHV0ZWQgcHJvcGVydHk/XCIpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRlci5jYWxsKHRoaXMuc2NvcGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaW52YXJpYW50JCQxKGZhbHNlLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBcIltDb21wdXRlZFZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCQkMSgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgc3B5UmVwb3J0JCQxKHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb21wdXRlXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB2YXIgd2FzU3VzcGVuZGVkID0gXG4gICAgICAgIC8qIHNlZSAjMTIwOCAqLyB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWUodHJ1ZSk7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gd2FzU3VzcGVuZGVkIHx8XG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbiQkMShvbGRWYWx1ZSkgfHxcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uJCQxKG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICAgIXRoaXMuZXF1YWxzKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS5jb21wdXRlVmFsdWUgPSBmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IHRydWU7XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmNvbXB1dGF0aW9uRGVwdGgrKztcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICByZXMgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbiQkMSh0aGlzLCB0aGlzLmRlcml2YXRpb24sIHRoaXMuc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uJCQxKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5jb21wdXRhdGlvbkRlcHRoLS07XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUkJDEucHJvdG90eXBlLnN1c3BlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nJCQxKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDsgLy8gZG9uJ3QgaG9sZCBvbiB0byBjb21wdXRlZCB2YWx1ZSFcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gYXV0b3J1biQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0JCQxKCk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IF90aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQkJDEocHJldlUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS53YXJuQWJvdXRVbnRyYWNrZWRSZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlc1JlYWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmYWlsJCQxKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZSQkMS5OT05FKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUkJDEuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gQ29tcHV0ZWQgdmFsdWUgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZSQkMS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMuZGVyaXZhdGlvbi50b1N0cmluZygpICsgXCJdXCI7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9QcmltaXRpdmUkJDEodGhpcy5nZXQoKSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlJCQxLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcHV0ZWRWYWx1ZSQkMTtcbn0oKSk7XG52YXIgaXNDb21wdXRlZFZhbHVlJCQxID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMShcIkNvbXB1dGVkVmFsdWVcIiwgQ29tcHV0ZWRWYWx1ZSQkMSk7XG5cbnZhciBJRGVyaXZhdGlvblN0YXRlO1xuKGZ1bmN0aW9uIChJRGVyaXZhdGlvblN0YXRlJCQxKSB7XG4gICAgLy8gYmVmb3JlIGJlaW5nIHJ1biBvciAob3V0c2lkZSBiYXRjaCBhbmQgbm90IGJlaW5nIG9ic2VydmVkKVxuICAgIC8vIGF0IHRoaXMgcG9pbnQgZGVyaXZhdGlvbiBpcyBub3QgaG9sZGluZyBhbnkgZGF0YSBhYm91dCBkZXBlbmRlbmN5IHRyZWVcbiAgICBJRGVyaXZhdGlvblN0YXRlJCQxW0lEZXJpdmF0aW9uU3RhdGUkJDFbXCJOT1RfVFJBQ0tJTkdcIl0gPSAtMV0gPSBcIk5PVF9UUkFDS0lOR1wiO1xuICAgIC8vIG5vIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb25cbiAgICAvLyB3b24ndCByZWNhbGN1bGF0ZSBkZXJpdmF0aW9uXG4gICAgLy8gdGhpcyBpcyB3aGF0IG1ha2VzIG1vYnggZmFzdFxuICAgIElEZXJpdmF0aW9uU3RhdGUkJDFbSURlcml2YXRpb25TdGF0ZSQkMVtcIlVQX1RPX0RBVEVcIl0gPSAwXSA9IFwiVVBfVE9fREFURVwiO1xuICAgIC8vIHNvbWUgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCBkb24ndCBrbm93IGlmIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkXG4gICAgLy8gd2lsbCByZXF1aXJlIHRvIGNoZWNrIGZpcnN0IGlmIFVQX1RPX0RBVEUgb3IgUE9TU0lCTFlfU1RBTEVcbiAgICAvLyBjdXJyZW50bHkgb25seSBDb21wdXRlZFZhbHVlIHdpbGwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFXG4gICAgLy9cbiAgICAvLyBoYXZpbmcgdGhpcyBzdGF0ZSBpcyBzZWNvbmQgYmlnIG9wdGltaXphdGlvbjpcbiAgICAvLyBkb24ndCBoYXZlIHRvIHJlY29tcHV0ZSBvbiBldmVyeSBkZXBlbmRlbmN5IGNoYW5nZSwgYnV0IG9ubHkgd2hlbiBpdCdzIG5lZWRlZFxuICAgIElEZXJpdmF0aW9uU3RhdGUkJDFbSURlcml2YXRpb25TdGF0ZSQkMVtcIlBPU1NJQkxZX1NUQUxFXCJdID0gMV0gPSBcIlBPU1NJQkxZX1NUQUxFXCI7XG4gICAgLy8gQSBzaGFsbG93IGRlcGVuZGVuY3kgaGFzIGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvbiBhbmQgdGhlIGRlcml2YXRpb25cbiAgICAvLyB3aWxsIG5lZWQgdG8gcmVjb21wdXRlIHdoZW4gaXQncyBuZWVkZWQgbmV4dC5cbiAgICBJRGVyaXZhdGlvblN0YXRlJCQxW0lEZXJpdmF0aW9uU3RhdGUkJDFbXCJTVEFMRVwiXSA9IDJdID0gXCJTVEFMRVwiO1xufSkoSURlcml2YXRpb25TdGF0ZSB8fCAoSURlcml2YXRpb25TdGF0ZSA9IHt9KSk7XG52YXIgVHJhY2VNb2RlJCQxO1xuKGZ1bmN0aW9uIChUcmFjZU1vZGUkJDEpIHtcbiAgICBUcmFjZU1vZGUkJDFbVHJhY2VNb2RlJCQxW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gICAgVHJhY2VNb2RlJCQxW1RyYWNlTW9kZSQkMVtcIkxPR1wiXSA9IDFdID0gXCJMT0dcIjtcbiAgICBUcmFjZU1vZGUkJDFbVHJhY2VNb2RlJCQxW1wiQlJFQUtcIl0gPSAyXSA9IFwiQlJFQUtcIjtcbn0pKFRyYWNlTW9kZSQkMSB8fCAoVHJhY2VNb2RlJCQxID0ge30pKTtcbnZhciBDYXVnaHRFeGNlcHRpb24kJDEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2F1Z2h0RXhjZXB0aW9uJCQxKGNhdXNlKSB7XG4gICAgICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcbiAgICAgICAgLy8gRW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIENhdWdodEV4Y2VwdGlvbiQkMTtcbn0oKSk7XG5mdW5jdGlvbiBpc0NhdWdodEV4Y2VwdGlvbiQkMShlKSB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDYXVnaHRFeGNlcHRpb24kJDE7XG59XG4vKipcbiAqIEZpbmRzIG91dCB3aGV0aGVyIGFueSBkZXBlbmRlbmN5IG9mIHRoZSBkZXJpdmF0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxuICogaWYgYW55IGRlcGVuZGVuY3kgY2hhbmdlZCBpdCB3aWxsIHByb3BhZ2F0ZSBpdCBieSBjaGFuZ2luZyBkZXBlbmRlbmNpZXNTdGF0ZSB0byAyLlxuICpcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXG4gKiBzdG9wcGluZyBvbiB0aGUgZmlyc3QgY2hhbmdlLCBhbGwgdGhlIHJlY2FsY3VsYXRpb25zIGFyZSBvbmx5IGNhbGxlZCBmb3IgQ29tcHV0ZWRWYWx1ZXNcbiAqIHRoYXQgd2lsbCBiZSB0cmFja2VkIGJ5IGRlcml2YXRpb24uIFRoYXQgaXMgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBpZiB0aGUgZmlyc3QgeFxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcbiAqIHVwIHVudGlsIGFjY2Vzc2luZyB4LXRoIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUkJDEoZGVyaXZhdGlvbikge1xuICAgIHN3aXRjaCAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSkge1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORzpcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRToge1xuICAgICAgICAgICAgdmFyIHByZXZVbnRyYWNrZWQgPSB1bnRyYWNrZWRTdGFydCQkMSgpOyAvLyBubyBuZWVkIGZvciB0aG9zZSBjb21wdXRlZHMgdG8gYmUgcmVwb3J0ZWQsIHRoZXkgd2lsbCBiZSBwaWNrZWQgdXAgaW4gdHJhY2tEZXJpdmVkRnVuY3Rpb24uXG4gICAgICAgICAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmcsIGwgPSBvYnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gb2JzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkVmFsdWUkJDEob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUkJDEuZGlzYWJsZUVycm9yQm91bmRhcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBub3QgaW50ZXJlc3RlZCBpbiB0aGUgdmFsdWUgKm9yKiBleGNlcHRpb24gYXQgdGhpcyBtb21lbnQsIGJ1dCBpZiB0aGVyZSBpcyBvbmUsIG5vdGlmeSBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQkJDEocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgQ29tcHV0ZWRWYWx1ZSBgb2JqYCBhY3R1YWxseSBjaGFuZ2VkIGl0IHdpbGwgYmUgY29tcHV0ZWQgYW5kIHByb3BhZ2F0ZWQgdG8gaXRzIG9ic2VydmVycy5cbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGBkZXJpdmF0aW9uYCBpcyBhbiBvYnNlcnZlciBvZiBgb2JqYFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhcmlhbnRTaG91bGRDb21wdXRlKGRlcml2YXRpb24pXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQkJDEocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wJCQxKGRlcml2YXRpb24pO1xuICAgICAgICAgICAgdW50cmFja2VkRW5kJCQxKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikge1xuLy8gICAgIGNvbnN0IG5ld0RlcFN0YXRlID0gKGRlcml2YXRpb24gYXMgYW55KS5kZXBlbmRlbmNpZXNTdGF0ZVxuLy8gICAgIGlmIChcbi8vICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmXG4vLyAgICAgICAgIChuZXdEZXBTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSB8fFxuLy8gICAgICAgICAgICAgbmV3RGVwU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HKVxuLy8gICAgIClcbi8vICAgICAgICAgZmFpbChcIklsbGVnYWwgZGVwZW5kZW5jeSBzdGF0ZVwiKVxuLy8gfVxuZnVuY3Rpb24gaXNDb21wdXRpbmdEZXJpdmF0aW9uJCQxKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb24gIT09IG51bGw7IC8vIGZpbHRlciBvdXQgYWN0aW9ucyBpbnNpZGUgY29tcHV0YXRpb25zXG59XG5mdW5jdGlvbiBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMShhdG9tKSB7XG4gICAgdmFyIGhhc09ic2VydmVycyQkMSA9IGF0b20ub2JzZXJ2ZXJzLnNpemUgPiAwO1xuICAgIC8vIFNob3VsZCBuZXZlciBiZSBwb3NzaWJsZSB0byBjaGFuZ2UgYW4gb2JzZXJ2ZWQgb2JzZXJ2YWJsZSBmcm9tIGluc2lkZSBjb21wdXRlZCwgc2VlICM3OThcbiAgICBpZiAoZ2xvYmFsU3RhdGUkJDEuY29tcHV0YXRpb25EZXB0aCA+IDAgJiYgaGFzT2JzZXJ2ZXJzJCQxKVxuICAgICAgICBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCJDb21wdXRlZCB2YWx1ZXMgYXJlIG5vdCBhbGxvd2VkIHRvIGNhdXNlIHNpZGUgZWZmZWN0cyBieSBjaGFuZ2luZyBvYnNlcnZhYmxlcyB0aGF0IGFyZSBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLiBUcmllZCB0byBtb2RpZnk6IFwiICsgYXRvbS5uYW1lKTtcbiAgICAvLyBTaG91bGQgbm90IGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBvYnNlcnZlZCBzdGF0ZSBvdXRzaWRlIHN0cmljdCBtb2RlLCBleGNlcHQgZHVyaW5nIGluaXRpYWxpemF0aW9uLCBzZWUgIzU2M1xuICAgIGlmICghZ2xvYmFsU3RhdGUkJDEuYWxsb3dTdGF0ZUNoYW5nZXMgJiYgKGhhc09ic2VydmVycyQkMSB8fCBnbG9iYWxTdGF0ZSQkMS5lbmZvcmNlQWN0aW9ucyA9PT0gXCJzdHJpY3RcIikpXG4gICAgICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAoZ2xvYmFsU3RhdGUkJDEuZW5mb3JjZUFjdGlvbnNcbiAgICAgICAgICAgICAgICA/IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgb2JzZXJ2ZWQgb2JzZXJ2YWJsZSB2YWx1ZXMgb3V0c2lkZSBhY3Rpb25zIGlzIG5vdCBhbGxvd2VkLiBQbGVhc2Ugd3JhcCB0aGUgY29kZSBpbiBhbiBgYWN0aW9uYCBpZiB0aGlzIGNoYW5nZSBpcyBpbnRlbmRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIlxuICAgICAgICAgICAgICAgIDogXCJTaWRlIGVmZmVjdHMgbGlrZSBjaGFuZ2luZyBzdGF0ZSBhcmUgbm90IGFsbG93ZWQgYXQgdGhpcyBwb2ludC4gQXJlIHlvdSB0cnlpbmcgdG8gbW9kaWZ5IHN0YXRlIGZyb20sIGZvciBleGFtcGxlLCB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9mIGEgUmVhY3QgY29tcG9uZW50PyBUcmllZCB0byBtb2RpZnk6IFwiKSArXG4gICAgICAgICAgICAgICAgYXRvbS5uYW1lKTtcbn1cbi8qKlxuICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGBmYCBhbmQgdHJhY2tzIHdoaWNoIG9ic2VydmFibGVzIGFyZSBiZWluZyBhY2Nlc3NlZC5cbiAqIFRoZSB0cmFja2luZyBpbmZvcm1hdGlvbiBpcyBzdG9yZWQgb24gdGhlIGBkZXJpdmF0aW9uYCBvYmplY3QgYW5kIHRoZSBkZXJpdmF0aW9uIGlzIHJlZ2lzdGVyZWRcbiAqIGFzIG9ic2VydmVyIG9mIGFueSBvZiB0aGUgYWNjZXNzZWQgb2JzZXJ2YWJsZXMuXG4gKi9cbmZ1bmN0aW9uIHRyYWNrRGVyaXZlZEZ1bmN0aW9uJCQxKGRlcml2YXRpb24sIGYsIGNvbnRleHQpIHtcbiAgICAvLyBwcmUgYWxsb2NhdGUgYXJyYXkgYWxsb2NhdGlvbiArIHJvb20gZm9yIHZhcmlhdGlvbiBpbiBkZXBzXG4gICAgLy8gYXJyYXkgd2lsbCBiZSB0cmltbWVkIGJ5IGJpbmREZXBlbmRlbmNpZXNcbiAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMCQkMShkZXJpdmF0aW9uKTtcbiAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZyA9IG5ldyBBcnJheShkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggKyAxMDApO1xuICAgIGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgZGVyaXZhdGlvbi5ydW5JZCA9ICsrZ2xvYmFsU3RhdGUkJDEucnVuSWQ7XG4gICAgdmFyIHByZXZUcmFja2luZyA9IGdsb2JhbFN0YXRlJCQxLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKGdsb2JhbFN0YXRlJCQxLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICAgICAgcmVzdWx0ID0gZi5jYWxsKGNvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENhdWdodEV4Y2VwdGlvbiQkMShlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2VHJhY2tpbmc7XG4gICAgYmluZERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBkaWZmcyBuZXdPYnNlcnZpbmcgd2l0aCBvYnNlcnZpbmcuXG4gKiB1cGRhdGUgb2JzZXJ2aW5nIHRvIGJlIG5ld09ic2VydmluZyB3aXRoIHVuaXF1ZSBvYnNlcnZhYmxlc1xuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXG4gKi9cbmZ1bmN0aW9uIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbikge1xuICAgIC8vIGludmFyaWFudChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORywgXCJJTlRFUk5BTCBFUlJPUiBiaW5kRGVwZW5kZW5jaWVzIGV4cGVjdHMgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gICAgdmFyIHByZXZPYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcbiAgICB2YXIgb2JzZXJ2aW5nID0gKGRlcml2YXRpb24ub2JzZXJ2aW5nID0gZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcpO1xuICAgIHZhciBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6ICh0aGlzIGxpc3QgY2FuIGNvbnRhaW4gZHVwbGljYXRlcyk6XG4gICAgLy8gICAwOiBmaXJzdCBvY2N1cnJlbmNlLCBjaGFuZ2UgdG8gMSBhbmQga2VlcCBpdFxuICAgIC8vICAgMTogZXh0cmEgb2NjdXJyZW5jZSwgZHJvcCBpdFxuICAgIHZhciBpMCA9IDAsIGwgPSBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGRlcCA9IG9ic2VydmluZ1tpXTtcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIGRlcC5kaWZmVmFsdWUgPSAxO1xuICAgICAgICAgICAgaWYgKGkwICE9PSBpKVxuICAgICAgICAgICAgICAgIG9ic2VydmluZ1tpMF0gPSBkZXA7XG4gICAgICAgICAgICBpMCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwY2FzdCBpcyAnc2FmZScgaGVyZSwgYmVjYXVzZSBpZiBkZXAgaXMgSU9ic2VydmFibGUsIGBkZXBlbmRlbmNpZXNTdGF0ZWAgd2lsbCBiZSB1bmRlZmluZWQsXG4gICAgICAgIC8vIG5vdCBoaXR0aW5nIHRoZSBjb25kaXRpb25cbiAgICAgICAgaWYgKGRlcC5kZXBlbmRlbmNpZXNTdGF0ZSA+IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSkge1xuICAgICAgICAgICAgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gZGVwLmRlcGVuZGVuY2llc1N0YXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9ic2VydmluZy5sZW5ndGggPSBpMDtcbiAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZyA9IG51bGw7IC8vIG5ld09ic2VydmluZyBzaG91bGRuJ3QgYmUgbmVlZGVkIG91dHNpZGUgdHJhY2tpbmcgKHN0YXRlbWVudCBtb3ZlZCBkb3duIHRvIHdvcmsgYXJvdW5kIEZGIGJ1Zywgc2VlICM2MTQpXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgb2xkIG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChpdCBpcyB1bmlxdWUgYWZ0ZXIgbGFzdCBiaW5kRGVwZW5kZW5jaWVzKVxuICAgIC8vICAgMDogaXQncyBub3QgaW4gbmV3IG9ic2VydmFibGVzLCB1bm9ic2VydmUgaXRcbiAgICAvLyAgIDE6IGl0IGtlZXBzIGJlaW5nIG9ic2VydmVkLCBkb24ndCB3YW50IHRvIG5vdGlmeSBpdC4gY2hhbmdlIHRvIDBcbiAgICBsID0gcHJldk9ic2VydmluZy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgICB2YXIgZGVwID0gcHJldk9ic2VydmluZ1tsXTtcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZU9ic2VydmVyJCQxKGRlcCwgZGVyaXZhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XG4gICAgfVxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG5ldyBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAobm93IGl0IHNob3VsZCBiZSB1bmlxdWUpXG4gICAgLy8gICAwOiBpdCB3YXMgc2V0IHRvIDAgaW4gbGFzdCBsb29wLiBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgIC8vICAgMTogaXQgd2Fzbid0IG9ic2VydmVkLCBsZXQncyBvYnNlcnZlIGl0LiBzZXQgYmFjayB0byAwXG4gICAgd2hpbGUgKGkwLS0pIHtcbiAgICAgICAgdmFyIGRlcCA9IG9ic2VydmluZ1tpMF07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgICAgIGFkZE9ic2VydmVyJCQxKGRlcCwgZGVyaXZhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU29tZSBuZXcgb2JzZXJ2ZWQgZGVyaXZhdGlvbnMgbWF5IGJlY29tZSBzdGFsZSBkdXJpbmcgdGhpcyBkZXJpdmF0aW9uIGNvbXB1dGF0aW9uXG4gICAgLy8gc28gdGhleSBoYXZlIGhhZCBubyBjaGFuY2UgdG8gcHJvcGFnYXRlIHN0YWxlbmVzcyAoIzkxNilcbiAgICBpZiAobG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpIHtcbiAgICAgICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZTtcbiAgICAgICAgZGVyaXZhdGlvbi5vbkJlY29tZVN0YWxlKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJPYnNlcnZpbmckJDEoZGVyaXZhdGlvbikge1xuICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiBjbGVhck9ic2VydmluZyBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW5zaWRlIGJhdGNoXCIpO1xuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcbiAgICBkZXJpdmF0aW9uLm9ic2VydmluZyA9IFtdO1xuICAgIHZhciBpID0gb2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICByZW1vdmVPYnNlcnZlciQkMShvYnNbaV0sIGRlcml2YXRpb24pO1xuICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZCQkMShhY3Rpb24kJDEpIHtcbiAgICB2YXIgcHJldiA9IHVudHJhY2tlZFN0YXJ0JCQxKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbiQkMSgpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdW50cmFja2VkRW5kJCQxKHByZXYpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVudHJhY2tlZFN0YXJ0JCQxKCkge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUkJDEudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgIGdsb2JhbFN0YXRlJCQxLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XG4gICAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRFbmQkJDEocHJldikge1xuICAgIGdsb2JhbFN0YXRlJCQxLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XG59XG4vKipcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxuICpcbiAqL1xuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAkJDEoZGVyaXZhdGlvbikge1xuICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXG4gICAgICAgIHJldHVybjtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG59XG5cbi8qKlxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcbiAqL1xudmFyIHBlcnNpc3RlbnRLZXlzID0gW1xuICAgIFwibW9ieEd1aWRcIixcbiAgICBcInNweUxpc3RlbmVyc1wiLFxuICAgIFwiZW5mb3JjZUFjdGlvbnNcIixcbiAgICBcImNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvblwiLFxuICAgIFwiZGlzYWJsZUVycm9yQm91bmRhcmllc1wiLFxuICAgIFwicnVuSWRcIixcbiAgICBcIlVOQ0hBTkdFRFwiXG5dO1xudmFyIE1vYlhHbG9iYWxzJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vYlhHbG9iYWxzJCQxKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9iWEdsb2JhbHMgdmVyc2lvbi5cbiAgICAgICAgICogTW9iWCBjb21wYXRpYmxpdHkgd2l0aCBvdGhlciB2ZXJzaW9ucyBsb2FkZWQgaW4gbWVtb3J5IGFzIGxvbmcgYXMgdGhpcyB2ZXJzaW9uIG1hdGNoZXMuXG4gICAgICAgICAqIEl0IGluZGljYXRlcyB0aGF0IHRoZSBnbG9iYWwgc3RhdGUgc3RpbGwgc3RvcmVzIHNpbWlsYXIgaW5mb3JtYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogTi5COiB0aGlzIHZlcnNpb24gaXMgdW5yZWxhdGVkIHRvIHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgTW9iWCwgYW5kIGlzIG9ubHkgdGhlIHZlcnNpb24gb2YgdGhlXG4gICAgICAgICAqIGludGVybmFsIHN0YXRlIHN0b3JhZ2Ugb2YgTW9iWCwgYW5kIGNhbiBiZSB0aGUgc2FtZSBhY3Jvc3MgbWFueSBkaWZmZXJlbnQgcGFja2FnZSB2ZXJzaW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gNTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdsb2JhbGx5IHVuaXF1ZSB0b2tlbiB0byBzaWduYWwgdW5jaGFuZ2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLlVOQ0hBTkdFRCA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudGx5IHJ1bm5pbmcgZGVyaXZhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIHJ1bm5pbmcgYSBjb21wdXRhdGlvbiBjdXJyZW50bHk/IChub3QgYSByZWFjdGlvbilcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcHV0YXRpb25EZXB0aCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFYWNoIHRpbWUgYSBkZXJpdmF0aW9uIGlzIHRyYWNrZWQsIGl0IGlzIGFzc2lnbmVkIGEgdW5pcXVlIHJ1bi1pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAnZ3VpZCcgZm9yIGdlbmVyYWwgcHVycG9zZS4gV2lsbCBiZSBwZXJzaXN0ZWQgYW1vbmdzdCByZXNldHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vYnhHdWlkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBpbiBhIGJhdGNoIGJsb2NrPyAoYW5kIGhvdyBtYW55IG9mIHRoZW0pXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluQmF0Y2ggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2YWJsZXMgdGhhdCBkb24ndCBoYXZlIG9ic2VydmVycyBhbnltb3JlLCBhbmQgYXJlIGFib3V0IHRvIGJlXG4gICAgICAgICAqIHN1c3BlbmRlZCwgdW5sZXNzIHNvbWVib2R5IGVsc2UgYWNjZXNzZXMgaXQgaW4gdGhlIHNhbWUgYmF0Y2hcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0lPYnNlcnZhYmxlW119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBzY2hlZHVsZWQsIG5vdCB5ZXQgZXhlY3V0ZWQsIHJlYWN0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ1JlYWN0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIGN1cnJlbnRseSBwcm9jZXNzaW5nIHJlYWN0aW9ucz9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIGNoYW5nZSBvYnNlcnZhYmxlcyBhdCB0aGlzIHBvaW50P1xuICAgICAgICAgKiBJbiBnZW5lcmFsLCBNb2JYIGRvZXNuJ3QgYWxsb3cgdGhhdCB3aGVuIHJ1bm5pbmcgY29tcHV0YXRpb25zIGFuZCBSZWFjdC5yZW5kZXIuXG4gICAgICAgICAqIFRvIGVuc3VyZSB0aGF0IHRob3NlIGZ1bmN0aW9ucyBzdGF5IHB1cmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFsbG93U3RhdGVDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHN0cmljdCBtb2RlIGlzIGVuYWJsZWQsIHN0YXRlIGNoYW5nZXMgYXJlIGJ5IGRlZmF1bHQgbm90IGFsbG93ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW5mb3JjZUFjdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNweSBjYWxsYmFja3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3B5TGlzdGVuZXJzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWxseSBhdHRhY2hlZCBlcnJvciBoYW5kbGVycyB0aGF0IHJlYWN0IHNwZWNpZmljYWxseSB0byBlcnJvcnMgaW4gcmVhY3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2FybiBpZiBjb21wdXRlZCB2YWx1ZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAvKlxuICAgICAgICAgKiBEb24ndCBjYXRjaCBhbmQgcmV0aHJvdyBleGNlcHRpb25zLiBUaGlzIGlzIHVzZWZ1bCBmb3IgaW5zcGVjdGluZyB0aGUgc3RhdGUgb2ZcbiAgICAgICAgICogdGhlIHN0YWNrIHdoZW4gYW4gZXhjZXB0aW9uIG9jY3VycyB3aGlsZSBkZWJ1Z2dpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBmYWxzZTtcbiAgICAgICAgLypcbiAgICAgICAgICogSWYgdHJ1ZSwgd2UgYXJlIGFscmVhZHkgaGFuZGxpbmcgYW4gZXhjZXB0aW9uIGluIGFuIGFjdGlvbi4gQW55IGVycm9ycyBpbiByZWFjdGlvbnMgc2hvdWxkIGJlIHN1cHJlc3NlZCwgYXNcbiAgICAgICAgICogdGhleSBhcmUgbm90IHRoZSBjYXVzZSwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE4MzZcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gTW9iWEdsb2JhbHMkJDE7XG59KCkpO1xudmFyIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSB0cnVlO1xudmFyIGlzb2xhdGVDYWxsZWQgPSBmYWxzZTtcbnZhciBnbG9iYWxTdGF0ZSQkMSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCQkMSgpO1xuICAgIGlmIChnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA+IDAgJiYgIWdsb2JhbC5fX21vYnhHbG9iYWxzKVxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XG4gICAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzICYmIGdsb2JhbC5fX21vYnhHbG9iYWxzLnZlcnNpb24gIT09IG5ldyBNb2JYR2xvYmFscyQkMSgpLnZlcnNpb24pXG4gICAgICAgIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcbiAgICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWlzb2xhdGVDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBmYWlsJCQxKFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2JYR2xvYmFscyQkMSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscykge1xuICAgICAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCArPSAxO1xuICAgICAgICBpZiAoIWdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRClcbiAgICAgICAgICAgIGdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRCA9IHt9OyAvLyBtYWtlIG1lcmdlIGJhY2t3YXJkIGNvbXBhdGlibGVcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xuICAgICAgICByZXR1cm4gKGdsb2JhbC5fX21vYnhHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzJCQxKCkpO1xuICAgIH1cbn0pKCk7XG5mdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUkJDEoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlJCQxLnBlbmRpbmdSZWFjdGlvbnMubGVuZ3RoIHx8XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmluQmF0Y2ggfHxcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuaXNSdW5uaW5nUmVhY3Rpb25zKVxuICAgICAgICBmYWlsJCQxKFwiaXNvbGF0ZUdsb2JhbFN0YXRlIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIE1vYlggaXMgcnVubmluZyBhbnkgcmVhY3Rpb25zXCIpO1xuICAgIGlzb2xhdGVDYWxsZWQgPSB0cnVlO1xuICAgIGlmIChjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XG4gICAgICAgIGlmICgtLWdldEdsb2JhbCQkMSgpLl9fbW9ieEluc3RhbmNlQ291bnQgPT09IDApXG4gICAgICAgICAgICBnZXRHbG9iYWwkJDEoKS5fX21vYnhHbG9iYWxzID0gdW5kZWZpbmVkO1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMSA9IG5ldyBNb2JYR2xvYmFscyQkMSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEdsb2JhbFN0YXRlJCQxKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZSQkMTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTsgdGhpcyB3aWxsIGJyZWFrIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBleGlzdGluZyBvYnNlcnZhYmxlcyxcbiAqIGJ1dCBjYW4gYmUgdXNlZCB0byBnZXQgYmFjayBhdCBhIHN0YWJsZSBzdGF0ZSBhZnRlciB0aHJvd2luZyBlcnJvcnNcbiAqL1xuZnVuY3Rpb24gcmVzZXRHbG9iYWxTdGF0ZSQkMSgpIHtcbiAgICB2YXIgZGVmYXVsdEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMkJDEoKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEdsb2JhbHMpXG4gICAgICAgIGlmIChwZXJzaXN0ZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUkJDFba2V5XSA9IGRlZmF1bHRHbG9iYWxzW2tleV07XG4gICAgZ2xvYmFsU3RhdGUkJDEuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUkJDEuZW5mb3JjZUFjdGlvbnM7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWwkJDEoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBnbG9iYWw7XG59XG5cbmZ1bmN0aW9uIGhhc09ic2VydmVycyQkMShvYnNlcnZhYmxlJCQxKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzICYmIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLnNpemUgPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnM7XG59XG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZTogSU9ic2VydmFibGUpIHtcbi8vICAgICBjb25zdCBsaXN0ID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNcbi8vICAgICBjb25zdCBtYXAgPSBvYnNlcnZhYmxlLm9ic2VydmVyc0luZGV4ZXNcbi8vICAgICBjb25zdCBsID0gbGlzdC5sZW5ndGhcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuLy8gICAgICAgICBjb25zdCBpZCA9IGxpc3RbaV0uX19tYXBpZFxuLy8gICAgICAgICBpZiAoaSkge1xuLy8gICAgICAgICAgICAgaW52YXJpYW50KG1hcFtpZF0gPT09IGksIFwiSU5URVJOQUwgRVJST1IgbWFwcyBkZXJpdmF0aW9uLl9fbWFwaWQgdG8gaW5kZXggaW4gbGlzdFwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudCghKGlkIGluIG1hcCksIFwiSU5URVJOQUwgRVJST1Igb2JzZXJ2ZXIgb24gaW5kZXggMCBzaG91bGRuJ3QgYmUgaGVsZCBpbiBtYXAuXCIpIC8vIGZvciBwZXJmb3JtYW5jZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGludmFyaWFudChcbi8vICAgICAgICAgbGlzdC5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXMobWFwKS5sZW5ndGggPT09IGxpc3QubGVuZ3RoIC0gMSxcbi8vICAgICAgICAgXCJJTlRFUk5BTCBFUlJPUiB0aGVyZSBpcyBubyBqdW5rIGluIG1hcFwiXG4vLyAgICAgKVxuLy8gfVxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIkJDEob2JzZXJ2YWJsZSQkMSwgbm9kZSkge1xuICAgIC8vIGludmFyaWFudChub2RlLmRlcGVuZGVuY2llc1N0YXRlICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiwgY2FuIGFkZCBvbmx5IGRlcGVuZGVuY2llc1N0YXRlICE9PSAtMVwiKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLmFkZChub2RlKTtcbiAgICBpZiAob2JzZXJ2YWJsZSQkMS5sb3dlc3RPYnNlcnZlclN0YXRlID4gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSlcbiAgICAgICAgb2JzZXJ2YWJsZSQkMS5sb3dlc3RPYnNlcnZlclN0YXRlID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XG59XG5mdW5jdGlvbiByZW1vdmVPYnNlcnZlciQkMShvYnNlcnZhYmxlJCQxLCBub2RlKSB7XG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SLCByZW1vdmUgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZVwiKTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgb2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuZGVsZXRlKG5vZGUpO1xuICAgIGlmIChvYnNlcnZhYmxlJCQxLm9ic2VydmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIC8vIGRlbGV0aW5nIGxhc3Qgb2JzZXJ2ZXJcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uJCQxKG9ic2VydmFibGUkJDEpO1xuICAgIH1cbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xufVxuZnVuY3Rpb24gcXVldWVGb3JVbm9ic2VydmF0aW9uJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICBpZiAob2JzZXJ2YWJsZSQkMS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcbiAgICAgICAgb2JzZXJ2YWJsZSQkMS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSQkMSk7XG4gICAgfVxufVxuLyoqXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxuICogRHVyaW5nIGEgYmF0Y2ggYG9uQmVjb21lVW5vYnNlcnZlZGAgd2lsbCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlIHBlciBvYnNlcnZhYmxlLlxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxuICovXG5mdW5jdGlvbiBzdGFydEJhdGNoJCQxKCkge1xuICAgIGdsb2JhbFN0YXRlJCQxLmluQmF0Y2grKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoJCQxKCkge1xuICAgIGlmICgtLWdsb2JhbFN0YXRlJCQxLmluQmF0Y2ggPT09IDApIHtcbiAgICAgICAgcnVuUmVhY3Rpb25zJCQxKCk7XG4gICAgICAgIC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG4gICAgICAgIHZhciBsaXN0ID0gZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1Vub2JzZXJ2YXRpb25zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gbGlzdFtpXTtcbiAgICAgICAgICAgIG9ic2VydmFibGUkJDEuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YWJsZSQkMS5pc0JlaW5nT2JzZXJ2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBvYnNlcnZhYmxlIGhhZCByZWFjdGl2ZSBvYnNlcnZlcnMsIHRyaWdnZXIgdGhlIGhvb2tzXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEub25CZWNvbWVVbm9ic2VydmVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlJCQxIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSQkMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb21wdXRlZCB2YWx1ZXMgYXJlIGF1dG9tYXRpY2FsbHkgdGVhcmVkIGRvd24gd2hlbiB0aGUgbGFzdCBvYnNlcnZlciBsZWF2ZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBwcm9jZXNzIGhhcHBlbnMgcmVjdXJzaXZlbHksIHRoaXMgY29tcHV0ZWQgbWlnaHQgYmUgdGhlIGxhc3Qgb2JzZXJ2YWJlIG9mIGFub3RoZXIsIGV0Yy4uXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEuc3VzcGVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXBvcnRPYnNlcnZlZCQkMShvYnNlcnZhYmxlJCQxKSB7XG4gICAgdmFyIGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgaWYgKGRlcml2YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbXBsZSBvcHRpbWl6YXRpb24sIGdpdmUgZWFjaCBkZXJpdmF0aW9uIHJ1biBhbiB1bmlxdWUgaWQgKHJ1bklkKVxuICAgICAgICAgKiBDaGVjayBpZiBsYXN0IHRpbWUgdGhpcyBvYnNlcnZhYmxlIHdhcyBhY2Nlc3NlZCB0aGUgc2FtZSBydW5JZCBpcyB1c2VkXG4gICAgICAgICAqIGlmIHRoaXMgaXMgdGhlIGNhc2UsIHRoZSByZWxhdGlvbiBpcyBhbHJlYWR5IGtub3duXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZGVyaXZhdGlvbi5ydW5JZCAhPT0gb2JzZXJ2YWJsZSQkMS5sYXN0QWNjZXNzZWRCeSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5sYXN0QWNjZXNzZWRCeSA9IGRlcml2YXRpb24ucnVuSWQ7XG4gICAgICAgICAgICAvLyBUcmllZCBzdG9yaW5nIG5ld09ic2VydmluZywgb3Igb2JzZXJ2aW5nLCBvciBib3RoIGFzIFNldCwgYnV0IHBlcmZvcm1hbmNlIGRpZG4ndCBjb21lIGNsb3NlLi4uXG4gICAgICAgICAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZ1tkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQrK10gPSBvYnNlcnZhYmxlJCQxO1xuICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlJCQxLmlzQmVpbmdPYnNlcnZlZCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUkJDEuaXNCZWluZ09ic2VydmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlJCQxLm9uQmVjb21lT2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JzZXJ2YWJsZSQkMS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCAmJiBnbG9iYWxTdGF0ZSQkMS5pbkJhdGNoID4gMCkge1xuICAgICAgICBxdWV1ZUZvclVub2JzZXJ2YXRpb24kJDEob2JzZXJ2YWJsZSQkMSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8vIGZ1bmN0aW9uIGludmFyaWFudExPUyhvYnNlcnZhYmxlOiBJT2JzZXJ2YWJsZSwgbXNnOiBzdHJpbmcpIHtcbi8vICAgICAvLyBpdCdzIGV4cGVuc2l2ZSBzbyBiZXR0ZXIgbm90IHJ1biBpdCBpbiBwcm9kdWNpdG9uLiBidXQgdGVtcG9yYXJpbHkgaGVscGZ1bCBmb3IgdGVzdGluZ1xuLy8gICAgIGNvbnN0IG1pbiA9IGdldE9ic2VydmVycyhvYnNlcnZhYmxlKS5yZWR1Y2UoKGEsIGIpID0+IE1hdGgubWluKGEsIGIuZGVwZW5kZW5jaWVzU3RhdGUpLCAyKVxuLy8gICAgIGlmIChtaW4gPj0gb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlKSByZXR1cm4gLy8gPC0gdGhlIG9ubHkgYXNzdW1wdGlvbiBhYm91dCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWBcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXG4vLyAgICAgICAgIFwibG93ZXN0T2JzZXJ2ZXJTdGF0ZSBpcyB3cm9uZyBmb3IgXCIgK1xuLy8gICAgICAgICAgICAgbXNnICtcbi8vICAgICAgICAgICAgIFwiIGJlY2F1c2UgXCIgK1xuLy8gICAgICAgICAgICAgbWluICtcbi8vICAgICAgICAgICAgIFwiIDwgXCIgK1xuLy8gICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXG4vLyAgICAgKVxuLy8gfVxuLyoqXG4gKiBOT1RFOiBjdXJyZW50IHByb3BhZ2F0aW9uIG1lY2hhbmlzbSB3aWxsIGluIGNhc2Ugb2Ygc2VsZiByZXJ1bmluZyBhdXRvcnVucyBiZWhhdmUgdW5leHBlY3RlZGx5XG4gKiBJdCB3aWxsIHByb3BhZ2F0ZSBjaGFuZ2VzIHRvIG9ic2VydmVycyBmcm9tIHByZXZpb3VzIHJ1blxuICogSXQncyBoYXJkIG9yIG1heWJlIGltcG9zc2libGUgKHdpdGggcmVhc29uYWJsZSBwZXJmKSB0byBnZXQgaXQgcmlnaHQgd2l0aCBjdXJyZW50IGFwcHJvYWNoXG4gKiBIb3BlZnVsbHkgc2VsZiByZXJ1bmluZyBhdXRvcnVucyBhcmVuJ3QgYSBmZWF0dXJlIHBlb3BsZSBzaG91bGQgZGVwZW5kIG9uXG4gKiBBbHNvIG1vc3QgYmFzaWMgdXNlIGNhc2VzIHNob3VsZCBiZSBva1xuICovXG4vLyBDYWxsZWQgYnkgQXRvbSB3aGVuIGl0cyB2YWx1ZSBjaGFuZ2VzXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VkJCQxKG9ic2VydmFibGUkJDEpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgIC8vIElkZWFsbHkgd2UgdXNlIGZvci4ub2YgaGVyZSwgYnV0IHRoZSBkb3duY29tcGlsZWQgdmVyc2lvbiBpcyByZWFsbHkgc2xvdy4uLlxuICAgIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xuICAgICAgICAgICAgaWYgKGQuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUkJDEuTk9ORSkge1xuICAgICAgICAgICAgICAgIGxvZ1RyYWNlSW5mbyhkLCBvYnNlcnZhYmxlJCQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQub25CZWNvbWVTdGFsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgIH0pO1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufVxuLy8gQ2FsbGVkIGJ5IENvbXB1dGVkVmFsdWUgd2hlbiBpdCByZWNhbGN1bGF0ZSBhbmQgaXRzIHZhbHVlIGNoYW5nZWRcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCQkMShvYnNlcnZhYmxlJCQxKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlJCQxLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgIG9ic2VydmFibGUkJDEub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUpXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICAgICAgZWxzZSBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFIC8vIHRoaXMgaGFwcGVucyBkdXJpbmcgY29tcHV0aW5nIG9mIGBkYCwganVzdCBrZWVwIGxvd2VzdE9ic2VydmVyU3RhdGUgdXAgdG8gZGF0ZS5cbiAgICAgICAgKVxuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIH0pO1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNvbmZpcm1lZCBlbmRcIik7XG59XG4vLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cbmZ1bmN0aW9uIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCQkMShvYnNlcnZhYmxlJCQxKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUkJDEubG93ZXN0T2JzZXJ2ZXJTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxuICAgICAgICByZXR1cm47XG4gICAgb2JzZXJ2YWJsZSQkMS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcbiAgICBvYnNlcnZhYmxlJCQxLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpIHtcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFO1xuICAgICAgICAgICAgaWYgKGQuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUkJDEuTk9ORSkge1xuICAgICAgICAgICAgICAgIGxvZ1RyYWNlSW5mbyhkLCBvYnNlcnZhYmxlJCQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQub25CZWNvbWVTdGFsZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgZW5kXCIpO1xufVxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUkJDEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgaXMgaW52YWxpZGF0ZWQgZHVlIHRvIGEgY2hhbmdlIGluOiAnXCIgKyBvYnNlcnZhYmxlJCQxLm5hbWUgKyBcIidcIik7XG4gICAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nID09PSBUcmFjZU1vZGUkJDEuQlJFQUspIHtcbiAgICAgICAgdmFyIGxpbmVzID0gW107XG4gICAgICAgIHByaW50RGVwVHJlZShnZXREZXBlbmRlbmN5VHJlZSQkMShkZXJpdmF0aW9uKSwgbGluZXMsIDEpO1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJ1xcblxcbllvdSBhcmUgZW50ZXJpbmcgdGhpcyBicmVhayBwb2ludCBiZWNhdXNlIGRlcml2YXRpb24gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIGlzIGJlaW5nIHRyYWNlZCBhbmQgJ1wiICsgb2JzZXJ2YWJsZSQkMS5uYW1lICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUkJDEgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGluZXMucHVzaChcIlwiICsgbmV3IEFycmF5KGRlcHRoKS5qb2luKFwiXFx0XCIpICsgdHJlZS5uYW1lKTsgLy8gTVdFOiBub3QgdGhlIGZhc3Rlc3QsIGJ1dCB0aGUgZWFzaWVzdCB3YXkgOilcbiAgICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpXG4gICAgICAgIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBwcmludERlcFRyZWUoY2hpbGQsIGxpbmVzLCBkZXB0aCArIDEpOyB9KTtcbn1cblxudmFyIFJlYWN0aW9uJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWN0aW9uJCQxKG5hbWUsIG9uSW52YWxpZGF0ZSwgZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSA9IG9uSW52YWxpZGF0ZTtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IFtdO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyYWNpbmcgPSBUcmFjZU1vZGUkJDEuTk9ORTtcbiAgICB9XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGUkJDEucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgcnVuUmVhY3Rpb25zJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgICAqL1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS5ydW5SZWFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSQkMSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUcmFja1BlbmRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3B5RW5hYmxlZCQkMSgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uSW52YWxpZGF0ZSBkaWRuJ3QgdHJpZ2dlciB0cmFjayByaWdodCBhd2F5Li5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNweVJlcG9ydCQkMSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uJCQxLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICBmYWlsJCQxKFwiUmVhY3Rpb24gYWxyZWFkeSBkaXNwb3NlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJhdGNoJCQxKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcbiAgICAgICAgaWYgKG5vdGlmeSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMSh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uJCQxKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyQkMSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24kJDEocmVzdWx0KSlcbiAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKHJlc3VsdC5jYXVzZSk7XG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoe1xuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfTtcbiAgICBSZWFjdGlvbiQkMS5wcm90b3R5cGUucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZSQkMS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXMgKyBcIidcIjtcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlJCQxLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSAoZXJyb3IgaW4gcmVhY3Rpb24gJ1wiICsgdGhpcy5uYW1lICsgXCInIHN1cHByZXNzZWQsIGZpeCBlcnJvciBvZiBjYXVzaW5nIGFjdGlvbiBiZWxvdylcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTcHlFbmFibGVkJCQxKCkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydCQkMSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiICsgZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlJCQxLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKGVycm9yLCBfdGhpcyk7IH0pO1xuICAgIH07XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoJCQxKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmckJDEodGhpcyk7XG4gICAgICAgICAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLmdldERpc3Bvc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICByWyRtb2J4JCQxXSA9IHRoaXM7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJSZWFjdGlvbltcIiArIHRoaXMubmFtZSArIFwiXVwiO1xuICAgIH07XG4gICAgUmVhY3Rpb24kJDEucHJvdG90eXBlLnRyYWNlID0gZnVuY3Rpb24gKGVudGVyQnJlYWtQb2ludCkge1xuICAgICAgICBpZiAoZW50ZXJCcmVha1BvaW50ID09PSB2b2lkIDApIHsgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7IH1cbiAgICAgICAgdHJhY2UkJDEodGhpcywgZW50ZXJCcmVha1BvaW50KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdGlvbiQkMTtcbn0oKSk7XG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IkJDEoaGFuZGxlcikge1xuICAgIGdsb2JhbFN0YXRlJCQxLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZSQkMS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUkJDEuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH07XG59XG4vKipcbiAqIE1hZ2ljIG51bWJlciBhbGVydCFcbiAqIERlZmluZXMgd2l0aGluIGhvdyBtYW55IHRpbWVzIGEgcmVhY3Rpb24gaXMgYWxsb3dlZCB0byByZS10cmlnZ2VyIGl0c2VsZlxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxuICovXG52YXIgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgPSAxMDA7XG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xuZnVuY3Rpb24gcnVuUmVhY3Rpb25zJCQxKCkge1xuICAgIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgICBpZiAoZ2xvYmFsU3RhdGUkJDEuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUkJDEuaXNSdW5uaW5nUmVhY3Rpb25zKVxuICAgICAgICByZXR1cm47XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIocnVuUmVhY3Rpb25zSGVscGVyKTtcbn1cbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcbiAgICBnbG9iYWxTdGF0ZSQkMS5pc1J1bm5pbmdSZWFjdGlvbnMgPSB0cnVlO1xuICAgIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZSQkMS5wZW5kaW5nUmVhY3Rpb25zO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAvLyBXaGlsZSBydW5uaW5nIHJlYWN0aW9ucywgbmV3IHJlYWN0aW9ucyBtaWdodCBiZSB0cmlnZ2VyZWQuXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG4gICAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArXG4gICAgICAgICAgICAgICAgKFwiIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXSkpO1xuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbigpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZSQkMS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cbnZhciBpc1JlYWN0aW9uJCQxID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uJCQxKTtcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyJCQxKGZuKSB7XG4gICAgdmFyIGJhc2VTY2hlZHVsZXIgPSByZWFjdGlvblNjaGVkdWxlcjtcbiAgICByZWFjdGlvblNjaGVkdWxlciA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmbihmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlU2NoZWR1bGVyKGYpOyB9KTsgfTtcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkJCQxKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgISFnbG9iYWxTdGF0ZSQkMS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0JCQxKGV2ZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuOyAvLyBkZWFkIGNvZGUgZWxpbWluYXRpb24gY2FuIGRvIHRoZSByZXN0XG4gICAgaWYgKCFnbG9iYWxTdGF0ZSQkMS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlJCQxLnNweUxpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydCQkMShldmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgY2hhbmdlID0gX19hc3NpZ24oe30sIGV2ZW50LCB7IHNweVJlcG9ydFN0YXJ0OiB0cnVlIH0pO1xuICAgIHNweVJlcG9ydCQkMShjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHsgc3B5UmVwb3J0RW5kOiB0cnVlIH07XG5mdW5jdGlvbiBzcHlSZXBvcnRFbmQkJDEoY2hhbmdlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChjaGFuZ2UpXG4gICAgICAgIHNweVJlcG9ydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9KSk7XG4gICAgZWxzZVxuICAgICAgICBzcHlSZXBvcnQkJDEoRU5EX0VWRU5UKTtcbn1cbmZ1bmN0aW9uIHNweSQkMShsaXN0ZW5lcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gb25jZSQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZSQkMS5zcHlMaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZSQkMS5zcHlMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9udFJlYXNzaWduRmllbGRzKCkge1xuICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQGFjdGlvbiBmaWVsZHMgYXJlIG5vdCByZWFzc2lnbmFibGVcIik7XG59XG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvciQkMShuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKFwiQGFjdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIGdldHRlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBiYWJlbCAvIHR5cGVzY3JpcHRcbiAgICAgICAgICAgIC8vIEBhY3Rpb24gbWV0aG9kKCkgeyB9XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHR5cGVzY3JpcHRcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3JlYXRlQWN0aW9uJCQxKG5hbWUsIGRlc2NyaXB0b3IudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSAvLyBmb3IgdHlwZXNjcmlwdCwgdGhpcyBtdXN0IGJlIHdyaXRhYmxlLCBvdGhlcndpc2UgaXQgY2Fubm90IGluaGVyaXQgOi8gKHNlZSBpbmhlcml0YWJsZSBhY3Rpb25zIHRlc3QpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJhYmVsIG9ubHk6IEBhY3Rpb24gbWV0aG9kID0gKCkgPT4ge31cbiAgICAgICAgICAgIHZhciBpbml0aWFsaXplcl8xID0gZGVzY3JpcHRvci5pbml0aWFsaXplcjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE4uQjogd2UgY2FuJ3QgaW1tZWRpYXRlbHkgaW52b2tlIGluaXRpYWxpemVyOyB0aGlzIHdvdWxkIGJlIHdyb25nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24kJDEobmFtZSwgaW5pdGlhbGl6ZXJfMS5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGJvdW5kIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yJCQxKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjdGlvbkZpZWxkRGVjb3JhdG9yJCQxKG5hbWUpIHtcbiAgICAvLyBTaW1wbGUgcHJvcGVydHkgdGhhdCB3cml0ZXMgb24gZmlyc3QgaW52b2NhdGlvbiB0byB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AkJDEodGhpcywgcHJvcCwgYWN0aW9uJCQxKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBib3VuZEFjdGlvbkRlY29yYXRvciQkMSh0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgYXBwbHlUb0luc3RhbmNlKSB7XG4gICAgaWYgKGFwcGx5VG9JbnN0YW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbiQkMSh0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAvLyBpZiAoZGVzY3JpcHRvci52YWx1ZSlcbiAgICAgICAgLy8gVHlwZXNjcmlwdCAvIEJhYmVsOiBAYWN0aW9uLmJvdW5kIG1ldGhvZCgpIHsgfVxuICAgICAgICAvLyBhbHNvOiBiYWJlbCBAYWN0aW9uLmJvdW5kIG1ldGhvZCA9ICgpID0+IHt9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uJCQxKHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBkb250UmVhc3NpZ25GaWVsZHNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmllbGQgZGVjb3JhdG9yIFR5cGVzY3JpcHQgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxuICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uJCQxKHRoaXMsIHByb3BlcnR5TmFtZSwgdik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciBhY3Rpb24kJDEgPSBmdW5jdGlvbiBhY3Rpb24kJDEoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24kJDEoYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcbiAgICAvLyBhY3Rpb24oXCJuYW1lXCIsIGZuKCkge30pXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZzIgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbiQkMShhcmcxLCBhcmcyKTtcbiAgICAvLyBAYWN0aW9uKFwibmFtZVwiKSBmbigpIHt9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBuYW1lZEFjdGlvbkRlY29yYXRvciQkMShhcmcxKTtcbiAgICAvLyBAYWN0aW9uIGZuKCkge31cbiAgICBpZiAoYXJnNCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBhcHBseSB0byBpbnN0YW5jZSBpbW1lZGlhdGVseVxuICAgICAgICBhZGRIaWRkZW5Qcm9wJCQxKGFyZzEsIGFyZzIsIGNyZWF0ZUFjdGlvbiQkMShhcmcxLm5hbWUgfHwgYXJnMiwgYXJnMy52YWx1ZSwgdGhpcykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yJCQxKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcbmFjdGlvbiQkMS5ib3VuZCA9IGJvdW5kQWN0aW9uRGVjb3JhdG9yJCQxO1xuZnVuY3Rpb24gcnVuSW5BY3Rpb24kJDEoYXJnMSwgYXJnMikge1xuICAgIHZhciBhY3Rpb25OYW1lID0gdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIgPyBhcmcxIDogYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuICAgIHZhciBmbiA9IHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIgPyBhcmcxIDogYXJnMjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCQkMSh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiAmJiBmbi5sZW5ndGggPT09IDAsIFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb24gd2l0aG91dCBhcmd1bWVudHNcIik7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcbiAgICAgICAgICAgIGZhaWwkJDEoXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgfVxuICAgIHJldHVybiBleGVjdXRlQWN0aW9uJCQxKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24kJDEodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpbmcuaXNNb2J4QWN0aW9uID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZGVmaW5lQm91bmRBY3Rpb24kJDEodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGZuKSB7XG4gICAgYWRkSGlkZGVuUHJvcCQkMSh0YXJnZXQsIHByb3BlcnR5TmFtZSwgY3JlYXRlQWN0aW9uJCQxKHByb3BlcnR5TmFtZSwgZm4uYmluZCh0YXJnZXQpKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5hbWVkIHJlYWN0aXZlIHZpZXcgYW5kIGtlZXBzIGl0IGFsaXZlLCBzbyB0aGF0IHRoZSB2aWV3IGlzIGFsd2F5c1xuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cbiAqIEBwYXJhbSB2aWV3IFRoZSByZWFjdGl2ZSB2aWV3XG4gKiBAcmV0dXJucyBkaXNwb3NlciBmdW5jdGlvbiwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3RvcCB0aGUgdmlldyBmcm9tIGJlaW5nIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAqL1xuZnVuY3Rpb24gYXV0b3J1biQkMSh2aWV3LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUJCQxOyB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIHZpZXcgPT09IFwiZnVuY3Rpb25cIiwgXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICAgICAgaW52YXJpYW50JCQxKGlzQWN0aW9uJCQxKHZpZXcpID09PSBmYWxzZSwgXCJBdXRvcnVuIGRvZXMgbm90IGFjY2VwdCBhY3Rpb25zIHNpbmNlIGFjdGlvbnMgYXJlIHVudHJhY2thYmxlXCIpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IChvcHRzICYmIG9wdHMubmFtZSkgfHwgdmlldy5uYW1lIHx8IFwiQXV0b3J1bkBcIiArIGdldE5leHRJZCQkMSgpO1xuICAgIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICAgIHZhciByZWFjdGlvbiQkMTtcbiAgICBpZiAocnVuU3luYykge1xuICAgICAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgICAgICByZWFjdGlvbiQkMSA9IG5ldyBSZWFjdGlvbiQkMShuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgfSwgb3B0cy5vbkVycm9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBzY2hlZHVsZXJfMSA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpO1xuICAgICAgICAvLyBkZWJvdW5jZWQgYXV0b3J1blxuICAgICAgICB2YXIgaXNTY2hlZHVsZWRfMSA9IGZhbHNlO1xuICAgICAgICByZWFjdGlvbiQkMSA9IG5ldyBSZWFjdGlvbiQkMShuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWlzU2NoZWR1bGVkXzEpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJfMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2NoZWR1bGVkXzEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWFjdGlvbiQkMS5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Rpb24kJDEudHJhY2socmVhY3Rpb25SdW5uZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvcHRzLm9uRXJyb3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICAgICAgdmlldyhyZWFjdGlvbiQkMSk7XG4gICAgfVxuICAgIHJlYWN0aW9uJCQxLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHJlYWN0aW9uJCQxLmdldERpc3Bvc2VyKCk7XG59XG52YXIgcnVuID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpIHtcbiAgICByZXR1cm4gb3B0cy5zY2hlZHVsZXJcbiAgICAgICAgPyBvcHRzLnNjaGVkdWxlclxuICAgICAgICA6IG9wdHMuZGVsYXlcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHNldFRpbWVvdXQoZiwgb3B0cy5kZWxheSk7IH1cbiAgICAgICAgICAgIDogcnVuO1xufVxuZnVuY3Rpb24gcmVhY3Rpb24kJDEoZXhwcmVzc2lvbiwgZWZmZWN0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUJCQxOyB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIiwgXCJGaXJzdCBhcmd1bWVudCB0byByZWFjdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgaW52YXJpYW50JCQxKHR5cGVvZiBvcHRzID09PSBcIm9iamVjdFwiLCBcIlRoaXJkIGFyZ3VtZW50IG9mIHJlYWN0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IG9wdHMubmFtZSB8fCBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkJCQxKCk7XG4gICAgdmFyIGVmZmVjdEFjdGlvbiA9IGFjdGlvbiQkMShuYW1lLCBvcHRzLm9uRXJyb3IgPyB3cmFwRXJyb3JIYW5kbGVyKG9wdHMub25FcnJvciwgZWZmZWN0KSA6IGVmZmVjdCk7XG4gICAgdmFyIHJ1blN5bmMgPSAhb3B0cy5zY2hlZHVsZXIgJiYgIW9wdHMuZGVsYXk7XG4gICAgdmFyIHNjaGVkdWxlciA9IGNyZWF0ZVNjaGVkdWxlckZyb21PcHRpb25zKG9wdHMpO1xuICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICAgIHZhciBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgZXF1YWxzID0gb3B0cy5jb21wYXJlU3RydWN0dXJhbFxuICAgICAgICA/IGNvbXBhcmVyJCQxLnN0cnVjdHVyYWxcbiAgICAgICAgOiBvcHRzLmVxdWFscyB8fCBjb21wYXJlciQkMS5kZWZhdWx0O1xuICAgIHZhciByID0gbmV3IFJlYWN0aW9uJCQxKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZpcnN0VGltZSB8fCBydW5TeW5jKSB7XG4gICAgICAgICAgICByZWFjdGlvblJ1bm5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgaXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2NoZWR1bGVyKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgfVxuICAgIH0sIG9wdHMub25FcnJvcik7XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7IC8vIFE6IG1vdmUgaW50byByZWFjdGlvbiBydW5uZXI/XG4gICAgICAgIGlmIChyLmlzRGlzcG9zZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGV4cHJlc3Npb24ocik7XG4gICAgICAgICAgICBjaGFuZ2VkID0gZmlyc3RUaW1lIHx8ICFlcXVhbHModmFsdWUsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIHIpO1xuICAgICAgICBpZiAoIWZpcnN0VGltZSAmJiBjaGFuZ2VkID09PSB0cnVlKVxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCByKTtcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgIH1cbiAgICByLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHIuZ2V0RGlzcG9zZXIoKTtcbn1cbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQkJDEodGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0SG9vayhcIm9uQmVjb21lT2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkJCQxKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soXCJvbkJlY29tZVVub2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0SG9vayhob29rLCB0aGluZywgYXJnMiwgYXJnMykge1xuICAgIHZhciBhdG9tID0gdHlwZW9mIGFyZzIgPT09IFwic3RyaW5nXCIgPyBnZXRBdG9tJCQxKHRoaW5nLCBhcmcyKSA6IGdldEF0b20kJDEodGhpbmcpO1xuICAgIHZhciBjYiA9IHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiID8gYXJnMyA6IGFyZzI7XG4gICAgdmFyIGxpc3RlbmVyc0tleSA9IGhvb2sgKyBcIkxpc3RlbmVyc1wiO1xuICAgIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcbiAgICAgICAgYXRvbVtsaXN0ZW5lcnNLZXldLmFkZChjYik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdG9tW2xpc3RlbmVyc0tleV0gPSBuZXcgU2V0KFtjYl0pO1xuICAgIH1cbiAgICB2YXIgb3JpZyA9IGF0b21baG9va107XG4gICAgaWYgKHR5cGVvZiBvcmlnICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIk5vdCBhbiBhdG9tIHRoYXQgY2FuIGJlICh1bilvYnNlcnZlZFwiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaG9va0xpc3RlbmVycyA9IGF0b21bbGlzdGVuZXJzS2V5XTtcbiAgICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhvb2tMaXN0ZW5lcnMuZGVsZXRlKGNiKTtcbiAgICAgICAgICAgIGlmIChob29rTGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlJCQxKG9wdGlvbnMpIHtcbiAgICB2YXIgZW5mb3JjZUFjdGlvbnMgPSBvcHRpb25zLmVuZm9yY2VBY3Rpb25zLCBjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBvcHRpb25zLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiwgZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IG9wdGlvbnMuZGlzYWJsZUVycm9yQm91bmRhcmllcywgcmVhY3Rpb25TY2hlZHVsZXIgPSBvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyO1xuICAgIGlmIChvcHRpb25zLmlzb2xhdGVHbG9iYWxTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpc29sYXRlR2xvYmFsU3RhdGUkJDEoKTtcbiAgICB9XG4gICAgaWYgKGVuZm9yY2VBY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmZvcmNlQWN0aW9ucyA9PT0gXCJib29sZWFuXCIgfHwgZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpXG4gICAgICAgICAgICBkZXByZWNhdGVkJCQxKFwiRGVwcmVjYXRlZCB2YWx1ZSBmb3IgJ2VuZm9yY2VBY3Rpb25zJywgdXNlICdmYWxzZScgPT4gJ1xcXCJuZXZlclxcXCInLCAndHJ1ZScgPT4gJ1xcXCJvYnNlcnZlZFxcXCInLCAnXFxcInN0cmljdFxcXCInID0+IFxcXCInYWx3YXlzJ1xcXCIgaW5zdGVhZFwiKTtcbiAgICAgICAgdmFyIGVhID0gdm9pZCAwO1xuICAgICAgICBzd2l0Y2ggKGVuZm9yY2VBY3Rpb25zKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICBjYXNlIFwib2JzZXJ2ZWRcIjpcbiAgICAgICAgICAgICAgICBlYSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgY2FzZSBcIm5ldmVyXCI6XG4gICAgICAgICAgICAgICAgZWEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpY3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCJhbHdheXNcIjpcbiAgICAgICAgICAgICAgICBlYSA9IFwic3RyaWN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJJbnZhbGlkIHZhbHVlIGZvciAnZW5mb3JjZUFjdGlvbnMnOiAnXCIgKyBlbmZvcmNlQWN0aW9ucyArIFwiJywgZXhwZWN0ZWQgJ25ldmVyJywgJ2Fsd2F5cycgb3IgJ29ic2VydmVkJ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5lbmZvcmNlQWN0aW9ucyA9IGVhO1xuICAgICAgICBnbG9iYWxTdGF0ZSQkMS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBcInN0cmljdFwiID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gISFjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb247XG4gICAgfVxuICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBEZWJ1ZyBmZWF0dXJlIG9ubHkuIE1vYlggd2lsbCBOT1QgcmVjb3ZlciBmcm9tIGVycm9ycyB3aGVuIGBkaXNhYmxlRXJyb3JCb3VuZGFyaWVzYCBpcyBlbmFibGVkLlwiKTtcbiAgICAgICAgZ2xvYmFsU3RhdGUkJDEuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9ICEhZGlzYWJsZUVycm9yQm91bmRhcmllcztcbiAgICB9XG4gICAgaWYgKHJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyJCQxKHJlYWN0aW9uU2NoZWR1bGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlJCQxKHRoaW5nLCBkZWNvcmF0b3JzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGludmFyaWFudCQkMShpc1BsYWluT2JqZWN0JCQxKGRlY29yYXRvcnMpLCBcIkRlY29yYXRvcnMgc2hvdWxkIGJlIGEga2V5IHZhbHVlIG1hcFwiKTtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgPyB0aGluZy5wcm90b3R5cGUgOiB0aGluZztcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlY29yYXRvcnMgPSBkZWNvcmF0b3JzW3Byb3BdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcGVydHlEZWNvcmF0b3JzKSkge1xuICAgICAgICAgICAgcHJvcGVydHlEZWNvcmF0b3JzID0gW3Byb3BlcnR5RGVjb3JhdG9yc107XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBpbnZhcmlhbnQkJDEocHJvcGVydHlEZWNvcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChkZWNvcmF0b3IpIHsgcmV0dXJuIHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIjsgfSksIFwiRGVjb3JhdGU6IGV4cGVjdGVkIGEgZGVjb3JhdG9yIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGRlY29yYXRvciBmdW5jdGlvbnMgZm9yICdcIiArIHByb3AgKyBcIidcIik7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHByb3BlcnR5RGVjb3JhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGFjY0Rlc2NyaXB0b3IsIGRlY29yYXRvcikgeyByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcCwgYWNjRGVzY3JpcHRvcik7IH0sIGRlc2NyaXB0b3IpO1xuICAgICAgICBpZiAobmV3RGVzY3JpcHRvcilcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIG5ld0Rlc2NyaXB0b3IpO1xuICAgIH07XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkZWNvcmF0b3JzKSB7XG4gICAgICAgIF9sb29wXzEocHJvcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZSQkMSh0YXJnZXQsIHByb3BlcnRpZXMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCQkMShhcmd1bWVudHMubGVuZ3RoID49IDIgJiYgYXJndW1lbnRzLmxlbmd0aCA8PSA0LCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpO1xuICAgICAgICBpbnZhcmlhbnQkJDEodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiwgXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0cyBhbiBvYmplY3QgYXMgZmlyc3QgYXJndW1lbnRcIik7XG4gICAgICAgIGludmFyaWFudCQkMSghaXNPYnNlcnZhYmxlTWFwJCQxKHRhcmdldCksIFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zJCQxKG9wdGlvbnMpO1xuICAgIHZhciBkZWZhdWx0RGVjb3JhdG9yID0gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zJCQxKG9wdGlvbnMpO1xuICAgIGluaXRpYWxpemVJbnN0YW5jZSQkMSh0YXJnZXQpOyAvLyBGaXhlcyAjMTc0MFxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCQkMSh0YXJnZXQsIG9wdGlvbnMubmFtZSwgZGVmYXVsdERlY29yYXRvci5lbmhhbmNlcik7IC8vIG1ha2Ugc3VyZSBvYmplY3QgaXMgb2JzZXJ2YWJsZSwgZXZlbiB3aXRob3V0IGluaXRpYWwgcHJvcHNcbiAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzJCQxKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyQkMShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvciB8fCAob3B0aW9ucy5kZWVwID09PSBmYWxzZSA/IHJlZkRlY29yYXRvciQkMSA6IGRlZXBEZWNvcmF0b3IkJDEpO1xufVxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzJCQxKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50JCQxKCFpc09ic2VydmFibGUkJDEocHJvcGVydGllcyksIFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIik7XG4gICAgICAgIGlmIChkZWNvcmF0b3JzKVxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlY29yYXRvcnMpXG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIHByb3BlcnRpZXMpKVxuICAgICAgICAgICAgICAgICAgICBmYWlsJCQxKFwiVHJ5aW5nIHRvIGRlY2xhcmUgYSBkZWNvcmF0b3IgZm9yIHVuc3BlY2lmaWVkIHByb3BlcnR5ICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICB9XG4gICAgc3RhcnRCYXRjaCQkMSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcGVydGllcywga2V5KTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGZhaWwkJDEoXCInZXh0ZW5kT2JzZXJ2YWJsZScgY2FuIG9ubHkgYmUgdXNlZCB0byBpbnRyb2R1Y2UgbmV3IHByb3BlcnRpZXMuIFVzZSAnc2V0JyBvciAnZGVjb3JhdGUnIGluc3RlYWQuIFRoZSBwcm9wZXJ0eSAnXCIgKyBrZXkgKyBcIicgYWxyZWFkeSBleGlzdHMgb24gJ1wiICsgdGFyZ2V0ICsgXCInXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkJCQxKGRlc2NyaXB0b3IudmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICBmYWlsJCQxKFwiUGFzc2luZyBhICdjb21wdXRlZCcgYXMgaW5pdGlhbCBwcm9wZXJ0eSB2YWx1ZSBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGJ5IGV4dGVuZE9ic2VydmFibGUuIFVzZSBhIGdldHRlciBvciBkZWNvcmF0b3IgaW5zdGVhZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzICYmIGtleSBpbiBkZWNvcmF0b3JzXG4gICAgICAgICAgICAgICAgPyBkZWNvcmF0b3JzW2tleV1cbiAgICAgICAgICAgICAgICA6IGRlc2NyaXB0b3IuZ2V0XG4gICAgICAgICAgICAgICAgICAgID8gY29tcHV0ZWREZWNvcmF0b3IkJDFcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0RGVjb3JhdG9yO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgZGVjb3JhdG9yICE9PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgZmFpbCQkMShcIk5vdCBhIHZhbGlkIGRlY29yYXRvciBmb3IgJ1wiICsga2V5ICsgXCInLCBnb3Q6IFwiICsgZGVjb3JhdG9yKTtcbiAgICAgICAgICAgIHZhciByZXN1bHREZXNjcmlwdG9yID0gZGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHREZXNjcmlwdG9yIC8vIG90aGVyd2lzZSwgYXNzdW1lIGFscmVhZHkgYXBwbGllZCwgZHVlIHRvIGBhcHBseVRvSW5zdGFuY2VgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHREZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlJCQxKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBub2RlVG9EZXBlbmRlbmN5VHJlZShnZXRBdG9tJCQxKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvRGVwZW5kZW5jeVRyZWUobm9kZSkge1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZVxuICAgIH07XG4gICAgaWYgKG5vZGUub2JzZXJ2aW5nICYmIG5vZGUub2JzZXJ2aW5nLmxlbmd0aCA+IDApXG4gICAgICAgIHJlc3VsdC5kZXBlbmRlbmNpZXMgPSB1bmlxdWUkJDEobm9kZS5vYnNlcnZpbmcpLm1hcChub2RlVG9EZXBlbmRlbmN5VHJlZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyVHJlZSQkMSh0aGluZywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbm9kZVRvT2JzZXJ2ZXJUcmVlKGdldEF0b20kJDEodGhpbmcsIHByb3BlcnR5KSk7XG59XG5mdW5jdGlvbiBub2RlVG9PYnNlcnZlclRyZWUobm9kZSkge1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZVxuICAgIH07XG4gICAgaWYgKGhhc09ic2VydmVycyQkMShub2RlKSlcbiAgICAgICAgcmVzdWx0Lm9ic2VydmVycyA9IEFycmF5LmZyb20oZ2V0T2JzZXJ2ZXJzJCQxKG5vZGUpKS5tYXAobm9kZVRvT2JzZXJ2ZXJUcmVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgZ2VuZXJhdG9ySWQgPSAwO1xuZnVuY3Rpb24gZmxvdyQkMShnZW5lcmF0b3IpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSlcbiAgICAgICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBcIkZsb3cgZXhwZWN0cyBvbmUgMSBhcmd1bWVudCBhbmQgY2Fubm90IGJlIHVzZWQgYXMgZGVjb3JhdG9yXCIpO1xuICAgIHZhciBuYW1lID0gZ2VuZXJhdG9yLm5hbWUgfHwgXCI8dW5uYW1lZCBmbG93PlwiO1xuICAgIC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcbiAgICAgICAgdmFyIGdlbiA9IGFjdGlvbiQkMShuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gaW5pdFwiLCBnZW5lcmF0b3IpLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgICAgIHZhciByZWplY3RvcjtcbiAgICAgICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdGVwSWQgPSAwO1xuICAgICAgICAgICAgcmVqZWN0b3IgPSByZWplY3Q7XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXMpIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbiQkMShuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLm5leHQpLmNhbGwoZ2VuLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciByZXQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uJCQxKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4udGhyb3cpLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgdHlwZW9mIHJldC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW4gYXN5bmMgaXRlcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkZ1bGZpbGxlZCh1bmRlZmluZWQpOyAvLyBraWNrIG9mZiB0aGUgcHJvY2Vzc1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24kJDEobmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsUHJvbWlzZShwZW5kaW5nUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgLy8gRmluYWxseSBibG9jayBjYW4gcmV0dXJuIChvciB5aWVsZCkgc3R1ZmYuLlxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBnZW4ucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG4gICAgICAgICAgICAgICAgdmFyIHlpZWxkZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wJCQxLCBub29wJCQxKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKTsgLy8gbWF5YmUgaXQgY2FuIGJlIGNhbmNlbGxlZCA6KVxuICAgICAgICAgICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHJlamVjdG9yKG5ldyBFcnJvcihcIkZMT1dfQ0FOQ0VMTEVEXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0b3IoZSk7IC8vIHRoZXJlIGNvdWxkIGJlIGEgdGhyb3dpbmcgZmluYWxseSBibG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICAgIGlmICh0eXBlb2YgcHJvbWlzZS5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHMkJDEodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICB2YXIgdGFyZ2V0O1xuICAgIGlmIChpc09ic2VydmFibGVNYXAkJDEodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5JCQxKHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSQkMSh0aGluZykpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24kJDEodGhpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodGhpbmcpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcE9ySGFuZGxlciAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xuICAgIHRhcmdldC5kZWhhbmNlciA9IHR5cGVvZiBwcm9wT3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wT3JIYW5kbGVyIDogaGFuZGxlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0YXJnZXQuZGVoYW5jZXIgPSB1bmRlZmluZWQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0JCQxKHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uJCQxKHRoaW5nKS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24kJDEodGhpbmcsIHByb3BlcnR5KS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkJCQxKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh2YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXZhbHVlWyRtb2J4JCQxXS52YWx1ZXMuaGFzKHByb3BlcnR5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGF0b20gPSBnZXRBdG9tJCQxKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUkJDEoYXRvbSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUkJDEodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZCQkMSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQkJDEodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZFByb3AkJDEodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQkJDEodmFsdWUsIHByb3BOYW1lKTtcbn1cblxuZnVuY3Rpb24gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIChpc09ic2VydmFibGVNYXAkJDEodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5JCQxKHZhbHVlKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFpbCQkMShcImlzT2JzZXJ2YWJsZShvYmplY3QsIHByb3BlcnR5TmFtZSkgaXMgbm90IHN1cHBvcnRlZCBmb3IgYXJyYXlzIGFuZCBtYXBzLiBVc2UgbWFwLmhhcyBvciBhcnJheS5sZW5ndGggaW5zdGVhZC5cIik7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVbJG1vYngkJDFdLnZhbHVlcy5oYXMocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxuICAgIHJldHVybiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKHZhbHVlKSB8fFxuICAgICAgICAhIXZhbHVlWyRtb2J4JCQxXSB8fFxuICAgICAgICBpc0F0b20kJDEodmFsdWUpIHx8XG4gICAgICAgIGlzUmVhY3Rpb24kJDEodmFsdWUpIHx8XG4gICAgICAgIGlzQ29tcHV0ZWRWYWx1ZSQkMSh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlJCQxKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZVByb3AkJDEodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBrZXlzJCQxKG9iaikge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqWyRtb2J4JCQxXS5nZXRLZXlzKCk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHZhbHVlcyQkMShvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqLmdldChrZXkpOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai52YWx1ZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gZW50cmllcyQkMShvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMkJDEob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqW2tleV1dOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBrZXlzJCQxKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIG9iai5nZXQoa2V5KV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7IHJldHVybiBbaW5kZXgsIGtleV07IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gc2V0JCQxKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgdmFyIHZhbHVlc18xID0ga2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5XzEgaW4gdmFsdWVzXzEpXG4gICAgICAgICAgICAgICAgc2V0JCQxKG9iaiwga2V5XzEsIHZhbHVlc18xW2tleV8xXSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBlbmRCYXRjaCQkMSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMShvYmopKSB7XG4gICAgICAgIHZhciBhZG0gPSBvYmpbJG1vYngkJDFdO1xuICAgICAgICB2YXIgZXhpc3RpbmdPYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgYWRtLndyaXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRtLmFkZE9ic2VydmFibGVQcm9wKGtleSwgdmFsdWUsIGFkbS5kZWZhdWx0RW5oYW5jZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvYmopKSB7XG4gICAgICAgIG9iai5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICAgICAgaW52YXJpYW50JCQxKGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHN0YXJ0QmF0Y2gkJDEoKTtcbiAgICAgICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKVxuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDE7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZSQkMShvYmosIGtleSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEob2JqKSkge1xuICAgICAgICBcbiAgICAgICAgb2JqWyRtb2J4JCQxXS5yZW1vdmUoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwJCQxKG9iaikpIHtcbiAgICAgICAgb2JqLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQkJDEob2JqKSkge1xuICAgICAgICBvYmouZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICAgICAgaW52YXJpYW50JCQxKGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIG9iai5zcGxpY2Uoa2V5LCAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCIncmVtb3ZlKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFzJCQxKG9iaiwga2V5KSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCQkMShvYmopKSB7XG4gICAgICAgIC8vIHJldHVybiBrZXlzKG9iaikuaW5kZXhPZihrZXkpID49IDBcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbWluaXN0cmF0aW9uJCQxKG9iaik7XG4gICAgICAgIHJldHVybiBhZG0uaGFzKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouaGFzKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldCQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouaGFzKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleSA+PSAwICYmIGtleSA8IG9iai5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ2hhcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldCQkMShvYmosIGtleSkge1xuICAgIGlmICghaGFzJCQxKG9iaiwga2V5KSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0JCQxKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAkJDEob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLmdldChrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheSQkMShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCInZ2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlJCQxKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmICh0eXBlb2YgY2JPckZpcmUgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlKTtcbn1cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uJCQxKHRoaW5nKS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24kJDEodGhpbmcsIHByb3BlcnR5KS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZGV0ZWN0Q3ljbGVzOiB0cnVlLFxuICAgIGV4cG9ydE1hcHNBc09iamVjdHM6IHRydWUsXG4gICAgcmVjdXJzZUV2ZXJ5dGhpbmc6IGZhbHNlXG59O1xuZnVuY3Rpb24gY2FjaGUobWFwLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZGV0ZWN0Q3ljbGVzKVxuICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSB7XG4gICAgaWYgKCFvcHRpb25zLnJlY3Vyc2VFdmVyeXRoaW5nICYmICFpc09ic2VydmFibGUkJDEoc291cmNlKSlcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAvLyBEaXJlY3RseSByZXR1cm4gbnVsbCBpZiBzb3VyY2UgaXMgbnVsbFxuICAgIGlmIChzb3VyY2UgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vIERpcmVjdGx5IHJldHVybiB0aGUgRGF0ZSBvYmplY3QgaXRzZWxmIGlmIGNvbnRhaW5lZCBpbiB0aGUgb2JzZXJ2YWJsZVxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIGlmIChpc09ic2VydmFibGVWYWx1ZSQkMShzb3VyY2UpKVxuICAgICAgICByZXR1cm4gdG9KU0hlbHBlcihzb3VyY2UuZ2V0KCksIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmFjayB0aGUga2V5cyBvZiB0aGUgb2JqZWN0XG4gICAgaWYgKGlzT2JzZXJ2YWJsZSQkMShzb3VyY2UpKVxuICAgICAgICBrZXlzJCQxKHNvdXJjZSk7XG4gICAgdmFyIGRldGVjdEN5Y2xlcyA9IG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB0cnVlO1xuICAgIGlmIChkZXRlY3RDeWNsZXMgJiYgc291cmNlICE9PSBudWxsICYmIF9fYWxyZWFkeVNlZW4uaGFzKHNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIF9fYWxyZWFkeVNlZW4uZ2V0KHNvdXJjZSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheSQkMShzb3VyY2UpIHx8IEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICB2YXIgcmVzXzEgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIFtdLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIHRvQWRkID0gc291cmNlLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pOyB9KTtcbiAgICAgICAgcmVzXzEubGVuZ3RoID0gdG9BZGQubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRvQWRkLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIHJlc18xW2ldID0gdG9BZGRbaV07XG4gICAgICAgIHJldHVybiByZXNfMTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldCQkMShzb3VyY2UpIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpID09PSBTZXQucHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cG9ydE1hcHNBc09iamVjdHMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgcmVzXzIgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXNfMi5hZGQodG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzXzMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIFtdLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc18zLnB1c2godG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShzb3VyY2UpIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpID09PSBNYXAucHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4cG9ydE1hcHNBc09iamVjdHMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgcmVzXzQgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBNYXAoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHJlc180LnNldChrZXksIHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc180O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc181ID0gY2FjaGUoX19hbHJlYWR5U2Vlbiwgc291cmNlLCB7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHJlc181W2tleV0gPSB0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc181O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZhbGxiYWNrIHRvIHRoZSBzaXR1YXRpb24gdGhhdCBzb3VyY2UgaXMgYW4gT2JzZXJ2YWJsZU9iamVjdCBvciBhIHBsYWluIG9iamVjdFxuICAgIHZhciByZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHJlc1trZXldID0gdG9KU0hlbHBlcihzb3VyY2Vba2V5XSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB0b0pTJCQxKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICBvcHRpb25zID0geyBkZXRlY3RDeWNsZXM6IG9wdGlvbnMgfTtcbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9XG4gICAgICAgIG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyA9PT0gdHJ1ZVxuICAgICAgICAgICAgOiBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcbiAgICB2YXIgX19hbHJlYWR5U2VlbjtcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXG4gICAgICAgIF9fYWxyZWFkeVNlZW4gPSBuZXcgTWFwKCk7XG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcbn1cblxuZnVuY3Rpb24gdHJhY2UkJDEoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIGVudGVyQnJlYWtQb2ludCA9IGFyZ3MucG9wKCk7XG4gICAgdmFyIGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncyk7XG4gICAgaWYgKCFkZXJpdmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XG4gICAgfVxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlJCQxLk5PTkUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIHRyYWNpbmcgZW5hYmxlZFwiKTtcbiAgICB9XG4gICAgZGVyaXZhdGlvbi5pc1RyYWNpbmcgPSBlbnRlckJyZWFrUG9pbnQgPyBUcmFjZU1vZGUkJDEuQlJFQUsgOiBUcmFjZU1vZGUkJDEuTE9HO1xufVxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZSQkMS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tJCQxKGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbSQkMShhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cbiAqXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxuICovXG5mdW5jdGlvbiB0cmFuc2FjdGlvbiQkMShhY3Rpb24kJDEsIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7IHRoaXNBcmcgPSB1bmRlZmluZWQ7IH1cbiAgICBzdGFydEJhdGNoJCQxKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbiQkMS5hcHBseSh0aGlzQXJnKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoJCQxKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGVuJCQxKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IChhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XG4gICAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSk7XG59XG5mdW5jdGlvbiBfd2hlbihwcmVkaWNhdGUsIGVmZmVjdCwgb3B0cykge1xuICAgIHZhciB0aW1lb3V0SGFuZGxlO1xuICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZGlzcG9zZXJbJG1vYngkJDFdLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICBvcHRzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgfVxuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBcIldoZW5AXCIgKyBnZXROZXh0SWQkJDEoKTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uJCQxKG9wdHMubmFtZSArIFwiLWVmZmVjdFwiLCBlZmZlY3QpO1xuICAgIHZhciBkaXNwb3NlciA9IGF1dG9ydW4kJDEoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZSgpKSB7XG4gICAgICAgICAgICByLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cyk7XG4gICAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuZnVuY3Rpb24gd2hlblByb21pc2UocHJlZGljYXRlLCBvcHRzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcilcbiAgICAgICAgcmV0dXJuIGZhaWwkJDEoXCJ0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRcIik7XG4gICAgdmFyIGNhbmNlbDtcbiAgICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGlzcG9zZXIgPSBfd2hlbihwcmVkaWNhdGUsIHJlc29sdmUsIF9fYXNzaWduKHt9LCBvcHRzLCB7IG9uRXJyb3I6IHJlamVjdCB9KSk7XG4gICAgICAgIGNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICAgICAgICByZWplY3QoXCJXSEVOX0NBTkNFTExFRFwiKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXMuY2FuY2VsID0gY2FuY2VsO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFkbSh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0WyRtb2J4JCQxXTtcbn1cbi8vIE9wdGltaXphdGlvbjogd2UgZG9uJ3QgbmVlZCB0aGUgaW50ZXJtZWRpYXRlIG9iamVjdHMgYW5kIGNvdWxkIGhhdmUgYSBjb21wbGV0ZWx5IGN1c3RvbSBhZG1pbmlzdHJhdGlvbiBmb3IgRHluYW1pY09iamVjdHMsXG4vLyBhbmQgc2tpcCBlaXRoZXIgdGhlIGludGVybmFsIHZhbHVlcyBtYXAsIG9yIHRoZSBiYXNlIG9iamVjdCB3aXRoIGl0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycyFcbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xuICAgIGhhczogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYngkJDEgfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiIHx8IG5hbWUgPT09IG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sJCQxKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcbiAgICAgICAgLy8gTVdFOiBzaG91bGQgYGluYCBvcGVyYXRvciBiZSByZWFjdGl2ZT8gSWYgbm90LCBiZWxvdyBjb2RlIHBhdGggd2lsbCBiZSBmYXN0ZXIgLyBtb3JlIG1lbW9yeSBlZmZpY2llbnRcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgcGVyZm9ybWFuY2Ugc3RhdHMhXG4gICAgICAgIC8vIGlmIChhZG0udmFsdWVzLmdldChuYW1lIGFzIHN0cmluZykpIHJldHVybiB0cnVlXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBhZG0uaGFzKG5hbWUpO1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0YXJnZXQ7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICRtb2J4JCQxIHx8IG5hbWUgPT09IFwiY29uc3RydWN0b3JcIiB8fCBuYW1lID09PSBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCQkMSlcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcbiAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSBhZG0udmFsdWVzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKG9ic2VydmFibGUkJDEgaW5zdGFuY2VvZiBBdG9tJCQxKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb2JzZXJ2YWJsZSQkMS5nZXQoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgZml4ZXMgIzE3OTYsIGJlY2F1c2UgZGVsZXRpbmcgYSBwcm9wIHRoYXQgaGFzIGFuXG4gICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIHZhbHVlIHdvbid0IHJldHJpZ2dlciBhIG9ic2VydmVyIChubyB2aXNpYmxlIGVmZmVjdCksXG4gICAgICAgICAgICAgICAgLy8gdGhlIGF1dG9ydW4gd291bGRuJ3Qgc3Vic2NyaWJlIHRvIGZ1dHVyZSBrZXkgY2hhbmdlcyAoc2VlIGFsc28gbmV4dCBjb21tZW50KVxuICAgICAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzdGFydCBsaXN0ZW5pbmcgdG8gZnV0dXJlIGtleXNcbiAgICAgICAgLy8gbm90ZSB0aGF0IHdlIG9ubHkgZG8gdGhpcyBoZXJlIGZvciBvcHRpbWl6YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgYWRtLmhhcyhuYW1lKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZXQkJDEodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIGFkbS5yZW1vdmUobmFtZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgb3duS2V5czogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIGFkbS5rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gICAgfSxcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmYWlsJCQxKFwiRHluYW1pYyBvYnNlcnZhYmxlIG9iamVjdHMgY2Fubm90IGJlIGZyb3plblwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCQkMShiYXNlKSB7XG4gICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGJhc2UsIG9iamVjdFByb3h5VHJhcHMpO1xuICAgIGJhc2VbJG1vYngkJDFdLnByb3h5ID0gcHJveHk7XG4gICAgcmV0dXJuIHByb3h5O1xufVxuXG5mdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMkJDEoaW50ZXJjZXB0YWJsZSkge1xuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yJCQxKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xuICAgIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZSQkMShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCQkMSgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycztcbiAgICAgICAgaWYgKGludGVyY2VwdG9ycylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCQkMSghY2hhbmdlIHx8IGNoYW5nZS50eXBlLCBcIkludGVyY2VwdCBoYW5kbGVycyBzaG91bGQgcmV0dXJuIG5vdGhpbmcgb3IgYSBjaGFuZ2Ugb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZCQkMShwcmV2VSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMkJDEobGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyJCQxKGxpc3RlbmFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgfHwgKGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzID0gW10pO1xuICAgIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycyQkMShsaXN0ZW5hYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCQkMSgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcbiAgICBpZiAoIWxpc3RlbmVycylcbiAgICAgICAgcmV0dXJuO1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oY2hhbmdlKTtcbiAgICB9XG4gICAgdW50cmFja2VkRW5kJCQxKHByZXZVKTtcbn1cblxudmFyIE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwOyAvLyBTZWUgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzg1OVxudmFyIGFycmF5VHJhcHMgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCQkMSlcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYngkJDFdO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIilcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYngkJDFdLmdldEFycmF5TGVuZ3RoKCk7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9ucy5nZXQuY2FsbCh0YXJnZXQsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnMuZ2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5RXh0ZW5zaW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgdGFyZ2V0WyRtb2J4JCQxXS5zZXRBcnJheUxlbmd0aCh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGFycmF5RXh0ZW5zaW9ucy5zZXQuY2FsbCh0YXJnZXQsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOYU4obmFtZSkpIHtcbiAgICAgICAgICAgIGFycmF5RXh0ZW5zaW9ucy5zZXQuY2FsbCh0YXJnZXQsIHBhcnNlSW50KG5hbWUpLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmYWlsJCQxKFwiT2JzZXJ2YWJsZSBhcnJheXMgY2Fubm90IGJlIGZyb3plblwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkkJDEoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgIGlmIChvd25lZCA9PT0gdm9pZCAwKSB7IG93bmVkID0gZmFsc2U7IH1cbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCk7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wJCQxKGFkbS52YWx1ZXMsICRtb2J4JCQxLCBhZG0pO1xuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShhZG0udmFsdWVzLCBhcnJheVRyYXBzKTtcbiAgICBhZG0ucHJveHkgPSBwcm94eTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlcyAmJiBpbml0aWFsVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQkJDEodHJ1ZSk7XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaW5pdGlhbFZhbHVlcyk7XG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kJCQxKHByZXYpO1xuICAgIH1cbiAgICByZXR1cm4gcHJveHk7XG59XG52YXIgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkKSB7XG4gICAgICAgIHRoaXMub3duZWQgPSBvd25lZDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm94eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQXRvbSQkMShuYW1lIHx8IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkJCQxKCkpO1xuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHsgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIG5hbWUgKyBcIlsuLl1cIik7IH07XG4gICAgfVxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmRlaGFuY2VWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzJCQxKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQgJiYgdmFsdWVzJCQxLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzJCQxLm1hcCh0aGlzLmRlaGFuY2VyKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyQkMTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvciQkMSh0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7IGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICBhZGRlZDogdGhpcy52YWx1ZXMuc2xpY2UoKSxcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiB0aGlzLnZhbHVlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogW10sXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lciQkMSh0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZ2V0QXJyYXlMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG5ld0xlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBuZXdMZW5ndGggPCAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnguYXJyYXldIE91dCBvZiByYW5nZTogXCIgKyBuZXdMZW5ndGgpO1xuICAgICAgICB2YXIgY3VycmVudExlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWxzZSBpZiAobmV3TGVuZ3RoID4gY3VycmVudExlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3IEFycmF5KG5ld0xlbmd0aCAtIGN1cnJlbnRMZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgbmV3SXRlbXNbaV0gPSB1bmRlZmluZWQ7IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXkoY3VycmVudExlbmd0aCwgMCwgbmV3SXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KG5ld0xlbmd0aCwgY3VycmVudExlbmd0aCAtIG5ld0xlbmd0aCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiAob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuXCIpO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCArPSBkZWx0YTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zcGxpY2VXaXRoQXJyYXkgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMSh0aGlzLmF0b20pO1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPiBsZW5ndGgpXG4gICAgICAgICAgICBpbmRleCA9IGxlbmd0aDtcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1heCgwLCBsZW5ndGggKyBpbmRleCk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGggLSBpbmRleDtcbiAgICAgICAgZWxzZSBpZiAoZGVsZXRlQ291bnQgPT09IHVuZGVmaW5lZCB8fCBkZWxldGVDb3VudCA9PT0gbnVsbClcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkZWxldGVDb3VudCwgbGVuZ3RoIC0gaW5kZXgpKTtcbiAgICAgICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBuZXdJdGVtcyA9IEVNUFRZX0FSUkFZJCQxO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiBkZWxldGVDb3VudCxcbiAgICAgICAgICAgICAgICBhZGRlZDogbmV3SXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVNUFRZX0FSUkFZJCQxO1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBjaGFuZ2UucmVtb3ZlZENvdW50O1xuICAgICAgICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3SXRlbXMgPSBuZXdJdGVtcy5sZW5ndGggPT09IDAgPyBuZXdJdGVtcyA6IG5ld0l0ZW1zLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMuZW5oYW5jZXIodiwgdW5kZWZpbmVkKTsgfSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBsZW5ndGhEZWx0YSA9IG5ld0l0ZW1zLmxlbmd0aCAtIGRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJheUxlbmd0aChsZW5ndGgsIGxlbmd0aERlbHRhKTsgLy8gY2hlY2tzIGlmIGludGVybmFsIGFycmF5IHdhc24ndCBtb2RpZmllZFxuICAgICAgICB9XG4gICAgICAgIHZhciByZXMgPSB0aGlzLnNwbGljZUl0ZW1zSW50b1ZhbHVlcyhpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICAgICAgaWYgKGRlbGV0ZUNvdW50ICE9PSAwIHx8IG5ld0l0ZW1zLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QXJyYXlTcGxpY2UoaW5kZXgsIG5ld0l0ZW1zLCByZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVzKHJlcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlSXRlbXNJbnRvVmFsdWVzID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy52YWx1ZXMpLnNwbGljZS5hcHBseShfYSwgX19zcHJlYWQoW2luZGV4LCBkZWxldGVDb3VudF0sIG5ld0l0ZW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcbiAgICAgICAgICAgICAgICAuY29uY2F0KG5ld0l0ZW1zLCB0aGlzLnZhbHVlcy5zbGljZShpbmRleCArIGRlbGV0ZUNvdW50KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZSA9IGZ1bmN0aW9uIChpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIC8vIFRoZSByZWFzb24gd2h5IHRoaXMgaXMgb24gcmlnaHQgaGFuZCBzaWRlIGhlcmUgKGFuZCBub3QgYWJvdmUpLCBpcyB0aGlzIHdheSB0aGUgdWdsaWZpZXIgd2lsbCBkcm9wIGl0LCBidXQgaXQgd29uJ3RcbiAgICAgICAgLy8gY2F1c2UgYW55IHJ1bnRpbWUgb3ZlcmhlYWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB3aXRob3V0IE5PREVfRU5WIHNldCwgdW5sZXNzIHNweWluZyBpcyBlbmFibGVkXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLmF0b20ubmFtZSB9KSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheVNwbGljZSA9IGZ1bmN0aW9uIChpbmRleCwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzJCQxKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogcmVtb3ZlZC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogYWRkZWQubGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLmF0b20ubmFtZSB9KSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uO1xufSgpKTtcbnZhciBhcnJheUV4dGVuc2lvbnMgPSB7XG4gICAgaW50ZXJjZXB0OiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpc1skbW9ieCQkMV0uaW50ZXJjZXB0KGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7IGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgcmV0dXJuIGFkbS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDApO1xuICAgIH0sXG4gICAgcmVwbGFjZTogZnVuY3Rpb24gKG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgYWRtLnZhbHVlcy5sZW5ndGgsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoaXMgYXJyYXkgYmFjayB0byBhIChzaGFsbG93KSBqYXZhc2NyaXB0IHN0cnVjdHVyZS5cbiAgICAgKiBGb3IgYSBkZWVwIGNsb25lIHVzZSBtb2J4LnRvSlNcbiAgICAgKi9cbiAgICB0b0pTOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKCk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICAgICAgICByZXR1cm4gdGhpcy50b0pTKCk7XG4gICAgfSxcbiAgICAvKlxuICAgICAqIGZ1bmN0aW9ucyB0aGF0IGRvIGFsdGVyIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCAoYmFzZWQgb24gbGliLmVzNi5kLnRzKVxuICAgICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqIEJlY2F1c2UgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wdXRlZCBmdW5jdGlvbixcbiAgICAgKiBhbmQgZm9yIHRoYXQgcmVhc29uIHRoZSBkbyBub3QgY2FsbCBkZXBlbmRlbmN5U3RhdGUubm90aWZ5T2JzZXJ2ZWRcbiAgICAgKi9cbiAgICBzcGxpY2U6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQpIHtcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdJdGVtc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIHNwbGljZVdpdGhBcnJheTogZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIHB1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShhZG0udmFsdWVzLmxlbmd0aCwgMCwgaXRlbXMpO1xuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XG4gICAgfSxcbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKE1hdGgubWF4KHRoaXNbJG1vYngkJDFdLnZhbHVlcy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gICAgfSxcbiAgICBzaGlmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgfSxcbiAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaXRlbXMpO1xuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHJldmVyc2UgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgICAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXG4gICAgICAgIC8vIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgZGVmYXVsdCBhbmQganVzdCBtYWtlIGl0IGFuIGRlcnZpdGF0aW9uXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LnJldmVyc2UoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBhcnJheSBpbiBwbGFjZS4gVXNlIGBvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5yZXZlcnNlKClgIHRvIHN1cHJlc3MgdGhpcyB3YXJuaW5nIGFuZCBwZXJmb3JtIHRoZSBvcGVyYXRpb24gb24gYSBjb3B5LCBvciBgb2JzZXJ2YWJsZUFycmF5LnJlcGxhY2Uob2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkucmV2ZXJzZSgpKWAgdG8gcmV2ZXJzZSAmIHVwZGF0ZSBpbiBwbGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5yZXZlcnNlLmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gKGNvbXBhcmVGbikge1xuICAgICAgICAvLyBzb3J0IGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAgICAgLy8gd2hpY2ggZ29lcyBhZ2FpbnN0IGFsbCBnb29kIHByYWN0aWNlcy4gTGV0J3Mgbm90IGNoYW5nZSB0aGUgYXJyYXkgaW4gcGxhY2UhXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LnNvcnQoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBhcnJheSBpbiBwbGFjZS4gVXNlIGBvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5zb3J0KClgIHRvIHN1cHJlc3MgdGhpcyB3YXJuaW5nIGFuZCBwZXJmb3JtIHRoZSBvcGVyYXRpb24gb24gYSBjb3B5LCBvciBgb2JzZXJ2YWJsZUFycmF5LnJlcGxhY2Uob2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpKWAgdG8gc29ydCAmIHVwZGF0ZSBpbiBwbGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5zb3J0LmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYngkJDFdO1xuICAgICAgICB2YXIgaWR4ID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcykuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4JCQxXTtcbiAgICAgICAgaWYgKGFkbSkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgYWRtLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uZGVoYW5jZVZhbHVlKGFkbS52YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIGFkbS52YWx1ZXMubGVuZ3RoICsgXCIpLiBQbGVhc2UgY2hlY2sgbGVuZ3RoIGZpcnN0LiBPdXQgb2YgYm91bmQgaW5kaWNlcyB3aWxsIG5vdCBiZSB0cmFja2VkIGJ5IE1vYlhcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIHZhciB2YWx1ZXMkJDEgPSBhZG0udmFsdWVzO1xuICAgICAgICBpZiAoaW5kZXggPCB2YWx1ZXMkJDEubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgYXQgaW5kZXggaW4gcmFuZ2VcbiAgICAgICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkJCQxKGFkbS5hdG9tKTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlcyQkMVtpbmRleF07XG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKGFkbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKGFkbSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlID0gYWRtLmVuaGFuY2VyKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzJCQxW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGFkbS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB2YWx1ZXMkJDEubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBhZGQgYSBuZXcgaXRlbVxuICAgICAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgdmFsdWVzJCQxLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuW1xuICAgIFwiY29uY2F0XCIsXG4gICAgXCJldmVyeVwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmb3JFYWNoXCIsXG4gICAgXCJpbmRleE9mXCIsXG4gICAgXCJqb2luXCIsXG4gICAgXCJsYXN0SW5kZXhPZlwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJyZWR1Y2VcIixcbiAgICBcInJlZHVjZVJpZ2h0XCIsXG4gICAgXCJzbGljZVwiLFxuICAgIFwic29tZVwiLFxuICAgIFwidG9TdHJpbmdcIixcbiAgICBcInRvTG9jYWxlU3RyaW5nXCJcbl0uZm9yRWFjaChmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICBhcnJheUV4dGVuc2lvbnNbZnVuY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieCQkMV07XG4gICAgICAgIGFkbS5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHZhciByZXMgPSBhZG0uZGVoYW5jZVZhbHVlcyhhZG0udmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHJlc1tmdW5jTmFtZV0uYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuICAgIH07XG59KTtcbnZhciBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSQkMShcIk9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uXCIsIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZUFycmF5JCQxKHRoaW5nKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0JCQxKHRoaW5nKSAmJiBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKHRoaW5nWyRtb2J4JCQxXSk7XG59XG5cbnZhciBfYTtcbnZhciBPYnNlcnZhYmxlTWFwTWFya2VyID0ge307XG4vLyBqdXN0IGV4dGVuZCBNYXA/IFNlZSBhbHNvIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL25lc3RoYXJ1cy8xM2I0ZDc0ZjJlZjRhMmY0MzU3ZGJkM2ZjMjNjMWU1NFxuLy8gQnV0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE1NTZcbnZhciBPYnNlcnZhYmxlTWFwJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVNYXAkJDEoaW5pdGlhbERhdGEsIGVuaGFuY2VyLCBuYW1lKSB7XG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyJCQxOyB9XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZU1hcEBcIiArIGdldE5leHRJZCQkMSgpOyB9XG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpc1tfYV0gPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xuICAgICAgICB0aGlzLl9rZXlzQXRvbSA9IGNyZWF0ZUF0b20kJDEodGhpcy5uYW1lICsgXCIua2V5cygpXCIpO1xuICAgICAgICB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gPSBcIk1hcFwiO1xuICAgICAgICBpZiAodHlwZW9mIE1hcCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4Lm1hcCByZXF1aXJlcyBNYXAgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L21hcC5qc1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9oYXNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWVyZ2UoaW5pdGlhbERhdGEpO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5faGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXMoa2V5KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc01hcC5oYXMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNNYXAuZ2V0KGtleSkuZ2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIGZhbHNlKS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBoYXNLZXkgPSB0aGlzLl9oYXMoa2V5KTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogaGFzS2V5ID8gXCJ1cGRhdGVcIiA6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oYXMoa2V5KSkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHRoaXMuX2RhdGEuZ2V0KGtleSkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gX3RoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5fdXBkYXRlSGFzTWFwRW50cnkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAvLyBvcHRpbWl6YXRpb247IGRvbid0IGZpbGwgdGhlIGhhc01hcCBpZiB3ZSBhcmUgbm90IG9ic2VydmluZywgb3IgcmVtb3ZlIGVudHJ5IGlmIHRoZXJlIGFyZSBubyBvYnNlcnZlcnMgYW55bW9yZVxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkuc2V0TmV3VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlJCQxKHZhbHVlLCByZWZlcmVuY2VFbmhhbmNlciQkMSwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9oYXNNYXAuc2V0KGtleSwgZW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLl91cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gdGhpcy5fZGF0YS5nZXQoa2V5KTtcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlJCQxLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUkJDEuVU5DSEFOR0VEKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkJCQxKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzJCQxKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZSQkMS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIG9ic2VydmFibGUkJDEuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5fYWRkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMSh0aGlzLl9rZXlzQXRvbSk7XG4gICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gbmV3IE9ic2VydmFibGVWYWx1ZSQkMShuZXdWYWx1ZSwgX3RoaXMuZW5oYW5jZXIsIF90aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpLCBmYWxzZSk7XG4gICAgICAgICAgICBfdGhpcy5fZGF0YS5zZXQoa2V5LCBvYnNlcnZhYmxlJCQxKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZSQkMS52YWx1ZTsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcbiAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIHRydWUpO1xuICAgICAgICAgICAgX3RoaXMuX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzJCQxKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhrZXkpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMuX2RhdGEuZ2V0KGtleSkuZ2V0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyQkMSA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwga2V5cyQkMS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmdldChrZXlzJCQxW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyQkMSA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwga2V5cyQkMS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXMkJDFbbmV4dEluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtrZXksIHNlbGYuZ2V0KGtleSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlWyhfYSA9ICRtb2J4JCQxLCBTeW1ib2wuaXRlcmF0b3IpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMShvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0JCQxKG90aGVyKSlcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCBvdGhlcltrZXldKTsgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG90aGVyKSlcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2TWFwJCQxKG90aGVyKSkge1xuICAgICAgICAgICAgICAgIGlmIChvdGhlci5jb25zdHJ1Y3RvciAhPT0gTWFwKVxuICAgICAgICAgICAgICAgICAgICBmYWlsJCQxKFwiQ2Fubm90IGluaXRpYWxpemUgZnJvbSBjbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIE1hcDogXCIgKyBvdGhlci5jb25zdHJ1Y3Rvci5uYW1lKTsgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG90aGVyICE9PSBudWxsICYmIG90aGVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbCQkMShcIkNhbm5vdCBpbml0aWFsaXplIG1hcCBmcm9tIFwiICsgb3RoZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW50cmFja2VkJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmtleXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWVzJCQxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGdyYWIgYWxsIHRoZSBrZXlzIHRoYXQgYXJlIHByZXNlbnQgaW4gdGhlIG5ldyBtYXAgYnV0IG5vdCBwcmVzZW50IGluIHRoZSBjdXJyZW50IG1hcFxuICAgICAgICAgICAgLy8gYW5kIGRlbGV0ZSB0aGVtIGZyb20gdGhlIG1hcCwgdGhlbiBtZXJnZSB0aGUgbmV3IG1hcFxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNhdXNlIHJlYWN0aW9ucyBvbmx5IG9uIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgICAgICB2YXIgbmV3S2V5cyA9IGdldE1hcExpa2VLZXlzJCQxKHZhbHVlcyQkMSk7XG4gICAgICAgICAgICB2YXIgb2xkS2V5cyA9IEFycmF5LmZyb20oX3RoaXMua2V5cygpKTtcbiAgICAgICAgICAgIHZhciBtaXNzaW5nS2V5cyA9IG9sZEtleXMuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBuZXdLZXlzLmluZGV4T2YoaykgPT09IC0xOyB9KTtcbiAgICAgICAgICAgIG1pc3NpbmdLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIF90aGlzLmRlbGV0ZShrKTsgfSk7XG4gICAgICAgICAgICBfdGhpcy5tZXJnZSh2YWx1ZXMkJDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwbGFpbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoaXMgbWFwLlxuICAgICAqIE5vdGUgdGhhdCBhbGwgdGhlIGtleXMgYmVpbmcgc3RyaW5naWZpZWQuXG4gICAgICogSWYgdGhlcmUgYXJlIGR1cGxpY2F0aW5nIGtleXMgYWZ0ZXIgY29udmVydGluZyB0aGVtIHRvIHN0cmluZ3MsIGJlaGF2aW91ciBpcyB1bmRldGVybWluZWQuXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUudG9QT0pPID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8zLCBfYTtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIGtleSA9IF9kWzBdLCB2YWx1ZSA9IF9kWzFdO1xuICAgICAgICAgICAgICAgIC8vIFdlIGxpZSBhYm91dCBzeW1ib2wga2V5IHR5cGVzIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE4NjNcbiAgICAgICAgICAgICAgICByZXNbdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IHN0cmluZ2lmeUtleShrZXkpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IG5vbiBvYnNlcnZhYmxlIG9iamVjdCBjbG9uZSBvZiB0aGlzIG1hcC5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIHZhbHVlcyBtaWd0aCBzdGlsbCBiZSBvYnNlcnZhYmxlLiBGb3IgYSBkZWVwIGNsb25lIHVzZSBtb2J4LnRvSlMuXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgcmV0dXJuIHRoaXMudG9QT0pPKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwJCQxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuICh0aGlzLm5hbWUgK1xuICAgICAgICAgICAgXCJbeyBcIiArXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMua2V5cygpKVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc3RyaW5naWZ5S2V5KGtleSkgKyBcIjogXCIgKyAoXCJcIiArIF90aGlzLmdldChrZXkpKTsgfSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpICtcbiAgICAgICAgICAgIFwiIH1dXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZU1hcCQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50JCQxKGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggbWFwcy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyJCQxKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAkJDEucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yJCQxKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVNYXAkJDE7XG59KCkpO1xuZnVuY3Rpb24gc3RyaW5naWZ5S2V5KGtleSkge1xuICAgIGlmIChrZXkgJiYga2V5LnRvU3RyaW5nKVxuICAgICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZyhrZXkpLnRvU3RyaW5nKCk7XG59XG4vKiAndmFyJyBmaXhlcyBzbWFsbC1idWlsZCBpc3N1ZSAqL1xudmFyIGlzT2JzZXJ2YWJsZU1hcCQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXAkJDEpO1xuXG52YXIgX2EkMTtcbnZhciBPYnNlcnZhYmxlU2V0TWFya2VyID0ge307XG52YXIgT2JzZXJ2YWJsZVNldCQkMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlU2V0JCQxKGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlciQkMTsgfVxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVTZXRAXCIgKyBnZXROZXh0SWQkJDEoKTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzW19hJDFdID0gT2JzZXJ2YWJsZVNldE1hcmtlcjtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fYXRvbSA9IGNyZWF0ZUF0b20kJDEodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJTZXRcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5zZXQgcmVxdWlyZXMgU2V0IHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9zZXQuanNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lKTsgfTtcbiAgICAgICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoaW5pdGlhbERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGVTZXQkJDEucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldCQkMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZCQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5fZGF0YS52YWx1ZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVTZXQkJDEucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVTZXQkJDEucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCQkMSh0aGlzLl9hdG9tKTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogaWRlYWxseSwgdmFsdWUgPSBjaGFuZ2UudmFsdWUgd291bGQgYmUgZG9uZSBoZXJlLCBzbyB0aGF0IHZhbHVlcyBjYW4gYmVcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgYnkgaW50ZXJjZXB0b3IuIFNhbWUgYXBwbGllcyBmb3Igb3RoZXIgU2V0IGFuZCBNYXAgYXBpJ3MuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uJCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5hZGQoX3RoaXMuZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0JCQxKGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyQkMSh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSQkMSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkJCQxKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzJCQxKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQkJDEoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24kJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXModGhpcy5kZWhhbmNlVmFsdWUodmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQkJDEucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyQkMSA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICB2YXIgdmFsdWVzJCQxID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcyQkMS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBba2V5cyQkMVtpbmRleF0sIHZhbHVlcyQkMVtpbmRleF1dLCBkb25lOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldCQkMS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG9ic2VydmFibGVWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuX2RhdGEudmFsdWVzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgb2JzZXJ2YWJsZVZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZShvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQkJDEob3RoZXIpKSB7XG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbiQkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2U2V0JCQxKG90aGVyKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIF90aGlzLmFkZCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZhaWwkJDEoXCJDYW5ub3QgaW5pdGlhbGl6ZSBzZXQgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldCQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIC8vIFRPRE8gJ2ZpcmVJbW1lZGlhdGVseScgY2FuIGJlIHRydWU/XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50JCQxKGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyJCQxKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQkJDEucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yJCQxKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldCQkMS5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0JCQxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiWyBcIiArIEFycmF5LmZyb20odGhpcykuam9pbihcIiwgXCIpICsgXCIgXVwiO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldCQkMS5wcm90b3R5cGVbKF9hJDEgPSAkbW9ieCQkMSwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVTZXQkJDE7XG59KCkpO1xudmFyIGlzT2JzZXJ2YWJsZVNldCQkMSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQkJDEpO1xuXG52YXIgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMSh0YXJnZXQsIHZhbHVlcyQkMSwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgICAgIGlmICh2YWx1ZXMkJDEgPT09IHZvaWQgMCkgeyB2YWx1ZXMkJDEgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzJCQxO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbmhhbmNlciA9IGRlZmF1bHRFbmhhbmNlcjtcbiAgICAgICAgdGhpcy5rZXlzQXRvbSA9IG5ldyBBdG9tJCQxKG5hbWUgKyBcIi5rZXlzXCIpO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKG9ic2VydmFibGUkJDEgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlJCQxKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlJCQxLnNldChuZXdWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50ZXJjZXB0XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnMkJDEodGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UkJDEodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlJCQxLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZSQkMS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMkJDEodGhpcyk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkJCQxKCk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlJCQxLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyQkMSh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kJCQxKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbWFwID0gdGhpcy5wZW5kaW5nS2V5cyB8fCAodGhpcy5wZW5kaW5nS2V5cyA9IG5ldyBNYXAoKSk7XG4gICAgICAgIHZhciBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBleGlzdHMgPSAhIXRoaXMudmFsdWVzLmdldChrZXkpO1xuICAgICAgICAgICAgLy8gUG9zc2libGUgb3B0aW1pemF0aW9uOiBEb24ndCBoYXZlIGEgc2VwYXJhdGUgbWFwIGZvciBub24gZXhpc3Rpbmcga2V5cyxcbiAgICAgICAgICAgIC8vIGJ1dCBzdG9yZSB0aGVtIGluIHRoZSB2YWx1ZXMgbWFwIGluc3RlYWQsIHVzaW5nIGEgc3BlY2lhbCBzeW1ib2wgdG8gZGVub3RlIFwibm90IGV4aXN0aW5nXCJcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZSQkMShleGlzdHMsIHJlZmVyZW5jZUVuaGFuY2VyJCQxLCB0aGlzLm5hbWUgKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCI/XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZ2V0KCk7IC8vIHJlYWQgdG8gc3Vic2NyaWJlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUuYWRkT2JzZXJ2YWJsZVByb3AgPSBmdW5jdGlvbiAocHJvcE5hbWUsIG5ld1ZhbHVlLCBlbmhhbmNlcikge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IHRoaXMuZGVmYXVsdEVuaGFuY2VyOyB9XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUkJDEodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnMkJDEodGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UkJDEodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9ic2VydmFibGUkJDEgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlJCQxKG5ld1ZhbHVlLCBlbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBwcm9wTmFtZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG9ic2VydmFibGUkJDEpO1xuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUkJDEudmFsdWU7IC8vIG9ic2VydmFibGVWYWx1ZSBtaWdodCBoYXZlIGNoYW5nZWQgaXRcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWckJDEocHJvcE5hbWUpKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKHByb3BOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLmFkZENvbXB1dGVkUHJvcCA9IGZ1bmN0aW9uIChwcm9wZXJ0eU93bmVyLCAvLyB3aGVyZSBpcyB0aGUgcHJvcGVydHkgZGVjbGFyZWQ/XG4gICAgcHJvcE5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5uYW1lICsgXCIuXCIgKyBwcm9wTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZXMuc2V0KHByb3BOYW1lLCBuZXcgQ29tcHV0ZWRWYWx1ZSQkMShvcHRpb25zKSk7XG4gICAgICAgIGlmIChwcm9wZXJ0eU93bmVyID09PSB0YXJnZXQgfHwgaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZSQkMShwcm9wZXJ0eU93bmVyLCBwcm9wTmFtZSkpXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcGVydHlPd25lciwgcHJvcE5hbWUsIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnJCQxKHByb3BOYW1lKSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlcy5oYXMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzJCQxKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlJCQxKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhcnRCYXRjaCQkMSgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQkJDEoKTtcbiAgICAgICAgICAgIHZhciBvbGRPYnNlcnZhYmxlID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuZ2V0KCk7XG4gICAgICAgICAgICBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuc2V0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAvLyBub3RpZnkga2V5IGFuZCBrZXlzZXQgbGlzdGVuZXJzXG4gICAgICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZ0tleXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgcHJvcFxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0W2tleV07XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCQkMShfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCQkMSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgZW5kQmF0Y2gkJDEoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5pbGxlZ2FsQWNjZXNzID0gZnVuY3Rpb24gKG93bmVyLCBwcm9wTmFtZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBoYXBwZW5zIGlmIGEgcHJvcGVydHkgaXMgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJvdG90eXBlIGNoYWluLCBidXQgdGhlIHByb3BlcnR5IHdhc1xuICAgICAgICAgKiBkZWNsYXJlZCBkaXJlY3RseSBhcyBvd24gcHJvcGVydHkgb24gdGhlIHByb3RvdHlwZS5cbiAgICAgICAgICpcbiAgICAgICAgICogRS5nLjpcbiAgICAgICAgICogY2xhc3MgQSB7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogZXh0ZW5kT2JzZXJ2YWJsZShBLnByb3RvdHlwZSwgeyB4OiAxIH0pXG4gICAgICAgICAqXG4gICAgICAgICAqIGNsYXNzQiBleHRlbnMgQSB7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogY29uc29sZS5sb2cobmV3IEIoKS54KVxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBpcyB1bmNsZWFyIHdoZXRoZXIgdGhlIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkICdzdGF0aWMnIG9yIGluaGVyaXRlZC5cbiAgICAgICAgICogRWl0aGVyIHVzZSBgY29uc29sZS5sb2coQS54KWBcbiAgICAgICAgICogb3I6IGRlY29yYXRlKEEsIHsgeDogb2JzZXJ2YWJsZSB9KVxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGRlY29yYXRlLCB0aGUgcHJvcGVydHkgd2lsbCBhbHdheXMgYmUgcmVkZWNsYXJlZCBhcyBvd24gcHJvcGVydHkgb24gdGhlIGFjdHVhbCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc29sZS53YXJuKFwiUHJvcGVydHkgJ1wiICsgcHJvcE5hbWUgKyBcIicgb2YgJ1wiICsgb3duZXIgKyBcIicgd2FzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbi4gVXNlICdkZWNvcmF0ZScgaW5zdGVhZCB0byBkZWNsYXJlIHRoZSBwcm9wIG9yIGFjY2VzcyBpdCBzdGF0aWNhbGx5IHRocm91Z2ggaXQncyBvd25lclwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xuICAgICAqL1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50JCQxKGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lciQkMSh0aGlzLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24kJDEucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yJCQxKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyQkMSh0aGlzKTtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCQkMSgpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGhpcy50YXJnZXQsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0JCQxKF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnMkJDEodGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQkJDEoKTtcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0tleXMpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMucGVuZGluZ0tleXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAoZW50cnkpXG4gICAgICAgICAgICAgICAgZW50cnkuc2V0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxLnByb3RvdHlwZS5nZXRLZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAvLyByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRoaXMudmFsdWVzKSBhcyBhbnlcbiAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLnZhbHVlcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBrZXkgPSBfZFswXSwgdmFsdWUgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlVmFsdWUkJDEpXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiQkMTtcbn0oKSk7XG5mdW5jdGlvbiBhc09ic2VydmFibGVPYmplY3QkJDEodGFyZ2V0LCBuYW1lLCBkZWZhdWx0RW5oYW5jZXIpIHtcbiAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlwiOyB9XG4gICAgaWYgKGRlZmF1bHRFbmhhbmNlciA9PT0gdm9pZCAwKSB7IGRlZmF1bHRFbmhhbmNlciA9IGRlZXBFbmhhbmNlciQkMTsgfVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCAkbW9ieCQkMSkpXG4gICAgICAgIHJldHVybiB0YXJnZXRbJG1vYngkJDFdO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICBpbnZhcmlhbnQkJDEoT2JqZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpLCBcIkNhbm5vdCBtYWtlIHRoZSBkZXNpZ25hdGVkIG9iamVjdCBvYnNlcnZhYmxlOyBpdCBpcyBub3QgZXh0ZW5zaWJsZVwiKTtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QkJDEodGFyZ2V0KSlcbiAgICAgICAgbmFtZSA9ICh0YXJnZXQuY29uc3RydWN0b3IubmFtZSB8fCBcIk9ic2VydmFibGVPYmplY3RcIikgKyBcIkBcIiArIGdldE5leHRJZCQkMSgpO1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgbmFtZSA9IFwiT2JzZXJ2YWJsZU9iamVjdEBcIiArIGdldE5leHRJZCQkMSgpO1xuICAgIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxKHRhcmdldCwgbmV3IE1hcCgpLCBuYW1lLCBkZWZhdWx0RW5oYW5jZXIpO1xuICAgIGFkZEhpZGRlblByb3AkJDEodGFyZ2V0LCAkbW9ieCQkMSwgYWRtKTtcbiAgICByZXR1cm4gYWRtO1xufVxudmFyIG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWckJDEocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1skbW9ieCQkMV0ucmVhZChwcm9wTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHRoaXNbJG1vYngkJDFdLndyaXRlKHByb3BOYW1lLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcihvd25lcikge1xuICAgIHZhciBhZG0gPSBvd25lclskbW9ieCQkMV07XG4gICAgaWYgKCFhZG0pIHtcbiAgICAgICAgLy8gYmVjYXVzZSBjb21wdXRlZCBwcm9wcyBhcmUgZGVjbGFyZWQgb24gcHJvdHksXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IGluc3RhbmNlIG1pZ2h0IG5vdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSQkMShvd25lcik7XG4gICAgICAgIHJldHVybiBvd25lclskbW9ieCQkMV07XG4gICAgfVxuICAgIHJldHVybiBhZG07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyQkMShwcm9wTmFtZSkge1xuICAgIHJldHVybiAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUkJDEoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uJCQxKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCQkMSh0aGluZykge1xuICAgIGlmIChpc09iamVjdCQkMSh0aGluZykpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGhpbmcpO1xuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYngkJDFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tJCQxKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5JCQxKHRoaW5nKSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4JCQxXS5hdG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQkJDEodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYngkJDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAkJDEodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBhbnlUaGluZy5fa2V5c0F0b207XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlJCQxKVxuICAgICAgICAgICAgICAgIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUkJDEodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGUkJDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGhpbmcpO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4JCQxXSlcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IHRoaW5nWyRtb2J4JCQxXS52YWx1ZXMuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSQkMSlcbiAgICAgICAgICAgICAgICBmYWlsJCQxKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIGdldERlYnVnTmFtZSQkMSh0aGluZykgKyBcIidcIik7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSQkMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBdG9tJCQxKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUkJDEodGhpbmcpIHx8IGlzUmVhY3Rpb24kJDEodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24kJDEodGhpbmdbJG1vYngkJDFdKSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieCQkMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhaWwkJDEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZywgcHJvcGVydHkpIHtcbiAgICBpZiAoIXRoaW5nKVxuICAgICAgICBmYWlsJCQxKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24kJDEoZ2V0QXRvbSQkMSh0aGluZywgcHJvcGVydHkpKTtcbiAgICBpZiAoaXNBdG9tJCQxKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUkJDEodGhpbmcpIHx8IGlzUmVhY3Rpb24kJDEodGhpbmcpKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCQkMSh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0JCQxKHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cbiAgICBpbml0aWFsaXplSW5zdGFuY2UkJDEodGhpbmcpO1xuICAgIGlmICh0aGluZ1skbW9ieCQkMV0pXG4gICAgICAgIHJldHVybiB0aGluZ1skbW9ieCQkMV07XG4gICAgZmFpbCQkMShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXREZWJ1Z05hbWUkJDEodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgdmFyIG5hbWVkO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBuYW1lZCA9IGdldEF0b20kJDEodGhpbmcsIHByb3BlcnR5KTtcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QkJDEodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCQkMSh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0JCQxKHRoaW5nKSlcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbiQkMSh0aGluZyk7XG4gICAgZWxzZVxuICAgICAgICBuYW1lZCA9IGdldEF0b20kJDEodGhpbmcpOyAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcbiAgICByZXR1cm4gbmFtZWQubmFtZTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbCQkMShhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xufVxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvNWMyMzdhN2M2ODJmYjY4ZmQ1Mzc4MjAzZjBiZjIyZGNlMTYyNDg1NC91bmRlcnNjb3JlLmpzI0wxMTg2LUwxMjg5XG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuZnVuY3Rpb24gZXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpXG4gICAgICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgaWYgKGEgIT09IGEpXG4gICAgICAgIHJldHVybiBiICE9PSBiO1xuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiICE9IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZGVlcEVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKTtcbn1cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5mdW5jdGlvbiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBhID0gdW53cmFwKGEpO1xuICAgIGIgPSB1bndyYXAoYik7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFJlZ0V4cF1cIjpcbiAgICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3RyaW5nXVwiOlxuICAgICAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYSA9PT0gXCJcIiArIGI7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcbiAgICAgICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgICAgIGlmICgrYSAhPT0gK2EpXG4gICAgICAgICAgICAgICAgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxuICAgICAgICBjYXNlIFwiW29iamVjdCBCb29sZWFuXVwiOlxuICAgICAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3ltYm9sXVwiOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC52YWx1ZU9mLmNhbGwoYSkgPT09IFN5bWJvbC52YWx1ZU9mLmNhbGwoYikpO1xuICAgIH1cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhICE9IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJlxuICAgICAgICAgICAgISh0eXBlb2YgYUN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgYkN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpICYmXG4gICAgICAgICAgICAoXCJjb25zdHJ1Y3RvclwiIGluIGEgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKVxuICAgICAgICAgICAgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgICB2YXIga2V5cyQkMSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICBsZW5ndGggPSBrZXlzJCQxLmxlbmd0aDtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgICAgICBrZXkgPSBrZXlzJCQxW2xlbmd0aF07XG4gICAgICAgICAgICBpZiAoIShoYXMkMShiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkkJDEoYSkpXG4gICAgICAgIHJldHVybiBhLnNsaWNlKCk7XG4gICAgaWYgKGlzRVM2TWFwJCQxKGEpIHx8IGlzT2JzZXJ2YWJsZU1hcCQkMShhKSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xuICAgIGlmIChpc0VTNlNldCQkMShhKSB8fCBpc09ic2VydmFibGVTZXQkJDEoYSkpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgICByZXR1cm4gYTtcbn1cbmZ1bmN0aW9uIGhhcyQxKGEsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IHNlbGY7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gc2VsZigpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcblRoZSBvbmx5IHJlYXNvbiBmb3IgdGhpcyBmaWxlIHRvIGV4aXN0IGlzIHB1cmUgaG9ycm9yOlxuV2l0aG91dCBpdCByb2xsdXAgY2FuIG1ha2UgdGhlIGJ1bmRsaW5nIGZhaWwgYXQgYW55IHBvaW50IGluIHRpbWU7IHdoZW4gaXQgcm9sbHMgdXAgdGhlIGZpbGVzIGluIHRoZSB3cm9uZyBvcmRlclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob3N0ZWQpLlxuV2l0aCB0aGlzIGZpbGUgdGhhdCB3aWxsIHN0aWxsIGhhcHBlbixcbmJ1dCBhdCBsZWFzdCBpbiB0aGlzIGZpbGUgd2UgY2FuIG1hZ2ljYWxseSByZW9yZGVyIHRoZSBpbXBvcnRzIHdpdGggdHJpYWwgYW5kIGVycm9yIHVudGlsIHRoZSBidWlsZCBzdWNjZWVkcyBhZ2Fpbi5cbiovXG5cbi8qKlxuICogKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE4XG4gKiBNSVQgTGljZW5zZWRcbiAqXG4gKiBXZWxjb21lIHRvIHRoZSBtb2J4IHNvdXJjZXMhIFRvIGdldCBhbiBnbG9iYWwgb3ZlcnZpZXcgb2YgaG93IE1vYlggaW50ZXJuYWxseSB3b3JrcyxcbiAqIHRoaXMgaXMgYSBnb29kIHBsYWNlIHRvIHN0YXJ0OlxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxuICpcbiAqIFNvdXJjZSBmb2xkZXJzOlxuICogPT09PT09PT09PT09PT09XG4gKlxuICogLSBhcGkvICAgICBNb3N0IG9mIHRoZSBwdWJsaWMgc3RhdGljIG1ldGhvZHMgZXhwb3NlZCBieSB0aGUgbW9kdWxlIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxuICogLSB0eXBlcy8gICBBbGwgdGhlIG1hZ2ljIHRoYXQgaXMgbmVlZCB0byBoYXZlIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCB2YWx1ZXMgaXMgaW4gdGhpcyBmb2xkZXIuIEluY2x1ZGluZyB0aGUgbW9kaWZpZXJzIGxpa2UgYGFzRmxhdGAuXG4gKiAtIHV0aWxzLyAgIFV0aWxpdHkgc3R1ZmYuXG4gKlxuICovXG5pZiAodHlwZW9mIFByb3h5ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9iWCA1KyByZXF1aXJlcyBQcm94eSBhbmQgU3ltYm9sIG9iamVjdHMuIElmIHlvdXIgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IFN5bWJvbCBvciBQcm94eSBvYmplY3RzLCBwbGVhc2UgZG93bmdyYWRlIHRvIE1vYlggNC4gRm9yIFJlYWN0IE5hdGl2ZSBBbmRyb2lkLCBjb25zaWRlciB1cGdyYWRpbmcgSlNDb3JlLlwiKTtcbn1cbnRyeSB7XG4gICAgLy8gZGVmaW5lIHByb2Nlc3MuZW52IGlmIG5lZWRlZFxuICAgIC8vIGlmIHRoaXMgaXMgbm90IGEgcHJvZHVjdGlvbiBidWlsZCBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICAvLyAoaW4gd2hpY2ggY2FzZSB0aGUgZXhwcmVzc2lvbiBiZWxvdyB3b3VsZCBiZSBzdWJzdGl0dXRlZCB3aXRoICdwcm9kdWN0aW9uJylcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbn1cbmNhdGNoIChlKSB7XG4gICAgdmFyIGcgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogZ2xvYmFsO1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgZy5wcm9jZXNzID0ge307XG4gICAgZy5wcm9jZXNzLmVudiA9IHt9O1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHRlc3RDb2RlTWluaWZpY2F0aW9uKCkgeyB9XG4gICAgaWYgKHRlc3RDb2RlTWluaWZpY2F0aW9uLm5hbWUgIT09IFwidGVzdENvZGVNaW5pZmljYXRpb25cIiAmJlxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuSUdOT1JFX01PQlhfTUlOSUZZX1dBUk5JTkcgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgLy8gVGVtcGxhdGUgbGl0ZXJhbChiYWNrdGljaykgaXMgdXNlZCBmb3IgZml4IGlzc3VlIHdpdGggcm9sbHVwLXBsdWdpbi1jb21tb25qcyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC1wbHVnaW4tY29tbW9uanMvaXNzdWVzLzM0NFxuICAgICAgICBcIlttb2J4XSB5b3UgYXJlIHJ1bm5pbmcgYSBtaW5pZmllZCBidWlsZCwgYnV0ICdwcm9jZXNzLmVudi5OT0RFX0VOVicgd2FzIG5vdCBzZXQgdG8gJ3Byb2R1Y3Rpb24nIGluIHlvdXIgYnVuZGxlci4gVGhpcyByZXN1bHRzIGluIGFuIHVubmVjZXNzYXJpbHkgbGFyZ2UgYW5kIHNsb3cgYnVuZGxlXCIpO1xuICAgIH1cbn0pKCk7XG4vLyBEZXZ0b29scyBzdXBwb3J0XG5pZiAodHlwZW9mIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xuICAgIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdE1vYngoe1xuICAgICAgICBzcHk6IHNweSQkMSxcbiAgICAgICAgZXh0cmFzOiB7XG4gICAgICAgICAgICBnZXREZWJ1Z05hbWU6IGdldERlYnVnTmFtZSQkMVxuICAgICAgICB9LFxuICAgICAgICAkbW9ieDogJG1vYngkJDFcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgUmVhY3Rpb24kJDEgYXMgUmVhY3Rpb24sIHVudHJhY2tlZCQkMSBhcyB1bnRyYWNrZWQsIElEZXJpdmF0aW9uU3RhdGUsIGNyZWF0ZUF0b20kJDEgYXMgY3JlYXRlQXRvbSwgc3B5JCQxIGFzIHNweSwgY29tcGFyZXIkJDEgYXMgY29tcGFyZXIsIGlzT2JzZXJ2YWJsZU9iamVjdCQkMSBhcyBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVZhbHVlJCQxIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSQkMSBhcyBpc09ic2VydmFibGVBcnJheSwgT2JzZXJ2YWJsZU1hcCQkMSBhcyBPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVNYXAkJDEgYXMgaXNPYnNlcnZhYmxlTWFwLCBPYnNlcnZhYmxlU2V0JCQxIGFzIE9ic2VydmFibGVTZXQsIGlzT2JzZXJ2YWJsZVNldCQkMSBhcyBpc09ic2VydmFibGVTZXQsIHRyYW5zYWN0aW9uJCQxIGFzIHRyYW5zYWN0aW9uLCBvYnNlcnZhYmxlJCQxIGFzIG9ic2VydmFibGUsIGNvbXB1dGVkJCQxIGFzIGNvbXB1dGVkLCBpc09ic2VydmFibGUkJDEgYXMgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVQcm9wJCQxIGFzIGlzT2JzZXJ2YWJsZVByb3AsIGlzQ29tcHV0ZWQkJDEgYXMgaXNDb21wdXRlZCwgaXNDb21wdXRlZFByb3AkJDEgYXMgaXNDb21wdXRlZFByb3AsIGV4dGVuZE9ic2VydmFibGUkJDEgYXMgZXh0ZW5kT2JzZXJ2YWJsZSwgb2JzZXJ2ZSQkMSBhcyBvYnNlcnZlLCBpbnRlcmNlcHQkJDEgYXMgaW50ZXJjZXB0LCBhdXRvcnVuJCQxIGFzIGF1dG9ydW4sIHJlYWN0aW9uJCQxIGFzIHJlYWN0aW9uLCB3aGVuJCQxIGFzIHdoZW4sIGFjdGlvbiQkMSBhcyBhY3Rpb24sIGlzQWN0aW9uJCQxIGFzIGlzQWN0aW9uLCBydW5JbkFjdGlvbiQkMSBhcyBydW5JbkFjdGlvbiwga2V5cyQkMSBhcyBrZXlzLCB2YWx1ZXMkJDEgYXMgdmFsdWVzLCBlbnRyaWVzJCQxIGFzIGVudHJpZXMsIHNldCQkMSBhcyBzZXQsIHJlbW92ZSQkMSBhcyByZW1vdmUsIGhhcyQkMSBhcyBoYXMsIGdldCQkMSBhcyBnZXQsIGRlY29yYXRlJCQxIGFzIGRlY29yYXRlLCBjb25maWd1cmUkJDEgYXMgY29uZmlndXJlLCBvbkJlY29tZU9ic2VydmVkJCQxIGFzIG9uQmVjb21lT2JzZXJ2ZWQsIG9uQmVjb21lVW5vYnNlcnZlZCQkMSBhcyBvbkJlY29tZVVub2JzZXJ2ZWQsIGZsb3ckJDEgYXMgZmxvdywgdG9KUyQkMSBhcyB0b0pTLCB0cmFjZSQkMSBhcyB0cmFjZSwgZ2V0RGVwZW5kZW5jeVRyZWUkJDEgYXMgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldE9ic2VydmVyVHJlZSQkMSBhcyBnZXRPYnNlcnZlclRyZWUsIHJlc2V0R2xvYmFsU3RhdGUkJDEgYXMgX3Jlc2V0R2xvYmFsU3RhdGUsIGdldEdsb2JhbFN0YXRlJCQxIGFzIF9nZXRHbG9iYWxTdGF0ZSwgZ2V0RGVidWdOYW1lJCQxIGFzIGdldERlYnVnTmFtZSwgZ2V0QXRvbSQkMSBhcyBnZXRBdG9tLCBnZXRBZG1pbmlzdHJhdGlvbiQkMSBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGFsbG93U3RhdGVDaGFuZ2VzJCQxIGFzIF9hbGxvd1N0YXRlQ2hhbmdlcywgYWxsb3dTdGF0ZUNoYW5nZXNJbnNpZGVDb21wdXRlZCQkMSBhcyBfYWxsb3dTdGF0ZUNoYW5nZXNJbnNpZGVDb21wdXRlZCwgaXNBcnJheUxpa2UkJDEgYXMgaXNBcnJheUxpa2UsICRtb2J4JCQxIGFzICRtb2J4LCBpc0NvbXB1dGluZ0Rlcml2YXRpb24kJDEgYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgb25SZWFjdGlvbkVycm9yJCQxIGFzIG9uUmVhY3Rpb25FcnJvciwgaW50ZXJjZXB0UmVhZHMkJDEgYXMgX2ludGVyY2VwdFJlYWRzIH07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gZnVuY3Rpb24gQW5pbWFsKCkge1xuXG4vLyB9XG5cbi8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFuaW1hbC5wcm90b3R5cGUsIHtcbi8vICAgICBuYW1lOiB7XG4vLyAgICAgICAgIHZhbHVlKCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICdBbmltYWx+J1xuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vICAgICBzYXk6IHtcbi8vICAgICAgICAgdmFsdWUoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gYEknbSAke3RoaXMubmFtZSgpfWBcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH0pXG5cbi8vIGZ1bmN0aW9uIERvZygpIHtcblxuLy8gfVxuXG4vLyBEb2cucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBbmltYWwucHJvdG90eXBlLCB7XG4vLyAgICAgY29uc3RydWN0b3I6IHtcbi8vICAgICAgICAgdmFsdWU6IERvZyxcbi8vICAgICAgICAgZW51bWVyYWJsZTogZmFsc2Vcbi8vICAgICB9LFxuLy8gICAgIG5hbWU6IHtcbi8vICAgICAgICAgdmFsdWUoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gJ0RvZ34nXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyhuZXcgRG9nKCkuc2F5KCkpXG4vLyBjb25zb2xlLmxvZyhEb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yKVxuXG5jbGFzcyBBbmltYWwge1xuICAgIG5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQW5pbWFsfidcbiAgICB9XG4gICAgc2F5KCkge1xuICAgICAgICByZXR1cm4gYEknbSAke3RoaXMubmFtZSgpfWBcbiAgICB9XG59XG5cbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XG4gICAgLy8g57G75bGe5oCn5oiQ5ZGY5a6a5LmJIHRyYW5zZm9ybS1jbGFzcy1wcm9wZXRpZXNcbiAgICBmb29kID0gJ2JvbmUnXG5cbiAgICBuYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0RvZ34nXG4gICAgfVxufVxuLy8gY29uc29sZS5sb2cobmV3IERvZygpIGluc3RhbmNlb2YgQW5pbWFsKVxuXG4vKipcbiAqIEBwYXJhbSB7Y2xhc3N9IHRhcmdldCDooqvkv67ppbDnmoTnsbtcbiAqL1xuZnVuY3Rpb24gbG9nKHRhcmdldCkge1xuICAgIC8vIOexu+S/rumlsOWxnuaAp1xuICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQucHJvdG90eXBlKVxuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkZXNjKSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkZXNjW2tleV0udmFsdWVcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3IgY2FsbGVkOjonLCBrZXkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZ1bmMuYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGNhbGxlZDo6Jywga2V5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtjbGFzc30gdGFyZ2V0IOexu+WunuS+i+WvueixoVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSDnsbvlsZ7mgKfmiJDlkZjlkI3np7BcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXNjcmlwdG9yIOivpeexu+WxnuaAp+aIkOWRmOaPj+i/sOesplxuICovXG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKVxuICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2NsYXNzfSB0YXJnZXQg57G75a6e5L6L5a+56LGhXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IOexu+aWueazleaIkOWRmOWQjeensFxuICogQHBhcmFtIHtvYmplY3R9IGRlc2NyaXB0b3Ig6K+l57G75pa55rOV5oiQ5ZGY5o+P6L+w56ymXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3QgZnVuYyA9IGRlc2NyaXB0b3IudmFsdWVcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBmb3IgKGxldCBudW0gb2YgYXJncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke251bX0gaXMgbm90IGEgbnVtYmVyIWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncylcbiAgICB9XG59XG5cbi8vIOexu+ijhemlsOWZqCB0cmFuc2Zvcm0tZGVjb3JhdG9ycy1sZWdhY3lcbkBsb2dcbmNsYXNzIE51bWJlcmljIHtcbiAgICAvLyDnsbvlsZ7mgKfmiJDlkZjoo4XppbDlmahcbiAgICBAcmVhZG9ubHkgUEkgPSAzLjE0MTU5MjZcblxuICAgIC8vIOexu+aWueazleaIkOWRmOijhemlsOWZqFxuICAgIEB2YWxpZGF0ZVxuICAgIGFkZCguLi5udW1zKSB7XG4gICAgICAgIHJldHVybiBudW1zLnJlZHVjZSgocCwgbikgPT4gcCArIG4sIDApXG4gICAgfVxufVxuXG5jb25zdCBudW0gPSBuZXcgTnVtYmVyaWMoKVxuLy8gbnVtLmFkZCgxLCAyLCAzKVxuLy8gbnVtLmFkZCgnMScsICcyJylcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhdXRvcnVuLCB3aGVuLCByZWFjdGlvbiwgYWN0aW9uLCBydW5JbkFjdGlvbiB9IGZyb20gJ21vYngnXG5cbmNsYXNzIFN0b3JlIHtcbiAgICBAb2JzZXJ2YWJsZSBhcnJheSA9IFsxLCAyLCAzLCA0XVxuICAgIEBvYnNlcnZhYmxlIG9iaiA9IHthOiAxfVxuICAgIEBvYnNlcnZhYmxlIG1hcCA9IG5ldyBNYXAoKVxuXG4gICAgQG9ic2VydmFibGUgbnVtID0gMTIzXG4gICAgQG9ic2VydmFibGUgc3RyID0gJ2FiYydcbiAgICBAb2JzZXJ2YWJsZSBib29sID0gdHJ1ZVxuXG4gICAgLy8g6K6h566X5bGe5oCnXG4gICAgQGNvbXB1dGVkIGdldCBtaXhlZCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuc3RyfS0ke3RoaXMubnVtfWBcbiAgICB9XG5cbiAgICAvLyDlr7nlj6/op4Llr5/mlbDmja7nmoTkv67mlLnvvIzlj6rop6blj5HkuIDmrKHlia/kvZznlKhcbiAgICBAYWN0aW9uIGJhcigpIHtcbiAgICAgICAgdGhpcy5zdHIgPSAnWm9ybydcbiAgICAgICAgdGhpcy5hcnJheSA9IFsxLCAyXVxuICAgIH1cblxuICAgIC8vIOe7keWumuS4iuS4i+aWh++8jOWPr+S7peWwhuaWueazleS9nOS4uuWPguaVsOS8oOmAklxuICAgIEBhY3Rpb24uYm91bmQgYm91bmRCYXIoKSB7XG4gICAgICAgIHRoaXMuc3RyID0gJ1pvcm8nXG4gICAgICAgIHRoaXMuYXJyYXkgPSBbMSwgMCwgMF1cbiAgICB9XG59XG5cbi8vIGNvbXB1dGVkXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpXG5jb25zdCBmb28gPSBjb21wdXRlZCgoKSA9PiBgY29tcHV0ZWQ6ICR7c3RvcmUubnVtfS0ke3N0b3JlLnN0cn1gKVxuLy8g5Z2a5oy65pWw5o2u5Y+Y5YyWXG4vLyBmb28ub2JzZXJ2ZShjaGFuZ2UgPT4gY29uc29sZS5sb2coY2hhbmdlKSlcbnN0b3JlLnN0ciA9ICdoaSdcbnN0b3JlLm51bSA9IDEwMFxuY29uc29sZS5sb2coZm9vLCBmb28uZ2V0KCkpXG5cbi8vIGF1dG9ydW4g5a+56K6h566X5bGe5oCn5oiW5Y+v6KeC5a+f5pWw5o2u77yM5Y+R55Sf5pS55Y+Y5pe25L2c5Ye65ZON5bqUXG4vLyBhdXRvcnVuKCgpID0+IGNvbnNvbGUubG9nKCdhdXRvcnVuOicsIHN0b3JlLm1peGVkKSlcbi8vIHN0b3JlLnN0ciA9ICdoae+9nidcbi8vIHN0b3JlLm51bSA9IDIwMFxuXG4vLyB3aGVuIOWPguaVsOS4uuS4pOS4quWHveaVsCwg56ys5LiA5Liq5Y+C5pWw55qE6L+U5Zue5YC8dHJ1ZSwg56ys5LqM5Liq5Ye95pWw5omn6KGMXG53aGVuKCgpID0+ICEhc3RvcmUuYm9vbCwgKCkgPT4gYHdoZW46IEl0J3MgdHJ1ZSFgKVxuc3RvcmUuYm9vbCA9IGZhbHNlXG5cbi8vIHJlYWN0aW9uIOWPguaVsOS4uuS4pOS4quWHveaVsCwg56ys5LiA5Liq5Y+C5pWw55qE6L+U5Zue5YC8LCDkvZzkuLrnrKzkuozkuKrlh73mlbDmiafooYzlj4LmlbBcbnJlYWN0aW9uKCgpID0+IFtzdG9yZS5hcnJheSwgc3RvcmUuc3RyXSwgYXJyID0+IGNvbnNvbGUubG9nKCdyZWFjdGlvbjonLCBhcnIuam9pbignOjonKSkpXG4vLyBzdG9yZS5hcnJheSA9IFsxLCAyLCAzXVxuLy8gc3RvcmUuc3RyID0gJ3pvcm8nXG5zdG9yZS5iYXIoKVxuXG5jb25zdCBib3VuZEJhciA9IHN0b3JlLmJvdW5kQmFyXG5ib3VuZEJhcigpXG5cbi8vIOesrOS4gOS4quiHquWumuS5ieWtl+espuS4suWPguaVsOWPr+mAie+8jOiwg+eUqOeri+WNs+aJp+ihjGFudGlvblxucnVuSW5BY3Rpb24oJ21vZGlmeScsICgpID0+IHtcbiAgICBzdG9yZS5zdHIgPSAnWm9yb28nXG4gICAgc3RvcmUuYXJyYXkgPSBbMSwgMSwgMV1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==