class table {
    constructor(number, status, seated) {
        this.number = number;
        this.status = status;
        this.people;
        this.section;
    }
    cycleStatus() {
        if(this.status === 'seated') {
            this.status = 'dirty';
        }
        else if(this.status === 'dirty') {
            this.status = 'clean';
        }
        else if(this.status === 'clean') {
            this.status = 'seated';
        }
    }
    checkStatus() {
        if(this.status == 'seated') {
            document.getElementById(this.number).style.backgroundColor = "grey";
        }
        else if (this.status == 'dirty') {
            document.getElementById(this.number).style.backgroundColor = "orange";
        }
        else  if (this.status == 'clean') {
            document.getElementById(this.number).style.backgroundColor = "white";
        }
    }
    getNumber() {
        return this.number;
    }
    getStatus() {
        return this.status;
    }
    getPeople() {
        return this.people;
    }
    getSection() {
        return this.section;
    }
    setNumber(number) {
        this.number = number;
    }
    setStatus(status) {
        this.status = status;
    }
    setPeople(people) {
        this.people = people;
    }
    setSection(section) {
        this.section = section;
    }
}