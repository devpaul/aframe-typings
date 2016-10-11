// Type definitions for AFRAME v0.3.1
// Project: https://aframe.io/
// Definitions by: Paul Shannon <https://github.com/devpaul/aframe-typings>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AFrame {
	export type Coordinate = { x: number, y: number, z: number };

	interface DetailEventHandler<D> {
		(event: Event & { detail: D }): void;
	}

	export type PropertyTypes = 'array' | 'boolean' | 'color' | 'int' | 'number' | 'selector' |
		'selectorAll' | 'src' | 'string' | 'vec2' | 'vec3' | 'vec4';

	export interface Component {
		attrName?: string;
		data?: any;
		dependencies?: string[];
		el: Entity;
		id: string;
		multiple?: boolean;
		name: string;
		schema: { [key: string]: any };

		init(): void;
		update(oldData: any): void;
		remove(): void;
		tick?(time: number, timeDelta: number): void;
		play(): void;
		pause(): void;
		updateSchema?(): void;
		remove(): void;

		flushToDOM(): void;
		extendSchema(update: { [key: string]: any }): void;
	}

	export interface ComponentConstructor {
		new (el: Entity, name: string, id: string): Component;
	}

	export interface ComponentDefinition {
		dependencies?: string[];
		el?: Entity;
		id?: string;
		multiple?: boolean;
		schema?: { [key: string]: any };

		init?(): void;
		update?(oldData: any): void;
		remove?(): void;
		tick?(time: number, timeDelta: number): void;
		play?(): void;
		pause?(): void;
		updateSchema?(): void;
		remove?(): void;

		[ key: string ]: any;
	}

	export interface ComponentDescriptor {
		Component: Component;
		dependencies: string[] | null;
		multiple: boolean | null;

		// internal APIs
		// parse
		// parseAttrValueForCache
		// schema
		// stringify
		// type
		[ key: string ]: any;
	}

	export interface Entity extends Element {
		components: any;
		isPlaying: boolean;
		object3D: THREE.Object3D;
		object3DMap: { [key: string]: any };
		sceneEl?: Scene;

		addState(name: string): void;
		emit(name: string, detail?: any, bubbles?: boolean): void;
		flushToDOM(): void;
		getAttribute(attr: string): any;
		getComputedAttribute(attr: string): any;
		getObject3D(type: string): THREE.Object3D;
		getOrCreateObject3D(type: string, construct: any): THREE.Object3D;
		is(stateName: string): boolean;
		pause(): void;
		play(): void;
		setAttribute(attr: string, value: any, componentAttrValue?: any): void;
		setObject3D(type: string, obj: THREE.Object3D | null): void;
		removeAttribute(attr: string): void;
		removeObject3D(type: string): void;
		removeState(stateName: string): void;

		getAttribute(type: string): string | any;
		getAttribute(type: 'position'): Coordinate | null;
		getAttribute(type: 'rotation'): Coordinate | null;
		getAttribute(type: 'scale'): Coordinate | null;

		getComputedAttribute(type: string): any;
		getComputedAttribute(type: 'position'): Coordinate;
		getComputedAttribute(type: 'rotation'): Coordinate;
		getComputedAttribute(type: 'scale'): Coordinate;

		setAttribute(type: string, value: any): void;
		setAttribute(type: 'position', value: Coordinate): void;
		setAttribute(type: 'rotation', value: Coordinate): void;
		setAttribute(type: 'scale', value: Coordinate): void;

		addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
		addEventListener(type: 'child-attached', listener: DetailEventHandler<{ el: Element | Entity }>, useCapture?: boolean): void;
		addEventListener(type: 'componentchanged', listener: DetailEventHandler<{ name: string }>, useCapture?: boolean): void;
		addEventListener(type: 'componentremoved', listener: DetailEventHandler<{
			name: string,
			id: string,
			newData: any,
			oldData: any
		}>, useCapture?: boolean): void;
		addEventListener(name: 'loaded', handler: EventListener, useCapture?: boolean): void;
		addEventListener(name: 'pause', handler: EventListener, useCapture?: boolean): void;
		addEventListener(name: 'play', handler: EventListener, useCapture?: boolean): void;
		addEventListener(name: 'stateadded', handler: DetailEventHandler<{ state: string }>, useCapture?: boolean): void;
		addEventListener(name: 'stateremoved', handler: DetailEventHandler<{ state: string }>, useCapture?: boolean): void;
		addEventListener(name: 'schemachanged', handler: DetailEventHandler<{ componentName: string }>, useCapture?: boolean): void;
	}

	// TODO implement
	export interface System {
	}

	// TODO implement
	export interface Scene extends HTMLElement {
		hasLoaded: boolean;

		addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
		addEventListener(type: 'enter-vr', listener: EventListener, useCapture?: boolean): void;
		addEventListener(type: 'exit-vr', listener: EventListener, useCapture?: boolean): void;
		addEventListener(type: 'loaded', listener: EventListener, useCapture?: boolean): void;
		addEventListener(type: 'renderstart', listener: EventListener, useCapture?: boolean): void;
	}

	// TODO implement
	export interface ANode {

	}

	// TODO implement
	export interface Utils {
		coordinates: {
			parse(value: string): Coordinate;
			stringify(coord: Coordinate): string;
		};
	}

	export interface AframeFramework {
		AEntity: Entity;
		ANode: ANode; // TODO define
		AScene: Scene;
		components: { [ key: string ]: ComponentDescriptor };
		geometries: any; // TODO define?
		primitives: any; // TODO define?
		registerComponent(name: string, component: ComponentDefinition): ComponentConstructor;
		registerElement(name: string, element: ANode): void;
		registerGeometry(name: string, geometery: THREE.Geometry): void;
		registerPrimitive(name: string, primitive: any): void; // TODO cleanup
		schema: any; // TODO define
		shaders: any; // TODO define
		systems: { [key: string]: System }; // TODO define
		THREE: any;  // TODO cleanup
		TWEEN: any; // TODO global tween.js object
		utils: Utils;
		version: string;
	}
}

declare const AFRAME: AFrame.AframeFramework;
declare const hasNativeWebVRImplementation: boolean;
