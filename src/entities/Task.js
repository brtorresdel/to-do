class Task {
    constructor(title, description, hasDeadline, deadline, observations){
        this.id = '';
        this.title = title;
        this.description = description;
        this.hasDeadline = hasDeadline;
        this.deadline = deadline;
        this.observations = observations;
        this.done = false
    }
 
    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getHasDeadLine() {
        return this.hasDeadline;
    }

    getDeadLine() {
        return this.deadline;
    }

    getObservations() {
        return this.observations;
    }

    settitle(ntitle) {
        this.title = ntitle; 
    }

    setDescription(nDescription) {
        this.description = nDescription;
    }

    setDeadline(nDeadline) {
        this.deadline = nDeadline;
        this.hasDeadline = true;
    }

    removeDeadline() {
        this.deadline = '';
        this.hasDeadline = false;
    }

    setObservations(nObservations) {
        this.observations = nObservations;
    }

    defineStatus() {
        if(!this.hasDeadline) {
            return 'Sem prazo';
        } else {
            let today = new Date();
            if(today < this.deadline) {
                return 'No prazo';
            } else {
                return 'Atrasada!';
            }
        }
    }
}