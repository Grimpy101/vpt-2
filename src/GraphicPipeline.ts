import ProcessingElement from "./ProcessingElement.js";
import Output from "./Output.js";

export default class GraphicPipeline {

    _isTransformDirty: boolean;
    _processingElement: ProcessingElement;

    execute(): Output {
        return this._processingElement.execute();
    }

    setTransformDirty() {
        this._isTransformDirty = true;
    }

    cleanTransform() {
        this._isTransformDirty = false;
    }
}