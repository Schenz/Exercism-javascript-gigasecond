class Gigasecond {
    constructor(date) {
        this.dateValue = new Date(date);
    }

    date() {
        let d = new Date(this.dateValue);
        d.setSeconds(d.getSeconds() + 1000000000);
        return d;
    }
}

export default Gigasecond;