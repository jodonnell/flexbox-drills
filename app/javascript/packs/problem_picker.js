import Problem1 from './problems/problem1'
import Problem2 from './problems/problem2'

class ProblemPicker {
    constructor() {
        this.problems = [new Problem1(), new Problem2()]
    }

    getProblem() {
        return this.problems[Math.floor(Math.random() * this.problems.length)]
    }
}

export default ProblemPicker
