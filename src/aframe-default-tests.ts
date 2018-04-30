import aframe from 'aframe';
import { Geometry, MultiPropertySchema } from './aframe';

aframe.registerComponent('my-component', {
	defaultValue: 0,
	init() {
		this.data.num = this.defaultValue;
	}
});

interface TestGeometry extends Geometry {
	schema: MultiPropertySchema<{
		groupIndex: number;
	}>;
}

aframe.registerGeometry<TestGeometry>('my-geometry', {
	schema: {
		groupIndex: { default: 0 }
	},
	init(data) {
		this.geometry = new aframe.THREE.Geometry();
		const temp = data.groupIndex;
		temp;
	}
});
