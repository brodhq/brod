export class ProjectError extends Error {
    constructor() {
        super()
        Object.setPrototypeOf(this, ProjectError.prototype)
    }
}
