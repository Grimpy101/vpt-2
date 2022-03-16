import Scene from "./assets/Scene.js";
import Output from "./Output.js"

export default abstract class ProcessingElement {
    _output: Output;
    _scene: Scene;

    abstract execute(): Output;
    abstract toString(): string;
}