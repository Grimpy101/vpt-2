import Scene from "../assets/Scene.js";
import Output from "../Output.js";
import ProcessingElement from "../ProcessingElement.js";

export default class AssetManager implements ProcessingElement {
    _output: Output;
    _scene: Scene;
    _data: any;

    execute(): Output {
        return null;
    }

    toString(): string {
        return null;
    }
}