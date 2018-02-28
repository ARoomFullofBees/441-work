//
HW-5


// PROBLEM 1

function Vector(x,y) {
  this.x = x;
  this.y = y;      
}

Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow (this.x, 2) + Math.pow(this.y, 2));
  }
});

console.log(new Vector(3, 4).length);

// PROBLEM 2

class Group {
    constructor() {
    this.unit = [];
  }

   add(val) {
    if (this.unit.includes (!val)); {
      this.unit.push (val);
    }
  }

  delete (val) {
    this.unit = this.unit.filter (n => n !== val);
  }

  has (val) {
    return this.unit.includes (val);
  }

  static from (entirety) {
    let group = new Group;
    for (let value of entirety) {
      group.add (value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));


// PROBLEM 3

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a,b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));


