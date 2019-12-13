class School {
  constructor(name, level, numOfStudents) {
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numOfStudents() {
    return this._numOfStudents;
  }
  set numOfStudents(newNumOfStudents) {
    if (typeof newNumOfStudents === "number") {
      this._numOfStudents = newNumOfStudents;
    } else {
      return "Invalid input: numOfStudents must be set to a number";
    }
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numOfStudents} at the ${this._level} school level.`
    );
  }

  static pickSubTeacher(subTeachers) {
    let randPick = Math.floor(Math.random() * subTeachers.length - 1);
    return subTeachers[randPick];
  }
}

// Creating Primary School Class

class PrimarySchool extends School {
  constructor(name, numOfStudents, pickupPolicy) {
    super(name, "primary", numOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Creating High School Class

class HighSchool extends School {
  constructor(name, numOfStudents, sportsTeams) {
    super(name, "high", numOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}
// Creation of a Primary School

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian or a family member over the age of 16"
);

lorraineHansbury.quickFacts();
School.pickSubTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli"
]);

// Creation of a High School

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field"
]);

console.log(alSmith._sportsTeams);
