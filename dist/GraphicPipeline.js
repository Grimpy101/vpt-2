"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GraphicPipeline {
    execute() {
        return this._processingElement.execute();
    }
    setTransformDirty() {
        this._isTransformDirty = true;
    }
    cleanTransform() {
        this._isTransformDirty = false;
    }
}
exports.default = GraphicPipeline;
//# sourceMappingURL=GraphicPipeline.js.map